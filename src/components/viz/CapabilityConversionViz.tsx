"use client";

import { useState } from "react";

/** Two people with the same resources, converted into a functioning at different rates. */
export function CapabilityConversionViz() {
  const [income, setIncome] = useState(100);
  const [rateB, setRateB] = useState(0.5);
  const rateA = 1;
  const fa = income * rateA;
  const fb = income * rateB;
  const neededB = 100 / rateB;
  const W = (v: number) => (v / 200) * 380;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>income for each = {income} <input type="range" min={20} max={200} step={10} value={income} onChange={(e) => setIncome(Number(e.target.value))} aria-label="income" /></label>
        <label>conversion rate for B = {rateB.toFixed(2)} <input type="range" min={0.25} max={1} step={0.05} value={rateB} onChange={(e) => setRateB(Number(e.target.value))} aria-label="rate" /></label>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Resources and achieved mobility for two people" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[["A", fa, 30], ["B", fb, 95]].map(([who, f, y]) => (
          <g key={who as string}>
            <text x={10} y={(y as number) + 14} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{who}</text>
            <text x={34} y={(y as number) + 9} style={{ fill: "var(--text-muted)", fontSize: 10 }}>income</text>
            <rect x={110} y={(y as number)} width={W(income)} height={14} rx={3} style={{ fill: "var(--text-faint)" }} />
            <text x={34} y={(y as number) + 33} style={{ fill: "var(--text-muted)", fontSize: 10 }}>mobility</text>
            <rect x={110} y={(y as number) + 22} width={W(f as number)} height={14} rx={3} style={{ fill: "var(--accent)" }} />
            <text x={116 + W(f as number)} y={(y as number) + 33} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{(f as number).toFixed(0)}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Equal incomes of {income} give A mobility {fa.toFixed(0)} and B mobility {fb.toFixed(0)}. For B to reach mobility 100, B would need income {neededB.toFixed(0)}.
      </p>
      <figcaption className="viz-caption">
        B uses a wheelchair, so the same income buys less ability to get about: B&rsquo;s conversion rate is lower. A
        metric of resources counts A and B as equal. The capabilities approach of Amartya Sen and Martha Nussbaum looks at
        what each person is actually able to do and be, and counts B as worse off.
      </figcaption>
    </figure>
  );
}
