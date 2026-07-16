import { notFound } from "next/navigation";
import { getSector } from "@/lib/sectors-data";
import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgCard,
} from "@/lib/seo/ogImage";

export const alt = "Sector Specialist | BusinessValuationExperts";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSector(slug);
  if (!page) notFound();

  return renderOgCard({
    eyebrow: "Sector Specialist",
    title: page.hubLabel,
  });
}
