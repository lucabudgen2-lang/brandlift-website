import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBlock } from "@/components/page/blocks";
import { KostenCalculator } from "@/components/calculator/KostenCalculator";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website kosten berekenen in 1 minuut",
  description:
    "Bereken in 1 minuut wat jouw website kost. Stel je website samen en zie direct een eerlijke prijsindicatie vanaf €1.500 - vrijblijvend, zonder verplichtingen.",
  alternates: { canonical: "/website-kosten-calculator" },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Website kosten berekenen", path: "/website-kosten-calculator" },
];

/* WebApplication + breadcrumbs */
function calculatorSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${site.url}/website-kosten-calculator#app`,
        name: "Website kosten calculator",
        url: `${site.url}/website-kosten-calculator`,
        description:
          "Gratis calculator die in 1 minuut een eerlijke prijsindicatie geeft voor het laten maken van een website, vanaf €1.500.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript",
        isAccessibleForFree: true,
        inLanguage: "nl-NL",
        provider: { "@id": `${site.url}/#organization` },
        offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      },
      breadcrumbSchema(crumbs),
    ],
  };
}

/* hoe de indicatie tot stand komt */
const uitleg = [
  {
    title: "Gebaseerd op echte projecten",
    body: "De bandbreedtes komen uit onze eigen projectprijzen sinds 2021 - geen marketinggetallen, maar wat websites bij ons werkelijk kosten.",
  },
  {
    title: "Transparant over wat meetelt",
    body: "Het type website, een paar extra functies en of er nog beeld nodig is bepalen de prijs. Je ziet live wat elke keuze doet - zo weet je precies waar het bedrag vandaan komt.",
  },
  {
    title: "Vrijblijvend, geen kleine lettertjes",
    body: "De indicatie verplicht je tot niets. De exacte prijs bepalen we samen in een gratis groeigesprek van 30 minuten - zonder salespitch.",
  },
];

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema()) }} />

      {/* ═══════════ HERO — compact, straight into the tool ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-12 md:pb-14">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Gratis tool · 1 minuut</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                Bereken wat jouw website gaat kosten
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                Stel hieronder je website samen en zie direct een eerlijke prijsindicatie - live, terwijl
                je klikt. Vanaf €1.500, inclusief strategie en een lokale SEO-basis. Vrijblijvend en
                zonder kleine lettertjes.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {["Live prijsindicatie", "Vanaf €1.500", "Geen verplichtingen"].map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3.5 py-2 text-sm font-medium text-g100 backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ THE TOOL ═══════════ */}
      <KostenCalculator />

      {/* ═══════════ HOE DE INDICATIE TOT STAND KOMT ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Eerlijk gerekend</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Hoe deze indicatie" }, { text: "tot stand komt.", className: "text-g600" }]}
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {uitleg.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden chamf border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span aria-hidden className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    0{i + 1}
                  </span>
                  <h3 className="pr-10 text-lg font-bold leading-snug text-ink">{u.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g600">{u.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* liever eerst lezen */}
          <Reveal delay={0.12}>
            <div className="mt-12 flex flex-col items-start justify-between gap-5 chamf chamf-lg border border-ink/10 bg-black/[0.02] p-7 sm:flex-row sm:items-center md:p-9">
              <div>
                <p className="font-display text-xl font-extrabold tracking-tight text-ink">
                  Liever eerst lezen waar de prijs vandaan komt?
                </p>
                <p className="mt-1.5 max-w-xl text-base leading-relaxed text-g600">
                  In onze kostengids leggen we eerlijk uit wat een website laten maken kost - per type,
                  met alle keuzes die de prijs bepalen.
                </p>
              </div>
              <Link
                href="/kennisbank/wat-kost-een-website-laten-maken"
                className="group inline-flex shrink-0 items-center gap-2 chamf-sm border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-blue hover:bg-blue hover:text-white"
              >
                Lees de kostengids
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBlock
        h2="Liever direct een exacte prijs?"
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je krijgt een eerlijke prijs die past bij jouw situatie - zonder salespitch."
      />
    </main>
  );
}
