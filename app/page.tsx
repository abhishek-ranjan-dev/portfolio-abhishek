import {
  ArrowRight,
  Cpu,
  Database,
  Layers,
  LineChart,
  Mail,
  ShieldCheck,
  Sparkles,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { PROJECTS, SKILL_TIERS } from '@/lib/projects';
import { SectionFade } from './components/SectionFade';
import { MetricsRibbon } from './components/MetricsRibbon';
import { Terminal } from './components/Terminal';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';

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

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.4v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.37 4.25 5.45v6.3zM5.34 7.43A2.06 2.06 0 1 1 5.35 3.3a2.06 2.06 0 0 1-.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const TIER_ICONS = [Cpu, ShieldCheck, Layers, LineChart];
const TIER_ACCENTS = [
  'text-indigo-400 border-indigo-500/30 bg-indigo-500/5',
  'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
  'text-amber-400 border-amber-500/30 bg-amber-500/5',
  'text-sky-400 border-sky-500/30 bg-sky-500/5',
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MetricsRibbon />
        <WorkflowSection />
        <WorkSection />
        <ExperienceSection />
        <EducationSection />
        <SkillMatrix />
        <FaqSection />
        {/* TODO: re-enable later — "Live security flex" / SystemTerminal section */}
        {/* <SystemTerminal /> */}
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------- Header --------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/80 bg-slate-950/60 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="group flex items-center gap-2.5 font-medium tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md border border-slate-800 bg-slate-900/70 text-emerald-400 transition-colors group-hover:border-emerald-500/40">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <span className="text-sm text-slate-200 sm:text-[15px]">
            Abhishek Ranjan
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <a href="#work" className="transition-colors hover:text-slate-100">
            Work
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-slate-100"
          >
            Experience
          </a>
          <a href="#skills" className="transition-colors hover:text-slate-100">
            Skills
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-100">
            FAQ
          </a>
        </nav>
        <a
          href="mailto:a.ranjan.tech@gmail.com?subject=Project%20Brief"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 transition-all hover:border-emerald-400/60 hover:bg-emerald-500/15 hover:text-emerald-200 sm:text-sm"
        >
          Start a Project
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 bg-spotlight" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
        <SectionFade className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>● Available for full-stack & AI-integration contracts</span>
          </div>

          <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[58px]">
            Full-Stack Websites with{' '}
            <span className="bg-gradient-to-br from-emerald-300 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              AI Features
            </span>
            , Shipped End-to-End.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-[17px]">
            I build production websites end-to-end — pixel-perfect frontends,
            scalable backends, LLM-powered features and vector-DB search wired
            in, observability for QPS and error rates baked in, and full
            deployment on the platform of your choice.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              View Shipped Projects →
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:a.ranjan.tech@gmail.com?subject=Project%20Brief"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-900/70 sm:w-auto"
            >
              <TerminalIcon className="h-4 w-4 text-slate-400" />
              Send a Brief
            </a>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}

/* ----------------------------- Work (tabs explorer) ----------------------- */

function WorkSection() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28">
        <SectionFade>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              My{' '}
              <span className="bg-gradient-to-br from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Production sites shipped for real clients — an NSE-listed
              conglomerate, a designer entrepreneur, an international
              contemporary artist — alongside engineering case studies from
              personal AI R&amp;D. Scroll through.
            </p>
          </div>
        </SectionFade>
      </div>

      {/* No SectionFade wrapper — a transformed ancestor breaks position: sticky inside the carousel */}
      <div className="mt-12 pb-24 sm:mt-14 sm:pb-28">
        <ProjectsCarousel projects={PROJECTS} />
      </div>
    </section>
  );
}

/* ----------------------------- Skill matrix ------------------------------- */

function SkillMatrix() {
  return (
    <section id="skills" className="relative border-t border-slate-900/80">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <SectionFade>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Core skill{' '}
              <span className="bg-gradient-to-br from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                matrix
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Grouped by the role each layer plays in shipping a full-stack
              application — from pixel-perfect frontend to backend, AI
              integration, and delivery discipline.
            </p>
          </div>
        </SectionFade>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_TIERS.map((tier, i) => {
            const Icon = TIER_ICONS[i % TIER_ICONS.length];
            const accent = TIER_ACCENTS[i % TIER_ACCENTS.length];
            return (
              <SectionFade key={tier.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
                  <div
                    className={`inline-flex w-fit items-center gap-2 rounded-md border px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] ${accent}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {tier.title}
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {tier.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-3 rounded-md border border-slate-800/70 bg-slate-950/40 px-3 py-2 font-mono text-[12.5px] text-slate-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-slate-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- System status terminal ----------------------- */

function SystemTerminal() {
  return (
    <section id="system" className="relative border-t border-slate-900/80">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <SectionFade>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5" /> Live security flex
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Every system ships with an audit log — not an excuse.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
                The terminal mirrors how I think about production: short-lived
                credentials, deterministic ingestion, deduplicated state, and
                telemetry routed straight to an observability backend. No
                client-side secrets, no silent failures, no blind cost exposure.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: <ShieldCheck className="h-3.5 w-3.5" />,
                    label: 'Zero client-side secret exposure',
                  },
                  {
                    icon: <Database className="h-3.5 w-3.5" />,
                    label: 'Deterministic ingestion & dedupe',
                  },
                  {
                    icon: <LineChart className="h-3.5 w-3.5" />,
                    label: 'Structured telemetry → Axiom',
                  },
                  {
                    icon: <Cpu className="h-3.5 w-3.5" />,
                    label: 'Budget-aware orchestration loops',
                  },
                ].map((b) => (
                  <li
                    key={b.label}
                    className="flex items-center gap-3 rounded-lg border border-slate-800/70 bg-slate-900/30 px-3 py-2.5 text-sm text-slate-300"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-md border border-slate-800 bg-slate-950/60 text-emerald-400">
                      {b.icon}
                    </span>
                    {b.label}
                  </li>
                ))}
              </ul>
            </div>
          </SectionFade>

          <SectionFade delay={0.1}>
            <Terminal />
          </SectionFade>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Section header helper ------------------------ */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-[40px] sm:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-slate-900/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="grid h-6 w-6 place-items-center rounded-md border border-slate-800 bg-slate-900/70 text-emerald-400">
              <Sparkles className="h-3 w-3" />
            </span>
            Abhishek Ranjan
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-500">
            Senior full-stack contractor — Next.js, Java-Spring, AI
            integrations. Open to project-based and retainer contracts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:a.ranjan.tech@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-3.5 py-2 text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" /> a.ranjan.tech@gmail.com
          </a>
          <a
            href="https://github.com/abhishek-ranjan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-3.5 py-2 text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
          >
            <GithubIcon className="h-3.5 w-3.5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishekranjan0505/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-3.5 py-2 text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
          >
            <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-slate-500 sm:px-8">
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} Abhishek Ranjan
          </span>
        </div>
      </div>
    </footer>
  );
}
