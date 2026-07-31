import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/* ============================================================
   OOK ACTIEF IN — de stadspagina's aan elkaar knopen.
   De zes stadspagina's linkten nergens naar elkaar, waardoor zes
   commerciele URL's als losse eilandjes in de sitestructuur stonden.

   Deze lijst is de enige plek waar de steden staan: geef de huidige
   stad mee en de rest rolt eruit. Zo kan er geen stad ontbreken of
   naar zichzelf linken als er later een bijkomt.
   ============================================================ */

const STEDEN = [
  { city: "Den Haag", slug: "website-laten-maken-den-haag", regio: "Onze thuisbasis" },
  { city: "Rotterdam", slug: "website-laten-maken-rotterdam", regio: "Rijnmond" },
  { city: "Delft", slug: "website-laten-maken-delft", regio: "Buurstad van Den Haag" },
  { city: "Utrecht", slug: "website-laten-maken-utrecht", regio: "Midden-Nederland" },
  { city: "Amsterdam", slug: "website-laten-maken-amsterdam", regio: "Noord-Holland" },
  { city: "Eindhoven", slug: "website-laten-maken-eindhoven", regio: "Brainport" },
];

export function OokActiefIn({
  currentCity,
  tone = "dark",
}: {
  /** Naam zoals in STEDEN, bijv. "Rotterdam". Wordt uit de lijst gefilterd. */
  currentCity: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  const rest = STEDEN.filter((s) => s.city !== currentCity);

  return (
    <section className={`relative overflow-hidden py-16 md:py-20 ${dark ? "bg-s0" : "on-light"}`}>
      {dark && <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />}
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Ook actief in</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className={`mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight md:text-3xl ${
                dark ? "text-paper" : "text-ink"
              }`}
            >
              We bouwen niet alleen in {currentCity}.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className={`mt-3 text-base leading-relaxed ${dark ? "text-g500" : "text-g600"}`}>
              Vanuit Den Haag werken we door heel Nederland. Zit je net over de grens van {currentCity}?
              Dan is dit waarschijnlijk je pagina.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {rest.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 5) * 0.05}>
              <Link
                href={`/${s.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden chamf chamf-lg border p-5 transition-all duration-300 ease-[var(--ease-brand)] hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-s1/50 backdrop-blur-md hover:border-blue/50 hover:bg-s1/70"
                    : "border-black/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:border-blue/40 hover:shadow-[0_20px_44px_-24px_rgba(1,48,253,0.35)]"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute right-0 top-0 h-3.5 w-3.5 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100"
                />
                {/* Beschrijvende ankertekst: de volledige zoekterm, niet
                    alleen de stadsnaam en zeker geen "klik hier". */}
                <span
                  className={`font-display text-[0.95rem] font-extrabold leading-snug tracking-tight ${
                    dark ? "text-paper" : "text-ink"
                  }`}
                >
                  Website laten maken in {s.city}
                </span>
                <span className={`mt-1.5 flex-1 text-xs ${dark ? "text-g600" : "text-g600"}`}>{s.regio}</span>
                <span
                  className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold ${
                    dark ? "text-blue-text" : "text-blue"
                  }`}
                >
                  Bekijk
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
