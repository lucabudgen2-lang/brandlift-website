import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { reviews, site } from "@/lib/site";

/* ============================================================
   De Google-review van de klant uit deze case.

   Bewust een lichte kaart op een donkere sectie: een review hoort er
   uit te zien zoals hij op Google staat, en dat is een witte kaart.
   Zo leest hij als een geciteerd document in plaats van als nog een
   blok sitecopy - precies het onderscheid dat hem geloofwaardig maakt.

   De tekst komt uit lib/site.ts, dezelfde bron als de reviewsectie
   elders op de site. Niet hier hardcoden: dan zou dezelfde review op
   twee plekken uit elkaar kunnen gaan lopen.

   Geen datum ("3 weken geleden"): die veroudert stilzwijgend en staat
   er over een half jaar te liegen.
   ============================================================ */

const AUTEUR = "Sebastiaan Eykelenboom";

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Sterren() {
  return (
    <span className="flex gap-0.5 text-[#FBBC04]" role="img" aria-label="5 van de 5 sterren">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleReview() {
  const review = reviews.items.find((r) => r.name === AUTEUR);
  /* Staat de review niet meer in lib/site.ts, dan valt deze sectie stil
     weg in plaats van een leeg kader achter te laten. */
  if (!review) return null;

  return (
    <section className="relative overflow-hidden bg-s0 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
      <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-blue/15 blur-[150px]" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Zijn review op Google</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-paper sm:text-4xl">
              In zijn eigen woorden,{" "}
              <span className="text-blue-text">openbaar na te lezen.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <figure className="relative mx-auto mt-12 max-w-3xl chamf chamf-lg bg-white p-8 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] md:p-10">
            {/* hangend citaatvlaggetje - vast merkmotief */}
            <span
              aria-hidden
              className="absolute left-8 top-0 grid h-10 w-10 -translate-y-1/2 place-items-center chamf chamf-sm bg-blue shadow-[0_12px_30px_-10px_rgba(1,48,253,0.85)]"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
                <path d="M9.5 5H4v7.2C4 16.6 6.3 19 10 19v-2.6c-1.9 0-2.9-1.1-2.9-2.9h2.4V5zm10 0H14v7.2c0 4.4 2.3 6.8 6 6.8v-2.6c-1.9 0-2.9-1.1-2.9-2.9h2.4V5z" />
              </svg>
            </span>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GoogleG className="h-7 w-7" />
                <span className="font-display text-sm font-extrabold tracking-tight text-ink">
                  Review op Google
                </span>
              </div>
              <Sterren />
            </div>

            <blockquote className="mt-7 text-[1.05rem] leading-[1.75] text-g700 md:text-[1.12rem]">
              {review.text}
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/[0.08] pt-6">
              <span className="relative h-12 w-12 shrink-0 overflow-hidden chamf chamf-sm border border-ink/10">
                <Image
                  src="/images/cases/eykelenboom/sebastiaan-portret.jpg"
                  alt={review.name}
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </span>
              <span>
                <span className="block font-display text-[0.95rem] font-extrabold leading-tight text-ink">
                  {review.name}
                </span>
                <span className="mt-0.5 block text-[0.82rem] text-g600">{review.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-g500">
            Deze review staat op het Google Bedrijfsprofiel van {site.name} - net als
            alle andere. We schrijven ze niet zelf en we kopen ze niet in.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
