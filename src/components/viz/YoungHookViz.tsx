"use client";

import { useState } from "react";

function partitions(n: number, max = n): number[][] {
  if (n === 0) return [[]];
  const out: number[][] = [];
  for (let k = Math.min(n, max); k >= 1; k--) for (const p of partitions(n - k, k)) out.push([k, ...p]);
  return out;
}
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));

/** Young diagrams of n, their hook lengths and the hook length formula for the dimension of the Specht module. */
export function YoungHookViz() {
  const [n, setN] = useState(4);
  const [k, setK] = useState(1);
  const ps = partitions(n);
  const lam = ps[Math.min(k, ps.length - 1)];
  const conj = Array.from({ length: lam[0] }, (_, j) => lam.filter((r) => r > j).length);
  const hooks = lam.map((r, i) => Array.from({ length: r }, (_, j) => r - j - 1 + conj[j] - i - 1 + 1));
  const prod = hooks.flat().reduce((a, b) => a * b, 1);
  const dim = fact(n) / prod;
  const dims = ps.map((p) => {
    const c = Array.from({ length: p[0] }, (_, j) => p.filter((r) => r > j).length);
    return fact(n) / p.map((r, i) => Array.from({ length: r }, (_, j) => r - j + c[j] - i - 1)).flat().reduce((a, b) => a * b, 1);
  });
  const sumsq = dims.reduce((a, d) => a + d * d, 0);
  const s = 34, X0 = 30, Y0 = 16;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={2} max={6} step={1} value={n} onChange={(e) => { setN(Number(e.target.value)); setK(0); }} aria-label="n" /></label>
      </div>
      <div className="segmented" role="group" aria-label="partition">
        {ps.map((p, i) => <button key={p.join(",")} type="button" aria-pressed={lam === p} className={lam === p ? "seg is-on" : "seg"} onClick={() => setK(i)}>({p.join(",")})</button>)}
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A Young diagram with its hook lengths" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {hooks.map((row, i) => row.map((h, j) => (
          <g key={`${i}-${j}`}>
            <rect x={X0 + j * s} y={Y0 + i * s} width={s} height={s} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={X0 + j * s + s / 2} y={Y0 + i * s + s / 2 + 5} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 14 }}>{h}</text>
          </g>
        )))}
        <text x={280} y={34} style={{ fill: "var(--text-muted)", fontSize: 12 }}>dimensions for n = {n}:</text>
        {ps.map((p, i) => (
          <text key={p.join(",")} x={280} y={54 + i * 15} className="mono" style={{ fill: lam === p ? "var(--accent)" : "var(--text-muted)", fontSize: 11, fontWeight: lam === p ? 700 : 400 }}>
            ({p.join(",")}): {dims[i]}
          </text>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        dim = {n}! / (product of hooks) = {fact(n)} / {prod} = {dim}. Sum of squares over all partitions: {sumsq} = {n}!.
      </p>
      <figcaption className="viz-caption">
        Each box&rsquo;s hook is the box itself, the boxes to its right and the boxes below it. The hook length formula
        gives the dimension of the irreducible representation of Sₙ labelled by the partition. The squares of these
        dimensions add up to n!, as they must.
      </figcaption>
    </figure>
  );
}
