import type { Metadata } from "next";
import { site } from "@/lib/site";

/* ============================================================
   BRANDLIFT · paginametadata
   Eén bron voor <title>, description, canonical, Open Graph en
   Twitter. Reden: Next erft layout-metadata naar elke pagina die
   het niet overschrijft. Stond de openGraph-titel in de layout,
   dan kreeg elke pagina de HOMEPAGE-titel als og:title mee - op
   26+ URL's tegelijk, zonder dat iemand het merkt.

   Door OG en Twitter hier áf te leiden uit title/description/path
   kan dat niet meer misgaan: een titel zetten zonder dat og:title
   meeloopt is simpelweg geen geldige aanroep meer.
   ============================================================ */

const BRAND = "Brandlift";
const SUFFIX = ` | ${BRAND}`;

/* Zelfde template als in app/layout.tsx. We passen hem hier
   handmatig toe, omdat Next het title-template NIET toepast op
   openGraph.title - dat is precies de val waar dit in trapte. */
function withBrand(title: string) {
  return title.endsWith(SUFFIX) ? title : `${title}${SUFFIX}`;
}

/* Canonical/og:url: absoluut, https, geen trailing slash - ook niet
   op de homepage. Die keuze staat gelijk in app/sitemap.ts, zodat
   canonical en sitemap letterlijk dezelfde string zijn. */
export function absoluteUrl(path: string) {
  if (!path || path === "/") return site.url;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${clean.replace(/\/$/, "")}`;
}

export type PageMetaInput = {
  /** Zonder " | Brandlift" - dat plakken we er zelf achter. */
  title: string;
  description: string;
  /** Pad vanaf de root, bijv. "/diensten/branding". "/" voor home. */
  path: string;
  /** "article" voor kennisbank- en case-pagina's, anders "website". */
  type?: "website" | "article";
  /** Zet noindex voor pagina's die nog niet af zijn. */
  noindex?: boolean;
  /** Alleen voor artikelen: ISO-datums voor og:article. */
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = withBrand(title);

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type,
      locale: "nl_NL",
      siteName: BRAND,
      title: fullTitle,
      description,
      url,
      ...(type === "article" && (publishedTime || modifiedTime)
        ? { publishedTime, modifiedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
