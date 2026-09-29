"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { localPack } from "@/lib/cases/giorgi";

/* ============================================================
   De zes bands in de Google Maps-resultaten voor "coverband",
   en hun aantal reviews. Eén reeks, staven vanaf nul.

   De rij die ertoe doet - plek 5 met 8 reviews - krijgt geen andere
   kleur maar een tekstlabel: kleur alleen zou betekenis dragen die
   niet iedereen ziet. De andere rijen staan op iets lagere dekking.
   ============================================================ */

const MAX = 60;
const ease = [0.22, 0.61, 0.36, 1] as const;

export function LocalPackChart() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div>
      <ul className="space-y-1">
        {localPack.map((b, k) => {
          const drempel = b.reviews === Math.min(...localPack.map((x) => x.reviews));
          const pct = (b.reviews / MAX) * 100;
          return (
            <li
              key={b.plek}
              tabIndex={0}
              onMouseEnter={() => setHover(k)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(k)}
              onBlur={() => setHover(null)}
              className="grid grid-cols-[4.5rem_1fr] items-center gap-3 rounded-md py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <span className="text-[0.78rem] font-semibold text-g700">Plek {b.plek}</span>
              <span className="relative block h-[22px]">
                <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-ink/15" />
                <motion.span
                  aria-hidden
                  className={`absolute left-0 top-1/2 h-[10px] -translate-y-1/2 rounded-r-[4px] bg-blue ${drempel || hover === k ? "opacity-100" : "opacity-60"}`}
                  initial={reduce ? { width: `${pct}%` } : { width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: 0.1 + k * 0.06, ease }}
                />
                <span className="absolute top-1/2 flex -translate-y-1/2 items-center gap-2 whitespace-nowrap" style={{ left: `calc(${pct}% + 10px)` }}>
                  <span className="font-display text-[0.8rem] font-bold tabular-nums text-ink">{b.reviews}</span>
                  {drempel && (
                    <span className="chamf-sm bg-blue px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.06em] text-white">
                      de drempel
                    </span>
                  )}
                  {hover === k && (
                    <span role="tooltip" className="text-[0.72rem] text-g600">
                      {b.plaats} · {b.score} sterren
                    </span>
                  )}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-g600">
        Aantal Google-reviews per band in de Maps-resultaten voor &quot;coverband&quot;, juli 2026. Alle zes
        hebben het woord &quot;coverband&quot; in hun bedrijfsnaam op Google.
      </p>
    </div>
  );
}
