import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { appendLeadToGoogleSheet, type LeadFields } from "@/lib/lead-sheet";

/** Must match `BRAND_NAME` in netlify/functions/submit-lead.js */
const BRAND_NAME = "BusinessValuationExperts";

function getLeadWebhookUrl(): string {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    ""
  );
}

type LeadBody = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  lawFirm?: unknown;
  caseType?: unknown;
  sector?: unknown;
  legalFramework?: unknown;
  expertType?: unknown;
  turnover?: unknown;
  deadline?: unknown;
  caseDescription?: unknown;
  urgency?: unknown;
};

function parseLeadBody(body: LeadBody): LeadFields {
  const str = (v: unknown) => (v != null ? String(v).trim() : "");

  return {
    fullName: str(body.fullName),
    email: str(body.email),
    phone: str(body.phone),
    lawFirm: str(body.lawFirm),
    caseType: str(body.caseType),
    sector: str(body.sector),
    legalFramework: str(body.legalFramework),
    expertType: str(body.expertType),
    turnover: str(body.turnover),
    deadline: str(body.deadline),
    caseDescription: str(body.caseDescription),
    urgency: str(body.urgency),
    brandName: BRAND_NAME,
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

/**
 * Webhook: four keys to n8n. Google Sheets: full contact row (non-blocking after webhook).
 * Sheets-only mode when webhook env is unset (local dev).
 */
export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lead = parseLeadBody(body);

  if (!lead.fullName || !lead.email) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 },
    );
  }

  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "WEBHOOK_MISSING",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars (GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY).",
      },
      { status: 503 },
    );
  }

  if (webhookUrl) {
    const outbound = {
      "Full Name": lead.fullName,
      Email: lead.email,
      "Phone Number": lead.phone,
      "Brand name": BRAND_NAME,
    };

    let upstream: Response;
    try {
      upstream = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
      });
    } catch {
      return NextResponse.json({ error: "WEBHOOK_UNREACHABLE" }, { status: 502 });
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "WEBHOOK_REJECTED", status: upstream.status },
        { status: 502 },
      );
    }

    if (sheetsConfigured) {
      try {
        await appendLeadToGoogleSheet(lead);
      } catch (error: unknown) {
        const err = error as { message?: string; code?: number };
        console.error("Google Sheets error:", {
          message: err?.message,
          code: err?.code,
          spreadsheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
          timestamp: new Date().toISOString(),
        });
      }
    }

    return NextResponse.json({ ok: true });
  }

  try {
    await appendLeadToGoogleSheet(lead);
    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const err = error as { message?: string; code?: number };
    console.error("Google Sheets error:", {
      message: err?.message,
      code: err?.code,
      spreadsheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ error: "SHEETS_WRITE_FAILED" }, { status: 500 });
  }
}
