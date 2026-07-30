import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Het privacybeleid van Brandlift.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacybeleid" },
};

export default function Page() {
  const schema = breadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Privacybeleid", path: "/privacybeleid" },
    ],
    "/privacybeleid",
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Juridisch"
      title="Privacybeleid"
      intro="Hier komt het privacybeleid van Brandlift, inclusief hoe we omgaan met gegevens uit het contactformulier."
    />
    </>
  );
}
