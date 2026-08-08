"use client";

/**
 * /cafes — conversion landing page for Hyderabad cafe owners.
 *
 * Deliberately its OWN world: premium dark slate (#0f172a) with amber (#d97706)
 * + emerald (#059669) accents. This does NOT inherit the portfolio's light
 * "Console" theme — it's a standalone product pitch, so all colors are scoped
 * to this subtree via Tailwind arbitrary values.
 *
 * Pricing numbers below are sensible placeholders for the Hyderabad market —
 * edit PRICING to your real tiers.
 */

import {
  ArrowRight,
  MessageCircle,
  Check,
  GraduationCap,
  Timer,
  ShieldCheck,
  Percent,
  Store,
  MapPin,
  TrendingDown,
  Wallet,
  Sparkles,
} from "lucide-react";
import WhyInvestSection from "./WhyInvestSection";
import PricingSection from "./PricingSection";
import TimelineSupportSection from "./TimelineSupportSection";
import LegalTermsSection from "./LegalTermsSection";
import CafeFaqSection from "./CafeFaqSection";

/* --------------------------------- constants ------------------------------- */

const PHONE = "917424961513";
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Abhishek, I'd like a live demo for my cafe."
)}`;

const AREAS = [
  "Jubilee Hills",
  "Madhapur",
  "Banjara Hills",
  "Gachibowli",
  "Kondapur",
];

const BADGES = [
  { icon: GraduationCap, label: "IIT Alumnus Engineered" },
  { icon: Timer, label: "3–5 Days Turnaround" },
  { icon: ShieldCheck, label: "100% Money-Back Guarantee (3 Months)" },
  { icon: Percent, label: "0% Platform Commission" },
];

/* ------------------------------- interactions ------------------------------ */

function smoothTo(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(id);
    if (!el) return; // fall back to native anchor jump
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
}

/* ------------------------------ shared pieces ------------------------------ */

function PrimaryCTA({
  href,
  onClick,
  children,
  className = "",
}: {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        "group inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-amber-900/30 ring-1 ring-inset ring-white/10 transition-all hover:bg-[#b45309] hover:shadow-amber-900/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 active:scale-[0.98] " +
        className
      }
    >
      {children}
    </a>
  );
}

function WhatsAppCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-[15px] font-bold text-emerald-300 transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:scale-[0.98] " +
        className
      }
    >
      <MessageCircle className="h-4.5 w-4.5" />
      {className.includes("hidden-label") ? null : "Book Free 10-Min Demo"}
    </a>
  );
}

/* ---------------------------------- page ----------------------------------- */

export default function CafeLanding() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0f172a] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[#d97706] to-[#b45309] text-white shadow-lg shadow-amber-900/30">
              <Store className="h-4.5 w-4.5" />
            </span>
            <span className="text-[15px] font-extrabold tracking-tight text-white">
              OwnYour<span className="text-amber-500">Cafe</span>
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#pricing"
              onClick={smoothTo("pricing")}
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white sm:inline-flex"
            >
              Pricing
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3.5 py-2 text-sm font-bold text-emerald-300 ring-1 ring-inset ring-emerald-500/30 transition-colors hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Demo</span>
            </a>
          </div>
        </div>
      </header>

      {/* ================================ HERO ================================ */}
      <section id="top" className="relative overflow-hidden">
        {/* Ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 78% 8%, rgba(217,119,6,0.20), transparent 60%), radial-gradient(55% 50% at 12% 90%, rgba(5,150,105,0.16), transparent 60%)",
          }}
        />
        {/* Faint grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            {/* Copy column */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  For Hyderabad Cafes
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Stop Renting Your
                <br className="hidden sm:block" /> Cafe&apos;s Website.{" "}
                <span className="text-amber-400">OWN IT.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-300 sm:text-[17px]">
                <span className="font-semibold text-white">
                  Save over ₹80,000 in 3 Years!
                </span>{" "}
                Ditch 30% food-app commission fees and recurring SaaS
                software rent with a{" "}
                <span className="font-semibold text-amber-400">
                  sub-1-second, direct-ordering
                </span>{" "}
                mobile storefront.
              </p>

              {/* Trust badge pill bar */}
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {BADGES.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] font-semibold text-slate-200 backdrop-blur-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-amber-400" />
                    {label}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryCTA
                  href="#pricing"
                  onClick={smoothTo("pricing")}
                  className="w-full sm:w-auto"
                >
                  View Pricing Tiers
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </PrimaryCTA>
                <WhatsAppCTA className="w-full sm:w-auto" />
              </div>

              {/* Trust strip */}
              <div className="mt-8 flex items-start gap-2 border-t border-white/5 pt-6 text-[13px] text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <p className="font-medium">
                  Serving{" "}
                  {AREAS.map((a, i) => (
                    <span key={a}>
                      <span className="text-slate-200">{a}</span>
                      {i < AREAS.length - 1 ? " • " : ""}
                    </span>
                  ))}
                  , Hyderabad
                </p>
              </div>
            </div>

            {/* Visual column — phone storefront mock */}
            <div className="relative flex justify-center lg:justify-end">
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* ============================== SAVINGS =============================== */}
      <section className="relative border-t border-white/5 bg-[#0b1220]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">
              The math
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Renting bleeds you. Owning pays you back.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
              Every order through an aggregator skims up to 30% off the top —
              and the SaaS tools charge rent whether you sell or not. Here&apos;s
              the same cafe, two ways.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {/* Renting */}
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-rose-300">
                <TrendingDown className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  Renting
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-[14.5px] text-slate-300">
                {[
                  "Up to 30% commission on every single order",
                  "Recurring monthly SaaS “software rent”",
                  "Your customers belong to the platform",
                  "Buried under competitors in the app",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Owning */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-emerald-300">
                <Wallet className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  Owning
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-[14.5px] text-slate-200">
                {[
                  "0% platform commission — keep every rupee",
                  "One-time build, not endless rent",
                  "Your customers, your data, your list",
                  "A brand you control and can grow",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Big savings figure */}
          <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.08] to-transparent p-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                Estimated 3-year saving
              </p>
              <p className="mt-1.5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                ₹80,000<span className="text-amber-500">+</span>
              </p>
            </div>
            <PrimaryCTA href="#pricing" onClick={smoothTo("pricing")}>
              See how it pays for itself
              <ArrowRight className="h-4 w-4" />
            </PrimaryCTA>
          </div>
        </div>
      </section>

      {/* ========================= WHY / CALCULATOR ========================== */}
      <WhyInvestSection />

      {/* =============================== PRICING ============================== */}
      <PricingSection />

      {/* ========================= TIMELINE & SUPPORT ======================== */}
      <TimelineSupportSection />

      {/* ============================ SCOPE & LEGAL ========================== */}
      <LegalTermsSection />

      {/* ================================ FAQ ================================ */}
      <CafeFaqSection />

      {/* ============================== FINAL CTA ============================= */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#0b1220]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgba(217,119,6,0.16), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
              Free 10-minute demo
            </span>
          </div>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See your cafe&apos;s new storefront, live — before you pay a rupee.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
            Built by an IIT alumnus, shipped in 3–5 days, backed by a 3-month
            money-back guarantee. Message me and I&apos;ll walk you through it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppCTA />
            <PrimaryCTA href="#pricing" onClick={smoothTo("pricing")}>
              View Pricing Tiers
              <ArrowRight className="h-4 w-4" />
            </PrimaryCTA>
          </div>
        </div>
      </section>

      {/* =============================== FOOTER ============================== */}
      <footer className="border-t border-white/5 bg-[#0f172a]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#d97706] to-[#b45309] text-white">
                <Store className="h-4 w-4" />
              </span>
              <span className="text-sm font-extrabold tracking-tight text-white">
                OwnYour<span className="text-amber-500">Cafe</span>{" "}
                <span className="font-normal text-slate-500">
                  · by Abhishek Ranjan
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[12.5px] text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              {AREAS.join(" • ")}, Hyderabad
            </div>
          </div>
          <p className="mt-6 text-[12px] text-slate-600">
            © {new Date().getFullYear()} Abhishek Ranjan · Direct-ordering
            storefronts for cafes. 0% platform commission.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* --------------------------- phone storefront mock ------------------------- */

function PhoneMock() {
  return (
    <div className="relative w-full max-w-[300px]">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-amber-500/20 to-emerald-500/10 blur-2xl"
      />
      {/* device */}
      <div className="relative rounded-[2.4rem] border border-white/15 bg-[#0b1220] p-2.5 shadow-2xl shadow-black/60 ring-1 ring-inset ring-white/5">
        <div className="overflow-hidden rounded-[1.9rem] bg-[#0f172a]">
          {/* notch */}
          <div className="flex justify-center pt-2.5">
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
          </div>

          {/* app header */}
          <div className="flex items-center justify-between px-4 pb-3 pt-4">
            <div>
              <p className="text-[15px] font-extrabold leading-tight text-white">
                Brew &amp; Co.
              </p>
              <p className="mt-0.5 flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open
                now
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-300">
              <Percent className="h-2.5 w-2.5" /> 0% fees
            </span>
          </div>

          {/* menu items */}
          <div className="space-y-2 px-3.5">
            {[
              { n: "Cold Brew", p: "180", accent: true },
              { n: "Avocado Toast", p: "260", accent: false },
              { n: "Cheesecake", p: "220", accent: false },
            ].map((item) => (
              <div
                key={item.n}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-2.5"
              >
                <div
                  className={
                    "h-10 w-10 shrink-0 rounded-lg " +
                    (item.accent
                      ? "bg-gradient-to-br from-amber-500/40 to-amber-700/30"
                      : "bg-gradient-to-br from-slate-600/40 to-slate-700/30")
                  }
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-bold text-white">
                    {item.n}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400">
                    ₹{item.p}
                  </p>
                </div>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#d97706] text-white">
                  <span className="text-base font-bold leading-none">+</span>
                </span>
              </div>
            ))}
          </div>

          {/* order bar */}
          <div className="p-3.5 pt-3">
            <div className="flex items-center justify-between rounded-xl bg-emerald-500 px-4 py-3 text-white shadow-lg shadow-emerald-900/40">
              <span className="text-[12.5px] font-extrabold">Order Direct</span>
              <span className="flex items-center gap-1 text-[12.5px] font-bold">
                ₹180 <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-widest text-slate-500">
              Loaded in 0.8s · No app needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
