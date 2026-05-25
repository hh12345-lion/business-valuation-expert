import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE_PATH = "/opengraph-image";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
};

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  robots,
}: PageSeoInput): Metadata {
  const pageUrl = absoluteUrl(path);
  const ogImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    robots: robots ?? { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} | Business Valuation Expert Witness UK`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
