"use client";

import { useState } from "react";

const METRICS = [
  { name: "Euclidean", g: (_x: number, _y: number): [number, number] => [1, 1], note: "g = dx² + dy²: unit vectors look the same everywhere." },
  { name: "hyperbolic half-plane", g: (_x: number, y: number): [number, number] => [y, y], note: "g = (dx² + dy²)/y²: vectors of a given length look smaller as y → 0." },
  { name: "stretched", g: (x: number, _y: number): [number, number] => [1 / (1 + x * x), 1], note: "g = (1 + x²)² dx² + dy²: horizontal motion costs more far from x = 0." },
];

/** Unit circles of a Riemannian metric on the plane, and the length of a horizontal path. */
export function MetricBallsViz() {
  const [k, setK] = useState(1);
  const [h, setH] = useState(50);
  const M = METRICS[k];
  const y0 = h / 100;
  const X = (x: number) => 260 + x * 100, Y = (y: number) => 190 - y * 80;
  // length of the path from (−1, y0) to (1, y0)
  let len = 0;
  const steps = 400;
  for (let i = 0; i < steps; i++) {
    const x = -1 + (2 * (i + 0.5)) / steps;
    const [sx] = M.g(x, y0);
    len += (2 / steps) / sx;
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="metric">
        {METRICS.map((m, i) => <button key={m.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>height of path y = {y0.toFixed(2)} <input type="range" min={10} max={200} value={h} onChange={(e) => setH(Number(e.target.value))} aria-label="height" /></label>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="Unit circles of the metric at grid points" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={Y(0)} x2={500} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        {[-2, -1, 0, 1, 2].flatMap((x) => [0.25, 0.5, 1, 1.5, 2].map((y) => {
          const [sx, sy] = M.g(x, y);
          return <ellipse key={`${x},${y}`} cx={X(x)} cy={Y(y)} rx={Math.min(30, 10 * sx)} ry={Math.min(30, 10 * sy)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1 }} />;
        }))}
        <line x1={X(-1)} y1={Y(y0)} x2={X(1)} y2={Y(y0)} style={{ stroke: "var(--danger)", strokeWidth: 3 }} />
        <text x={24} y={Y(0) + 14} style={{ fill: "var(--text-muted)", fontSize: 10 }}>y = 0</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Length of the red path from (−1, {y0.toFixed(2)}) to (1, {y0.toFixed(2)}): {len.toFixed(3)}.
      </p>
      <p style={{ fontSize: 13, margin: "4px 0" }}>{M.note}</p>
      <figcaption className="viz-caption">
        Each ellipse is the set of tangent vectors of length 1 at its centre, drawn to the same scale. A Riemannian metric
        chooses such an ellipse smoothly at every point, and lengths of curves are found by integrating the speed it
        measures.
      </figcaption>
    </figure>
  );
}
