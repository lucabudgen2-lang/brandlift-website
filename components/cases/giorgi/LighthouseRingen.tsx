"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { lighthouse as giorgiLighthouse } from "@/lib/cases/giorgi";

type Meting = { performance: number; accessibility: number; bestPractices: number; seo: number; lcp: string; cls: string; tbt: string };
type Lighthouse = { gemeten: string; desktop: Meting; mobiel: Meting };

/* ============================================================
   Lighthouse-scores van de live homepage - desktop en mobiel.

   Ringen, omdat dat de vorm is die iedereen van Google's eigen
   rapport kent: 0 tot 100, hoe voller hoe beter. Het getal staat er
   altijd als tekst in; de ring is ondersteuning, geen vervanging.
   Mobiel is gemeten met gesimuleerde trage 4G - dat staat er, omdat
   een score zonder meetmethode niets zegt.
   ============================================================ */

const CATS = [
  { k: "performance", l: "Snelheid" },
  { k: "accessibility", l: "Toegankelijkheid" },
  { k: "bestPractices", l: "Best practices" },
  { k: "seo", l: "SEO" },
] as const;

const R = 34, OMTREK = 2 * Math.PI * R;

function Ring({ score, label, delay }: { score: number; label: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-[92px] w-[92px]">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="40" cy="40" r={R} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="5" />
          <motion.circle
            cx="40"
            cy="40"
            r={R}
            fill="none"
            stroke="#5b78ff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={OMTREK}
            initial={{ strokeDashoffset: reduce ? OMTREK * (1 - score / 100) : OMTREK }}
            whileInView={{ strokeDashoffset: OMTREK * (1 - score / 100) }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ duration: 1, delay, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-display text-2xl font-extrabold tabular-nums text-paper">{score}</span>
      </div>
      <span className="mt-3 text-[0.78rem] font-semibold text-g300">{label}</span>
    </div>
  );
}

export function LighthouseRingen({ lighthouse = giorgiLighthouse }: { lighthouse?: Lighthouse }) {
  const [apparaat, setApparaat] = useState<"desktop" | "mobiel">("desktop");
  const d = lighthouse[apparaat];

  return (
    <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-6 backdrop-blur-sm md:p-9">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight text-paper">Lighthouse, live homepage</p>
          <p className="mt-1 text-sm text-g500">Gemeten op {lighthouse.gemeten}{apparaat === "mobiel" ? " · gesimuleerde trage 4G" : ""}</p>
        </div>
        <div role="group" aria-label="Apparaat" className="flex chamf-sm border border-[var(--color-line-strong)] p-1 text-[0.72rem] font-semibold">
          {(["desktop", "mobiel"] as const).map((a) => (
            <button
              key={a}
              type="button"
              aria-pressed={apparaat === a}
              onClick={() => setApparaat(a)}
              className={`chamf-sm px-3 py-1.5 capitalize transition-colors ${apparaat === a ? "bg-blue text-white" : "text-g400 hover:text-paper"}`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div key={apparaat} className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
        {CATS.map((c, i) => (
          <Ring key={c.k} score={d[c.k]} label={c.l} delay={0.05 + i * 0.08} />
        ))}
      </div>

      <dl className="mt-9 grid grid-cols-3 gap-px overflow-hidden chamf-sm border border-[var(--color-line)] bg-[var(--color-line)] text-center">
        {[
          { k: "Grootste element in beeld", v: d.lcp },
          { k: "Verschuiving tijdens laden", v: d.cls },
          { k: "Blokkerende tijd", v: d.tbt },
        ].map((m) => (
          <div key={m.k} className="bg-s1 px-3 py-4">
            <dt className="text-[0.66rem] leading-tight text-g500">{m.k}</dt>
            <dd className="mt-1.5 font-display text-xl font-extrabold tabular-nums text-paper">{m.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
