import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Byline, FaqBlock } from "@/components/page/blocks";
import { Reviews } from "@/components/sections/Reviews";
import { CasesCarousel } from "@/components/sections/CasesCarousel";
import { FinalCta } from "@/components/sections/FinalCta";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { DenHaagKaart } from "@/components/sections/DenHaagKaart";
import { caseEykelenboom, cityPages, reviews } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/seo-den-haag";
const UPDATED = "2026-07-17";
const dh = cityPages["den-haag"];

export const metadata = buildPageMetadata({
  title: "SEO Den Haag - lokale SEO die klanten oplevert",
  description:
    "SEO in Den Haag voor bedrijven die al een site hebben maar niet gevonden worden. Vindbaar per dienst en per wijk, met Bedrijfsprofiel en reviews.",
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Diensten", path: "/diensten" },
  { name: "Lokale SEO", path: "/diensten/lokale-seo" },
  { name: "SEO Den Haag", path: PATH },
];

const heroChips = ["Gevestigd in Den Haag", "Sinds 2021", "5,0 op Google", "Werkt ook zonder nieuwe site"];

/* ── waarom Den Haag je niet vindt — Haags, niet generiek ── */
const oorzaken = [
  {
    nr: "01",
    title: "Eén pagina voor een stad met acht gezichten",
    body: "De meeste Haagse sites hebben één pagina waarop 'Den Haag' staat. Iemand die zoekt vanuit Loosduinen of Ypenburg krijgt daardoor een bedrijf te zien dat overal en nergens zit - en klikt door naar de concurrent die wel in de buurt lijkt te zitten.",
    gevolg: "Je valt buiten de lokale resultaten",
  },
  {
    nr: "02",
    title: "Je diensten staan op één hoop",
    body: "Alles wat je doet, samengevat op één dienstenpagina. Google kan je dan aan geen enkele specifieke klus koppelen, terwijl dat precies is waarop mensen zoeken: niet 'hovenier', maar 'tuin laten aanleggen'.",
    gevolg: "Je mist de zoekopdracht die telt",
  },
  {
    nr: "03",
    title: "Je Google Bedrijfsprofiel staat er maar wat bij",
    body: "Ingevuld bij de oprichting en daarna nooit meer aangeraakt. Geen actuele diensten, geen servicegebied, geen foto's, geen reactie op reviews. Terwijl juist dat profiel bepaalt of je in het kaartje bovenaan verschijnt.",
    gevolg: "Je staat niet in de lokale top drie",
  },
  {
    nr: "04",
    title: "De concurrent heeft simpelweg meer reviews",
    body: "In een stad met tientallen aanbieders per vak is het aantal en de versheid van je reviews vaak het verschil. Goed werk leveren is niet genoeg als niemand het opschrijft en jij er nooit om vraagt.",
    gevolg: "Je verliest de vergelijking",
  },
];

/* ── wat we in Den Haag doen ── */
const aanpak = [
  {
    icon: "layers",
    title: "Een pagina per dienst, een pagina per gebied",
    body: "In plaats van één pagina voor heel Den Haag bouwen we structuur: elke dienst apart, en de gebieden waar je echt werkt apart. Zo koppelt Google je aan de klus én aan de buurt.",
  },
  {
    icon: "pin",
    title: "Google Bedrijfsprofiel als volwaardig kanaal",
    body: "Diensten, servicegebied, foto's, openingstijden en reacties op reviews. Voor lokale zoekopdrachten is je profiel vaak belangrijker dan je homepage - wij behandelen het ook zo.",
  },
  {
    icon: "code",
    title: "Techniek en schema die je locatie bevestigen",
    body: "Gestructureerde data, snelheid, interne links en consistente bedrijfsgegevens. Onzichtbaar voor bezoekers, doorslaggevend voor de vraag of Google gelooft waar je zit.",
  },
  {
    icon: "star",
    title: "Vermeldingen en reviews die kloppen",
    body: "Overal dezelfde naam, hetzelfde adres en hetzelfde nummer, plus een werkwijze om structureel reviews te vragen. Saai werk, maar het is precies wat de lokale top drie bepaalt.",
  },
];

const faqs = [
  {
    q: "Wat kost SEO in Den Haag?",
    a: "Een lokale SEO-basis zit standaard bij elke website die we bouwen, zonder meerprijs. Wil je doorlopend werken aan je vindbaarheid, dan kan dat met een maandelijks retainer waarvan we de omvang afstemmen op je markt en je ambitie. In het groeigesprek hoor je meteen wat in jouw geval zinvol is - en wanneer het dat niet is.",
  },
  {
    q: "Hoe lang duurt het voordat ik resultaat zie in Den Haag?",
    a: "Lokale SEO is geen knop die je omzet. Aanpassingen aan je Google Bedrijfsprofiel kunnen relatief snel zichtbaar worden, terwijl nieuwe dienst- en gebiedspagina's tijd nodig hebben om opgepikt te worden. We beloven geen termijn en geen positie - wie dat wel doet, verkoopt je iets wat hij niet in de hand heeft.",
  },
  {
    q: "Moet ik een nieuwe website hebben om met SEO te beginnen?",
    a: "Niet per se. Staat je site technisch redelijk en valt er structuur aan toe te voegen, dan werken we daarin verder. Is de basis zo verouderd dat elke euro aan SEO verloren gaat, dan zeggen we dat eerlijk en beginnen we liever bij de website.",
    link: { label: "Bekijk wat een nieuwe website in Den Haag inhoudt", href: "/website-laten-maken-den-haag" },
  },
  {
    q: "Werken jullie alleen in Den Haag?",
    a: "We zitten in Den Haag en kennen de stad het best, maar we werken door heel Nederland - onder meer in Rotterdam, Delft, Utrecht, Amsterdam en Eindhoven. De aanpak is overal hetzelfde; alleen de markt eromheen verschilt.",
  },
  {
    q: "Kunnen jullie mij een plek nummer 1 in Google garanderen?",
    a: "Nee, en niemand kan dat. Google bepaalt de volgorde en verandert die voortdurend. Wat we wel doen is alles inrichten waar je zelf invloed op hebt: structuur, techniek, je Bedrijfsprofiel, je vermeldingen en je reviews. Dat is waar lokale posities in de praktijk vandaan komen.",
  },
  {
    q: "Wat is het verschil tussen jullie en een SEO-bureau met maandrapportages?",
    a: "Een rapportage is geen resultaat. Wij sturen op wat je bedrijf ervan merkt - telefoontjes, offerteaanvragen en formulieren - en niet op een lijst met posities die goed oogt maar niets oplevert. Je hoort van ons wat we hebben gedaan en waarom, in gewone taal.",
  },
  {
    q: "Werken jullie ook voor bedrijven buiten de vakbranche?",
    a: "Ja. Vakbedrijven en servicebedrijven kennen we het best, maar lokale vindbaarheid werkt net zo goed voor praktijken, horeca, retail en dienstverleners in de stad. Wat telt is dat je klanten in de buurt zoeken.",
    link: { label: "Bekijk voor wie we werken", href: "/voor-wie" },
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
    case "layers":
      return (
        <svg {...c}>
          <path d="m12 3 9 5-9 5-9-5 9-5z" />
          <path d="m3 13 9 5 9-5" />
        </svg>
      );
    case "pin":
      return (
        <svg {...c}>
          <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    case "code":
      return (
        <svg {...c}>
          <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="m12 3.5 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.9l6-.9L12 3.5z" />
        </svg>
      );
  }
}

function Check({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export default function Page() {
  const schema = serviceSchema({
    name: "SEO Den Haag",
    description: metadata.description as string,
    path: PATH,
    areaServed: "Den Haag",
    faqs,
    crumbs,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Lokale SEO · Den Haag</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                  SEO in Den Haag die klanten oplevert
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                  Je website staat er al. Je levert goed werk. En toch bellen de Haagse klanten de
                  buurman. Wij zorgen dat je gevonden wordt op de klus die je wilt, in de wijken waar je
                  werkt - en sturen op aanvragen, niet op een rapport met groene vinkjes.
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
                    href="/cases/hovenier-eykelenboom"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                  >
                    Bekijk een Haagse case
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.34}>
                <div className="mt-6">
                  <Byline updated={UPDATED} />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="relative">
                <div className="animate-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-blue/15 blur-[80px]" />
                <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/luca-aan-het-werk.jpg"
                      alt="Luca Budgen van Brandlift werkt aan de lokale vindbaarheid van een Haags bedrijf"
                      fill
                      priority
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-deep/25 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-s0/75 via-transparent to-transparent" />
                  </div>
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 chamf-sm bg-s0/70 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    Vanuit Den Haag
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ AEO · KORT ANTWOORD ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Kort antwoord</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Wat is SEO in Den Haag," }, { text: "en wat levert het op?", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                SEO in Den Haag betekent dat je bedrijf verschijnt wanneer iemand in de stad zoekt naar
                de dienst die jij levert. Dat vraagt om drie dingen: een website met een pagina per
                dienst en per gebied, een Google Bedrijfsprofiel dat actief wordt bijgehouden, en
                vermeldingen en reviews die kloppen. Het resultaat meet je niet in posities, maar in
                telefoontjes en offerteaanvragen.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-g600">
                Wij zitten zelf in Den Haag en werken hier sinds 2021. Deze pagina gaat over vindbaarheid
                voor bedrijven die al een website hebben. Is die site verouderd of technisch zwak, dan
                gaat elke euro aan SEO verloren -{" "}
                <Link href="/website-laten-maken-den-haag" className="font-semibold text-blue hover:underline">
                  begin dan liever bij een nieuwe Haagse website
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Waar we op sturen
              </p>
              <div className="mt-5 space-y-4">
                {[
                  { k: "Wel", v: "Telefoontjes, offerteaanvragen en ingevulde formulieren" },
                  { k: "Wel", v: "Zichtbaarheid op de klus die je het liefst doet" },
                  { k: "Niet", v: "Een maandrapport met groene vinkjes" },
                  { k: "Niet", v: "Beloftes over posities die niemand kan waarmaken" },
                ].map((row, i) => (
                  <div key={row.v} className="flex items-start gap-3.5">
                    <span
                      className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm ${
                        i < 2 ? "bg-blue/10 text-blue" : "bg-black/[0.05] text-g600"
                      }`}
                    >
                      {i < 2 ? (
                        <Check size={12} />
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                          <path d="M6 6l12 12M18 6 6 18" />
                        </svg>
                      )}
                    </span>
                    <span>
                      <span className="block text-[0.7rem] font-bold uppercase tracking-[0.08em] text-g600">
                        {row.k}
                      </span>
                      <span className="mt-0.5 block text-[0.95rem] font-semibold leading-snug text-ink">
                        {row.v}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ SIGNATURE: de Haagse wijkkaart ═══════════ */}
      <DenHaagKaart />

      {/* ═══════════ WAAROM DEN HAAG JE NIET VINDT ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow>De diagnose</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
                lines={[
                  { text: "Je site staat er al." },
                  { text: "Waarom vindt Den Haag hem niet?", className: "text-g600" },
                ]}
              />
            </div>
            <Reveal delay={0.12}>
              <p className="max-w-md text-lg leading-relaxed text-g600 lg:justify-self-end">
                Bij Haagse bedrijven die bij ons aankloppen komt het bijna altijd neer op deze vier
                dingen. Zelden op één ervan alleen.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {oorzaken.map((o, i) => (
              <Reveal key={o.nr} delay={(i % 2) * 0.07}>
                <div className="group relative flex h-full flex-col overflow-hidden chamf chamf-lg border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(1,48,253,0.35)] md:p-8">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 top-2 font-display text-[5.5rem] font-extrabold leading-none text-black/[0.04]"
                  >
                    {o.nr}
                  </span>
                  <h3 className="relative font-display text-xl font-extrabold leading-tight tracking-tight text-ink">
                    {o.title}
                  </h3>
                  <p className="relative mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-g600">{o.body}</p>
                  <div className="relative mt-5 flex items-center gap-2.5 border-t border-ink/10 pt-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span className="text-xs font-semibold uppercase tracking-[0.06em] text-amber-600">
                      Gevolg
                    </span>
                    <span className="text-sm font-medium text-g800">{o.gevolg}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <p className="text-lg font-semibold italic text-g700">
                Herken je er twee of meer? Dan valt er veel te winnen.
              </p>
              <Button href="/contact" variant="primary" className="group">
                Plan een gratis groeigesprek
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ WAT WE DOEN ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/12 blur-[150px]" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Wat we doen</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
              lines={[
                { text: "Vier dingen waar je" },
                { text: "zelf invloed op hebt.", className: "text-blue-text" },
              ]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Op de volgorde van Google heb je geen knop. Op deze vier dingen wel - en in de praktijk
                is dit waar lokale posities vandaan komen.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {aanpak.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.07}>
                <div className="group flex h-full items-start gap-5 chamf chamf-lg border border-white/10 bg-s1/50 p-7 backdrop-blur-md transition-all duration-200 hover:border-blue/50 hover:bg-s1/70 md:p-8">
                  <span className="grid h-12 w-12 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue-text transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
                    <Icon name={a.icon} />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-extrabold leading-tight tracking-tight text-paper">
                      {a.title}
                    </span>
                    <span className="mt-2 block text-[0.95rem] leading-relaxed text-g500">{a.body}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm leading-relaxed text-g500">
              Dit is onze lokale SEO-aanpak, toegepast op Den Haag.{" "}
              <Link href="/diensten/lokale-seo" className="font-semibold text-blue-text hover:underline">
                Lees hoe we lokale vindbaarheid opbouwen
              </Link>{" "}
              als je de volledige methode wilt zien.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ BEWIJS — Eykelenboom ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
          {/* min-w-0: een grid-item krijgt standaard min-width:auto en
              krimpt daardoor niet onder de intrinsieke breedte van zijn
              breedste kind (hier de 2 -> 24 statpil). Op 320px duwde dat
              de kolom naar 299px in een contentbox van 272px. */}
          <div className="min-w-0">
            <Reveal>
              <Eyebrow>Bewijs uit Den Haag</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Van 2 naar 24" }, { text: "aanvragen per maand.", className: "text-g600" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                {caseEykelenboom.client} uit Den Haag leverde al jaren goed werk, maar werd lokaal
                nauwelijks gevonden. We bouwden de site opnieuw op met een pagina per dienst en per
                werkgebied, richtten de lokale basis in en lieten het vakmanschap eindelijk zien.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <div className="inline-flex max-w-full flex-wrap items-baseline gap-x-2.5 gap-y-1 chamf chamf-lg bg-blue px-5 py-4 font-display font-extrabold text-white sm:px-6 shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                  <span className="text-2xl opacity-70">{caseEykelenboom.stat.from}</span>
                  <span className="text-lg opacity-70">→</span>
                  <span className="text-4xl">{caseEykelenboom.stat.to}</span>
                  <span className="text-sm font-semibold opacity-90">{caseEykelenboom.stat.unit}</span>
                </div>
                <span className="text-sm text-g600">{caseEykelenboom.stat.label}</span>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-g600">
                Dit resultaat komt uit het complete traject - branding, website én lokale SEO samen.
                Het is niet toe te schrijven aan SEO alleen, en we doen ook niet alsof.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <Link
                href={`/cases/${caseEykelenboom.slug}`}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
              >
                Lees de volledige case
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={caseEykelenboom.image}
                  alt={caseEykelenboom.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-ink/10 px-5 py-4">
                <span>
                  <span className="block font-display text-sm font-extrabold tracking-tight text-ink">
                    {caseEykelenboom.client}
                  </span>
                  <span className="block text-xs text-g600">
                    {caseEykelenboom.sector} · {caseEykelenboom.location}
                  </span>
                </span>
                <span className="chamf-sm border border-ink/12 px-2.5 py-1 text-[0.65rem] font-semibold text-g600">
                  {caseEykelenboom.url}
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ WERKGEBIED ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Werkgebied</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Den Haag en" }, { text: "de rand eromheen.", className: "text-g300" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">
                Veel Haagse bedrijven werken niet alleen binnen de gemeentegrens. Rijswijk, Voorburg,
                Leidschendam, Wassenaar en Delft horen er in de praktijk gewoon bij - en die gebieden
                nemen we mee in je vindbaarheid als je er ook echt komt.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Rijswijk", "Voorburg", "Leidschendam", "Wassenaar", "Delft", "Zoetermeer", "Westland"].map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3 py-1.5 text-sm font-medium text-g100"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 text-sm leading-relaxed text-g500">
                Ook buiten de regio actief?{" "}
                <Link href="/diensten/lokale-seo" className="font-semibold text-blue-text hover:underline">
                  Bekijk lokale SEO voor andere steden
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-7 md:p-8">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue-text">
                Wijken waar we voor gewerkt hebben of werken
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {dh.wijken.map((w) => (
                  <span
                    key={w}
                    className="chamf-sm border border-white/10 px-2.5 py-1 text-[0.75rem] text-g300"
                  >
                    {w}
                  </span>
                ))}
              </div>
              <p className="mt-6 border-t border-[var(--color-line)] pt-5 text-sm leading-relaxed text-g500">
                Sta je hier niet tussen? Dat zegt niets - we werken in de hele stad. Deze lijst laat
                vooral zien hoe fijnmazig lokale vindbaarheid in Den Haag werkt.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ MEER WERK · REVIEWS ═══════════ */}
      <CasesCarousel tone="light" heading={["Meer werk voor bedrijven", "die gevonden wilden worden."]} />

      <Reviews tone="dark" />

      {/* ═══════════ KOSTEN ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Investering</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat kost SEO" }, { text: "in Den Haag?", className: "text-g600" }]}
            />
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                De lokale basis zit standaard bij elke website die we bouwen, zonder meerprijs. Wil je
                daarna doorlopend aan je vindbaarheid werken, dan doen we dat met een maandelijks
                bedrag dat past bij je markt en je ambitie. Bouwen we ook je website? Dan begint dat{" "}
                <span className="font-semibold text-ink">vanaf &euro;1.500</span>.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/website-kosten-calculator"
                  className="group inline-flex items-center justify-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
                >
                  Bereken je indicatie
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/website-laten-maken-den-haag"
                  className="group inline-flex items-center justify-center gap-2 chamf-sm border border-ink/15 px-6 py-3.5 text-sm font-semibold text-g800 transition-colors duration-150 hover:border-blue hover:text-blue"
                >
                  Website laten maken in Den Haag
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue">
                Eerlijk vooraf
              </p>
              <p className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-ink">
                We beloven je geen positie in Google.
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-g600">
                Dat kan niemand, en wie het wel doet verkoopt je iets wat hij niet in de hand heeft. Wat
                we wel beloven: we richten alles in waar je zelf invloed op hebt, en je hoort in gewone
                taal wat we hebben gedaan en waarom.
              </p>
              <div className="mt-6 space-y-3 border-t border-ink/10 pt-5">
                {[
                  "Lokale basis standaard inbegrepen bij een nieuwe website",
                  "Doorlopende SEO alleen als het in jouw markt zinvol is",
                  "Geen langlopend contract waar je niet uit komt",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue/10 text-blue">
                      <Check size={11} />
                    </span>
                    <span className="text-[0.93rem] leading-relaxed text-g800">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ FAQ · SLOT ═══════════ */}
      <FaqBlock faqs={faqs} tone="light" />

      <FinalCta />
    </main>
  );
}
