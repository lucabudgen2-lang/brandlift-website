import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { voorWie } from "@/lib/site";

/* BL-04 · VOOR WIE — "drie werelden, één methode": an interactive triptych.
   Three audience worlds as cinematic photo panels; hovering one lets it
   breathe open while the others yield. The bridge sits below: whatever world
   you're in, the engine is the same. */
export function VoorWie() {
  return (
    <section id="voor-wie" className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

      <Container className="relative">
        {/* header */}
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{voorWie.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.8rem]"
            lines={[
              { text: "Voor bedrijven die al goed" },
              { text: "werk leveren - en online" },
              { text: "willen groeien.", className: "text-blue-text" },
            ]}
          />
        </div>

        {/* triptych */}
        <div className="mt-12 flex flex-col gap-4 lg:h-[600px] lg:flex-row lg:gap-3">
          {voorWie.panels.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.08}
              className="min-h-[520px] flex-1 transition-[flex-grow] duration-500 ease-[var(--ease-brand)] lg:min-h-0 lg:hover:flex-[1.9]"
            >
              <Link id={p.id} href={p.href} className="group relative block h-full w-full overflow-hidden chamf chamf-lg scroll-mt-32">
                {/* world */}
                <Image
                  src={p.photo}
                  alt={p.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-brand)] group-hover:scale-[1.06]"
                />
                {/* duotone + scrim */}
                <div className="absolute inset-0 bg-blue-deep/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-s0/25 transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-s0 via-s0/50 to-s0/10" />

                {/* content */}
                <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <span
                      aria-hidden
                      className="text-stroke font-display text-5xl font-extrabold leading-none opacity-50 md:text-6xl"
                    >
                      {p.index}
                    </span>
                    <span className="grid h-10 w-10 place-items-center chamf-sm border border-white/25 bg-s0/40 text-paper backdrop-blur-sm transition-all duration-300 group-hover:border-blue group-hover:bg-blue">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-paper">
                      {p.label}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-g300">{p.desc}</p>

                    {/* branches */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex chamf-sm border border-white/20 bg-s0/45 px-2.5 py-1 text-[0.72rem] font-medium text-g100 backdrop-blur-sm transition-colors duration-150 group-hover:border-white/35"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* proof: real clients from this world, or a reassurance */}
                    <div className="mt-5 flex min-h-[1.5rem] items-center gap-4 border-t border-white/15 pt-4">
                      {p.proof.length > 0 ? (
                        <>
                          <span className="shrink-0 text-xs italic text-g500">o.a. gebouwd voor</span>
                          <div className="flex items-center gap-4">
                            {p.proof.map((logo) => (
                              <Image
                                key={logo.name}
                                src={logo.src}
                                alt={logo.name}
                                width={110}
                                height={40}
                                className="logo-white h-6 w-auto opacity-75"
                              />
                            ))}
                          </div>
                        </>
                      ) : (
                        <span className="text-xs italic text-g500">
                          {"note" in p ? p.note : ""}
                        </span>
                      )}
                    </div>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-paper">
                      {p.linkLabel}
                      <span className="text-blue-text transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* bridge — one method for every world (below the panels) */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-center sm:gap-6">
            <p className="flex items-center gap-3 text-base font-semibold italic text-g100 md:text-lg">
              <span className="hidden h-px w-8 bg-blue sm:block" />
              {voorWie.bridgeLead}
            </p>
            <Link
              href="#methode"
              className="group inline-flex items-center gap-2 chamf-sm bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_44px_-14px_rgba(1,48,253,0.8)] transition-colors duration-150 hover:bg-blue-press"
            >
              {voorWie.bridge}
              <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
