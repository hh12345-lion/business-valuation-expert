import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/DetailPageLayout";
import { getSector } from "@/lib/sectors-data";
import { getSectorClusterLinks } from "@/lib/seo/clusterLinks";
import { sectorSlugs } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return sectorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: page.pageTitle,
    description: page.metaDescription,
    path: `/sectors/${slug}`,
  });
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) notFound();

  return (
    <DetailPageLayout
      page={page}
      hubName="Sectors"
      hubHref="/sectors"
      clusterLinks={getSectorClusterLinks(slug)}
    />
  );
}
