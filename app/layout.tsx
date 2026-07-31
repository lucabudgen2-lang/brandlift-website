import type { Metadata } from "next";
import { Saira, Manrope, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { siteSchema } from "@/lib/schema";
import { MegaNav } from "@/components/layout/MegaNav";
import { Footer } from "@/components/layout/Footer";
import { GroeigesprekModal } from "@/components/groeigesprek/GroeigesprekModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-saira",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
  icons: { icon: "/brand/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${saira.variable} ${manrope.variable} ${jetbrains.variable}`}
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
