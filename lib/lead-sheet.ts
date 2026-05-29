import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";

/** Contact form fields persisted to Google Sheets (column order = row 1 headers). */
export type LeadFields = {
  fullName: string;
  email: string;
  phone: string;
  lawFirm: string;
  caseType: string;
  sector: string;
  legalFramework: string;
  expertType: string;
  turnover: string;
  deadline: string;
  caseDescription: string;
  urgency: string;
  brandName: string;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

/** Prevent Sheets from treating +phone or =text as formulas (USER_ENTERED). */
function asSheetText(value: string): string {
  const v = sanitize(value);
  if (!v) return v;
  if (v.startsWith("+") || v.startsWith("=") || v.startsWith("-")) {
    return `'${v}`;
  }
  return v;
}

/**
 * Row values in column order - must match row 1 in the spreadsheet tab.
 * See docs/google-sheets.md for header names.
 */
export function buildLeadSheetRow(lead: LeadFields): (string | null)[] {
  return [
    new Date().toISOString(),
    sanitize(lead.fullName),
    lead.email.toLowerCase().trim(),
    asSheetText(lead.phone),
    sanitize(lead.lawFirm),
    sanitize(lead.caseType),
    sanitize(lead.sector),
    sanitize(lead.legalFramework),
    sanitize(lead.expertType),
    sanitize(lead.turnover),
    sanitize(lead.deadline),
    sanitize(lead.caseDescription),
    sanitize(lead.urgency),
    sanitize(lead.brandName),
  ];
}

/**
 * Appends a contact lead row when Google Sheets env vars are set.
 * Throws on API errors - callers should catch so webhook success is not blocked.
 */
export async function appendLeadToGoogleSheet(lead: LeadFields): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    return;
  }

  await appendRow(buildLeadSheetRow(lead));
}
