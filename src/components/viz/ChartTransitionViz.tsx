"use client";

import { useState } from "react";

/** The transition map w = 1/z between the two charts of the Riemann sphere. */
export function toW(x: number, y: number): [number, number] | null {
  const d = x * x + y * y;
  return d < 1e-12 ? null : [x / d, -y / d];
}

/** A point of the Riemann sphere in the chart z and in the chart w = 1/z, with a small square and its image. */
export function ChartTransitionViz() {
  const [x, setX] = useState(1.5);
  const [y, setY] = useState(0.5);
  const S = 38;
  const pz = (cx: number, a: number, b: number): [number, number] => [cx + a * S, 125 - b * S];
  const w = toW(x, y);
  const h = 0.25;
  const square: [number, number][] = [];
  for (let t = 0; t <= 40; t++) {
    const s = t / 10;
    const side = Math.floor(s) % 4, u = s - Math.floor(s);
    const [a, b] = [[x - h + 2 * h * u, y - h], [x + h, y - h + 2 * h * u], [x + h - 2 * h * u, y + h], [x - h, y + h - 2 * h * u]][side];
    square.push([a, b]);
  }
  const img = square.map(([a, b]) => toW(a, b));
  const ok = img.every((p) => p !== null && Math.abs(p[0]) < 3.2 && Math.abs(p[1]) < 3.2);
  const f = (v: number) => v.toFixed(3).replace("-", "−");
  const cfmt = (a: number, b: number) => `${f(a)} ${b < 0 ? "−" : "+"} ${Math.abs(b).toFixed(3)}i`;
  const plane = (cx: number, label: string) => (
    <g>
      <rect x={cx - 3.2 * S} y={125 - 3.2 * S} width={6.4 * S} height={6.4 * S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
      <line x1={cx - 3.2 * S} y1={125} x2={cx + 3.2 * S} y2={125} style={{ stroke: "var(--grid-line)" }} />
      <line x1={cx} y1={125 - 3.2 * S} x2={cx} y2={125 + 3.2 * S} style={{ stroke: "var(--grid-line)" }} />
      <circle cx={cx} cy={125} r={S} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
      <text x={cx - 3.2 * S + 6} y={125 - 3.2 * S + 14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label}</text>
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>Re z = {x.toFixed(1).replace("-", "−")} <input type="range" min={-3} max={3} step={0.1} value={x} onChange={(e) => setX(Number(e.target.value))} aria-label="real part of z" /></label>
        <label>Im z = {y.toFixed(1).replace("-", "−")} <input type="range" min={-3} max={3} step={0.1} value={y} onChange={(e) => setY(Number(e.target.value))} aria-label="imaginary part of z" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="A point in two charts of the Riemann sphere" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {plane(135, "chart z")}
        {plane(405, "chart w = 1/z")}
        <path d={square.map(([a, b], i) => { const [u, v] = pz(135, a, b); return `${i ? "L" : "M"}${u.toFixed(1)},${v.toFixed(1)}`; }).join("")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <circle cx={pz(135, x, y)[0]} cy={pz(135, x, y)[1]} r={4} style={{ fill: "var(--danger)" }} />
        {ok && <path d={img.map((p, i) => { const [u, v] = pz(405, p![0], p![1]); return `${i ? "L" : "M"}${u.toFixed(1)},${v.toFixed(1)}`; }).join("")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />}
        {w && Math.abs(w[0]) < 3.2 && Math.abs(w[1]) < 3.2 && <circle cx={pz(405, w[0], w[1])[0]} cy={pz(405, w[0], w[1])[1]} r={4} style={{ fill: "var(--danger)" }} />}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        z = {cfmt(x, y)}, |z| = {Math.hypot(x, y).toFixed(3)}. {w ? `w = 1/z = ${cfmt(w[0], w[1])}, |w| = ${(1 / Math.hypot(x, y)).toFixed(3)}.` : "This is the point z = 0, which the chart w misses: it is w = ∞."}
      </p>
      <figcaption className="viz-caption">
        The Riemann sphere is covered by two charts: z on the sphere minus the north pole, and w on the sphere minus the
        south pole. Where both are defined, w = 1/z, a holomorphic map with holomorphic inverse. The small square is carried
        to a curved quadrilateral whose corners still meet at right angles. The dashed circle |z| = 1 goes to |w| = 1.
      </figcaption>
    </figure>
  );
}
