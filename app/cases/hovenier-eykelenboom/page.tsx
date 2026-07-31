import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, CtaBlock } from "@/components/page/blocks";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { Core30Boom } from "@/components/cases/Core30Boom";
import { FormuleDrieluik } from "@/components/cases/FormuleDrieluik";
import { FotoGalerij } from "@/components/cases/FotoGalerij";
import { caseEykelenboom } from "@/lib/site";
import { caseSchema } from "@/lib/schema";

const c = caseEykelenboom;
const PATH = `/cases/${c.slug}`;
const IMG = "/images/cases/eykelenboom";

export const metadata = buildPageMetadata({
  title: c.metaTitle,
  description:
    "Hoe Hovenier Eykelenboom uit Den Haag van 2 naar 24 aanvragen per maand ging: rebrand, Google Bedrijfsprofiel, Core 30-structuur, website en fotografie - het complete traject, stap voor stap.",
  path: PATH,
  type: "article",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Cases", path: "/cases" },
  { name: c.client, path: PATH },
];

/* ── geverifieerde projectfeiten - de enige bron voor deze pagina ── */
const kort = [
  { k: "Klant", v: "Hovenier Eykelenboom" },
  { k: "Eigenaar", v: "Sebastiaan Eykelenboom" },
  { k: "Actief sinds", v: "2016" },
  { k: "Werkgebied", v: "Den Haag en 12+ plaatsen eromheen" },
  { k: "Sector", v: "Hoveniers / groenvoorziening" },
  { k: "Resultaat", v: "Van 2 naar 24 aanvragen per maand" },
];

const opleveringen = [
  "Complete rebrand",
  "Website van 34 pagina's",
  "Google Bedrijfsprofiel",
  "Lokale SEO-structuur",
  "Alle teksten geschreven",
  "Fotografie op locatie",
];

const onderzoek = [
  { n: "188", label: "zoekwoorden onderzocht" },
  { n: "42", label: "clusters gevormd" },
  { n: "4", label: "hoofdthema's" },
  { n: "10.700", label: "zoekopdrachten p/m samen" },
];

const mockups = [
  { src: `${IMG}/mockup-visitekaartje.jpg`, alt: "Visitekaartje van Hovenier Eykelenboom in de nieuwe huisstijl" },
  { src: `${IMG}/mockup-pet.jpg`, alt: "Groene pet met het nieuwe logo van Hovenier Eykelenboom" },
  { src: `${IMG}/mockup-tshirt.jpg`, alt: "Werkshirt van Hovenier Eykelenboom met de nieuwe huisstijl" },
  { src: `${IMG}/mockup-briefpapier.jpg`, alt: "Briefpapier van Hovenier Eykelenboom in de nieuwe huisstijl" },
];

const devPunten = [
  { k: "Rond 2.000 woorden per dienstpagina", v: "geen dunne doorklikpagina's maar volwaardige antwoorden - tuinaanleg alleen al telt 17 koppen" },
  { k: "Gestructureerde data op elke pagina", v: "zodat Google en AI-assistenten de diensten en het werkgebied kunnen lezen" },
  { k: "Snel en mobiel-eerst gebouwd", v: "de meeste tuinklanten zoeken op hun telefoon, vaak vanuit de tuin zelf" },
  { k: "Eigen CMS", v: "zodat projecten en blogberichten zelf bij te houden zijn" },
];

const slotfase = [
  {
    nr: "01",
    title: "Oplevering en uitleg",
    body: "Bij de livegang is alles overgedragen: hoe de site werkt, hoe projecten erbij komen en waar de aanvragen binnenkomen. Geen afhankelijkheid, wel een aanspreekpunt.",
  },
  {
    nr: "02",
    title: "Meetbaar vanaf dag één",
    body: "Aanvragen zijn herleidbaar, dus het effect is geen gevoel maar een getal. Daardoor weten we dat de teller van 2 naar 24 per maand ging - en blijven we zien wat er werkt.",
  },
];

export default function Page() {
  const schema = caseSchema({
    headline: c.h1,
    description: metadata.description as string,
    path: PATH,
    image: `${IMG}/sebastiaan-portret.jpg`,
    datePublished: c.updated,
    crumbs,
    clientName: c.client,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ 1 · HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Case · Hoveniers · Den Haag</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3rem]">
                  {c.h1}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Sterk vakwerk dat lokaal nauwelijks werd gevonden - opnieuw opgebouwd van merk tot
                  website tot Bedrijfsprofiel. Dit is het volledige traject, stap voor stap, inclusief
                  het onderzoek en de structuur erachter.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {["Actief sinds 2016", "Den Haag en omstreken", "Compleet traject", "34 pagina's"].map((chip) => (
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
              <Reveal delay={0.26}>
                <div className="mt-7">
                  <Byline updated={c.updated} />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="relative mx-auto w-full max-w-[440px]">
                <div className="animate-glow pointer-events-none absolute -inset-5 -z-10 rounded-[32px] bg-blue/15 blur-[80px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={`${IMG}/sebastiaan-portret.jpg`}
                      alt="Sebastiaan Eykelenboom, eigenaar van Hovenier Eykelenboom in Den Haag"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 40vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-s0/70 via-transparent to-transparent" />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    Sebastiaan Eykelenboom · eigenaar
                  </span>
                  <div className="absolute bottom-4 left-4 chamf-sm bg-blue px-5 py-3 shadow-[0_16px_40px_-12px_rgba(1,48,253,0.8)]">
                    <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white/70">
                      Resultaat · {c.stat.label}
                    </span>
                    <span className="mt-0.5 flex items-baseline gap-2 font-display font-extrabold text-white">
                      <span className="text-xl">{c.stat.from}</span>
                      <span className="text-white/60">→</span>
                      <span className="text-3xl">{c.stat.to}</span>
                      <span className="text-[0.7rem] font-semibold text-white/85">{c.stat.unit}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 2 · WIE + IN HET KORT ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Wie is Hovenier Eykelenboom</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Eén hovenier." }, { text: "Eén naam om op te bouwen.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                Sebastiaan Eykelenboom werkt sinds 2016 als hovenier in Den Haag en omgeving. Geen
                wisselende ploegen en geen onderaannemers: wie Eykelenboom belt, krijgt Sebastiaan.
                Van tuinaanleg en bestrating tot boomverzorging en verandabouw - het werk was er,
                de klanten waren tevreden, en de agenda liep via mond-tot-mondreclame.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Precies daar zat de grens. Mond-tot-mond bereikt alleen wie je al kent, en online
                was het bedrijf vrijwel onzichtbaar. De vraag waarmee dit traject begon was simpel:
                hoe wordt tien jaar vakmanschap ook vindbaar voor iedereen die het nog niet kent?
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">In het kort</p>
              <div className="mt-5 space-y-3.5">
                {kort.map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between gap-4 border-b border-ink/[0.06] pb-3 last:border-0 last:pb-0">
                    <span className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-g600">{r.k}</span>
                    <span className="text-right text-[0.9rem] font-semibold leading-snug text-ink">{r.v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">Opgeleverd</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {opleveringen.map((o) => (
                  <span key={o} className="chamf-sm border border-blue/25 bg-blue/[0.06] px-2.5 py-1 text-[0.75rem] font-medium text-g800">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ 3 · HET STARTPUNT ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow>Het startpunt</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
                lines={[{ text: "Zes pagina's voor" }, { text: "een heel vak.", className: "text-blue-text" }]}
              />
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-g300">
                  De oude WordPress-site telde welgeteld zes pagina's. Eén daarvan moest alles doen:
                  tuinaanleg, onderhoud, bestrating, bomen - alles op één hoop. Google kon het bedrijf
                  daardoor aan geen enkele specifieke klus koppelen, en de bezoeker zag nergens
                  het bewijs dat hier al sinds 2016 vakwerk wordt geleverd.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-g300">
                  Wie zocht naar een hovenier in zijn eigen wijk, vond de concurrent. Niet omdat die
                  beter werk leverde, maar omdat die vindbaar was.
                </p>
              </Reveal>
            </div>

            {/* voor/na op de paginatitel - klein maar hard bewijs */}
            <Reveal delay={0.12}>
              <div className="space-y-4">
                <div className="overflow-hidden chamf chamf-lg border border-white/10 bg-s1/60">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-g600">Voor · 6 pagina's</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="truncate text-[0.85rem] font-medium text-g500">
                      Hovenier Den Haag | Tuinontwerp, Tuinaanleg &amp; Onderhoud
                    </p>
                    <p className="mt-1.5 text-xs text-g600">Eén algemene pagina, geen dienst- of wijkpagina's</p>
                  </div>
                </div>
                <div className="overflow-hidden chamf chamf-lg border border-blue/40 bg-s1 shadow-[0_0_40px_-12px_rgba(1,48,253,0.5)]">
                  <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-s2/60 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-blue" />
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-blue-text">Na · 34 pagina's</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="truncate text-[0.85rem] font-medium text-g100">
                      Tuinman Den Haag | Persoonlijke Hovenier | Eykelenboom
                    </p>
                    <p className="mt-1.5 text-xs text-g500">
                      Een pagina per dienst en per categorie, plus een geografische laag van 12+ plaatsen
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-g600">
                  Dezelfde onderneming, hetzelfde vakmanschap - een andere aanwezigheid.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 4 · DE FORMULE ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pb-20 md:pb-28">
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>De formule achter het traject</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Verkeer. Vertrouwen." }, { text: "Conversie.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Elke oplevering in dit project valt onder één van deze drie pijlers. Mist er één,
                dan lekt het resultaat weg: verkeer zonder vertrouwen levert bezoekers op die
                wegklikken, vertrouwen zonder verkeer blijft onzichtbaar, en zonder conversieroute
                belt zelfs de overtuigde bezoeker niet.
              </p>
            </Reveal>
          </div>
          <div className="mt-10">
            <FormuleDrieluik />
          </div>
        </Container>
      </section>

      {/* ═══════════ 5 · FASE 1 · ONBOARDING & ONDERZOEK ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Fase 1 · Onboarding en onderzoek</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
                lines={[{ text: "Eerst begrijpen," }, { text: "dan pas bouwen.", className: "text-g600" }]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Het traject begon niet met een ontwerp maar met een intakeformulier: welke klussen
                  doet Sebastiaan het liefst, welke wijken leveren het beste werk op, wat vragen
                  klanten aan de telefoon. Daarna volgde het onderzoek - de concurrentie in de regio
                  en alles waar Haagse tuinbezitters echt op zoeken.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                  Dat onderzoek bepaalde de hele structuur. Zo bleek op "hovenier den haag" 480 keer
                  per maand gezocht te worden en op "tuinman den haag" 140 keer - de site bedient
                  allebei: "tuinman" voert de paginatitel, "hovenier" draagt het merk en de teksten.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="mt-5 text-sm leading-relaxed text-g600">
                  Zo pakken we{" "}
                  <Link href="/diensten/lokale-seo" className="font-semibold text-blue hover:underline">
                    lokale vindbaarheid
                  </Link>{" "}
                  in elk traject aan - onderzoek eerst, structuur daarna.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10">
                {onderzoek.map((s) => (
                  <div key={s.label} className="bg-white px-5 py-6 text-center">
                    <span className="block font-display text-4xl font-extrabold text-ink">{s.n}</span>
                    <span className="mt-1.5 block text-[0.78rem] leading-tight text-g600">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 6 · FASE 2 · REBRAND ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Fase 2 · De rebrand</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Een merk dat het" }, { text: "vakwerk waard is.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Voordat er één pagina werd ontworpen, kreeg Eykelenboom een volledig nieuw merk:
                logo, kleuren en typografie - Gloock als karaktervolle kopletter, Inter Tight als
                nuchtere tekstletter. Doorgevoerd tot op de bus, het werkshirt, de pet en het
                visitekaartje, zodat het merk op de oprit hetzelfde zegt als online.
              </p>
            </Reveal>
          </div>

          {/* galerij - echte merkdragers */}
          <div className="mt-12 grid gap-4">
            <Reveal>
              <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[16/8]">
                  <Image
                    src={`${IMG}/mockup-bus.jpg`}
                    alt="Bedrijfsbus van Hovenier Eykelenboom in de nieuwe huisstijl"
                    fill
                    sizes="(max-width: 1024px) 92vw, 1084px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="absolute bottom-3 left-3 chamf-sm bg-s0/70 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-g100 backdrop-blur-sm">
                  Het merk op de weg
                </span>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mockups.map((m, i) => (
                <Reveal key={m.src} delay={(i % 4) * 0.06}>
                  <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]">
                    <div className="relative aspect-square">
                      <Image src={m.src} alt={m.alt} fill sizes="(max-width: 640px) 92vw, 25vw" className="object-cover object-center" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm leading-relaxed text-g600">
              Waarom het merk altijd eerst komt, lees je bij{" "}
              <Link href="/diensten/branding" className="font-semibold text-blue hover:underline">
                onze aanpak van branding
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ 7 · FASE 3 · GBP & CORE 30 ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Fase 3 · Bedrijfsprofiel en structuur</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "De site als spiegel van" }, { text: "het Google Bedrijfsprofiel.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Het Google Bedrijfsprofiel werd volledig ingericht - categorieën, diensten, foto's -
                en de website werd er als spiegel omheen gebouwd: voor elke categorie op het profiel
                een eigen pagina, met verdiepende dienstpagina's eronder en een geografische laag
                ernaast. Wij noemen die structuur de Core 30. Klik door de boom hieronder - dit is de
                echte sitemap van de gebouwde site.
              </p>
            </Reveal>
          </div>
          <div className="mt-10">
            <Core30Boom />
          </div>
        </Container>
      </section>

      {/* ═══════════ 8 · FASE 4 · DESIGN & DEVELOPMENT ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Fase 4 · Ontwerp en bouw</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Rustig ontwerp," }, { text: "zware inhoud.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Het ontwerp is bewust rustig gehouden: groen, verzorgd en met de projecten in de
                hoofdrol. De klant van een hovenier is vaak een huiseigenaar die zekerheid zoekt,
                geen spektakel. Onder dat rustige oppervlak zit het zware werk:
              </p>
            </Reveal>
            <div className="mt-6 space-y-3.5">
              {devPunten.map((p, i) => (
                <Reveal key={p.k} delay={0.14 + i * 0.05}>
                  <div className="flex items-start gap-3.5">
                    <span className="mt-1.5 h-1 w-4 shrink-0 bg-blue" />
                    <p className="text-[0.95rem] leading-relaxed text-g600">
                      <span className="font-bold text-ink">{p.k}</span> - {p.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.34}>
              <p className="mt-6 text-sm leading-relaxed text-g600">
                Zo bouwen we{" "}
                <Link href="/diensten/website-laten-maken" className="font-semibold text-blue hover:underline">
                  elke strategische website
                </Link>
                , en dit is{" "}
                <Link href="/voor-wie/vakbedrijven" className="font-semibold text-blue hover:underline">
                  onze aanpak voor vakbedrijven
                </Link>{" "}
                in de praktijk.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 9 · FASE 5 · FOTOGRAFIE ═══════════ */}
      <FotoGalerij />

      {/* ═══════════ 10 · FASE 6 · OPLEVERING & METEN ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Fase 6 · Oplevering en meten</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Live gaan is het begin," }, { text: "niet het einde.", className: "text-g600" }]}
            />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {slotfase.map((s, i) => (
              <Reveal key={s.nr} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-7">
                  <span className="font-display text-xs font-bold text-blue">{s.nr}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-tight tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-g600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ 10 · RESULTAAT ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <div className="animate-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue/25 blur-[120px]" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow>Het resultaat</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex items-baseline justify-center gap-4 font-display font-extrabold text-paper">
                <span className="text-5xl sm:text-6xl">{c.stat.from}</span>
                <span className="text-3xl text-blue-text">→</span>
                <span className="text-7xl sm:text-8xl">{c.stat.to}</span>
                <span className="text-xl font-semibold text-g300">{c.stat.unit}</span>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-g300">
                Van twee aanvragen per maand naar vierentwintig. Dat is niet de verdienste van één
                los onderdeel, maar van het complete traject: het merk, het Bedrijfsprofiel, de
                structuur, de teksten en de fotografie die elkaar versterken. Precies daarom
                verkopen we geen losse trucjes.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" variant="primary" className="group">
                  Plan een gratis groeigesprek
                </Button>
                <Link
                  href="/voor-wie/vakbedrijven"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Bekijk de aanpak voor vakbedrijven
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 11 · VIDEO-TESTIMONIAL (placeholder) ═══════════ */}
      {/* TODO LUCA: video-testimonial van Sebastiaan + zijn Google-review
          toevoegen zodra opgenomen. Dit blok is bewust een nette
          aankondiging, geen nep-player. */}
      <section className="on-light relative py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[220px] bg-s0">
                  <Image
                    src={`${IMG}/sebastiaan-portret.jpg`}
                    alt="Sebastiaan Eykelenboom"
                    fill
                    sizes="(max-width: 768px) 92vw, 40vw"
                    className="object-cover object-top opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-s0/30" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/60 bg-s0/50 backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">Binnenkort</p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                    Sebastiaan aan het woord
                  </h2>
                  <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-g600">
                    We nemen binnenkort een video-testimonial op waarin Sebastiaan zelf vertelt hoe
                    het traject was en wat het zijn bedrijf heeft gebracht. Die verschijnt hier -
                    in zijn woorden, niet de onze.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ 12 · MEER WERK · 13 · SLOT ═══════════ */}
      <CasesCarousel tone="light" eyebrow="Meer cases" heading={["Meer werk uit", "de praktijk."]} />

      <CtaBlock
        h2="Wil je dit ook voor jouw bedrijf?"
        body="Plan een gratis, vrijblijvend groeigesprek van 30 minuten. We kijken waar jouw groei zit - net als bij Sebastiaan."
      />
    </main>
  );
}
