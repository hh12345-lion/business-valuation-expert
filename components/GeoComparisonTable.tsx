type Row = { label: string; colA: string; colB: string };

export function GeoComparisonTable({
  caption,
  colAHeader,
  colBHeader,
  rows,
}: {
  caption: string;
  colAHeader: string;
  colBHeader: string;
  rows: Row[];
}) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-sm">
        <caption className="mb-3 text-left text-sm font-medium text-charcoal">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
              Topic
            </th>
            <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
              {colAHeader}
            </th>
            <th className="px-3 py-2 text-left font-semibold text-charcoal" scope="col">
              {colBHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border">
              <th className="px-3 py-2 text-left font-medium text-charcoal" scope="row">
                {row.label}
              </th>
              <td className="px-3 py-2 text-foreground">{row.colA}</td>
              <td className="px-3 py-2 text-foreground">{row.colB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
