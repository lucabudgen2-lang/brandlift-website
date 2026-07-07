import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Het privacybeleid van Brandlift.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Juridisch"
      title="Privacybeleid"
      intro="Hier komt het privacybeleid van Brandlift, inclusief hoe we omgaan met gegevens uit het contactformulier."
    />
  );
}
