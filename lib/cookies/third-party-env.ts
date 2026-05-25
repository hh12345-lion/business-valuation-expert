/**
 * Optional public env IDs for third-party tags. Scripts only mount when the
 * corresponding env is set AND the user has granted the right category.
 */
export const thirdPartyEnv = {
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "",
  hotjarSiteId: process.env.NEXT_PUBLIC_HOTJAR_SITE_ID ?? "",
  hotjarSv: process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION ?? "6",
} as const;
