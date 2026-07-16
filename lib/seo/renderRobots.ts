import { SITE_URL } from "@/lib/site";

/**
 * Paths crawlers should not treat as indexable HTML.
 * Fixed template - not derived from URL inventory (see docs/SITEMAP-AND-ROBOTS.md).
 */
export const ROBOTS_DISALLOW_PATHS = [
  "/admin/",
  "/api/",
  "/private/",
  "/_next/",
  "/thank-you",
] as const;

function isStagingEnv(): boolean {
  return (
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_STAGING === "true"
  );
}

/** Production robots.txt (Allow: / + disallow list + sitemap). */
export function renderRobotsTxt(): string {
  if (isStagingEnv()) {
    return ["User-agent: *", "Disallow: /", ""].join("\n");
  }

  const origin = SITE_URL.replace(/\/$/, "");

  return [
    "User-agent: *",
    "Allow: /",
    "",
    ...ROBOTS_DISALLOW_PATHS.map((path) => `Disallow: ${path}`),
    "",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");
}
