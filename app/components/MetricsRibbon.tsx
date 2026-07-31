'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { RIBBON_METRICS } from '@/lib/projects';

export function MetricsRibbon() {
  const reduceMotion = useReducedMotion();
  const items = [...RIBBON_METRICS, ...RIBBON_METRICS]; // duplicated for a seamless loop

  return (
    <div className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--desk-deep)] shadow-[inset_0_2px_6px_-4px_rgba(60,54,42,0.4),inset_0_1px_0_var(--edge-hi)]">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--desk-deep)] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--desk-deep)] to-transparent"
        aria-hidden
      />
      {/* Spacing lives on each item (mr-10), not a flex gap, so the two copies tile
          identically and the -50% loop seams cleanly. Frozen under reduced-motion. */}
      <motion.div
        className="flex w-max py-3.5"
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={
          reduceMotion ? undefined : { duration: 34, ease: 'linear', repeat: Infinity }
        }
      >
        {items.map((m, i) => (
          <div key={`${m.label}-${i}`} className="mr-10 flex shrink-0 items-center gap-3 px-2">
            <span className="lamp shrink-0" aria-hidden style={{ width: 7, height: 7 }} />
            <span className="readout-num text-sm font-bold text-[var(--ink)]">{m.value}</span>
            <span className="placard">{m.label}</span>
            <span className="text-[var(--line)]" aria-hidden>
              /
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
