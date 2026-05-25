"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";
import { syncThirdPartyTags } from "@/lib/cookies/tag-loader";

/**
 * Gates all optional measurement / advertising scripts until consent exists.
 * Re-runs when preferences change so Consent Mode updates apply immediately.
 */
export function ConditionalThirdPartyScripts() {
  const { hydrated, preferences } = useCookieConsent();

  useEffect(() => {
    if (!hydrated || !preferences) return;
    syncThirdPartyTags(preferences);
  }, [hydrated, preferences]);

  return null;
}
