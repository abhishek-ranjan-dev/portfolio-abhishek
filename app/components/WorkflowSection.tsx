"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Step {
  n: string;
  cadence: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    n: "01",
    cadence: "Day 1",
    title: "Scope, in writing",
    body: "A 30-minute call, then a scope doc you can hold me to. No moving targets.",
  },
  {
    n: "02",
    cadence: "Day 2",
    title: "Live URL, day two",
    body: "A staging link before week one — you click real code, not slide decks.",
  },
  {
    n: "03",
    cadence: "Weekly",
    title: "A demo every week",
    body: "15 minutes, screen-shared. You always know exactly where it stands.",
  },
  {
    n: "04",
    cadence: "Launch + 14d",
    title: "Two weeks of cover",
    body: "Bug fixes and support for 14 days after launch. No day-one pager.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, margin: "-80px" } as const;

function Node({ s }: { s: Step }) {
  return (
    <>
      <div className="readout-num text-sm text-[var(--ink-soft)]">{s.n}</div>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-[var(--ink)]">
        {s.title}
      </h3>
      <p className="placard placard-signal mt-1.5">{s.cadence}</p>
      <p className="mt-3 max-w-[26ch] text-[13.5px] leading-relaxed text-[var(--ink-mid)]">
        {s.body}
      </p>
    </>
  );
}

export function WorkflowSection() {
  const reduce = useReducedMotion();

  return (
    <section id="workflow" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
              <span className="placard placard-signal">CH · DELIVERY</span>
            </span>
            <span className="groove-full flex-1" aria-hidden />
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--ink)] sm:text-5xl md:text-6xl">
            How I <span className="text-[var(--signal)]">ship</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:text-base">
            Days, not months — a tight, visible sequence from written scope to a
            clean, supported handoff.
          </p>
        </motion.div>

        {/* Desktop — horizontal rail (connectors run dot→dot, so the line ends
            at the last node — no phantom tail) */}
        <div className="mt-16 hidden sm:block">
          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                {i < STEPS.length - 1 && (
                  <>
                    <div
                      className="absolute left-0 top-[6px] h-[3px] w-[calc(100%+1.5rem)] rounded-full bg-[var(--well)] shadow-[inset_0_1px_1px_rgba(90,84,70,0.4)]"
                      aria-hidden
                    />
                    <motion.div
                      className="absolute left-0 top-[6px] h-[3px] w-[calc(100%+1.5rem)] origin-left rounded-full bg-[var(--signal)]"
                      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        delay: reduce ? 0 : 0.2 + i * 0.32,
                        duration: 0.42,
                        ease: EASE,
                      }}
                      aria-hidden
                    />
                  </>
                )}
                <motion.span
                  className="absolute left-0 top-0 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--panel)] bg-[var(--signal)] shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: reduce ? 0 : 0.1 + i * 0.32,
                    duration: 0.4,
                    ease: EASE,
                  }}
                  aria-hidden
                />
                <motion.div
                  className="pt-9"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{
                    delay: reduce ? 0 : 0.2 + i * 0.14,
                    duration: 0.5,
                    ease: EASE,
                  }}
                >
                  <Node s={s} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical rail */}
        <div className="mt-12 sm:hidden">
          <div className="relative pl-7">
            <div
              className="absolute bottom-1.5 left-[6px] top-1.5 w-[3px] rounded-full bg-[var(--well)] shadow-[inset_0_1px_1px_rgba(90,84,70,0.4)]"
              aria-hidden
            />
            <motion.div
              className="absolute left-[6px] top-1.5 w-[3px] origin-top rounded-full bg-[var(--signal)]"
              style={{ height: "calc(100% - 0.75rem)" }}
              initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={VP}
              transition={{ duration: 1.2, ease: EASE }}
              aria-hidden
            />
            <div className="space-y-9">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="relative"
                  initial={reduce ? false : { opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: reduce ? 0 : i * 0.1, duration: 0.5, ease: EASE }}
                >
                  <span
                    className="absolute -left-7 top-1 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--panel)] bg-[var(--signal)] shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                    aria-hidden
                  />
                  <Node s={s} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
