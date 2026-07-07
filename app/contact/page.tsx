import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { GroeigesprekForm } from "@/components/forms/GroeigesprekForm";

export const metadata: Metadata = {
  title: "Contact - plan een gratis groeigesprek",
  description:
    "Plan een gratis groeigesprek van 30 minuten. Geen salespitch - we kijken waar je nu staat en waar aanvragen blijven liggen.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Gratis groeigesprek"
      title="Plan een gratis groeigesprek"
      intro="30 minuten. Geen salespitch. We kijken waar je nu staat, waar aanvragen blijven liggen en welke aanpak logisch is."
    >
      <div className="max-w-xl">
        <GroeigesprekForm />
      </div>
    </PageStub>
  );
}
