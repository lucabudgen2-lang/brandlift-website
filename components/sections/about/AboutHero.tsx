import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, reviews, aboutPage } from "@/lib/site";

/* De feitenbalk onder de hero. Alles hier is controleerbaar: KvK staat in
   het handelsregister, de waardering komt uit het Bedrijfsprofiel en het
   adres staat op de contactpagina. Geen enkel cijfer is hier bedacht. */
const specs = [
  { k: "Oprichter", v: site.founder, s: "Ontwerpt en bouwt zelf" },
  { k: "Gevestigd in", v: site.city, s: "Werkt door heel Nederland" },
  { k: "Sinds", v: "2021", s: `KvK ${site.kvk}` },
  {
    k: "Google",
    v: reviews.rating.toString().replace(".", ","),
    s: `${reviews.count} reviews`,
  },
];

/* OB-01 · HERO — de positionering en het gezicht binnen drie seconden,
   afgesloten met een balk harde feiten. Die balk doet het werk dat de
   kop niet kan doen: bewijzen dat er een echt bedrijf achter zit. */
export function AboutHero() {
  const { hero } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="animate-glow pointer-events-none absolute -top-44 right-[-12%] h-[540px] w-[540px] rounded-full bg-blue/20 blur-[150px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 pt-16 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{hero.eyebrow}</p>
            </Reveal>
            <LineReveal
              as="h1"
              className="mt-5 text-[2.15rem] leading-[1.03] sm:text-5xl lg:text-[3.5rem]"
              lines={[
                { text: hero.h1Lines[0] },
                { text: hero.h1Lines[1], className: "text-g300" },
                { text: hero.h1Lines[2], className: "text-blue-text" },
              ]}
            />
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-g300">{hero.sub}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9">
                <Button href="/contact" variant="primary" className="group">
                  {hero.cta}
                </Button>
                <p className="mt-4 text-sm text-g500">{aboutPage.slotCta.micro}</p>
              </div>
            </Reveal>
          </div>

          {/* het gezicht achter het werk */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-blue/15 blur-[80px]" />
              {/* hoeklijnen: het kader dat de plaat een 'gemeten' gevoel geeft */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-blue/70"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-blue/70"
              />
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
        </div>

        {/* ── feitenbalk ── */}
        <Reveal delay={0.28}>
          <dl className="mt-14 grid gap-px overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((s) => (
              <div key={s.k} className="bg-s1/80 px-6 py-5 backdrop-blur-sm">
                <dt className="font-semibold text-[0.58rem] uppercase tracking-[0.14em] text-g600">
                  {s.k}
                </dt>
                <dd className="mt-2 font-display text-xl font-extrabold tracking-tight text-paper">
                  {s.v}
                </dd>
                <dd className="mt-1 text-[0.78rem] leading-snug text-g500">{s.s}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="pb-16 lg:pb-20" />
      </Container>
    </section>
  );
}
