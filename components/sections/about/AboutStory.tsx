import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, founder, aboutPage } from "@/lib/site";
import { CredentialRail } from "./CredentialRail";

/* Het dossier waar de eerste alinea over gaat, uitgetekend. Elk label
   hieronder komt letterlijk uit die alinea - klantnummer 147, de
   wachtrij, het rapportje met groene vinkjes, de accountmanager. Het is
   een illustratie van de tekst, geen bewering over een bestaand bureau:
   het "domein" in de balk is daarom nadrukkelijk fictief. */
const dossier = [
  { k: "Klant", v: "Klantnummer 147" },
  { k: "Status", v: "In wachtrij", meta: "week 3" },
  { k: "Laatste oplevering", v: "SEO-rapport", vinkjes: 6 },
  { k: "Contactpersoon", v: "Accountmanager" },
];

/* OB-02 · WAAROM WE BESTAAN — de aanleiding, verteld naast het beeld
   waar hij over gaat. Het dossier links maakt de ergernis concreet
   voordat de tekst rechts hem uitlegt. */
export function AboutOrigin() {
  const { origin } = aboutPage;
  return (
    <section className="on-light relative py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          {/* het dossier */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm select-none lg:mx-0">
              <div
                aria-hidden
                className="absolute inset-0 -rotate-2 chamf chamf-lg border border-ink/10 bg-black/[0.03]"
              />
              <div className="relative overflow-hidden chamf chamf-lg border border-ink/12 bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]">
                {/* chrome */}
                <div className="flex items-center gap-2 border-b border-ink/[0.07] bg-black/[0.02] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="ml-2 flex-1 truncate chamf-sm bg-black/[0.04] px-3 py-1 font-semibold text-[0.6rem] tracking-[0.08em] text-g500">
                    klantportaal
                  </span>
                </div>

                <dl className="divide-y divide-ink/[0.07]">
                  {dossier.map((d) => (
                    <div key={d.k} className="flex items-baseline gap-4 px-5 py-4">
                      <dt className="w-28 shrink-0 font-semibold text-[0.58rem] uppercase tracking-[0.1em] text-g500">
                        {d.k}
                      </dt>
                      <dd className="flex flex-1 flex-wrap items-center gap-2 text-[0.92rem] font-medium text-g600">
                        {d.v}
                        {d.meta && (
                          <span className="chamf-sm bg-black/[0.05] px-2 py-0.5 text-[0.68rem] font-semibold text-g500">
                            {d.meta}
                          </span>
                        )}
                        {d.vinkjes && (
                          <span className="flex gap-1" aria-hidden>
                            {Array.from({ length: d.vinkjes }).map((_, i) => (
                              <svg
                                key={i}
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m5 12 4.5 4.5L19 7" />
                              </svg>
                            ))}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="border-t border-ink/[0.07] bg-black/[0.02] px-5 py-3">
                  <p className="text-[0.7rem] leading-snug text-g500">
                    Zo ziet het er bij te veel bureaus uit. Niet bij ons.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* de tekst */}
          <div>
            <Reveal>
              <Eyebrow>{origin.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
              lines={[{ text: origin.h2 }]}
            />
            <div className="mt-8 max-w-xl space-y-5">
              {origin.paras.map((p, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p className="text-lg leading-relaxed text-g600">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.24}>
              <p className="mt-10 border-l-[3px] border-blue pl-6 font-display text-2xl font-extrabold leading-snug tracking-tight text-ink md:text-[1.7rem]">
                {origin.payoff}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* OB-03 · DIT IS LUCA — de E-E-A-T-motor. De credentials zijn een rail
   die je zelf openklapt, met een echte werkfoto ernaast en de ondertekende
   belofte eronder. */
export function AboutLuca() {
  const { luca } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
      <div className="animate-glow pointer-events-none absolute -left-40 top-1/3 h-[460px] w-[460px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* credentials, uitklapbaar */}
          <div>
            <Reveal>
              <Eyebrow>{luca.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] text-paper sm:text-4xl"
              lines={[{ text: "De bouwer achter" }, { text: "elke Brandlift-site." }]}
            />
            <CredentialRail blocks={luca.blocks} />
          </div>

          {/* de werkplek */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_90px_-44px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/luca-aan-het-werk.jpg"
                  alt={`${site.founder} achter zijn laptop, werkend aan een Brandlift-website`}
                  fill
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-deep/25 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-s0/70 via-transparent to-transparent" />
              </div>
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 chamf-sm bg-s0/60 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                Geen accountmanager. De bouwer zelf.
              </span>
            </div>
          </Reveal>
        </div>

        {/* de ondertekende belofte */}
        <Reveal delay={0.1}>
          <figure className="chamf chamf-lg relative mt-12 overflow-hidden border border-[var(--color-line)] bg-s1 p-8 md:mt-14 md:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue/20 blur-[70px]" />
            <span aria-hidden className="absolute right-7 top-4 font-display text-7xl font-extrabold leading-none text-blue/40">
              &rdquo;
            </span>
            <blockquote className="relative max-w-2xl font-display text-xl font-bold leading-snug tracking-tight text-paper md:text-2xl">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
            <figcaption className="relative mt-6 flex items-center gap-4">
              <Image
                src="/images/signature-luca.png"
                alt=""
                width={130}
                height={60}
                className="h-11 w-auto opacity-90"
              />
              <span className="h-8 w-px bg-[var(--color-line-strong)]" />
              <span className="text-sm font-semibold text-g300">{site.founder}, oprichter</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
