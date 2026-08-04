import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqBlock } from "@/components/page/blocks";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { Reviews } from "@/components/sections/Reviews";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { FinalCta } from "@/components/sections/FinalCta";
import { collectionSchema, faqSchema } from "@/lib/schema";

const PATH = "/diensten";

export const metadata = buildPageMetadata({
  title: "Diensten - website, lokale SEO en branding",
  description:
    "Website laten maken, lokale SEO, branding en conversie-optimalisatie. Los af te nemen, maar het sterkst als één groeifundament. Bekijk wat elke dienst inhoudt.",
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: PATH },
];

/* ── de vier pijlers · deze pagina routeert alleen, de diepte staat
   op de pijlerpagina's zelf (anti-kannibalisatie) ── */
const pijlers = [
  {
    nr: "01",
    icon: "layout",
    title: "Website laten maken",
    tag: "Het fundament",
    lead: "Een strategische website die vertrouwen wekt en aanvragen oplevert - geen digitale brochure.",
    punten: [
      "Strategie en paginastructuur op zoekintentie",
      "Ontwerp, teksten en techniek in één traject",
      "Vanaf €1.500, meestal live in 3 tot 4 weken",
    ],
    href: "/diensten/website-laten-maken",
  },
  {
    nr: "02",
    icon: "radar",
    title: "Lokale SEO",
    tag: "Gevonden worden",
    lead: "Beter gevonden worden in je eigen regio, op de klus die je het liefst doet.",
    punten: [
      "Een pagina per dienst en per werkgebied",
      "Google Bedrijfsprofiel, schema en vermeldingen",
      "De basis zit standaard bij elke website",
    ],
    href: "/diensten/lokale-seo",
  },
  {
    nr: "03",
    icon: "gem",
    title: "Branding",
    tag: "Vertrouwen wekken",
    lead: "Een uitstraling die past bij de kwaliteit van je werk, in plaats van hem tekort te doen.",
    punten: [
      "Positionering: waarom jij en niet de buurman",
      "Logo, kleur, typografie en beeldtaal",
      "Doorgevoerd tot op de bus en het werkshirt",
    ],
    href: "/diensten/branding",
  },
  {
    nr: "04",
    icon: "target",
    title: "Conversie-optimalisatie",
    tag: "Aanvragen binnenhalen",
    lead: "De twijfel uit je pagina's halen en de route naar contact vanzelfsprekend maken.",
    punten: [
      "Bewijs en reviews op het moment van twijfel",
      "Eén heldere route naar contact",
      "Formulieren die getest zijn, niet aangenomen",
    ],
    href: "/diensten/conversie-optimalisatie",
  },
];

const combinatie = [
  {
    k: "Verkeer zonder vertrouwen",
    v: "levert bezoekers op die wegklikken. Je wordt gevonden, maar je overtuigt niet.",
  },
  {
    k: "Vertrouwen zonder verkeer",
    v: "is een sterke site die niemand ziet. Het werk is er, de zichtbaarheid niet.",
  },
  {
    k: "Allebei, zonder conversieroute",
    v: "betekent dat zelfs de overtuigde bezoeker niet belt, omdat de volgende stap ontbreekt.",
  },
];

const faqs = [
  {
    q: "Kan ik ook maar één dienst afnemen?",
    a: "Ja. De meeste trajecten zijn een complete website inclusief lokale SEO-basis, maar losse branding of alleen doorlopende SEO kan ook. In het groeigesprek hoor je eerlijk wat in jouw geval zinvol is - en wanneer je met minder toe kunt.",
  },
  {
    q: "Wat kost het?",
    a: "Een website begint bij 1.500 euro exclusief BTW. Wat jouw traject kost hangt af van het type site, het aantal diensten en werkgebieden en of er maatwerk bij komt. Je krijgt altijd een vaste prijs voordat we beginnen, dus geen nacalculatie achteraf.",
    link: { label: "Bereken een prijsindicatie", href: "/website-kosten-calculator" },
  },
  {
    q: "Zit lokale SEO standaard bij een website?",
    a: "De basis wel: een structuur per dienst en werkgebied, schema, techniek en het inrichten van je Google Bedrijfsprofiel. Wil je daarna doorlopend aan je vindbaarheid werken, dan is dat een aparte keuze die je maakt als het in jouw markt zinvol is.",
  },
  {
    q: "Hoe lang duurt een traject?",
    a: "Meestal drie tot vier weken van het eerste gesprek tot livegang. De doorlooptijd hangt vooral af van hoe snel we beeldmateriaal en feedback van je terugkrijgen - het bouwen zelf is zelden de vertragende factor.",
    link: { label: "Bekijk de werkwijze stap voor stap", href: "/werkwijze" },
  },
  {
    q: "Werken jullie alleen in Den Haag?",
    a: "Nee. We zitten in Den Haag en werken door heel Nederland - onder meer in Rotterdam, Delft, Utrecht, Amsterdam en Eindhoven - en een deel van het werk is internationaal gericht. De samenwerking verloopt grotendeels online.",
  },
];

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const c = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "layout":
      return (
        <svg {...c}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      );
    case "radar":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 12 18.5 7" />
        </svg>
      );
    case "gem":
      return (
        <svg {...c}>
          <path d="M6 3h12l3 5-9 13L3 8l3-5z" />
          <path d="M3 8h18M9 3l3 5 3-5M12 8l0 13" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function Page() {
  const schema = collectionSchema({
    name: "Diensten van Brandlift",
    description: metadata.description as string,
    path: PATH,
    crumbs,
    items: [
      {
        name: "Website laten maken",
        path: "/diensten/website-laten-maken",
        description: "Strategische website met lokale SEO-basis, ontwerp en techniek.",
      },
      {
        name: "Lokale SEO",
        path: "/diensten/lokale-seo",
        description: "Vindbaarheid per dienst en werkgebied, Google Bedrijfsprofiel en schema.",
      },
      {
        name: "Branding",
        path: "/diensten/branding",
        description: "Merk, huisstijl en beeldtaal die passen bij de kwaliteit die je levert.",
      },
      {
        name: "Conversie-optimalisatie",
        path: "/diensten/conversie-optimalisatie",
        description: "Pagina's gericht op vertrouwen, duidelijkheid en contact.",
      },
      {
        name: "Website kosten berekenen",
        path: "/website-kosten-calculator",
        description: "Bereken in een minuut een eerlijke prijsindicatie.",
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
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Diensten</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                Alles wat je website nodig heeft om te presteren
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                Vier onderdelen: een website die klopt, vindbaarheid in je regio, een merk dat
                vertrouwen wekt en een route die bezoekers omzet in aanvragen. Los af te nemen -
                maar ze versterken elkaar, en daar zit het verschil.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {["Vanaf 1.500 euro", "Live in 3 tot 4 weken", "Geen wachtlijst", "Sinds 2021"].map((chip) => (
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
                  href="/website-kosten-calculator"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Bereken eerst een prijsindicatie
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <BenefitMarquee />

      {/* ═══════════ DE VIER PIJLERS ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Wat we doen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Vier onderdelen." }, { text: "Eén groeifundament.", className: "text-g600" }]}
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pijlers.map((p, i) => (
              <Reveal key={p.nr} delay={(i % 2) * 0.07}>
                <Link
                  href={p.href}
                  className="group relative flex h-full flex-col overflow-hidden chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)] md:p-8"
                >
                  <span
                    aria-hidden
                    className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                      <Icon name={p.icon} />
                    </span>
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">{p.tag}</span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-extrabold leading-tight tracking-tight text-ink md:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g600">{p.lead}</p>
                  <ul className="mt-5 space-y-2">
                    {p.punten.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[0.9rem] text-g800">
                        <span className="mt-2 h-1 w-3.5 shrink-0 bg-blue" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Meer over {p.title.toLowerCase()}
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ WAAROM DE COMBINATIE ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Waarom samen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Los werkt het half." }, { text: "Samen werkt het.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Je kunt elk onderdeel apart afnemen en soms is dat precies genoeg. Maar het rendement
                zit in de combinatie, omdat elk onderdeel een lek dichtzet dat de andere niet kunnen
                dichten.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3.5">
                {combinatie.map((c) => (
                  <div key={c.k} className="flex items-start gap-3.5">
                    <span className="mt-2 h-1 w-4 shrink-0 bg-blue" />
                    <p className="text-[0.95rem] leading-relaxed text-g500">
                      <span className="font-semibold text-g100">{c.k}</span> {c.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-7 text-sm leading-relaxed text-g500">
                Hoe die onderdelen in de praktijk door een traject lopen, lees je bij{" "}
                <Link href="/werkwijze" className="font-semibold text-blue-text hover:underline">
                  onze werkwijze
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg bg-blue p-8 shadow-[0_36px_80px_-32px_rgba(1,48,253,0.7)]">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-[60px]" />
              <p className="relative text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/70">
                Voor wie het bedoeld is
              </p>
              <p className="relative mt-4 font-display text-2xl font-extrabold leading-snug tracking-tight text-white md:text-[1.7rem]">
                Bedrijven die al goed werk leveren.
              </p>
              <p className="relative mt-3 text-base leading-relaxed text-white/85">
                Wij lossen geen kwaliteitsprobleem op. We zorgen dat de kwaliteit die er al is ook
                online te zien is - bij vakbedrijven, premium merken en alles daartussenin.
              </p>
              <div className="relative mt-7 flex flex-wrap gap-2.5">
                {[
                  { l: "Voor vakbedrijven", h: "/voor-wie/vakbedrijven" },
                  { l: "Voor premium merken", h: "/voor-wie/premium" },
                ].map((b) => (
                  <Link
                    key={b.h}
                    href={b.h}
                    className="group inline-flex items-center gap-2 chamf-sm bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-white/90"
                  >
                    {b.l}
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ BEWIJS · REVIEWS · FAQ · SLOT ═══════════ */}
      <CasesCarousel tone="light" eyebrow="Bewijs" heading={["Zo ziet dat eruit", "in de praktijk."]} />

      <Reviews tone="dark" heading={["Wat klanten zeggen", "over de samenwerking."]} startAt={2} />

      <FaqBlock faqs={faqs} tone="light" heading="Kort en eerlijk beantwoord." />

      <FinalCta />
    </main>
  );
}
