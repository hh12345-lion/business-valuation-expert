import type { Metadata } from "next";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { GlossaryClient } from "@/components/GlossaryClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { GLOSSARY_TERMS } from "@/lib/glossary-data";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { faqPageSchema, pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Expert Witness Glossary | Key UK Legal & Finance Terms",
  description:
    "Definitions of key business valuation and expert witness terms for UK litigation — from fair value to DCF, S994, FPR Part 25, and goodwill.",
  path: "/glossary",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: "/glossary" },
];

const glossaryFaq = GLOSSARY_TERMS.map((t) => ({
  q: t.term,
  a: t.definition,
}));

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          pageGraph(breadcrumbs, [faqPageSchema(glossaryFaq)]),
        ]}
      />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Expert Witness Glossary
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Key UK legal and finance terms for solicitors instructing valuation
          experts — definition-first, linked to case types and methodology guides.
        </p>
      </PageHero>

      <ContentSection>
        <GlossaryClient terms={GLOSSARY_TERMS} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
