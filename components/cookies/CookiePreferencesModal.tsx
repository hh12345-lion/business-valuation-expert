"use client";

import Link from "next/link";
import { startTransition, useEffect, useRef, useState } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";
import {
  REJECT_NON_ESSENTIAL_PREFERENCES,
  type CookiePreferences,
} from "@/lib/cookies/types";

function CategoryRow({
  id,
  title,
  body,
  checked,
  disabled,
  onToggle,
}: {
  id: string;
  title: string;
  body: string;
  checked: boolean;
  disabled?: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-muted p-4 sm:p-5">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-charcoal" id={`${id}-label`}>
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-foreground/80">{body}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        disabled={disabled}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!disabled) onToggle();
          }
        }}
        className={`relative h-8 w-14 shrink-0 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold motion-reduce:transition-none ${
          checked ? "bg-green" : "bg-charcoal/20"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <span
          className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition motion-reduce:transition-none ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
          aria-hidden
        />
      </button>
    </div>
  );
}

/**
 * Modal dialog for granular cookie choices. Uses native `<dialog>` for focus
 * management, Escape handling, and accessible modal semantics.
 */
export function CookiePreferencesModal() {
  const { hydrated, record, modalOpen, closeModal, saveCustomPreferences } =
    useCookieConsent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [draft, setDraft] = useState<CookiePreferences>(
    REJECT_NON_ESSENTIAL_PREFERENCES,
  );

  useEffect(() => {
    if (!modalOpen) return;
    startTransition(() => {
      setDraft(record?.preferences ?? REJECT_NON_ESSENTIAL_PREFERENCES);
    });
  }, [modalOpen, record]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el || !hydrated) return;
    if (modalOpen) {
      if (!el.open) el.showModal();
      requestAnimationFrame(() => {
        titleRef.current?.focus();
      });
    } else if (el.open) {
      el.close();
    }
  }, [modalOpen, hydrated]);

  const setCat = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cookie-modal-title"
      className="w-[min(calc(100vw-1.5rem),26rem)] max-h-[min(90dvh,40rem)] overflow-hidden rounded-2xl border-0 bg-white p-0 text-charcoal shadow-2xl ring-1 ring-charcoal/10 [&::backdrop]:bg-[rgba(28,43,58,0.55)]"
      onClose={closeModal}
    >
      <div className="flex max-h-[min(90dvh,40rem)] flex-col">
        <div className="border-b border-white/10 bg-charcoal px-5 py-4 text-white sm:px-6">
          <h2
            ref={titleRef}
            id="cookie-modal-title"
            tabIndex={-1}
            className="text-lg font-bold tracking-tight outline-none"
          >
            Cookie preferences
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Choose which optional categories we may use. Necessary cookies are
            always on because the site cannot function without them.
          </p>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4 sm:px-6">
          <CategoryRow
            id="cat-necessary"
            title="Necessary cookies"
            body="Security, load balancing, consent storage, and core navigation. Required for the service."
            checked
            disabled
            onToggle={() => {}}
          />
          <CategoryRow
            id="cat-analytics"
            title="Analytics"
            body="Helps us understand how the site is used (e.g. Google Analytics, Hotjar) so we can improve content and performance."
            checked={draft.analytics}
            onToggle={() => setCat("analytics", !draft.analytics)}
          />
          <CategoryRow
            id="cat-marketing"
            title="Marketing"
            body="Used to measure ad effectiveness and remarketing where applicable (e.g. Meta Pixel, LinkedIn Insight, tags via GTM)."
            checked={draft.marketing}
            onToggle={() => setCat("marketing", !draft.marketing)}
          />
          <CategoryRow
            id="cat-preferences"
            title="Preferences"
            body="Remembers choices such as region or UI preferences when we add features that rely on them."
            checked={draft.preferences}
            onToggle={() => setCat("preferences", !draft.preferences)}
          />
        </div>

        <div className="border-t border-border bg-white px-5 py-4 sm:px-6">
          <p className="text-xs leading-relaxed text-foreground/70">
            You can change your mind anytime via{" "}
            <strong>Cookie settings</strong> in the footer. See our{" "}
            <Link
              href="/cookies"
              className="font-medium text-charcoal underline-offset-2 hover:underline"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-charcoal underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-charcoal transition hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => saveCustomPreferences(draft)}
              className="rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-charcoal shadow-sm transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
