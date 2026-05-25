import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { renderRobotsTxt } from "../lib/seo/renderRobots";
import { renderSitemapXml } from "../lib/seo/renderSitemap";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

function main(): void {
  const inventory = buildPublicUrlInventory();

  mkdirSync(PUBLIC, { recursive: true });

  const sitemap = renderSitemapXml();
  const robots = renderRobotsTxt();

  writeFileSync(join(PUBLIC, "sitemap.xml"), sitemap, "utf8");
  writeFileSync(join(PUBLIC, "robots.txt"), robots, "utf8");

  console.log(
    `Wrote public/sitemap.xml (${inventory.sitemapUrls.length} URLs) and public/robots.txt`,
  );
}

main();
