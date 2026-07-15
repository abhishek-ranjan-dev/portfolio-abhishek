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
    id: "ashwini-kurup",
    title: "Ashwini R. Kurup — Designer & Entrepreneur Portfolio",
    subtitle: "Sustainable Craft Storytelling & Ventures Showcase",
    category: "Personal Brand",
    type: "frontend",
    challenge:
      "Presenting a multi-venture designer profile — spanning artisan collaborations, sustainable product lines, and workshop offerings — inside a single narrative surface without diluting brand craft or fragmenting the reader's journey across sections.",
    architecture: [
      "Content Structure: Modeled distinct surfaces for About, Work, Collections, Workshops, and Contact so each venture reads as a first-class story rather than a nested footnote.",
      "Editorial UI: Paired minimalist typography with high-fidelity photography and image-optimized Next.js pipelines to keep the craft aesthetic sharp on every viewport.",
    ],
    outcome:
      "Delivered a calm, editorial personal brand hub that converts curious visitors into newsletter subscribers and workshop leads while anchoring multiple ventures under one authentic voice.",
    tags: [
      "Next.js",
      "Editorial Layout",
      "Image Optimization",
      "Responsive Design",
    ],
    liveUrl: "https://ashiwinirkurup.vercel.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fashiwinirkurup.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
  {
    id: "kore-digital",
    title: "Kore Digital — Infrastructure Investor Surface",
    subtitle: "NSE-Listed Deep-Tech Corporate & IR Portal",
    category: "Corporate / IR",
    type: "frontend",
    challenge:
      "Translating a multi-pillar infrastructure conglomerate — fiber backbone, AI compute, datacenters, 3D printing, aerospace — into a single credible surface that serves both institutional investors and enterprise partners without turning into a wall of disclosures.",
    architecture: [
      "Narrative Layout: Structured discrete pillars (Fiber, Compute, Datacenter, 3D Printing, Aerospace) as scannable modules so each business line carries its own scale metrics and CTA path.",
      "Trust Signals: Foregrounded NSE ticker, SEBI/NSE compliance markers, and pipeline order metrics with restrained typography to reinforce regulatory credibility over marketing gloss.",
    ],
    outcome:
      "Shipped an institutional-grade corporate site that positions Kore Digital as a serious infrastructure operator, streamlines investor-relations discovery, and holds up under the scrutiny expected of a listed entity.",
    tags: [
      "Next.js",
      "Corporate IR",
      "Metric-Driven Layout",
      "Accessible Typography",
    ],
    liveUrl: "https://kore-digital-wine.vercel.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fkore-digital-wine.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
  },
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
    title: "Monica Hirano — Contemporary Artist Portfolio",
    subtitle: "Trilingual Institutional-Grade Visual Portfolio",
    category: "Visual Portfolio",
    type: "frontend",
    challenge:
      "Housing a decade of contemporary art — installations, video, performance, and collaborative works — inside a single portfolio that satisfies galleries, curators, and international press simultaneously, without turning an image-heavy archive into a slow, cluttered scroll.",
    architecture: [
      "Content Architecture: Separated Artwork, Projects, Art Direction, Text, Info, and Press into distinct routes so each reader intent (buyer vs. curator vs. press) finds its entry point immediately.",
      "Asset Pipeline: Next.js image optimization with responsive variants for gallery scrolling; multilingual metadata (Portuguese, French, Italian) baked into work titles for direct press quotation.",
    ],
    outcome:
      "Delivered a calm, institutional-grade portfolio surfacing 12 individual artworks and 13 collaborative projects (2019–2025) — fast on image-heavy pages and credible enough to stand behind gallery submissions and press pitches.",
    tags: ["Next.js", "Editorial Layout", "Image Optimization", "Multilingual"],
    liveUrl: "https://www.monicahirano.com/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fwww.monicahirano.com%2F&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800",
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
    subtitle: "Governance-First Agentic Discovery Engine (Personal R&D)",
    category: "Personal R&D · Agentic AI",
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
    subtitle: "Custom Observability Middleware (Personal R&D)",
    category: "Personal R&D · Observability",
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
    subtitle: "Real-Time State & Data Visualization Hub (Personal R&D)",
    category: "Personal R&D · Real-time UI",
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
    title: "Frontend & App",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Java", "Spring Boot", "Node.js", "PostgreSQL / Supabase"],
  },
  {
    title: "AI Integration",
    items: [
      "OpenAI / Anthropic",
      "LangChain",
      "RAG Patterns",
      "Cost & Eval Dashboards",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Vercel",
      "Core Web Vitals",
      "Structured Logging",
      "14-Day Bugfix Window",
    ],
  },
];

export const RIBBON_METRICS: { label: string; value: string }[] = [
  { label: "Client Sites Live", value: "5" },
  { label: "Enterprise Tenure", value: "4+ yrs" },
  { label: "Stack", value: "Next.js · Java · Node" },
  { label: "Base", value: "IIT + Big Tech" },
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
