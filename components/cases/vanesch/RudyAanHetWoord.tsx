"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { IMG, rudy } from "@/lib/cases/vanesch";
import { SKYLINE_PATHS, SKYLINE_VIEWBOX as V } from "./skyline-paths";

/* ============================================================
   Rudy aan het woord: zijn videotestimonial en zijn Google-review.

   Allebei komen nog. Tot ze er zijn, staat er eerlijk dat ze komen:
   geen verzonnen citaat, geen nepspeler, geen sterren die nergens
   vandaan komen, en niets in het schema. Zodra `rudy.video` of
   `rudy.review` in lib/cases/vanesch.ts gevuld is, verschijnt hier het
   echte werk (de review via lib/site.ts, net als bij de andere cases).
   ============================================================ */

function YouTubeFacade({ id, titel }: { id: string; titel: string }) {
  const [aan, setAan] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-black">
      {aan ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={titel}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setAan(true)} className="group absolute inset-0" aria-label={`Speel de video af: ${titel}`}>
          <Image src={`${IMG}/foto-rudy-portret.jpg`} alt="" fill sizes="(max-width: 1024px) 92vw, 760px" className="object-cover opacity-80" />
          <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center chamf chamf-sm bg-blue shadow-[0_18px_50px_-12px_rgba(1,48,253,0.9)] transition-transform duration-300 group-hover:scale-105">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden>
              <path d="M8 5v14l11-7Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

function VideoVolgt() {
  return (
    <div className="relative aspect-video overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-[#262261]">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <svg viewBox={`${V.x} ${V.y} ${V.w} ${V.h}`} className="absolute bottom-0 right-[6%] h-[46%] w-auto opacity-90" aria-hidden>
        <g fill="#EF4036">
          {SKYLINE_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-[5px] bg-[#EF4036]" />
      <div className="relative flex h-full flex-col justify-center p-6 sm:p-10">
        <span className="grid h-14 w-14 place-items-center chamf chamf-sm border border-white/25 text-white/60 sm:h-16 sm:w-16" aria-hidden>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7Z" />
          </svg>
        </span>
        <p className="mt-5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#FF8F87]">Video · volgt binnenkort</p>
        <p className="mt-2 max-w-sm font-display text-xl font-extrabold leading-tight text-white sm:text-2xl">
          Rudy vertelt zelf hoe het traject ging.
        </p>
      </div>
    </div>
  );
}

function ReviewVolgt() {
  return (
    <figure className="relative chamf chamf-lg bg-white p-7 text-ink shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9)] md:p-8">
      <div className="flex items-center justify-between">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-label="Google">
          <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8z" />
          <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z" />
          <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z" />
          <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z" />
        </svg>
        <span className="chamf-sm bg-ink/[0.05] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">Volgt binnenkort</span>
      </div>
      <div className="mt-6 space-y-2.5" aria-hidden>
        <span className="block h-2.5 w-full chamf-sm bg-ink/[0.07]" />
        <span className="block h-2.5 w-[92%] chamf-sm bg-ink/[0.07]" />
        <span className="block h-2.5 w-[78%] chamf-sm bg-ink/[0.07]" />
      </div>
      <p className="mt-6 text-[1.02rem] leading-relaxed text-g700">
        Hier komt Rudy&apos;s Google-review, woord voor woord, zodra hij hem heeft geplaatst.
      </p>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
        <span className="relative h-11 w-11 shrink-0 overflow-hidden chamf chamf-sm">
          <Image src={`${IMG}/foto-rudy-portret.jpg`} alt="Rudy van Esch" fill sizes="44px" className="object-cover" />
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">Rudy van Esch</span>
          <span className="block text-xs text-g600">R. van Esch Gevelrestauratie, Liempde</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function RudyAanHetWoord() {
  return (
    <section id="rudy" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Rudy aan het woord</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
            lines={[{ text: "Niet wij," }, { text: "maar Rudy zelf.", className: "text-blue-text" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g300">
              Wat wij over een traject zeggen, weegt minder dan wat de klant erover zegt. Rudy&apos;s video en zijn
              review komen hier, in zijn eigen woorden.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <Reveal delay={0.1}>{rudy.video ? <YouTubeFacade id={rudy.video.youtubeId} titel={rudy.video.titel} /> : <VideoVolgt />}</Reveal>
          {!rudy.review && (
            <Reveal delay={0.16}>
              <ReviewVolgt />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
