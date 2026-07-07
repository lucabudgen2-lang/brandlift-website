import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Kennisbank",
  description:
    "Praktische gidsen over websites, lokale SEO en kosten. Eerlijke uitleg zodat je met vertrouwen kiest.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Kennisbank"
      title="Praktische gidsen voor betere keuzes online"
      intro="Geen dichtgetimmerde salespraat. Eerlijke uitleg over websites, lokale SEO en kosten, zodat je met vertrouwen kiest."
    />
  );
}
