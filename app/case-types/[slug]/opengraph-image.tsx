import { notFound } from "next/navigation";
import { getCaseType } from "@/lib/case-types-data";
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgCard,
} from "@/lib/seo/ogImage";

export const alt = "Case Type | BusinessValuationExperts";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) notFound();

  return renderOgCard({
    eyebrow: "Case Type",
    title: page.hubLabel,
  });
}
