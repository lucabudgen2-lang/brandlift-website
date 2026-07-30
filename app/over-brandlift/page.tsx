import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutOrigin, AboutLuca } from "@/components/sections/about/AboutStory";
import { AboutPrinciples, AboutContrast } from "@/components/sections/about/AboutDifference";
import { AboutProof, AboutProcess, AboutAudience } from "@/components/sections/about/AboutProof";
import { AboutPractical, AboutFaq, AboutCta } from "@/components/sections/about/AboutClose";
import { aboutSchema } from "@/lib/schema";
import { aboutFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over Brandlift - het bureau achter je site",
  description:
    "Geen anoniem bureau, maar Luca die je site zelf ontwerpt en bouwt. Lees wat Brandlift anders maakt en waarom vakbedrijven voor ons kiezen.",
  alternates: { canonical: "/over-brandlift" },
};

function aboutFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* Over Brandlift · 11 sections, order per about-page content plan:
   hook → why → who → proof → how → practical → act. */
export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema()) }}
      />
      <AboutHero />
      <AboutOrigin />
      <AboutLuca />
      <AboutPrinciples />
      <AboutContrast />
      <AboutProof />
      <AboutProcess />
      <AboutAudience />
      <AboutPractical />
      <AboutFaq />
      <AboutCta />
    </main>
  );
}
