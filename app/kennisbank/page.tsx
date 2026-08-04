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
import { FinalCta } from "@/components/sections/FinalCta";
import { collectionSchema, faqSchema } from "@/lib/schema";

const PATH = "/kennisbank";

export const metadata = buildPageMetadata({
  title: "Kennisbank - gidsen over websites en lokale SEO",
  description:
    "Praktische gidsen over wat een website kost en hoe lokale SEO werkt. Eerlijke uitleg zonder salespraat, zodat je zelf kunt beoordelen wat je bedrijf nodig heeft.",
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Kennisbank", path: PATH },
];

const heroChips = ["Zelf geschreven", "Geen verzonnen cijfers", "Gratis te lezen"];

/* De gidsen die er echt staan. `bijgewerkt` hoort gelijk te lopen met de
   datumconstante bovenaan de betreffende pagina - loopt die daar op, dan
   loopt hij hier mee op. */
const gidsen = [
  {
    tag: "Kosten",
    title: "Wat kost een website laten maken?",
    href: "/kennisbank/wat-kost-een-website-laten-maken",
    bijgewerkt: "13 juli 2026",
    bijgewerktIso: "2026-07-13",
    lead:
      "In Nederland betaal je meestal tussen de 1.500 en 8.000 euro. Wat je binnen die bandbreedte betaalt hangt af van een handvol keuzes - deze gids legt uit welke, en wat ze opleveren.",
    punten: [
      "Richtprijzen per type website, van eenvoudig tot maatwerk",
      "De factoren die de prijs echt bepalen",
      "Waarom offertes van aanbieders zo ver uit elkaar liggen",
      "Wat onderhoud en hosting daarna kosten",
    ],
    linkLabel: "Lees waar de prijs vandaan komt",
  },
  {
    tag: "Lokale SEO",
    title: "Wat is lokale SEO?",
    href: "/kennisbank/wat-is-lokale-seo",
    bijgewerkt: "31 juli 2026",
    bijgewerktIso: "2026-07-31",
    lead:
      "Waarom je concurrent boven je staat terwijl jij het werk beter doet, en wat daar wel en niet aan te doen is. Inclusief de drie signalen waar Google zelf zegt op te letten.",
    punten: [
      "Het verschil met gewone SEO, in gewone taal",
      "Relevantie, afstand en bekendheid uitgelegd",
      "Waar je zelf invloed op hebt - en waarop niet",
      "Voor welke bedrijven het zinvol is, en voor welke niet",
    ],
    linkLabel: "Begrijp hoe lokale vindbaarheid werkt",
  },
] as const;

/* Geen gidsen, wel de plekken waar mensen vanuit de kennisbank meestal
   naartoe willen. De ankerteksten staan bewust in de lopende zin en niet
   in de kaartkop, en zijn stuk voor stuk uniek binnen de site. */
const verder = [
  {
    nr: "01",
    kop: "Zelf een indicatie berekenen",
    voor: "Liever een bedrag dan een bandbreedte? Vul in wat je nodig hebt en ",
    linkLabel: "bereken je eigen prijsindicatie",
    href: "/website-kosten-calculator",
    na: " in een paar klikken.",
  },
  {
    nr: "02",
    kop: "Zien hoe een traject verloopt",
    voor: "Van eerste gesprek tot livegang: ",
    linkLabel: "bekijk stap voor stap hoe we werken",
    href: "/werkwijze",
    na: ", inclusief wat we onderweg van jou nodig hebben.",
  },
  {
    nr: "03",
    kop: "Kijken wat we precies doen",
    voor: "Websites, branding, vindbaarheid en conversie. ",
    linkLabel: "Bekijk het volledige dienstenoverzicht",
    href: "/diensten",
    na: " en wat er onder elke dienst valt.",
  },
  {
    nr: "04",
    kop: "Het resultaat zelf beoordelen",
    voor: "Theorie is leuk, gebouwde sites zijn beter. ",
    linkLabel: "Open de websites die we opleverden",
    href: "/voorbeelden",
    na: " en klik er zelf doorheen.",
  },
] as const;

const nietVindbaar = [
  "Percentages en wegingsfactoren die Google nooit heeft gepubliceerd",
  "Beloofde posities of gegarandeerde aantallen bezoekers",
  "Klantverhalen van bedrijven die geen klant van ons zijn",
  "Teksten die door een generator zijn volgeschreven",
];

const faqs = [
  {
    q: "Waarom staan hier maar twee gidsen?",
    a: "Omdat we er pas een schrijven als we iets te zeggen hebben dat je elders niet krijgt. Een kennisbank volzetten met dertig oppervlakkige stukken is makkelijk; twee stukken schrijven waar je echt iets aan hebt kost meer tijd. Er komen er bij, maar alleen in dat tempo.",
  },
  {
    q: "Waar komen de cijfers in deze gidsen vandaan?",
    a: "Uit onze eigen offertes en projecten, en uit wat Google zelf publiceert over hoe lokale resultaten tot stand komen. Wat we niet weten schrijven we niet op: je vindt hier geen verzonnen percentages, geen wegingsfactoren die niemand kan controleren en geen beloofde posities.",
  },
  {
    q: "Heb ik hier ook iets aan als ik niet met jullie in zee ga?",
    a: "Ja. Deze gidsen zijn geschreven om je een betere opdrachtgever te maken, niet om je richting een offerte te duwen. Wie ze leest en vervolgens met een ander bureau verdergaat, stelt daar in elk geval de juiste vragen.",
  },
  {
    q: "Kan ik een onderwerp aandragen?",
    a: "Graag. Loop je ergens tegenaan waar je online geen fatsoenlijk antwoord op vindt, laat het weten via de contactpagina. Vragen die vaker terugkomen worden vanzelf een gids.",
    link: { label: "Stel je vraag via de contactpagina", href: "/contact" },
  },
];

export default function Page() {
  const schema = collectionSchema({
    name: "Kennisbank van Brandlift",
    description: metadata.description as string,
    path: PATH,
    crumbs,
    items: gidsen.map((g) => ({ name: g.title, path: g.href, description: g.lead })),
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
              <Eyebrow>Kennisbank</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                Praktische gidsen voor betere keuzes online
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                De meeste stukken over websites en SEO zijn geschreven om je iets te verkopen. Deze
                zijn geschreven om je iets uit te leggen - inclusief de dingen die niet in ons
                voordeel werken.
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
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ DE GIDSEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <Reveal>
                <Eyebrow>Alle gidsen</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Twee vragen die" }, { text: "iedereen ons stelt.", className: "text-g600" }]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-sm text-base leading-relaxed text-g600">
                Wat het kost, en waarom de concurrent hoger staat. Bijna elk eerste gesprek gaat over
                een van deze twee.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
            {gidsen.map((g, i) => (
              <Reveal key={g.href} delay={i * 0.08} className="h-full">
                <Link
                  href={g.href}
                  className="group flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.4)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-[0_34px_70px_-32px_rgba(1,48,253,0.35)] md:p-9"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="chamf-sm bg-blue/10 px-2.5 py-1 font-semibold text-[0.6rem] uppercase tracking-[0.1em] text-blue">
                      {g.tag}
                    </span>
                    <time
                      dateTime={g.bijgewerktIso}
                      className="text-[0.7rem] font-medium uppercase tracking-[0.08em] text-g500"
                    >
                      Bijgewerkt {g.bijgewerkt}
                    </time>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-[1.75rem]">
                    {g.title}
                  </h3>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-g600">{g.lead}</p>

                  <p className="mt-7 font-semibold text-[0.62rem] uppercase tracking-[0.12em] text-blue">
                    Wat je te weten komt
                  </p>
                  <ul className="mt-3.5 space-y-2.5 border-l-2 border-blue/20 pl-4">
                    {g.punten.map((p) => (
                      <li key={p} className="text-[0.93rem] leading-relaxed text-g600">
                        {p}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-blue">
                    {g.linkLabel}
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ HOE DEZE STUKKEN TOT STAND KOMEN ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Hoe deze stukken tot stand komen</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[
                  { text: "Liever twee gidsen die" },
                  { text: "kloppen dan dertig die vullen.", className: "text-blue-text" },
                ]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Voor veel bureaus is een kennisbank een SEO-machine: zo veel mogelijk pagina's, zo
                  snel mogelijk, met cijfers die niemand narekent. Wij schrijven ze zelf, en pas als
                  we het onderwerp in de praktijk zijn tegengekomen.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-g300">
                  Dat betekent ook dat je hier dingen leest die ons geen opdracht opleveren. Staat er
                  in een gids dat iets voor jouw type bedrijf niet zinvol is, dan is dat geen
                  bescheidenheid maar gewoon het antwoord.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-7 md:p-9">
                <p className="font-semibold text-[0.62rem] uppercase tracking-[0.12em] text-blue-text">
                  Wat je hier niet vindt
                </p>
                <ul className="mt-5 space-y-4">
                  {nietVindbaar.map((n) => (
                    <li key={n} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-white/[0.06] text-g500"
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                        >
                          <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                      </span>
                      <span className="text-[0.95rem] leading-relaxed text-g300">{n}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-white/10 pt-5 text-[0.9rem] leading-relaxed text-g500">
                  Wel: richtprijzen uit onze eigen offertes, en uitleg die ook bruikbaar blijft als
                  je uiteindelijk met iemand anders in zee gaat.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ VERDER OP DEZE SITE ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Verder op deze site</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[
                { text: "Uitgelezen?" },
                { text: "Dit is de logische volgende stap.", className: "text-g600" },
              ]}
            />
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {verder.map((v, i) => (
              <Reveal key={v.nr} delay={(i % 2) * 0.06} className="h-full">
                <div className="flex h-full items-start gap-4 chamf chamf-lg border border-ink/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-7">
                  <span className="mt-0.5 font-display text-xs font-bold text-blue">{v.nr}</span>
                  <span>
                    <span className="block font-display text-base font-extrabold tracking-tight text-ink">
                      {v.kop}
                    </span>
                    <span className="mt-1.5 block text-[0.93rem] leading-relaxed text-g600">
                      {v.voor}
                      <Link href={v.href} className="font-semibold text-blue hover:underline">
                        {v.linkLabel}
                      </Link>
                      {v.na}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 flex justify-center">
              <Button href="/contact" variant="primary">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ FAQ · SLOT ═══════════ */}
      <FaqBlock faqs={faqs} tone="dark" heading="Over deze kennisbank." />

      <FinalCta />
    </main>
  );
}
