import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken Eindhoven | Strategisch + lokale SEO - Brandlift",
  description:
    "Website laten maken in Eindhoven? Brandlift bouwt strategische websites met lokale SEO en conversie voor Eindhovense bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Eindhoven · heel Nederland"
      title="Website laten maken in Eindhoven"
      intro="Een strategische website met lokale SEO en conversie voor Eindhovense bedrijven die meer aanvragen willen - gevonden worden op precies het juiste moment."
    />
  );
}
