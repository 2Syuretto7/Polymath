"use client";

import { useState } from "react";

/** A function on [0, 1] constant on 64 dyadic cells. */
export const CELLS: number[] = Array.from({ length: 64 }, (_, i) =>
  i === 5 ? 8 : i === 6 ? 6 : i === 20 || i === 21 ? 4 : i === 40 ? 12 : i === 41 ? 3 : i >= 55 && i <= 58 ? 2.5 : 0.5,
);
const avg = (a: number, b: number) => CELLS.slice(a, b).reduce((s, v) => s + v, 0) / (b - a);
export const MEAN = avg(0, 64);

/** Stopping time: the maximal dyadic intervals whose average exceeds α, as [first cell, end cell) pairs. */
export function czIntervals(alpha: number): [number, number][] {
  const out: [number, number][] = [];
  const go = (a: number, b: number) => {
    if (b - a === 1) return;
    const m = (a + b) / 2;
    for (const [c, d] of [[a, m], [m, b]] as [number, number][]) {
      if (avg(c, d) > alpha) out.push([c, d]);
      else go(c, d);
    }
  };
  go(0, 64);
  return out;
}

/** The Calderón–Zygmund decomposition of a function on [0, 1] at height α. */
export function CZDecompViz() {
  const [alpha, setAlpha] = useState(2);
  const Q = czIntervals(alpha);
  const len = Q.reduce((s, [a, b]) => s + (b - a) / 64, 0);
  const px = (c: number) => 30 + c * 7.5, py = (v: number) => 210 - v * 14;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>height α = {alpha.toFixed(1)} <input type="range" min={1} max={10} step={0.5} value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} aria-label="alpha" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Selected dyadic intervals" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Q.map(([a, b]) => (
          <g key={a}>
            <rect x={px(a)} y={30} width={px(b) - px(a)} height={180} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <line x1={px(a)} y1={py(avg(a, b))} x2={px(b)} y2={py(avg(a, b))} style={{ stroke: "var(--success)", strokeWidth: 2.5 }} />
          </g>
        ))}
        {CELLS.map((v, i) => <rect key={i} x={px(i) + 1} y={py(Math.min(v, 12.8))} width={5.5} height={210 - py(Math.min(v, 12.8))} style={{ fill: "var(--text-faint)" }} />)}
        <line x1={30} y1={210} x2={510} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={30} y1={py(alpha)} x2={510} y2={py(alpha)} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={px(v * 64)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={30} y={20} style={{ fill: "var(--text-muted)", fontSize: 10 }}>grey: f; boxes: selected intervals; green: the average of f on each; red: α</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {Q.length} intervals, total length {len.toFixed(4)}, at most ‖f‖₁/α = {(MEAN / alpha).toFixed(4)}. Each average lies between α and 2α; off the intervals f ≤ α.
      </p>
      <figcaption className="viz-caption">
        Start with [0, 1], where the average of f is {MEAN.toFixed(3)}, at most α. Halve repeatedly and stop at the first
        dyadic interval whose average exceeds α. Its parent was not selected, so the average is at most 2α. Replacing f by
        its averages on the selected intervals gives the good part, bounded by 2α; what remains has mean zero on each
        interval.
      </figcaption>
    </figure>
  );
}
