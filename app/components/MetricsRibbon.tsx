'use client';

import { motion } from 'framer-motion';
import { Activity, ShieldCheck, TrendingDown, Zap } from 'lucide-react';
import { RIBBON_METRICS } from '@/lib/projects';

const ICONS = [Zap, ShieldCheck, Activity, TrendingDown];

export function MetricsRibbon() {
  const items = [...RIBBON_METRICS, ...RIBBON_METRICS]; // duplicated for seamless marquee

  return (
    <div className="relative overflow-hidden border-y border-slate-800/80 bg-slate-950/60">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent"
        aria-hidden
      />
      <motion.div
        className="flex w-max gap-12 py-5"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {items.map((m, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={`${m.label}-${i}`}
              className="flex shrink-0 items-center gap-3 px-2"
            >
              <Icon className="h-4 w-4 text-emerald-400" strokeWidth={1.75} />
              <span className="font-mono text-sm tracking-wide text-slate-100">
                {m.value}
              </span>
              <span className="text-sm uppercase tracking-[0.18em] text-slate-500">
                {m.label}
              </span>
              <span className="text-slate-700">·</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
