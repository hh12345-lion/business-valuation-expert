import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { buildAppSitemap } from "../lib/seo/buildSitemap";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { renderRobotsTxt } from "../lib/seo/renderRobots";
import { SITE_URL } from "../lib/site";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function readLocsFromSitemap(xml: string): string[] {
  const out: string[] = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    out.push(m[1]!);
  }
  return out;
}

function pathnameFromLoc(loc: string): string {
  const u = new URL(loc);
  return u.pathname === "" ? "/" : u.pathname;
}

function sorted<T extends string>(arr: T[]): T[] {
  return [...arr].sort((a, b) => a.localeCompare(b));
}

function verifyPublicSitemap(): void {
  const sitemapPath = join(ROOT, "public", "sitemap.xml");
  let xml: string;
  try {
    xml = readFileSync(sitemapPath, "utf8");
  } catch {
    console.error("Missing public/sitemap.xml — run: npm run seo:generate");
    process.exit(1);
    return;
  }

  const fromFile = sorted(readLocsFromSitemap(xml));
  const expected = sorted(buildPublicUrlInventory().sitemapUrls);

  const missing = expected.filter((u) => !fromFile.includes(u));
  const extra = fromFile.filter((u) => !expected.includes(u));

  if (missing.length || extra.length) {
    console.error(
      "public/sitemap.xml <loc> entries do not match buildPublicUrlInventory().",
    );
    if (missing.length) {
      console.error("Missing from sitemap:", missing.join("\n"));
    }
    if (extra.length) {
      console.error("Extra in sitemap:", extra.join("\n"));
    }
    process.exit(1);
  }
}

function verifyPublicRobots(): void {
  const robotsPath = join(ROOT, "public", "robots.txt");
  let onDisk: string;
  try {
    onDisk = readFileSync(robotsPath, "utf8");
  } catch {
    console.error("Missing public/robots.txt — run: npm run seo:generate");
    process.exit(1);
    return;
  }

  const expected = renderRobotsTxt();
  if (onDisk !== expected) {
    console.error(
      "public/robots.txt is out of date — run: npm run seo:generate",
    );
    process.exit(1);
  }

  const origin = SITE_URL.replace(/\/$/, "");
  if (!onDisk.includes(`Sitemap: ${origin}/sitemap.xml`)) {
    console.error(`robots.txt must declare Sitemap: ${origin}/sitemap.xml`);
    process.exit(1);
  }
}

/** Next.js app/sitemap.ts should match the same URL set as the committed XML file. */
function verifyNextSitemapRoute(): void {
  const { sitemapPaths } = buildPublicUrlInventory();
  const fromNext = new Set(
    buildAppSitemap().map((e) => pathnameFromLoc(e.url)),
  );
  const expected = new Set(sitemapPaths);

  const missing = [...expected].filter((p) => !fromNext.has(p));
  const extra = [...fromNext].filter((p) => !expected.has(p));

  if (missing.length || extra.length) {
    console.error("app/sitemap.ts does not match buildPublicUrlInventory().");
    if (missing.length) console.error("Missing:", missing.join("\n"));
    if (extra.length) console.error("Extra:", extra.join("\n"));
    process.exit(1);
  }
}

function main(): void {
  verifyPublicSitemap();
  verifyPublicRobots();
  verifyNextSitemapRoute();
  console.log("seo:verify OK — public/sitemap.xml, robots.txt, and app/sitemap.ts aligned.");
}

main();
