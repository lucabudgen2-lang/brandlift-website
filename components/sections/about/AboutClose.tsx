import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, aboutPage, aboutFaqs } from "@/lib/site";

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* OB-09 · PRAKTISCH — a real address, real hours, a real map. The
   "is this a real business" doubt dies here. */
export function AboutPractical() {
  const { practical } = aboutPage;
  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{practical.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] text-paper sm:text-4xl"
            lines={[
              { text: "Gevestigd in Den Haag." },
              { text: "Werkt door heel Nederland.", className: "text-g300" },
            ]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-g300">{practical.body}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
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
                  <span className="text-xs font-semibold text-g600">KvK {site.kvk}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* the map */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="animate-glow pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-blue/20 blur-[70px]" />
            <div className="relative overflow-hidden chamf chamf-lg border border-[var(--color-line-strong)] bg-s1 shadow-[0_44px_100px_-45px_rgba(0,0,0,0.75)]">
              <div className="relative aspect-square">
                <iframe
                  title={`${site.name} op Google Maps - ${site.street}, ${site.city}`}
                  src="https://www.google.com/maps?q=Brandlift,%20Guirlande%20118,%202496%20WT%20Den%20Haag&z=16&hl=nl&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
                <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
              <div className="flex items-center gap-3 border-t border-[var(--color-line)] bg-s0 px-5 py-3.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center chamf-sm bg-blue/15 text-blue-text">
                  <PinIcon />
                </span>
                <div className="leading-tight">
                  <span className="block text-sm font-semibold text-paper">{site.name}</span>
                  <span className="block text-xs text-g500">
                    {site.street}, {site.postalCode} {site.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* OB-10 · FAQ — the doubts a lead has on this exact page. */
export function AboutFaq() {
  return (
    <section className="on-light relative py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Vragen over Brandlift</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl"
            lines={[{ text: "Eerlijk" }, { text: "beantwoord." }]}
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-g600">
              Staat je vraag er niet bij? Stel hem in het groeigesprek - of mail gerust.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-black/10">
          {aboutFaqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group border-b border-black/10 py-6">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 text-lg font-bold text-ink">
                  <span className="text-xs font-semibold text-blue">0{i + 1}</span>
                  <span className="flex-1">{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 translate-y-1 place-items-center chamf-sm bg-blue-50 text-blue transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 pl-9 pr-12">
                  <p className="max-w-2xl text-base leading-relaxed text-g600">{f.a}</p>
                  {"link" in f && f.link && (
                    <Link
                      href={f.link.href}
                      className="group/l mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                    >
                      {f.link.label}
                      <span className="transition-transform duration-150 group-hover/l:translate-x-0.5">→</span>
                    </Link>
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* OB-11 · SLOT — one clear, low-friction next step. */
export function AboutCta() {
  const { slotCta } = aboutPage;
  return (
    <section className="on-light pb-20 md:pb-28">
      <Container>
        <Reveal>
          <div className="chamf chamf-lg relative overflow-hidden bg-blue px-8 py-14 text-center md:px-14 md:py-16">
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[70px]" />
            <div className="relative mx-auto max-w-2xl">
              <LineReveal
                as="h2"
                className="text-3xl leading-[1.05] text-white sm:text-4xl"
                lines={[{ text: "Benieuwd wat we voor jouw" }, { text: "bedrijf kunnen betekenen?" }]}
              />
              <Reveal delay={0.1}>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                  {slotCta.body}
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 chamf-sm bg-paper px-7 py-4 font-semibold text-ink transition-colors duration-150 hover:bg-white"
                  >
                    {slotCta.ctaLabel}
                    <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </Link>
                  <span className="text-sm text-white/75">{slotCta.micro}</span>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
