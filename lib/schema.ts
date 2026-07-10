import { site } from "./site";

/* JSON-LD graph: Organization + LocalBusiness + WebSite.
   Real NAP data baked in; pages add Service/FAQ/Article nodes as needed. */
export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        logo: `${site.url}/brand/logo-lockup.png`,
        founder: { "@type": "Person", name: site.founder },
        description: site.oneLiner,
        identifier: {
          "@type": "PropertyValue",
          name: "KvK",
          value: site.kvk,
        },
        sameAs: [site.socials.instagram, site.socials.facebook],
        areaServed: { "@type": "Country", name: "Nederland" },
        knowsAbout: [
          "Website laten maken",
          "Lokale SEO",
          "Branding",
          "Conversieoptimalisatie",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        url: site.url,
        email: site.email,
        image: `${site.url}/brand/logo-lockup.png`,
        priceRange: "€€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.street,
          postalCode: site.postalCode,
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: site.hours.open,
          closes: site.hours.close,
        },
        sameAs: [site.socials.instagram, site.socials.facebook],
        areaServed: { "@type": "Country", name: "Nederland" },
        parentOrganization: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "nl-NL",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

/* AboutPage + full Person node for the founder — the E-E-A-T core:
   a real, named, credentialed person behind the work. */
export function aboutSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${site.url}/over-brandlift#webpage`,
        url: `${site.url}/over-brandlift`,
        name: "Over Brandlift - het bureau achter je website",
        inLanguage: "nl-NL",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        mainEntity: { "@id": `${site.url}/#founder` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#founder`,
        name: site.founder,
        jobTitle: "Oprichter",
        worksFor: { "@id": `${site.url}/#organization` },
        image: `${site.url}/images/portrait-luca.png`,
        email: site.email,
        knowsAbout: [
          "Webdesign",
          "Lokale SEO",
          "Branding",
          "Conversie-optimalisatie",
          "Fotografie",
          "Webdevelopment",
        ],
        sameAs: [site.socials.instagram, site.socials.facebook],
        workLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressCountry: site.country,
          },
        },
      },
    ],
  };
}
