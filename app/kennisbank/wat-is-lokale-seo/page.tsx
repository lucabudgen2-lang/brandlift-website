import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Wat is lokale SEO?",
  description:
    "Wat is lokale SEO en waarom begint lokale vindbaarheid bij je eigen website? Een heldere uitleg voor lokale bedrijven en dienstverleners.",
  path: "/kennisbank/wat-is-lokale-seo",
  noindex: true,
});

export default function Page() {
/* TODO: schema + indexering terugzetten zodra deze pagina echt is
   gebouwd. Zolang er alleen een stub staat, beschreef de CollectionPage/
   Article-markup inhoud die niet op de pagina stond - dat is precies wat
   een handmatige maatregel voor gestructureerde data uitlokt. */
  const schema = breadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Kennisbank", path: "/kennisbank" },
      { name: "Wat is lokale SEO?", path: "/kennisbank/wat-is-lokale-seo" },
    ],
    "/kennisbank/wat-is-lokale-seo",
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Kennisbank · Lokale SEO"
      title="Wat is lokale SEO?"
      intro="Hoe lokale vindbaarheid werkt, en waarom die begint bij je eigen website in plaats van alleen bij Google Maps."
    />
    </>
  );
}
