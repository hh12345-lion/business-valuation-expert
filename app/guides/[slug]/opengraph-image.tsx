import { notFound } from "next/navigation";
import { getGuide } from "@/lib/guides-data";
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgCard,
} from "@/lib/seo/ogImage";

export const alt = "Solicitor Guide | BusinessValuationExperts";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return renderOgCard({
    eyebrow: "Solicitor Guide",
    title: guide.hubLabel,
  });
}
