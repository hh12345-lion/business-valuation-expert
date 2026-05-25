/** Common dial prefixes for the contact form (UK default). */
export const PHONE_COUNTRY_OPTIONS = [
  { value: "+44", label: "UK +44" },
  { value: "+353", label: "IE +353" },
  { value: "+1", label: "US/CA +1" },
  { value: "+61", label: "AU +61" },
  { value: "+49", label: "DE +49" },
  { value: "+33", label: "FR +33" },
  { value: "+971", label: "AE +971" },
  { value: "+other", label: "Other" },
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
