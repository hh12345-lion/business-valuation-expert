"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ACCEPT_ALL_PREFERENCES,
  REJECT_NON_ESSENTIAL_PREFERENCES,
  type CookiePreferences,
  type StoredConsentRecord,
} from "@/lib/cookies/types";
import {
  clearStoredConsent,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/cookies/storage";

export const COOKIE_CONSENT_CHANGED_EVENT =
  "businessvaluationexperts:cookie-consent-changed";

type CookieConsentContextValue = {
  /** True after client has read localStorage (avoids hydration mismatch). */
  hydrated: boolean;
  /** Null until the user has saved a valid choice (or storage expired). */
  record: StoredConsentRecord | null;
  /** Derived: current preferences for gating scripts; null if no decision yet. */
  preferences: CookiePreferences | null;
  /** First visit: show the banner until the user acts. */
  showBanner: boolean;
  modalOpen: boolean;
  openPreferences: () => void;
  closeModal: () => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  saveCustomPreferences: (prefs: CookiePreferences) => void;
  resetConsent: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);
  const [record, setRecord] = useState<StoredConsentRecord | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setRecord(readStoredConsent());
      setHydrated(true);
    });
  }, []);

  const dispatchChanged = useCallback(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGED_EVENT));
    }
  }, []);

  const persist = useCallback(
    (preferences: CookiePreferences) => {
      writeStoredConsent(preferences);
      setRecord(readStoredConsent());
      dispatchChanged();
    },
    [dispatchChanged],
  );

  const acceptAll = useCallback(() => {
    persist(ACCEPT_ALL_PREFERENCES);
    setModalOpen(false);
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist(REJECT_NON_ESSENTIAL_PREFERENCES);
    setModalOpen(false);
  }, [persist]);

  const saveCustomPreferences = useCallback(
    (prefs: CookiePreferences) => {
      persist({
        necessary: true,
        analytics: prefs.analytics,
        marketing: prefs.marketing,
        preferences: prefs.preferences,
      });
      setModalOpen(false);
    },
    [persist],
  );

  const openPreferences = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const resetConsent = useCallback(() => {
    clearStoredConsent();
    setRecord(null);
    dispatchChanged();
  }, [dispatchChanged]);

  const preferences = record?.preferences ?? null;
  const showBanner = hydrated && record === null;

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      hydrated,
      record,
      preferences,
      showBanner,
      modalOpen,
      openPreferences,
      closeModal,
      acceptAll,
      rejectNonEssential,
      saveCustomPreferences,
      resetConsent,
    }),
    [
      hydrated,
      record,
      preferences,
      showBanner,
      modalOpen,
      openPreferences,
      closeModal,
      acceptAll,
      rejectNonEssential,
      saveCustomPreferences,
      resetConsent,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
