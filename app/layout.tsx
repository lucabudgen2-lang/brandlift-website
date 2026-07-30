import type { Metadata } from "next";
import { Saira, Manrope, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { siteSchema } from "@/lib/schema";
import { MegaNav } from "@/components/layout/MegaNav";
import { Footer } from "@/components/layout/Footer";
import { GroeigesprekModal } from "@/components/groeigesprek/GroeigesprekModal";
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
  keywords: [
    "website laten maken",
    "lokale SEO",
    "branding",
    "webdesign Den Haag",
    "website laten maken Den Haag",
    "strategische website",
  ],
  authors: [{ name: site.founder }],
  /* GEEN `alternates.canonical` hier. Next erft layout-metadata naar elke
     pagina die het niet overschrijft, dus een canonical op "/" liet elke
     pagina zonder eigen canonical zichzelf als de homepage aanmerken.
     De canonical hoort per pagina; de homepage zet hem in app/page.tsx. */
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: "Brandlift | Strategische websites met lokale SEO en conversie",
    description:
      "Websites, branding en lokale SEO die zorgen voor meer zichtbaarheid, meer vertrouwen en meer aanvragen. Gevestigd in Den Haag, actief in heel Nederland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesignbureau Den Haag - meer aanvragen | Brandlift",
    description:
      "Strategische websites met branding en lokale SEO voor Nederlandse bedrijven die meer aanvragen willen.",
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
      </body>
    </html>
  );
}
