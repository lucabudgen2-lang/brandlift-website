import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { aboutPage, clientLogos, methode } from "@/lib/site";

/* logos whose artwork is dark and needs a light plate to read */
const whitePlate = new Set(["Corda Solar"]);

/* OB-06 · BEWIJS — a real number and the clients behind it. */
export function AboutProof() {
  const { proof } = aboutPage;
  return (
    <section className="on-light relative py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>{proof.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] sm:text-4xl"
              lines={[{ text: "Geen beloftes, maar werk" }, { text: "dat het laat zien." }]}
            />
            {/* the result */}
            <Reveal delay={0.12}>
              <div className="mt-8 inline-block chamf chamf-lg bg-blue px-7 py-5 shadow-[0_24px_60px_-24px_rgba(1,48,253,0.8)]">
                <div className="font-semibold text-[0.6rem] uppercase tracking-[0.08em] text-white/70">
                  Resultaat
                </div>
                <div className="mt-1 flex items-baseline gap-2.5 font-display font-extrabold text-white">
                  <span className="text-2xl">{proof.stat.from}</span>
                  <span className="text-white/60">→</span>
                  <span className="text-4xl">{proof.stat.to}</span>
                  <span className="text-sm font-semibold text-white/85">{proof.stat.unit}</span>
                </div>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/80">
                  {proof.stat.caption}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Link
                  href="/cases"
                  className="group inline-flex items-center gap-2 chamf-sm border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-blue hover:bg-blue hover:text-white"
                >
                  {proof.ctaLabel}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* the clients */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {clientLogos.map((c, i) => {
              const white = whitePlate.has(c.name);
              return (
                <Reveal key={c.name} delay={(i % 3) * 0.06}>
                  <div className="relative flex h-24 items-center justify-center overflow-hidden chamf border border-[var(--color-line-strong)] bg-gradient-to-br from-s2 to-s0 md:h-28">
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
                    {white ? (
                      <div className="flex h-[62%] w-[74%] items-center justify-center chamf-sm bg-white p-2.5">
                        <Image
                          src={c.src}
                          alt={c.name}
                          width={160}
                          height={70}
                          className="max-h-full w-auto max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <Image
                        src={c.src}
                        alt={c.name}
                        width={160}
                        height={70}
                        className="relative h-12 w-auto max-w-[74%] object-contain"
                      />
                    )}
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.2}>
              <div className="flex h-24 items-center justify-center chamf border border-dashed border-ink/20 md:h-28">
                <span className="px-4 text-center text-xs italic leading-relaxed text-g600">
                  Jouw bedrijf als volgende?
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* OB-07 · ZO WERKEN WE — the method as a compact strip; the full
   traject lives on /werkwijze. */
export function AboutProcess() {
  const { process } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s1 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <Reveal>
              <Eyebrow>{process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-g300">{process.line}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/werkwijze"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
              >
                {process.ctaLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="flex max-w-xl flex-wrap items-center gap-y-3">
            {methode.steps.map((s, i) => (
              <Reveal as="span" key={s.n} delay={i * 0.04} className="flex items-center">
                <span className="inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] bg-s0/60 px-3 py-1.5">
                  <span className="font-display text-[0.68rem] font-extrabold text-blue-text">{s.n}</span>
                  <span className="text-[0.82rem] font-medium text-g100">{s.title}</span>
                </span>
                {i < methode.steps.length - 1 && (
                  <span aria-hidden className="mx-1.5 text-blue/60">→</span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* OB-08 · VOOR WIE — the mirror: three worlds, one line each. */
export function AboutAudience() {
  const { audience } = aboutPage;
  return (
    <section className="on-light relative py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{audience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-g600">{audience.line}</p>
            </Reveal>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-wrap gap-2">
              {audience.groups.map((g, i) => (
                <Reveal as="span" key={g} delay={i * 0.05}>
                  <span className="inline-flex items-center gap-2 chamf-sm border border-ink/12 bg-black/[0.02] px-3.5 py-2 text-sm font-medium text-g800">
                    <span className="h-1.5 w-1.5 chamf-sm bg-blue" />
                    {g}
                  </span>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.18}>
              <Link
                href="/voor-wie"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
              >
                {audience.ctaLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
