import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, founder, aboutPage } from "@/lib/site";

/* OB-02 · WAAROM WE BESTAAN — the origin, told as editorial. No cards,
   no grid: one narrow column that reads like a manifest. */
export function AboutOrigin() {
  const { origin } = aboutPage;
  return (
    <section className="on-light relative py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow>{origin.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: origin.h2 }]}
          />
          <div className="mt-8 space-y-5">
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
      </Container>
    </section>
  );
}

/* OB-03 · DIT IS LUCA — the E-E-A-T engine: credentials as a story,
   the office as the second photo, closed with the signed promise. */
export function AboutLuca() {
  const { luca } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* credentials, numbered */}
          <div>
            <Reveal>
              <Eyebrow>{luca.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] text-paper sm:text-4xl"
              lines={[{ text: "De bouwer achter" }, { text: "elke Brandlift-site." }]}
            />
            <div className="mt-9 space-y-7">
              {luca.blocks.map((b, i) => (
                <Reveal key={b.n} delay={0.08 + i * 0.06}>
                  <div className="flex gap-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center chamf-sm border border-blue/40 bg-blue/10 font-display text-sm font-extrabold text-blue-text">
                      {b.n}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold tracking-tight text-paper">
                        {b.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-g500">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* the workplace */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] shadow-[0_44px_90px_-44px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Werkplek met het Brandlift-logo aan de muur, ontwerpers achter hun scherm"
                  fill
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-deep/35 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-s0/70 via-transparent to-transparent" />
              </div>
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 chamf-sm bg-s0/60 px-3 py-1.5 text-xs font-medium text-g100 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                Ons kantoor in Den Haag
              </span>
            </div>
          </Reveal>
        </div>

        {/* the signed promise */}
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
