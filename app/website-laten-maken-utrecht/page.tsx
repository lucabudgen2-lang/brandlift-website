import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken Utrecht | Strategisch + lokale SEO - Brandlift",
  description:
    "Website laten maken in Utrecht? Brandlift bouwt strategische websites met lokale SEO en conversie voor Utrechtse bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Utrecht · heel Nederland"
      title="Website laten maken in Utrecht"
      intro="Een strategische website met lokale SEO en conversie voor Utrechtse bedrijven die meer aanvragen willen - gevonden worden op precies het juiste moment."
    />
  );
}
