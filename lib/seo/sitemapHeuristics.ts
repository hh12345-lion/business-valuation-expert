/** Sitemap changefreq / priority — SEO-ARCHITECTURE §9 */
export type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapUrlMeta = {
  changeFrequency: ChangeFreq;
  priority: number;
};

const EXCLUDED = new Set([
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
]);

export function isSitemapPath(pathname: string): boolean {
  return !EXCLUDED.has(pathname);
}

export function getSitemapMetaForPath(pathname: string): SitemapUrlMeta {
  if (pathname === "/") {
    return { changeFrequency: "weekly", priority: 1.0 };
  }
  if (pathname === "/services") {
    return { changeFrequency: "monthly", priority: 0.95 };
  }
  if (pathname === "/valuation-methods") {
    return { changeFrequency: "monthly", priority: 0.93 };
  }
  if (pathname === "/case-types") {
    return { changeFrequency: "monthly", priority: 0.92 };
  }
  if (pathname.startsWith("/case-types/")) {
    return { changeFrequency: "monthly", priority: 0.88 };
  }
  if (pathname === "/sectors") {
    return { changeFrequency: "monthly", priority: 0.9 };
  }
  if (pathname.startsWith("/sectors/")) {
    return { changeFrequency: "monthly", priority: 0.86 };
  }
  if (pathname === "/what-is-a-business-valuation-expert-witness") {
    return { changeFrequency: "monthly", priority: 0.9 };
  }
  if (
    pathname === "/qualifications" ||
    pathname === "/how-to-instruct" ||
    pathname === "/fees"
  ) {
    return { changeFrequency: "monthly", priority: 0.88 };
  }
  if (pathname === "/faq" || pathname === "/guides") {
    return { changeFrequency: "monthly", priority: 0.87 };
  }
  if (pathname.startsWith("/guides/")) {
    return { changeFrequency: "monthly", priority: 0.8 };
  }
  if (pathname === "/experts") {
    return { changeFrequency: "monthly", priority: 0.8 };
  }
  if (pathname === "/glossary") {
    return { changeFrequency: "monthly", priority: 0.75 };
  }
  return { changeFrequency: "monthly", priority: 0.5 };
}
