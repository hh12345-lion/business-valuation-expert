import {
  caseTypeSlugs,
  guideSlugs,
  sectorSlugs,
  SITE_URL,
} from "@/lib/site";
import { serviceSlugs } from "@/lib/services-data";
import { VALUATION_METHOD_SLUGS } from "@/lib/valuation-methods-data";

/** Indexable static/hub paths (sitemap + SEO verify). */
export const SITEMAP_STATIC_PATHS = [
  "/",
  "/what-is-a-business-valuation-expert-witness",
  "/services",
  "/valuation-methods",
  "/case-types",
  "/sectors",
  "/qualifications",
  "/how-to-instruct",
  "/fees",
  "/faq",
  "/guides",
  "/experts",
  "/glossary",
] as const;

/** Routable but excluded from sitemap (per SEO-ARCHITECTURE §9). */
export const NON_SITEMAP_PATHS = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
  "/cookies",
] as const;

export const APP_STATIC_PATHS = [
  ...SITEMAP_STATIC_PATHS,
  ...NON_SITEMAP_PATHS,
] as const;

function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, "");
}

function toAbsolutePath(pathname: string): string {
  const origin = normalizeOrigin(SITE_URL);
  if (pathname === "/") return `${origin}/`;
  return `${origin}${pathname}`;
}

function uniqueSorted(paths: string[]): string[] {
  return [...new Set(paths)].sort((a, b) => a.localeCompare(b));
}

export type PublicUrlInventory = {
  sitemapPaths: string[];
  sitemapUrls: string[];
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const sitemapPaths = uniqueSorted([
    ...SITEMAP_STATIC_PATHS,
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...VALUATION_METHOD_SLUGS.map((slug) => `/valuation-methods/${slug}`),
    ...caseTypeSlugs.map((slug) => `/case-types/${slug}`),
    ...sectorSlugs.map((slug) => `/sectors/${slug}`),
    ...guideSlugs.map((slug) => `/guides/${slug}`),
  ]);

  const allPaths = uniqueSorted([...sitemapPaths, ...NON_SITEMAP_PATHS]);

  return {
    sitemapPaths,
    sitemapUrls: sitemapPaths.map(toAbsolutePath),
    allPaths,
    allUrls: allPaths.map(toAbsolutePath),
  };
}
