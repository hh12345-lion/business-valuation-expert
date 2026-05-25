import { SITE_NAME, SITE_URL } from "./site";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  PROFESSIONAL_SERVICE_ID,
  organizationSchema,
} from "./schema";
import { SERVICES } from "./services-data";

export const homepageJsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema(),
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": PROFESSIONAL_SERVICE_ID,
      name: "Business Valuation Expert Witness",
      url: SITE_URL,
      serviceType: "Business Valuation Expert Witness",
      provider: { "@id": ORGANIZATION_ID },
      areaServed: "United Kingdom",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Valuation Expert Witness Services",
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/services#${s.anchor}`,
            name: s.title,
            description: s.summary,
            provider: { "@id": ORGANIZATION_ID },
          },
        })),
      },
    },
  ],
};
