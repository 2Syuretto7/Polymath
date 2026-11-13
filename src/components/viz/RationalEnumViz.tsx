"use client";

import { useState } from "react";

const K = 7, C = 46, P0 = 30;

function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : a; }

/** List the positive rationals by sweeping the diagonals p + q = 2, 3, 4, … of the grid of fractions p/q, skipping fractions not in lowest terms. */
export function RationalEnumViz() {
  const [n, setN] = useState(10);
  const order: { p: number; q: number; skip: boolean }[] = [];
  for (let s = 2; s <= 2 * K; s++) for (let p = 1; p < s; p++) {
    const q = s - p;
    if (p > K || q > K) continue;
    order.push({ p, q, skip: gcd(p, q) !== 1 });
  }
  const listed: { p: number; q: number }[] = [];
  let shown = 0;
  for (const t of order) { if (listed.length >= n) break; shown++; if (!t.skip) listed.push(t); }
  const visited = order.slice(0, shown);
  const path = visited.map((t, i) => `${i ? "L" : "M"}${P0 + (t.q - 0.5) * C},${P0 + (t.p - 0.5) * C}`).join("");

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${2 * P0 + K * C} ${2 * P0 + K * C}`} role="img" aria-label="A grid of fractions with a path through the diagonals" style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto" }}>
        <text x={P0 + (K * C) / 2} y={18} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--text-muted)" }}>denominator q →</text>
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2, opacity: 0.6 }} />
        {order.map((t) => {
          const i = visited.indexOf(t), on = i >= 0;
          const k = listed.indexOf(listed.find((l) => l.p === t.p && l.q === t.q) as { p: number; q: number });
          return (
            <g key={`${t.p}/${t.q}`}>
              <rect x={P0 + (t.q - 1) * C + 3} y={P0 + (t.p - 1) * C + 3} width={C - 6} height={C - 6} rx={6}
                style={{ fill: on && !t.skip ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: on && !t.skip ? "var(--accent)" : "var(--border)" }} />
              <text x={P0 + (t.q - 0.5) * C} y={P0 + (t.p - 0.5) * C + 1} textAnchor="middle" style={{ fontSize: 12, fill: t.skip ? "var(--text-faint)" : "var(--text)", textDecoration: t.skip && on ? "line-through" : "none" }}>{t.p}/{t.q}</text>
              {on && !t.skip && k >= 0 && <text x={P0 + (t.q - 0.5) * C} y={P0 + (t.p - 0.5) * C + 15} textAnchor="middle" style={{ fontSize: 9.5, fill: "var(--accent)" }}>#{k + 1}</text>}
            </g>
          );
        })}
      </svg>
      <div className="viz-sliders">
        <label><span>how many listed: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={29} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <p className="mono" style={{ fontSize: 13, margin: "8px 0", overflowWrap: "anywhere" }}>{listed.map((t) => `${t.p}/${t.q}`).join(", ")}</p>
      <table className="table">
        <tbody>
          <tr><td>cover the n-th rational by an interval of length ε/2ⁿ; total length is below</td><td className="mono">ε(1 − 2^−{listed.length}) &lt; ε</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Rows are numerators, columns denominators. The path runs along each diagonal in turn, so every fraction is reached
        after finitely many steps; repeats like 2/2 are skipped. So the rationals can be listed, and the list can be covered by
        intervals of total length as small as we like. No such list exists for the reals.
      </figcaption>
    </figure>
  );
}
