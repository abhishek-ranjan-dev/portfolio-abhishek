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
  title:
    "Abhishek Ranjan — Senior Next.js + Java Developer | Ex-Flipkart, New Relic",
  description:
    "Senior full-stack contractor building production Next.js applications, Spring Boot backends, and AI integrations. Ex-Flipkart, currently at New Relic. IIT (ISM) Dhanbad 2022.",
  metadataBase: new URL("https://abhishekranjan.dev"),
  openGraph: {
    title:
      "Abhishek Ranjan — Senior Next.js + Java Developer | Ex-Flipkart, New Relic",
    description:
      "Production Next.js apps, Java-Spring backends, and AI feature integration for founders who need code that ships and stays up.",
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
