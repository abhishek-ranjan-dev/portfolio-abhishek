"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
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
  const reduceMotion = useReducedMotion();

  // Touch devices swipe; they don't expect a vertical-scroll-driven horizontal
  // carousel. Detect a coarse primary pointer client-side (default false so the
  // first client render matches SSR) and serve the native scroll list instead.
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const useStaticList = reduceMotion || isTouch;

  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [stickyHeight, setStickyHeight] = useState(0);

  useEffect(() => {
    if (useStaticList) return;
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
  }, [useStaticList]);

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

  const outerStyle = maxTranslate
    ? { height: `${stickyHeight + maxTranslate}px` }
    : undefined;

  if (useStaticList) {
    return (
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--desk)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--desk)] to-transparent"
          aria-hidden
        />
        <ul
          className="console-scroll flex snap-x snap-mandatory list-none gap-0 overflow-x-auto px-5 pb-4 sm:px-8 [&>li]:snap-start"
          aria-label="Selected projects"
        >
          {projects.map((p, i) => (
            <li key={p.id} className="flex shrink-0">
              <ProjectSlide project={p} index={i} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative h-[250vh] sm:h-[280vh]" style={outerStyle}>
      <div ref={stickyRef} className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--desk)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--desk)] to-transparent"
          aria-hidden
        />

        <motion.div ref={trackRef} style={{ x }} className="flex will-change-transform">
          {projects.map((p, i) => (
            <ProjectSlide key={p.id} project={p} index={i} />
          ))}
        </motion.div>

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
      className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex w-56 -translate-x-1/2 items-center gap-3"
      aria-hidden
    >
      <span className="readout-num text-[11px] font-bold text-[var(--ink-soft)]">01</span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full border border-[var(--line)] bg-[var(--well)] shadow-[inset_0_1px_2px_rgba(90,84,70,0.35)]">
        <motion.div
          style={{ width }}
          className="absolute inset-y-0 left-0 bg-[var(--signal)]"
        />
      </div>
      <span className="readout-num text-[11px] font-bold text-[var(--ink-soft)]">
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}

function ProjectSlide({ project, index }: { project: Project; index: number }) {
  const slideClassName =
    "group flex w-[88vw] shrink-0 flex-col gap-6 border-r border-[var(--line)] px-6 py-2 last:border-r-0 sm:w-[480px] sm:px-10 lg:w-[520px]";

  const isFlagship = project.type === "flagship";

  const body = (
    <>
      <header className="flex items-start justify-between gap-4">
        <span className="readout-num shrink-0 text-5xl font-bold leading-none text-[var(--line)] sm:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1 text-right">
          <h3 className="text-balance text-lg font-bold leading-tight tracking-tight text-[var(--ink)] sm:text-xl">
            {project.title}
          </h3>
          <p className="placard placard-signal mt-2">{project.category}</p>
        </div>
      </header>

      <ProjectVisual project={project} isFlagship={isFlagship} />

      <div>
        <p className="placard">Tools and features</p>
        <p className="mt-2 text-[14px] leading-relaxed text-[var(--ink-mid)]">
          {project.tags.join(", ")}
        </p>
      </div>

      {project.liveUrl && (
        <span className="btn-signal mt-auto w-fit px-3.5 py-1.5 text-xs">
          <ExternalLink className="h-3.5 w-3.5" />
          Visit live
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </>
  );

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — opens in a new tab`}
        className={`${slideClassName} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]`}
      >
        {body}
      </a>
    );
  }

  return <article className={slideClassName}>{body}</article>;
}

function ProjectVisual({ project, isFlagship }: { project: Project; isFlagship: boolean }) {
  const monogram = project.title
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="panel-inset relative aspect-[5/4] overflow-hidden">
      {/* Monogram fallback shows during load / if the screenshot service fails */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="readout-num text-[80px] font-bold leading-none tracking-tight text-[var(--line)] sm:text-[104px]">
          {monogram}
        </span>
      </div>

      {project.image && (
        <Image
          src={project.image}
          alt={`${project.title} — live preview`}
          fill
          sizes="(max-width: 640px) 80vw, 480px"
          className="relative object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      )}

      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_88%,transparent)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)] backdrop-blur-sm">
        <span
          className={isFlagship ? "lamp-signal lamp" : "lamp"}
          aria-hidden
          style={{ width: 7, height: 7 }}
        />
        <span className="placard">
          {project.image ? "Live preview" : isFlagship ? "Systems" : "Frontend"}
        </span>
      </div>
    </div>
  );
}
