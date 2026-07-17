import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, founder } from "@/lib/site";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

/* BL-10 · ACHTER BRANDLIFT — "het dossier": one dark monolith holds the whole
   story. Portrait fills the left flank edge-to-edge, the story sits beside it,
   a credentials rail runs underneath, and the section closes with the signed
   promise set over the office. One object, zero loose parts. */
export function Founder() {
  return (
    <section id="over" className="on-light relative py-20 md:py-28">
      {/* wider than the site container — the dossier gets extra breathing room */}
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-7">
        <div className="relative overflow-hidden chamf chamf-lg bg-s0 shadow-[0_60px_120px_-60px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />

          {/* ── 1 · the person | the story ── */}
          <div className="relative grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* portrait — full-bleed flank, always exactly as tall as the story */}
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-s2 to-s0" />
              {/* seam blends only the BACKGROUND into the panel — sits behind the
                  portrait so it never darkens the body */}
              <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-s0 lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-s0 to-transparent lg:hidden" />
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 translate-y-1/4 rounded-full bg-blue/30 blur-[100px]" />
              {/* zoomed out: whole cutout fits with margin, anchored to the base */}
              <div className="absolute inset-x-8 bottom-0 top-10 sm:inset-x-14 lg:inset-x-10 lg:top-14">
                <Image
                  src="/images/portrait-luca-soft.png"
                  alt={`${site.founder}, oprichter van Brandlift`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-contain object-bottom"
                />
              </div>
              {/* name chip */}
              <div className="absolute bottom-5 left-5 chamf-sm bg-blue px-4 py-2 shadow-[0_10px_30px_-10px_rgba(1,48,253,0.9)]">
                <span className="block font-display text-sm font-extrabold tracking-tight text-white">
                  {site.founder}
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                  Oprichter
                </span>
              </div>
            </div>

            {/* story */}
            <div className="relative p-7 sm:p-10 lg:p-14">
              <Reveal>
                <Eyebrow>{founder.eyebrow}</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-[1.7rem] leading-[1.07] text-paper sm:text-3xl lg:text-4xl"
                lines={[
                  { text: "Geen anoniem bureau." },
                  { text: "Gewoon Luca - die je", className: "text-g500" },
                  { text: "site zelf bouwt.", className: "text-blue-text" },
                ]}
              />
              <div className="mt-7 space-y-4">
                {founder.body.map((para, i) => (
                  <Reveal key={i} delay={0.08 + i * 0.05}>
                    <p className="max-w-xl text-[0.95rem] leading-relaxed text-g300 md:text-base">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.22}>
                <p className="mt-6 max-w-xl border-l-2 border-blue/50 pl-4 text-sm italic leading-relaxed text-g500">
                  Zo bouwden we onder meer de nieuwe site voor{" "}
                  <Link
                    href="/cases/hovenier-eykelenboom"
                    className="font-semibold not-italic text-blue-text hover:underline"
                  >
                    Hovenier Eykelenboom
                  </Link>{" "}
                  in Den Haag.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-8">
                  <Button href="#contact" variant="primary" className="group">
                    {founder.ctaLabel}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── 2 · credentials rail — lighter plate so it reads as its own band ── */}
          <div className="relative grid border-t border-[var(--color-line)] bg-s2 sm:grid-cols-2 lg:grid-cols-4">
            {founder.points.map((p, i) => (
              <Reveal key={p} delay={0.05 + i * 0.05}>
                <div
                  className={`flex h-full items-center gap-3 px-6 py-5 ${
                    i > 0 ? "border-t border-[var(--color-line)] sm:border-t-0 lg:border-l" : ""
                  } ${i === 1 ? "sm:border-l lg:border-l" : ""} ${i === 2 ? "sm:border-t lg:border-t-0" : ""} ${i === 3 ? "sm:border-l sm:border-t lg:border-t-0" : ""}`}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center chamf-sm bg-blue/15 text-blue-text">
                    <Check />
                  </span>
                  <span className="text-sm font-medium leading-tight text-g100">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── 3 · the signed promise, set over the office ── */}
          <div className="relative border-t border-[var(--color-line)]">
            <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[24/9]">
              <Image
                src="/images/brandlift-aan-het-werk.jpg"
                alt="Luca van Brandlift bouwt een strategische website op kantoor in Den Haag"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-blue-deep/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-s0/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-s0/70 via-transparent to-s0/40" />

              <figure className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center">
                <blockquote className="max-w-2xl font-display text-xl font-bold leading-snug tracking-tight text-paper drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] sm:text-2xl lg:text-[1.75rem]">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex flex-col items-center gap-1.5">
                  <Image
                    src="/images/signature-luca.png"
                    alt=""
                    width={140}
                    height={64}
                    className="h-11 w-auto opacity-95"
                  />
                  <span className="text-sm font-semibold text-g300">
                    {site.founder}, oprichter
                  </span>
                </figcaption>
              </figure>

              {/* location chip */}
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 chamf-sm bg-s0/60 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                Ons team in Den Haag
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
