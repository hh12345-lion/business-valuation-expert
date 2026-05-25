import type { MetadataRoute } from "next";
import { buildAppSitemap } from "@/lib/seo/buildSitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildAppSitemap();
}
