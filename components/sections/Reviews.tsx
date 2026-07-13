import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { reviews } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5 text-blue" aria-label={`${n} van 5 sterren`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/* Real Google reviews (5,0 · 3). Never fabricated. Used on commercial pages. */
export function Reviews({ tone = "light" }: { tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <section className={`${light ? "on-light" : "bg-s0"} relative py-20 md:py-28`}>
      {!light && <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />}
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Wat klanten zeggen</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className={`mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl ${
                  light ? "text-ink" : "text-paper"
                }`}
              >
                Beoordeeld met een {reviews.rating.toString().replace(".", ",")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div
              className={`inline-flex items-center gap-3 chamf-sm border px-4 py-2.5 ${
                light ? "border-ink/10 bg-black/[0.02]" : "border-[var(--color-line-strong)] bg-s1"
              }`}
            >
              <Stars n={5} />
              <span className={`text-sm font-semibold ${light ? "text-ink" : "text-paper"}`}>
                {reviews.rating.toString().replace(".", ",")}
              </span>
              <span className={`text-sm ${light ? "text-g600" : "text-g500"}`}>
                · {reviews.count} reviews op {reviews.source}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={0.05 + i * 0.06}>
              <figure
                className={`flex h-full flex-col chamf chamf-lg border p-6 ${
                  light
                    ? "border-ink/10 bg-black/[0.02]"
                    : "border-[var(--color-line-strong)] bg-s1"
                }`}
              >
                <Stars n={r.stars} />
                <blockquote
                  className={`mt-4 flex-1 text-[0.95rem] leading-relaxed ${
                    light ? "text-g700" : "text-g300"
                  }`}
                >
                  {r.text}
                </blockquote>
                <figcaption
                  className={`mt-5 flex items-center gap-3 border-t pt-4 ${
                    light ? "border-ink/10" : "border-[var(--color-line)]"
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center chamf-sm font-display text-sm font-extrabold ${
                      light ? "bg-blue/10 text-blue" : "bg-blue/15 text-blue-text"
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
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
