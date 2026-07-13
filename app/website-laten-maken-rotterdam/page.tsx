import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken Rotterdam | Strategisch + lokale SEO - Brandlift",
  description:
    "Website laten maken in Rotterdam? Brandlift bouwt strategische websites met lokale SEO en conversie voor Rotterdamse bedrijven die meer aanvragen willen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Rotterdam · heel Nederland"
      title="Website laten maken in Rotterdam"
      intro="Een strategische website met lokale SEO en conversie voor Rotterdamse bedrijven die meer aanvragen willen - gevonden worden op precies het juiste moment."
    />
  );
}
