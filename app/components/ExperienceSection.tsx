"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import {
  CAREER_STATS,
  EXPERIENCE,
  type ExperienceAccent,
  type WorkExperience,
} from "@/lib/experience";

const ACCENT_STYLES: Record<
  ExperienceAccent,
  {
    monoActive: string;
    monoIdle: string;
    chipActive: string;
    glow: string;
    hoverGlow: string;
    rule: string;
    text: string;
    hoverText: string;
    bullet: string;
    softBg: string;
    hoverBorder: string;
  }
> = {
  emerald: {
    monoActive:
      "border-emerald-400/70 bg-emerald-500/15 text-emerald-200 shadow-[0_0_24px_rgba(52,211,153,0.35)]",
    monoIdle:
      "border-emerald-500/30 bg-emerald-500/5 text-emerald-300/80",
    chipActive:
      "border-emerald-500/40 bg-emerald-500/10 ring-1 ring-emerald-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(52,211,153,0.4)]",
    hoverGlow: "hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.4)]",
    rule: "from-emerald-500/60 via-emerald-500/30 to-transparent",
    text: "text-emerald-300",
    hoverText: "hover:text-emerald-300",
    bullet: "bg-emerald-400",
    softBg:
      "from-emerald-500/10 via-emerald-500/5 to-transparent",
    hoverBorder: "hover:border-emerald-500/40",
  },
  indigo: {
    monoActive:
      "border-indigo-400/70 bg-indigo-500/15 text-indigo-200 shadow-[0_0_24px_rgba(129,140,248,0.35)]",
    monoIdle:
      "border-indigo-500/30 bg-indigo-500/5 text-indigo-300/80",
    chipActive:
      "border-indigo-500/40 bg-indigo-500/10 ring-1 ring-indigo-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(129,140,248,0.4)]",
    hoverGlow: "hover:shadow-[0_0_40px_-8px_rgba(129,140,248,0.4)]",
    rule: "from-indigo-500/60 via-indigo-500/30 to-transparent",
    text: "text-indigo-300",
    hoverText: "hover:text-indigo-300",
    bullet: "bg-indigo-400",
    softBg:
      "from-indigo-500/10 via-indigo-500/5 to-transparent",
    hoverBorder: "hover:border-indigo-500/40",
  },
  amber: {
    monoActive:
      "border-amber-400/70 bg-amber-500/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.35)]",
    monoIdle: "border-amber-500/30 bg-amber-500/5 text-amber-300/80",
    chipActive:
      "border-amber-500/40 bg-amber-500/10 ring-1 ring-amber-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(251,191,36,0.4)]",
    hoverGlow: "hover:shadow-[0_0_40px_-8px_rgba(251,191,36,0.4)]",
    rule: "from-amber-500/60 via-amber-500/30 to-transparent",
    text: "text-amber-300",
    hoverText: "hover:text-amber-300",
    bullet: "bg-amber-400",
    softBg:
      "from-amber-500/10 via-amber-500/5 to-transparent",
    hoverBorder: "hover:border-amber-500/40",
  },
  sky: {
    monoActive:
      "border-sky-400/70 bg-sky-500/15 text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.35)]",
    monoIdle: "border-sky-500/30 bg-sky-500/5 text-sky-300/80",
    chipActive:
      "border-sky-500/40 bg-sky-500/10 ring-1 ring-sky-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(56,189,248,0.4)]",
    hoverGlow: "hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.4)]",
    rule: "from-sky-500/60 via-sky-500/30 to-transparent",
    text: "text-sky-300",
    hoverText: "hover:text-sky-300",
    bullet: "bg-sky-400",
    softBg: "from-sky-500/10 via-sky-500/5 to-transparent",
    hoverBorder: "hover:border-sky-500/40",
  },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-t border-slate-900/80"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            My career &amp;{" "}
            <span className="bg-gradient-to-br from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-400 sm:text-base">
            Production engineering across enterprise observability and
            high-concurrency commerce — built on a rigorous engineering
            foundation.
          </p>
        </motion.div>

        {/* Stat ribbon */}
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4"
        >
          {CAREER_STATS.map((s) => (
            <li
              key={s.label}
              className="rounded-xl border border-slate-800/80 bg-slate-900/30 px-4 py-3"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                {s.label}
              </div>
              <div className="mt-1 truncate text-sm font-semibold text-slate-100">
                {s.value}
              </div>
            </li>
          ))}
        </motion.ul>

        {/* Company card grid */}
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {EXPERIENCE.map((exp) => (
            <li key={exp.company}>
              <CompanyCard company={exp} />
            </li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}

/* ------------------------------ Company card ----------------------------- */

function CompanyCard({ company }: { company: WorkExperience }) {
  const a = ACCENT_STYLES[company.accent];
  const cardClassName = `group relative block h-[380px] overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 transition-all duration-500 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-within:[&_.card-rest]:opacity-0 focus-within:[&_.card-rest]:-translate-y-2 focus-within:[&_.card-detail]:opacity-100 focus-within:[&_.card-detail]:translate-y-0 ${a.hoverBorder} ${a.hoverGlow}`;
  const Root = company.companyUrl ? "a" : "div";
  const rootProps = company.companyUrl
    ? {
        href: company.companyUrl,
        target: "_blank" as const,
        rel: "noopener noreferrer",
        "aria-label": `${company.company} — opens in a new tab`,
      }
    : { tabIndex: 0 };
  return (
    <Root className={cardClassName} {...rootProps}>
      {/* Brand soft gradient — intensifies on hover */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.softBg} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />

      {/* Persistent type badge (top-right, visible in both states) */}
      <span
        className={`absolute right-4 top-4 z-10 rounded-full border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] backdrop-blur-sm ${a.text}`}
      >
        {company.type}
      </span>

      {/* Rest state: centered monogram + company + date */}
      <div className="card-rest absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-2">
        <Monogram
          label={company.monogram}
          accent={company.accent}
          size="lg"
          logo={company.logo}
          companyName={company.company}
        />
        <div className="text-center">
          <div className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {company.company}
          </div>
          <div className="mt-1 text-[12.5px] font-medium text-slate-300">
            {company.role}
          </div>
          <div
            className={`mt-2 font-mono text-[11px] uppercase tracking-[0.22em] ${a.text}`}
          >
            {company.shortPeriod}
          </div>
        </div>
      </div>

      {/* Hover state: full details */}
      <div className="card-detail absolute inset-0 flex flex-col p-5 pt-12 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <div className="flex items-start gap-3">
          <Monogram
            label={company.monogram}
            accent={company.accent}
            size="md"
            logo={company.logo}
            companyName={company.company}
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-lg font-semibold tracking-tight text-white">
                {company.company}
              </span>
              {company.companyUrl && (
                <ArrowUpRight
                  className={`h-4 w-4 shrink-0 ${a.text} opacity-70`}
                />
              )}
            </div>
            <p className={`mt-1 truncate text-[13.5px] font-medium ${a.text}`}>
              {company.role}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 text-[12.5px] text-slate-300">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-slate-500" />
            <span className="truncate">{company.period}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-500" />
            <span className="truncate">{company.location}</span>
          </span>
        </div>

        <div
          className={`mt-4 h-px w-full bg-gradient-to-r ${a.rule}`}
          aria-hidden
        />

        <div className="mt-4 flex flex-wrap gap-1.5">
          {company.skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-slate-800 bg-slate-900/80 px-2 py-0.5 font-mono text-[11.5px] text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Root>
  );
}

function Monogram({
  label,
  accent,
  size = "md",
  logo,
  companyName,
}: {
  label: string;
  accent: ExperienceAccent;
  size?: "md" | "lg";
  logo?: string;
  companyName?: string;
}) {
  const a = ACCENT_STYLES[accent];

  if (logo) {
    const px = size === "lg" ? 112 : 44;
    return (
      <Image
        src={logo}
        alt={`${companyName ?? label} logo`}
        width={px}
        height={px}
        className="shrink-0 object-contain"
        style={{ width: px, height: px }}
        unoptimized
      />
    );
  }

  const dim =
    size === "lg" ? "h-16 w-16 text-lg" : "h-10 w-10 text-[12.5px]";
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-lg border font-mono font-semibold ${dim} ${a.monoActive}`}
    >
      {label}
    </span>
  );
}

