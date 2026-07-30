'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Activity, ShieldCheck, TrendingDown, Zap } from 'lucide-react';
import { RIBBON_METRICS } from '@/lib/projects';

const ICONS = [Zap, ShieldCheck, Activity, TrendingDown];

export function MetricsRibbon() {
  const reduceMotion = useReducedMotion();
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
      {/* Spacing lives on each item (mr-12), not a flex gap, so the two copies
          tile identically and the -50% loop is a perfect seam — no jump or
          flicker at the wrap. Frozen entirely under reduced-motion. */}
      <motion.div
        className="flex w-max py-5"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 32, ease: 'linear', repeat: Infinity }
        }
      >
        {items.map((m, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={`${m.label}-${i}`}
              className="mr-12 flex shrink-0 items-center gap-3 px-2"
            >
              <Icon className="h-4 w-4 text-emerald-400" strokeWidth={1.75} />
              <span className="font-mono text-sm tracking-wide text-slate-100">
                {m.value}
              </span>
              <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
                {m.label}
              </span>
              <span className="text-slate-600">·</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
