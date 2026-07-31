"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { CAREER_STATS, EXPERIENCE, type WorkExperience } from "@/lib/experience";

export function ExperienceSection() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        {/* Heading */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
              <span className="placard placard-signal">CH · CAREER</span>
            </span>
            <span className="groove-full flex-1" aria-hidden />
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--ink)] sm:text-5xl md:text-6xl">
            Flight <span className="text-[var(--signal)]">log</span>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:text-base">
            Production engineering across enterprise observability and
            high-concurrency commerce — built on a rigorous engineering
            foundation.
          </p>
        </motion.div>

        {/* Stat readouts */}
        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {CAREER_STATS.map((s) => (
            <li key={s.label} className="panel-inset px-4 py-3">
              <div className="placard">{s.label}</div>
              <div className="readout-num mt-1.5 truncate text-sm font-bold text-[var(--ink)]">
                {s.value}
              </div>
            </li>
          ))}
        </motion.ul>

        {/* Company modules */}
        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
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
  const cardClassName =
    "group screws-b relative block h-[380px] overflow-hidden panel panel-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] focus-within:[&_.card-rest]:opacity-0 focus-within:[&_.card-rest]:-translate-y-2 focus-within:[&_.card-detail]:opacity-100 focus-within:[&_.card-detail]:translate-y-0";
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
      {/* Persistent type placard (top-right) */}
      <span className="placard placard-signal absolute right-4 top-4 z-10 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
        {company.type}
      </span>

      {/* Rest state: centered logo/monogram + company + date */}
      <div className="card-rest absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:opacity-0">
        <CompanyMark company={company} size="lg" />
        <div className="text-center">
          <div className="text-lg font-bold tracking-tight text-[var(--ink)] sm:text-xl">
            {company.company}
          </div>
          <div className="mt-1 text-[12.5px] font-medium text-[var(--ink-mid)]">
            {company.role}
          </div>
          <div className="placard placard-signal mt-2.5">{company.shortPeriod}</div>
        </div>
      </div>

      {/* Hover / focus state: full details */}
      <div className="card-detail absolute inset-0 flex translate-y-3 flex-col p-5 pt-12 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex items-start gap-3">
          <CompanyMark company={company} size="md" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-lg font-bold tracking-tight text-[var(--ink)]">
                {company.company}
              </span>
              {company.companyUrl && (
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--signal-ink)]" />
              )}
            </div>
            <p className="mt-1 truncate text-[13.5px] font-semibold text-[var(--signal-ink)]">
              {company.role}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 text-[12.5px] text-[var(--ink-mid)]">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[var(--ink-soft)]" />
            <span className="truncate">{company.period}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--ink-soft)]" />
            <span className="truncate">{company.location}</span>
          </span>
        </div>

        <div className="groove-full mt-4" aria-hidden />

        <div className="mt-4 flex flex-wrap gap-1.5">
          {company.skills.map((s) => (
            <span
              key={s}
              className="rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2 py-0.5 font-mono text-[11px] text-[var(--ink-mid)] shadow-[inset_0_1px_0_var(--edge-hi)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Root>
  );
}

function CompanyMark({
  company,
  size,
}: {
  company: WorkExperience;
  size: "md" | "lg";
}) {
  if (company.logo) {
    const px = size === "lg" ? 104 : 44;
    // Transparent SVG marks (e.g. New Relic's white logo) vanish on the light
    // bone frame — seat those on a dark instrument "screen". Raster logos carry
    // their own background, so they keep the light metal frame.
    const isVector = company.logo.endsWith(".svg");
    return (
      <span
        className={`grid shrink-0 place-items-center rounded-xl border border-[var(--line)] shadow-[inset_0_1px_0_var(--edge-hi)] ${
          isVector ? "bg-[var(--ink)]" : "bg-[var(--panel)]"
        }`}
        style={{ width: px + 20, height: px + 20 }}
      >
        <Image
          src={company.logo}
          alt={`${company.company} logo`}
          width={px}
          height={px}
          className="object-contain"
          style={{ width: px, height: px }}
          unoptimized
        />
      </span>
    );
  }
  const dim = size === "lg" ? "h-16 w-16 text-lg" : "h-11 w-11 text-[13px]";
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-[var(--panel-2)] font-mono font-bold text-[var(--signal-ink)] shadow-[inset_0_1px_0_var(--edge-hi)] ${dim}`}
    >
      {company.monogram}
    </span>
  );
}
