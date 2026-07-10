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

/* OB-04 · WAAR WE IN GELOVEN — four principles, each tied to what the
   client actually gets. Belief in, benefit out. */
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
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl"
            lines={[{ text: "Vier principes. Eén doel:" }, { text: "dat het werkt." }]}
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.07}>
              <div className="group flex h-full flex-col chamf chamf-lg border border-ink/10 bg-black/[0.02] p-7 transition-colors duration-200 hover:border-blue/40 md:p-8">
                <span className="font-semibold text-xs text-blue">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] italic leading-relaxed text-g600">
                  {p.believe}
                </p>
                <p className="mt-4 flex items-start gap-2.5 border-t border-ink/10 pt-4 text-[0.95rem] font-medium leading-relaxed text-g800">
                  <span className="mt-0.5 shrink-0 text-blue">→</span>
                  {p.get}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* OB-05 · WAT ONS ANDERS MAAKT — the honest side-by-side for the
   comparison shopper: a typical agency next to how we do it. */
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
            lines={[{ text: "Een typisch bureau -" }, { text: "en hoe wij het doen." }]}
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)]">
          <div className="grid sm:grid-cols-2">
            {/* them */}
            <div className="bg-s1 p-6 md:p-8">
              <p className="text-sm font-semibold text-g600">{contrast.themLabel}</p>
              <ul className="mt-5 space-y-4">
                {contrast.rows.map((r) => (
                  <Reveal as="li" key={r.them}>
                    <span className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-g500">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-white/[0.06] text-g600">
                        <Cross />
                      </span>
                      {r.them}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
            {/* us */}
            <div className="relative border-t border-[var(--color-line)] bg-s2 p-6 sm:border-l sm:border-t-0 md:p-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-blue" />
              <p className="text-sm font-semibold text-blue-text">{contrast.usLabel}</p>
              <ul className="mt-5 space-y-4">
                {contrast.rows.map((r, i) => (
                  <Reveal as="li" key={r.us} delay={0.05 + i * 0.04}>
                    <span className="flex items-start gap-3 text-[0.95rem] font-medium leading-relaxed text-g100">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center chamf-sm bg-blue text-white">
                        <Check />
                      </span>
                      {r.us}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
