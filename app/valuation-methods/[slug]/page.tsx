import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageLayout } from "@/components/DetailPageLayout";
import {
  getValuationMethod,
  VALUATION_METHOD_SLUGS,
} from "@/lib/valuation-methods-data";
import { VALUATION_METHODS_CLUSTER } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return VALUATION_METHOD_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getValuationMethod(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: page.pageTitle,
    description: page.metaDescription,
    path: `/valuation-methods/${slug}`,
  });
}

export default async function ValuationMethodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getValuationMethod(slug);
  if (!page) notFound();

  return (
    <DetailPageLayout
      page={page}
      hubName="Valuation Methods"
      hubHref="/valuation-methods"
      clusterLinks={VALUATION_METHODS_CLUSTER}
    />
  );
}
