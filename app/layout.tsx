import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ranjanabhishek.com";
// Title kept ≤60 chars so Google/Bing render it without truncation.
const TITLE = "Abhishek Ranjan — Full-Stack + AI Web Developer";
// Description kept ≤155 chars for full SERP display.
const DESCRIPTION =
  "Freelance full-stack developer. I build production websites end-to-end — Next.js, Java, LLM/vector-DB features, observability, deployment. Ex-Flipkart.";
const OG_DESCRIPTION =
  "Full-stack websites with LLM and vector-DB features wired in, QPS/error-rate observability, and end-to-end deployment. Ex-Flipkart · IIT Dhanbad.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Abhishek Ranjan — Portfolio",
  authors: [{ name: "Abhishek Ranjan", url: SITE_URL }],
  creator: "Abhishek Ranjan",
  publisher: "Abhishek Ranjan",
  keywords: [
    "Abhishek Ranjan",
    "full-stack developer",
    "Next.js developer",
    "AI integration developer",
    "LLM integration developer",
    "RAG developer",
    "vector database search",
    "website observability",
    "freelance web developer",
    "end-to-end web development",
    "Java developer",
    "IIT Dhanbad",
    "ex-Flipkart",
    "New Relic",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Abhishek Ranjan — Portfolio",
    title: TITLE,
    description: OG_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
  },
  // TODO: paste the token Google Search Console gives you at
  // https://search.google.com/search-console when you add ranjanabhishek.com
  // as a URL-prefix property, then replace the empty string below.
  verification: { google: "" },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Ranjan",
  url: SITE_URL,
  jobTitle: "Full-Stack Web Developer & AI Integration Engineer",
  description: DESCRIPTION,
  worksFor: { "@type": "Organization", name: "New Relic" },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology (ISM), Dhanbad",
    },
    { "@type": "Organization", name: "Flipkart" },
  ],
  knowsAbout: [
    "Full-stack web development",
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "LLM integration",
    "OpenAI API",
    "Anthropic Claude API",
    "Retrieval-Augmented Generation (RAG)",
    "Vector database search",
    "Website observability",
    "QPS and error-rate monitoring",
    "End-to-end deployment",
    "Vercel",
    "AWS",
    "Core Web Vitals",
  ],
  sameAs: [
    "https://www.linkedin.com/in/abhishekranjan0505/",
    "https://github.com/abhishek-ranjan-dev",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Abhishek Ranjan — Full-Stack & AI Web Development",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Freelance full-stack web development with LLM/vector-DB feature integration, observability, and end-to-end deployment. Serving founders and product teams globally.",
  provider: { "@type": "Person", name: "Abhishek Ranjan", url: SITE_URL },
  areaServed: "Global",
  serviceType: [
    "Full-stack web application development",
    "Next.js development",
    "Java / Spring Boot backend development",
    "LLM integration (OpenAI, Anthropic)",
    "Retrieval-Augmented Generation (RAG) with vector databases",
    "Website observability (QPS, error rates, Core Web Vitals)",
    "End-to-end deployment (Vercel, AWS, custom)",
  ],
  knowsAbout: personSchema.knowsAbout,
};

// TODO(~2026-07-25): add Review schema (and AggregateRating on
// professionalServiceSchema if 2+) once client testimonials are in hand — plus
// a visible testimonials section on the page. Highest-leverage remaining AEO move.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Abhishek Ranjan build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production full-stack websites end-to-end — Next.js/React frontends, Java or Node backends, LLM-powered features and vector-database search wired directly into the app, observability for QPS and error rates, and deployment on the platform of your choice.",
      },
    },
    {
      "@type": "Question",
      name: "What AI features does he integrate into websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLM calls from the application (OpenAI, Anthropic Claude and similar providers), Retrieval-Augmented Generation (RAG) pipelines, and vector-database search for semantic retrieval. Focus is on in-application AI features, not on building MCP servers or model infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How does the engagement workflow work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Day 1 is a 30-minute discovery call plus a written scope. A live staging URL is available from Day 2 so clients can audit progress before end of week one. Every week includes a 15-minute demo. Launch includes a 14-day window of website maintenance and bug fixes.",
      },
    },
    {
      "@type": "Question",
      name: "What is his background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bachelor of Technology in Electronics and Instrumentation from IIT (ISM) Dhanbad, 2022. Software engineer at Flipkart (2022–2024) working on high-concurrency distributed systems, and currently a P2 Software Engineer at New Relic on observability platform services.",
      },
    },
    {
      "@type": "Question",
      name: "Where is he based and who does he work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based in India (Hyderabad); available for full-stack and AI-integration contracts globally. Works primarily with founders and product teams that need websites and AI features shipped end-to-end.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
