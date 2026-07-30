import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { collectionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kennisbank - gidsen over websites en SEO",
  description:
    "Praktische gidsen over websites, lokale SEO en kosten. Eerlijke uitleg zonder salespraat, zodat je met vertrouwen kiest wat je bedrijf nodig heeft.",
  alternates: { canonical: "/kennisbank" },
};

export default function Page() {
  const schema = collectionSchema({
    name: "Kennisbank",
    description: metadata.description as string,
    path: "/kennisbank",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Kennisbank", path: "/kennisbank" },
    ],
    items: [
      { name: "Wat kost een website laten maken?", path: "/kennisbank/wat-kost-een-website-laten-maken", description: "Prijzen en keuzes uitgelegd" },
      { name: "Wat is lokale SEO?", path: "/kennisbank/wat-is-lokale-seo", description: "Hoe lokale vindbaarheid werkt" },
      { name: "Onze werkwijze", path: "/werkwijze", description: "Van eerste gesprek tot livegang" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Kennisbank"
      title="Praktische gidsen voor betere keuzes online"
      intro="Geen dichtgetimmerde salespraat. Eerlijke uitleg over websites, lokale SEO en kosten, zodat je met vertrouwen kiest."
    />
    </>
  );
}
