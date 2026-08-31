import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";

/** Contact/instruct fields persisted to Google Sheets (column order = row 1 headers). */
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
  /** Distinguishes Contact vs Instruct on the shared sheet tab. */
  formType?: "contact" | "instruct" | string;
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

function formTypeLabel(formType?: string): string {
  return formType === "contact" ? "Contact" : "Instruct";
}

/**
 * Row values in column order - must match row 1 in the spreadsheet tab.
 * One shared GOOGLE_SHEET_TAB_NAME; Form Type distinguishes rows.
 * See docs/google-sheets.md for header names.
 */
export function buildLeadSheetRow(lead: LeadFields): (string | null)[] {
  return [
    new Date().toISOString(),
    sanitize(lead.brandName),
    formTypeLabel(lead.formType),
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
  ];
}

/**
 * Appends a lead row when Google Sheets env vars are set.
 * Throws on API errors - callers should catch so webhook success is not blocked.
 */
export async function appendLeadToGoogleSheet(lead: LeadFields): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    return;
  }

  await appendRow(buildLeadSheetRow(lead));
}
