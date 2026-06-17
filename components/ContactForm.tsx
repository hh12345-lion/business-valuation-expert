"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  formatPhoneForLead,
  PHONE_COUNTRY_OPTIONS,
} from "@/lib/phone";
import { PUBLIC_SITE_URL, SITE_EMAIL } from "@/lib/site";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

/**
 * Contact intake: POST JSON to `/api/submit-lead` (fullName, email, phone).
 * Webhook forwards four keys to Lead_notification_url. Formspree fallback on 503.
 */
export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState("+44");

  const formspreeUrl = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : null;

  return (
    <form
      className="min-w-0 space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        setPending(true);

        const form = e.currentTarget;
        const fd = new FormData(form);

        const payload = {
          fullName: String(fd.get("full_name") ?? "").trim(),
          email: String(fd.get("email") ?? "").trim(),
          phone: formatPhoneForLead(
            String(fd.get("phone_country") ?? "+44"),
            String(fd.get("phone_national") ?? ""),
          ),
          lawFirm: String(fd.get("law_firm") ?? "").trim(),
          caseType: String(fd.get("case_type") ?? "").trim(),
          sector: String(fd.get("sector") ?? "").trim(),
          legalFramework: String(fd.get("legal_framework") ?? "").trim(),
          expertType: String(fd.get("expert_type") ?? "").trim(),
          turnover: String(fd.get("turnover") ?? "").trim(),
          deadline: String(fd.get("deadline") ?? "").trim(),
          caseDescription: String(fd.get("case_description") ?? "").trim(),
          urgency: String(fd.get("urgency") ?? "").trim(),
        };

        if (!payload.fullName || !payload.email) {
          setError("Please enter your full name and email.");
          setPending(false);
          return;
        }

        try {
          const apiRes = await fetch("/api/submit-lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (apiRes.ok) {
            router.push("/thank-you");
            return;
          }

          const errJson = (await apiRes.json().catch(() => null)) as {
            error?: string;
            message?: string;
          } | null;

          if (apiRes.status === 503 && formspreeUrl) {
            const fsBody = new FormData(form);
            fsBody.append(
              "_subject",
              "Business valuation expert witness instruction",
            );
            fsBody.append(
              "_redirect",
              `${PUBLIC_SITE_URL.replace(/\/$/, "")}/thank-you`,
            );
            if (payload.phone) fsBody.set("phone", payload.phone);

            const fsRes = await fetch(formspreeUrl, {
              method: "POST",
              body: fsBody,
              headers: { Accept: "application/json" },
            });
            if (fsRes.ok) {
              router.push("/thank-you");
              return;
            }
            setError(
              "Could not reach the lead webhook or Formspree. Please try again or email us directly.",
            );
            return;
          }

          if (
            errJson?.error === "WEBHOOK_MISSING" ||
            errJson?.error === "SHEETS_WRITE_FAILED"
          ) {
            setError(
              `Form submissions are not configured yet. Please email ${SITE_EMAIL} directly.`,
            );
          } else {
            setError(
              errJson?.message ||
                "Submission failed. Please try again or email us directly.",
            );
          }
        } catch {
          setError("Network error. Check your connection and try again.");
        } finally {
          setPending(false);
        }
      }}
    >
      {error ? (
        <div
          role="alert"
          className="rounded border border-red-200 bg-red-50 p-4 text-sm text-charcoal"
        >
          {error}
        </div>
      ) : null}

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium text-charcoal sm:col-span-1">
          Full Name *
          <input
            name="full_name"
            required
            autoComplete="name"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          />
        </label>
        <label className="block min-w-0 text-sm font-medium text-charcoal sm:col-span-1">
          Law Firm / Organisation (UK) *
          <input
            name="law_firm"
            required
            autoComplete="organization"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          />
        </label>
        <label className="block min-w-0 text-sm font-medium text-charcoal sm:col-span-1">
          Email *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          />
        </label>
        <div className="min-w-0 space-y-2 sm:col-span-1">
          <span className="block text-sm font-medium text-charcoal">Phone</span>
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
            <select
              name="phone_country"
              aria-label="Country calling code"
              value={phoneCountry}
              onChange={(ev) => setPhoneCountry(ev.target.value)}
              className="w-full min-h-[44px] shrink-0 rounded border border-border px-2 py-2 text-base text-foreground sm:max-w-[9rem]"
            >
              {PHONE_COUNTRY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <input
              name="phone_national"
              type="tel"
              autoComplete="tel-national"
              placeholder="National number"
              className="min-w-0 flex-1 min-h-[44px] rounded border border-border px-3 py-2 text-base text-foreground"
            />
          </div>
        </div>
      </div>

      <label className="block min-w-0 text-sm font-medium text-charcoal">
        Case Type
        <select
          name="case_type"
          className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
        >
          <option value="Shareholder Dispute (S994)">Shareholder Dispute (S994)</option>
          <option value="Divorce / Financial Remedy">Divorce / Financial Remedy</option>
          <option value="Partnership Dissolution">Partnership Dissolution</option>
          <option value="Commercial Litigation / M&A Dispute">
            Commercial Litigation / M&A Dispute
          </option>
          <option value="Insolvency / Administration">Insolvency / Administration</option>
          <option value="HMRC / Tax Tribunal">HMRC / Tax Tribunal</option>
          <option value="Professional Negligence">Professional Negligence</option>
          <option value="IP Valuation">IP Valuation</option>
          <option value="MBO Dispute">MBO Dispute</option>
          <option value="Compulsory Purchase">Compulsory Purchase</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="block min-w-0 text-sm font-medium text-charcoal">
        Sector
        <select
          name="sector"
          className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
        >
          <option value="Technology / SaaS">Technology / SaaS</option>
          <option value="Professional Practice">Professional Practice</option>
          <option value="Retail / Hospitality / Leisure">
            Retail / Hospitality / Leisure
          </option>
          <option value="Property Company">Property Company</option>
          <option value="Manufacturing / Distribution">
            Manufacturing / Distribution
          </option>
          <option value="Financial Services">Financial Services</option>
          <option value="Healthcare / Dental">Healthcare / Dental</option>
          <option value="Creative / Media">Creative / Media</option>
          <option value="Other / Multiple">Other / Multiple</option>
        </select>
      </label>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium text-charcoal">
          Legal framework
          <select
            name="legal_framework"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          >
            <option value="CPR Part 35 (civil)">CPR Part 35 (civil)</option>
            <option value="FPR Part 25 (family)">FPR Part 25 (family)</option>
            <option value="Arbitration">Arbitration</option>
            <option value="Tax Tribunal">Tax Tribunal</option>
            <option value="Not sure">Not sure</option>
          </select>
        </label>
        <label className="block min-w-0 text-sm font-medium text-charcoal">
          SJE or party-appointed
          <select
            name="expert_type"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          >
            <option value="SJE">SJE</option>
            <option value="Party-appointed">Party-appointed</option>
            <option value="Not decided">Not decided</option>
          </select>
        </label>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium text-charcoal">
          Business turnover range
          <select
            name="turnover"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          >
            <option value="Under £1M">Under £1M</option>
            <option value="£1M–£5M">£1M–£5M</option>
            <option value="£5M–£25M">£5M–£25M</option>
            <option value="£25M–£100M">£25M–£100M</option>
            <option value="Over £100M">Over £100M</option>
            <option value="Unknown">Unknown</option>
          </select>
        </label>
        <label className="block min-w-0 text-sm font-medium text-charcoal">
          Hearing / deadline date
          <input
            name="deadline"
            type="date"
            className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
          />
        </label>
      </div>

      <label className="block min-w-0 text-sm font-medium text-charcoal">
        Brief case description
        <textarea
          name="case_description"
          rows={5}
          className="mt-1 w-full max-w-full resize-y rounded border border-border px-3 py-2 text-base text-foreground"
        />
      </label>

      <label className="block min-w-0 text-sm font-medium text-charcoal">
        Urgency
        <select
          name="urgency"
          className="mt-1 w-full min-h-[44px] max-w-full rounded border border-border px-3 py-2 text-base text-foreground"
        >
          <option value="Urgent">Urgent</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="Planning ahead">Planning ahead</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-[44px] w-full min-w-0 items-center justify-center rounded bg-green px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-green/90 disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Submitting…" : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
