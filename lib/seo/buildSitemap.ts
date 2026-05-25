import type { MetadataRoute } from "next";
import { buildPublicUrlInventory } from "@/lib/seo/publicUrlInventory";
import { getSitemapMetaForPath } from "@/lib/seo/sitemapHeuristics";
import { SITE_URL } from "@/lib/site";

export function buildAppSitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const now = new Date();
  const { sitemapPaths } = buildPublicUrlInventory();

  return sitemapPaths.map((path) => {
    const { changeFrequency, priority } = getSitemapMetaForPath(path);
    const url = path === "/" ? `${base}/` : `${base}${path}`;
    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}
