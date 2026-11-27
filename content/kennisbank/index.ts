/* ============================================================
   Register van alle kennisbankartikelen in het nieuwe formaat.

   De twee oudste gidsen (wat-kost-een-website-laten-maken en
   wat-is-lokale-seo) zijn nog losse pagina's onder app/kennisbank/
   en staan hier niet in; een statische map gaat in Next.js altijd vóór
   de dynamische [slug]-route.

   Nieuw artikel: bestand toevoegen in deze map + één regel hieronder.
   ============================================================ */

import type { Artikel } from "@/lib/kennisbank/types";
import { artikelTemplateVoorbeeld } from "./artikel-template-voorbeeld";

export const alleArtikelen: Artikel[] = [artikelTemplateVoorbeeld];

/* Concepten zijn zichtbaar lokaal (next dev) en op Vercel-previews, nooit
   in productie. VERCEL_ENV is "production" alleen op het echte domein. */
export const toonConcepten = process.env.VERCEL_ENV !== "production" && process.env.KENNISBANK_ALLEEN_LIVE !== "1";

export const artikelen: Artikel[] = alleArtikelen.filter((a) => !a.concept || toonConcepten);

export const liveArtikelen: Artikel[] = alleArtikelen.filter((a) => !a.concept);

export function vindArtikel(slug: string): Artikel | undefined {
  return artikelen.find((a) => a.slug === slug);
}
