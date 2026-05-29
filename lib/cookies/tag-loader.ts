import type { CookiePreferences } from "./types";
import { thirdPartyEnv } from "./third-party-env";

/** Consent Mode v2 keys used with `gtag('consent', ...)`. */
function consentParamsFromPreferences(p: CookiePreferences) {
  return {
    analytics_storage: p.analytics ? ("granted" as const) : ("denied" as const),
    ad_storage: p.marketing ? ("granted" as const) : ("denied" as const),
    ad_user_data: p.marketing ? ("granted" as const) : ("denied" as const),
    ad_personalization: p.marketing ? ("granted" as const) : ("denied" as const),
    personalization_storage: p.preferences
      ? ("granted" as const)
      : ("denied" as const),
    functionality_storage: "granted" as const,
    security_storage: "granted" as const,
  };
}

/**
 * If gtag is already on the page, push a Consent Mode `update` so measurement
 * stops immediately when the user revokes categories (no full reload).
 */
export function pushGoogleConsentUpdate(p: CookiePreferences): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", consentParamsFromPreferences(p));
}

/**
 * Injects GA4 + Consent Mode defaults, then loads `gtag/js`. Call only when
 * `p.analytics` is true and `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
 */
export function mountGoogleAnalytics(gaId: string, p: CookiePreferences): void {
  if (typeof document === "undefined") return;
  if (document.querySelector('script[data-bve="ga4-src"]')) {
    pushGoogleConsentUpdate(p);
    window.gtag?.("config", gaId, { anonymize_ip: true });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  window.gtag("consent", "update", consentParamsFromPreferences(p));
  window.gtag("js", new Date());

  const s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-bve", "ga4-src");
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  s.onload = () => {
    window.gtag?.("config", gaId, { anonymize_ip: true });
  };
  document.head.appendChild(s);
}

/** Google Tag Manager container - often used for marketing + analytics tags. */
export function mountGtm(gtmId: string): void {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[data-bve="gtm-${gtmId}"]`)) return;
  if (document.querySelector(`[data-bve="gtm-ns-${gtmId}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-bve", `gtm-${gtmId}`);
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  document.head.appendChild(s);

  const nos = document.createElement("noscript");
  nos.setAttribute("data-bve", `gtm-ns-${gtmId}`);
  nos.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`;
  document.body.insertBefore(nos, document.body.firstChild);
}

export function mountMetaPixel(pixelId: string): void {
  if (typeof document === "undefined") return;
  if (document.querySelector('script[data-bve="meta-pixel"]')) return;

  const script = document.createElement("script");
  script.setAttribute("data-bve", "meta-pixel");
  script.textContent = `
(function(f,b,e,v,n,t,s){
  if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
})(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${JSON.stringify(pixelId)});
fbq('track', 'PageView');
`;
  document.head.appendChild(script);
}

export function mountLinkedInInsight(partnerId: string): void {
  if (typeof document === "undefined") return;
  if (document.querySelector('script[data-bve="linkedin-insight"]')) return;

  window._linkedin_partner_id = partnerId;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  if (!window._linkedin_data_partner_ids.includes(partnerId)) {
    window._linkedin_data_partner_ids.push(partnerId);
  }

  const s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-bve", "linkedin-insight");
  s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  document.head.appendChild(s);
}

export function mountHotjar(siteId: string, hjsv: string): void {
  if (typeof document === "undefined") return;
  if (document.querySelector('script[data-bve="hotjar"]')) return;

  const hjid = Number(siteId);
  if (Number.isNaN(hjid) || hjid <= 0) return;

  const sv = Number(hjsv) || 6;
  const w = window as Window & {
    hj?: (...a: unknown[]) => void;
    _hjSettings?: { hjid: number; hjsv: number };
  };
  type HjStub = ((...args: unknown[]) => void) & { q: unknown[] };
  const hjStub: HjStub = Object.assign(
    (...args: unknown[]) => {
      hjStub.q.push(args);
    },
    { q: [] as unknown[] },
  );
  w.hj = w.hj || hjStub;
  w._hjSettings = { hjid, hjsv: sv };

  const r = document.createElement("script");
  r.async = true;
  r.setAttribute("data-bve", "hotjar");
  r.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${sv}`;
  document.head.appendChild(r);
}

/**
 * Mounts all configured third-party tags according to preferences and env.
 * Does not load anything until this runs (post-consent).
 */
export function syncThirdPartyTags(p: CookiePreferences): void {
  const {
    gaId,
    gtmId,
    metaPixelId,
    linkedInPartnerId,
    hotjarSiteId,
    hotjarSv,
  } = thirdPartyEnv;

  if (gaId && p.analytics) {
    mountGoogleAnalytics(gaId, p);
  } else if (gaId) {
    pushGoogleConsentUpdate(p);
  }

  if (gtmId && (p.analytics || p.marketing)) {
    mountGtm(gtmId);
  }

  if (metaPixelId && p.marketing) {
    mountMetaPixel(metaPixelId);
  }

  if (linkedInPartnerId && p.marketing) {
    mountLinkedInInsight(linkedInPartnerId);
  }

  if (hotjarSiteId && p.analytics) {
    mountHotjar(hotjarSiteId, hotjarSv);
  }
}
