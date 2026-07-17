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

const SITE_URL = "https://abhishekranjan.dev";
// Title kept ≤60 chars so Google/Bing render it without truncation.
const TITLE = "Abhishek Ranjan — Next.js + Java Developer, Ex-Flipkart";
// Description kept ≤155 chars for full SERP display.
const DESCRIPTION =
  "Senior full-stack contractor — production Next.js apps, Java-Spring backends, and AI integrations. Ex-Flipkart, now at New Relic. IIT Dhanbad 2022.";

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
    "Next.js developer",
    "Java developer",
    "Spring Boot developer",
    "full-stack contractor",
    "AI integration developer",
    "freelance Next.js",
    "React developer",
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
    description:
      "Production Next.js apps, Java-Spring backends, and AI feature integration for founders who need code that ships and stays up.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Production Next.js apps, Java-Spring backends, and AI feature integration for founders who need code that ships and stays up.",
  },
  // TODO: paste the token Google Search Console gives you at
  // https://search.google.com/search-console when you add abhishekranjan.dev
  // as a URL-prefix property, then replace the empty string below.
  verification: { google: "" },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Ranjan",
  url: SITE_URL,
  jobTitle: "Senior Next.js + Java Developer",
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
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Node.js",
    "PostgreSQL",
    "AI Integration",
    "OpenAI API",
    "LangChain",
    "Core Web Vitals",
  ],
  sameAs: ["https://www.linkedin.com/in/abhishekranjan0505/"],
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
        {children}
      </body>
    </html>
  );
}
