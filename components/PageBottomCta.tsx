import Link from "next/link";

export function PageBottomCta() {
  return (
    <section className="bve-slash-top overflow-hidden bg-green pb-14 pt-24 md:pb-20 md:pt-32">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/80">
          Next step
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-charcoal md:text-5xl">
          Ready to instruct a business valuation expert witness?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/85 md:text-lg">
          Submit your case details and we will match you with a qualified expert
          for English and Welsh proceedings under CPR Part 35 or FPR Part 25.
          Response within one business day.
        </p>
        <Link
          href="/contact"
          className="bve-cut-sm mt-8 inline-flex min-h-[44px] items-center justify-center bg-charcoal px-7 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-background transition hover:bg-background hover:text-charcoal"
        >
          Instruct an Expert Witness
        </Link>
      </div>
    </section>
  );
}
