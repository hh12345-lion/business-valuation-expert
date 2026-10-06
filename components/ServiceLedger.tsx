import Link from "next/link";
import type { Service } from "@/lib/services-data";

/**
 * Numbered ledger of services. On wide screens the detail panel on the right
 * follows the hovered or focused row. This is done in CSS (see .bve-ledger
 * in globals.css), so it is rendered on the server and needs no script.
 */
export function ServiceLedger({ services }: { services: Service[] }) {
  return (
    <ol className="bve-ledger relative mt-8 divide-y divide-border border-y border-border lg:min-h-[30rem] lg:pr-[26rem]">
      {services.map((service, index) => {
        const number = String(index + 1).padStart(2, "0");
        return (
          <li key={service.id}>
            <Link
              href={`/services#${service.anchor}`}
              className="group flex min-h-[44px] gap-4 py-5 transition hover:bg-muted/50 focus-visible:bg-muted/50 focus-visible:outline-none sm:gap-6"
            >
              <span className="w-8 shrink-0 font-mono text-sm font-semibold text-green">
                {number}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-charcoal">
                  {service.title}
                </span>
                <span className="mt-1 block text-sm text-foreground">
                  {service.summary}
                </span>
              </span>

              <span className="bve-ledger-preview absolute right-0 top-0 hidden h-full w-[24rem] flex-col bg-charcoal p-8 text-background">
                <span className="font-display text-5xl font-bold text-green">
                  {number}
                </span>
                <span className="mt-4 block font-display text-2xl font-semibold leading-tight">
                  {service.title}
                </span>
                <span className="mt-4 block text-sm leading-relaxed text-background/75">
                  {service.content}
                </span>
                <span className="mt-auto block border-t border-background/15 pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-background/75">
                  You receive
                </span>
                <span className="mt-2 block text-sm text-background">
                  {service.phases
                    .slice(-2)
                    .map((phase) => phase.deliverable)
                    .join(" · ")}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-green">
                  View service <span aria-hidden>→</span>
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
