import { SERVICES } from "@/lib/services-data";
import { SITE_EMAIL, SITE_NAME, SITE_URL, LINKEDIN_URL } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PROFESSIONAL_SERVICE_ID = `${SITE_URL}/#professional-service`;

export function organizationSchema(): object {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "England and Wales",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: [LINKEDIN_URL],
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPageSchema(faq: { q: string; a: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  aboutId: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    inLanguage: "en-GB",
    author: { "@type": "Organization", "@id": ORGANIZATION_ID },
    publisher: { "@type": "Organization", "@id": ORGANIZATION_ID },
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    about: { "@id": input.aboutId },
  };
}

export function webPageGraph(
  extra: object[],
  breadcrumbs?: { name: string; path: string }[],
): object {
  const graph: object[] = [organizationSchema(), ...extra];
  if (breadcrumbs?.length) {
    graph.push(breadcrumbSchema(breadcrumbs));
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function serviceId(fragment: string): string {
  return `${SITE_URL}/services#${fragment}`;
}

export function servicesPageGraph(): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "@id": serviceId(s.anchor),
        name: s.title,
        description: s.summary,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "United Kingdom",
        serviceType: s.title,
      })),
    ],
  };
}

/** Organization + BreadcrumbList for static/hub pages */
export function pageGraph(
  breadcrumbs: { name: string; path: string }[],
  extra: object[] = [],
): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      breadcrumbSchema(breadcrumbs),
      ...extra,
    ],
  };
}
