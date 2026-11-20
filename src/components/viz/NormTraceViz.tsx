"use client";

import { useMemo, useState } from "react";
import { DS, isOneMod4 } from "./QuadIntegerViz";

/** Trace and norm of a + bω in the ring of integers of ℚ(√d). */
export function traceNorm(d: number, a: number, b: number): [number, number] {
  if (isOneMod4(d)) return [2 * a + b, a * a + a * b + (b * b * (1 - d)) / 4];
  return [2 * a, a * a - d * b * b];
}
/** The discriminant of ℚ(√d): d when d ≡ 1 (mod 4), and 4d otherwise. */
export const discriminant = (d: number) => (isOneMod4(d) ? d : 4 * d);

/** The integers n from 1 to max such that n or −n is the norm of an algebraic integer of ℚ(√d). */
export function normsUpTo(d: number, max: number) {
  const hit = new Set<number>();
  const B = d < 0 ? 20 : 160;
  for (let a = -B; a <= B; a++) for (let b = -B; b <= B; b++) {
    const n = Math.abs(traceNorm(d, a, b)[1]);
    if (n >= 1 && n <= max) hit.add(n);
  }
  return hit;
}

/** Trace, norm and discriminant in a quadratic field, with the integers that occur as norms. */
export function NormTraceViz() {
  const [k, setK] = useState(10);
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const d = DS[k];
  const half = isOneMod4(d);
  const [t, n] = traceNorm(d, a, b);
  const hit = useMemo(() => normsUpTo(d, 60), [d]);
  const neg = (v: number) => String(v).replace("-", "−");
  const w = half ? `(1 + √${neg(d)})/2` : `√${neg(d)}`;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>d = {neg(d)} <input type="range" min={0} max={DS.length - 1} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="d" /></label>
        <label>a = {neg(a)} <input type="range" min={-4} max={4} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>b = {neg(b)} <input type="range" min={-4} max={4} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="Which integers from 1 to 60 are norms" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: 60 }, (_, i) => i + 1).map((m) => {
          const x = 14 + ((m - 1) % 15) * 34, y = 8 + Math.floor((m - 1) / 15) * 34;
          const on = hit.has(m), cur = Math.abs(n) === m;
          return (
            <g key={m}>
              <rect x={x} y={y} width={30} height={30} rx={4} style={{ fill: on ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: cur ? "var(--danger)" : on ? "var(--accent)" : "var(--border)", strokeWidth: cur ? 2.5 : 1 }} />
              <text x={x + 15} y={y + 19} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 11 }}>{m}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        α = {neg(a)} + {neg(b)}·{w}: Tr(α) = {neg(t)}, N(α) = {neg(n)}, so α is a root of x² {t > 0 ? "−" : "+"} {Math.abs(t)}x {n < 0 ? "−" : "+"} {Math.abs(n)}. Discriminant of the field: {neg(discriminant(d))}. Norms up to 60 (up to sign): {hit.size}.
      </p>
      <figcaption className="viz-caption">
        The norm of α is the product of its conjugates and the trace is their sum; both are integers when α is an algebraic
        integer. Shaded squares are the values of |N(α)| from 1 to 60. For d = −1 these are the sums of two squares. The
        discriminant measures the size of the ring of integers as a lattice.
      </figcaption>
    </figure>
  );
}
