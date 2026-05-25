"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/lib/types";

export function GlossaryClient({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    );
  }, [terms, query]);

  return (
    <>
      <label className="block">
        <span className="sr-only">Search glossary</span>
        <input
          type="search"
          placeholder="Search terms…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full min-h-[44px] rounded border border-border px-4 py-2 text-foreground"
        />
      </label>
      <dl className="mt-8 space-y-8">
        {filtered.map((t) => (
          <div key={t.anchorId} id={t.anchorId}>
            <dt className="text-lg font-semibold text-charcoal">{t.term}</dt>
            <dd className="mt-2 leading-relaxed text-foreground">
              {t.definition}
              {t.link ? (
                <>
                  {" "}
                  <Link href={t.link.href} className="font-medium text-green hover:underline">
                    {t.link.label} →
                  </Link>
                </>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      {filtered.length === 0 ? (
        <p className="mt-6 text-foreground">No terms match your search.</p>
      ) : null}
    </>
  );
}
