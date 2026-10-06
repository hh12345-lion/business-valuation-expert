/**
 * Illustrative valuation range, drawn the way an expert report sets each
 * method's range against the opinion of value. The figures are an example,
 * not a real case. Scale runs from £1.8m to £3.6m.
 */
const SCALE_MIN = 1.8;
const SCALE_MAX = 3.6;

const methods = [
  { name: "Discounted cash flow", low: 2.6, high: 3.4 },
  { name: "Maintainable earnings", low: 2.3, high: 3.0 },
  { name: "Net asset value", low: 1.9, high: 2.4 },
] as const;

const OPINION = 2.7;

const pct = (value: number) =>
  ((value - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;
const money = (value: number) => `£${value.toFixed(1)}m`;

export function ValuationRange({ className = "" }: { className?: string }) {
  return (
    <figure className={`bg-charcoal p-5 text-background shadow-card sm:p-6 ${className}`}>
      <figcaption>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-green">
          How a report states value
        </p>
        <p className="mt-1 text-xs text-background/60">
          Illustrative example, not a real case
        </p>
      </figcaption>

      <div className="relative mt-5">
        <ul className="space-y-4">
          {methods.map((method) => (
            <li
              key={method.name}
              title={`${method.name}: ${money(method.low)} to ${money(method.high)}`}
            >
              <div className="flex items-baseline justify-between gap-3 text-xs">
                <span className="text-background/75">{method.name}</span>
                <span className="font-semibold tabular-nums text-background">
                  {money(method.low)} to {money(method.high)}
                </span>
              </div>
              <div className="mt-1.5 h-2 bg-background/10">
                <div
                  className="h-2 rounded-[2px] bg-green"
                  style={{
                    marginLeft: `${pct(method.low)}%`,
                    width: `${pct(method.high) - pct(method.low)}%`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-2 -top-1 w-0.5 bg-background"
          style={{ left: `${pct(OPINION)}%` }}
        />
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-background/15 pt-4">
        <span className="text-xs uppercase tracking-[0.12em] text-background/75">
          Opinion of value
        </span>
        <span className="font-display text-2xl font-bold tabular-nums text-background">
          {money(OPINION)}
        </span>
      </div>
      <p className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-background/75">
        <span className="border border-background/25 px-2 py-1">CPR Part 35</span>
        <span className="border border-background/25 px-2 py-1">FPR Part 25</span>
        <span className="border border-background/25 px-2 py-1">SJE available</span>
      </p>
    </figure>
  );
}
