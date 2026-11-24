import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroHeadline } from "@/components/sections/HeroHeadline";
import { HeroWand } from "@/components/sections/HeroWand";
import { hero, cta, reviews } from "@/lib/site";

function Sterren() {
  return (
    <span className="flex gap-0.5 text-[#FBBC05]" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/* BL-01 · HERO - gecentreerd, op een wand van echt werk.
   De wand (HeroWand) is de achtergrond: websites, merkboeken, drukwerk en
   stills van eigen klanten. De tekst staat in een donkere kern in het
   midden, zodat hij op elk punt van de animatie leesbaar blijft. */
export function Hero() {
  const rating = reviews.rating.toFixed(1).replace(".", ",");

  return (
    <section className="relative isolate flex min-h-[min(100svh,1000px)] flex-col overflow-hidden bg-s0">
      <HeroWand />

      <Container className="relative flex flex-1 flex-col items-center justify-start pb-12 pt-10 text-center md:pb-14 md:pt-12">
        {/* De H1 is de zoekregel; de slogan eronder is visueel de kop maar een <p>. */}
        <Reveal>
          <h1 className="mx-auto max-w-[62rem] font-display text-[clamp(1rem,1.85vw,1.32rem)] font-extrabold uppercase leading-snug tracking-[0.05em] [text-wrap:balance] text-paper">
            <span>
              Webdesignbureau in{" "}
              <span className="inline-block chamf-sm bg-blue px-2.5 py-0.5 text-white shadow-[0_8px_24px_-8px_rgba(1,48,253,0.9)]">Den Haag</span>{" "}
              dat je meer aanvragen oplevert
            </span>
          </h1>
        </Reveal>

        <HeroHeadline
          center
          lines={hero.sloganLines}
          className="mt-7 font-display text-[clamp(1.95rem,8.2vw,5.2rem)] font-extrabold leading-[1.08] tracking-tight text-paper"
        />

        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-g200 [text-shadow:0_1px_12px_rgba(0,0,0,0.8)] md:text-xl">{hero.sub}</p>
        </Reveal>

        <Reveal delay={0.38}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={cta.primaryHome.href} variant="primary" className="group">
              {cta.primaryHome.label}
            </Button>
            <Button href={cta.secondary.href} variant="secondary" className="group">
              {cta.secondary.label}
            </Button>
          </div>
          <p className="mt-4 text-sm text-g400">{hero.ctaMicrocopy}</p>
        </Reveal>

      </Container>

      {/* onderbalk: wie je spreekt, wiens werk je ziet, wat klanten zeggen */}
      <div className="relative border-t border-[var(--color-line)] bg-s0/75 backdrop-blur-md">
        <Container className="grid items-center gap-4 py-3.5 md:grid-cols-[auto_1fr_auto] md:gap-8">
          <div className="flex items-center justify-between gap-6 md:contents">
            <div className="md:order-1">
              <a href="#over" className="group flex items-center gap-3">
                <span className="block h-11 w-11 shrink-0 overflow-hidden chamf-sm border border-blue/50">
                  <Image
                    src="/images/portrait-luca-chip.jpg"
                    alt="Luca Budgen, oprichter van Brandlift"
                    width={88}
                    height={88}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-left text-sm leading-snug text-g300 transition-colors group-hover:text-paper">
                  Direct contact met
                  <span className="block whitespace-nowrap font-semibold text-paper">Luca, oprichter</span>
                </span>
              </a>
            </div>
            <div className="md:order-3">
              <a href="#reviews" className="group flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8z" />
                  <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z" />
                  <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8z" />
                  <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z" />
                </svg>
                <span className="text-left text-sm leading-snug">
                  <span className="flex items-center gap-2 font-semibold text-paper">
                    {rating} <Sterren />
                  </span>
                  <span className="block whitespace-nowrap text-g400 transition-colors group-hover:text-paper">
                    {reviews.count} reviews op {reviews.source}
                  </span>
                </span>
              </a>
            </div>
          </div>
          <p className="text-center text-[0.8rem] text-g400 md:order-2">
            <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-g500">Op de achtergrond</span>
            <span className="mx-2.5 inline-block h-1 w-1 -translate-y-[2px] chamf-sm bg-blue-text/60" aria-hidden />
            websites die we bouwden, live en in de maak.{" "}
            <Link href="/cases" className="whitespace-nowrap font-semibold text-blue-text hover:underline">
              Bekijk de cases →
            </Link>
          </p>
        </Container>
      </div>
    </section>
  );
}
