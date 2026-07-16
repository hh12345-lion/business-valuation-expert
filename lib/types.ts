export type FaqItem = { q: string; a: string };

export type ContentPage = {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  hubLabel: string;
  h1: string;
  paragraphs: string[];
  faq: FaqItem[];
  relatedLinks: { href: string; label: string }[];
  /** Editorial date for sitemap lastmod (YYYY-MM-DD). Update when copy changes. */
  updatedAt: string;
  sectorMultiples?: SectorMultipleRow[];
};

export type GuidePage = {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  hubLabel: string;
  h1: string;
  sections: {
    h2: string;
    paragraphs: string[];
    h3?: { title: string; paragraphs: string[] }[];
  }[];
  /** Editorial date for sitemap lastmod (YYYY-MM-DD). Update when copy changes. */
  updatedAt: string;
};

export type GlossaryTerm = {
  term: string;
  anchorId: string;
  definition: string;
  link?: { href: string; label: string };
};

export type SectorMultipleRow = {
  sector: string;
  typicalMultiple: string;
  notes: string;
};
