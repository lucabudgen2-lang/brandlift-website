import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { reviews } from "@/lib/site";

function Stars({ n, className = "text-blue" }: { n: number; className?: string }) {
  return (
    <span className={`flex gap-1 ${className}`} aria-label={`${n} van 5 sterren`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/* Real Google reviews (5,0 · 3). Never fabricated, verbatim. Design: editorial
   spread - sticky rating monument on the left, the quotes on a voltage spine
   on the right, each with a floating quote tag. Reused on commercial pages. */
export function Reviews({
  tone = "light",
  eyebrow = "Wat klanten zeggen",
  heading = ["Elke review is echt.", "Elke ster verdiend."],
  intro = "Woord voor woord overgenomen van ons Google Bedrijfsprofiel - we schrijven ze niet zelf en we kopen ze niet in.",
}: {
  tone?: "light" | "dark";
  eyebrow?: string;
  heading?: [string, string];
  intro?: string;
}) {
  const light = tone === "light";
  const rating = reviews.rating.toFixed(1).replace(".", ",");

  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${light ? "on-light" : "bg-s0"}`}>
      {!light && (
        <>
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
          <div className="animate-glow pointer-events-none absolute -left-40 bottom-[-10%] h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
        </>
      )}

      <Container className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* ── left rail: statement + rating monument ── */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
            lines={[
              { text: heading[0] },
              { text: heading[1], className: light ? "text-g600" : "text-g300" },
            ]}
          />
          <Reveal delay={0.12}>
            <p className={`mt-6 max-w-md text-lg leading-relaxed ${light ? "text-g600" : "text-g300"}`}>
              {intro}
            </p>
          </Reveal>

          {/* rating monument */}
          <Reveal delay={0.18}>
            <div className="relative mt-10 max-w-sm overflow-hidden chamf chamf-lg bg-blue p-8 shadow-[0_36px_80px_-32px_rgba(1,48,253,0.7)]">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-[60px]" />
              <div className="relative flex items-end gap-5">
                <span className="font-display text-[4.6rem] font-extrabold leading-[0.85] tracking-tight text-white">
                  {rating}
                </span>
                <div className="pb-1">
                  <Stars n={5} className="text-white" />
                  <p className="mt-2 text-sm font-semibold text-white/85">
                    op {reviews.source} · {reviews.count} reviews
                  </p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center gap-2.5 border-t border-white/20 pt-4">
                <span className="h-1.5 w-1.5 chamf-sm bg-white" />
                <p className="text-[0.82rem] font-medium text-white/80">
                  Alle reviews: vijf sterren
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── right: the quotes, hung on a voltage spine ── */}
        <div className="relative">
          <span
            aria-hidden
            className={`absolute bottom-6 left-[7px] top-6 hidden w-px sm:block ${
              light ? "bg-ink/10" : "bg-white/10"
            }`}
          />
          <div className="space-y-7">
            {reviews.items.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <article className="relative sm:pl-12">
                  {/* spine node */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-10 hidden h-[15px] w-[15px] chamf-sm bg-blue shadow-[0_0_18px_rgba(1,48,253,0.8)] sm:block"
                  />

                  <figure
                    className={`group relative overflow-hidden chamf chamf-lg border p-7 transition-all duration-300 ease-[var(--ease-brand)] md:p-8 ${
                      light
                        ? "border-black/10 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(1,48,253,0.35)]"
                        : "border-white/10 bg-s1/60 backdrop-blur-md hover:-translate-y-1 hover:border-blue/50 hover:bg-s1/80"
                    }`}
                  >
                    {/* voltage corner */}
                    <span className="absolute right-0 top-0 h-4 w-4 bg-blue opacity-0 transition-opacity duration-200 [clip-path:polygon(100%_0,0_0,100%_100%)] group-hover:opacity-100" />
                    {/* floating quote tag */}
                    <span
                      aria-hidden
                      className="absolute left-7 top-0 grid h-9 w-9 place-items-center chamf-sm bg-blue text-white shadow-[0_10px_28px_-8px_rgba(1,48,253,0.8)]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 7H6.5C5.1 7 4 8.1 4 9.5v1C4 11.9 5.1 13 6.5 13H8v1.5C8 15.9 6.9 17 5.5 17H5v2h.5C8 19 10 17 10 14.5V7zm10 0h-3.5C15.1 7 14 8.1 14 9.5v1c0 1.4 1.1 2.5 2.5 2.5H18v1.5c0 1.4-1.1 2.5-2.5 2.5H15v2h.5c2.5 0 4.5-2 4.5-4.5V7z" />
                      </svg>
                    </span>

                    <div className="flex items-center justify-between pt-8">
                      <Stars n={r.stars} className={light ? "text-blue" : "text-blue-text"} />
                      <span className="text-xs font-medium text-g600">{r.when}</span>
                    </div>

                    <blockquote
                      className={`mt-4 text-[1.02rem] leading-relaxed ${light ? "text-g700" : "text-g200"}`}
                    >
                      {r.text}
                    </blockquote>

                    <figcaption
                      className={`mt-6 flex items-center gap-3.5 border-t pt-5 ${
                        light ? "border-black/10" : "border-white/10"
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center chamf-sm font-display text-base font-extrabold ${
                          light ? "bg-blue/10 text-blue" : "border border-blue/30 bg-blue/15 text-blue-text"
                        }`}
                      >
                        {r.name.charAt(0)}
                      </span>
                      <span>
                        <span className={`block text-sm font-semibold ${light ? "text-ink" : "text-paper"}`}>
                          {r.name}
                        </span>
                        <span className={`block text-xs ${light ? "text-g600" : "text-g500"}`}>
                          {r.role ? `${r.role} · ` : ""}Google-review
                        </span>
                      </span>
                      <span
                        className={`ml-auto hidden font-display text-2xl font-extrabold sm:block ${
                          light ? "text-black/[0.07]" : "text-white/[0.07]"
                        }`}
                        aria-hidden
                      >
                        0{i + 1}
                      </span>
                    </figcaption>
                  </figure>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
