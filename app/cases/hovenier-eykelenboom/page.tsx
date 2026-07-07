import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";

export const metadata: Metadata = {
  title: "Case: Hovenier Eykelenboom",
  description:
    "Hoe Brandlift Hovenier Eykelenboom lokaal beter vindbaar maakte met een complete website en een lokale SEO-structuur per dienst en werkgebied.",
};

export default function Page() {
  return (
    <PageStub
      eyebrow="Case · Hoveniers / groenvoorziening"
      title="Hovenier Eykelenboom"
      intro="Vakwerk dat lokaal te weinig werd gevonden - opnieuw opgebouwd met een lokale SEO-structuur per dienst en werkgebied."
    />
  );
}
