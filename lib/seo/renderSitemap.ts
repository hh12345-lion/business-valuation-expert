import { buildPublicUrlInventory } from "@/lib/seo/publicUrlInventory";
import { getLastmodForPath } from "@/lib/seo/contentDates";
import { getSitemapMetaForPath } from "@/lib/seo/sitemapHeuristics";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Standard sitemaps.org XML from buildPublicUrlInventory() sitemap URLs only. */
export function renderSitemapXml(): string {
  const { sitemapPaths, sitemapUrls } = buildPublicUrlInventory();

  const body = sitemapUrls
    .map((loc, i) => {
      const path = sitemapPaths[i]!;
      const { changeFrequency, priority } = getSitemapMetaForPath(path);
      const lastmod = getLastmodForPath(path);
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changeFrequency}</changefreq>`,
        `    <priority>${priority.toFixed(2)}</priority>`,
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    "</urlset>",
    "",
  ].join("\n");
}
