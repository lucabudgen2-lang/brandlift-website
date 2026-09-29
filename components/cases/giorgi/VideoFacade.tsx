"use client";

import { useState } from "react";
import Image from "next/image";

/* ============================================================
   De medley van Giorgi & The Gents, met dezelfde facade als op
   hun eigen site: vóór de klik bestaat er geen <video>-element en
   wordt er geen byte video geladen. Deze pagina demonstreert zo
   meteen wat ze beschrijft.

   Het bestand komt rechtstreeks van giorgiandthegents.nl - de 720p-
   versie, omdat de speler hier smaller is dan op hun eigen site.
   Geen kopie in deze repo: twee exemplaren lopen uit elkaar.
   ============================================================ */

const BRON = "https://www.giorgiandthegents.nl/video/medley-720.mp4";

export function VideoFacade({ poster, alt }: { poster: string; alt: string }) {
  const [speelt, setSpeelt] = useState(false);

  return (
    <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-black shadow-[0_44px_100px_-45px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-video">
        {speelt ? (
          <video src={BRON} controls autoPlay playsInline className="absolute inset-0 h-full w-full bg-black" />
        ) : (
          <button
            type="button"
            onClick={() => setSpeelt(true)}
            aria-label="Speel de medley van Giorgi & The Gents af"
            className="group absolute inset-0 block outline-none"
          >
            <Image src={poster} alt={alt} fill sizes="(max-width: 1024px) 92vw, 900px" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center chamf chamf-sm bg-blue shadow-[0_18px_50px_-12px_rgba(1,48,253,0.9)] transition-transform duration-300 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-blue-text">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </span>
            <span className="absolute bottom-4 left-4 flex items-center gap-3 text-left">
              <span className="chamf-sm bg-s0/70 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                Medley · 1:33
              </span>
              <span className="hidden text-xs text-g300 sm:inline">Nog niets geladen - de video start pas na je klik</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
