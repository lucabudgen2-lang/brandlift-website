"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";

/* ============================================================
   Video-testimonial · Sebastiaan Eykelenboom

   Klik-om-te-laden. De YouTube-embed sleept ruim een megabyte aan
   scripts en cookies mee; die last hoort niet bij iedere bezoeker
   terecht te komen, alleen bij wie de video echt wil zien. Tot die
   klik staat er een gewone next/image-poster - dus geoptimaliseerd,
   lui geladen en zonder verzoek naar Google.

   Beide citaten staan woordelijk in de ondertiteling van de video
   zelf (VXdba5y2toM, rond 0:09 en 1:47). Alleen komma's toegevoegd;
   gesproken taal leest anders niet.
   ============================================================ */

const VIDEO_ID = "VXdba5y2toM";
const IMG = "/images/cases/eykelenboom";

export function VideoTestimonial() {
  const [speelt, setSpeelt] = useState(false);

  return (
    <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>In zijn eigen woorden</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
            lines={[{ text: "Sebastiaan vertelt" }, { text: "het liever zelf.", className: "text-g600" }]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-g600">
              Twee minuten waarin hij vertelt hoe het bedrijf ervoor stond, waarom hij twijfelde
              over een bureau, en wat er sinds de livegang veranderd is. In zijn woorden, niet
              de onze.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch">
          {/* ── de speler ── */}
          <Reveal>
            <div className="relative h-full">
              <div className="relative aspect-video w-full overflow-hidden chamf chamf-lg border border-ink/10 bg-s0 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.65)]">
                {speelt ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="Sebastiaan Eykelenboom over de samenwerking met Brandlift"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setSpeelt(true)}
                    aria-label="Speel het klantverhaal van Sebastiaan Eykelenboom af (2 minuten en 18 seconden)"
                    className="group absolute inset-0 h-full w-full cursor-pointer"
                  >
                    <Image
                      src={`${IMG}/video-testimonial-poster.jpg`}
                      alt="Sebastiaan Eykelenboom vertelt in zijn tuin over de samenwerking met Brandlift"
                      fill
                      sizes="(max-width: 1024px) 92vw, 62vw"
                      className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-s0/55 via-transparent to-transparent" />

                    {/* rechtsboven, niet links: in de poster staat linksboven
                        al het Brandlift-watermerk uit de video zelf */}
                    <span className="absolute right-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/60 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.09em] text-g100 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff4444]" />
                      Klantverhaal · 2:18
                    </span>

                    <span className="absolute left-1/2 top-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center chamf chamf-sm bg-blue shadow-[0_18px_48px_-12px_rgba(1,48,253,0.95)] transition-transform duration-300 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.08]">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden>
                        <path d="M7 4.5v15l13-7.5z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* ── het citaat ── */}
          <Reveal delay={0.12}>
            <figure className="relative flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-7 pt-10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8 md:pt-11">
              {/* het hangende citaatvlaggetje - vast merkmotief */}
              <span
                aria-hidden
                className="absolute left-7 top-0 grid h-9 w-9 -translate-y-1/2 place-items-center chamf chamf-sm bg-blue shadow-[0_10px_26px_-8px_rgba(1,48,253,0.8)]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                  <path d="M9.5 5H4v7.2C4 16.6 6.3 19 10 19v-2.6c-1.9 0-2.9-1.1-2.9-2.9h2.4V5zm10 0H14v7.2c0 4.4 2.3 6.8 6 6.8v-2.6c-1.9 0-2.9-1.1-2.9-2.9h2.4V5z" />
                </svg>
              </span>

              <blockquote className="font-display text-[1.35rem] font-extrabold leading-[1.28] tracking-tight text-ink md:text-[1.5rem]">
                Ik kan nu eindelijk kiezen welke klussen ik wil aannemen.
              </blockquote>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-g600">
                En over de website zelf: <span className="font-semibold text-g800">&ldquo;Het was eigenlijk
                precies wat ik wilde, zonder dat ik wist wat ik wilde.&rdquo;</span>
              </p>

              <figcaption className="mt-auto flex items-center gap-3.5 border-t border-ink/[0.08] pt-5 md:pt-6">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden chamf chamf-sm border border-ink/10">
                  <Image
                    src={`${IMG}/sebastiaan-portret.jpg`}
                    alt="Sebastiaan Eykelenboom"
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                  />
                </span>
                <span>
                  <span className="block text-[0.9rem] font-bold leading-tight text-ink">
                    Sebastiaan Eykelenboom
                  </span>
                  <span className="mt-0.5 block text-[0.78rem] text-g600">
                    Hovenier Eykelenboom · Den Haag
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
