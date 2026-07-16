import { CASE_TYPES } from "@/lib/case-types-data";
import { GUIDES } from "@/lib/guides-data";
import { SECTORS } from "@/lib/sectors-data";
import { SERVICES } from "@/lib/services-data";
import { VALUATION_METHODS } from "@/lib/valuation-methods-data";
import { SITEMAP_STATIC_PATHS } from "@/lib/seo/publicUrlInventory";

/**
 * Stable hub/static lastmod. Bump deliberately when hub copy changes —
 * never set from Date.now() at generate time.
 */
export const HUB_UPDATED_AT = "2026-07-16";

const detailDates = new Map<string, string>([
  ...SERVICES.map((s) => [`/services/${s.anchor}`, s.updatedAt] as const),
  ...VALUATION_METHODS.map(
    (m) => [`/valuation-methods/${m.slug}`, m.updatedAt] as const,
  ),
  ...CASE_TYPES.map((c) => [`/case-types/${c.slug}`, c.updatedAt] as const),
  ...SECTORS.map((s) => [`/sectors/${s.slug}`, s.updatedAt] as const),
  ...GUIDES.map((g) => [`/guides/${g.slug}`, g.updatedAt] as const),
]);

const hubDates = new Map<string, string>(
  SITEMAP_STATIC_PATHS.map((path) => [path, HUB_UPDATED_AT]),
);

/** Editorial lastmod for sitemap paths. Undefined only if path is unknown. */
export function getLastmodForPath(pathname: string): string {
  return detailDates.get(pathname) ?? hubDates.get(pathname) ?? HUB_UPDATED_AT;
}
