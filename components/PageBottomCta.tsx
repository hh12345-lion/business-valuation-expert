import Link from "next/link";

export function PageBottomCta() {
  return (
    <section className="bg-green py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Ready to instruct a business valuation expert witness?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          United Kingdom only. Submit your case details and we will match you
          with a qualified UK expert for English and Welsh proceedings - CPR
          Part 35 and FPR Part 25 compliant. Response within one UK business
          day.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded bg-white px-6 py-3 text-sm font-semibold text-green shadow-card transition hover:bg-white/95"
        >
          Instruct an Expert Witness
        </Link>
      </div>
    </section>
  );
}
