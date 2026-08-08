"use client";

/**
 * /cafes — "Launch Timeline & Post-Launch Support" (2-column).
 *
 * Left: a vertical timeline stepper for the 3–5 day express build.
 * Right: the 6-month zero-headache support guarantee.
 * Same dark-slate world as the rest of the route (#0f172a / amber #d97706 /
 * emerald #059669). Framer Motion drives the stepper + card reveals, gated
 * behind prefers-reduced-motion.
 */

import { motion, useReducedMotion } from "framer-motion";
import {
  Coins,
  LayoutGrid,
  CreditCard,
  Rocket,
  Clock,
  LifeBuoy,
  RefreshCw,
  MapPin,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, margin: "-70px" } as const;

/* --------------------------------- content --------------------------------- */

interface Step {
  day: string;
  icon: typeof Coins;
  title: string;
  body: React.ReactNode;
}

const STEPS: Step[] = [
  {
    day: "Day 1",
    icon: Coins,
    title: "Token Deposit & Domain Registration",
    body: (
      <>
        <span className="font-semibold text-white">₹2,000</span> token deposit &
        your domain (<span className="font-mono text-amber-300">.in</span> /{" "}
        <span className="font-mono text-amber-300">.com</span>) registered. You
        receive the menu checklist to fill in.
      </>
    ),
  },
  {
    day: "Day 2–3",
    icon: LayoutGrid,
    title: "Web Storefront & Photo Menu Build",
    body: (
      <>
        Your mobile-first storefront comes to life — photo menu, categories, and
        pricing, all built for a sub-1-second load.
      </>
    ),
  },
  {
    day: "Day 4",
    icon: CreditCard,
    title: "Payments & Rider Dispatch Integration",
    body: (
      <>
        Payment gateway (
        <span className="font-semibold text-white">Razorpay / PhonePe</span>) and
        rider-dispatch API wired in and tested end-to-end.
      </>
    ),
  },
  {
    day: "Day 5",
    icon: Rocket,
    title: "Testing, Walkthrough & Go-Live 🚀",
    body: (
      <>
        Full testing, a live client walkthrough (
        <span className="font-semibold text-emerald-300">
          40% milestone payment
        </span>
        ), and your official go-live.
      </>
    ),
  },
];

interface Support {
  icon: typeof LifeBuoy;
  title: string;
  body: React.ReactNode;
}

const SUPPORT: Support[] = [
  {
    icon: LifeBuoy,
    title: "Full Technical Support",
    body: (
      <>
        Bug &amp; glitch fixes,{" "}
        <span className="font-semibold text-slate-200">99.9% uptime</span>{" "}
        monitoring, automatic SSL security renewal, and DNS health included.
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: "Free Menu & Price Updates",
    body: (
      <>
        Need to change a coffee price or add a seasonal drink? Updated free of
        charge{" "}
        <span className="font-semibold text-emerald-300">within 24 hours</span>.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Local Hyderabad Support",
    body: (
      <>
        Direct access to an{" "}
        <span className="font-semibold text-slate-200">
          IITian Full-Stack Engineer (Abhishek)
        </span>{" "}
        — not a queue-based customer-care ticket system.
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "100% Direct Domain Ownership",
    body: (
      <>
        Registered in your name. Even if you don&apos;t renew support, your
        domain remains{" "}
        <span className="font-semibold text-slate-200">100% yours forever</span>.
      </>
    ),
  },
];

/* --------------------------------- section --------------------------------- */

export default function TimelineSupportSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/5 bg-[#0b1220]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">
            Launch &amp; support
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Launch Timeline &amp; Post-Launch Support
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ---------------------- LEFT: timeline stepper --------------------- */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/15 text-amber-400 ring-1 ring-inset ring-amber-500/20">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                3–5 Day Express Delivery Timeline
              </h3>
            </div>

            {/* Vertical stepper */}
            <div className="relative mt-8 pl-9">
              {/* track */}
              <div
                className="absolute bottom-2 left-[15px] top-2 w-[3px] rounded-full bg-white/10"
                aria-hidden
              />
              {/* progress fill */}
              <motion.div
                className="absolute left-[15px] top-2 w-[3px] origin-top rounded-full bg-gradient-to-b from-amber-500 to-emerald-500"
                style={{ height: "calc(100% - 1rem)" }}
                initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={VP}
                transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                aria-hidden
              />

              <ol className="space-y-7">
                {STEPS.map(({ day, icon: Icon, title, body }, i) => {
                  const last = i === STEPS.length - 1;
                  return (
                    <motion.li
                      key={day}
                      className="relative"
                      initial={reduce ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{
                        delay: reduce ? 0 : 0.15 + i * 0.14,
                        duration: 0.5,
                        ease: EASE,
                      }}
                    >
                      {/* node */}
                      <span
                        className={
                          "absolute -left-9 grid h-8 w-8 place-items-center rounded-full border-2 border-[#0b1220] " +
                          (last
                            ? "bg-emerald-500 text-white shadow-[0_0_16px_rgba(16,185,129,0.5)]"
                            : "bg-amber-500 text-white shadow-[0_0_12px_rgba(217,119,6,0.4)]")
                        }
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <p
                        className={
                          "font-mono text-[11px] font-bold uppercase tracking-[0.16em] " +
                          (last ? "text-emerald-300" : "text-amber-400")
                        }
                      >
                        {day}
                      </p>
                      <h4 className="mt-1 font-bold leading-snug text-white">
                        {title}
                      </h4>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-400">
                        {body}
                      </p>
                    </motion.li>
                  );
                })}
              </ol>
            </div>

            {/* Note */}
            <p className="mt-7 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-3 text-[12.5px] leading-relaxed text-slate-400">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
              <span>
                Timeline clock begins upon receipt of final menu content and
                gateway credentials.
              </span>
            </p>
          </motion.div>

          {/* ---------------------- RIGHT: support guarantee ------------------- */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/[0.07] to-white/[0.02] p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                6-Month &ldquo;Zero-Headache&rdquo; Support Guarantee
              </h3>
            </div>

            {/* Banner badge */}
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-3 shadow-[0_0_22px_rgba(16,185,129,0.18)]">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                <span className="text-sm font-extrabold leading-none">₹0</span>
              </span>
              <span className="text-[14.5px] font-extrabold tracking-tight text-emerald-200">
                ₹0 Maintenance Fees for 6 Months
              </span>
            </div>

            {/* Items */}
            <ul className="mt-6 space-y-4">
              {SUPPORT.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-emerald-400 ring-1 ring-inset ring-white/10">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h4 className="font-bold leading-snug text-white">{title}</h4>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-slate-400">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
