import type { Metadata } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";

// The Console's machined display + UI voice.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

// Instrument readouts, engraved placards, tabular figures.
const martianMono = Martian_Mono({
  variable: "--font-martian",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* Direction contract — survives the production build as an emitted HTML comment. */}
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
  IMPECCABLE DIRECTION CONTRACT — "THE CONSOLE"
  THESIS: One engineer runs a whole system from a single control console. Refuses
    the dark-neon terminal hero the category ships for dev portfolios.
  OWN-WORLD: Daylight anodized-metal desk (warm brushed aluminium); raised bone
    modules with real bevels + corner screws; Archivo machined display + Martian
    Mono instrument readouts; ONE signal-orange accent; green "live/open" and amber
    "caution" lamps used as function, never decoration. Light, not dark.
  STORY: A founder lands on a working control desk showing this operator's system
    live, reads the capability instruments and shipped-project channels, trusts the
    precision, and sends a brief.
  FIRST VIEWPORT: Console header bar with engraved nameplate + green OPEN
    annunciator; "ONE ENGINEER. WHOLE TECH TEAM." set as a panel readout; a row of
    live gauge tiles (years, sites live, uptime) beside an illuminated SEND BRIEF key.
  FORM: Mission-control instrument console; candidate #3 of 7 grounded directions
    (assigned by seed a7c20ae8, mode persuade); rendered in the daylight Braun/Rams
    functional-instrument register, not the dealt dark cockpit.
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
