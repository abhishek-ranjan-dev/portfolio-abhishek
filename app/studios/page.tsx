import type { Metadata } from "next";
import StudiosLanding from "./StudiosLanding";

const SITE_URL = "https://ranjanabhishek.com";
const PAGE_URL = `${SITE_URL}/studios`;

const TITLE = "For Design Studios — Fractional Lead Engineer";
const DESCRIPTION =
  "Senior platform engineer (New Relic, ex-Flipkart, IIT Dhanbad) turning ambitious Figma systems into production-grade Next.js apps for boutique studios in the UK, EU, and US. 100% async.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/studios" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Abhishek Ranjan — For Design Studios",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  keywords: [
    "fractional lead engineer",
    "solo technical delivery partner",
    "Figma to Next.js developer",
    "design studio engineering partner",
    "white-label web developer for agencies",
    "Next.js developer for design studios",
    "async web development partner",
    "Supabase Stripe developer",
    "boutique studio developer UK Europe US",
  ],
};

// AEO/SEO: a Service with the three fixed engagements priced in USD so search +
// assistants can surface the studio-partnership offer and its tiers directly.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fractional Lead Engineer for Design Studios",
  serviceType: "Figma-to-Next.js production web application delivery",
  provider: {
    "@type": "Person",
    name: "Abhishek Ranjan",
    url: SITE_URL,
    jobTitle: "Senior Platform Engineer",
    worksFor: { "@type": "Organization", name: "New Relic" },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology (ISM), Dhanbad",
      },
      { "@type": "Organization", name: "Flipkart" },
    ],
  },
  areaServed: ["United Kingdom", "Europe", "United States"].map((name) => ({
    "@type": "Place",
    name,
  })),
  description: DESCRIPTION,
  offers: [
    {
      "@type": "Offer",
      name: "The Beyond-No-Code Web App Sprint",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "2500",
        maxPrice: "3500",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      name: "Custom Backend & API Integrations",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "1500",
        maxPrice: "2500",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      name: "Agency Standby Retainer",
      price: "1500",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  ],
};

export default function StudiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <StudiosLanding />
    </>
  );
}
