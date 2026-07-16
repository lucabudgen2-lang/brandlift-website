import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { VoorWie } from "@/components/sections/VoorWie";
import { Services } from "@/components/sections/Services";
import { Waarom } from "@/components/sections/Waarom";
import { Methode } from "@/components/sections/Methode";
import { Cases } from "@/components/sections/Cases";
import { CtaBand } from "@/components/sections/CtaBand";
import { Founder } from "@/components/sections/Founder";
import { LocalDenHaag } from "@/components/sections/LocalDenHaag";
import { BenefitMarquee } from "@/components/sections/BenefitMarquee";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { faqs } from "@/lib/site";

function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* Homepage · 14 sheets, order locked in homepage-blueprint-v1.md */
export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <Hero />
      <BenefitMarquee />
      <TrustStrip />
      <Problem />
      <VoorWie />
      <Services />
      <Waarom />
      <Reviews
        tone="dark"
        heading={["Klanten aan het woord.", "Stuk voor stuk vijf sterren."]}
        intro="Van bedrijven die hetzelfde zochten als jij: een website die opvalt, gevonden wordt en klanten oplevert."
      />
      <Methode />
      <Cases />
      <CtaBand />
      <Founder />
      <LocalDenHaag />
      <Faq />
      <FinalCta />
    </main>
  );
}
