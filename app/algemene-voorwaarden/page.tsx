import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden van Brandlift.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Juridisch"
      title="Algemene voorwaarden"
      intro="Hier komen de algemene voorwaarden van Brandlift."
    />
  );
}
