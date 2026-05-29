import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { GUIDES } from "@/lib/guides-data";
import { GUIDES_HUB_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Solicitor Guides: Business Valuation Expert Witnesses UK | Methods & Disputes",
  description:
    "In-depth guides for UK solicitors on business valuation expert witnesses - DCF methodology, shareholder disputes, matrimonial valuations, and more.",
  path: "/guides",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/guides" },
];

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Solicitor Guides: Business Valuation Expert Witnesses UK
        </h1>
      </PageHero>

      <ContentSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-lg border border-border bg-white p-6 shadow-card transition hover:border-green/40"
            >
              <h2 className="text-lg font-semibold text-charcoal">{g.hubLabel}</h2>
              <p className="mt-2 text-sm text-foreground">{g.metaDescription}</p>
            </Link>
          ))}
        </div>
        <ContentClusterNav links={GUIDES_HUB_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
