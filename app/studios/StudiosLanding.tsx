"use client";

/**
 * /studios — partnership pitch for boutique design studios.
 *
 * Deliberately its OWN world, distinct from the light "Console" portfolio and
 * from the amber /cafes product page: near-black, minimal, editorial. One warm
 * signal-orange accent (#e0531d, borrowed from the site's brand) carries all
 * emphasis; everything else is off-white on black with hairline rules. All
 * colors are scoped to this subtree via Tailwind arbitrary values.
 *
 * Fonts inherit the root layout: Archivo (default sans) for display, Martian
 * Mono (`font-mono`) for engraved eyebrows and figures.
 */

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  CalendarCheck,
  Check,
  Minus,
  GitPullRequest,
  MessageSquare,
  Video,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

/* --------------------------------- constants ------------------------------- */

const EMAIL = "a.ranjan.tech@gmail.com";
const CAPABILITIES_PDF = "/abhishek-ranjan-capabilities.pdf";

const SCOPING_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Sprint Scoping — Studio Partnership"
)}&body=${encodeURIComponent(
  "Hi Abhishek,\n\nWe're a design studio with an upcoming build. A quick scope:\n\n• Figma link:\n• Timeline:\n• Scope (auth / payments / CMS / integrations):\n\nThanks,"
)}`;

const BRIEF_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Figma Build — Studio Brief"
)}`;

/* Three pillars — the value proposition, verbatim from the brief. */
const PILLARS = [
  {
    n: "01",
    Icon: Layers,
    title: "Design-Fidelity Without Compromise",
    body: "Micro-interactions, fluid type, and pixel-for-pixel Figma translation. Your design system reaches production exactly as drawn — no “close enough,” no flattened states.",
  },
  {
    n: "02",
    Icon: ShieldCheck,
    title: "Enterprise Architectural Rigor",
    body: "Next.js 15, strict TypeScript, Supabase PostgreSQL with row-level security, and idempotent Stripe webhooks. The same discipline that ships at New Relic scale, applied to your build.",
  },
  {
    n: "03",
    Icon: Zap,
    title: "Zero-Overhead Async Delivery",
    body: "GitHub PRs, a private Slack channel, and 2-minute Loom walkthroughs. No impromptu Zoom calls, no daily status theatre — just visible progress on your terms.",
  },
];

/* Curated craft showcase — visual work only. Systems / R&D projects are
   deliberately filtered out; studios buy visual craft, so only that shows.
   Data (live URL + preview image + tags) is pulled from the shared catalog. */
const SHOWCASE = [
  {
    id: "the-handmade-store",
    label: "The Hand Made Store",
    kind: "Artisan Commerce / Editorial",
  },
  {
    id: "monica-hirano",
    label: "Monica Hirano",
    kind: "International Contemporary Artist Portfolio",
  },
  {
    id: "ashwini-kurup",
    label: "Ashwini R. Kurup",
    kind: "Designer & Entrepreneur Brand",
  },
  {
    id: "kore-digital",
    label: "Kore Digital",
    kind: "High-Concurrency Investor Platform",
  },
].map((s) => {
  const p = PROJECTS.find((x) => x.id === s.id);
  return {
    ...s,
    href: p?.liveUrl,
    image: p?.image,
    tags: (p?.tags ?? []).slice(0, 3),
  };
});

/* Fixed packages — exact tiers, exact pricing from the brief. */
const PACKAGES = [
  {
    name: "The Beyond-No-Code Web App Sprint",
    price: "$2,500 – $3,500",
    priceNote: "flat",
    timeline: "10–14 days",
    summary:
      "A complete, production-deployed web application built from your Figma system — the point where Webflow and no-code hit their ceiling.",
    features: [
      "Pixel-for-pixel build with real micro-interactions",
      "Next.js 15 + strict TypeScript",
      "Auth, database, and payments wired end-to-end",
      "Deployed to Vercel on your accounts",
    ],
    featured: true,
  },
  {
    name: "Custom Backend & API Integrations",
    price: "$1,500 – $2,500",
    priceNote: "flat",
    timeline: "5–7 days",
    summary:
      "APIs, data layers, and integrations bolted cleanly onto an existing frontend your studio has already designed and built.",
    features: [
      "Supabase PostgreSQL with row-level security",
      "Idempotent Stripe webhooks & billing flows",
      "Third-party API wiring and data modelling",
      "Typed, tested, and documented handoff",
    ],
    featured: false,
  },
  {
    name: "Agency Standby Retainer",
    price: "$1,500",
    priceNote: "/ month",
    timeline: "Capped 15–20 hrs/mo",
    summary:
      "Standing engineering capacity for a studio that ships continuously — reserved for a maximum of two studios at any time.",
    features: [
      "Priority async turnaround on feature work",
      "Bug fixes and incremental build-outs",
      "Dedicated private Slack channel",
      "Max 2 studios — capacity is protected",
    ],
    featured: false,
  },
];

/* Anti-offshore matrix — the comparison from the capabilities one-pager. */
const MATRIX = [
  {
    dimension: "Design integrity",
    offshore: "Pixel drift and “close enough” approximations",
    solo: "Pixel-for-pixel; micro-interactions preserved",
  },
  {
    dimension: "Engineering rigor",
    offshore: "Legacy patterns, no type safety",
    solo: "Next.js 15, strict TypeScript, tested",
  },
  {
    dimension: "Communication",
    offshore: "Daily status Zooms across timezones",
    solo: "100% async — PRs, Slack, Loom",
  },
  {
    dimension: "Accountability",
    offshore: "Account-manager relay; no engineer contact",
    solo: "You talk to the engineer who writes the code",
  },
  {
    dimension: "Commercial safety",
    offshore: "Large upfront, murky scope",
    solo: "50 / 40 / 10 milestone terms",
  },
  {
    dimension: "Ownership",
    offshore: "Shared infra, unclear access",
    solo: "Your repo, Vercel & Supabase from day one",
  },
];

/* How-we-work operating rules. */
const RULES = [
  {
    title: "100% Async",
    body: "Progress lives in PRs, Slack, and Loom. No standing meetings, no timezone tax — reviewable artifacts instead of calls.",
  },
  {
    title: "Protected Deep-Work Blocks",
    body: "Focused, uninterrupted build time is where fidelity and rigor actually come from. Capacity is capped so it stays that way.",
  },
  {
    title: "50 / 40 / 10 Commercial Terms",
    body: "Milestone-based payments — 50% to start, 40% at build review, 10% on final handoff. Scope and risk stay legible for both sides.",
  },
];

/* -------------------------------- primitives ------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0531d]">
      {children}
    </span>
  );
}

function PrimaryCTA({
  href,
  download,
  children,
}: {
  href: string;
  download?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(download ? { download: "" } : {})}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#e0531d] px-6 py-3.5 text-[15px] font-semibold text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-[#f4632c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0531d] active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

function SecondaryCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[15px] font-semibold text-zinc-100 transition-all hover:border-white/40 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
    >
      {children}
    </a>
  );
}

/* --------------------------------- sections -------------------------------- */

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
            Abhishek Ranjan
          </span>
        </Link>
        <a
          href={SCOPING_MAILTO}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-semibold text-zinc-100 transition-colors hover:border-white/40"
        >
          Book a Scoping
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* faint radial warmth, top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-[0.16] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #e0531d, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <Eyebrow>Fractional Lead Engineer / Solo Technical Delivery Partner</Eyebrow>

        <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.1rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#f5f4f1]">
          Turn ambitious Figma systems into production-grade Next.js
          applications
          <span className="text-zinc-500">
            {" "}
            — without design degradation or offshore drag.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-[17px]">
          Senior platform engineer (New Relic, ex-Flipkart, IIT Dhanbad)
          partnering with boutique design studios across the UK, Europe, and the
          US.{" "}
          <span className="text-zinc-200">100% async delivery.</span>
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PrimaryCTA href={CAPABILITIES_PDF} download>
            <Download className="h-4 w-4" />
            Download Capabilities PDF
          </PrimaryCTA>
          <SecondaryCTA href={SCOPING_MAILTO}>
            <CalendarCheck className="h-4 w-4" />
            Book a Sprint Scoping
          </SecondaryCTA>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Eyebrow>What you get</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-[-0.02em] text-[#f5f4f1] sm:text-4xl">
          Three things offshore shops can’t hand you together.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ n, Icon, title, body }) => (
            <div
              key={n}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-[#e0531d]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[13px] font-semibold text-zinc-600">
                  {n}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug text-[#f5f4f1]">
                {title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Eyebrow>Curated craft</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-[-0.02em] text-[#f5f4f1] sm:text-4xl">
          Selected studio-grade builds, live in production.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
          Visual craft only — editorial commerce, artist portfolios, and brand
          surfaces. The systems and R&amp;D work lives elsewhere.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SHOWCASE.map((s) => {
            const Card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt={`${s.label} — live site preview`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : null}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/70 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e0531d]">
                        {s.kind}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-[#f5f4f1]">
                        {s.label}
                      </h3>
                    </div>
                    {s.href ? (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200" />
                    ) : null}
                  </div>
                  {s.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            );

            const cls =
              "group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25";

            return s.href ? (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {Card}
              </a>
            ) : (
              <div key={s.id} className={cls}>
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Eyebrow>Fixed engagements</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-[-0.02em] text-[#f5f4f1] sm:text-4xl">
          Flat pricing. Fixed timelines. No hourly drift.
        </h2>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col rounded-2xl border p-7 " +
                (p.featured
                  ? "border-[#e0531d]/50 bg-[#e0531d]/[0.06]"
                  : "border-white/10 bg-white/[0.02]")
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-[#e0531d] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  Most requested
                </span>
              )}
              <h3 className="text-[17px] font-semibold leading-snug text-[#f5f4f1]">
                {p.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-[#f5f4f1]">
                  {p.price}
                </span>
                <span className="font-mono text-[12px] text-zinc-500">
                  {p.priceNote}
                </span>
              </div>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#e0531d]">
                {p.timeline}
              </p>

              <p className="mt-5 text-[14px] leading-relaxed text-zinc-400">
                {p.summary}
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13.5px] leading-snug text-zinc-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e0531d]" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <a
                  href={SCOPING_MAILTO}
                  className={
                    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold transition-all " +
                    (p.featured
                      ? "bg-[#e0531d] text-white hover:bg-[#f4632c]"
                      : "border border-white/15 text-zinc-100 hover:border-white/40 hover:bg-white/[0.04]")
                  }
                >
                  Scope this
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AntiOffshoreMatrix() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Eyebrow>The anti-offshore matrix</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-[-0.02em] text-[#f5f4f1] sm:text-4xl">
          Why studios route the build to one senior engineer.
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="w-1/4 py-4 pr-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  &nbsp;
                </th>
                <th className="w-[37.5%] py-4 pr-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Traditional Offshore Shops
                </th>
                <th className="w-[37.5%] py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e0531d]">
                  Abhishek Ranjan · Solo Partner
                </th>
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row) => (
                <tr key={row.dimension} className="border-b border-white/[0.07]">
                  <td className="py-5 pr-4 align-top text-[13.5px] font-semibold text-zinc-300">
                    {row.dimension}
                  </td>
                  <td className="py-5 pr-4 align-top">
                    <div className="flex items-start gap-2.5 text-[14px] leading-snug text-zinc-500">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
                      {row.offshore}
                    </div>
                  </td>
                  <td className="py-5 align-top">
                    <div className="flex items-start gap-2.5 text-[14px] leading-snug text-zinc-100">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e0531d]" />
                      {row.solo}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* async signal chips */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { Icon: GitPullRequest, label: "GitHub PRs" },
            { Icon: MessageSquare, label: "Private Slack channel" },
            { Icon: Video, label: "2-minute Loom walkthroughs" },
          ].map(({ Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-[13px] text-zinc-300"
            >
              <Icon className="h-3.5 w-3.5 text-[#e0531d]" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperationalRules() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-[-0.02em] text-[#f5f4f1] sm:text-4xl">
          The operating rules the partnership runs on.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {RULES.map((r, i) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
            >
              <span className="font-mono text-[13px] font-semibold text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#f5f4f1]">
                {r.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-zinc-400">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* direct action */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-12">
          <h3 className="max-w-3xl text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-[#f5f4f1] sm:text-3xl">
            Have an upcoming Figma build exceeding basic CMS limits?
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            Email a brief or share a Figma link asynchronously at{" "}
            <a
              href={BRIEF_MAILTO}
              className="font-semibold text-[#e0531d] underline decoration-[#e0531d]/40 underline-offset-4 hover:decoration-[#e0531d]"
            >
              {EMAIL}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCTA href={BRIEF_MAILTO}>
              Send a brief
              <ArrowRight className="h-4 w-4" />
            </PrimaryCTA>
            <SecondaryCTA href={CAPABILITIES_PDF}>
              <Download className="h-4 w-4" />
              Download Capabilities PDF
            </SecondaryCTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          Abhishek Ranjan · Solo Technical Delivery Partner
        </span>
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Main portfolio
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-100"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- shell ---------------------------------- */

export default function StudiosLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-200 [color-scheme:dark] selection:bg-[#e0531d] selection:text-white">
      <TopBar />
      <main>
        <Hero />
        <Pillars />
        <Showcase />
        <Packages />
        <AntiOffshoreMatrix />
        <OperationalRules />
      </main>
      <Foot />
    </div>
  );
}
