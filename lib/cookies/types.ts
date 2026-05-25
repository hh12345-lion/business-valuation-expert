/**
 * Cookie / CMP types for GDPR, ePrivacy, and CCPA-style granular choice.
 * `necessary` is always true and cannot be disabled (strictly necessary cookies).
 */
export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

/** Persisted payload in localStorage (JSON). Bump `CONSENT_STORAGE_VERSION` when categories or semantics change. */
export type StoredConsentRecord = {
  version: number;
  /** ISO 8601 when the user last saved a choice */
  updatedAt: string;
  /** When consent expires and the banner should be shown again (ISO 8601) */
  expiresAt: string;
  preferences: CookiePreferences;
};

export const CONSENT_STORAGE_KEY = "businessvaluationexperts.cookieConsent";
export const CONSENT_STORAGE_VERSION = 1;

/** Default duration before re-prompting (12 months; common GDPR practice). */
export const CONSENT_MAX_AGE_MS = Math.round(365.25 * 24 * 60 * 60 * 1000);

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export const REJECT_NON_ESSENTIAL_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};
