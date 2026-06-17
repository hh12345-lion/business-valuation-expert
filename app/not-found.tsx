import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-charcoal py-14 text-center text-white md:py-20">
        <p className="text-4xl font-bold text-gold md:text-5xl">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-white/80">
          The page you requested does not exist or has been moved. This website
          provides UK business valuation expert witness matching for England and
          Wales only.
        </p>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6">
        <nav aria-label="Quick links" className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/services" className="font-medium text-green hover:underline min-h-[44px] inline-flex items-center">
            Services
          </Link>
          <Link href="/case-types" className="font-medium text-green hover:underline min-h-[44px] inline-flex items-center">
            Case Types
          </Link>
          <Link href="/valuation-methods" className="font-medium text-green hover:underline min-h-[44px] inline-flex items-center">
            Valuation Methods
          </Link>
          <Link href="/contact" className="font-medium text-green hover:underline min-h-[44px] inline-flex items-center">
            Contact
          </Link>
        </nav>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-[44px] items-center rounded bg-green px-6 py-3 text-sm font-semibold text-white"
        >
          Return to Homepage
        </Link>
      </section>
    </>
  );
}
