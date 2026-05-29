import Script from "next/script";

/**
 * Google Consent Mode v2 defaults - denied before hydration so no optional
 * tag may read cookies until the CMP grants categories (runs beforeInteractive).
 */
export function ConsentModeBootstrap() {
  return (
    <Script
      id="bve-consent-mode-default"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  personalization_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
`,
      }}
    />
  );
}
