import type { Metadata } from "next";
import CafeLanding from "./CafeLanding";

const SITE_URL = "https://ranjanabhishek.com";
const PAGE_URL = `${SITE_URL}/cafes`;

const TITLE = "Own Your Cafe's Website — 0% Commission Direct Ordering";
const DESCRIPTION =
  "Ditch 30% food-app fees and SaaS rent. An IIT-alumnus-built, sub-1-second direct-ordering storefront for Hyderabad cafes. 3–5 day turnaround, 3-month money-back guarantee.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cafes" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Abhishek Ranjan — Cafe Storefronts",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  keywords: [
    "cafe website Hyderabad",
    "direct ordering system for cafes",
    "0% commission food ordering",
    "food app commission alternative",
    "restaurant online ordering website",
    "cafe digital menu",
    "QR code ordering Hyderabad",
    "Jubilee Hills cafe website",
    "Madhapur cafe website",
    "Gachibowli restaurant website",
  ],
};

// AEO/SEO: a Service offering with priced tiers so search + assistants can
// surface the commission-free, one-time-build pitch directly.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Direct-Ordering Cafe Storefronts",
  serviceType: "Cafe website & direct online ordering system",
  provider: {
    "@type": "Person",
    name: "Abhishek Ranjan",
    url: SITE_URL,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology (ISM), Dhanbad",
    },
  },
  areaServed: [
    "Jubilee Hills, Hyderabad",
    "Madhapur, Hyderabad",
    "Banjara Hills, Hyderabad",
    "Gachibowli, Hyderabad",
    "Kondapur, Hyderabad",
  ].map((name) => ({ "@type": "Place", name })),
  description: DESCRIPTION,
  offers: [
    { "@type": "Offer", name: "Essential (Tier 1)", price: "10000", priceCurrency: "INR" },
    {
      "@type": "Offer",
      name: "Express (Tier 2)",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "18000",
        maxPrice: "20000",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Offer",
      name: "Growth (Tier 3)",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "30000",
        maxPrice: "35000",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function CafesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CafeLanding />
    </>
  );
}
