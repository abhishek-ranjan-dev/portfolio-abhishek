"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EDUCATION } from "@/lib/experience";

const FACTS = [
  { k: "Program", v: "B.Tech" },
  { k: "Years", v: "2018–22" },
  { k: "Campus", v: "Dhanbad" },
];

export function EducationSection() {
  const reduce = useReducedMotion();
  const edu = EDUCATION[0];

  return (
    <section id="education" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
              <span className="placard placard-signal">CH · FOUNDATION</span>
            </span>
            <span className="groove-full flex-1" aria-hidden />
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--ink)] sm:text-5xl md:text-6xl">
            Education
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:text-base">
            The engineering foundation behind the systems thinking — four
            rigorous years.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="screws-b relative panel mt-10 grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Info */}
          <div className="order-2 flex flex-col p-6 sm:p-8 md:order-1">
            <span className="placard placard-signal">Bachelor of Technology</span>

            <a
              href={edu.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${edu.institution} — opens in a new tab`}
              className="group mt-4 flex items-start gap-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-[var(--panel-2)] font-mono text-[13px] font-bold text-[var(--signal-ink)] shadow-[inset_0_1px_0_var(--edge-hi)]">
                IIT
              </span>
              <h3 className="text-balance text-xl font-bold leading-tight tracking-tight text-[var(--ink)] sm:text-[22px]">
                {edu.institution}
                <ArrowUpRight
                  className="ml-1 inline h-4 w-4 -translate-y-0.5 text-[var(--signal-ink)] transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </h3>
            </a>

            <dl className="mt-6 grid grid-cols-3 gap-2.5">
              {FACTS.map((f) => (
                <div key={f.k} className="panel-inset px-3 py-2.5">
                  <dt className="placard">{f.k}</dt>
                  <dd className="readout-num mt-1.5 whitespace-nowrap text-[15px] font-bold text-[var(--ink)]">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[var(--ink-mid)]">
              Analytical problem-solving, algorithms, and complex system design —
              the groundwork for everything I ship now.
            </p>
          </div>

          {/* Convocation */}
          <div className="relative order-1 aspect-[16/10] overflow-hidden border-b border-[var(--line)] md:order-2 md:aspect-auto md:border-b-0 md:border-l">
            <Image
              src="/assests/convo-abhishek.jpg"
              alt="Abhishek receiving his Bachelor of Technology degree at IIT (ISM) Dhanbad convocation, 2022"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
