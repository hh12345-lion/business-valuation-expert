import { SITE_REGION_SHORT, UK_SERVICE_NOTICE } from "@/lib/site";

/** Persistent UK-only service notice on every page (below the header). */
export function UkServiceNotice() {
  return (
    <div
      className="border-b border-gold/30 bg-charcoal/95 text-white"
      role="note"
      aria-label="Service region"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2.5 text-xs leading-snug sm:px-6 sm:text-sm lg:px-8">
        <span className="inline-flex shrink-0 items-center rounded bg-gold/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gold ring-1 ring-gold/40 sm:text-xs">
          {SITE_REGION_SHORT} only
        </span>
        <p className="min-w-0 flex-1 text-white/90">{UK_SERVICE_NOTICE}</p>
      </div>
    </div>
  );
}
