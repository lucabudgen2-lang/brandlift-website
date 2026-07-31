import { buildPageMetadata } from "@/lib/metadata";
import { PageStub } from "@/components/layout/PageStub";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Voorbeelden van websites die we bouwden",
  description:
    "Een selectie van strategische websites die we bouwden voor vakbedrijven en servicebedrijven - met lokale SEO en conversie als uitgangspunt.",
  path: "/voorbeelden",
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
      { name: "Voorbeelden", path: "/voorbeelden" },
    ],
    "/voorbeelden",
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PageStub
      eyebrow="Werk"
      title="Voorbeelden van websites die we bouwden"
      intro="Een selectie van strategische websites die we voor vakbedrijven en servicebedrijven maakten - gebouwd om gevonden te worden en aanvragen op te leveren."
    />
    </>
  );
}
