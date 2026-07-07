import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Wat is lokale SEO?",
  description:
    "Wat is lokale SEO en waarom begint lokale vindbaarheid bij je eigen website? Een heldere uitleg voor lokale bedrijven en dienstverleners.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Kennisbank · Lokale SEO"
      title="Wat is lokale SEO?"
      intro="Hoe lokale vindbaarheid werkt, en waarom die begint bij je eigen website in plaats van alleen bij Google Maps."
    />
  );
}
