/* ============================================================
   Register van alle kennisbankartikelen in het nieuwe formaat.

   De gids wat-is-lokale-seo is nog een losse pagina onder app/kennisbank/
   en staat hier niet in (de kostengids is op 27 nov overgezet); een statische map gaat in Next.js altijd vóór
   de dynamische [slug]-route.

   Nieuw artikel: bestand toevoegen in deze map + één regel hieronder.
   ============================================================ */

import type { Artikel } from "@/lib/kennisbank/types";
import { artikelTemplateVoorbeeld } from "./artikel-template-voorbeeld";
import { kostengids } from "./wat-kost-een-website-laten-maken";

export const alleArtikelen: Artikel[] = [kostengids, artikelTemplateVoorbeeld];

/* Concepten zijn zichtbaar lokaal (next dev) en op Vercel-previews, nooit
   in productie. VERCEL_ENV is "production" alleen op het echte domein. */
export const toonConcepten =
  typeof window === "undefined" && /* in de browser nooit: daar is VERCEL_ENV niet bekend */
  process.env.VERCEL_ENV !== "production" &&
  process.env.KENNISBANK_ALLEEN_LIVE !== "1";

export const artikelen: Artikel[] = alleArtikelen.filter((a) => !a.concept || toonConcepten);

export const liveArtikelen: Artikel[] = alleArtikelen.filter((a) => !a.concept);

export function vindArtikel(slug: string): Artikel | undefined {
  return artikelen.find((a) => a.slug === slug);
}
