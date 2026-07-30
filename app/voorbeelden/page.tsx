import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { collectionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Voorbeelden van websites | Ons werk - Brandlift",
  description:
    "Een selectie van strategische websites die we bouwden voor vakbedrijven en servicebedrijven - met lokale SEO en conversie als uitgangspunt.",
  alternates: { canonical: "/voorbeelden" },
};

export default function Page() {
  const schema = collectionSchema({
    name: "Voorbeelden van websites",
    description: metadata.description as string,
    path: "/voorbeelden",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Voorbeelden", path: "/voorbeelden" },
    ],
    items: [
      { name: "Hovenier Eykelenboom", path: "/cases/hovenier-eykelenboom" },
      { name: "RotorSwing Holland", path: "/cases/rotorswing" },
      { name: "De Reizende Kwast", path: "/cases/de-reizende-kwast" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Werk"
      title="Voorbeelden van websites die we bouwden"
      intro="Een selectie van strategische websites die we voor vakbedrijven en servicebedrijven maakten - gebouwd om gevonden te worden en aanvragen op te leveren."
    />
    </>
  );
}
