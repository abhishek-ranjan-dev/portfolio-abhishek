import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Mail, Store, Zap, Check } from 'lucide-react';
import { PROJECTS, SKILL_TIERS } from '@/lib/projects';
import { SectionFade } from './components/SectionFade';
import { MetricsRibbon } from './components/MetricsRibbon';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { OperatorSection } from './components/OperatorSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';
import { Monogram } from './components/Monogram';

// Site-identity JSON-LD lives on the homepage (not the root layout), so it does
// not ride along on sub-routes like /cafes that carry their own schema.
const SITE_URL = 'https://ranjanabhishek.com';
const DESCRIPTION =
  'Freelance full-stack developer. I build production websites end-to-end — Next.js, Java, LLM/vector-DB features, observability, deployment. Ex-Flipkart.';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abhishek Ranjan',
  url: SITE_URL,
  image: `${SITE_URL}/assests/abhishek-self-pic.jpg`,
  jobTitle: 'Full-Stack Web Developer & AI Integration Engineer',
  description: DESCRIPTION,
  worksFor: { '@type': 'Organization', name: 'New Relic' },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Indian Institute of Technology (ISM), Dhanbad',
    },
    { '@type': 'Organization', name: 'Flipkart' },
  ],
  knowsAbout: [
    'Full-stack web development',
    'Next.js',
    'React',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Node.js',
    'PostgreSQL',
    'LLM integration',
    'OpenAI API',
    'Anthropic Claude API',
    'Retrieval-Augmented Generation (RAG)',
    'Vector database search',
    'Website observability',
    'QPS and error-rate monitoring',
    'End-to-end deployment',
    'Vercel',
    'AWS',
    'Core Web Vitals',
  ],
  sameAs: [
    'https://www.linkedin.com/in/abhishekranjan0505/',
    'https://github.com/abhishek-ranjan-dev',
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Abhishek Ranjan — Full-Stack & AI Web Development',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description:
    'Freelance full-stack web development with LLM/vector-DB feature integration, observability, and end-to-end deployment. Serving founders and product teams globally.',
  provider: { '@type': 'Person', name: 'Abhishek Ranjan', url: SITE_URL },
  areaServed: 'Global',
  serviceType: [
    'Full-stack web application development',
    'Next.js development',
    'Java / Spring Boot backend development',
    'LLM integration (OpenAI, Anthropic)',
    'Retrieval-Augmented Generation (RAG) with vector databases',
    'Website observability (QPS, error rates, Core Web Vitals)',
    'End-to-end deployment (Vercel, AWS, custom)',
  ],
  knowsAbout: personSchema.knowsAbout,
};

// TODO(~2026-07-25): add Review schema (and AggregateRating on
// professionalServiceSchema if 2+) once client testimonials are in hand — plus
// a visible testimonials section on the page. Highest-leverage remaining AEO move.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Abhishek Ranjan build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Production full-stack websites end-to-end — Next.js/React frontends, Java or Node backends, LLM-powered features and vector-database search wired directly into the app, observability for QPS and error rates, and deployment on the platform of your choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI features does he integrate into websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LLM calls from the application (OpenAI, Anthropic Claude and similar providers), Retrieval-Augmented Generation (RAG) pipelines, and vector-database search for semantic retrieval. Focus is on in-application AI features, not on building MCP servers or model infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the engagement workflow work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Day 1 is a 30-minute discovery call plus a written scope. A live staging URL is available from Day 2 so clients can audit progress before end of week one. Every week includes a 15-minute demo. Launch includes a 14-day window of website maintenance and bug fixes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is his background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bachelor of Technology in Electronics and Instrumentation from IIT (ISM) Dhanbad, 2022. Software engineer at Flipkart (2022–2024) working on high-concurrency distributed systems, and currently a P2 Software Engineer at New Relic on observability platform services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is he based and who does he work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based in India (Hyderabad); available for full-stack and AI-integration contracts globally. Works primarily with founders and product teams that need websites and AI features shipped end-to-end.',
      },
    },
  ],
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
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
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.4v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.37 4.25 5.45v6.3zM5.34 7.43A2.06 2.06 0 1 1 5.35 3.3a2.06 2.06 0 0 1-.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/* Console channel-tag heading used across sections. */
function SectionHead({
  tag,
  title,
  accent,
  children,
}: {
  tag: string;
  title: React.ReactNode;
  accent?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
          <span className="placard placard-signal">{tag}</span>
        </span>
        <span className="groove-full flex-1" aria-hidden />
      </div>
      <h2 className="mt-5 text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[var(--ink)] sm:text-5xl md:text-6xl">
        {title}
        {accent && <span className="text-[var(--signal)]"> {accent}</span>}
      </h2>
      {children && (
        <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:text-base">
          {children}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <a href="#main" className="skip-link btn-signal tap-target px-4 py-2.5 text-sm">
        Skip to content
      </a>
      <CafesPromoBar />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <MetricsRibbon />
        <CafesLiveBanner />
        <OperatorSection />
        <WorkflowSection />
        <WorkSection />
        <ExperienceSection />
        <EducationSection />
        <SkillMatrix />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------ Cafes live banner -------------------------- */

// Optional banner photo (a cafe interior / storefront works best). The card is
// a clean solid dark surface by default; drop a wide ~1600×500 image at
// public/assests/cafes-banner.jpg and it fades in as a subtle right-side
// texture without hurting text legibility.
const CAFES_BANNER_IMG = '/assests/cafes-banner.jpg';

const CAFES_TRUST = [
  'IIT Alumnus Built',
  'Integrated UPI & Rider Dispatch',
  '100% Refund Guarantee',
];

/* A "now live" showcase card that previews the dark /cafes world inside the
   light homepage. Entire card links to /cafes; hover lifts it, warms the border
   glow, and nudges the CTA arrow. */
function CafesLiveBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
      <Link
        href="/cafes"
        aria-label="See cafe storefront plans and pricing — now live"
        className="group relative block overflow-hidden rounded-2xl border border-slate-800 bg-[#0B132B] p-6 shadow-[0_10px_30px_-18px_rgba(40,36,28,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-[0_22px_50px_-24px_rgba(217,119,6,0.45)] md:p-8"
      >
        {/* Optional background texture — invisible until an image exists */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.16] transition-transform duration-700 [mask-image:linear-gradient(to_right,transparent,transparent_45%,black)] group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${CAFES_BANNER_IMG})` }}
          aria-hidden
        />
        {/* Amber/emerald border glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(60% 120% at 0% 0%, rgba(217,119,6,0.18), transparent 60%), radial-gradient(60% 120% at 100% 100%, rgba(5,150,105,0.16), transparent 60%)',
          }}
          aria-hidden
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <div>
            {/* Header pill row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/80 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Now live
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1">
                <Zap className="h-3 w-3 text-amber-400" aria-hidden />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                  3–5 Day Turnaround
                </span>
              </span>
            </div>

            {/* Headline */}
            <h3 className="mt-4 text-balance text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-3xl">
              Cafe Storefronts,{' '}
              <span className="text-amber-400">0% Commission</span>
            </h3>

            {/* Subtitle */}
            <p className="mt-3 max-w-xl text-pretty text-[13.5px] leading-relaxed text-slate-300 sm:text-sm">
              Direct-ordering mobile storefronts for Hyderabad cafes. Stop giving
              away 30% aggregator margins — physical tabletop QR kit included with
              a 3-month risk-free trial.
            </p>

            {/* Secondary trust pills (desktop) */}
            <ul className="mt-4 hidden flex-wrap items-center gap-x-4 gap-y-2 sm:flex">
              {CAFES_TRUST.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-slate-300"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 font-semibold text-white shadow-lg shadow-amber-600/20 transition-colors group-hover:bg-amber-500">
            See Cafe Plans &amp; Pricing
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </section>
  );
}

/* ------------------------------ Cafes promo bar ---------------------------- */

/* Full-width "now offering" strip on the signal accent — the sale-banner
   pattern, so the /cafes offer reads instantly on load. Kept persistently
   reachable via the header pill below. */
function CafesPromoBar() {
  return (
    <Link
      href="/cafes"
      className="group block w-full bg-[var(--signal)] text-white transition-colors hover:bg-[var(--signal-ink)]"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2.5 text-center sm:px-8">
        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Now offering
          </span>
        </span>
        <span className="text-[13px] font-semibold sm:text-sm">
          Own a cafe? Launch a{' '}
          <span className="font-bold underline decoration-white/40 underline-offset-2">
            0% commission
          </span>{' '}
          direct-ordering storefront in days.
        </span>
        <span className="inline-flex items-center gap-1 text-[13px] font-bold underline-offset-2 group-hover:underline">
          See cafe plans
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/* ---------------------------------- Header --------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--panel-2)_85%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] shadow-[inset_0_1px_0_var(--edge-hi),0_2px_5px_-3px_rgba(40,36,28,0.6)] transition-colors group-hover:border-[var(--signal)]">
            <Monogram className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight text-[var(--ink)]">
              Abhishek Ranjan
            </span>
            <span className="placard mt-1 hidden sm:block">Full-Stack · AI</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            ['Work', '#work'],
            ['Delivery', '#workflow'],
            ['Career', '#experience'],
            ['Stack', '#skills'],
            ['FAQ', '#faq'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="placard transition-colors hover:text-[var(--signal-ink)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/cafes"
            className="tap-target hidden items-center gap-2 rounded-md border border-[var(--signal)] bg-[var(--signal-tint)] px-3 py-1.5 transition-colors hover:bg-[color-mix(in_srgb,var(--signal-tint)_70%,var(--signal))] sm:inline-flex"
          >
            <Store className="h-3.5 w-3.5 text-[var(--signal-ink)]" />
            <span className="placard placard-signal">For cafes</span>
            <ArrowRight className="h-3 w-3 text-[var(--signal-ink)]" />
          </Link>
          <a
            href="mailto:a.ranjan.tech@gmail.com?subject=Project%20Brief"
            className="btn-signal tap-target px-4 py-2 text-xs sm:text-sm"
          >
            Send a Brief
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

const HERO_READOUTS = [
  { value: '4+', unit: 'YRS', label: 'Shipping in production' },
  { value: '6', unit: 'LIVE', label: 'Client sites launched' },
  { value: 'AI', unit: 'RDY', label: 'LLM · RAG · vector search' },
];

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-7 pb-14 sm:px-8 sm:pt-16 sm:pb-20">
        {/* The console */}
        <div className="screws relative panel overflow-hidden p-6 sm:p-9 md:p-12">
          {/* Header strip */}
          <div className="power-on po-1 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--panel-2)] px-2.5 py-1 shadow-[inset_0_1px_0_var(--edge-hi)]">
              <span className="readout-num text-[11px] font-bold text-[var(--signal-ink)]">
                IIT
              </span>
              <span className="placard">(ISM) Dhanbad · Alum</span>
            </span>
            <span className="annunciator">
              <span className="lamp" aria-hidden />
              <span className="placard placard-signal">Open for briefs</span>
            </span>
          </div>

          <div className="groove-full mt-5" aria-hidden />

          {/* Main readout + operator */}
          <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[1.2fr_1fr] lg:items-stretch lg:gap-8">
            <div>
              <h1 className="power-on po-2 text-balance text-[12vw] font-extrabold uppercase leading-[0.86] tracking-[-0.04em] text-[var(--ink)] sm:text-7xl md:text-[86px] lg:text-[92px]">
                One engineer.
                <br />
                <span className="text-[var(--signal)]">Whole tech team.</span>
              </h1>

              <p className="power-on po-3 mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--ink-mid)] sm:mt-7 sm:text-[17px]">
                I design, build, and launch complete websites and web apps —
                including modern AI features like smart search and chatbots.
                Straight talk, honest timelines, and one person you can actually
                reach.
              </p>

              <div className="power-on po-4 mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <a
                  href="mailto:a.ranjan.tech@gmail.com?subject=Project%20Brief"
                  className="btn-signal tap-target w-full px-6 py-3 text-[15px] sm:w-auto"
                >
                  Send a Brief
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="btn-metal tap-target w-full px-6 py-3 text-[15px] sm:w-auto"
                >
                  See my work
                </a>
              </div>

              {/* Instrument readout cluster */}
              <div className="power-on po-5 mt-8 grid grid-cols-3 gap-3">
                {HERO_READOUTS.map((r) => (
                  <div
                    key={r.label}
                    className="panel-inset flex min-w-0 flex-col px-3 py-3.5 sm:px-4 sm:py-4"
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span className="readout-num text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                        {r.value}
                      </span>
                      <span className="readout-num text-[11px] font-bold text-[var(--signal-ink)]">
                        {r.unit}
                      </span>
                    </div>
                    <span className="placard mt-2 hidden leading-[1.4] sm:block">
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operator (desktop) — rises from the console floor, hard bottom edge
                bled off the panel so the torso reads as continuing downward */}
            <div className="power-on po-4 relative hidden self-stretch lg:block" aria-hidden>
              <div
                className="pointer-events-none absolute inset-x-6 bottom-0 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(120,112,96,0.22),transparent_70%)]"
                aria-hidden
              />
              <div className="absolute right-0 bottom-0 -mr-9 -mb-16 aspect-square w-[380px] md:-mr-12 xl:w-[440px]">
                <Image
                  src="/assests/abhishek-self-pic-removebg-preview.png"
                  alt="Abhishek Ranjan"
                  fill
                  sizes="440px"
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Work section ----------------------------- */

function WorkSection() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-24">
        <SectionFade>
          <SectionHead tag="CH · WORK" title="Shipped" accent="work">
            Production sites launched for real clients — an NSE-listed
            conglomerate, a designer entrepreneur, an international contemporary
            artist — alongside engineering case studies from personal AI R&amp;D.
          </SectionHead>
        </SectionFade>
      </div>

      {/* No SectionFade wrapper — a transformed ancestor breaks position: sticky. */}
      <div className="mt-10 pb-20 sm:mt-12 sm:pb-24">
        <ProjectsCarousel projects={PROJECTS} />
      </div>
    </section>
  );
}

/* --------------------------- Capability instruments ----------------------- */

function SkillMatrix() {
  return (
    <section id="skills" className="relative border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionFade>
          <SectionHead tag="CH · STACK" title="Skill" accent="sets">
            Grouped by the role each layer plays in shipping a full-stack
            application — from pixel-perfect frontend to backend, AI integration,
            and delivery discipline. Every channel below is installed and ready.
          </SectionHead>
        </SectionFade>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_TIERS.map((tier, i) => (
            <SectionFade key={tier.title} delay={i * 0.06}>
              <div className="screws-b relative panel panel-lift flex h-full flex-col p-5 pb-8">
                <div className="flex items-center justify-between">
                  <span className="placard placard-signal">{tier.title}</span>
                  <span className="readout-num text-[11px] text-[var(--ink-soft)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="groove-full mt-4" aria-hidden />
                <ul className="mt-4 space-y-2">
                  {tier.items.map((it) => (
                    <li
                      key={it}
                      className="panel-inset flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-[var(--ink)]"
                    >
                      <span className="lamp shrink-0" aria-hidden style={{ width: 7, height: 7 }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer -------------------------------- */

function Footer() {
  const links = [
    { href: 'mailto:a.ranjan.tech@gmail.com', label: 'a.ranjan.tech@gmail.com', Icon: Mail },
    { href: 'https://github.com/abhishek-ranjan-dev', label: 'GitHub', Icon: GithubIcon },
    {
      href: 'https://www.linkedin.com/in/abhishekranjan0505/',
      label: 'LinkedIn',
      Icon: LinkedinIcon,
    },
  ];
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="screws relative panel overflow-hidden p-6 sm:p-9">
          <div className="flex flex-col gap-8 pt-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] shadow-[inset_0_1px_0_var(--edge-hi)]">
                  <Monogram className="h-4 w-4" />
                </span>
                <span className="text-[15px] font-bold tracking-tight text-[var(--ink)]">
                  Abhishek Ranjan
                </span>
              </div>
              <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-[var(--ink-mid)]">
                One senior engineer — Next.js, Java / Spring, AI integrations —
                designing, building, and launching complete websites and web apps.
                Open to project-based and retainer contracts.
              </p>
              <div className="mt-5 annunciator w-fit">
                <span className="lamp" aria-hidden />
                <span className="placard placard-signal">Open for briefs</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {links.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="btn-metal tap-target group px-4 py-2.5 text-xs sm:px-3.5 sm:py-2"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--ink-soft)]" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 text-[var(--ink-soft)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="groove-full mt-8" aria-hidden />
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="placard" suppressHydrationWarning>
              © {new Date().getFullYear()} Abhishek Ranjan
            </span>
            <span className="placard">Built end-to-end · Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
