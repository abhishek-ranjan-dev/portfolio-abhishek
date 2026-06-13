import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.65.56.1.76-.24.76-.54v-1.91c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.71 2.63 1.21 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.31 3.1 1.16a10.75 10.75 0 0 1 5.64 0c2.15-1.47 3.1-1.16 3.1-1.16.62 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.63 5.29-5.14 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.27 11.27 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z"
      />
    </svg>
  );
}

export function FieldBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
          {label}
        </span>
        <span className="h-px flex-1 bg-slate-800" />
      </div>
      {children}
    </div>
  );
}

function LivePill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      Live
    </span>
  );
}

function LiveButton({
  href,
  size = "sm",
  label = "Visit Live Site",
}: {
  href: string;
  size?: "sm" | "md";
  label?: string;
}) {
  const sizing =
    size === "md"
      ? "px-4 py-2 text-sm"
      : "px-3 py-1.5 text-xs";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 ${sizing} font-medium text-emerald-200 transition-all hover:border-emerald-400/70 hover:bg-emerald-500/20 hover:text-emerald-100`}
    >
      <ExternalLink className="h-3.5 w-3.5" />
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function FlagshipCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-all hover:-translate-y-0.5 hover:border-slate-700/80 sm:p-8">
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(129,140,248,0.08), transparent 40%)",
        }}
        aria-hidden
      />

      {project.metrics && (
        <div className="flex flex-wrap gap-3">
          {project.metrics.map((m, i) => (
            <div
              key={m.label}
              className={`rounded-lg border px-3 py-2 ${
                i === 0
                  ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-300"
                  : "border-indigo-500/30 bg-indigo-500/5 text-indigo-300"
              }`}
            >
              <div className="font-mono text-lg font-semibold leading-none">
                {m.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[22px]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
        </div>
        {project.liveUrl && <LivePill />}
      </div>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-300">
        <FieldBlock label="Challenge">
          <p>{project.challenge}</p>
        </FieldBlock>

        <FieldBlock label="Architecture">
          <ul className="space-y-2.5">
            {project.architecture.map((a) => (
              <li key={a} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-slate-300">{a}</span>
              </li>
            ))}
          </ul>
        </FieldBlock>

        <FieldBlock label="Outcome">
          <p className="text-slate-200">{project.outcome}</p>
        </FieldBlock>
      </div>

      <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-800/80 pt-5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1 font-mono text-[11px] tracking-wide text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.liveUrl && <LiveButton href={project.liveUrl} size="md" />}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-700 hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" /> View Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function FrontendCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-all hover:-translate-y-0.5 hover:border-slate-700/80">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-400/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Frontend system
        </div>
        {project.liveUrl && <LivePill />}
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
        <FieldBlock label="Challenge">
          <p>{project.challenge}</p>
        </FieldBlock>
        <FieldBlock label="Engineering">
          <ul className="space-y-2">
            {project.architecture.map((a) => (
              <li key={a} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </FieldBlock>
        <FieldBlock label="Outcome">
          <p className="text-slate-200">{project.outcome}</p>
        </FieldBlock>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 font-mono text-[11px] tracking-wide text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.liveUrl && <LiveButton href={project.liveUrl} />}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-700 hover:text-white"
            >
              <GithubIcon className="h-3 w-3" /> Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
