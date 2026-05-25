import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const isStaging =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_STAGING === "true";

export default function robots(): MetadataRoute.Robots {
  if (isStaging) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
