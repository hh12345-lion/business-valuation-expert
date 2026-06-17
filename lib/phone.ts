/** UK and Ireland dial codes only (service is United Kingdom focused). */
export const PHONE_COUNTRY_OPTIONS = [
  { value: "+44", label: "UK +44" },
  { value: "+353", label: "Ireland +353" },
] as const;

/**
 * Builds E.164-style phone string for lead webhook (prefix + national digits).
 * Returns empty string when no national number is entered.
 */
export function formatPhoneForLead(
  countryValue: string,
  national: string,
  otherPrefix?: string,
): string {
  const digits = national.replace(/\s+/g, " ").trim();
  if (!digits) return "";

  let prefix = countryValue.trim();
  if (prefix === "+other") {
    prefix = (otherPrefix ?? "").trim();
    if (!prefix) return digits;
    if (!prefix.startsWith("+")) prefix = `+${prefix.replace(/^\+/, "")}`;
  }

  return `${prefix} ${digits}`.trim();
}
