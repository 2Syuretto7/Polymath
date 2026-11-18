"use client";

import { useState } from "react";

const FNS: { name: string; f: (x: number) => number; note: string }[] = [
  { name: "x sin(1/x)", f: (x) => (x === 0 ? 0 : x * Math.sin(1 / x)), note: "The swings shrink like x, but their sum behaves like the harmonic series: the variation is infinite. Continuous, yet not of bounded variation." },
  { name: "x² sin(1/x)", f: (x) => (x === 0 ? 0 : x * x * Math.sin(1 / x)), note: "The swings shrink like x², and their sum converges: bounded variation, so a difference of two increasing functions." },
  { name: "x − x²", f: (x) => x - x * x, note: "Up by 1/4, then down by 1/4: total variation 1/2, attained already by the partition 0, 1/2, 1." },
];

/** Sums of |f(xᵢ) − f(xᵢ₋₁)| over finer and finer partitions of [0, 1]. */
export function variationSum(f: (x: number) => number, n: number): number {
  let s = 0, prev = f(0);
  for (let i = 1; i <= n; i++) { const v = f(i / n); s += Math.abs(v - prev); prev = v; }
  return s;
}

export function VariationSumViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(2);
  const n = 10 ** e;
  const F = FNS[k];
  const X = (x: number) => 30 + x * 460, Y = (y: number) => 100 - y * 110;
  const fine = Array.from({ length: 4001 }, (_, i) => i / 4000);
  const graph = fine.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(F.f(x)).toFixed(1)}`).join(" ");
  const poly = n <= 100 ? Array.from({ length: n + 1 }, (_, i) => `${X(i / n).toFixed(1)},${Y(F.f(i / n)).toFixed(1)}`).join(" ") : "";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((f, i) => <button key={f.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.name}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A function and a partition polygon" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
        <path d={graph} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.2 }} />
        {poly && <polyline points={poly} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />}
      </svg>
      <div className="segmented" role="group" aria-label="partition">
        {[1, 2, 3, 4, 5].map((x) => <button key={x} type="button" aria-pressed={e === x} className={e === x ? "seg is-on" : "seg"} onClick={() => setE(x)}>{10 ** x} pieces</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>sum of |f(xᵢ) − f(xᵢ₋₁)| with {n} equal pieces: {variationSum(F.f, n).toFixed(4)}</p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{F.note}</p>
      <figcaption className="viz-caption">
        The total variation is the supremum of these sums over all partitions: the total vertical distance travelled by the
        graph. The polygon through the partition points is drawn for up to 100 pieces.
      </figcaption>
    </figure>
  );
}
