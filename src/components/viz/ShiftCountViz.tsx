"use client";

import { useState } from "react";

const SYSTEMS: { name: string; syms: string[]; A: number[][]; rule: string }[] = [
  { name: "full 2-shift", syms: ["0", "1"], A: [[1, 1], [1, 1]], rule: "any sequence of 0s and 1s" },
  { name: "golden mean shift", syms: ["0", "1"], A: [[1, 1], [1, 0]], rule: "no two 1s in a row" },
  { name: "no repeats on 3", syms: ["a", "b", "c"], A: [[0, 1, 1], [1, 0, 1], [1, 1, 0]], rule: "three symbols, never the same twice in a row" },
];

const mul = (X: number[][], Y: number[][]) => X.map((r) => Y[0].map((_, j) => r.reduce((s, v, k) => s + v * Y[k][j], 0)));
export function matPow(A: number[][], n: number) { let R: number[][] = A.map((r, i) => r.map((_, j) => (i === j ? 1 : 0))); for (let k = 0; k < n; k++) R = mul(R, A); return R; }
/** Number of allowed words of length n (sum of the entries of Aⁿ⁻¹) and of points of period n (trace of Aⁿ). */
export function counts(A: number[][], n: number) {
  const W = matPow(A, n - 1).flat().reduce((s, v) => s + v, 0);
  const P = matPow(A, n).reduce((s, r, i) => s + r[i], 0);
  return { W, P };
}
const words = (A: number[][], syms: string[], n: number) => {
  let ws: number[][] = syms.map((_, i) => [i]);
  for (let k = 1; k < n; k++) ws = ws.flatMap((w) => syms.map((_, j) => j).filter((j) => A[w[w.length - 1]][j]).map((j) => [...w, j]));
  return ws.map((w) => w.map((i) => syms[i]).join(""));
};

/** Shifts of finite type: count the allowed words and periodic points, and estimate the entropy. */
export function ShiftCountViz() {
  const [k, setK] = useState(1);
  const [n, setN] = useState(5);
  const S = SYSTEMS[k];
  const c = counts(S.A, n);
  const ws = n <= 6 ? words(S.A, S.syms, n) : [];
  const ratio = n > 1 ? c.W / counts(S.A, n - 1).W : NaN;
  const m = S.syms.length;
  const pos = (i: number) => [90 + 70 * Math.cos((2 * Math.PI * i) / m - Math.PI / 2), 95 + 55 * Math.sin((2 * Math.PI * i) / m - Math.PI / 2) + (m === 2 ? 20 : 0)];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="shift">
        {SYSTEMS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>length n = {n} <input type="range" min={1} max={14} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="Transition graph of the shift" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="scv-arrow" viewBox="0 0 10 10" refX={10} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker>
        </defs>
        {S.A.flatMap((row, i) => row.map((v, j) => {
          if (!v) return null;
          const [x1, y1] = pos(i), [x2, y2] = pos(j);
          if (i === j) return <path key={`${i}${j}`} d={`M${x1 - 8},${y1 - 14} C${x1 - 30},${y1 - 55} ${x1 + 30},${y1 - 55} ${x1 + 8},${y1 - 14}`} markerEnd="url(#scv-arrow)" style={{ fill: "none", stroke: "var(--text-muted)" }} />;
          const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ox = (-dy / L) * 8, oy = (dx / L) * 8;
          return <line key={`${i}${j}`} x1={x1 + (dx / L) * 18 + ox} y1={y1 + (dy / L) * 18 + oy} x2={x2 - (dx / L) * 18 + ox} y2={y2 - (dy / L) * 18 + oy} markerEnd="url(#scv-arrow)" style={{ stroke: "var(--text-muted)" }} />;
        }))}
        {S.syms.map((s, i) => { const [x, y] = pos(i); return <g key={s}><circle cx={x} cy={y} r={16} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} /><text x={x} y={y + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{s}</text></g>; })}
        <text x={200} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>Rule: {S.rule}.</text>
        <text x={200} y={70} style={{ fill: "var(--text)", fontSize: 12 }}>Allowed words of length {n}: {c.W}</text>
        <text x={200} y={95} style={{ fill: "var(--text)", fontSize: 12 }}>Points of period dividing {n} (trace of Aⁿ): {c.P}</text>
        <text x={200} y={120} style={{ fill: "var(--text)", fontSize: 12 }}>Growth ratio of word counts: {Number.isFinite(ratio) ? ratio.toFixed(4) : "–"}</text>
        <text x={200} y={145} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Entropy = log of the limit of that ratio, the largest eigenvalue of A.</text>
      </svg>
      <p className="mono" style={{ fontSize: 12, fontWeight: 700, wordBreak: "break-word" }}>
        {ws.length ? `Words: ${ws.join(" ")}` : "Too many words to list; the counts are computed from powers of A."}
      </p>
      <figcaption className="viz-caption">
        A shift of finite type is the set of infinite sequences that follow a graph: each symbol may be followed only by
        the symbols it has arrows to. With A the graph&rsquo;s matrix, the number of allowed words of length n is the sum
        of the entries of Aⁿ⁻¹, and the number of points with σⁿx = x is the trace of Aⁿ.
      </figcaption>
    </figure>
  );
}
