import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, aboutPage } from "@/lib/site";

/* OB-01 · HERO — the positioning + a face, within three seconds. */
export function AboutHero() {
  const { hero } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="animate-glow pointer-events-none absolute -top-44 right-[-12%] h-[540px] w-[540px] rounded-full bg-blue/20 blur-[150px]" />

      <Container className="relative grid items-center gap-12 pb-16 pt-16 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-20">
        <div>
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
          </Reveal>
          <LineReveal
            as="h1"
            className="mt-5 text-[2rem] leading-[1.06] sm:text-5xl lg:text-[3.2rem]"
            lines={[
              { text: hero.h1Lines[0] },
              { text: hero.h1Lines[1], className: "text-g300" },
              { text: hero.h1Lines[2], className: "text-blue-text" },
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">{hero.sub}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8">
              <Button href="/contact" variant="primary" className="group">
                {hero.cta}
              </Button>
              <p className="mt-4 text-sm text-g500">{aboutPage.slotCta.micro}</p>
            </div>
          </Reveal>
        </div>

        {/* the face behind the work */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-blue/15 blur-[80px]" />
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-gradient-to-b from-s2 to-s0 shadow-[0_44px_90px_-44px_rgba(0,0,0,0.7)]">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-35" />
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 translate-y-1/4 rounded-full bg-blue/30 blur-[90px]" />
              <div className="relative aspect-[4/5]">
                <div className="absolute inset-x-6 bottom-0 top-8">
                  <Image
                    src="/images/portrait-luca-soft.png"
                    alt={`${site.founder}, oprichter van Brandlift`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 34vw"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 chamf-sm bg-blue px-4 py-2 shadow-[0_10px_30px_-10px_rgba(1,48,253,0.9)]">
                <span className="block font-display text-sm font-extrabold tracking-tight text-white">
                  {site.founder}
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                  Oprichter
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
