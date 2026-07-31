import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { collectionSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Cases & portfolio",
  description:
    "Bekijk het werk van Brandlift: strategische websites met branding en lokale SEO voor Nederlandse vakbedrijven, premium merken en dienstverleners.",
  path: "/cases",
});

export default function Page() {
  const schema = collectionSchema({
    name: "Cases en portfolio",
    description: metadata.description as string,
    path: "/cases",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Cases", path: "/cases" },
    ],
    items: [
      { name: "Hovenier Eykelenboom", path: "/cases/hovenier-eykelenboom", description: "Hoveniers / groenvoorziening" },
      { name: "RotorSwing Holland", path: "/cases/rotorswing", description: "Maritiem / jachttechniek" },
      { name: "De Reizende Kwast", path: "/cases/de-reizende-kwast", description: "Schilders / afwerking" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Cases & portfolio"
      title="Strategisch gebouwd. Niet alleen mooi gemaakt."
      intro="Een greep uit het werk. Voor elk bedrijf begon het bij dezelfde vraag: hoe kom je online net zo sterk over als in het echt?"
    />
    </>
  );
}
