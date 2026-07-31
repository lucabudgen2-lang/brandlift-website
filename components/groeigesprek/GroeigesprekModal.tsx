"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GroeigesprekForm } from "@/components/forms/GroeigesprekForm";

/* ============================================================
   GROEIGESPREK-MODAL — de pop-up achter elke groeigesprek-CTA.

   Gemount in de layout. Een globale click-interceptor vangt elke
   link naar /contact waarvan de tekst "groeigesprek" bevat en opent
   deze modal in plaats van te navigeren. Gewone "Contact"-links en
   bezoeken zonder JavaScript vallen terug op de contactpagina.
   ============================================================ */

const ease = [0.22, 0.61, 0.36, 1] as const;

function BadgeIcon({ name }: { name: string }) {
  const c = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "clock":
      return <svg {...c}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "bolt":
      return <svg {...c}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" /></svg>;
    case "star":
      return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" /></svg>;
    default:
      return <svg {...c} strokeWidth="2.5"><path d="m5 12 4.5 4.5L19 7" /></svg>;
  }
}

const voordelen = [
  {
    icon: "clock",
    title: "30 minuten, geen salespitch",
    sub: "Je weet daarna precies waar je staat en wat de logische volgende stap is.",
  },
  {
    icon: "bolt",
    title: "Reactie binnen 1 werkdag",
    sub: "Persoonlijk antwoord van Luca zelf - geen ticketsysteem.",
  },
  {
    icon: "star",
    title: "Beoordeeld met 5,0 op Google",
    sub: "Door ondernemers die je voorgingen.",
  },
  {
    icon: "check",
    title: "Eerlijk advies",
    sub: "Ook als dat advies is: blijf gewoon bij je huidige site.",
  },
];

export function GroeigesprekModal() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  /* ── globale interceptor: groeigesprek-links openen de modal ── */
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor || anchor.target === "_blank") return;
      /* data-no-modal: link mag echt naar /contact navigeren i.p.v. de
         modal te openen - de nav-knop is bewust de vaste weg naar de
         volledige contactpagina, niet nog een groeigesprek-CTA. */
      if (anchor.hasAttribute("data-no-modal")) return;
      const href = anchor.getAttribute("href");
      if (href !== "/contact" && href !== "#contact") return;
      if (!/groeigesprek/i.test(anchor.textContent ?? "")) return;
      e.preventDefault();
      setOpen(true);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  /* ── ESC + scroll lock + focus ── */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      panelRef.current?.querySelector<HTMLInputElement>("input, select, textarea")?.focus({ preventScroll: true });
    }, 250);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease }}
          className="fixed inset-0 z-[90] overflow-y-auto bg-s0/85 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex min-h-full items-start justify-center p-4 py-8 sm:items-center sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
            <motion.div
              key="panel"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Plan een gratis groeigesprek"
              initial={reduce ? false : { opacity: 0, y: 26, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 14, scale: 0.985 }}
              transition={{ duration: 0.35, ease }}
              className="relative w-full max-w-4xl overflow-hidden chamf chamf-lg border border-ink/10 bg-paper shadow-[0_80px_160px_-50px_rgba(0,0,0,0.75)]"
            >
              {/* voltage keyline langs de bovenrand */}
              <span aria-hidden className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-blue/0 via-blue to-blue/0 shadow-[0_0_18px_rgba(1,48,253,0.7)]" />
              <div className="pointer-events-none absolute -left-32 bottom-[-30%] h-[420px] w-[420px] rounded-full bg-blue/10 blur-[120px]" />

              {/* sluiten */}
              <button
                type="button"
                onClick={close}
                aria-label="Sluiten"
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center chamf-sm border border-ink/12 bg-white text-g500 shadow-sm transition-colors duration-150 hover:border-blue hover:bg-blue hover:text-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>

              <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
                {/* ══ links: de pitch ══ */}
                <div className="relative overflow-hidden border-b border-ink/8 bg-gradient-to-br from-blue/[0.06] via-blue/[0.02] to-transparent p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-blue/10 blur-[70px]" />
                  <p className="eyebrow relative">Gratis groeigesprek · 30 min</p>
                  <h2 className="relative mt-4 font-display text-[1.65rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-3xl">
                    Weet binnen 30 minuten waar je groei zit.
                  </h2>
                  <p className="relative mt-4 max-w-md text-[0.95rem] leading-relaxed text-g600">
                    We kijken samen waar je nu staat, waar aanvragen blijven liggen en wat de logische
                    volgende stap is - vrijblijvend en zonder verplichtingen.
                  </p>

                  <ul className="relative mt-7 space-y-4">
                    {voordelen.map((v) => (
                      <li key={v.title} className="flex items-start gap-3.5">
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center chamf-sm border border-blue/20 bg-blue/10 text-blue">
                          <BadgeIcon name={v.icon} />
                        </span>
                        <span>
                          <span className="block text-[0.95rem] font-bold leading-snug text-ink">{v.title}</span>
                          <span className="mt-0.5 block text-[0.82rem] leading-snug text-g600">{v.sub}</span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* founder + fallback */}
                  <div className="relative mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden chamf-sm border border-ink/12">
                      <Image src="/images/portrait-luca-chip.jpg" alt="Luca Budgen, oprichter van Brandlift" fill sizes="48px" className="object-cover object-center" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">Luca Budgen</span>
                      <span className="block text-xs text-g600">Oprichter - je spreekt hem zelf</span>
                    </span>
                  </div>
                  <p className="relative mt-4 text-[0.8rem] text-g600">
                    Liever mailen?{" "}
                    <a href="mailto:luca@brandliftagency.nl" className="font-semibold text-blue hover:underline">
                      luca@brandliftagency.nl
                    </a>
                  </p>
                </div>

                {/* ══ rechts: het formulier ══ */}
                <div className="relative bg-white p-7 sm:p-9">
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                    Plan je gratis groeigesprek
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-g600">
                    Laat je gegevens achter - je hoort binnen 1 werkdag van ons.
                  </p>
                  <div className="mt-6">
                    <GroeigesprekForm variant="bare" tone="light" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
