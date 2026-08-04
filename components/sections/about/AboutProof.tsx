import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { aboutPage, clientLogos, methode, reviews } from "@/lib/site";

/* logo's met donkere artwork die een lichte plaat nodig hebben om leesbaar te zijn */
const whitePlate = new Set(["Corda Solar"]);

/* OB-06 · BEWIJS — het echte cijfer als een monument, niet als kaart.
   Grote cijfers in de marge geven de sectie diepte; de klantlogo's
   krijgen een subtiele hover zodat het geen stilstaand grid is. */
export function AboutProof() {
  const { proof } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-10 select-none font-display text-[9rem] font-extrabold leading-none text-white/[0.03] md:text-[13rem]"
      >
        24
      </span>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{proof.eyebrow}</Eyebrow>
            </Reveal>
            <LineReveal
              as="h2"
              className="mt-5 text-3xl leading-[1.06] text-paper sm:text-4xl"
              lines={[{ text: "Geen beloftes, maar werk" }, { text: "dat het laat zien.", className: "text-g300" }]}
            />

            {/* het resultaat */}
            <Reveal delay={0.12}>
              <div className="relative mt-9 inline-block chamf chamf-lg bg-blue px-8 py-6 shadow-[0_28px_70px_-26px_rgba(1,48,253,0.85)]">
                <span
                  aria-hidden
                  className="absolute right-0 top-0 h-5 w-5 bg-white/25 [clip-path:polygon(100%_0,0_0,100%_100%)]"
                />
                <div className="font-semibold text-[0.62rem] uppercase tracking-[0.1em] text-white/70">
                  Resultaat
                </div>
                <div className="mt-1.5 flex items-baseline gap-3 font-display font-extrabold text-white">
                  <span className="text-3xl">{proof.stat.from}</span>
                  <span className="text-white/50">→</span>
                  <span className="text-5xl">{proof.stat.to}</span>
                  <span className="text-sm font-semibold text-white/85">{proof.stat.unit}</span>
                </div>
                <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-white/80">
                  {proof.stat.caption}
                </p>
              </div>
            </Reveal>

            {/* de review-waardering, ernaast omdat het uit dezelfde categorie
                bewijs komt: geen belofte, maar een controleerbaar cijfer. */}
            <Reveal delay={0.18}>
              <div className="mt-5 flex items-center gap-3 chamf-sm border border-[var(--color-line-strong)] bg-s1/70 px-5 py-3.5">
                <span className="flex gap-0.5 text-blue-text" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.5l2.9 6.6 7.2.7-5.4 4.9 1.6 7.1L12 18.1l-6.3 3.7 1.6-7.1-5.4-4.9 7.2-.7z" />
                    </svg>
                  ))}
                </span>
                <span className="text-sm font-semibold text-g100">
                  {reviews.rating.toString().replace(".", ",")} op {reviews.source}
                </span>
                <span className="text-sm text-g500">· {reviews.count} reviews</span>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8">
                <Link
                  href="/cases"
                  className="group inline-flex items-center gap-2 chamf-sm border border-[var(--color-line-strong)] px-6 py-3.5 text-sm font-semibold text-paper transition-colors duration-150 hover:border-blue hover:bg-blue"
                >
                  {proof.ctaLabel}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* de klanten */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {clientLogos.map((c, i) => {
              const white = whitePlate.has(c.name);
              return (
                <Reveal key={c.name} delay={(i % 3) * 0.06}>
                  <div className="group relative flex h-24 items-center justify-center overflow-hidden chamf border border-[var(--color-line-strong)] bg-gradient-to-br from-s2 to-s0 transition-all duration-300 ease-[var(--ease-brand)] hover:border-blue/50 hover:-translate-y-1 md:h-28">
                    <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
                    <div className="pointer-events-none absolute inset-0 bg-blue/0 transition-colors duration-300 group-hover:bg-blue/[0.08]" />
                    {white ? (
                      <div className="relative flex h-[62%] w-[74%] items-center justify-center chamf-sm bg-white p-2.5">
                        <Image src={c.src} alt={c.name} width={160} height={70} className="max-h-full w-auto max-w-full object-contain" />
                      </div>
                    ) : (
                      <Image
                        src={c.src}
                        alt={c.name}
                        width={160}
                        height={70}
                        className="relative h-12 w-auto max-w-[74%] object-contain transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-[1.06]"
                      />
                    )}
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.2}>
              <div className="flex h-24 items-center justify-center chamf border border-dashed border-white/15 md:h-28">
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

/* OB-07 · ZO WERKEN WE — de methode als doorlopende ketting met een
   vloeiende connector-lijn erdoorheen, in plaats van losse pilletjes. */
export function AboutProcess() {
  const { process } = aboutPage;
  return (
    <section className="on-light relative py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <Reveal>
              <Eyebrow>{process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-g600">{process.line}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/werkwijze"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue hover:underline"
              >
                {process.ctaLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="relative flex max-w-xl flex-wrap items-center gap-y-4">
            {methode.steps.map((s, i) => (
              <Reveal as="span" key={s.n} delay={i * 0.04} className="flex items-center">
                <span className="group inline-flex items-center gap-2 chamf-sm border border-ink/10 bg-white px-3.5 py-2 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-colors duration-200 hover:border-blue/50">
                  <span className="font-display text-[0.68rem] font-extrabold text-blue">{s.n}</span>
                  <span className="text-[0.82rem] font-medium text-g800">{s.title}</span>
                </span>
                {i < methode.steps.length - 1 && (
                  <span aria-hidden className="mx-1.5 text-blue/50">→</span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* OB-08 · VOOR WIE — de spiegel: drie werelden, elk als eigen tegel. */
export function AboutAudience() {
  const { audience } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s1 py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{audience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-base leading-relaxed text-g300">{audience.line}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/voor-wie"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-text hover:underline"
              >
                {audience.ctaLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-3">
            {audience.groups.map((g, i) => (
              <Reveal key={g} delay={i * 0.06}>
                <span className="group inline-flex items-center gap-2.5 chamf-sm border border-[var(--color-line-strong)] bg-s0/60 px-4 py-2.5 text-sm font-medium text-g100 transition-colors duration-200 hover:border-blue/50">
                  <span className="h-1.5 w-1.5 shrink-0 chamf-sm bg-blue" />
                  {g}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
