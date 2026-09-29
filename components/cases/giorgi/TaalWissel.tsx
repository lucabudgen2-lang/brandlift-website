"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { IMG } from "@/lib/cases/giorgi";

/* ============================================================
   Dezelfde homepage in twee talen - wissel en vergelijk.

   Bewust dezelfde beelduitsnede in beide standen: dan zie je dat het
   ontwerp identiek is en alleen de taal verandert, en ook dat de
   Engelse kop geen vertaling is maar een eigen zin.
   ============================================================ */

const TALEN = {
  nl: { label: "Nederlands", url: "giorgiandthegents.nl", desk: `${IMG}/site-home.jpg`, mob: `${IMG}/site-home-mobiel.jpg`, kop: "Coverband met karakter, stijl en ongekende finesse" },
  en: { label: "English", url: "giorgiandthegents.nl/en", desk: `${IMG}/site-en-home.jpg`, mob: `${IMG}/site-en-mobiel.jpg`, kop: "A live band with character, style and remarkable finesse" },
} as const;

export function TaalWissel() {
  const [taal, setTaal] = useState<"nl" | "en">("nl");
  const reduce = useReducedMotion();
  const t = TALEN[taal];

  return (
    <div>
      <div role="group" aria-label="Taal" className="inline-flex chamf-sm border border-ink/15 bg-white p-1 text-sm font-semibold shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)]">
        {(Object.keys(TALEN) as ("nl" | "en")[]).map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={taal === k}
            onClick={() => setTaal(k)}
            className={`chamf-sm px-4 py-2 transition-colors ${taal === k ? "bg-blue text-white" : "text-g700 hover:text-ink"}`}
          >
            {TALEN[k].label}
          </button>
        ))}
      </div>

      <div className="relative mt-8 pb-8 pr-10 sm:pr-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={taal}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <BrowserFrame url={t.url} src={t.desk} alt={`De homepage van Giorgi & The Gents in het ${t.label === "English" ? "Engels" : "Nederlands"}`} tone="light" sizes="(max-width: 1024px) 92vw, 640px" />
            <div className="absolute bottom-0 right-0 w-[26%] min-w-[110px] max-w-[170px]">
              <PhoneFrame src={t.mob} alt={`De homepage op een telefoon, ${t.label === "English" ? "Engelse" : "Nederlandse"} versie`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-2 text-sm text-g600" aria-live="polite">
        Kop in deze versie: <span className="font-semibold text-ink">&ldquo;{t.kop}&rdquo;</span>
      </p>
    </div>
  );
}
