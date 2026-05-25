import { existsSync } from "fs";
import { resolve } from "path";
import { loadEnvConfig } from "@next/env";

/**
 * Loads `.env`, `.env.local`, and mode-specific env files the same way as `next dev`.
 * Use in standalone scripts (e.g. `scripts/test-sheets.ts`).
 */
export function loadProjectEnv(cwd = process.cwd()): void {
  loadEnvConfig(cwd);
}

export function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getGoogleSheetsEnvStatus(): {
  ok: boolean;
  missing: string[];
  envLocalPath: string;
  envLocalExists: boolean;
} {
  const envLocalPath = resolve(process.cwd(), ".env.local");
  const required = [
    "GOOGLE_SERVICE_ACCOUNT_EMAIL",
    "GOOGLE_PRIVATE_KEY",
    "GOOGLE_SHEET_ID",
  ] as const;
  const missing = required.filter((k) => !process.env[k]?.trim());
  return {
    ok: missing.length === 0,
    missing: [...missing],
    envLocalPath,
    envLocalExists: existsSync(envLocalPath),
  };
}
