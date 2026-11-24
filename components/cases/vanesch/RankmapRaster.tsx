"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { rasters } from "@/lib/cases/vanesch";

/* ============================================================
   De rankmap: 49 meetpunten in een raster van 30 bij 30 km rond
   Rudy's vestiging, per zoekterm. Elk vakje is één zoekopdracht in
   Google Maps vanaf dat punt; het getal is Rudy's plek.

   Schakel tussen de termen en het verhaal vertelt zichzelf: op zijn
   vak was hij al de sterkste, op zijn best betaalde werk bestond hij
   niet. Waarden letterlijk uit het onderzoeksrapport (ONDERZOEK §3).
   ============================================================ */

function kleur(p: number) {
  if (p === 0) return { bg: "rgba(255,255,255,0.04)", fg: "text-g600", rand: "border-white/[0.06]" };
  if (p <= 3) return { bg: "#0130FD", fg: "text-white", rand: "border-[#5b78ff]/60" };
  if (p <= 10) return { bg: "rgba(1,48,253,0.38)", fg: "text-white", rand: "border-[#5b78ff]/30" };
  return { bg: "rgba(1,48,253,0.14)", fg: "text-g300", rand: "border-white/10" };
}

export function RankmapRaster() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const r = rasters[i];
  const top3 = r.grid.flat().filter((p) => p > 0 && p <= 3).length;
  const zichtbaar = r.grid.flat().filter((p) => p > 0).length;

  return (
    <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/70 p-5 backdrop-blur-sm sm:p-7 md:p-9">
      <div role="tablist" aria-label="Zoekterm" className="flex flex-wrap gap-2">
        {rasters.map((x, k) => (
          <button
            key={x.term}
            role="tab"
            type="button"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`chamf-sm border px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
              k === i ? "border-blue bg-blue text-white" : "border-[var(--color-line-strong)] text-g300 hover:text-paper"
            }`}
          >
            {x.term}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-10">
        {/* het raster */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2" role="img" aria-label={`Rankmap voor ${r.term}: in de top 3 op ${top3} van de 49 punten, zichtbaar in de top 20 op ${zichtbaar} punten`}>
            {r.grid.flat().map((p, k) => {
              const c = kleur(p);
              const midden = k === 24;
              return (
                <motion.div
                  key={`${i}-${k}`}
                  initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: reduce ? 0 : (Math.abs((k % 7) - 3) + Math.abs(Math.floor(k / 7) - 3)) * 0.035 }}
                  className={`relative grid aspect-square place-items-center chamf-sm border font-display text-[0.8rem] font-extrabold tabular-nums sm:text-sm ${c.fg} ${c.rand} ${midden ? "ring-2 ring-[#EF4036] ring-offset-2 ring-offset-s1" : ""}`}
                  style={{ background: c.bg }}
                >
                  {p === 0 ? "·" : p === 15 ? "10+" : p}
                </motion.div>
              );
            })}
          </div>
          <div className="mt-3 flex justify-between text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-g600">
            <span>West</span>
            <span className="text-[#FF8F87]">◆ Liempde</span>
            <span>Oost</span>
          </div>
        </div>

        {/* de uitleg */}
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-g500">In de top 3 van Google Maps</p>
          <motion.p
            key={r.term}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-1 font-display text-6xl font-extrabold tracking-tight tabular-nums ${r.top3 === "0%" ? "text-g500" : "text-paper"}`}
          >
            {r.top3}
          </motion.p>
          <p className="mt-1 text-sm text-g500">
            van de 49 punten · {r.volume.toLocaleString("nl-NL")} zoekopdrachten per maand
          </p>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-g300">{r.tekst}</p>

          <ul className="mt-6 space-y-2 text-[0.8rem] text-g400">
            {[
              { p: 2, l: "Top 3: in het kaartje bovenaan" },
              { p: 6, l: "Plek 4 tot 10" },
              { p: 15, l: "Plek 10 tot 20" },
              { p: 0, l: "Niet in de top 20" },
            ].map((x) => (
              <li key={x.l} className="flex items-center gap-2.5">
                <span className={`h-3.5 w-3.5 chamf-sm border ${kleur(x.p).rand}`} style={{ background: kleur(x.p).bg }} />
                {x.l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
