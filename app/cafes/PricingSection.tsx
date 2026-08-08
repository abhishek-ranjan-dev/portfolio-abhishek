"use client";

/**
 * /cafes — "Choose Your Digital Storefront Package" pricing.
 *
 * shadcn/ui is NOT installed in this repo (Tailwind v4 + a bespoke dark theme),
 * so the Card primitives below are shadcn-style components — same composition
 * API (Card / CardHeader / CardContent / CardFooter), themed for this route's
 * dark-slate world (#0f172a, amber #d97706, emerald #059669). Tier 2 is the
 * emerald-highlighted "most popular" tier per spec.
 */

import { motion, useReducedMotion } from "framer-motion";
import { Check, Star, ShieldCheck, ArrowRight, Gift } from "lucide-react";

/* --------------------------- shadcn-style primitives ----------------------- */

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "flex h-full flex-col rounded-2xl border bg-white/[0.03] text-slate-100 shadow-sm " +
        className
      }
    >
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5 p-6 pb-4">{children}</div>;
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 px-6 pb-2">{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="p-6 pt-4">{children}</div>;
}

/* --------------------------------- content --------------------------------- */

const PHONE = "917424961513";
const waTier = (tier: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Hi Abhishek, I'd like the ${tier} tier for my cafe.`
  )}`;

interface Tier {
  tag: string;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  bonus: { kit: string; value: string };
  cta: string;
  featured: boolean;
}

const TIERS: Tier[] = [
  {
    tag: "Tier 1",
    name: "Essential",
    price: "₹10,000",
    tagline: "Ideal for new cafes wanting a simple online presence",
    features: [
      "Beautiful multi-page website (2–3 pages)",
      "Mobile-responsive, sub-1-second design",
      "QR scanner menu display with photos",
      "Configurable menu with categories",
      "Google Maps integration",
      "WhatsApp chat button",
      "Live events update on website",
    ],
    bonus: { kit: "5 QR standees + 10 stickers", value: "₹700" },
    cta: "Select Essential Tier",
    featured: false,
  },
  {
    tag: "Tier 2",
    name: "Express",
    price: "₹18,000 – ₹20,000",
    tagline: "Ideal for growing cafes wanting to stand out",
    features: [
      "Includes full Tier-1 essential package",
      "0% commission direct-ordering menu",
      "Integrated UPI Pay (Razorpay/PhonePe) & auto rider dispatch (Dunzo/Porter)",
      "Live order tracking link",
      "100% upgrade credit toward Tier 3 anytime",
    ],
    bonus: {
      kit: "10 standees, 20 stickers + 100 A5 pamphlets",
      value: "₹2,910",
    },
    cta: "Select Express Tier",
    featured: true,
  },
  {
    tag: "Tier 3",
    name: "Growth",
    price: "₹30,000 – ₹35,000",
    tagline: "Ideal for established cafes ready to scale digitally",
    features: [
      "Includes full Tier-2 express package",
      "Custom website (5–10 pages + blog & events)",
      "Online table reservation & venue inquiries",
      "Advanced local SEO & traffic analytics",
      "Email capture & newsletter integration",
    ],
    bonus: {
      kit: "20 standees, 40 stickers + 300 pamphlets",
      value: "₹5,800",
    },
    cta: "Select Growth Tier",
    featured: false,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, margin: "-70px" } as const;

/* --------------------------------- section --------------------------------- */

export default function PricingSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 border-t border-white/5"
    >
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
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Choose Your Digital Storefront Package
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            One-time build, zero platform commission, forever yours. Every tier
            ships in 3–5 days and is covered by the 3-month money-back guarantee.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: EASE, delay: 0.08 * i }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="h-full"
            >
              <Card
                className={
                  "transition-colors duration-300 " +
                  (tier.featured
                    ? "border-emerald-500 bg-gradient-to-b from-emerald-500/[0.10] to-white/[0.02] shadow-2xl shadow-emerald-900/30 ring-1 ring-emerald-500/40"
                    : "border-white/10 hover:border-white/25")
                }
              >
                <CardHeader>
                  {/* Badge row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        "font-mono text-[11px] font-bold uppercase tracking-[0.16em] " +
                        (tier.featured ? "text-emerald-300" : "text-slate-400")
                      }
                    >
                      {tier.tag}
                    </span>
                    {tier.featured && (
                      <span className="relative inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_18px_rgba(16,185,129,0.55)]">
                        <Star className="h-3 w-3 fill-white" />
                        Best Value
                      </span>
                    )}
                  </div>

                  <h3 className="mt-1 text-xl font-extrabold uppercase tracking-tight text-white">
                    {tier.name}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-slate-400">
                    {tier.tagline}
                  </p>

                  <div className="mt-3">
                    <div className="text-2xl font-extrabold leading-[1.15] tracking-tight text-white">
                      {tier.price}
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      one-time
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div
                    className={
                      "mb-4 h-px w-full " +
                      (tier.featured ? "bg-emerald-500/25" : "bg-white/10")
                    }
                  />
                  <ul className="space-y-3">
                    {tier.features.map((f, fi) => {
                      const isIncludes = f.startsWith("Includes");
                      return (
                        <li
                          key={f}
                          className={
                            "flex gap-2.5 text-[14px] " +
                            (isIncludes
                              ? "font-semibold text-white"
                              : "text-slate-300")
                          }
                        >
                          <span
                            className={
                              "mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full " +
                              (tier.featured
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-emerald-500/12 text-emerald-400")
                            }
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                          {isIncludes && fi === 0 && (
                            <span className="sr-only"> (all lower-tier features)</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  {/* Included bonus — physical print kit */}
                  <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/[0.07] p-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        <Gift className="h-3.5 w-3.5" />
                        Free bonus
                      </span>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-400/90">
                        up to {tier.bonus.value} value*
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] font-semibold leading-snug text-white">
                      Physical print kit —{" "}
                      <span className="font-medium text-slate-300">
                        {tier.bonus.kit}
                      </span>
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <a
                    href={waTier(tier.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
                      (tier.featured
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 hover:bg-emerald-600 focus-visible:outline-emerald-400"
                        : "border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-white/40")
                    }
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bonus value disclaimer */}
        <p className="mt-4 text-center text-[11.5px] leading-relaxed text-slate-500">
          *Bonus print-kit values are indicative ceilings ("up to") and may be
          lower; actual value varies. Print kits are provided as a complimentary
          add-on and carry no separate cash value.
        </p>

        {/* Guarantees footer banner */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-8 flex flex-col items-center gap-5 rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-500/[0.10] via-transparent to-emerald-500/[0.08] p-6 text-center sm:flex-row sm:p-7 sm:text-left"
        >
          {/* Stamp badge */}
          <div className="shrink-0 -rotate-3">
            <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-dashed border-emerald-400/70 bg-emerald-500/10 text-center shadow-[0_0_24px_rgba(16,185,129,0.25)]">
              <div>
                <ShieldCheck className="mx-auto h-5 w-5 text-emerald-300" />
                <p className="mt-0.5 font-mono text-[8px] font-bold uppercase leading-tight tracking-wider text-emerald-200">
                  Full
                  <br />
                  Refund
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              100% Money-Back Guarantee
            </p>
            <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-slate-300">
              <span className="font-semibold text-amber-300">*</span>Valid for 3
              full months starting from the time your website goes live. No
              questions asked — get a full refund.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
