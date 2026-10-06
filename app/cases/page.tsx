import { buildPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqBlock } from "@/components/page/blocks";
import { Cases } from "@/components/sections/Cases";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCta } from "@/components/sections/FinalCta";
import { cases, casesHead } from "@/lib/site";
import { collectionSchema, faqSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Cases & portfolio",
  description:
    "Bekijk het werk van Brandlift: strategische websites met branding en lokale SEO voor Nederlandse vakbedrijven, premium merken en dienstverleners.",
  path: "/cases",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Cases", path: "/cases" },
];

/* De cijfers komen uit de kaarten hieronder, niet uit een losse bewering:
   `cases` is de enige bron en telt zichzelf. Zo kan de kop niet gaan
   afwijken zodra er een case bij komt. */
const metCasepagina = cases.filter((c) => "href" in c).length;

/* Kop uit casesHead, niet overgetypt: anders zegt /cases straks iets
   anders dan de casesectie op de homepage zodra iemand die tekst wijzigt.
   De tweede zin krijgt de accentkleur. */
const [kopEerst, kopTweede] = casesHead.h2.split(/(?<=\.)\s+/);
const sectoren = new Set(cases.map((c) => c.sector.split(" / ")[0])).size;

/* Wat elk traject gemeen heeft. Geen beloofde uitkomsten: dit beschrijft
   wat we doen, niet wat de klant krijgt. Alle drie woordelijk terug te
   voeren op `methode` in lib/site.ts (01 Positionering, 03 Branding +
   04 Lokale SEO, 05 Conversie), zodat de pagina niets belooft wat de
   werkwijze zelf niet zegt. */
const rodeDraad = [
  {
    n: "01",
    titel: "Eerst onderzoek, dan pas ontwerp",
    body: "Wie zoekt er, waarop, en wat staat de concurrent te bieden? Dat bepaalt de structuur van de site, niet andersom.",
  },
  {
    n: "02",
    titel: "Merk en vindbaarheid in één traject",
    body: "Een mooi merk dat niemand vindt werkt niet, en een vindbare site die geen vertrouwen wekt ook niet. Daarom nooit los van elkaar.",
  },
  {
    n: "03",
    titel: "Gebouwd op contact, niet op mooi",
    body: "Pagina's gericht op vertrouwen, duidelijkheid en actie, zodat bezoekers sneller contact opnemen.",
  },
];

const faqs = [
  {
    q: "Waarom staan hier maar een paar cases?",
    a: "Omdat we alleen laten zien wat we echt gebouwd hebben. Een portfolio vullen met sjablonen of werk van anderen is zo gedaan, maar dan weet je nog niets over wat wij voor jou kunnen doen.",
  },
  {
    q: "Van sommige cases is er geen pagina. Hoe kan dat?",
    a: "Die trajecten lopen nog of de casepagina wordt nog gebouwd. De klant en het werk zijn echt - we zetten er alleen pas een pagina bij als we het hele verhaal kunnen laten zien.",
  },
  {
    q: "Werken jullie alleen voor vakbedrijven?",
    a: "Nee. Het zwaartepunt ligt bij vakbedrijven en dienstverleners, maar er zitten ook premium en visuele merken tussen. De aanpak verandert niet, de uitstraling wel.",
    link: { label: "Bekijk voor wie we werken", href: "/voor-wie" },
  },
  {
    q: "Kan ik de sites zelf bekijken?",
    a: "Van de meeste wel: het webadres staat op de kaart. Eén traject loopt nog, dus die site is er nog niet. Op de voorbeeldenpagina staan daarnaast nog meer sites die we bouwden.",
    link: { label: "Naar de voorbeelden", href: "/voorbeelden" },
  },
];

export default function Page() {
  const schema = collectionSchema({
    name: "Cases en portfolio",
    description: metadata.description as string,
    path: "/cases",
    crumbs,
    /* Alleen cases met een echte pagina: een ItemList die naar een 404
       wijst is een belofte die Google natrekt. */
    items: cases
      .filter((c): c is typeof c & { href: string } => "href" in c)
      .map((c) => ({ name: c.client, path: c.href, description: c.sector })),
  });

  const faq = faqSchema(faqs, "/cases");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* ═══════════ 1 · HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Cases &amp; portfolio</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3rem]">
                  {kopEerst}{" "}
                  <span className="text-blue-text">{kopTweede}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">{casesHead.intro}</p>
              </Reveal>
            </div>

            {/* dt vóór dd: zo hoort een dl, en schermlezers koppelen term en
                waarde op die volgorde. Het getal staat visueel boven het
                label via order-*. */}
            <Reveal delay={0.2}>
              <dl className="grid grid-cols-3 gap-px overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-[var(--color-line)]">
                {[
                  { k: `${cases.length}`, v: "klanten in beeld" },
                  { k: `${metCasepagina}`, v: "volledige cases" },
                  { k: `${sectoren}`, v: "sectoren" },
                ].map((s) => (
                  <div key={s.v} className="flex flex-col bg-s1 px-4 py-6 text-center">
                    <dt className="order-2 mt-1.5 text-[0.78rem] leading-tight text-g500">{s.v}</dt>
                    <dd className="order-1 font-display text-3xl font-extrabold text-paper">{s.k}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 2 · DE CASES ═══════════
          Hergebruikt het vaste kaartpatroon uit BL-08, zonder eigen kop:
          de hero hierboven draagt de H1 en de intro al. */}
      <Cases showHeader={false} showAllLink={false} />

      {/* ═══════════ 3 · DE RODE DRAAD ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Wat elk traject gemeen heeft</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Andere bedrijven," }, { text: "dezelfde volgorde.", className: "text-g600" }]}
            />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {rodeDraad.map((r, i) => (
              <Reveal key={r.n} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.3)] md:p-7">
                  <span className="font-display text-xs font-bold text-blue">{r.n}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
                    {r.titel}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-g600">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ 4 · REVIEWS · 5 · FAQ · 6 · SLOT ═══════════ */}
      {/* Kop bewust niet "de mensen achter deze sites": de reviewsectie
          toont alle Google-reviews, en lang niet elke review hoort bij een
          van de cases hierboven. */}
      <Reviews
        tone="dark"
        heading={["Wat klanten", "over het werk zeggen."]}
        startAt={0}
      />
      <FaqBlock faqs={faqs} tone="light" heading="Vragen over het werk." />
      <FinalCta />
    </main>
  );
}
