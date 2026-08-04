import type { Metadata } from "next";
import { Saira, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import { siteSchema } from "@/lib/schema";
import { MegaNav } from "@/components/layout/MegaNav";
import { Footer } from "@/components/layout/Footer";
import { GroeigesprekModal } from "@/components/groeigesprek/GroeigesprekModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

/* De gewichten hieronder zijn niet gekozen maar gemeten: op acht pagina's
   is per element de berekende font-family en font-weight opgehaald. Saira
   (koppen) komt alleen voor op 600, 700 en 800; Manrope (bodytekst) op 400
   tot en met 700. De gewichten die daar niet in voorkwamen zijn geschrapt -
   elk gewicht is een apart woff2-bestand dat anders voor niets wordt
   opgehaald. Voeg je ergens een nieuw gewicht toe in de opmaak, zet het dan
   hier ook terug, anders valt de browser terug op een nabootsing. */
const saira = Saira({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/* JetBrains Mono is verwijderd: het laadde drie gewichten en de klasse
   font-mono kwam in de hele codebase geen enkele keer voor. */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    /* <= 60 tekens inclusief het achtervoegsel, anders kapt Google hem af.
       Pagina-titels zetten daarom zelf GEEN "- Brandlift" meer: de template
       plakt " | Brandlift" er al achter (dat gaf eerder "... - Brandlift |
       Brandlift" in de zoekresultaten). */
    default: "Webdesignbureau Den Haag - meer aanvragen | Brandlift",
    template: "%s | Brandlift",
  },
  description:
    "Brandlift bouwt strategische websites met branding, lokale SEO en conversie voor Nederlandse bedrijven die meer zichtbaarheid, vertrouwen en aanvragen willen.",
  /* GEEN `keywords`. Google negeert de tag sinds 2009 en in de broncode
     van een SEO-bureau staat hij vooral verkeerd. */
  authors: [{ name: site.founder }],
  /* GEEN `alternates.canonical` hier. Next erft layout-metadata naar elke
     pagina die het niet overschrijft, dus een canonical op "/" liet elke
     pagina zonder eigen canonical zichzelf als de homepage aanmerken.
     De canonical hoort per pagina; de homepage zet hem in app/page.tsx. */
  /* Hier staan UITSLUITEND de velden die op elke pagina identiek zijn.
     Titel, description en url horen hier NIET: Next erft layout-metadata
     naar elke pagina die het niet overschrijft, dus een og:title hier
     gaf letterlijk elke URL de homepage-titel mee. Pagina's zetten hun
     eigen OG via buildPageMetadata() in lib/metadata.ts. */
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  /* GEEN `icons` meer. De oude favicon was een PNG van 1254x1254 en 436 KB
     die de browser vervolgens op 16 tot 32 pixels tekende - opgehaald op
     elke pagina, buiten de beeldoptimalisatie om. app/icon.png (32px, 1,6 KB)
     en app/apple-icon.png (180px) nemen het over via de bestandsconventie
     van de App Router: Next zet de link-tags zelf en geeft ze een hash met
     onbeperkte cache mee. Het merk is bijgesneden zodat het het kader vult;
     in de oude versie stond het zo klein in het midden dat het in een
     browsertab niet te herkennen was. */
  /* Bewijs van eigendom voor Google Search Console. Was eerder gekoppeld
     via een HTML-bestand op de oude SiteGround-host - dat bestaat niet
     meer nu Vercel de site serveert. Deze meta-tag zit nu in de code
     zelf, dus overleeft elke toekomstige herbouw of hostingwissel zonder
     dat de GSC-koppeling ooit opnieuw hoeft. */
  verification: {
    google: "Q2MGx0V_eUGuJE-RgmexfNH_WRZYjuy7bGKcwdBApXw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${saira.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema()) }}
        />
      </head>
      <body>
        <MegaNav />
        {children}
        <Footer />
        <GroeigesprekModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
