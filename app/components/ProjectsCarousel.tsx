"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  projects: Project[];
};

export function ProjectsCarousel({ projects }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [stickyHeight, setStickyHeight] = useState(0);

  // Measure how far the track has to translate to fully reveal the last card,
  // and size the tall outer container so vertical scroll distance ≈ translation.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;
      const max = Math.max(0, track.scrollWidth - sticky.clientWidth);
      setMaxTranslate(max);
      setStickyHeight(sticky.clientHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -maxTranslate]);

  // Outer section needs to be tall enough that the user can scroll the
  // translation distance plus one viewport height. Falls back to 250vh
  // until measurements land.
  const outerStyle = maxTranslate
    ? { height: `${stickyHeight + maxTranslate}px` }
    : undefined;

  return (
    <div
      ref={sectionRef}
      className="relative h-[250vh] sm:h-[280vh]"
      style={outerStyle}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent"
          aria-hidden
        />

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex will-change-transform"
        >
          {projects.map((p, i) => (
            <ProjectSlide key={p.id} project={p} index={i} />
          ))}
        </motion.div>

        {/* Progress hint */}
        <ProgressIndicator progress={smoothProgress} count={projects.length} />
      </div>
    </div>
  );
}

function ProgressIndicator({
  progress,
  count,
}: {
  progress: import("framer-motion").MotionValue<number>;
  count: number;
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex w-56 -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-slate-500"
      aria-hidden
    >
      <span className="font-mono">01</span>
      <div className="relative h-px flex-1 bg-slate-800">
        <motion.div
          style={{ width }}
          className="absolute inset-y-0 left-0 bg-slate-300"
        />
      </div>
      <span className="font-mono">{String(count).padStart(2, "0")}</span>
    </div>
  );
}

function ProjectSlide({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group flex w-[88vw] shrink-0 flex-col gap-7 border-r border-slate-800/70 px-6 py-2 last:border-r-0 sm:w-[480px] sm:px-10 lg:w-[520px]">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <span className="shrink-0 font-mono text-5xl font-semibold leading-none text-slate-700 sm:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1 text-right">
          <h3 className="text-balance text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
            {project.title}
          </h3>
          <p
            className={`mt-1.5 text-sm font-medium ${
              project.type === "flagship"
                ? "text-emerald-400"
                : "text-indigo-400"
            }`}
          >
            {project.category}
          </p>
        </div>
      </header>

      {/* Visual */}
      <ProjectVisual project={project} />

      {/* Tools & features */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
          Tools and features
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-slate-300">
          {project.tags.join(", ")}
        </p>
      </div>

      {/* CTA */}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-200 transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-100"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Visit Live
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
        </a>
      )}
    </article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const monogram = project.title
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const isFlagship = project.type === "flagship";
  const ringClass = isFlagship
    ? "from-emerald-500/25 via-emerald-500/5 to-transparent"
    : "from-indigo-500/25 via-indigo-500/5 to-transparent";
  const textClass = isFlagship ? "text-emerald-300/40" : "text-indigo-300/40";

  if (project.image) {
    return (
      <div
        className={`relative aspect-[5/4] overflow-hidden rounded-xl border border-slate-800/80 bg-gradient-to-br ${ringClass}`}
      >
        {/* Monogram fallback shows during load / if the screenshot service fails */}
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 grid place-items-center">
          <span
            className={`font-mono text-[88px] font-bold leading-none tracking-tight sm:text-[112px] ${textClass}`}
          >
            {monogram}
          </span>
        </div>
        <Image
          src={project.image}
          alt={`${project.title} — live preview`}
          fill
          sizes="(max-width: 640px) 80vw, 480px"
          className="relative object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          unoptimized
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-slate-800/80 bg-slate-950/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isFlagship ? "bg-emerald-400" : "bg-indigo-400"
            }`}
          />
          Live preview
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[5/4] overflow-hidden rounded-xl border border-slate-800/80 bg-gradient-to-br ${ringClass}`}
    >
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 grid place-items-center">
        <span
          className={`font-mono text-[88px] font-bold leading-none tracking-tight sm:text-[112px] ${textClass}`}
        >
          {monogram}
        </span>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-slate-800/80 bg-slate-950/70 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-300 backdrop-blur-md">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isFlagship ? "bg-emerald-400" : "bg-indigo-400"
          }`}
        />
        {isFlagship ? "Systems" : "Frontend"}
      </div>
    </div>
  );
}
