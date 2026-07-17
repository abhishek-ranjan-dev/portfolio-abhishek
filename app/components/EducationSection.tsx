"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { EDUCATION, type EducationItem } from "@/lib/experience";

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative border-t border-slate-900/80"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Where I{" "}
            <span className="bg-gradient-to-br from-emerald-200 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              studied
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-400 sm:text-base">
            The foundation — four years of rigorous engineering training that
            shaped how I approach systems, algorithms, and problem solving.
          </p>
        </motion.div>

        <div className="mt-14">
          <EducationCard edu={EDUCATION[0]} />
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu }: { edu: EducationItem }) {
  const Root = edu.institutionUrl ? "a" : "div";
  const rootProps = edu.institutionUrl
    ? {
        href: edu.institutionUrl,
        target: "_blank" as const,
        rel: "noopener noreferrer",
        "aria-label": `${edu.institution} — opens in a new tab`,
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: 0.05 }}
    >
      <Root
        {...rootProps}
        className="group relative block overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_0_60px_-12px_rgba(52,211,153,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/[0.08] via-emerald-500/[0.03] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        {edu.degreeType && (
          <span className="absolute right-4 top-4 z-10 rounded-full border border-emerald-500/30 bg-slate-950/60 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-sm">
            {edu.degreeType}
          </span>
        )}

        <div className="relative grid items-stretch gap-0 md:grid-cols-[1.55fr_1fr]">
          <div className="p-6 sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
              <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
              Education
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 font-mono text-[13px] font-semibold tracking-tight text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.25)]">
                IIT
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-balance text-xl font-semibold leading-tight tracking-tight text-white transition-colors group-hover:text-emerald-100 sm:text-2xl">
                    {edu.institution}
                  </h3>
                  {edu.institutionUrl && (
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-emerald-300 opacity-70 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  )}
                </div>
                <p className="mt-1.5 text-[15px] font-medium text-emerald-300">
                  {edu.degree}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                <span>{edu.period}</span>
              </span>
              {edu.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                  <span>{edu.location}</span>
                </span>
              )}
            </div>

            <div
              className="mt-6 h-px w-full bg-gradient-to-r from-emerald-500/40 via-emerald-500/15 to-transparent"
              aria-hidden
            />

            <ul className="mt-6 space-y-3 text-[14px] leading-relaxed text-slate-300">
              {edu.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border-t border-slate-800/70 md:aspect-auto md:min-h-[360px] md:border-l md:border-t-0">
            <Image
              src="/assests/convo-abhishek.jpg"
              alt="Abhishek receiving his Bachelor of Technology degree at IIT (ISM) Dhanbad convocation, 2022"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 500px"
              className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent md:from-slate-950/60"
              aria-hidden
            />
          </div>
        </div>
      </Root>
    </motion.div>
  );
}
