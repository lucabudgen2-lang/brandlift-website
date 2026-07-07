import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Website laten maken: het stappenplan",
  description:
    "Van groeigesprek tot livegang: welke stappen doorloop je bij het laten maken van een website, en wat gebeurt er in welke volgorde?",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Kennisbank · Proces"
      title="Website laten maken: het stappenplan"
      intro="Van groeigesprek tot livegang - wat er in welke volgorde gebeurt, zodat je weet waar je aan begint."
    />
  );
}
