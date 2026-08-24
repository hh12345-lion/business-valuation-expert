import Link from "next/link";

export function PageBottomCta() {
  return (
    <section className="relative overflow-hidden border-y-2 border-charcoal/10 bg-charcoal py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-green"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Next step
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-white md:text-3xl">
          Ready to instruct a business valuation expert witness?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Submit your case details and we will match you with a qualified expert
          for English and Welsh proceedings under CPR Part 35 or FPR Part 25.
          Response within one business day.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center border-2 border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-charcoal transition hover:border-green hover:bg-green hover:text-white"
        >
          Instruct an Expert Witness
        </Link>
      </div>
    </section>
  );
}
