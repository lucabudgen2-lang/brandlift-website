import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Wat kost een website laten maken? Prijzen en keuzes uitgelegd",
  description:
    "Wat kost een website laten maken? Bekijk welke keuzes de prijs bepalen: strategie, design, copy, SEO, techniek, maatwerk en conversie.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Kennisbank · Kosten"
      title="Wat kost een website laten maken?"
      intro="Een eerlijke uitleg van websitekosten - welke keuzes de prijs bepalen, en hoe je stuurt op waarde in plaats van alleen op de laagste prijs."
    />
  );
}
