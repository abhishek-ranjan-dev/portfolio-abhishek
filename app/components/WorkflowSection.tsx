"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Globe2,
  MonitorPlay,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

interface WorkflowStep {
  icon: LucideIcon;
  title: string;
  cadence: string;
  body: string;
}

const STEPS: WorkflowStep[] = [
  {
    icon: ClipboardList,
    title: "Discovery & Clear Written Scope",
    cadence: "Day 1 · 30-min call",
    body: "A 30-minute alignment call, followed by a written scope you can hold me to. No moving targets, no billable ambiguity.",
  },
  {
    icon: Globe2,
    title: "Live Staging URL from Day Two",
    cadence: "Day 2 · Preview live",
    body: "An active preview environment spun up immediately. Click through, audit, and interact with real code before the end of week one — no radio silence.",
  },
  {
    icon: MonitorPlay,
    title: "High-Impact Weekly Demos",
    cadence: "Weekly · 15 min",
    body: "A 15-minute screen-shared demonstration every week. Progress you can see, prioritized against what still matters most.",
  },
  {
    icon: ShieldCheck,
    title: "14-Day Post-Launch Support",
    cadence: "Post-launch · 2 weeks",
    body: "A two-week window of website maintenance and bug fixes included after launch. You're not left holding the pager on day one.",
  },
];

export function WorkflowSection() {
  return (
    <section
      id="workflow"
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
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Engagement & Delivery
          </div>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            How I{" "}
            <span className="bg-gradient-to-br from-emerald-200 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              ship
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-400 sm:text-base">
            A tight, visible workflow designed to keep founders in the loop and
            projects on track — from written scope to a clean, supported handoff.
          </p>
        </motion.div>

        <motion.ol
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, i) => (
            <WorkflowCard key={step.title} step={step} index={i} />
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function WorkflowCard({ step, index }: { step: WorkflowStep; index: number }) {
  const Icon = step.icon;
  return (
    <li className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_0_50px_-12px_rgba(52,211,153,0.3)]">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/[0.07] via-emerald-500/[0.02] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.2)]">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-[26px] font-semibold leading-none text-slate-700 transition-colors group-hover:text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-6">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-emerald-300/80">
          {step.cadence}
        </p>
        <h3 className="mt-2 text-[17px] font-semibold leading-snug tracking-tight text-white">
          {step.title}
        </h3>
      </div>

      <p className="relative mt-4 text-[13.5px] leading-relaxed text-slate-400">
        {step.body}
      </p>

      <div className="relative mt-auto pt-5">
        <div
          className="h-px w-full bg-gradient-to-r from-emerald-500/40 via-emerald-500/10 to-transparent"
          aria-hidden
        />
      </div>
    </li>
  );
}
