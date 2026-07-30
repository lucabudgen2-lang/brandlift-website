import type { Metadata } from "next";
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
import { reviews, voorWie } from "@/lib/site";
import { serviceSchema } from "@/lib/schema";

const PATH = "/voor-wie";
const UPDATED = "2026-07-17";

export const metadata: Metadata = {
  title: "Voor wie - vakbedrijven en premium merken",
  description:
    "Brandlift bouwt voor vakbedrijven, premium merken en alles daartussenin. Bekijk welke aanpak past bij jouw markt en hoe die per branche verschilt.",
  alternates: { canonical: PATH },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Voor wie", path: PATH },
];

const [vak, premium, overig] = voorWie.panels;

/* ── wat elke klant gemeen heeft ── */
const gemeen = [
  {
    nr: "01",
    title: "Je levert al goed werk",
    body: "Wij lossen geen kwaliteitsprobleem op. We zorgen dat de kwaliteit die er al is ook online te zien is.",
  },
  {
    nr: "02",
    title: "Je online uitstraling loopt achter",
    body: "Wat je online laat zien, doet je bedrijf tekort. Dat merk je aan het soort aanvragen dat binnenkomt.",
  },
  {
    nr: "03",
    title: "Je wil groeien, niet knutselen",
    body: "Je wil geen bouwpakket beheren. Je wil een site die klaar is en werkt, zodat jij aan het werk kunt.",
  },
];

const faqs = [
  {
    q: "Werkt Brandlift alleen voor vakbedrijven?",
    a: "Nee. Vakbedrijven en servicebedrijven kennen we het best en daar hebben we het meeste werk voor gedaan, maar we bouwen net zo goed voor premium en visuele merken en voor bedrijven daarbuiten. De rode draad is niet de branche, maar het type ondernemer: je levert goed werk en je uitstraling loopt daarop achter.",
  },
  {
    q: "Mijn branche staat er niet bij. Kunnen jullie dan wel iets voor mij doen?",
    a: "Vrijwel altijd. De methode is hetzelfde - merk, website, vindbaarheid en conversie - alleen de nadruk verschilt per markt. In een gratis groeigesprek kijken we naar jouw situatie en zeggen we eerlijk of we de juiste partij zijn.",
  },
  {
    q: "Verschilt de aanpak per type bedrijf?",
    a: "Ja, en flink. Bij een vakbedrijf ligt de nadruk op lokale vindbaarheid en snel contact: mensen zoeken en bellen dezelfde dag. Bij een premium merk gaat het om positionering, beeld en rust, met een koper die weken vergelijkt voordat hij contact opneemt. Dezelfde methode, een andere invulling.",
  },
  {
    q: "Werken jullie ook buiten Den Haag?",
    a: "Ja. We zitten in Den Haag en werken door heel Nederland - onder meer in Rotterdam, Delft, Utrecht, Amsterdam en Eindhoven. Een deel van het werk is bovendien internationaal gericht. De samenwerking verloopt grotendeels online, met een gesprek op locatie wanneer dat zinvol is.",
  },
  {
    q: "Zijn jullie te klein voor mijn bedrijf, of juist te groot?",
    a: "We zijn een klein team sinds 2021, wat betekent dat je met de mensen praat die het werk ook echt doen. We nemen bewust een beperkt aantal trajecten tegelijk aan, zodat er tijd is voor het detail. Is jouw project te groot of te ver buiten ons vak, dan zeggen we dat liever meteen dan halverwege.",
  },
];

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
    name: "Websites en lokale SEO voor Nederlandse bedrijven",
    description: metadata.description as string,
    path: PATH,
    faqs,
    crumbs,
    withReviews: reviews,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Voor wie</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                Voor wie werkt Brandlift?
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g200">
                Voor ondernemers die al goed werk leveren en online willen groeien. Van hoveniers en
                installateurs tot jachtbouwers en klinieken - de methode blijft hetzelfde, de invulling
                niet. Kies hieronder wat het dichtst bij jou ligt.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" className="group">
                  Plan een gratis groeigesprek
                </Button>
                <Link
                  href="/werkwijze"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
                >
                  Bekijk onze werkwijze
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-6">
                <Byline updated={UPDATED} />
              </div>
            </Reveal>
          </div>

          {/* snelnavigatie */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { ...vak, href: "/voor-wie/vakbedrijven", cta: "Bekijk de aanpak" },
              { ...premium, href: "/voor-wie/premium", cta: "Bekijk de aanpak" },
              { ...overig, href: "#overig", cta: "Lees meer" },
            ].map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <Link
                  href={p.href}
                  className="group relative flex h-full flex-col overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 backdrop-blur-md transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-blue/50"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.photoAlt}
                      fill
                      sizes="(max-width: 640px) 92vw, 31vw"
                      className="object-cover object-center transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-s1 via-s1/40 to-transparent" />
                    <span className="absolute left-3 top-3 chamf-sm bg-s0/70 px-2.5 py-1 font-display text-[0.6rem] font-bold tracking-[0.1em] text-blue-text backdrop-blur-sm">
                      {p.index}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-lg font-extrabold leading-tight tracking-tight text-paper">
                      {p.label}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-g500">
                      {p.items.slice(0, 4).join(" · ")}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text">
                      {p.cta}
                      <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <BenefitMarquee />

      {/* ═══════════ WAT ONZE KLANTEN GEMEEN HEBBEN (AEO) ═══════════ */}
      <section className="on-light relative py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>De rode draad</Eyebrow>
              </Reveal>
              <LineReveal
                as="h2"
                className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
                lines={[
                  { text: "Niet de branche bepaalt" },
                  { text: "of het klikt.", className: "text-g600" },
                ]}
              />
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
                  Brandlift werkt voor Nederlandse bedrijven die op kwaliteit concurreren en niet op
                  prijs. In de praktijk zijn dat vakbedrijven en servicebedrijven, premium en visuele
                  merken, en een lange staart aan bedrijven die in geen hokje past. Wat ze delen is niet
                  hun sector - het zijn deze drie dingen.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="space-y-3">
                {gemeen.map((g) => (
                  <div
                    key={g.nr}
                    className="flex items-start gap-4 chamf chamf-lg border border-ink/10 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-6"
                  >
                    <span className="mt-0.5 font-display text-xs font-bold text-blue">{g.nr}</span>
                    <span>
                      <span className="block font-display text-base font-extrabold tracking-tight text-ink">
                        {g.title}
                      </span>
                      <span className="mt-1.5 block text-[0.93rem] leading-relaxed text-g600">{g.body}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 01 · VAKBEDRIJVEN ═══════════ */}
      <section id="vakbedrijven" className="on-light relative scroll-mt-28 border-t border-ink/5 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={vak.photo}
                  alt={vak.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-center"
                />
              </div>
              <span className="absolute left-4 top-4 chamf-sm bg-white/90 px-3 py-1.5 font-display text-xs font-bold tracking-[0.1em] text-blue backdrop-blur-sm">
                {vak.index}
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Vakbedrijven en servicebedrijven</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Gevonden worden" }, { text: "in je eigen regio.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Jouw klant zoekt met een probleem en een postcode, en belt vaak dezelfde dag nog. Hier
                draait alles om lokale vindbaarheid, snel vertrouwen wekken en het contact zo makkelijk
                mogelijk maken. Een pagina per dienst en per werkgebied, reviews in beeld, en een
                telefoonnummer dat niet weg te klikken is.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6 flex flex-wrap gap-2">
                {vak.items.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3 py-1.5 text-sm font-medium text-g800"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                href="/voor-wie/vakbedrijven"
                className="group mt-8 inline-flex items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
              >
                {vak.linkLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 02 · PREMIUM ═══════════ */}
      <section id="premium" className="relative scroll-mt-28 overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div className="animate-glow pointer-events-none absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="lg:order-2">
            <Reveal>
              <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_100px_-45px_rgba(0,0,0,0.8)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={premium.photo}
                    alt={premium.photoAlt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-blue-deep/25 mix-blend-multiply" />
                </div>
                <span className="absolute left-4 top-4 chamf-sm bg-s0/70 px-3 py-1.5 font-display text-xs font-bold tracking-[0.1em] text-blue-text backdrop-blur-sm">
                  {premium.index}
                </span>
              </div>
            </Reveal>
          </div>
          <div className="lg:order-1">
            <Reveal>
              <Eyebrow>Premium en visuele bedrijven</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Eerst gezien worden." }, { text: "Dan pas gesproken.", className: "text-blue-text" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                Hier is de aankoop groot en het besluit traag. Men vergelijkt, komt terug, kijkt nog
                eens - en beslist op indruk voordat er iemand belt. Lokale vindbaarheid is niet het
                startpunt: positionering, beeld en rust zijn dat wel. En de koper komt net zo vaak uit
                het buitenland, dus meertaligheid is geen extraatje.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6 flex flex-wrap gap-2">
                {premium.items.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3 py-1.5 text-sm font-medium text-g100"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                href="/voor-wie/premium"
                className="group mt-8 inline-flex items-center gap-2.5 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_-16px_rgba(1,48,253,0.85)] transition-colors duration-150 hover:bg-blue-press"
              >
                Bekijk de aanpak voor premium merken
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ 03 · OVERIGE BEDRIJVEN ═══════════ */}
      <section id="overig" className="on-light relative scroll-mt-28 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden chamf chamf-lg border border-ink/10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={overig.photo}
                  alt={overig.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-center"
                />
              </div>
              <span className="absolute left-4 top-4 chamf-sm bg-white/90 px-3 py-1.5 font-display text-xs font-bold tracking-[0.1em] text-blue backdrop-blur-sm">
                {overig.index}
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Overige bedrijven</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]"
              lines={[{ text: "Val je er net buiten?" }, { text: "Ook goed.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                {overig.desc} De methode blijft dezelfde: we kijken eerst naar je merk en je markt, en
                bepalen daarna waar het zwaartepunt ligt. Bij een webshop is dat de productbeleving en
                het afrekenen, bij een praktijk het vertrouwen en de agenda, bij een B2B-dienstverlener
                de uitleg van iets ingewikkelds.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6 flex flex-wrap gap-2">
                {overig.items.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3 py-1.5 text-sm font-medium text-g800"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {v}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex items-start gap-3.5 chamf chamf-lg border border-blue/25 bg-blue/[0.05] p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue text-white">
                  <Check size={12} />
                </span>
                <p className="text-[0.95rem] leading-relaxed text-g800">
                  <span className="font-bold text-ink">{overig.note}</span> We zeggen eerlijk of we de
                  juiste partij zijn - ook als het antwoord nee is.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="/contact" variant="primary" className="group mt-6">
                Plan een gratis groeigesprek
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ DIENSTEN-BRUG ═══════════ */}
      <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Dezelfde methode</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Vier onderdelen." }, { text: "Elke keer een ander accent.", className: "text-g300" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g300">
                {voorWie.bridgeLead}
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Branding", desc: "De uitstraling waarop je beoordeeld wordt", href: "/diensten/branding" },
              {
                label: "Website laten maken",
                desc: "Het ontwerp en de techniek eronder",
                href: "/diensten/website-laten-maken",
              },
              { label: "Lokale SEO", desc: "Gevonden worden waar je klant zoekt", href: "/diensten/lokale-seo" },
              {
                label: "Conversie-optimalisatie",
                desc: "Van bezoeker naar aanvraag",
                href: "/diensten/conversie-optimalisatie",
              },
            ].map((s, i) => (
              <Reveal key={s.href} delay={(i % 4) * 0.06}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden chamf chamf-lg border border-white/10 bg-s1/50 p-6 backdrop-blur-md transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 hover:border-blue/50 hover:bg-s1/70"
                >
                  <span
                    aria-hidden
                    className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100"
                  />
                  <span className="font-display text-base font-extrabold leading-tight tracking-tight text-paper">
                    {s.label}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-g500">{s.desc}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text">
                    Lees meer
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════ BEWIJS ═══════════ */}
      <CasesCarousel tone="light" heading={["Werk voor bedrijven", "in heel verschillende markten."]} />

      <Reviews tone="dark" />

      {/* ═══════════ FAQ · SLOT ═══════════ */}
      <FaqBlock faqs={faqs} tone="light" />

      <FinalCta />
    </main>
  );
}
