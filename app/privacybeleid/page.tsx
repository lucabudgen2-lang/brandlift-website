import type { Metadata } from "next";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Het privacybeleid van Brandlift: welke gegevens we verzamelen via deze website, waarom we dat doen en welke rechten je daarbij hebt volgens de AVG.",
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
