export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "flagship" | "frontend";
  challenge: string;
  architecture: string[];
  outcome: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ashirwaad",
    title: "Ashirwaad Corporate Presence Portal",
    subtitle: "Enterprise Business Infrastructure & Frontend Interface",
    category: "Corporate Web",
    type: "frontend",
    challenge:
      "Transforming traditional corporate identity models into a modern, responsive single-page web asset characterized by sharp typographic hierarchy and zero layout shifting during asset hydration.",
    architecture: [
      "Component Architecture: Architected a modular, component-driven UI pattern to ensure deep codebase maintainability and seamless future expansions.",
      "Performance Optimization: Eliminated render-blocking assets and optimized critical CSS delivery pathways to pass strict Core Web Vitals checks.",
    ],
    outcome:
      "Built a high-conversion, production-ready corporate interface that elevates brand authority and delivers sub-second interaction times on mobile viewports.",
    tags: [
      "React",
      "TypeScript",
      "Clean Architecture",
      "Core Web Vitals Componentization",
    ],
    liveUrl: "https://ashirwaad.netlify.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fashirwaad.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
  {
    id: "monica-hirano",
    title: "Curated International Artist Showcase",
    subtitle: "High-End Visual Portfolio & Dynamic Layout Engine",
    category: "Visual Portfolio",
    type: "frontend",
    challenge:
      "Developing an immersive, image-heavy digital exhibition space for a global artist curation brand without sacrificing initial page load speeds or breaking layout fluidities across varying device breakpoints.",
    architecture: [
      "Asset Pipeline: Implemented rigorous modern image optimization (WebP/AVIF conversions) and asynchronous lazy-loading mechanisms to keep First Contentful Paint (FCP) under 1.2s.",
      "Layout UX: Engineered a highly fluid, responsive grid framework designed to handle asymmetric design elements cleanly across mobile, tablet, and ultra-wide desktop monitors.",
    ],
    outcome:
      "Delivered a premium digital presence that balances heavy visual storytelling with lightning-fast performance, matching the luxury aesthetic expected by global art clientele.",
    tags: ["React", "Tailwind CSS", "High-Performance UI", "Responsive Design"],
    liveUrl: "https://monica-hirano-portfolio.vercel.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fmonica-hirano-portfolio.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
  {
    id: "concept-abc",
    title: "Concept-ABC Interactive Platform",
    subtitle: "Structural Layout & Interactive Component Workspace",
    category: "Interactive UI",
    type: "frontend",
    challenge:
      "Creating a highly structured, scalable user interface layout designed to handle conditional UI states, interactive web elements, and rapid user interactions cleanly.",
    architecture: [
      "State & Layout: Enforced structural layout rules utilizing precise modern CSS flex/grid paradigms, completely separating layout constraints from interactive client state loops.",
      "UX Polish: Integrated smooth transitional animations and robust error-boundary states to keep user retention high during interactive workflows.",
    ],
    outcome:
      "Created a highly interactive frontend proof-of-concept that demonstrates fluent state tracking and a flawless mobile-first user experience.",
    tags: ["React", "Interactive State UX", "Modern Layout Engineering"],
    liveUrl: "https://concept-abc.netlify.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fconcept-abc.netlify.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
  {
    id: "nutrileads",
    title: "NutriLeads Engine",
    subtitle: "Governance-First Agentic Discovery Engine",
    category: "Agentic AI",
    type: "flagship",
    challenge:
      "Raw web data is highly fragmented, unstable, and protected by aggressive bot mitigation. Standard AI implementations frequently expose high-cost API keys in frontends, risking catastrophic financial leaks.",
    architecture: [
      "Ingestion: Headless Puppeteer layer equipped with runtime stealth fingerprinters to bypass dynamic walls.",
      "Security Bridge: Java/Spring Boot proxy pulling short-lived credential leases, isolating keys from the client layer.",
      "Classification: High-velocity LLM orchestration loop sorting raw streams into prioritized intent brackets.",
    ],
    outcome:
      "Automated a manual 6-hour daily lead sourcing operation into a real-time, high-contrast dashboard, reducing operational lead discovery costs to pennies per qualified prospect.",
    tags: [
      "Node.js",
      "Spring Boot",
      "Puppeteer Stealth",
      "LLM Orchestration",
      "Infisical",
    ],
    metrics: [
      { label: "Lead Precision", value: "94%" },
      { label: "Credential Exposure", value: "0%" },
    ],
  },
  {
    id: "token-optimizer",
    title: "AI Token & Cost Optimizer",
    subtitle: "Custom Observability Middleware Layer",
    category: "Observability",
    type: "flagship",
    challenge:
      "Unmonitored agent loops generate massive API overhead, offering zero cost-per-request tracking or performance visibility for enterprise stakeholders.",
    architecture: [
      "Interception: Custom Node.js middleware logging stream telemetry asynchronously.",
      "Aggregation: Java backend evaluating token usage parameters against model accuracy benchmarks.",
      "Observability: Direct pipelines routing structural system analytics directly to an Axiom metrics infrastructure.",
    ],
    outcome:
      "Provided complete cost predictability, allowing systems to flag runaway loops within 200ms of anomaly detection.",
    tags: ["Java", "Node.js", "Axiom", "Telemetry Middleware"],
    metrics: [
      { label: "Loop Detection", value: "<200ms" },
      { label: "Cost Savings", value: "30%" },
    ],
  },
  {
    id: "retail-interface",
    title: "High-Concurrency Retail Interface",
    subtitle: "Real-Time State & Data Visualization Hub",
    category: "Real-time UI",
    type: "frontend",
    challenge:
      "Handling rapid, multi-source API data streams without blocking the main UI thread or causing erratic component re-renders on low-end mobile devices.",
    architecture: [
      "State Management: Decoupled client-side state architecture using optimized context boundaries.",
      "Performance: Strict virtualization rules for long data lists keeping client memory footprints under 50MB.",
    ],
    outcome:
      "Achieved seamless 60fps scrolling and UI consistency under synthetic high-load conditions.",
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
  },
];

export const SKILL_TIERS: { title: string; items: string[] }[] = [
  {
    title: "Orchestration & AI",
    items: ["TypeScript", "Node.js", "LangGraph", "Playwright / Puppeteer"],
  },
  {
    title: "Security & Backend",
    items: ["Java", "Spring Boot", "Microservices", "Infisical / Vault"],
  },
  {
    title: "Data & UI",
    items: ["React", "Tailwind CSS", "Shadcn/UI", "Supabase / Postgres"],
  },
  {
    title: "Observability",
    items: [
      "Axiom",
      "Structured Telemetry",
      "Performance Profiling",
      "Anomaly Alerting",
    ],
  },
];

export const RIBBON_METRICS: { label: string; value: string }[] = [
  { label: "Leads Discovered via AI", value: "15k+" },
  { label: "Security Architecture", value: "Zero-Leak" },
  { label: "Pipeline Uptime", value: "99.9%" },
  { label: "Cost Reduction", value: "30%" },
];

export const TERMINAL_LINES: { tag: string; body: string; tone: string }[] = [
  {
    tag: "SYSTEM",
    body: "NodeJS-Scraper-Agent initialized... OK",
    tone: "emerald",
  },
  {
    tag: "SECURITY",
    body: "Spring-Bridge requested OpenAI short-lived token lease... GRANTED (Vault audit logged)",
    tone: "indigo",
  },
  {
    tag: "INGESTION",
    body: "Deduplication algorithm executed. 42 redundant entries purged.",
    tone: "amber",
  },
  {
    tag: "TELEMETRY",
    body: "Axiom stream healthy — 1.2k events/min ingested, p95 latency 38ms.",
    tone: "emerald",
  },
  {
    tag: "ORCHESTRATION",
    body: "LangGraph loop converged in 3 iterations. Tokens: 4,210 / Budget: 12,000.",
    tone: "indigo",
  },
  {
    tag: "AUDIT",
    body: "No client-side credential exposure detected across 18 deployed surfaces.",
    tone: "amber",
  },
];
