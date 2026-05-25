import type { Metadata } from "next";
import Link from "next/link";
import { ContentClusterNav } from "@/components/ContentClusterNav";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoBreadcrumbs } from "@/components/SeoBreadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { SECTORS } from "@/lib/sectors-data";
import { SECTORS_HUB_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { pageGraph } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Business Valuation Expert Witnesses by Sector | UK Industry Specialists",
  description:
    "Sector-specialist business valuation expert witnesses for UK litigation. Technology, professional practices, retail, property, manufacturing, and more.",
  path: "/sectors",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Sectors", path: "/sectors" },
];

export default function SectorsHubPage() {
  return (
    <>
      <JsonLd data={pageGraph(breadcrumbs)} />
      <PageHero>
        <SeoBreadcrumbs
          includeJsonLd={false}
          items={breadcrumbs.map((b) => ({ name: b.name, href: b.path }))}
        />
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Business Valuation Expert Witnesses by Sector
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/80">
          Valuation methodology and comparable multiples differ significantly
          between sectors. Our experts include sector specialists for UK
          litigation and family proceedings.
        </p>
      </PageHero>

      <ContentSection>
        <div className="grid gap-4 sm:grid-cols-2">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              href={`/sectors/${s.slug}`}
              className="rounded-lg border border-border bg-white p-6 shadow-card transition hover:border-green/40"
            >
              <h2 className="text-lg font-semibold text-charcoal">{s.hubLabel}</h2>
              <p className="mt-2 text-sm text-foreground line-clamp-3">
                {s.paragraphs[0]}
              </p>
            </Link>
          ))}
        </div>
        <ContentClusterNav links={SECTORS_HUB_CLUSTER} />
      </ContentSection>

      <PageBottomCta />
    </>
  );
}
