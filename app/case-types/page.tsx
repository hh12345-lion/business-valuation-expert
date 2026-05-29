import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { CASE_TYPES } from "@/lib/case-types-data";
import { CASE_TYPES_HUB_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Types Requiring a Business Valuation Expert Witness | UK Guide",
  description:
    "Which UK legal cases need a business valuation expert witness? Shareholder disputes, divorce, insolvency, commercial litigation, tax tribunals, and more explained.",
  path: "/case-types",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Case Types", path: "/case-types" },
];

export default function CaseTypesHubPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Case Types Requiring a Business Valuation Expert Witness
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80">
          UK litigation and family proceedings where company value determines
          outcome - from S994 petitions to financial remedy and insolvency.
        </p>
      </PageHero>

      <ContentSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {CASE_TYPES.map((c) => (
            <Link
              key={c.slug}
              href={`/case-types/${c.slug}`}
              className="rounded-lg border border-border bg-white p-6 shadow-card transition hover:border-green/40 min-h-[44px]"
            >
              <h2 className="text-lg font-semibold text-charcoal">{c.hubLabel}</h2>
              <p className="mt-2 text-sm text-foreground line-clamp-3">
                {c.paragraphs[0]}
              </p>
            </Link>
          ))}
        </div>
        <ContentClusterNav links={CASE_TYPES_HUB_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
