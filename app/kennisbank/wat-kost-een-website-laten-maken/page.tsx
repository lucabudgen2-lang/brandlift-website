import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, FaqBlock, CtaBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { articleSchema } from "@/lib/schema";

const UPDATED = "2026-07-13";
const PATH = "/kennisbank/wat-kost-een-website-laten-maken";

export const metadata: Metadata = {
  title: "Wat kost een website laten maken? Eerlijke prijzen uitgelegd - Brandlift",
  description:
    "Wat kost een website laten maken? In Nederland meestal €1.500 tot €8.000. Bekijk de prijzen per type website, wat de prijs bepaalt en bereken direct je eigen indicatie.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Kennisbank", path: "/kennisbank" },
  { name: "Wat kost een website laten maken?", path: PATH },
];

/* ── content data ── */

const priceTable = [
  { type: "Eenvoudige website", prijs: "€1.500 - €2.500", wie: "zzp'ers en starters die er professioneel op willen staan" },
  { type: "Website voor vakbedrijven", prijs: "€2.000 - €3.500", wie: "hoveniers, schilders, aannemers en installateurs die aanvragen willen" },
  { type: "Maatwerk website", prijs: "€5.000 - €8.000+", wie: "bedrijven met complexe wensen of een sterke merkambitie" },
  { type: "Webshop", prijs: "vanaf €4.000", wie: "bedrijven die online willen verkopen" },
];

const factoren = [
  {
    title: "Het type website",
    body: "Een compacte site die je bedrijf sterk neerzet vraagt minder werk dan een platform met veel dienst- en locatiepagina's of een webshop met betalingen. Het type bepaalt het startpunt van de prijs.",
  },
  {
    title: "Het aantal pagina's",
    body: "Elke pagina die moet overtuigen kost denkwerk: structuur, tekst en vindbaarheid. Tien doordachte pagina's zijn meer werk dan vijf - maar leveren ook op meer zoekopdrachten resultaat.",
  },
  {
    title: "Maatwerk of template",
    body: "Een template staat er snel maar lijkt op duizend andere sites en beperkt je in structuur en snelheid. Maatwerk kost meer, maar is gebouwd rond jouw positionering en groeit met je mee.",
  },
  {
    title: "Teksten en beeld",
    body: "Heb je al sterke teksten en foto's, dan scheelt dat in de prijs. Moet er geschreven of gefotografeerd worden, dan komt dat erbij - en juist die content bepaalt of bezoekers klant worden.",
  },
  {
    title: "Lokale SEO",
    body: "Bij ons zit de lokale SEO-basis er altijd in: gestructureerde data, lokale vermeldingen en een geoptimaliseerd Google Bedrijfsprofiel. Wil je doorlopend aan posities werken, dan kan dat met een aparte groei-retainer.",
  },
  {
    title: "Onderhoud en hosting",
    body: "Een website moet snel, veilig en actueel blijven. Hosting en onderhoud zitten daarom niet in de bouwprijs, maar lopen via een aparte, voordelige maandelijkse retainer.",
  },
];

const tiers = [
  {
    naam: "Eenvoudige website",
    prijs: "€1.500 - €2.500",
    voor: "Voor zzp'ers en starters",
    body: "Een compacte, professionele site die precies vertelt wat je doet en vertrouwen wekt.",
    punten: ["Tot circa 5 pagina's", "Strategie en positionering", "Lokale SEO-basis", "Klaar in 3 - 4 weken"],
    featured: false,
  },
  {
    naam: "Website voor vakbedrijven",
    prijs: "€2.000 - €3.500",
    voor: "Voor hoveniers, schilders, aannemers, installateurs",
    body: "Dienst- en werkgebiedpagina's die per klus en per plaats gevonden worden - gebouwd op aanvragen.",
    punten: ["Dienst- en locatiepagina's", "Lokale SEO-structuur per werkgebied", "Teksten die verkopen", "Conversie-gericht ontwerp"],
    featured: true,
  },
  {
    naam: "Maatwerk website",
    prijs: "€5.000 - €8.000+",
    voor: "Voor complexe wensen en sterke merken",
    body: "Volledig op maat ontworpen en gebouwd - van merkidentiteit tot koppelingen met je systemen.",
    punten: ["Uniek ontwerp op maat", "Koppelingen en integraties", "Meertaligheid mogelijk", "Schaalbaar fundament"],
    featured: false,
  },
  {
    naam: "Webshop",
    prijs: "vanaf €4.000",
    voor: "Voor online verkoop",
    body: "Een webshop die niet alleen producten toont, maar ook gevonden wordt en verkoopt.",
    punten: ["Betalingen inbegrepen", "Productstructuur en vindbaarheid", "Veilig en snel", "Uitbreidbaar assortiment"],
    featured: false,
  },
];

const altijdInbegrepen = [
  "Strategie en positionering - waarom klanten voor jou kiezen",
  "Lokale SEO-basis: schema, vermeldingen en Google Bedrijfsprofiel",
  "Ontwerp dat vertrouwen wekt en past bij je vak",
  "Snelle, veilige en mobielvriendelijke techniek",
  "Oplevering meestal binnen 3 - 4 weken",
  "Nederlands en Engels - andere talen via professionele vertalers",
];

const vergelijking: { label: string; zelf: string; budget: string; bureau: string }[] = [
  { label: "Prijs", zelf: "€0 - €300 per jaar", budget: "€349 - €500 eenmalig", bureau: "vanaf €1.500" },
  { label: "Jouw tijdsinvestering", zelf: "tientallen uren, elke wijziging zelf", budget: "beperkt", bureau: "beperkt - wij doen het werk" },
  { label: "Strategie en positionering", zelf: "✗", budget: "✗", bureau: "✓" },
  { label: "Uniek ontwerp", zelf: "✗ (template)", budget: "✗ (template)", bureau: "✓" },
  { label: "Lokale SEO-basis", zelf: "✗", budget: "±", bureau: "✓" },
  { label: "Teksten die verkopen", zelf: "zelf schrijven", budget: "✗", bureau: "✓" },
  { label: "Ondersteuning na livegang", zelf: "✗", budget: "±", bureau: "✓ via retainer" },
];

const faqs = [
  {
    q: "Hoeveel kost het om een website te laten maken?",
    a: "In Nederland kost een professionele website laten maken meestal tussen de 1.500 en 8.000 euro, afhankelijk van het type en de mate van maatwerk. Een eenvoudige website begint rond de 1.500 euro, een website voor vakbedrijven zit meestal tussen de 2.000 en 3.500 euro, en volledig maatwerk begint vanaf 5.000 euro.",
  },
  {
    q: "Wat kost een eenvoudige website?",
    a: "Een eenvoudige, professionele website kost bij ons tussen de 1.500 en 2.500 euro. Daar zit strategie, een lokale SEO-basis en een ontwerp dat vertrouwen wekt al in - het is dus geen kale template, maar een compacte site die klaar is om gevonden te worden.",
  },
  {
    q: "Wat kost een webshop laten maken?",
    a: "Een webshop begint bij ons vanaf 4.000 euro, inclusief betalingen, een logische productstructuur en de technische basis om gevonden te worden. De uiteindelijke prijs hangt af van het aantal producten, koppelingen en gewenste functies.",
  },
  {
    q: "Kost SEO extra bij een website?",
    a: "De lokale SEO-basis zit bij ons altijd in de bouwprijs: gestructureerde data (schema), lokale vermeldingen en een geoptimaliseerd Google Bedrijfsprofiel. Wil je daarna doorlopend aan posities en aanvragen werken, dan kan dat met een aparte SEO-groei-retainer per maand.",
    link: { label: "Meer over lokale SEO", href: "/diensten/lokale-seo" },
  },
  {
    q: "Wat kost het onderhoud van een website?",
    a: "Hosting en onderhoud lopen bij ons via een aparte, voordelige maandelijkse retainer. Daarmee blijft je site snel, veilig en actueel - zonder dat je er zelf naar hoeft om te kijken. De bouwprijs en de maandkosten houden we bewust gescheiden, zodat je precies weet waar je aan toe bent.",
  },
  {
    q: "Waarom verschillen de prijzen tussen aanbieders zo sterk?",
    a: "Omdat er verschillende dingen worden verkocht. Een aanbieder van 349 euro levert een ingevulde template zonder strategie, teksten of vindbaarheid. Een strategisch bureau bouwt een website die klanten oplevert: positionering, sterke teksten, lokale SEO en techniek die klopt. Je betaalt niet voor hetzelfde product - vergelijk dus op wat het oplevert, niet alleen op de prijs.",
  },
  {
    q: "Geldt dit ook voor een website in mijn regio?",
    a: "Ja. Deze prijzen gelden door heel Nederland - of je nu in Den Haag, Rotterdam of daarbuiten zit. Voor lokale bedrijven bouwen we de website meteen met een lokale SEO-structuur, zodat je in je eigen stad en wijken gevonden wordt.",
    link: { label: "Website laten maken Den Haag", href: "/website-laten-maken-den-haag" },
  },
];

/* Article + WebPage + FAQPage + BreadcrumbList. De Person-node komt uit de
   root layout - hier alleen naar verwijzen, niet opnieuw definiëren. */
function guideSchema() {
  return articleSchema({
    headline: "Wat kost een website laten maken? Eerlijke prijzen en keuzes uitgelegd",
    description:
      "Een website laten maken kost in Nederland meestal tussen de €1.500 en €8.000. Dit bepaalt de prijs - per type website, eerlijk uitgelegd.",
    path: PATH,
    image: "/images/hero-macbook.png",
    datePublished: UPDATED,
    crumbs,
    faqs,
  });
}

function Check({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema()) }} />

      {/* ═══════════ HERO — the price-range statement ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Kennisbank · Kosten</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.06] tracking-tight text-paper sm:text-[2.6rem] lg:text-[2.9rem]">
                  Wat kost een website laten maken? Eerlijke prijzen en keuzes uitgelegd
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                {/* direct answer — snippet/AI Overview bait, first ~40 words */}
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                  Een website laten maken kost in Nederland meestal tussen de €1.500 en €8.000,
                  afhankelijk van het type website, de omvang en de mate van maatwerk. Op deze pagina
                  lees je precies waar die prijs vandaan komt - en bereken je jouw eigen indicatie.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/website-kosten-calculator"
                    className="group inline-flex w-fit items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
                  >
                    Bereken jouw prijs in 1 minuut
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                  <Byline updated={UPDATED} />
                </div>
              </Reveal>
            </div>

            {/* the range monument */}
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-8 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)]">
                <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
                <div className="animate-glow pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue/20 blur-[70px]" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.1em] text-g600">
                  Prijsspectrum in Nederland
                </p>
                <p className="relative mt-4 font-display text-[2.6rem] font-extrabold leading-none tracking-tight text-paper sm:text-5xl">
                  €1.500 <span className="text-g600">-</span> €8.000
                </p>
                <div className="relative mt-6 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-blue/40 via-blue to-blue-text shadow-[0_0_18px_rgba(1,48,253,0.6)]" />
                </div>
                <div className="relative mt-2.5 flex justify-between text-[0.7rem] font-semibold text-g500">
                  <span>eenvoudige website</span>
                  <span>volledig maatwerk</span>
                </div>
                <p className="relative mt-5 border-t border-[var(--color-line)] pt-4 text-sm leading-relaxed text-g500">
                  Bij ons altijd inclusief strategie en een lokale SEO-basis - en we werken door totdat
                  je tevreden bent.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ KORT ANTWOORD — the price table ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                Kort antwoord: wat kost een website gemiddeld?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-lg leading-relaxed text-g600">
                De kosten voor een website laten maken hangen vooral af van wat de site voor je moet
                doen. Dit zijn de bandbreedtes die wij hanteren - indicaties, gebaseerd op onze eigen
                projecten sinds 2021.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                <table className="w-full border-collapse bg-white text-left">
                  <thead>
                    <tr className="bg-s0">
                      <th className="px-5 py-3.5 font-display text-sm font-bold text-paper">Type website</th>
                      <th className="px-5 py-3.5 font-display text-sm font-bold text-blue-text">Prijsindicatie</th>
                      <th className="hidden px-5 py-3.5 font-display text-sm font-bold text-paper sm:table-cell">Voor wie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((row) => (
                      <tr key={row.type} className="border-t border-ink/8">
                        <td className="px-5 py-4 text-sm font-semibold text-ink">{row.type}</td>
                        <td className="whitespace-nowrap px-5 py-4 font-display text-sm font-extrabold text-blue">{row.prijs}</td>
                        <td className="hidden px-5 py-4 text-sm leading-snug text-g600 sm:table-cell">{row.wie}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-sm text-g600">
                Alle bedragen zijn indicaties voor de eenmalige bouw. Hosting en onderhoud lopen apart
                via een voordelig maandbedrag.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ WAAR HANGT DE PRIJS VAN AF ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>De prijsopbouw</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Waar hangt de prijs" }, { text: "van een website van af?", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-g600">
                Zes keuzes bepalen samen wat jouw website kost. Wie ze kent, vergelijkt offertes een
                stuk makkelijker.
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {factoren.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.07}>
                <div className="group relative h-full overflow-hidden chamf border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)]">
                  <span aria-hidden className="text-stroke-dark pointer-events-none absolute right-5 top-4 font-display text-4xl font-extrabold leading-none opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    0{i + 1}
                  </span>
                  <h3 className="pr-10 text-lg font-bold leading-snug text-ink">{f.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-g600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ PRIJZEN PER TYPE — tier cards (dark) ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Prijzen per type</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Wat kost welk" }, { text: "type website?", className: "text-blue-text" }]}
            />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, i) => (
              <Reveal key={t.naam} delay={(i % 4) * 0.06}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden chamf chamf-lg border p-6 backdrop-blur-md transition-all duration-200 md:p-7 ${
                    t.featured
                      ? "border-blue/60 bg-blue/[0.12] shadow-[0_0_50px_-12px_rgba(1,48,253,0.5)]"
                      : "border-white/10 bg-s1/50 hover:border-blue/50 hover:bg-s1/70"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute right-0 top-0 chamf-sm bg-blue px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.1em] text-white">
                      Meest gekozen
                    </span>
                  )}
                  <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight text-paper">
                    {t.naam}
                  </h3>
                  <p className="mt-3 font-display text-2xl font-extrabold tracking-tight text-blue-text">{t.prijs}</p>
                  <p className="mt-1 text-xs font-semibold text-g500">{t.voor}</p>
                  <p className="mt-3.5 text-sm leading-relaxed text-g500">{t.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {t.punten.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[0.82rem] leading-snug text-g300">
                        <span className="mt-0.5 grid h-[15px] w-[15px] shrink-0 place-items-center chamf-sm bg-blue/15 text-blue-text">
                          <Check size={9} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-g500">
              Twijfel je tussen twee types? De{" "}
              <Link href="/website-kosten-calculator" className="font-semibold text-blue-text hover:underline">
                kostencalculator
              </Link>{" "}
              rekent beide in een minuut voor je uit.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ WAT JE ALTIJD KRIJGT ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Altijd inbegrepen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat je bij Brandlift altijd" }, { text: "krijgt voor die investering.", className: "text-g600" }]}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-g600">
                Een lage prijs zegt weinig als er weinig in zit. Daarom is dit bij ons geen optie maar
                standaard - bij elke website, in elke prijsklasse.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {altijdInbegrepen.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.95rem] leading-snug text-g800">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Check size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* garantie monument */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg bg-blue p-8 shadow-[0_36px_80px_-32px_rgba(1,48,253,0.7)] md:p-10">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-[60px]" />
              <span className="relative grid h-12 w-12 place-items-center chamf-sm bg-white text-blue">
                <Check size={22} />
              </span>
              <p className="relative mt-6 font-display text-2xl font-extrabold leading-snug tracking-tight text-white md:text-[1.7rem]">
                We werken door totdat je tevreden bent.
              </p>
              <p className="relative mt-3 text-base leading-relaxed text-white/85">
                Nog niet tevreden met het resultaat? Dan werken we door - zonder extra kosten - tot het
                wel klopt. Zo loop je nooit het risico te betalen voor iets waar je niet achter staat.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ EENMALIG VS DOORLOPEND ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                Eenmalige kosten versus doorlopende kosten
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-lg leading-relaxed text-g600">
                Veel offertes gooien bouw en onderhoud op een hoop. Wij houden ze bewust gescheiden,
                zodat je precies weet waar je aan toe bent.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <div className="h-full chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Eenmalig</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">De bouw van je website</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-g600">
                    Vanaf €1.500, afhankelijk van type en maatwerk. Hierin zit alles wat de site sterk
                    maakt: strategie, ontwerp, teksten waar nodig, techniek en de lokale SEO-basis.
                    Je betaalt dit één keer.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="h-full chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Doorlopend</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-ink">Hosting, onderhoud en groei</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-g600">
                    Hosting en onderhoud lopen via een aparte, voordelige maandelijkse retainer - zo
                    blijft je site snel, veilig en actueel. Wil je doorlopend aan vindbaarheid werken,
                    dan kan dat met een optionele SEO-groei-retainer.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════ ZELF / BUDGET / STRATEGISCH ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                Zelf maken, een budget-aanbieder of strategisch laten bouwen?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-g600">
                Alle drie zijn legitieme keuzes - als je maar weet wat je koopt. Dit is het eerlijke
                verschil.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 overflow-x-auto">
                <div className="min-w-[640px] overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                  <table className="w-full border-collapse bg-white text-left">
                    <thead>
                      <tr className="bg-s0">
                        <th className="px-5 py-4 font-display text-sm font-bold text-paper"> </th>
                        <th className="px-5 py-4 font-display text-sm font-bold text-g300">Zelf maken</th>
                        <th className="px-5 py-4 font-display text-sm font-bold text-g300">Budget-aanbieder</th>
                        <th className="bg-blue px-5 py-4 font-display text-sm font-bold text-white">Strategisch bureau</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vergelijking.map((row) => (
                        <tr key={row.label} className="border-t border-ink/8">
                          <td className="px-5 py-3.5 text-sm font-semibold text-ink">{row.label}</td>
                          <td className="px-5 py-3.5 text-sm text-g600">{row.zelf}</td>
                          <td className="px-5 py-3.5 text-sm text-g600">{row.budget}</td>
                          <td className="bg-blue/[0.06] px-5 py-3.5 text-sm font-semibold text-ink">{row.bureau}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-g600">
                Zelf bouwen is prima als je tijd hebt en online zichtbaarheid geen prioriteit is. Een
                budget-site is prima als je alleen een digitaal visitekaartje zoekt. Maar wil je dat je
                website klanten oplevert - gevonden worden, overtuigen, aanvragen - dan is de bouw geen
                kostenpost maar een investering die zich terugverdient. Onze case:{" "}
                <Link href="/cases/hovenier-eykelenboom" className="font-semibold text-blue hover:underline">
                  van 2 naar 24 aanvragen per maand
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ CALCULATOR CTA — the voltage moment ═══════════ */}
      <section className="on-light pb-20 md:pb-28">
        <Container>
          <Reveal>
            <div className="chamf chamf-lg relative overflow-hidden bg-blue">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[70px]" />
              <div className="relative grid gap-8 px-8 py-12 md:grid-cols-[1.3fr_auto] md:items-center md:px-14 md:py-14">
                <div>
                  <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl">
                    Bereken direct wat jóuw website kost.
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                    Stel je website samen en zie live een eerlijke indicatie - in een minuut, zonder
                    gegevens achter te laten.
                  </p>
                  {/* mini spectrum motif */}
                  <div className="mt-6 max-w-sm">
                    <div className="h-2 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-2/3 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.7)]" />
                    </div>
                    <div className="mt-1.5 flex justify-between text-[0.68rem] font-semibold text-white/70">
                      <span>€1.500</span>
                      <span>€8.000+</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/website-kosten-calculator"
                  className="group inline-flex items-center gap-2.5 self-start chamf-sm bg-paper px-7 py-4 font-semibold text-ink transition-colors duration-150 hover:bg-white md:self-center"
                >
                  Naar de calculator
                  <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ REVIEWS · FAQ · SLOT ═══════════ */}
      <Reviews tone="dark" />

      <FaqBlock faqs={faqs} tone="light" />

      <CtaBlock
        h2="Liever meteen een eerlijke prijs voor jouw situatie?"
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. Je weet daarna precies waar je staat - met of zonder samenwerking."
      />
    </main>
  );
}
