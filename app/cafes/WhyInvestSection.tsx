"use client";

/**
 * /cafes — "Why This Is Your Smartest Investment".
 *
 * Interactive commission-savings calculator + three feature cards. Lives in the
 * same dark-slate world as CafeLanding (#0f172a / amber #d97706 / emerald
 * #059669). Framer Motion drives subtle hover lift on the cards; all motion is
 * gated behind prefers-reduced-motion.
 */

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingDown,
  Lock,
  Smartphone,
  Percent,
  Wallet,
  Sparkles,
} from "lucide-react";

/* --------------------------------- helpers --------------------------------- */

// Indian digit grouping (lakh / crore) without decimals.
const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.max(0, Math.round(n))
  );

const MIN = 20_000;
const MAX = 600_000;
const STEP = 10_000;
const DEFAULT = 200_000;
const GATEWAY_MDR = 1_500; // monthly payment-gateway cost on the direct route

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, margin: "-70px" } as const;

/* --------------------------------- cards ----------------------------------- */

interface Feature {
  n: string;
  icon: typeof TrendingDown;
  title: string;
  body: React.ReactNode;
  bottomLine?: string;
}

const FEATURES: Feature[] = [
  {
    n: "01",
    icon: TrendingDown,
    title: "Stop the 30% Margin Bleed & Own Your Asset",
    body: (
      <>
        Stop giving away 25%–30% of every order on repeat local customers.
        Direct UPI payments{" "}
        <span className="font-semibold text-slate-200">
          (Razorpay / PhonePe)
        </span>{" "}
        settle instantly into your bank account.
      </>
    ),
    bottomLine: "On a ₹1,000 order, keep the full ₹1,000 — not ₹700.",
  },
  {
    n: "02",
    icon: Lock,
    title: "Escape the SaaS Subscription Trap",
    body: (
      <>
        Stop paying recurring monthly/yearly software rent. Pay once{" "}
        <span className="font-semibold text-slate-200">(₹18,000 – ₹20,000)</span>
        , save over{" "}
        <span className="font-semibold text-emerald-300">₹80,000 in 3 years</span>
        , and own your website code permanently.
      </>
    ),
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Fix Your Instagram Link-in-Bio",
    body: (
      <>
        Ditch slow 15MB Google Drive PDF menus or food-app links showing{" "}
        <span className="font-semibold text-slate-200">competitor ads</span>.
        Give visitors a{" "}
        <span className="font-semibold text-amber-400">
          sub-1-second mobile photo menu
        </span>{" "}
        with 1-tap WhatsApp ordering.
      </>
    ),
  },
];

/* --------------------------------- section --------------------------------- */

export default function WhyInvestSection() {
  const reduce = useReducedMotion();
  const [revenue, setRevenue] = useState(DEFAULT);

  const { aggregatorMonthly, yearlySavings } = useMemo(() => {
    const aggregatorMonthly = revenue * 0.3;
    const yearlySavings = (aggregatorMonthly - GATEWAY_MDR) * 12;
    return { aggregatorMonthly, yearlySavings };
  }, [revenue]);

  // slider fill percentage for the amber track
  const pct = ((revenue - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="relative border-t border-white/5 bg-[#0b1220]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
              Run the numbers
            </span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why This Is Your Smartest Investment
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Drag the slider to your own repeat-order revenue and watch what the
            aggregators quietly take — versus what a storefront you own lets you
            keep.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          {/* Slider */}
          <label htmlFor="rev" className="block">
            <span className="text-[13px] font-semibold text-slate-300">
              Average Monthly Delivery Revenue from Repeat Customers
            </span>
            <span className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-white sm:text-3xl">
                ₹{inr(revenue)}
              </span>
              <span className="text-[13px] font-medium text-slate-500">
                / month
              </span>
            </span>
          </label>

          <input
            id="rev"
            type="range"
            min={MIN}
            max={MAX}
            step={STEP}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            aria-valuetext={`₹${inr(revenue)} per month`}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 outline-none accent-[#d97706] focus-visible:ring-2 focus-visible:ring-amber-400/60 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[#d97706] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[#d97706] [&::-webkit-slider-thumb]:shadow-md"
            style={{
              background: `linear-gradient(to right, #d97706 ${pct}%, rgba(255,255,255,0.10) ${pct}%)`,
            }}
          />
          <div className="mt-1.5 flex justify-between font-mono text-[10.5px] uppercase tracking-widest text-slate-500">
            <span>₹20K</span>
            <span>₹6L</span>
          </div>

          {/* Two comparison cards */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {/* Aggregator cut */}
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.05] p-5">
              <div className="flex items-center gap-2 text-rose-300">
                <TrendingDown className="h-4 w-4" />
                <span className="text-[12.5px] font-bold">
                  Aggregator Cut (30%)
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-rose-200 sm:text-3xl">
                – ₹{inr(aggregatorMonthly)}
              </p>
              <p className="mt-1 text-[12px] text-slate-400">
                Skimmed off the top, every month.
              </p>
            </div>

            {/* Direct cut */}
            <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5">
              <div className="flex items-center gap-2 text-emerald-300">
                <Percent className="h-4 w-4" />
                <span className="text-[12.5px] font-bold">
                  Your Direct Storefront Cut (0%)
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-emerald-200 sm:text-3xl">
                ₹{inr(revenue)}
              </p>
              <p className="mt-1 text-[12px] text-slate-400">
                100% retained — it&apos;s all yours.
              </p>
            </div>
          </div>

          {/* Net yearly savings highlight */}
          <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/[0.12] to-emerald-500/[0.06] p-5 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/20 text-amber-300">
                <Wallet className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Net Yearly Savings
                </p>
                <p className="text-[12px] text-slate-400">
                  After a ₹1,500/mo payment-gateway fee.
                </p>
              </div>
            </div>
            <p
              aria-live="polite"
              className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              ₹{inr(yearlySavings)}
            </p>
          </div>
        </motion.div>

        {/* Three feature cards */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {FEATURES.map(({ n, icon: Icon, title, body, bottomLine }, i) => (
            <motion.div
              key={n}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: EASE, delay: 0.08 * i }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-amber-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/12 text-amber-400 ring-1 ring-inset ring-amber-500/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm font-bold text-slate-600 transition-colors group-hover:text-amber-500/70">
                  {n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold leading-snug tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                {body}
              </p>
              {bottomLine && (
                <div className="mt-auto pt-5">
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-3">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      Bottom line
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-emerald-200">
                      {bottomLine}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
