"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What does Abhishek build?",
    answer:
      "Production full-stack websites end-to-end — Next.js/React frontends, Java or Node backends, LLM-powered features and vector-database search wired directly into the app, observability for QPS and error rates, and deployment on the platform of your choice.",
  },
  {
    question: "What AI features do you integrate into websites?",
    answer:
      "LLM calls from the application (OpenAI, Anthropic Claude and similar providers), Retrieval-Augmented Generation (RAG) pipelines, and vector-database search for semantic retrieval. The focus is on in-application AI features — not on building MCP servers or model infrastructure.",
  },
  {
    question: "How does the engagement workflow work?",
    answer:
      "Day 1 is a 30-minute discovery call plus a written scope. A live staging URL is available from Day 2 so you can audit progress before the end of week one. Every week includes a 15-minute demo. Launch includes a 14-day window of website maintenance and bug fixes.",
  },
  {
    question: "What is your background?",
    answer:
      "Bachelor of Technology in Electronics and Instrumentation from IIT (ISM) Dhanbad, 2022. Software engineer at Flipkart (2022–2024) working on high-concurrency distributed systems, and currently a P2 Software Engineer at New Relic on observability platform services.",
  },
  {
    question: "Where are you based and who do you work with?",
    answer:
      "Based in India (Hyderabad); available for full-stack and AI-integration contracts globally. Typical clients are founders and product teams that need websites — often with AI features — shipped end-to-end.",
  },
];

export function FaqSection() {
  const reduce = useReducedMotion();
  return (
    <section id="faq" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
              <span className="placard placard-signal">CH · FAQ</span>
            </span>
            <span className="groove-full flex-1" aria-hidden />
          </div>
          <h2 className="mt-5 text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--ink)] sm:text-5xl md:text-6xl">
            Quick <span className="text-[var(--signal)]">answers</span>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:text-base">
            The things founders usually want to know before sending a brief.
          </p>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="panel mt-12 divide-y divide-[var(--line)] overflow-hidden p-0"
        >
          {FAQS.map((f, i) => (
            <FaqRow key={f.question} item={f} defaultOpen={i === 0} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function FaqRow({ item, defaultOpen = false }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-[var(--panel-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] sm:px-7 sm:py-6"
      >
        <span className="text-[15px] font-bold tracking-tight text-[var(--ink)] sm:text-base">
          {item.question}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[var(--line)] bg-[var(--panel-2)] text-[var(--ink-soft)] shadow-[inset_0_1px_0_var(--edge-hi)] transition-all ${
            open ? "rotate-180 border-[var(--signal)] text-[var(--signal-ink)]" : ""
          }`}
          aria-hidden
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-6 text-[14px] leading-relaxed text-[var(--ink-mid)] sm:px-7 sm:pb-7 sm:text-[15px]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
