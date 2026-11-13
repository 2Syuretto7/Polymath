"use client";

import { useState, type ReactElement } from "react";

type Pt = [number, number];
const MS: { name: string; d: (p: Pt, q: Pt) => number; note: string }[] = [
  { name: "Euclidean", d: (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]), note: "d = √((x₁ − x₂)² + (y₁ − y₂)²), the usual straight-line distance." },
  { name: "taxicab", d: (p, q) => Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]), note: "d = |x₁ − x₂| + |y₁ − y₂|, the distance along a grid of streets. Balls are diamonds." },
  { name: "maximum", d: (p, q) => Math.max(Math.abs(p[0] - q[0]), Math.abs(p[1] - q[1])), note: "d = max(|x₁ − x₂|, |y₁ − y₂|). Balls are squares." },
  { name: "discrete", d: (p, q) => (Math.abs(p[0] - q[0]) < 1e-9 && Math.abs(p[1] - q[1]) < 1e-9 ? 0 : 1), note: "d = 0 if the points are equal and 1 otherwise. A ball of radius at most 1 is a single point; a larger one is everything." },
  {
    name: "railway",
    d: (p, q) => {
      const cr = p[0] * q[1] - p[1] * q[0];
      return Math.abs(cr) < 1e-9 && p[0] * q[0] + p[1] * q[1] >= 0 ? Math.hypot(p[0] - q[0], p[1] - q[1]) : Math.hypot(p[0], p[1]) + Math.hypot(q[0], q[1]);
    },
    note: "Every journey goes through the hub at the origin, unless both points lie on the same line out of it. Balls are a segment of track, plus a disc around the hub if the radius is large enough.",
  },
];

/** Balls B(c, r) = {p : d(c, p) < r} for different metrics on the plane. */
export function MetricBallViz() {
  const [mi, setMi] = useState(0);
  const [cx, setCx] = useState(1);
  const [cy, setCy] = useState(0.5);
  const [r, setR] = useState(1);
  const m = MS[mi];
  const W = 360, B = 2.5, N = 90, cell = W / N;
  const X = (x: number) => ((x + B) / (2 * B)) * W, Y = (y: number) => W - ((y + B) / (2 * B)) * W;
  const cells: ReactElement[] = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const p: Pt = [-B + (i + 0.5) * (2 * B) / N, B - (j + 0.5) * (2 * B) / N];
    // the railway segment is too thin to sample, so it is drawn separately below
    if (m.d([cx, cy], p) < r) cells.push(<rect key={`${i},${j}`} x={i * cell} y={j * cell} width={cell + 0.3} height={cell + 0.3} style={{ fill: "var(--accent)", fillOpacity: 0.45 }} />);
  }
  const rho = Math.hypot(cx, cy);
  let seg: [Pt, Pt] | null = null;
  if (m.name === "railway" && rho > 0) {
    const ux = cx / rho, uy = cy / rho, a = Math.max(0, rho - r), b = rho + r;
    seg = [[ux * a, uy * a], [ux * b, uy * b]];
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Metric">
        {MS.map((x, i) => <button key={x.name} type="button" aria-pressed={mi === i} className={mi === i ? "seg is-on" : "seg"} onClick={() => setMi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>centre x: <span className="mono">{cx}</span></span><input type="range" min={-2} max={2} step={0.25} value={cx} onChange={(e) => setCx(Number(e.target.value))} /></label>
        <label><span>centre y: <span className="mono">{cy}</span></span><input type="range" min={-2} max={2} step={0.25} value={cy} onChange={(e) => setCy(Number(e.target.value))} /></label>
        <label><span>radius r: <span className="mono">{r}</span></span><input type="range" min={0.25} max={3} step={0.25} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label={`Ball of radius ${r} in the ${m.name} metric`} style={{ width: "100%", maxWidth: 400, display: "block", margin: "8px auto" }}>
        <rect x={0} y={0} width={W} height={W} style={{ fill: "none", stroke: "var(--border)" }} />
        {cells}
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {seg && <line x1={X(seg[0][0])} y1={Y(seg[0][1])} x2={X(seg[1][0])} y2={Y(seg[1][1])} style={{ stroke: "var(--accent)", strokeWidth: 4 }} />}
        {m.name === "discrete" && r <= 1 && <circle cx={X(cx)} cy={Y(cy)} r={6} style={{ fill: "var(--accent)" }} />}
        <circle cx={X(cx)} cy={Y(cy)} r={3.5} style={{ fill: "var(--text)" }} />
      </svg>
      <p style={{ margin: "4px 0" }}>{m.note}</p>
      <figcaption className="viz-caption">
        The shaded region is the open ball B(c, r), every point at distance less than r from the centre. Each choice is a
        metric on the same plane: it is never negative, is zero only between equal points, is symmetric, and obeys the
        triangle inequality.
      </figcaption>
    </figure>
  );
}
