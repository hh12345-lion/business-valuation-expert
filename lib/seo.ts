import { SITE_URL } from "@/lib/site";

/**
 * Hostname for n8n `domain` field — no scheme, path, or `www.`
 * Source: NEXT_PUBLIC_SITE_URL, falling back to SITE_URL.
 */
export function getSiteDomain(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL).trim();
  if (!raw) return "";

  try {
    return new URL(raw).hostname.replace(/^www\./i, "");
  } catch {
    return raw
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0]
      .replace(/\/$/, "");
  }
}
