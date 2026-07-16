# SEO Gap-Closure Plan — businessvaluationexperts.co.uk

Feed this file to Cursor as a task list. Each task names the exact file(s) to touch, the
current bad state, the target state, and how to verify the fix. Work top to bottom —
priority order matters because some later fixes assume earlier ones are done (e.g. the
Service schema work assumes the sitemap priority fix is in first, since both touch the
same route group).

**Source of gaps:** `docs/SEO-FULL-CONTEXT.md` §14 + schema matrix (§6) + assets notes (§1),
cross-checked against live code (July 2026).

After every batch of changes, run:
```
npm run seo:generate && npm run seo:verify
```
and re-check `/sitemap.xml` and `/robots.txt` diffs before moving to the next task.

---

## Gap coverage matrix (must stay complete)

| # | Known gap (from SEO-FULL-CONTEXT / code audit) | Plan task | Status |
|---|------------------------------------------------|-----------|--------|
| 1 | Sitemap priority 0.50 for `/services/*` & `/valuation-methods/*` | P0.2 | **done** |
| 2 | `SITE_EMAIL` singular domain vs live plural host | P0.1 | **done** |
| 3 | No `Service` entity on `/services/[slug]` | P0.3 | **done** |
| 4 | No FAQPage on any `/services/[slug]` (all 8) | P1.1 | **done** |
| 5 | No favicon / apple-icon / manifest | P1.2 | **done** |
| 6 | One static OG image sitewide | P1.3 | **done** |
| 7 | `lastmod` = build time (false freshness) | P1.4 | **done** |
| 8 | Footer column titles are `<h2>` (heading dilution) | P2.1 | **done** |
| 9 | Staging disallow only in `app/robots.ts`, not static generator | P2.2 | **done** |
| 10 | Docs URL count / schema matrix stale (~45 vs ~48; services as fragments) | P2.3 | **done** |
| 11 | Architecture / full-context email examples wrong or outdated | P0.1 + P2.3 | **done** |
| 12 | `guides-data.ts` `aboutServiceId` drifts from `guide-about.ts` | P2.4 | **done** |
| 13 | No blog / long-tail content layer | P3.1 | deferred |
| 14 | Almost no content images / alt text | P3.2 | deferred |
| 15 | `SITE_URL` ignores `NEXT_PUBLIC_SITE_URL` | — | **by design** (metadata/sitemap always use hardcoded `SITE_URL`) |
| 16 | No `<meta name="keywords">` | — | **by design** (strategy + on-page intent only) |

---

## P0 — Fix before anything else

### P0.1 — Organization schema email domain mismatch
**Files:** `lib/site.ts`, then sync email strings in `docs/SEO-FULL-CONTEXT.md` (§0) and
`docs/SEO-ARCHITECTURE.md` (Organization example currently shows `info@…`).
**Problem:** `SITE_EMAIL` is `contact@businessvaluationexpert.co.uk` (singular "expert") while the
live domain is `businessvaluationexperts.co.uk` (plural "experts"). This ships in the
`Organization` JSON-LD on every page.
**Fix:**
```ts
export const SITE_EMAIL = "contact@businessvaluationexperts.co.uk"; // was missing the "s"
```
Update both SEO docs so agents do not reintroduce the singular domain or the stale `info@` example.
**Verify:** grep the built output for the old string — it must return zero matches:
```
grep -r "businessvaluationexpert.co.uk\"" .next/ | grep -v "businessvaluationexperts.co.uk"
```
Also spot-check `/`, `/services`, `/guides/*` rendered JSON-LD in Rich Results Test.

### P0.2 — Sitemap priority gap for services & valuation-methods detail pages
**File:** `lib/seo/sitemapHeuristics.ts`
**Problem:** `getSitemapMetaForPath` has no prefix rule for `/services/{slug}` or
`/valuation-methods/{slug}`, so both fall through to the generic `0.50` default despite
being Tier 1 commercial pages.
**Fix:** add explicit prefix matches **after** the hub exact-path checks and **before** the
catch-all, e.g.:
```ts
if (path.startsWith("/services/")) return { priority: 0.85, changeFrequency: "monthly" };
if (path.startsWith("/valuation-methods/")) return { priority: 0.80, changeFrequency: "monthly" };
```
Use the existing return shape (`changeFrequency`, not `changefreq`).
**Verify:** run `npm run seo:generate`, open `public/sitemap.xml`, confirm every
`/services/*` and `/valuation-methods/*` URL shows the new priority, not 0.50.

### P0.3 — Missing `Service` schema on individual service detail pages
**Files:** `lib/schema.ts`, `components/ServiceDetailLayout.tsx`
(schema is emitted from the layout; `app/services/[slug]/page.tsx` only passes the service)
**Problem:** `/services/[slug]` currently emits only `Organization + BreadcrumbList`. The
`Service` entity for each offering only exists inside the `/services` hub's `@graph`
(`@id = /services#{anchor}`).
**Fix:**
1. In `lib/schema.ts`, export a `buildServiceSchema(service)` function that returns a
   single `Service` node, reusing the same shape already used in `servicesPageGraph()` —
   critically, set `@id` via existing `serviceId(s.anchor)` (the *same* ID already used on
   the hub page), not a new detail-page-specific ID, so both pages describe the same
   entity rather than creating a duplicate.
2. In `ServiceDetailLayout`, call `buildServiceSchema(service)` and add it to that page's
   JSON-LD graph alongside the existing `Organization` + `BreadcrumbList`.
**Verify:** Rich Results Test on 2–3 service detail URLs should now show a `Service` item
in addition to breadcrumbs.

---

## P1 — High value, do next

### P1.1 — Add FAQPage schema on every service detail page
**Files:** `lib/services-data.ts`, `components/ServiceDetailLayout.tsx`,
`docs/SEO-FULL-CONTEXT.md` / `docs/SEO-ARCHITECTURE.md` FAQ coverage tables (via P2.3)
**Problem:** **None** of the 8 `/services/[slug]` pages have FAQ content or `FAQPage`
schema. Case-types, sectors, and valuation-methods already use `faq: [{ q, a }]` via
`DetailPageLayout`. Services are the odd route out for commercial pages.
**Fix:**
1. Extend `Service` with optional-or-required `faq: FaqItem[]` using the **existing**
   `{ q, a }` shape from `lib/types.ts` (do **not** invent `{question, answer}`).
2. Add **at least 2 FAQs** to every entry in `lib/services-data.ts`.
3. Update `ServiceDetailLayout` to render a "Common questions" block (same UX pattern as
   `DetailPageLayout`) and emit `faqPageSchema(service.faq)` when present.
**Verify:** All 8 `/services/{slug}` pages render visible FAQs + `FAQPage` in JSON-LD
(spot-check 2–3 in Rich Results Test; grep built HTML for `"@type":"FAQPage"` on service routes).

### P1.2 — Add favicon / manifest
**Files (new):** `app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts`
**Fix:** Use Next.js's built-in metadata file conventions:
```ts
// app/icon.tsx — generates favicon via ImageResponse (navy/gold mark)
// app/apple-icon.tsx — Apple touch icon
// app/manifest.ts
import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BusinessValuationExperts",
    short_name: "BVE",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
    theme_color: "#1C2B3A",
    background_color: "#1C2B3A",
    display: "standalone",
  };
}
```
Reuse the navy/gold palette already defined for the OG image (`#1C2B3A` / `#B8860B`).
Point manifest icons at the generated `/icon` route (not a non-existent `/icon.png`).
**Verify:** `/icon`, `/apple-icon`, `/manifest.webmanifest` resolve with 200s; check browser tab icon.

### P1.3 — Per-route-type OG images instead of one static image sitewide
**Files:** keep `app/opengraph-image.tsx` as fallback; add route-segment generators for
**all** content detail hubs (not only editorial ones):
- `app/guides/[slug]/opengraph-image.tsx` — guide title + "Solicitor Guide"
- `app/case-types/[slug]/opengraph-image.tsx` — case type title + "Case Type"
- `app/sectors/[slug]/opengraph-image.tsx` — sector title + "Sector Specialist"
- `app/services/[slug]/opengraph-image.tsx` — service title + "Service"
- `app/valuation-methods/[slug]/opengraph-image.tsx` — method title + "Valuation Method"
**Fix:** Extract a small shared helper (e.g. `lib/seo/ogImage.tsx` or
`components/seo/OgCard.tsx`) so all generators share `#1C2B3A` / `#B8860B` styling and only
swap label + title from `params.slug`.
**Verify:** hit `/opengraph-image` (fallback) plus one URL under each of the five segments —
confirm distinct images (or at least distinct rendered titles in the ImageResponse).

### P1.4 — Fix `lastmod` to reflect real content changes, not build time
**Files:** `app/sitemap.ts` path via `lib/seo/buildSitemap.ts`,
`lib/seo/renderSitemap.ts`, `scripts/generate-seo.ts`, data layer
(`lib/case-types-data.ts`, `lib/sectors-data.ts`, `lib/guides-data.ts`,
`lib/services-data.ts`, `lib/valuation-methods-data.ts`)
**Problem:** `lastmod` / `lastModified` is stamped at generation time for every URL, every
build — a false freshness signal.
**Fix (preferred):**
1. Add `updatedAt: "YYYY-MM-DD"` to each content entry (services, methods, case-types,
   sectors, guides). Set initial values to a stable editorial date (e.g. today's audit
   date), then update manually when that entry's copy/schema meaningfully changes.
2. Teach `buildAppSitemap` / `renderSitemapXml` to look up `updatedAt` by path; for static
   hubs without a data entry, either omit `lastmod` or use a single shared hub date
   constant — **never** `new Date()` at build time for content URLs.
**Verify:** run `seo:generate` twice with no content edits — `lastmod` values in
`public/sitemap.xml` must be identical across both runs.

---

## P2 — Cleanup, lower urgency but easy

### P2.1 — Demote footer `<h2>` to non-heading or `<h3>`
**File:** `components/SiteFooter.tsx`
**Problem:** Four footer column titles use `<h2>`, diluting real content H2s on every page.
**Fix:** change nav column titles from `<h2>` to `<h3>` (or styled `<p>`/`<span>` if they
should not be in the outline at all). Prefer `<p className="…">` so the document outline
stays content-only.
**Verify:** heading outline on `/` — one H1, content H2s only, **no** H2/H3 noise from the
footer column labels.

### P2.2 — Mirror staging-block logic into the static robots generator
**Files:** `lib/seo/renderRobots.ts`, `scripts/generate-seo.ts`, optionally stop treating
committed `public/robots.txt` as the production source of truth if dynamic `app/robots.ts`
always wins in deployment.
**Problem:** `app/robots.ts` disallows all crawling when `VERCEL_ENV=preview` or
`NEXT_PUBLIC_STAGING=true`, but `renderRobotsTxt()` always emits Allow: /.
**Fix (choose one and document in `docs/SITEMAP-AND-ROBOTS.md`):**
- **(a) Preferred:** gate `renderRobotsTxt()` on the same staging env vars; when staging,
  emit disallow-all. Keep `seo:generate` writing `public/robots.txt` for non-staging builds.
- **(b)** Stop committing a static `public/robots.txt` and rely solely on `app/robots.ts`
  (only if deploy host serves the Next route, not a static file that shadows it).
**Verify:** with `NEXT_PUBLIC_STAGING=true`, regenerated robots content disallows `/`;
production generate still allows `/` + sitemap.

### P2.3 — Reconcile docs vs code (counts, schema matrix, email, priorities)
**Files:** `docs/SEO-FULL-CONTEXT.md`, `docs/SEO-ARCHITECTURE.md` (Appendix A + schema
matrix + FAQ coverage), `docs/SITEMAP-AND-ROBOTS.md` if priority tables live there.
**Fix after P0–P1 land:**
- URL inventory: ~48 (or exact `seo:verify` count), including `/services/[slug]` and
  `/valuation-methods/[slug]` as first-class sitemap URLs (not fragments-only).
- Schema matrix: `/services/[slug]` → Organization + Service + BreadcrumbList + FAQPage.
- Priority table: `/services/*` 0.85, `/valuation-methods/*` 0.80.
- SITE_EMAIL / Organization email examples match live plural domain.
- Strike or rewrite §14 items that this plan closed; leave deferred items pointing at P3.
**Verify:** a future agent reading only the docs would not re-open closed gaps.

### P2.4 — Single source of truth for guide Article `about` IDs
**Files:** `lib/guide-about.ts`, `lib/guides-data.ts`, `app/guides/[slug]/page.tsx`
**Problem:** Live Article schema prefers `GUIDE_ABOUT_SERVICE[slug]`, falling back to
`guide.aboutServiceId`. Several `aboutServiceId` values in `guides-data.ts` already
diverge (e.g. DCF guide → `/valuation-methods`, SJE → `#share-equity-valuation`,
instructing letter → `/how-to-instruct`) while `guide-about.ts` maps those to Service /
Organization IDs per architecture.
**Fix:**
1. Treat `lib/guide-about.ts` as the **only** source used by the page (already preferred).
2. Either remove `aboutServiceId` from `GuidePage` / `guides-data.ts`, or rewrite every
   `aboutServiceId` to equal `GUIDE_ABOUT_SERVICE[slug]` so the two cannot drift.
3. Prefer deletion of the duplicate field if nothing else reads it.
**Verify:** for each of the 6 guides, Article `about.@id` matches architecture §4 mapping;
no leftover conflicting IDs in data.

---

## P3 — Strategic, larger lift (do after P0–P2 are shipped)

### P3.1 — Add a blog/insights content layer
No blog currently exists; all informational-tier coverage runs through 6 static guides.
This is the highest-leverage lever for growing keyword *impressions* specifically — the
Tier 1/2/3 keyword matrix is already well-mapped to existing pages, so further impression
growth needs long-tail content breadth a fixed page set can't provide. Suggested scope:
- New `/insights/[slug]` or `/blog/[slug]` route using the same data-layer +
  `buildPageMetadata` + JSON-LD (`Article`) pattern already used for guides.
- Target long-tail variants not covered by the existing 30-keyword matrix (e.g. specific
  case commentary, "how much does X valuation cost", sector + dispute-type combinations).
- Add to sitemap inventory + `ContentClusterNav` linking from relevant hubs.
This is a net-new feature, not a bug fix — scope it as its own project, not part of this
cleanup pass.

### P3.2 — Content imagery / meaningful alt text
Almost no in-body `<img>` / `next/image` exists beyond OG. Defer until there is a real
visual content plan (expert portraits, methodology diagrams). Do not add decorative stock
images just to tick alt-text boxes.

---

## Regression checklist (run after every task above)

- [ ] `npm run seo:generate && npm run seo:verify` passes with no drift warnings
- [ ] `public/sitemap.xml` and the `/sitemap.xml` route return identical URL sets
- [ ] Rich Results Test clean on: `/`, one `/services/[slug]`, one `/case-types/[slug]`,
      one `/guides/[slug]`
- [ ] No new 404s via a full crawl (Screaming Frog or equivalent)
- [ ] `grep -r "businessvaluationexpert.co.uk\"" .next/` returns nothing (P0.1 regression guard)
- [ ] Footer heading outline on `/` has no footer H2s (P2.1)
- [ ] Two consecutive `seo:generate` runs produce identical `lastmod` values (P1.4)
