import { notFound } from "next/navigation";
import { getService } from "@/lib/services-data";
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgCard,
} from "@/lib/seo/ogImage";

export const alt = "Service | BusinessValuationExperts";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return renderOgCard({
    eyebrow: "Service",
    title: service.title,
  });
}
