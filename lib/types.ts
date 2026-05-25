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
  sectorMultiples?: SectorMultipleRow[];
};

export type GuidePage = {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  hubLabel: string;
  h1: string;
  aboutServiceId: string;
  sections: { h2: string; paragraphs: string[]; h3?: { title: string; paragraphs: string[] }[] }[];
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
