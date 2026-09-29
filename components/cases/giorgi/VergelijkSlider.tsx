"use client";

import { useState } from "react";
import Image from "next/image";

/* ============================================================
   Merkboekschets ↔ live homepage, met een schuif ertussen.

   Beide beelden hebben dezelfde verhouding (2,5 : 1) en dezelfde
   opbouw - logo links, navigatie rechts, kop in het midden - dus je
   ziet precies wat er van schets naar site is gebleven en wat er is
   bijgekomen (de foto, de uitgebreide navigatie, de introtekst).

   De bediening is een gewone <input type="range">: slepen, tikken en
   pijltjestoetsen werken vanzelf, en een schermlezer leest hem voor.
   ============================================================ */

export function VergelijkSlider({
  links,
  rechts,
  labelLinks,
  labelRechts,
}: {
  links: { src: string; alt: string };
  rechts: { src: string; alt: string };
  labelLinks: string;
  labelRechts: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative select-none overflow-hidden chamf chamf-lg border border-ink/10 has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-blue shadow-[0_40px_90px_-45px_rgba(0,0,0,0.55)]">
      <div className="relative aspect-[5/2]">
        <Image src={rechts.src} alt={rechts.alt} fill sizes="(max-width: 1200px) 94vw, 1100px" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={links.src} alt={links.alt} fill sizes="(max-width: 1200px) 94vw, 1100px" className="object-cover" />
        </div>

        {/* de scheidslijn met greep */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <span className="absolute inset-y-0 -left-px w-[2px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.6)]" />
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center chamf-sm bg-blue text-sm font-bold text-white shadow-[0_12px_30px_-8px_rgba(1,48,253,0.9)]">
            ↔
          </span>
        </div>

        <span className="absolute left-3 top-3 chamf-sm bg-s0/75 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
          {labelLinks}
        </span>
        <span className="absolute right-3 top-3 chamf-sm bg-blue px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white">
          {labelRechts}
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Schuif tussen ${labelLinks.toLowerCase()} en ${labelRechts.toLowerCase()}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
    </div>
  );
}
