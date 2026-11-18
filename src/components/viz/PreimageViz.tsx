"use client";

import { useState } from "react";

const f = (x: number) => 0.5 + 0.35 * Math.sin(2 * Math.PI * 1.5 * x) * (1 - 0.4 * x) + 0.1 * x;
const BANDS: [number, number][] = [[0.6, 0.8], [0.3, 0.5], [0.45, 0.55], [0.85, 1]];

/** Preimage of an interval under a function: the set where the graph lies in a band. */
export function PreimageViz() {
  const [b, setB] = useState(0);
  const [lo, hi] = BANDS[b];
  const N = 2000;
  const xs = Array.from({ length: N + 1 }, (_, i) => i / N);
  const inside = xs.map((x) => f(x) >= lo && f(x) < hi);
  const runs: [number, number][] = [];
  let start = -1;
  inside.forEach((v, i) => {
    if (v && start < 0) start = i;
    if ((!v || i === N) && start >= 0) { runs.push([xs[start], xs[v ? i : i - 1]]); start = -1; }
  });
  const meas = runs.reduce((s, [a, c]) => s + c - a, 0);
  const X = (x: number) => 40 + x * 450, Y = (y: number) => 170 - y * 150;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="interval of values">
        {BANDS.map(([a, c], i) => <button key={i} type="button" aria-pressed={b === i} className={b === i ? "seg is-on" : "seg"} onClick={() => setB(i)}>[{a}, {c})</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A graph, a horizontal band, and the part of the axis where the graph is in the band" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(0)} y={Y(hi)} width={450} height={Y(lo) - Y(hi)} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(1)} style={{ stroke: "var(--text-muted)" }} />
        <polyline points={xs.filter((_, i) => i % 10 === 0).map((x) => `${X(x)},${Y(f(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        {runs.map(([a, c], i) => <rect key={i} x={X(a)} y={Y(0) - 4} width={Math.max(2, X(c) - X(a))} height={8} style={{ fill: "var(--danger)" }} />)}
        <text x={X(0) - 6} y={Y(lo) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{lo}</text>
        <text x={X(0) - 6} y={Y(hi) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{hi}</text>
        <text x={X(0)} y={192} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={192} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        f⁻¹([{lo}, {hi})) is {runs.length === 0 ? "empty" : `a union of ${runs.length} interval${runs.length === 1 ? "" : "s"}`} (red), of total length about {meas.toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        A function is measurable when every such preimage is a measurable set, so that we can ask how much of the domain
        lies where f takes values in a given range. That question, not the shape of the graph, is what the Lebesgue integral needs.
      </figcaption>
    </figure>
  );
}
