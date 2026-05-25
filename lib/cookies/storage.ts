import {
  CONSENT_MAX_AGE_MS,
  CONSENT_STORAGE_KEY,
  CONSENT_STORAGE_VERSION,
  type CookiePreferences,
  type StoredConsentRecord,
} from "./types";

function isCookiePreferences(v: unknown): v is CookiePreferences {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    o.necessary === true &&
    typeof o.analytics === "boolean" &&
    typeof o.marketing === "boolean" &&
    typeof o.preferences === "boolean"
  );
}

function isStoredConsentRecord(v: unknown): v is StoredConsentRecord {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return (
    o.version === CONSENT_STORAGE_VERSION &&
    typeof o.updatedAt === "string" &&
    typeof o.expiresAt === "string" &&
    isCookiePreferences(o.preferences)
  );
}

/** Safe on server: returns null (no `window`). */
export function readStoredConsent(): StoredConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isStoredConsentRecord(parsed)) return null;
    if (Date.now() > new Date(parsed.expiresAt).getTime()) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeStoredConsent(preferences: CookiePreferences): void {
  if (typeof window === "undefined") return;
  const now = Date.now();
  const record: StoredConsentRecord = {
    version: CONSENT_STORAGE_VERSION,
    updatedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + CONSENT_MAX_AGE_MS).toISOString(),
    preferences: {
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      preferences: preferences.preferences,
    },
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
}

export function clearStoredConsent(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
}
