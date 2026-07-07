import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LineReveal } from "@/components/ui/LineReveal";
import { site, founder, cta } from "@/lib/site";

/* BL-10 · ACHTER BRANDLIFT — the human sheet. Real portrait, real
   signature, personality-first copy. */
export function Founder() {
  return (
    <section id="over" className="on-light relative overflow-hidden py-20 md:py-28">

      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* portrait panel */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="chamf chamf-lg relative overflow-hidden bg-s0 pt-10">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 translate-y-1/3 rounded-full bg-blue/35 blur-[90px]" />
              <Image
                src="/images/portrait-luca.png"
                alt={`${site.founder}, oprichter van Brandlift`}
                width={500}
                height={870}
                className="relative z-10 mx-auto w-[78%] drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
              />
            </div>
            {/* name chip */}
            <div className="absolute -bottom-4 left-6 z-20 chamf-sm bg-blue px-5 py-2.5">
              <span className="font-semibold text-xs uppercase tracking-[0.08em] text-white">
                {site.founder} · Founder
              </span>
            </div>
          </div>
        </Reveal>

        {/* story */}
        <div>
          <Reveal>
            <Eyebrow>{founder.eyebrow}</Eyebrow>
          </Reveal>
          <LineReveal
            as="h2"
            className="mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.7rem]"
            lines={[
              { text: "Geen anoniem bureau." },
              { text: "Gewoon Luca - en een" },
              { text: "obsessie met resultaat." },
            ]}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-g600 md:text-lg">
              {founder.body}
            </p>
          </Reveal>

          {/* signed pull-quote */}
          <Reveal delay={0.18}>
            <figure className="chamf relative mt-8 max-w-xl overflow-hidden bg-s0 p-7 md:p-8">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
              <span aria-hidden className="absolute right-5 top-3 font-display text-6xl font-extrabold text-blue/40">
                &rdquo;
              </span>
              <blockquote className="relative font-display text-xl font-bold leading-snug tracking-tight text-paper md:text-2xl">
                &ldquo;{founder.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-4">
                <Image
                  src="/images/signature-luca.png"
                  alt=""
                  width={130}
                  height={60}
                  className="h-12 w-auto opacity-90"
                />
              </figcaption>
            </figure>
          </Reveal>

          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {founder.points.map((p, i) => (
              <Reveal as="li" key={p} delay={0.2 + i * 0.05}>
                <span className="flex items-start gap-3 text-sm font-medium text-g800">
                  <span className="mt-1.5 h-1.5 w-5 shrink-0 bg-blue" />
                  {p}
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <div className="mt-9">
              <Button href={cta.primaryHome.href} variant="primary" className="group">
                {cta.primaryHome.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
