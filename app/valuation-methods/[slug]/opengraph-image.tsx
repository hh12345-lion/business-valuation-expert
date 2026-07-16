import { notFound } from "next/navigation";
import { getValuationMethod } from "@/lib/valuation-methods-data";
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgCard,
} from "@/lib/seo/ogImage";

export const alt = "Valuation Method | BusinessValuationExperts";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getValuationMethod(slug);
  if (!page) notFound();

  return renderOgCard({
    eyebrow: "Valuation Method",
    title: page.hubLabel,
  });
}
