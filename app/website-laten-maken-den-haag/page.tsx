import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero, ProseSections, FaqBlock, CtaBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { cityPages, caseEykelenboom, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const city = cityPages["den-haag"];

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: `/${city.slug}` },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Website laten maken", path: "/diensten/website-laten-maken" },
  { name: `Website laten maken ${city.city}`, path: `/${city.slug}` },
];

export default function Page() {
  const schema = serviceSchema({
    name: `Website laten maken ${city.city}`,
    description: city.metaDescription,
    path: `/${city.slug}`,
    areaServed: city.city,
    faqs: city.faqs,
    crumbs,
    withReviews: reviews,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        crumbs={crumbs}
        eyebrow={`${city.city} · heel Nederland`}
        h1={city.h1}
        intro={city.intro}
        updated={city.updated}
        badge={city.responsePromise}
      />

      <ProseSections sections={city.sections} />

      {/* lokaal bewijs: de Haagse case */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Lokaal bewijs</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-paper sm:text-4xl">
                Gebouwd voor een hovenier in Den Haag
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-g300">
                Voor Hovenier Eykelenboom in Den Haag bouwden we een complete website met een lokale
                SEO-structuur per dienst en werkgebied. Het resultaat: structureel meer aanvragen uit
                de eigen regio.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 inline-flex items-baseline gap-2.5 chamf chamf-lg bg-blue px-6 py-4 font-display font-extrabold text-white shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                <span className="text-2xl">{caseEykelenboom.stat.from}</span>
                <span className="text-white/60">→</span>
                <span className="text-4xl">{caseEykelenboom.stat.to}</span>
                <span className="text-sm font-semibold text-white/85">{caseEykelenboom.stat.unit}</span>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <Link
                href="/cases/hovenier-eykelenboom"
                className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
              >
                Bekijk de volledige case
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_90px_-44px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src={caseEykelenboom.image}
                  alt={caseEykelenboom.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-deep/20 mix-blend-multiply" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Reviews tone="light" />

      {/* lokale dekking: stadsdelen + wijken */}
      <section className="on-light py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Actief in heel {city.city}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                Van het Centrum tot de kust
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-lg leading-relaxed text-g600">{city.areasIntro}</p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-8">
              <p className="text-sm font-semibold text-g600">Stadsdelen</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.stadsdelen.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3.5 py-2 text-sm font-medium text-g800"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6">
              <p className="text-sm font-semibold text-g600">En onder meer in de wijken</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.wijken.map((w) => (
                  <span
                    key={w}
                    className="inline-flex chamf-sm border border-ink/10 px-3 py-1.5 text-[0.82rem] font-medium text-g700"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-sm font-semibold text-g600">Ook in de regio</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {city.nearby.map((n) => (
                  <span key={n} className="text-sm text-g500">
                    Website laten maken {n}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqBlock faqs={city.faqs} />
      <CtaBlock
        h2={`Klaar voor een website die Haagse klanten oplevert?`}
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat."
      />
    </main>
  );
}
