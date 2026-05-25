import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/DetailPageLayout";
import { getCaseType } from "@/lib/case-types-data";
import { getCaseTypeClusterLinks } from "@/lib/seo/clusterLinks";
import { caseTypeSlugs } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return caseTypeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: page.pageTitle,
    description: page.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) notFound();

  return (
    <DetailPageLayout
      page={page}
      hubName="Case Types"
      hubHref="/case-types"
      clusterLinks={getCaseTypeClusterLinks(slug)}
    />
  );
}
