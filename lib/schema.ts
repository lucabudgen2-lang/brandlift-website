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
        telephone: site.phoneE164,
        logo: `${site.url}/brand/logo-lockup.png`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: site.phoneE164,
          email: site.email,
          areaServed: "NL",
          availableLanguage: ["nl", "en"],
        },
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
        telephone: site.phoneE164,
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

/* ── reusable node builders for content/commercial pages ── */

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/* AggregateRating + individual Review nodes — ONLY real reviews. */
export function reviewsAggregate(
  reviews: {
    rating: number;
    count: number;
    source: string;
    items: readonly { name: string; text: string; stars: number }[];
  },
  itemReviewed: Record<string, unknown> = { "@id": `${site.url}/#organization` },
) {
  return {
    ...itemReviewed,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.rating,
      reviewCount: reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.items.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.stars,
        bestRating: 5,
      },
      reviewBody: r.text,
      publisher: { "@type": "Organization", name: reviews.source },
    })),
  };
}

/* Service page: Service node + FAQPage + BreadcrumbList, areaServed a place. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  faqs?: readonly { q: string; a: string }[];
  crumbs: Crumb[];
  withReviews?: Parameters<typeof reviewsAggregate>[0];
}) {
  const service: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${site.url}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: opts.areaServed
      ? { "@type": "City", name: opts.areaServed }
      : { "@type": "Country", name: "Nederland" },
  };
  if (opts.withReviews) {
    const agg = reviewsAggregate(opts.withReviews, {});
    service.aggregateRating = agg.aggregateRating;
    service.review = agg.review;
  }
  const graph: Record<string, unknown>[] = [service, breadcrumbSchema(opts.crumbs)];
  if (opts.faqs && opts.faqs.length) graph.push(faqSchema(opts.faqs));
  return { "@context": "https://schema.org", "@graph": graph };
}

/* Case study: Article authored by Luca, with breadcrumbs. */
export function caseSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  crumbs: Crumb[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}${opts.path}#article`,
        headline: opts.headline,
        description: opts.description,
        image: `${site.url}${opts.image}`,
        datePublished: opts.datePublished,
        dateModified: opts.datePublished,
        author: { "@id": `${site.url}/#founder` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}${opts.path}`,
        inLanguage: "nl-NL",
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#founder`,
        name: site.founder,
        jobTitle: "Oprichter",
        worksFor: { "@id": `${site.url}/#organization` },
      },
      breadcrumbSchema(opts.crumbs),
    ],
  };
}
