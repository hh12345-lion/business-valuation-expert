"use client";

import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentContext";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";
import { ConditionalThirdPartyScripts } from "@/components/cookies/ConditionalThirdPartyScripts";

/**
 * Client boundary for CMP: wraps the app shell so footer links can open the
 * preferences dialog and third-party tags respect stored consent.
 */
export function CookieConsentRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieConsentBanner />
      <CookiePreferencesModal />
      <ConditionalThirdPartyScripts />
    </CookieConsentProvider>
  );
}
