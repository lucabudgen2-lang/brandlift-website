import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { collectionSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Diensten - website, lokale SEO en branding",
  description:
    "Website laten maken, lokale SEO, branding en conversie-optimalisatie. Eén groeifundament voor Nederlandse bedrijven die meer aanvragen willen.",
  path: "/diensten",
  noindex: true,
});

export default function Page() {
  const schema = collectionSchema({
    name: "Diensten van Brandlift",
    description: metadata.description as string,
    path: "/diensten",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Diensten", path: "/diensten" },
    ],
    items: [
      { name: "Website laten maken", path: "/diensten/website-laten-maken", description: "Strategische websites die aanvragen opleveren" },
      { name: "Lokale SEO", path: "/diensten/lokale-seo", description: "Beter gevonden worden in je regio" },
      { name: "Branding", path: "/diensten/branding", description: "Een uitstraling die vertrouwen wekt" },
      { name: "Conversie-optimalisatie", path: "/diensten/conversie-optimalisatie", description: "Meer halen uit je bezoekers" },
      { name: "Website kosten berekenen", path: "/website-kosten-calculator", description: "Bereken direct een prijsindicatie" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Diensten"
      title="Alles wat je website nodig heeft om te presteren"
      intro="Website, lokale SEO, branding en conversie - los inzetbaar, maar het sterkst als één groeifundament."
    />
    </>
  );
}
