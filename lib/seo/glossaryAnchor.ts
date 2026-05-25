/** Appendix C — fragment IDs for /glossary#{anchor} */
export function glossaryAnchorId(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function glossaryHref(term: string): string {
  return `/glossary#${glossaryAnchorId(term)}`;
}
