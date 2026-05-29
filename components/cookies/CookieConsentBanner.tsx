"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";

/**
 * Fixed bottom consent bar (no document flow shift / CLS).
 * Lion Group–aligned premium palette: charcoal base, green accent, gold edge.
 */
export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectNonEssential, openPreferences } =
    useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] motion-reduce:transform-none"
      aria-hidden={false}
    >
      <div className="pointer-events-auto mx-auto max-w-5xl px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4 sm:pb-6 animate-bve-cookie-in motion-reduce:animate-none">
        <div
          role="region"
          aria-label="Cookie consent"
          aria-live="polite"
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal text-white shadow-[0_-8px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-md"
        >
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-green to-gold"
            aria-hidden
          />
          <div className="p-5 sm:p-7 pt-6 sm:pt-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Privacy &amp; cookies
                </p>
                <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight sm:text-xl">
                  Your privacy, our standard
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
                  We use cookies to run this site securely, understand how it is
                  used when you allow it, and - only with your permission - support
                  relevant communications. You can change your mind anytime via{" "}
                  <strong className="font-medium text-white">Cookie settings</strong>{" "}
                  in the footer.
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
                  <span>GDPR · ePrivacy · CCPA-informed controls</span>
                  <span className="text-white/30" aria-hidden>
                    |
                  </span>
                  <Link
                    href="/cookies"
                    className="font-medium text-green hover:text-gold underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    Cookie Policy
                  </Link>
                  <span className="text-white/30" aria-hidden>
                    ·
                  </span>
                  <Link
                    href="/privacy"
                    className="font-medium text-green hover:text-gold underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap lg:min-w-[220px] lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="order-1 rounded-xl bg-green px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green/25 transition hover:bg-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold motion-reduce:transition-none sm:order-none"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  Reject non-essential
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="rounded-xl border border-gold/50 bg-gold/10 px-4 py-3 text-sm font-semibold text-gold transition hover:bg-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold motion-reduce:transition-none"
                >
                  Customise preferences
                </button>
              </div>
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-[11px] leading-snug text-white/45">
              Strictly necessary cookies are always active. Optional analytics,
              marketing, and preference cookies load only after you choose to allow
              them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
