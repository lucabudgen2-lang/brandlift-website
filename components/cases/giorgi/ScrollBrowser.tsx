"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/* ============================================================
   De hele homepage in een venster: beweeg eroverheen en hij scrolt
   rustig van boven naar beneden. Op touch en met toetsenbord is het
   venster gewoon zelf te scrollen - de animatie is een extraatje,
   nooit de enige manier om de inhoud te zien.

   De afstand wordt gemeten (beeldhoogte min vensterhoogte) in plaats
   van geraden, zodat hij bij elk schermformaat precies onderaan stopt.
   ============================================================ */

export function ScrollBrowser({
  src,
  alt,
  url,
  breed,
  hoog,
  venster = "aspect-[16/10]",
  mobiel = false,
}: {
  src: string;
  alt: string;
  url: string;
  breed: number;
  hoog: number;
  venster?: string;
  mobiel?: boolean;
}) {
  const kader = useRef<HTMLDivElement>(null);
  const [afstand, setAfstand] = useState(0);
  const [actief, setActief] = useState(false);
  /* Wie minder beweging wil, krijgt geen automatische scroll - alleen het scrollbare venster. */
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = kader.current;
    if (!el) return;
    const meet = () => setAfstand(Math.max(0, el.clientWidth * (hoog / breed) - el.clientHeight));
    meet();
    const ro = new ResizeObserver(meet);
    ro.observe(el);
    return () => ro.disconnect();
  }, [breed, hoog]);

  /* ~ 90 px per seconde: langzaam genoeg om te lezen, snel genoeg om niet te vervelen */
  const duur = Math.round(afstand / 90);

  const beeld = (
    <div
      ref={kader}
      tabIndex={0}
      aria-label={`${alt} - scrol om de hele pagina te zien`}
      className={`relative ${venster} overflow-y-auto overscroll-contain outline-none [scrollbar-width:thin] focus-visible:ring-2 focus-visible:ring-blue-text ${reduce ? "" : "md:overflow-hidden"}`}
      onMouseEnter={() => !reduce && setActief(true)}
      onMouseLeave={() => setActief(false)}
    >
      <div
        className="w-full will-change-transform"
        style={{
          transform: actief ? `translateY(-${afstand}px)` : "translateY(0)",
          transition: `transform ${actief ? duur : Math.min(duur, 3)}s ${actief ? "linear" : "cubic-bezier(.22,.61,.36,1)"}`,
        }}
      >
        <Image src={src} alt={alt} width={breed} height={hoog} sizes={mobiel ? "260px" : "(max-width: 1024px) 92vw, 760px"} className="block h-auto w-full" />
      </div>
    </div>
  );

  if (mobiel) {
    return (
      <div className="rounded-[30px] border border-ink/15 bg-[#0b0c10] p-[6px] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-[24px]">{beeld}</div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden chamf chamf-lg border border-ink/10 bg-white shadow-[0_40px_90px_-45px_rgba(0,0,0,0.55)]">
      <div className="flex items-center gap-2 border-b border-ink/[0.07] bg-black/[0.02] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-blue" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="ml-2 flex-1 truncate chamf-sm bg-black/[0.04] px-3 py-1 text-[0.6rem] font-semibold tracking-[0.08em] text-g600">{url}</span>
        <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-g600 md:inline">
          {actief ? "Scrollt..." : "Beweeg eroverheen"}
        </span>
      </div>
      {beeld}
    </div>
  );
}
