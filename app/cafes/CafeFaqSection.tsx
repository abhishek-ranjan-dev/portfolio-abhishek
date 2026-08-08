"use client";

/**
 * /cafes — FAQ with built-in FAQPage JSON-LD for AI/GEO search.
 *
 * shadcn/ui is NOT installed here, so the Accordion is a shadcn-style,
 * accessible primitive (aria-expanded/controls, region) themed for the route's
 * dark-slate world. The visible answers and the JSON-LD acceptedAnswer text are
 * generated from ONE source (FAQS) so structured data can never drift from the
 * rendered copy. Geo terms (Hyderabad + localities) appear in both the copy and
 * the schema (an areaServed Service node in the @graph).
 */

import { useMemo, useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Search,
  X,
  ChevronDown,
  MessageCircle,
  GraduationCap,
  MapPin,
  HelpCircle,
} from "lucide-react";

/* --------------------------------- content --------------------------------- */

const PAGE_URL = "https://ranjanabhishek.com/cafes";
const PHONE = "7424961513";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Hi Abhishek, I have a question about a cafe storefront."
)}`;

const AREAS = ["Jubilee Hills", "Madhapur", "Gachibowli", "Kondapur"];

interface Faq {
  id: string;
  category: string;
  q: string;
  a: string;
}

const FAQS: Faq[] = [
  {
    id: "cost",
    category: "Pricing",
    q: "How much does a direct-ordering cafe website cost in Hyderabad?",
    a: "A custom, direct-ordering cafe website in Hyderabad costs ₹10,000 for Tier-1 (Essential Info & QR Menu), ₹18,000 to ₹20,000 for Tier-2 (Express 0% Commission Storefront), and ₹30,000 to ₹35,000 for Tier-3 (Full Growth Web Platform). Built by IIT alumnus Abhishek Ranjan, all packages include a 3-month 100% money-back guarantee and 6 months of free technical support.",
  },
  {
    id: "savings",
    category: "Savings",
    q: "How does a direct storefront save Hyderabad cafes ₹80,000+ in 3 years?",
    a: "Traditional food delivery aggregators charge cafes a 25%–30% commission on every order. A direct storefront routes orders through WhatsApp and Web UI with instant UPI payments (Razorpay/PhonePe) directly into the cafe's bank account at 0% platform commission, integrating auto-rider dispatch via Dunzo, Porter, or Shadowfax. On a ₹1,000 order, the cafe keeps the full ₹1,000 instead of ₹700.",
  },
  {
    id: "turnaround",
    category: "Delivery",
    q: "What is the turnaround time for a cafe website to go live?",
    a: "The turnaround time is 3 to 5 business days after receiving the cafe's menu text, item pricing/photos, and payment gateway authorization.",
  },
  {
    id: "ownership",
    category: "Ownership",
    q: "Who owns the domain name and website code?",
    a: "The cafe owner retains 100% direct ownership of the .in or .com domain name and source code. Hosting on serverless cloud infrastructure remains ₹0 per year forever. Even if the developer relationship ends, the cafe owner maintains full independent control over their domain and live website.",
  },
  {
    id: "refund",
    category: "Guarantee",
    q: "What is the refund policy if a cafe is unsatisfied?",
    a: "Abhishek Ranjan offers a 100% money-back guarantee valid for 3 full months (90 days) starting from the website Go-Live date. If the cafe is unsatisfied for any reason, a 100% refund is processed with zero hidden deductions, and the domain remains in the client's ownership.",
  },
  {
    id: "maintenance",
    category: "Support",
    q: "How does annual maintenance work after the 6-month free support period?",
    a: "After 6 months of free support, cafe owners can choose between two transparent options:\n\nZero-Headache Care Plan (₹3,000–₹5,000/year): Covers domain renewal, SSL security, server health, and ongoing free menu price edits.\n\nPay-As-You-Go (₹0/year AMC): The owner renews their domain directly (~₹1,000–₹1,500/year) and pays a flat ₹500 per update request.",
  },
  {
    id: "upgrade",
    category: "Upgrades",
    q: "Can a cafe start with Tier-2 and upgrade to Tier-3 later?",
    a: "Yes. Under the 100% Upgrade Credit Policy, a cafe can upgrade from Tier-2 to Tier-3 anytime within 6 months of Go-Live by paying only the net price difference.",
  },
  {
    id: "print-kit",
    category: "Print Kit",
    q: "Do you provide physical QR code table standees and menu stickers for the cafe?",
    a: "Yes — every package includes a physical print kit delivered directly to your cafe in Hyderabad. Tier-1 includes 5 tabletop QR standees and 10 stickers. Tier-2 expands this to 10 standees, 20 stickers, and 100 A5 neighborhood promotional pamphlets. Tier-3 includes 20 standees, 40 stickers, and 300 pamphlets. Extra table standees beyond your package are available on request, and all tiers also receive high-resolution print-ready PDF files for future re-printing.",
  },
];

/* ------------------------------- JSON-LD (GEO) ----------------------------- */

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      inLanguage: "en-IN",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#cafe-storefront-service`,
      name: "Direct-Ordering Cafe Storefronts (Hyderabad)",
      serviceType: "Cafe website & 0% commission direct ordering",
      provider: {
        "@type": "Person",
        name: "Abhishek Ranjan",
        description: "IIT alumnus, full-stack engineer",
      },
      areaServed: ["Hyderabad", ...AREAS].map((name) => ({
        "@type": "Place",
        name: `${name}, Telangana, India`,
      })),
    },
  ],
};

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, margin: "-70px" } as const;

/* --------------------------- shadcn-style Accordion ------------------------ */

function FaqItem({
  faq,
  open,
  onToggle,
  reduce,
}: {
  faq: Faq;
  open: boolean;
  onToggle: () => void;
  reduce: boolean | null;
}) {
  const panelId = useId();
  const btnId = useId();

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] sm:px-6"
        >
          <span className="flex-1">
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                {faq.category}
              </span>
            </span>
            <span className="mt-2 block text-[15px] font-bold leading-snug text-white sm:text-base">
              {faq.q}
            </span>
          </span>
          <ChevronDown
            className={
              "mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 " +
              (open ? "rotate-180" : "")
            }
            aria-hidden
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            key="content"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="whitespace-pre-line px-5 pb-5 pt-1 text-[14px] leading-relaxed text-slate-300 sm:px-6">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* --------------------------------- section --------------------------------- */

export default function CafeFaqSection() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return FAQS;
    return FAQS.filter((f) =>
      (f.q + " " + f.a + " " + f.category).toLowerCase().includes(q)
    );
  }, [q]);

  const toggle = (id: string) =>
    setOpenIds((cur) => {
      const next = new Set(cur);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section id="cafe-faq" className="relative scroll-mt-20 border-t border-white/5">
      {/* JSON-LD: FAQPage + geo Service node */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">
            FAQ
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Cafe storefront questions, answered
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            Straight answers on pricing, savings, ownership, and support for
            cafes across Hyderabad — {AREAS.join(", ")}, and beyond.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-8">
          {/* Left: search + accordion */}
          <div>
            {/* Search filter */}
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-500"
                aria-hidden
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions — pricing, refund, domain…"
                aria-label="Search FAQs"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-11 text-[14.5px] text-white placeholder:text-slate-500 transition-colors focus:border-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-500/25"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {query && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {filtered.length} result{filtered.length === 1 ? "" : "s"}
              </p>
            )}

            {/* Accordion / results */}
            <div className="mt-4 space-y-3">
              {filtered.length > 0 ? (
                filtered.map((faq) => (
                  <FaqItem
                    key={faq.id}
                    faq={faq}
                    reduce={reduce}
                    // When searching, expand matches so answers are visible.
                    open={q ? true : openIds.has(faq.id)}
                    onToggle={() => toggle(faq.id)}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
                  <p className="text-[14.5px] font-semibold text-white">
                    No FAQs match “{query}”.
                  </p>
                  <p className="mt-1.5 text-[13.5px] text-slate-400">
                    Try a different term, or message Abhishek directly on
                    WhatsApp.
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask on WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right: sticky help card */}
          <aside className="lg:sticky lg:top-24">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/[0.08] to-white/[0.02] p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
                <HelpCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">
                Have a specific question?
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
                Talk to{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-white">
                  <GraduationCap className="h-4 w-4 text-amber-400" />
                  Abhishek Ranjan (IIT Alumnus)
                </span>{" "}
                directly — no ticket queues.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                WhatsApp: {PHONE}
              </a>

              <div className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 text-[12.5px] text-slate-400">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span>
                  Serving {AREAS.join(", ")} &amp; across Hyderabad.
                </span>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
}
