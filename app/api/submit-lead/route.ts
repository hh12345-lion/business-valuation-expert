import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { appendLeadToGoogleSheet, type LeadFields } from "@/lib/lead-sheet";
import { BRAND_NAME, notifyLeadWebhook } from "@/lib/leadNotification";

type LeadBody = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  formType?: unknown;
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
  const formTypeRaw = str(body.formType).toLowerCase();
  const formType =
    formTypeRaw === "contact" ? "contact" : formTypeRaw === "instruct" ? "instruct" : "instruct";

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
    formType,
  };
}

async function softFailAppendSheet(lead: LeadFields, context: string): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;

  try {
    await appendLeadToGoogleSheet(lead);
  } catch (error: unknown) {
    const err = error as { message?: string; code?: number };
    console.error("Google Sheets error:", {
      context,
      message: err?.message,
      code: err?.code,
      spreadsheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
      timestamp: new Date().toISOString(),
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

/**
 * Webhook is the primary lead path (notifyLeadWebhook).
 * Sheets: one shared GOOGLE_SHEET_TAB_NAME + Form Type; soft-fail only.
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

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl?.trim() && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "WEBHOOK_MISSING",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars (GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY).",
      },
      { status: 503 },
    );
  }

  if (webhookUrl?.trim()) {
    const result = await notifyLeadWebhook({
      fullName: lead.fullName,
      email: lead.email,
      phone: lead.phone,
    });

    if ("error" in result) {
      return NextResponse.json(
        {
          error: result.error,
          ...(result.upstreamStatus != null
            ? { status: result.upstreamStatus }
            : {}),
        },
        { status: result.status },
      );
    }

    // Soft-fail Sheets — never fail the user after webhook success.
    await softFailAppendSheet(lead, "submit-lead");

    return NextResponse.json({ ok: true });
  }

  // Sheets-only fallback (local/dev): soft-fail so missing/broken Sheets
  // does not hard-block when webhook is unset; still attempt write.
  await softFailAppendSheet(lead, "submit-lead-sheets-only");
  return NextResponse.json({ ok: true });
}
