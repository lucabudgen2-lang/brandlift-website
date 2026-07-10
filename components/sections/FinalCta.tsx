import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { GroeigesprekForm } from "@/components/forms/GroeigesprekForm";
import { site, finalCta } from "@/lib/site";

/* BL-13 · SLOT — the closer: promise, form, and the full NAP block. */
export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div className="animate-glow pointer-events-none absolute bottom-[-20%] left-[-5%] h-[500px] w-[500px] rounded-full bg-blue/20 blur-[150px]" />

      <Container className="relative grid gap-12 lg:grid-cols-[1.25fr_0.95fr] lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.9rem]"
            lines={[
              { text: "Klaar om je website" },
              { text: "serieuzer voor je bedrijf" },
              { text: "te laten werken?", className: "text-blue-text" },
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-g300">{finalCta.body}</p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {finalCta.steps.map((s, i) => (
              <Reveal as="li" key={s} delay={0.18 + i * 0.05}>
                <span className="flex items-center gap-3 text-base text-g100">
                  <span className="grid h-6 w-6 shrink-0 place-items-center chamf-sm bg-blue font-semibold text-xs text-white">
                    {i + 1}
                  </span>
                  {s}
                </span>
              </Reveal>
            ))}
          </ul>

          {/* NAP block — local trust + LocalBusiness signals */}
          <Reveal delay={0.3}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
              <div className="bg-s1 p-5">
                <p className="font-semibold text-[0.62rem] uppercase tracking-[0.08em] text-g600">Adres</p>
                <p className="mt-2 text-sm leading-relaxed text-g100">
                  {site.street}
                  <br />
                  {site.postalCode} {site.city}
                </p>
              </div>
              <div className="bg-s1 p-5">
                <p className="font-semibold text-[0.62rem] uppercase tracking-[0.08em] text-g600">Bereikbaar</p>
                <p className="mt-2 text-sm leading-relaxed text-g100">
                  {site.hours.days} · {site.hours.open} - {site.hours.close}
                </p>
                <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-blue-text hover:underline">
                  {site.email}
                </a>
              </div>
              <div className="bg-s1 p-5 sm:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-5">
                    <a
                      href={site.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-g300 transition-colors hover:text-paper"
                    >
                      Instagram
                    </a>
                    <a
                      href={site.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-g300 transition-colors hover:text-paper"
                    >
                      Facebook
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-g600">
                    KvK {site.kvk}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <GroeigesprekForm />
        </Reveal>
      </Container>
    </section>
  );
}
