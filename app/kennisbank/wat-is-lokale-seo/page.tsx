import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, FaqBlock } from "@/components/page/blocks";
import { DrieSignalen } from "@/components/sections/DrieSignalen";
import { articleSchema } from "@/lib/schema";

const PATH = "/kennisbank/wat-is-lokale-seo";
const GEPUBLICEERD = "2026-07-31";

export const metadata = buildPageMetadata({
  title: "Wat is lokale SEO?",
  description:
    "Lokale SEO in gewone taal: wat het is, hoe het verschilt van gewone SEO, waar Google naar kijkt en wat je er zelf aan kunt doen. Zonder verkooppraat.",
  path: PATH,
  type: "article",
  publishedTime: GEPUBLICEERD,
  modifiedTime: GEPUBLICEERD,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Kennisbank", path: "/kennisbank" },
  { name: "Wat is lokale SEO?", path: PATH },
];

/* ── lokale SEO vs gewone SEO ── */
const verschil = [
  {
    k: "Waar je op concurreert",
    seo: "Met iedereen die over het onderwerp schrijft, waar ook ter wereld.",
    lokaal: "Met de handvol bedrijven die hetzelfde doen in dezelfde omgeving.",
  },
  {
    k: "Wat de zoeker wil",
    seo: "Meestal informatie: iets weten, vergelijken of leren.",
    lokaal: "Meestal actie: iemand bellen, langsgaan of een offerte vragen.",
  },
  {
    k: "Waar je verschijnt",
    seo: "In de gewone blauwe zoekresultaten.",
    lokaal: "In het kaartje bovenaan én in de gewone resultaten daaronder.",
  },
  {
    k: "Wat het zwaarst weegt",
    seo: "Inhoud en autoriteit van de pagina.",
    lokaal: "Je Google Bedrijfsprofiel, je locatie en je reviews.",
  },
];

/* ── voor wie wel en niet ── */
const geschikt = [
  "Je klanten zitten in een afgebakend gebied - een stad, een regio, een rijafstand.",
  "Je hebt een adres of een servicegebied dat je kunt benoemen.",
  "Mensen zoeken naar wat jij doet op het moment dat ze het nodig hebben.",
  "Je wilt gebeld worden of een offerteaanvraag krijgen, geen webshopbestelling.",
];

const nietGeschikt = [
  "Je verkoopt online aan heel Nederland en je locatie doet er niet toe.",
  "Je klanten kiezen op merk of aanbeveling en zoeken je niet via Google.",
  "Je werkt uitsluitend via aanbestedingen of vaste opdrachtgevers.",
];

/* ── misvattingen ── */
const misvattingen = [
  {
    mythe: "Meer zoekwoorden in je tekst helpt",
    werkelijkheid:
      "Je stadsnaam vijftien keer herhalen maakt de tekst onleesbaar en levert niets op. Wat wel helpt is één pagina die daadwerkelijk over die dienst in dat gebied gaat.",
  },
  {
    mythe: "Een pagina per plaats waar je zóu kunnen komen",
    werkelijkheid:
      "Pagina's voor gebieden waar je nooit werkt trekken bezoekers die je moet afwijzen. Bovendien herkent Google dunne, bijna identieke pagina's inmiddels prima.",
  },
  {
    mythe: "Lokale SEO is één keer instellen",
    werkelijkheid:
      "Je concurrenten verzamelen ondertussen reviews en Google verandert voortdurend. Het is eerder onderhoud dan een installatie.",
  },
  {
    mythe: "Een mooie website is genoeg",
    werkelijkheid:
      "Een website die niemand vindt levert niets op, en een goed vindbare website waar niemand op durft te bellen ook niet. Het zijn twee verschillende problemen.",
  },
];

const faqs = [
  {
    q: "Wat is lokale SEO in het kort?",
    a: "Lokale SEO is het geheel aan werk dat ervoor zorgt dat je bedrijf verschijnt wanneer iemand in jouw omgeving zoekt naar wat jij levert. Het draait om drie dingen: een Google Bedrijfsprofiel dat klopt, een website die per dienst en per gebied duidelijk maakt wat je doet, en vermeldingen en reviews die dat bevestigen.",
  },
  {
    q: "Wat is het verschil tussen lokale SEO en gewone SEO?",
    a: "Gewone SEO gaat over gevonden worden op een onderwerp, ongeacht waar de zoeker zit. Bij lokale SEO speelt afstand mee en concurreer je alleen met bedrijven in je eigen omgeving. Daardoor zijn de aantallen kleiner, maar is de kans dat een bezoeker daadwerkelijk klant wordt een stuk groter.",
  },
  {
    q: "Heb ik een website nodig voor lokale SEO?",
    a: "Voor het kaartje bovenaan is een Google Bedrijfsprofiel het belangrijkst, en dat kan technisch zonder website. Maar zonder site mis je de gewone zoekresultaten eronder, kun je je diensten nergens uitleggen en heeft Google veel minder om je relevantie mee te bepalen. In de praktijk versterken ze elkaar.",
  },
  {
    q: "Hoe lang duurt het voordat lokale SEO werkt?",
    a: "Aanpassingen aan je Google Bedrijfsprofiel kunnen relatief snel zichtbaar worden. Nieuwe pagina's moeten eerst opgepikt en beoordeeld worden en hebben meer tijd nodig. Een exacte termijn kan niemand geven, en wie dat wel doet verkoopt je iets wat hij niet in de hand heeft.",
  },
  {
    q: "Kan ik lokale SEO zelf doen?",
    a: "Een deel zeker. Je Bedrijfsprofiel volledig invullen, om reviews vragen en zorgen dat je gegevens overal identiek zijn kun je prima zelf. Waar het meer werk wordt is de structuur van je website: een pagina per dienst en per gebied, met de techniek eronder.",
    link: { label: "Zo pakken wij lokale SEO aan", href: "/diensten/lokale-seo" },
  },
  {
    q: "Wat kost lokale SEO?",
    a: "Dat verschilt sterk per situatie: hoeveel diensten je hebt, in hoeveel plaatsen je werkt en hoe druk je markt is. Bij ons zit een lokale basis standaard bij elke website, zonder meerprijs.",
    link: { label: "Bekijk wat een website kost", href: "/kennisbank/wat-kost-een-website-laten-maken" },
  },
];

function Check({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

function Cross({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function Page() {
  const schema = articleSchema({
    headline: "Wat is lokale SEO?",
    description: metadata.description as string,
    path: PATH,
    datePublished: GEPUBLICEERD,
    crumbs,
    faqs,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Kennisbank · Lokale SEO</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.2rem]">
                Wat is lokale SEO?
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                Uitleg zonder verkooppraat: wat lokale SEO is, waarin het verschilt van gewone SEO,
                waar Google naar kijkt en wat je er zelf aan kunt doen. Bedoeld om het te begrijpen -
                niet om je iets aan te smeren.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-7">
                <Byline updated={GEPUBLICEERD} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ HET KORTE ANTWOORD (AEO) ═══════════ */}
      <section className="on-light relative py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="chamf chamf-lg border-l-4 border-blue bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-9">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue">
                  Het korte antwoord
                </p>
                <p className="mt-4 text-xl leading-relaxed text-ink md:text-[1.35rem]">
                  Lokale SEO is alles wat ervoor zorgt dat je bedrijf verschijnt wanneer iemand in
                  jouw omgeving zoekt naar wat jij levert. Het draait om een kloppend Google
                  Bedrijfsprofiel, een website die per dienst en per gebied duidelijk is, en
                  vermeldingen en reviews die dat bevestigen.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 text-lg leading-relaxed text-g600">
                Het verschil met gewone SEO zit in één woord: nabijheid. Iemand die zoekt naar
                &quot;hovenier&quot; wil geen hovenier in Groningen als hij in Den Haag woont. Google
                weet dat, en toont daarom bij dit soort zoekopdrachten eerst een kaartje met bedrijven
                in de buurt. Daar tussen komen te staan is een ander spel dan hoog scoren op een
                landelijk onderwerp - en voor de meeste lokale bedrijven een stuk waardevoller.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ VERSCHIL MET GEWONE SEO ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Het verschil</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[
                { text: "Waarin verschilt lokale SEO" },
                { text: "van gewone SEO?", className: "text-g600" },
              ]}
            />
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 overflow-hidden chamf chamf-lg border border-ink/10">
              <div className="hidden grid-cols-[0.9fr_1fr_1fr] gap-px bg-ink/10 md:grid">
                <div className="bg-black/[0.03] px-5 py-3.5" />
                <div className="bg-black/[0.03] px-5 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-g600">
                  Gewone SEO
                </div>
                <div className="bg-blue/[0.06] px-5 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-blue">
                  Lokale SEO
                </div>
              </div>
              <div className="grid gap-px bg-ink/10">
                {verschil.map((r) => (
                  <div key={r.k} className="grid gap-px bg-ink/10 md:grid-cols-[0.9fr_1fr_1fr]">
                    <div className="bg-white px-5 py-4 text-[0.88rem] font-bold text-ink">{r.k}</div>
                    <div className="bg-white px-5 py-4 text-[0.93rem] leading-relaxed text-g600">
                      <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.08em] text-g600 md:hidden">
                        Gewone SEO
                      </span>
                      {r.seo}
                    </div>
                    <div className="bg-blue/[0.04] px-5 py-4 text-[0.93rem] leading-relaxed text-g800">
                      <span className="mb-1 block text-[0.65rem] font-bold uppercase tracking-[0.08em] text-blue md:hidden">
                        Lokale SEO
                      </span>
                      {r.lokaal}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: DE DRIE SIGNALEN ═══════════ */}
      <DrieSignalen />

      {/* ═══════════ VOOR WIE ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Voor wie</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Voor wie is lokale SEO" }, { text: "zinvol - en voor wie niet?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Lokale SEO is geen universeel antwoord. Voor het ene bedrijf is het het belangrijkste
                kanaal dat er is, voor het andere zonde van het geld.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full chamf chamf-lg border border-blue/25 bg-blue/[0.05] p-7 md:p-8">
                <p className="flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue">
                  <span className="grid h-5 w-5 place-items-center chamf-sm bg-blue text-white">
                    <Check />
                  </span>
                  Wel zinvol als
                </p>
                <ul className="mt-5 space-y-3">
                  {geschikt.map((g) => (
                    <li key={g} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-3.5 shrink-0 bg-blue" />
                      <span className="text-[0.95rem] leading-relaxed text-g800">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-8">
                <p className="flex items-center gap-2.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-g600">
                  <span className="grid h-5 w-5 place-items-center chamf-sm bg-black/[0.07] text-g600">
                    <Cross />
                  </span>
                  Minder zinvol als
                </p>
                <ul className="mt-5 space-y-3">
                  {nietGeschikt.map((n) => (
                    <li key={n} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-3.5 shrink-0 bg-g600/40" />
                      <span className="text-[0.95rem] leading-relaxed text-g600">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ MISVATTINGEN ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Hardnekkige misverstanden</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[{ text: "Wat je vaak hoort," }, { text: "en wat er echt speelt.", className: "text-blue-text" }]}
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {misvattingen.map((m, i) => (
              <Reveal key={m.mythe} delay={(i % 2) * 0.07}>
                <div className="h-full chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md md:p-7">
                  <p className="flex items-start gap-2.5 text-[0.95rem] font-semibold leading-snug text-g500 line-through decoration-blue/50">
                    <span aria-hidden className="mt-1.5 h-1 w-3.5 shrink-0 bg-g600" />
                    {m.mythe}
                  </p>
                  <p className="mt-3 pl-6 text-[0.95rem] leading-relaxed text-g300">
                    {m.werkelijkheid}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <FaqBlock faqs={faqs} tone="light" heading="Veelgestelde vragen over lokale SEO." />

      {/* ═══════════ ZACHTE AFSLUITING ═══════════ */}
      <section className="on-light relative border-t border-ink/5 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-ink md:text-3xl">
                Verder lezen
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-g600">
                Wil je weten hoe wij lokale vindbaarheid in de praktijk opbouwen, of wat het voor een
                bedrijf in jouw stad betekent? Die pagina&apos;s gaan daarover - deze was bedoeld om
                het onderwerp uit te leggen.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { l: "Onze aanpak van lokale SEO", h: "/diensten/lokale-seo" },
                  { l: "SEO in Den Haag", h: "/seo-den-haag" },
                  { l: "Wat kost een website?", h: "/kennisbank/wat-kost-een-website-laten-maken" },
                ].map((b) => (
                  <Link
                    key={b.h}
                    href={b.h}
                    className="group inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-g800 transition-colors hover:border-blue hover:text-blue"
                  >
                    {b.l}
                    <span className="text-blue transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10">
                <Button href="/contact" variant="primary" className="group">
                  Plan een gratis groeigesprek
                </Button>
                <p className="mt-3 text-sm text-g600">30 minuten. Geen salespitch.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
