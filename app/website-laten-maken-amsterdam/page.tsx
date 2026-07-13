import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken Amsterdam | Strategisch + lokale SEO - Brandlift",
  description:
    "Website laten maken in Amsterdam? Brandlift bouwt strategische websites met lokale SEO en conversie voor Amsterdamse bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Amsterdam · heel Nederland"
      title="Website laten maken in Amsterdam"
      intro="Een strategische website met lokale SEO en conversie voor Amsterdamse bedrijven die meer aanvragen willen - gevonden worden op precies het juiste moment."
    />
  );
}
