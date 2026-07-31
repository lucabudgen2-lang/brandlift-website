import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { contactSchema } from "@/lib/schema";
import { GroeigesprekForm } from "@/components/forms/GroeigesprekForm";

export const metadata = buildPageMetadata({
  title: "Contact - plan een gratis groeigesprek",
  description:
    "Plan een gratis groeigesprek van 30 minuten. Geen salespitch - we kijken waar je nu staat en waar aanvragen blijven liggen.",
  path: "/contact",
});

export default function Page() {
  const schema = contactSchema({
    name: "Contact",
    description: metadata.description as string,
    path: "/contact",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Gratis groeigesprek"
      title="Plan een gratis groeigesprek"
      intro="30 minuten. Geen salespitch. We kijken waar je nu staat, waar aanvragen blijven liggen en welke aanpak logisch is."
    >
      <div className="max-w-xl">
        <GroeigesprekForm />
      </div>
    </PageStub>
    </>
  );
}
