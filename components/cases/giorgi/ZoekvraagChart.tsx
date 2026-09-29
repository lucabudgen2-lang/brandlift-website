"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { briefingTermen, echteTermen, type Term } from "@/lib/cases/giorgi";

/* ============================================================
   De briefing tegenover de werkelijkheid - één horizontale staaf-
   grafiek, één reeks, één kleur.

   Waarom zo: de boodschap is een vergelijking van grootte (magnitude),
   dus staven vanaf dezelfde nullijn. De vier briefingtermen staan er
   bewust als echte rijen in, met een staaf van nul: juist dat lege
   stuk is het verhaal. Eén reeks, dus geen legenda; de kop benoemt
   wat je ziet. Waarden staan in tekstkleur naast de staaf, niet in
   de staafkleur. Hover (of focus) toont intentie en route.

   Tabelweergave via de schakelaar: dezelfde data, voor wie liever
   leest - en voor schermlezers.
   ============================================================ */

const MAX = 1000;
const ease = [0.22, 0.61, 0.36, 1] as const;

function Rij({ term, volume, detail, index, nul = false }: { term: string; volume: number; detail?: string; index: number; nul?: boolean }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const pct = (volume / MAX) * 100;
  return (
    <li
      tabIndex={0}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group relative grid grid-cols-[minmax(0,11.5rem)_1fr] items-center gap-4 rounded-md py-[7px] outline-none focus-visible:ring-2 focus-visible:ring-blue-text sm:grid-cols-[minmax(0,15rem)_1fr]"
    >
      <span className={`truncate text-right text-[0.82rem] ${nul ? "text-g500 line-through decoration-white/25" : "text-g200"}`} title={term}>
        {term}
      </span>
      {/* spoor: staaf vanaf de nullijn, waarde net achter het einde */}
      <span className="relative block h-[20px]">
        <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-white/15" />
        {nul ? (
          <span aria-hidden className="absolute left-0 top-1/2 h-[10px] w-[3px] -translate-y-1/2 rounded-r-[2px] bg-white/25" />
        ) : (
          <motion.span
            aria-hidden
            className={`absolute left-0 top-1/2 h-[10px] -translate-y-1/2 rounded-r-[4px] bg-blue-text transition-opacity duration-150 ${hover ? "opacity-100" : "opacity-85"}`}
            initial={reduce ? { width: `${pct}%` } : { width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.1 + index * 0.05, ease }}
          />
        )}
        <span
          className={`absolute top-1/2 -translate-y-1/2 font-display text-[0.8rem] font-bold tabular-nums ${nul ? "text-g500" : "text-paper"}`}
          style={{ left: `calc(${nul ? 0 : pct}% + 10px)` }}
        >
          {volume.toLocaleString("nl-NL")}
        </span>
        {detail && hover && (
          <span
            role="tooltip"
            className="pointer-events-none absolute left-0 top-full z-20 mt-1.5 whitespace-nowrap chamf-sm border border-[var(--color-line-strong)] bg-s2 px-3 py-2 text-[0.72rem] text-g200 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)]"
          >
            {detail}
          </span>
        )}
      </span>
    </li>
  );
}

export function ZoekvraagChart() {
  const [tabel, setTabel] = useState(false);

  return (
    <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-6 backdrop-blur-sm md:p-9">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-display text-lg font-extrabold tracking-tight text-paper">
            Zoekopdrachten per maand in Nederland
          </p>
          <p className="mt-1 text-sm text-g500">Google Ads-data via DataForSEO, gecorrigeerd voor een meetpiek in september 2025</p>
        </div>
        <div role="group" aria-label="Weergave" className="flex chamf-sm border border-[var(--color-line-strong)] p-1 text-[0.72rem] font-semibold">
          {[
            { k: false, l: "Grafiek" },
            { k: true, l: "Tabel" },
          ].map((o) => (
            <button
              key={o.l}
              type="button"
              aria-pressed={tabel === o.k}
              onClick={() => setTabel(o.k)}
              className={`chamf-sm px-3 py-1.5 transition-colors ${tabel === o.k ? "bg-blue text-white" : "text-g400 hover:text-paper"}`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>

      {!tabel ? (
        <div className="mt-8">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g500">Wat de briefing wilde</p>
          <ul className="mt-2">
            {briefingTermen.map((t, i) => (
              <Rij key={t} term={t} volume={0} index={i} nul />
            ))}
          </ul>
          <div className="my-6 h-px bg-[var(--color-line)]" />
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-text">Waar Nederland echt op zoekt</p>
          <ul className="mt-2">
            {echteTermen.map((t: Term, i) => (
              <Rij
                key={t.term}
                term={t.term}
                volume={t.volume}
                index={i}
                detail={`Intentie: ${t.intentie.toLowerCase()} · Route: ${t.route}`}
              />
            ))}
          </ul>
          <p className="mt-5 text-xs text-g500">Beweeg over een zoekterm voor de zoekintentie en de route waarlangs we hem winnen.</p>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[0.85rem]">
            <caption className="sr-only">Zoekvolume, intentie en route per zoekterm</caption>
            <thead>
              <tr className="border-b border-[var(--color-line-strong)] text-[0.62rem] uppercase tracking-[0.1em] text-g500">
                <th scope="col" className="py-3 pr-4 font-bold">Zoekterm</th>
                <th scope="col" className="py-3 pr-4 text-right font-bold">Per maand</th>
                <th scope="col" className="py-3 pr-4 font-bold">Intentie</th>
                <th scope="col" className="py-3 font-bold">Route</th>
              </tr>
            </thead>
            <tbody>
              {briefingTermen.map((t) => (
                <tr key={t} className="border-b border-[var(--color-line)] text-g500">
                  <td className="py-2.5 pr-4">{t} <span className="text-[0.7rem]">(briefing)</span></td>
                  <td className="py-2.5 pr-4 text-right tabular-nums">0</td>
                  <td className="py-2.5 pr-4">-</td>
                  <td className="py-2.5">-</td>
                </tr>
              ))}
              {echteTermen.map((t) => (
                <tr key={t.term} className="border-b border-[var(--color-line)] text-g200">
                  <td className="py-2.5 pr-4 font-medium text-paper">{t.term}</td>
                  <td className="py-2.5 pr-4 text-right font-display font-bold tabular-nums text-paper">{t.volume.toLocaleString("nl-NL")}</td>
                  <td className="py-2.5 pr-4">{t.intentie}</td>
                  <td className="py-2.5">{t.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
