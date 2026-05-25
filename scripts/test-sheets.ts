/**
 * Local Sheets connectivity test. Requires .env.local with Google vars.
 * Run: npx tsx scripts/test-sheets.ts
 */
import { loadProjectEnv, getGoogleSheetsEnvStatus } from "../lib/load-env";
import { appendRow, getSpreadsheetInfo, readRows } from "../lib/google-sheets";
import { buildLeadSheetRow } from "../lib/lead-sheet";

loadProjectEnv();

const status = getGoogleSheetsEnvStatus();

if (!status.ok) {
  console.error("--- Google Sheets env check failed ---\n");
  if (!status.envLocalExists) {
    console.error(
      `No .env.local found at:\n  ${status.envLocalPath}\n`,
    );
    console.error(
      "Create that file with GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID, and GOOGLE_SHEET_TAB_NAME.",
    );
    console.error("Copy names from .env.example — never commit real keys.\n");
  } else {
    console.error(".env.local exists but these variables are empty or missing:");
    for (const key of status.missing) {
      console.error(`  - ${key}`);
    }
    console.error(
      "\nTip: wrap GOOGLE_PRIVATE_KEY in double quotes and keep \\n in the key string.",
    );
  }
  process.exit(1);
}

async function test() {
  console.log("--- Google Sheets connection test ---\n");
  console.log("Sheet ID:", `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`);
  console.log("Tab:", process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1");
  console.log("Service account:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  console.log();

  try {
    const info = await getSpreadsheetInfo();
    console.log("Spreadsheet:", info.title);
    console.log("Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  const testRow = buildLeadSheetRow({
    fullName: "Test Entry",
    email: "test@example.com",
    phone: "+44 7700 900000",
    lawFirm: "Test LLP",
    caseType: "Shareholder Dispute (S994)",
    sector: "Technology / SaaS",
    legalFramework: "CPR Part 35 (civil)",
    expertType: "SJE",
    turnover: "£1M–£5M",
    deadline: "2026-06-01",
    caseDescription: "Test row from scripts/test-sheets.ts",
    urgency: "2 weeks",
    brandName: "BusinessValuationExperts",
  });

  try {
    const result = await appendRow(testRow);
    console.log("Row written:", result.updatedRange);
  } catch (error) {
    console.error("Failed to write row:", error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`Read ${result.rows.length} rows (including header)`);
    console.log("Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("Failed to read rows:", error);
    process.exit(1);
  }

  console.log("\n--- Done ---");
}

test();
