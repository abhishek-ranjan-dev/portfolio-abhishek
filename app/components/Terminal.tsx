"use client";

import { useEffect, useState } from "react";
import { TERMINAL_LINES } from "@/lib/projects";

const TONES: Record<string, string> = {
  emerald: "text-emerald-400",
  indigo: "text-indigo-400",
  amber: "text-amber-400",
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Terminal() {
  const [visible, setVisible] = useState(0);
  const [tick, setTick] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 650);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 1100);
    return () => clearInterval(i);
  }, []);

  const lines = TERMINAL_LINES.slice(0, visible);
  const baseSeconds = 14 * 3600 + 32 * 60 + 17 + tick;
  const hh = Math.floor(baseSeconds / 3600) % 24;
  const mm = Math.floor(baseSeconds / 60) % 60;
  const ss = baseSeconds % 60;
  const now = mounted ? `${pad(hh)}:${pad(mm)}:${pad(ss)}` : "14:32:17";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
          system-status · production
        </span>
        <span className="font-mono text-[11px] text-slate-500">{now} UTC</span>
      </div>

      {/* Body */}
      <div className="terminal-scroll max-h-[420px] overflow-y-auto px-5 py-5 font-mono text-[13px] leading-7 text-slate-300 sm:px-7">
        {lines.map((l, i) => (
          <div key={`${l.tag}-${i}`} className="flex gap-3">
            <span className="select-none text-slate-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className={`${TONES[l.tone]} mr-1`}>[{l.tag}]</span>
              <span className="text-slate-300">{l.body}</span>
            </span>
          </div>
        ))}
        {visible < TERMINAL_LINES.length && (
          <div className="flex gap-3">
            <span className="select-none text-slate-600">
              {String(visible + 1).padStart(2, "0")}
            </span>
            <span className="text-slate-500">
              {">"} <span className="terminal-caret">&nbsp;</span>
            </span>
          </div>
        )}
        {visible >= TERMINAL_LINES.length && (
          <div className="mt-2 flex items-center gap-3 text-slate-500">
            <span className="select-none text-slate-600">
              {String(visible + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="text-emerald-400">[STATUS]</span> all subsystems
              nominal. awaiting next event{" "}
              <span className="terminal-caret">&nbsp;</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
