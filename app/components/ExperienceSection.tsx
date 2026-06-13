"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";
import {
  CAREER_STATS,
  EDUCATION,
  EXPERIENCE,
  type EducationItem,
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
    rule: string;
    text: string;
    bullet: string;
    softBg: string;
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
    rule: "from-emerald-500/60 via-emerald-500/30 to-transparent",
    text: "text-emerald-300",
    bullet: "bg-emerald-400",
    softBg:
      "from-emerald-500/10 via-emerald-500/5 to-transparent",
  },
  indigo: {
    monoActive:
      "border-indigo-400/70 bg-indigo-500/15 text-indigo-200 shadow-[0_0_24px_rgba(129,140,248,0.35)]",
    monoIdle:
      "border-indigo-500/30 bg-indigo-500/5 text-indigo-300/80",
    chipActive:
      "border-indigo-500/40 bg-indigo-500/10 ring-1 ring-indigo-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(129,140,248,0.4)]",
    rule: "from-indigo-500/60 via-indigo-500/30 to-transparent",
    text: "text-indigo-300",
    bullet: "bg-indigo-400",
    softBg:
      "from-indigo-500/10 via-indigo-500/5 to-transparent",
  },
  amber: {
    monoActive:
      "border-amber-400/70 bg-amber-500/15 text-amber-200 shadow-[0_0_24px_rgba(251,191,36,0.35)]",
    monoIdle: "border-amber-500/30 bg-amber-500/5 text-amber-300/80",
    chipActive:
      "border-amber-500/40 bg-amber-500/10 ring-1 ring-amber-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(251,191,36,0.4)]",
    rule: "from-amber-500/60 via-amber-500/30 to-transparent",
    text: "text-amber-300",
    bullet: "bg-amber-400",
    softBg:
      "from-amber-500/10 via-amber-500/5 to-transparent",
  },
  sky: {
    monoActive:
      "border-sky-400/70 bg-sky-500/15 text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.35)]",
    monoIdle: "border-sky-500/30 bg-sky-500/5 text-sky-300/80",
    chipActive:
      "border-sky-500/40 bg-sky-500/10 ring-1 ring-sky-500/20",
    glow: "shadow-[0_0_40px_-8px_rgba(56,189,248,0.4)]",
    rule: "from-sky-500/60 via-sky-500/30 to-transparent",
    text: "text-sky-300",
    bullet: "bg-sky-400",
    softBg: "from-sky-500/10 via-sky-500/5 to-transparent",
  },
};

export function ExperienceSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = EXPERIENCE[selectedIdx];

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

        {/* Split panel */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-10">
          <CompanyRail
            selectedIdx={selectedIdx}
            onSelect={setSelectedIdx}
          />
          <CompanyDetail key="detail" company={selected} />
        </div>

        {/* Education */}
        <div className="mt-12">
          <EducationCard edu={EDUCATION[0]} />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Company rail ------------------------------ */

function CompanyRail({
  selectedIdx,
  onSelect,
}: {
  selectedIdx: number;
  onSelect: (i: number) => void;
}) {
  return (
    <ol
      role="tablist"
      aria-label="Career companies"
      className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
    >
      {EXPERIENCE.map((exp, i) => {
        const isActive = i === selectedIdx;
        const a = ACCENT_STYLES[exp.accent];
        return (
          <li key={exp.company} className="shrink-0 lg:shrink">
            <button
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(i)}
              className={`group relative flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all sm:gap-4 lg:px-4 ${
                isActive
                  ? `${a.chipActive} ${a.glow}`
                  : "border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50"
              }`}
            >
              <Monogram
                label={exp.monogram}
                accent={exp.accent}
                active={isActive}
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13.5px] font-semibold tracking-tight text-white sm:text-sm">
                  {exp.company}
                </div>
                <div
                  className={`mt-0.5 truncate text-[11px] uppercase tracking-[0.18em] ${
                    isActive ? a.text : "text-slate-500"
                  }`}
                >
                  {exp.shortPeriod}
                </div>
              </div>
              {isActive && (
                <motion.span
                  layoutId="rail-arrow"
                  className={`hidden lg:inline-flex ${a.text}`}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              )}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function Monogram({
  label,
  accent,
  active,
  size = "md",
}: {
  label: string;
  accent: ExperienceAccent;
  active: boolean;
  size?: "md" | "lg";
}) {
  const a = ACCENT_STYLES[accent];
  const dim =
    size === "lg" ? "h-16 w-16 text-lg" : "h-10 w-10 text-[12.5px]";
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-lg border font-mono font-semibold transition-all ${dim} ${
        active ? a.monoActive : a.monoIdle
      }`}
    >
      {label}
    </span>
  );
}

/* ----------------------------- Company detail ---------------------------- */

function CompanyDetail({ company }: { company: WorkExperience }) {
  const a = ACCENT_STYLES[company.accent];
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 ${a.glow}`}
    >
      {/* Brand soft gradient */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${a.softBg}`}
        aria-hidden
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={company.company}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-6 sm:p-8"
        >
          {/* Top row: monogram + name + type */}
          <div className="flex flex-wrap items-start gap-5">
            <Monogram
              label={company.monogram}
              accent={company.accent}
              active
              size="lg"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {company.company}
                </h3>
                <span
                  className={`rounded-full border border-slate-800 bg-slate-950/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${a.text}`}
                >
                  {company.type}
                </span>
              </div>
              <p className={`mt-1 text-[15px] font-medium ${a.text}`}>
                {company.role}
              </p>
            </div>
          </div>

          {/* Period & location */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div
                className={`font-mono text-3xl font-semibold tracking-tight text-white sm:text-[40px] sm:leading-none`}
              >
                {company.shortPeriod}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3 w-3" />
                  {company.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" />
                  {company.location}
                </span>
              </div>
            </div>
            <div
              className={`h-px flex-1 bg-gradient-to-r ${a.rule}`}
              aria-hidden
            />
          </div>

          {/* Highlights */}
          <ul className="mt-7 space-y-3 text-[14.5px] leading-relaxed text-slate-200">
            {company.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.bullet}`}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-7 flex flex-wrap gap-1.5 border-t border-slate-800/70 pt-5">
            {company.skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-slate-800 bg-slate-900/80 px-2 py-0.5 font-mono text-[11px] text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------- Education --------------------------------- */

function EducationCard({ edu }: { edu: EducationItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: 0.05 }}
      whileHover={{ y: -2 }}
      className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 transition-colors hover:border-slate-700/80"
    >
      <div className="grid items-stretch gap-0 md:grid-cols-[1.55fr_1fr]">
        {/* Text content */}
        <div className="p-6 sm:p-7">
          <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
            Education
          </div>
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 font-mono text-[11px] font-semibold tracking-tight text-emerald-300">
              IIT
            </span>
            <div className="min-w-0">
              <h4 className="text-balance text-lg font-semibold leading-snug text-white sm:text-xl">
                {edu.institution}
              </h4>
              <p className="mt-1 text-sm font-medium text-emerald-400">
                {edu.degree}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {edu.period}
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5 text-[14px] leading-relaxed text-slate-300">
            {edu.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Convocation photo */}
        <div className="relative aspect-[4/3] overflow-hidden border-t border-slate-800/70 md:aspect-auto md:min-h-[320px] md:border-l md:border-t-0">
          <Image
            src="/assests/convo-abhishek.jpg"
            alt="Abhishek receiving his Bachelor of Technology degree at IIT (ISM) Dhanbad convocation, 2022"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 500px"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {/* Soft vignette to harmonize with the dark theme */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </motion.div>
  );
}

