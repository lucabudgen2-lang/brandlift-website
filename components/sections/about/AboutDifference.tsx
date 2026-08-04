import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { aboutPage } from "@/lib/site";

function Cross() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

/* OB-04 · WAAR WE IN GELOVEN — vier principes als redactionele regels in
   plaats van vier kaarten. Links wat we geloven, rechts wat jij ervoor
   terugkrijgt; de haarlijn ertussen doet het werk dat een kaartrand deed. */
export function AboutPrinciples() {
  const { principles } = aboutPage;
  return (
    <section className="on-light relative py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{principles.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[{ text: "Vier principes. Eén doel:" }, { text: "dat het werkt.", className: "text-g600" }]}
          />
        </div>

        <div className="mt-14 border-t border-ink/10">
          {principles.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="group relative border-b border-ink/10 py-8 transition-colors duration-300 hover:bg-black/[0.02] md:py-10">
                {/* accentbalk die bij hover vanaf links binnenschuift */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-blue transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-y-100"
                />
                <div className="grid gap-5 pl-5 md:grid-cols-[3.5rem_1fr_1fr] md:items-baseline md:gap-8 md:pl-7">
                  <span className="font-display text-3xl font-extrabold leading-none text-blue/25 transition-colors duration-300 group-hover:text-blue md:text-4xl">
                    0{i + 1}
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[0.98rem] italic leading-relaxed text-g600">
                      {p.believe}
                    </p>
                  </div>

                  <p className="flex items-start gap-3 border-l-2 border-blue/20 pl-5 text-[0.98rem] font-medium leading-relaxed text-g800 transition-colors duration-300 group-hover:border-blue">
                    <span aria-hidden className="mt-0.5 shrink-0 text-blue">
                      →
                    </span>
                    {p.get}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* OB-05 · WAT ONS ANDERS MAAKT — de eerlijke vergelijking, nu per regel
   gekoppeld. Je hoeft niet meer heen en weer te kijken tussen twee
   kolommen: hover of tik op een regel en beide kanten lichten samen op. */
export function AboutContrast() {
  const { contrast } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
      <div className="animate-glow pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-blue/15 blur-[140px]" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>{contrast.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] text-paper sm:text-4xl"
            lines={[{ text: "Een typisch bureau -" }, { text: "en hoe wij het doen.", className: "text-blue-text" }]}
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1">
          {/* kolomkoppen - op mobiel staat het label boven elke helft */}
          <div className="hidden border-b border-[var(--color-line)] sm:grid sm:grid-cols-2">
            <p className="px-6 py-4 text-sm font-semibold text-g600 md:px-8">{contrast.themLabel}</p>
            <p className="relative border-l border-[var(--color-line)] px-6 py-4 text-sm font-semibold text-blue-text md:px-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-blue" />
              {contrast.usLabel}
            </p>
          </div>

          {contrast.rows.map((r, i) => (
            <div
              key={r.them}
              className={`group grid transition-colors duration-200 sm:grid-cols-2 ${
                i > 0 ? "border-t border-[var(--color-line)]" : ""
              }`}
            >
              {/* zij */}
              <div className="px-6 py-5 transition-colors duration-200 group-hover:bg-white/[0.02] md:px-8">
                <span className="mb-2 block text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-g600 sm:hidden">
                  {contrast.themLabel}
                </span>
                <span className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-g500">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-white/[0.06] text-g600">
                    <Cross />
                  </span>
                  {r.them}
                </span>
              </div>

              {/* wij */}
              <div className="relative border-t border-[var(--color-line)] bg-s2/60 px-6 py-5 transition-colors duration-200 group-hover:bg-blue/[0.1] sm:border-l sm:border-t-0 md:px-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 hidden h-full w-[3px] origin-top scale-y-0 bg-blue transition-transform duration-300 ease-[var(--ease-brand)] group-hover:scale-y-100 sm:block"
                />
                <span className="mb-2 block text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-blue-text sm:hidden">
                  {contrast.usLabel}
                </span>
                <span className="flex items-start gap-3 text-[0.95rem] font-medium leading-relaxed text-g100">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue text-white">
                    <Check />
                  </span>
                  {r.us}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
