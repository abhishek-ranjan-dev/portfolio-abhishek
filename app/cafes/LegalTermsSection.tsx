"use client";

/**
 * /cafes — "Complete Transparency & Risk-Free Guarantees".
 *
 * shadcn/ui is NOT installed in this repo, so the Accordion + Dialog below are
 * shadcn-style, accessible primitives (aria-expanded/controls, role="dialog"
 * + aria-modal, Esc/backdrop close, scroll-lock, focus move + restore), themed
 * for this route's dark-slate world.
 *
 * "Download Agreement PDF" opens a clean, light-themed printable document in a
 * new window (browser "Save as PDF") — no PDF dependency. The in-page modal is
 * the always-works "Read Full Legal Terms" path.
 */

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Wallet,
  Receipt,
  Ban,
  Printer,
  FileText,
  Download,
  X,
  GraduationCap,
  MessageCircle,
  MapPin,
} from "lucide-react";

/* ------------------------------- shared data ------------------------------- */

const CONTACT = {
  name: "Abhishek Ranjan (IIT Alumnus)",
  whatsapp: "7424961513",
  location: "Kondapur, Hyderabad",
};

interface Term {
  id: string;
  icon: typeof Wallet;
  title: string;
  tone: "emerald" | "amber" | "rose";
  items: string[];
  exclusion?: boolean;
}

const TERMS: Term[] = [
  {
    id: "milestones",
    icon: Wallet,
    title: "Milestone Payment Model",
    tone: "emerald",
    items: [
      "50% advance (inclusive of the ₹2,000 domain token deposit).",
      "40% on Go-Live (after client review).",
      "10% after 30 days of smooth live usage.",
      "100% Upgrade Credit: upgrade from Tier-2 to Tier-3 anytime by paying only the difference.",
    ],
  },
  {
    id: "passthrough",
    icon: Receipt,
    title: "Pass-Through 3rd-Party Costs (0% Markup)",
    tone: "amber",
    items: [
      "Payment Gateway MDR: Razorpay/PhonePe deduct standard ~1.5%–2% UPI processing fees directly into your merchant bank account.",
      "Logistics Delivery Fees: per-km fees from Dunzo/Porter/Shadowfax are pass-through operational costs paid directly to riders or billed to customers at checkout.",
    ],
  },
  {
    id: "printkit",
    icon: Printer,
    title: "Physical Print Kit Allowance & Extra Re-orders",
    tone: "emerald",
    items: [
      "Tier-1: Includes 5 standees and 10 stickers.",
      "Tier-2: Includes 10 standees, 20 stickers, and 100 A5 pamphlets.",
      "Tier-3: Includes 20 standees, 40 stickers, and 300 A5 pamphlets.",
      "Additional Tables: extra table standees beyond package allowances are available on request (includes 1 A6 standee + 1 waterproof sticker).",
    ],
  },
  {
    id: "exclusions",
    icon: Ban,
    title: "Explicit Exclusions (Not Included in Tier-2)",
    tone: "rose",
    exclusion: true,
    items: [
      "Major website re-themes or brand colour overhauls post-approval.",
      "Content creation, food photography, or video production.",
      "Bulk uploading/retouching more than 50+ menu photos per batch.",
      "Enterprise multi-branch inventory or custom POS software integrations.",
    ],
  },
];

const TONE = {
  emerald: { text: "text-emerald-300", chip: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/25", dot: "bg-emerald-400" },
  amber: { text: "text-amber-300", chip: "bg-amber-500/15 text-amber-400 ring-amber-500/25", dot: "bg-amber-400" },
  rose: { text: "text-rose-300", chip: "bg-rose-500/15 text-rose-400 ring-rose-500/25", dot: "bg-rose-400" },
} as const;

const EASE = [0.22, 1, 0.36, 1] as const;
const VP = { once: true, margin: "-70px" } as const;

/* ------------------------- shadcn-style Accordion -------------------------- */

function AccordionItem({
  term,
  open,
  onToggle,
  reduce,
}: {
  term: Term;
  open: boolean;
  onToggle: () => void;
  reduce: boolean | null;
}) {
  const panelId = useId();
  const btnId = useId();
  const tone = TONE[term.tone];
  const Icon = term.icon;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-3.5 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] sm:px-6"
        >
          <span
            className={
              "grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ring-inset " +
              tone.chip
            }
          >
            <Icon className="h-5 w-5" />
          </span>
          <span className="flex-1 text-[15px] font-bold text-white sm:text-base">
            {term.title}
          </span>
          <ChevronDown
            className={
              "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 " +
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
            <ul className="space-y-3 px-5 pb-5 pt-1 sm:px-6">
              {term.items.map((it) => (
                <li key={it} className="flex gap-3 text-[14px] leading-relaxed text-slate-300">
                  {term.exclusion ? (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" strokeWidth={3} />
                  ) : (
                    <span className={"mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full " + tone.dot} />
                  )}
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* --------------------------- shadcn-style Dialog --------------------------- */

function TermsDialog({
  open,
  onClose,
  onDownload,
}: {
  open: boolean;
  onClose: () => void;
  onDownload: () => void;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);

  // Esc to close + scroll lock + focus move/restore.
  useEffect(() => {
    if (!open) return;
    prevFocus.current = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#0f172a] shadow-2xl sm:rounded-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-500">
                  Agreement · Tier-2 Express
                </p>
                <h2 id={titleId} className="mt-1.5 text-lg font-extrabold tracking-tight text-white sm:text-xl">
                  Scope &amp; Legal Terms
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Body (scrollable) */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              <div className="space-y-6">
                {TERMS.map((term) => {
                  const tone = TONE[term.tone];
                  const Icon = term.icon;
                  return (
                    <section key={term.id}>
                      <div className="flex items-center gap-2.5">
                        <span className={"grid h-8 w-8 place-items-center rounded-lg ring-1 ring-inset " + tone.chip}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-[15px] font-bold text-white">{term.title}</h3>
                      </div>
                      <ul className="mt-3 space-y-2.5 pl-1">
                        {term.items.map((it) => (
                          <li key={it} className="flex gap-3 text-[13.5px] leading-relaxed text-slate-300">
                            {term.exclusion ? (
                              <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" strokeWidth={3} />
                            ) : (
                              <span className={"mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full " + tone.dot} />
                            )}
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}

                {/* Contact */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[13px] text-slate-300">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                      <GraduationCap className="h-4 w-4 text-amber-400" /> {CONTACT.name}
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp: {CONTACT.whatsapp}
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-emerald-400" /> {CONTACT.location}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-3 border-t border-white/10 p-5 sm:flex-row sm:justify-end sm:p-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/[0.07]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={onDownload}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-amber-900/30 transition-colors hover:bg-[#b45309] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <Download className="h-4 w-4" />
                Download Agreement PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* --------------------- printable agreement (Save as PDF) ------------------- */

function openPrintableAgreement() {
  const section = (t: Term) => `
    <section>
      <h2>${t.title}</h2>
      <ul>${t.items.map((i) => `<li${t.exclusion ? ' class="excl"' : ""}>${escapeHtml(i)}</li>`).join("")}</ul>
    </section>`;

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" />
    <title>Scope & Legal Terms — Tier-2 Express Agreement</title>
    <style>
      * { box-sizing: border-box; }
      body { font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: #0f172a; max-width: 720px; margin: 40px auto; padding: 0 24px; line-height: 1.5; }
      header { border-bottom: 3px solid #d97706; padding-bottom: 16px; margin-bottom: 24px; }
      h1 { font-size: 22px; margin: 0 0 4px; }
      .eyebrow { font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #b45309; font-weight: 700; margin: 0; }
      h2 { font-size: 15px; margin: 24px 0 8px; color: #059669; }
      ul { margin: 0; padding-left: 20px; }
      li { margin: 4px 0; font-size: 13px; }
      li.excl { list-style: none; margin-left: -20px; padding-left: 20px; position: relative; }
      li.excl::before { content: "\\2715"; color: #e11d48; position: absolute; left: 2px; font-weight: 700; }
      footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #334155; }
      @media print { body { margin: 0; } }
    </style></head>
    <body>
      <header>
        <p class="eyebrow">Agreement · Tier-2 Express</p>
        <h1>Scope &amp; Legal Terms</h1>
        <p style="font-size:13px;color:#475569;margin:6px 0 0">Complete transparency &amp; risk-free guarantees for your cafe storefront build.</p>
      </header>
      ${TERMS.map(section).join("")}
      <footer>
        <strong>${CONTACT.name}</strong> &nbsp;|&nbsp; WhatsApp: ${CONTACT.whatsapp} &nbsp;|&nbsp; ${CONTACT.location}
      </footer>
      <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 200); };<\/script>
    </body></html>`;

  const w = window.open("", "_blank", "noopener,noreferrer,width=820,height=900");
  if (!w) return false; // popup blocked — caller keeps the modal open as fallback
  w.document.open();
  w.document.write(html);
  w.document.close();
  return true;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/* --------------------------------- section --------------------------------- */

export default function LegalTermsSection() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(TERMS[0].id);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative border-t border-white/5">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">
            Transparent scope
          </p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Complete Transparency &amp; Risk-Free Guarantees
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
            No fine print, no surprises. Here&apos;s exactly how payments work,
            which third-party costs pass straight through, and what sits outside
            the Tier-2 scope.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="mt-10 space-y-3"
        >
          {TERMS.map((term) => (
            <AccordionItem
              key={term.id}
              term={term}
              reduce={reduce}
              open={openId === term.id}
              onToggle={() => setOpenId((cur) => (cur === term.id ? null : term.id))}
            />
          ))}
        </motion.div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
          >
            <FileText className="h-4.5 w-4.5 text-amber-400" />
            Read Full Legal Terms
          </button>
          <button
            type="button"
            onClick={() => {
              const ok = openPrintableAgreement();
              if (!ok) setDialogOpen(true); // popup blocked → show modal instead
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-amber-900/30 transition-colors hover:bg-[#b45309] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            <Download className="h-4.5 w-4.5" />
            Download Agreement PDF
          </button>
        </div>

        {/* Footer contact */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/5 pt-6 text-center text-[13px] text-slate-400">
          <span className="inline-flex items-center gap-1.5 font-semibold text-slate-200">
            <GraduationCap className="h-4 w-4 text-amber-400" />
            {CONTACT.name}
          </span>
          <span className="text-slate-600">|</span>
          <a
            href={`https://wa.me/91${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-300"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            WhatsApp: {CONTACT.whatsapp}
          </a>
          <span className="text-slate-600">|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-emerald-400" />
            {CONTACT.location}
          </span>
        </div>
      </div>

      <TermsDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onDownload={openPrintableAgreement}
      />
    </section>
  );
}
