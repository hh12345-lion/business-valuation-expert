"use client";

import { useCookieConsent } from "@/components/cookies/CookieConsentContext";

/** Footer control to reopen the cookie preferences dialog at any time. */
export function CookieSettingsFooterLink() {
  const { openPreferences } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={openPreferences}
      className="underline hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      Cookie settings
    </button>
  );
}
