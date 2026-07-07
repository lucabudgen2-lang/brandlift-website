import type { Metadata } from "next";
import { Saira, Manrope, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { siteSchema } from "@/lib/schema";
import { MegaNav } from "@/components/layout/MegaNav";
import { Footer } from "@/components/layout/Footer";
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
    default: "Brandlift | Strategische websites met lokale SEO en conversie",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: "Brandlift | Strategische websites met lokale SEO en conversie",
    description:
      "Websites, branding en lokale SEO die zorgen voor meer zichtbaarheid, meer vertrouwen en meer aanvragen. Gevestigd in Den Haag, actief in heel Nederland.",
  },
  robots: { index: true, follow: true },
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
      </body>
    </html>
  );
}
