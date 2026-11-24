"use client";

import { useEffect, useState } from "react";
import { fases as giorgiFases } from "@/lib/cases/giorgi";

type Fase = { id: string; kort: string };

/* ============================================================
   De voortgangsrail langs de acht fases.

   Een verticale rij punten aan de linkerrand, alleen op brede
   schermen (daar is ruimte naast de content) en alleen zolang je
   ín het traject bent. Daarbuiten zou hij een navigatie-element zijn
   dat nergens bij hoort.

   Actieve fase = de sectie waarvan de bovenkant het laatst de lijn
   op 40% van de viewport is gepasseerd. Dat is stabieler dan "welke
   sectie is het meest zichtbaar": lange secties blijven dan niet
   hangen en korte worden niet overgeslagen.
   ============================================================ */

/* `fases` is optioneel: zonder prop toont hij de Giorgi-fases, zodat
   die pagina ongewijzigd blijft. Andere cases geven hun eigen lijst. */
export function FaseRail({ fases = giorgiFases }: { fases?: readonly Fase[] }) {
  const [actief, setActief] = useState<string | null>(null);
  const [zichtbaar, setZichtbaar] = useState(false);

  useEffect(() => {
    const els = fases.map((f) => document.getElementById(f.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const bereken = () => {
      const lijn = window.innerHeight * 0.4;
      let huidig: string | null = null;
      for (const el of els) if (el.getBoundingClientRect().top <= lijn) huidig = el.id;
      const laatste = els[els.length - 1].getBoundingClientRect();
      setZichtbaar(huidig !== null && laatste.bottom > lijn);
      setActief(huidig);
    };
    bereken();
    window.addEventListener("scroll", bereken, { passive: true });
    window.addEventListener("resize", bereken);
    return () => {
      window.removeEventListener("scroll", bereken);
      window.removeEventListener("resize", bereken);
    };
  }, [fases]);

  const index = fases.findIndex((f) => f.id === actief);

  return (
    <nav
      aria-label="Fases van het traject"
      className={`fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 xl:block 2xl:left-8 ${
        zichtbaar ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1/85 px-3 py-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <p className="mb-3 text-center font-display text-[0.6rem] font-bold tabular-nums text-g500">
          {index >= 0 ? index + 1 : 0}/{fases.length}
        </p>
        <ol className="relative flex flex-col gap-3">
          <span aria-hidden className="absolute bottom-1 left-[5px] top-1 w-px bg-white/10" />
          <span
            aria-hidden
            className="absolute left-[5px] top-1 w-px bg-blue-text transition-[height] duration-300"
            style={{ height: index >= 0 ? `calc(${(index / (fases.length - 1)) * 100}% - 8px)` : 0 }}
          />
          {fases.map((f, i) => {
            const aan = f.id === actief;
            const gehad = index >= i;
            return (
              <li key={f.id} className="relative">
                <a
                  href={`#${f.id}`}
                  aria-current={aan ? "step" : undefined}
                  className="group flex items-center gap-3 outline-none"
                >
                  <span
                    className={`relative z-10 h-[11px] w-[11px] shrink-0 chamf-sm border transition-colors duration-200 ${
                      aan ? "border-blue-text bg-blue-text" : gehad ? "border-blue-text bg-s1" : "border-white/25 bg-s1"
                    } group-focus-visible:ring-2 group-focus-visible:ring-blue-text`}
                  />
                  <span
                    className={`whitespace-nowrap text-[0.72rem] font-semibold transition-all duration-200 ${
                      aan ? "max-w-[140px] text-paper opacity-100" : "max-w-0 overflow-hidden text-g400 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-focus-visible:max-w-[140px] group-focus-visible:opacity-100"
                    }`}
                  >
                    {f.kort}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
