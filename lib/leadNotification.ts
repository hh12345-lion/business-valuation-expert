import { getSiteDomain } from "@/lib/seo";

/** Display name sent to n8n — must match netlify/functions/submit-lead.js */
export const BRAND_NAME = "Business Valuation Expert";

export type LeadWebhookInput = {
  fullName: string;
  email: string;
  phone?: string;
  /** Free-text enquiry body — always sent to n8n as `message`. */
  message?: string;
};

export function getLeadWebhookUrl(): string {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    ""
  ).trim();
}

/** Outbound JSON shape — identical across all brand sites. */
export function buildLeadWebhookPayload(input: LeadWebhookInput) {
  return {
    "Full Name": input.fullName,
    Email: input.email,
    "Phone Number": input.phone ?? "",
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    message: input.message ?? "",
  };
}

export async function notifyLeadWebhook(
  input: LeadWebhookInput,
): Promise<
  | { ok: true }
  | { error: "WEBHOOK_MISSING" | "WEBHOOK_UNREACHABLE" | "WEBHOOK_REJECTED"; status: number; upstreamStatus?: number }
> {
  const webhookUrl = getLeadWebhookUrl();
  if (!webhookUrl) {
    return { error: "WEBHOOK_MISSING", status: 503 };
  }

  const outbound = buildLeadWebhookPayload(input);

  let upstream: Response;
  try {
    upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
    });
  } catch {
    return { error: "WEBHOOK_UNREACHABLE", status: 502 };
  }

  if (!upstream.ok) {
    return {
      error: "WEBHOOK_REJECTED",
      status: 502,
      upstreamStatus: upstream.status,
    };
  }

  return { ok: true };
}
