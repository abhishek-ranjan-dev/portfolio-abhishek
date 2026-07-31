"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CREDS = ["New Relic · 30K rpm", "Ex-Flipkart", "IIT (ISM) Dhanbad"];

export function OperatorSection() {
  const reduce = useReducedMotion();
  return (
    <section id="operator" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
              <span className="placard placard-signal">CH · OPERATOR</span>
            </span>
            <span className="groove-full flex-1" aria-hidden />
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="screws-b relative panel mt-8 grid gap-6 p-5 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch"
        >
          {/* Operator at work */}
          <div className="panel-inset relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[440px]">
            <Image
              src="/assests/abhishek-working-laptop.jpg"
              alt="Abhishek Ranjan working on a project"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-center"
            />
          </div>

          {/* Statement */}
          <div className="flex flex-col justify-center">
            <h2 className="text-balance text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-[var(--ink)] sm:text-4xl md:text-5xl">
              One accountable <span className="text-[var(--signal)]">human.</span>
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:text-base">
              I&apos;m Abhishek Ranjan. When you hire me, I&apos;m the one who
              designs it, builds it, and ships it — no account managers, no
              handoffs, no mystery offshore team. Today I build and run
              observability services at New Relic that sustain{" "}
              <span className="font-semibold text-[var(--ink)]">
                ~30,000 requests per minute
              </span>{" "}
              in production, on top of high-concurrency systems I shipped at
              Flipkart. That same senior engineer is the person you brief, the
              person who writes the code, and the person you can actually reach.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {CREDS.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 font-mono text-[11px] font-medium text-[var(--ink-mid)] shadow-[inset_0_1px_0_var(--edge-hi)]"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="mailto:a.ranjan.tech@gmail.com?subject=Project%20Brief"
                className="btn-signal tap-target w-full px-6 py-3 text-[15px] sm:w-auto"
              >
                Send a Brief
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
