import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken Delft | Strategisch + lokale SEO - Brandlift",
  description:
    "Website laten maken in Delft? Brandlift bouwt strategische websites met lokale SEO en conversie voor Delftse bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Delft · heel Nederland"
      title="Website laten maken in Delft"
      intro="Een strategische website met lokale SEO en conversie voor Delftse bedrijven die meer aanvragen willen - gevonden worden op precies het juiste moment."
    />
  );
}
