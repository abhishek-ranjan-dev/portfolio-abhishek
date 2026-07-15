export type ExperienceAccent = "emerald" | "indigo" | "amber" | "sky";

export interface WorkExperience {
  company: string;
  companyUrl?: string;
  monogram: string;
  accent: ExperienceAccent;
  shortPeriod: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  shortName: string;
  degree: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export const EXPERIENCE: WorkExperience[] = [
  {
    company: "New Relic",
    companyUrl: "https://www.linkedin.com/company/new-relic-inc-/",
    monogram: "NR",
    accent: "emerald",
    shortPeriod: "2024 → NOW",
    role: "Software Engineer",
    period: "Jul 2024 — Present",
    location: "Hyderabad, Telangana, India (Hybrid)",
    type: "Full-time",
    highlights: [
      "Architecting and maintaining high-throughput core platform services, ensuring strict system uptime and low-latency metrics processing.",
      "Leveraging advanced enterprise telemetry and observability paradigms to optimize service delivery and isolate system anomalies under high-load conditions.",
      "Managing complex lifecycle updates and microservice governance patterns across distributed backend teams.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "System Observability",
      "Telemetry Pipelines",
      "Microservices",
    ],
  },
  {
    company: "Flipkart",
    companyUrl: "https://www.linkedin.com/company/flipkart/",
    monogram: "FK",
    accent: "indigo",
    shortPeriod: "2022 → 2024",
    role: "Software Development Engineer",
    period: "Jun 2022 — Apr 2024",
    location: "Bengaluru, Karnataka, India",
    type: "Full-time",
    highlights: [
      "Engineered high-concurrency distributed systems handling massive transactional traffic volume for India's leading e-commerce platform.",
      "Optimized storage retrieval networks and cached backend pathways using Google Cloud Storage (GCS) and custom proxy mechanisms to minimize server overhead.",
      "Collaborated on cross-functional infrastructure sprints to scale critical checkout and product discovery pipelines.",
    ],
    skills: [
      "Distributed Systems",
      "Cloud Infrastructure (GCS)",
      "High-Concurrency",
      "Java",
      "Backend Architecture",
    ],
  },
  {
    company: "The 10x Academy",
    monogram: "10x",
    accent: "amber",
    shortPeriod: "Feb → May 2022",
    role: "DSA and Full Stack Mentor",
    period: "Feb 2022 — May 2022",
    location: "Remote",
    type: "Part-time",
    highlights: [
      "Directed technical training paths for aspiring engineers, specializing in advanced Data Structures, Algorithms (DSA), and systematic full-stack system scaling.",
      "Evaluated systemic codebase implementations and taught performance optimization patterns for modern web apps.",
    ],
    skills: [
      "Data Structures & Algorithms",
      "Full Stack Mentorship",
      "System Design Patterns",
    ],
  },
  {
    company: "DigiVats",
    monogram: "DV",
    accent: "sky",
    shortPeriod: "2021 → 2022",
    role: "Website Developer Intern",
    period: "Jan 2021 — May 2022",
    location: "Remote",
    type: "Freelance",
    highlights: [
      "Developed responsive client architecture frameworks, optimizing frontend asset footprints and cross-device render lifecycles.",
      "Translated custom business logic specifications into scalable UI systems with sub-second client load distributions.",
    ],
    skills: [
      "Responsive Web Design",
      "Client State Engineering",
      "UI Componentization",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Indian Institute of Technology (ISM), Dhanbad",
    shortName: "IIT (ISM) Dhanbad",
    degree: "Bachelor of Technology — Electronics and Instrumentation",
    period: "Aug 2018 — Jun 2022",
    highlights: [
      "Developed a strong foundation in analytical problem solving, algorithmic efficiency, and complex system logic design.",
      "Leveraged intensive engineering training to cultivate high-performance computational models and programmatic automation workflows.",
    ],
  },
];

export const CAREER_STATS: { label: string; value: string }[] = [
  { label: "Years shipping", value: "4+" },
  { label: "Enterprises", value: "New Relic · Flipkart" },
  { label: "Stack", value: "Next.js · Java · Node" },
  { label: "Education", value: "IIT (ISM) Dhanbad 2022" },
];
