import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Voorbeelden van websites | Ons werk - Brandlift",
  description:
    "Een selectie van strategische websites die we bouwden voor vakbedrijven en servicebedrijven - met lokale SEO en conversie als uitgangspunt.",
  alternates: { canonical: "/voorbeelden" },
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Werk"
      title="Voorbeelden van websites die we bouwden"
      intro="Een selectie van strategische websites die we voor vakbedrijven en servicebedrijven maakten - gebouwd om gevonden te worden en aanvragen op te leveren."
    />
  );
}
