import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { artikelen } from "@/content/kennisbank";
import { articles as oudeGidsen } from "@/lib/site";
import type { Artikel } from "@/lib/kennisbank/types";

/* ============================================================
   "Gidsen over dit onderwerp" - automatische links van een dienst- of
   stadspagina naar de kennisbankartikelen met hetzelfde onderwerp (tag).

   Zo krijgt elk nieuw artikel bij publicatie vanzelf links vanaf de
   pagina's waar het bij hoort, zonder dat iemand ze met de hand
   toevoegt (blogpipeline, docs/blogstrategie-2026.md). Nieuwste eerst,
   hooguit drie. Staat er (nog) niets bij het onderwerp, dan rendert het
   blok niets. In productie alleen gepubliceerde artikelen.
   ============================================================ */

type Tag = Artikel["tag"];

export function GidsenOverOnderwerp({
  tags,
  uitsluiten = [],
  kop = "Gidsen over dit onderwerp",
}: {
  tags: Tag[];
  /* paden die niet mogen verschijnen (bv. de pagina zelf) */
  uitsluiten?: string[];
  kop?: string;
}) {
  const nieuw = artikelen
    .filter((a) => tags.includes(a.tag) && !uitsluiten.includes(`/kennisbank/${a.slug}`))
    .sort((x, y) => y.bijgewerkt.localeCompare(x.bijgewerkt))
    .map((a) => ({ href: `/kennisbank/${a.slug}`, titel: a.titel, lead: a.lead, tag: a.tag as string }));
  /* de losse, oudere gidsen (nog niet in het nieuwe formaat) */
  const oud = oudeGidsen
    .filter((g) => g.href.startsWith("/kennisbank/") && (tags as string[]).includes(g.tag) && !uitsluiten.includes(g.href))
    .filter((g) => !nieuw.some((n) => n.href === g.href))
    .map((g) => ({ href: g.href, titel: g.title, lead: g.lead, tag: g.tag as string }));
  const items = [...nieuw, ...oud].slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section aria-label={kop} className="on-light border-t border-ink/5 py-16 md:py-20">
      <Container>
        <Reveal>
          <Eyebrow>Kennisbank</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">{kop}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <Reveal key={g.href} delay={i * 0.05} className="h-full">
              <Link href={g.href} className="group flex h-full flex-col chamf chamf-lg border border-ink/10 bg-white p-6 transition-colors hover:border-blue/40">
                <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-g600">{g.tag}</span>
                <span className="mt-2 block font-display text-lg font-extrabold leading-snug text-ink group-hover:text-blue">{g.titel}</span>
                <span className="mt-2 block flex-1 text-[0.92rem] leading-relaxed text-g600">{g.lead}</span>
                <span className="mt-4 text-sm font-semibold text-blue">Lees de gids →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
