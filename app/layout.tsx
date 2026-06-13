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

export const metadata: Metadata = {
  title: "Abhishek Ranjan — Secure AI Architecture & Production Engineering",
  description:
    "Engineering portfolio of Abhishek Ranjan. Building secure, production-grade AI agents, zero-trust ingestion pipelines, and actionable intelligence dashboards.",
  metadataBase: new URL("https://abhishekranjan.dev"),
  openGraph: {
    title: "Abhishek Ranjan — Secure AI Architecture & Production Engineering",
    description:
      "Production-grade AI agents, zero-trust data ingestion, and observability-first backends.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
