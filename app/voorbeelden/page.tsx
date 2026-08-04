import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqBlock } from "@/components/page/blocks";
import { WebsiteGalerij } from "@/components/sections/WebsiteGalerij";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCta } from "@/components/sections/FinalCta";
import { collectionSchema, faqSchema } from "@/lib/schema";

const PATH = "/voorbeelden";

export const metadata = buildPageMetadata({
  title: "Voorbeelden van websites die we bouwden",
  description:
    "Bekijk echte websites die we bouwden voor een hovenier, een schildersbedrijf en een HVAC-bedrijf. Open ze zelf en klik erdoorheen - geen mockups, maar live sites.",
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Voorbeelden", path: PATH },
];

const heroChips = ["Echte, live sites", "Zelf te openen", "Sinds 2021", "5,0 op Google"];

/* ── wat je op deze sites terugziet ── */
const kenmerken = [
  {
    nr: "01",
    title: "Een pagina per dienst",
    body: "Niet één dienstenpagina die alles moet doen, maar een eigen pagina per klus. Zo koppelt Google het bedrijf aan precies datgene waar iemand op zoekt.",
  },
  {
    nr: "02",
    title: "Het werkgebied benoemd",
    body: "De plaatsen waar het bedrijf echt komt staan er met naam op. Dat scheelt bezoekers die je toch moet afwijzen, en wint de klant die om de hoek zit.",
  },
  {
    nr: "03",
    title: "Eigen beeld, geen stock",
    body: "Echte foto's van echt werk. Bij een vakbedrijf is het opgeleverde werk het beste verkoopargument dat er is.",
  },
  {
    nr: "04",
    title: "Eén duidelijke route naar contact",
    body: "Dezelfde uitnodiging keert door de hele site terug, zodat elke pagina een logische volgende stap heeft in plaats van een doodlopend eind.",
  },
];

const faqs = [
  {
    q: "Zijn dit echte klanten of voorbeeldontwerpen?",
    a: "Echte klanten. Alle drie de sites draaien op dit moment voor een bestaand bedrijf, en je kunt ze hierboven openen of rechtstreeks bezoeken. We laten geen concepten zien die nooit gebouwd zijn.",
  },
  {
    q: "Waarom staan hier maar drie websites?",
    a: "Omdat we liever drie sites tonen die echt live staan dan een galerij vol werk dat er niet is. We zijn sinds 2021 bezig en nemen bewust een beperkt aantal trajecten tegelijk aan. Er komen er bij zodra ze live gaan.",
  },
  {
    q: "Kan ik zo'n website ook voor mijn bedrijf krijgen?",
    a: "Vrijwel zeker. De aanpak is hetzelfde, alleen de invulling verschilt per markt: bij een vakbedrijf ligt de nadruk op lokale vindbaarheid en snel contact, bij een premium merk op positionering en beeld. In een gratis groeigesprek hoor je wat er in jouw geval logisch is.",
    link: { label: "Bekijk wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  },
  {
    q: "Werken jullie ook buiten Den Haag?",
    a: "Ja. We zitten in Den Haag en werken door heel Nederland - en zoals de site van Climatisation ACG laat zien ook internationaal. De samenwerking verloopt grotendeels online, met een gesprek op locatie wanneer dat zinvol is.",
  },
  {
    q: "Bouwen jullie ook meertalige websites?",
    a: "Ja. We werken zelf in het Nederlands en Engels en schakelen professionele vertalers in voor andere talen. De site van Climatisation ACG in Montréal is bijvoorbeeld in het Engels en het Frans opgezet.",
  },
];

export default function Page() {
  const schema = collectionSchema({
    name: "Voorbeelden van websites die Brandlift bouwde",
    description: metadata.description as string,
    path: PATH,
    crumbs,
    /* Externe URL's: dit zijn de echte klantsites, geen pagina's op onze
       eigen site. collectionSchema gebruikt `url` dan letterlijk. */
    items: [
      {
        name: "Hovenier Eykelenboom",
        url: "https://hoveniereykelenboom.nl",
        description: "Website met lokale SEO-structuur voor een hovenier in Den Haag.",
      },
      {
        name: "De Reizende Kwast",
        url: "https://dereizendekwast-schilders.nl",
        description: "Website voor een ambachtelijk schildersbedrijf in Leiden.",
      },
      {
        name: "Climatisation ACG",
        url: "https://climatisationacg.com",
        description: "Tweetalige website voor een HVAC-bedrijf in Montréal, Canada.",
      },
    ],
  });
  const faq = faqSchema(faqs, PATH);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-24">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Voorbeelden</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                Voorbeelden van websites die we bouwden
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                De meeste bureaus laten je plaatjes zien. Wij laten je de sites zelf openen. Hieronder
                staan drie websites die op dit moment draaien voor een hovenier, een schildersbedrijf
                en een HVAC-bedrijf - klik erdoorheen alsof je hun klant bent.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {heroChips.map((chip) => (
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
            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" className="group">
                  Plan een gratis groeigesprek
                </Button>
                <Link
                  href="/cases"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Lees de verhalen achter het werk
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ DE GALERIJ ═══════════ */}
      <WebsiteGalerij />

      {/* ═══════════ WAT JE HIER ZIET ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Wat je hier ziet</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[{ text: "Drie markten." }, { text: "Dezelfde bouwwijze.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Een hovenier in Den Haag, een schilder in Leiden en een HVAC-bedrijf in Montréal
                  lijken weinig op elkaar. Toch zijn hun sites op dezelfde manier opgebouwd: eerst de
                  vraag van de klant, dan de structuur, dan pas het ontwerp.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                  Wat je op alle drie terugziet, staat hiernaast. Niet omdat het een sjabloon is, maar
                  omdat het de dingen zijn die bepalen of een website werk oplevert.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-6 text-sm leading-relaxed text-g600">
                  Benieuwd hoe zo'n traject verloopt?{" "}
                  <Link href="/werkwijze" className="font-semibold text-blue hover:underline">
                    Bekijk onze werkwijze
                  </Link>{" "}
                  of{" "}
                  <Link href="/diensten/website-laten-maken" className="font-semibold text-blue hover:underline">
                    lees wat een website laten maken inhoudt
                  </Link>
                  .
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="space-y-3">
                {kenmerken.map((k) => (
                  <div
                    key={k.nr}
                    className="flex items-start gap-4 chamf chamf-lg border border-ink/10 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-6"
                  >
                    <span className="mt-0.5 font-display text-xs font-bold text-blue">{k.nr}</span>
                    <span>
                      <span className="block font-display text-base font-extrabold tracking-tight text-ink">
                        {k.title}
                      </span>
                      <span className="mt-1.5 block text-[0.93rem] leading-relaxed text-g600">{k.body}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ REVIEWS · FAQ · SLOT ═══════════ */}
      <Reviews tone="dark" heading={["Wat de mensen achter", "deze sites zeggen."]} startAt={1} />

      <FaqBlock faqs={faqs} tone="light" heading="Kort en eerlijk beantwoord." />

      <FinalCta />
    </main>
  );
}
