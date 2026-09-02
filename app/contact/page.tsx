import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { FaqBlock } from "@/components/page/blocks";
import { GroeigesprekForm } from "@/components/forms/GroeigesprekForm";
import { site } from "@/lib/site";
import { contactSchema, faqSchema } from "@/lib/schema";

const PATH = "/contact";

export const metadata = buildPageMetadata({
  title: "Contact - plan een gratis groeigesprek",
  description:
    "Plan een gratis groeigesprek van 30 minuten. Geen salespitch - we kijken waar je staat en waar aanvragen blijven liggen. Bellen kan ook: 06 80 22 71 95.",
  path: PATH,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: PATH },
];

/* ── wat er na je aanvraag gebeurt ── */
const stappen = [
  {
    nr: "01",
    title: "Je krijgt een bevestiging",
    body: "Direct na het versturen weet je dat je aanvraag binnen is. Geen zwart gat, geen twijfel of het gelukt is.",
  },
  {
    nr: "02",
    title: "We reageren binnen 1 werkdag",
    body: "Meestal sneller. We stellen een moment voor dat jou uitkomt - ook 's avonds, als dat beter past naast je werk.",
  },
  {
    nr: "03",
    title: "We kijken vooraf naar je situatie",
    body: "Voor het gesprek bekijken we je huidige site, je Google Bedrijfsprofiel en wie er in jouw regio boven je staat. Zo praten we niet over algemeenheden.",
  },
  {
    nr: "04",
    title: "Je hoort waar je staat",
    body: "In een half uur hoor je wat er goed gaat, waar aanvragen blijven liggen en wat wij zouden doen. Ook als dat betekent dat je ons niet nodig hebt.",
  },
];

const faqs = [
  {
    q: "Kost het groeigesprek echt niets?",
    a: "Ja, echt niets. Het is een gesprek van een half uur waarin we kijken waar je staat en wat er beter kan. Je zit nergens aan vast en er volgt geen factuur. Blijkt dat we niet de juiste partij voor je zijn, dan zeggen we dat gewoon.",
  },
  {
    q: "Hoe snel krijg ik antwoord?",
    a: "Binnen één werkdag, meestal sneller. Bel je liever meteen, dan zijn we van maandag tot en met zaterdag bereikbaar tussen 08:00 en 20:00 op 06 80 22 71 95.",
  },
  {
    q: "Wat moet ik voorbereiden?",
    a: "Niets. Het helpt als je kunt vertellen welke klussen je het liefst doet en waar je klanten vandaan komen, maar dat weet je zo ook wel. Wij kijken vooraf al naar je site en je vindbaarheid, zodat we meteen concreet kunnen worden.",
  },
  {
    q: "Is het een verkooppraatje?",
    a: "Nee. We beginnen met kijken en luisteren, niet met een aanbod. Aan het eind weet je waar je staat, of je nu met ons in zee gaat of niet. Wil je erover nadenken, dan hoor je niets meer van ons tenzij je zelf laat weten dat je verder wilt.",
  },
  {
    q: "Werken jullie ook buiten Den Haag?",
    a: "Ja. We zitten in Den Haag en kennen die markt het best, maar we werken door heel Nederland - onder meer in Rotterdam, Delft, Utrecht, Amsterdam en Eindhoven. De samenwerking verloopt grotendeels online, met een gesprek op locatie als dat zinvol is.",
  },
];

function Check({ size = 13 }: { size?: number }) {
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

/* Kaart-embed op de coördinaten uit site.geo, zodat kaart, schema en het
   Google Bedrijfsprofiel naar exact hetzelfde punt wijzen. */
const MAP_SRC = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&hl=nl&z=15&output=embed`;

export default function Page() {
  const schema = contactSchema({
    name: "Contact",
    description: metadata.description as string,
    path: PATH,
    crumbs,
  });
  /* FAQPage mag hier wél: dit zijn echte vragen met echte antwoorden die
     zichtbaar op deze pagina staan. */
  const faq = faqSchema(faqs, PATH);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* ═══════════ HERO + FORMULIER ═══════════ */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[520px] w-[520px] rounded-full bg-blue/20 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>Gratis groeigesprek</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.04] tracking-tight text-paper sm:text-5xl lg:text-[3.3rem]">
                Plan een gratis groeigesprek
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-g300">
                30 minuten. Geen salespitch. We kijken waar je nu staat, waar aanvragen blijven liggen
                en welke aanpak logisch is. Daarna beslis jij - ook als dat betekent dat je ons niet
                nodig hebt.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {["Reactie binnen 1 werkdag", "Geen wachtlijst", "5,0 op Google", "Sinds 2021"].map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-3.5 py-2 text-sm font-medium text-g100 backdrop-blur-sm"
                  >
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* formulier links, gegevens rechts - op mobiel formulier eerst */}
          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
            <Reveal>
              <div>
                <h2 className="mb-2 font-display text-2xl font-extrabold tracking-tight text-paper">
                  Stuur je aanvraag
                </h2>
                <p className="mb-6 max-w-lg text-[0.95rem] leading-relaxed text-g500">
                  Vul in wat je kwijt wilt. Hoe meer we vooraf weten, hoe concreter het gesprek.
                </p>
                <GroeigesprekForm />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                {/* ── NAP ── */}
                <div className="chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 p-6 md:p-7">
                  <h2 className="font-display text-xl font-extrabold tracking-tight text-paper">
                    Direct contact
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-g500">
                    Liever meteen bellen dan een formulier invullen? Dat kan ook.
                  </p>

                  <address className="mt-6 space-y-5 not-italic">
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">Telefoon</p>
                      <PhoneLink className="mt-1.5 inline-flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-blue-text hover:underline" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">E-mail</p>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-1.5 inline-block text-[0.95rem] font-semibold text-blue-text hover:underline"
                      >
                        {site.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">Adres</p>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-g100">
                        {site.street}
                        <br />
                        {site.postalCode} {site.city}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-g600">
                        Openingstijden
                      </p>
                      <p className="mt-1.5 text-[0.95rem] text-g100">
                        {site.hours.days} · {site.hours.open} - {site.hours.close}
                      </p>
                      <p className="mt-0.5 text-sm text-g600">Zondag gesloten</p>
                    </div>
                    <div className="border-t border-[var(--color-line)] pt-4">
                      <p className="text-sm text-g500">
                        KvK {site.kvk} · {site.legalName}
                      </p>
                    </div>
                  </address>
                </div>

                {/* ── kaart ── */}
                <div className="overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1">
                  {/* loading="lazy": de kaart staat onder de vouw en mag de LCP
                      niet vertragen. */}
                  <iframe
                    src={MAP_SRC}
                    title={`${site.name} op de kaart - ${site.street}, ${site.city}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full border-0 grayscale-[0.4] contrast-[1.1]"
                  />
                  <div className="flex items-center justify-between gap-3 border-t border-[var(--color-line)] px-5 py-3.5">
                    <span className="text-sm text-g300">
                      {site.street}, {site.city}
                    </span>
                    <a
                      href={site.gbp.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-text hover:underline"
                    >
                      Route
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ═══════════ NA JE AANVRAAG ═══════════ */}
      <section className="on-light relative py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Na je aanvraag</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
              lines={[{ text: "Wat er gebeurt nadat" }, { text: "je op verzenden drukt.", className: "text-g600" }]}
            />
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-g600">
                Geen automatische trechter en geen belteam. Dit is precies wat er volgt.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stappen.map((s, i) => (
              <Reveal key={s.nr} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <span className="font-display text-xs font-bold text-blue">{s.nr}</span>
                  <h3 className="mt-3 font-display text-base font-extrabold leading-tight tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.93rem] leading-relaxed text-g600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-4 chamf chamf-lg border border-blue/25 bg-blue/[0.05] p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center chamf-sm bg-blue text-white">
                <Check size={16} />
              </span>
              <p className="flex-1 text-[0.95rem] leading-relaxed text-g800">
                <span className="font-bold text-ink">Reactie binnen 1 werkdag.</span> Duurt het langer,
                dan is er iets misgegaan - bel ons dan gerust op{" "}
                <PhoneLink withIcon={false} className="font-semibold text-blue hover:underline" />.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 text-[0.95rem] leading-relaxed text-g600">
              Wil je eerst weten hoe een traject verloopt? Lees{" "}
              <Link href="/werkwijze" className="font-semibold text-blue hover:underline">
                hoe een project bij ons loopt
              </Link>{" "}
              of{" "}
              <Link href="/website-kosten-calculator" className="font-semibold text-blue hover:underline">
                bereken alvast een prijsindicatie
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <FaqBlock faqs={faqs} tone="dark" />
    </main>
  );
}
