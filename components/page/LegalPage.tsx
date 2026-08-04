import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

/* ============================================================
   JURIDISCHE PAGINA — gedeelde opmaak voor privacybeleid en
   algemene voorwaarden. Leesbaar boven mooi: ruime regelafstand,
   genummerde artikelen, en een inhoudsopgave die met ankers naar
   de artikelen springt.
   ============================================================ */

export type LegalBlok = {
  /* Wordt het anker-id en het nummer in de inhoudsopgave. */
  id: string;
  titel: string;
  /* Elke string is een alinea. */
  alineas?: string[];
  /* Opsomming onder de alinea's. */
  lijst?: string[];
  /* Definitielijst, bijv. voor gegevenscategorieën of begrippen. */
  paren?: { k: string; v: string }[];
};

export function LegalPage({
  eyebrow,
  titel,
  intro,
  bijgewerkt,
  path,
  crumbLabel,
  blokken,
}: {
  eyebrow: string;
  titel: string;
  intro: string;
  /* ISO-datum. */
  bijgewerkt: string;
  path: string;
  crumbLabel: string;
  blokken: LegalBlok[];
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: crumbLabel, path },
  ];
  const datum = new Date(bijgewerkt).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      {/* ── kop ── */}
      <section className="relative overflow-hidden bg-s0 pt-10 pb-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="animate-glow pointer-events-none absolute -top-40 right-[-12%] h-[420px] w-[420px] rounded-full bg-blue/15 blur-[150px]" />
        <Container className="relative">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.06] tracking-tight text-paper sm:text-5xl">
                {titel}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-relaxed text-g300">{intro}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-sm text-g500">
                Laatst bijgewerkt op <time dateTime={bijgewerkt}>{datum}</time>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── inhoud ── */}
      <section className="on-light relative py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
            {/* inhoudsopgave */}
            <Reveal>
              <nav aria-label="Inhoudsopgave" className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue">
                  Inhoud
                </p>
                <ol className="mt-4 space-y-2">
                  {blokken.map((b, i) => (
                    <li key={b.id}>
                      <a
                        href={`#${b.id}`}
                        className="group flex gap-2.5 text-[0.88rem] leading-snug text-g600 transition-colors hover:text-blue"
                      >
                        <span className="shrink-0 font-display text-xs font-bold text-blue/60">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline">{b.titel}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>

            {/* artikelen */}
            <div className="max-w-2xl">
              {blokken.map((b, i) => (
                <Reveal key={b.id} delay={0.04}>
                  <article
                    id={b.id}
                    className="scroll-mt-28 border-t border-ink/10 py-8 first:border-0 first:pt-0 md:py-10"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xs font-bold text-blue">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-xl font-extrabold leading-tight tracking-tight text-ink md:text-2xl">
                        {b.titel}
                      </h2>
                    </div>

                    {b.alineas?.map((a) => (
                      <p key={a.slice(0, 40)} className="mt-4 text-[1.02rem] leading-relaxed text-g600">
                        {a}
                      </p>
                    ))}

                    {b.paren && (
                      <dl className="mt-5 space-y-3.5">
                        {b.paren.map((p) => (
                          <div key={p.k} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                            <dt className="shrink-0 text-[0.88rem] font-bold text-ink sm:w-52">{p.k}</dt>
                            <dd className="text-[0.95rem] leading-relaxed text-g600">{p.v}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {b.lijst && (
                      <ul className="mt-5 space-y-2.5">
                        {b.lijst.map((l) => (
                          <li key={l.slice(0, 40)} className="flex items-start gap-3">
                            <span className="mt-2.5 h-1 w-3.5 shrink-0 bg-blue" />
                            <span className="text-[0.98rem] leading-relaxed text-g600">{l}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}

              {/* contactblok onderaan */}
              <Reveal>
                <div className="mt-10 chamf chamf-lg border border-blue/25 bg-blue/[0.05] p-6 md:p-7">
                  <p className="font-display text-base font-extrabold tracking-tight text-ink">
                    Vragen hierover?
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-g600">
                    Stel ze gerust. Je krijgt antwoord van {site.founder} zelf, niet van een
                    juridische afdeling.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem]">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-blue hover:underline"
                    >
                      {site.email}
                    </a>
                    <a
                      href={`tel:${site.phoneE164}`}
                      className="font-semibold text-blue hover:underline"
                    >
                      {site.phone}
                    </a>
                    <Link href="/contact" className="font-semibold text-blue hover:underline">
                      Contactpagina
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
