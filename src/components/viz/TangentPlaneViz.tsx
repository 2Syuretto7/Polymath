"use client";

import { useState } from "react";

type V3 = [number, number, number];
type G = { label: string; formula: string; f: (x: number, y: number) => number; fx: (x: number, y: number) => number; fy: (x: number, y: number) => number };
const GRAPHS: G[] = [
  { label: "paraboloid", formula: "x² + y²", f: (x, y) => x * x + y * y, fx: (x) => 2 * x, fy: (_, y) => 2 * y },
  { label: "saddle", formula: "x² − y²", f: (x, y) => x * x - y * y, fx: (x) => 2 * x, fy: (_, y) => -2 * y },
  { label: "monkey saddle", formula: "x³ − 3xy²", f: (x, y) => x * x * x - 3 * x * y * y, fx: (x, y) => 3 * x * x - 3 * y * y, fy: (x, y) => -6 * x * y },
];

/** The tangent plane to a graph z = f(x, y), spanned by the partial derivatives, and its unit normal. */
export function TangentPlaneViz() {
  const [gi, setGi] = useState(1);
  const [x0, setX0] = useState(0.4);
  const [y0, setY0] = useState(0.3);
  const [phi, setPhi] = useState(0.7);
  const g = GRAPHS[gi];
  const z0 = g.f(x0, y0), a = g.fx(x0, y0), b = g.fy(x0, y0);
  const len = Math.hypot(a, b, 1);
  const N: V3 = [-a / len, -b / len, 1 / len];
  const el = 0.5;
  const proj = ([x, y, z]: V3): [number, number] => {
    const x1 = x * Math.cos(phi) - y * Math.sin(phi), y1 = x * Math.sin(phi) + y * Math.cos(phi);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el) * 0.6)];
  };
  const K = 12, M = 40;
  const lines: [number, number][][] = [];
  for (let i = 0; i <= K; i++) {
    const c = -1 + (2 * i) / K;
    lines.push(Array.from({ length: M + 1 }, (_, j) => { const t = -1 + (2 * j) / M; return proj([c, t, g.f(c, t)]); }));
    lines.push(Array.from({ length: M + 1 }, (_, j) => { const t = -1 + (2 * j) / M; return proj([t, c, g.f(t, c)]); }));
  }
  const r = 0.45;
  const plane = [[-r, -r], [r, -r], [r, r], [-r, r]].map(([dx, dy]) => proj([x0 + dx, y0 + dy, z0 + a * dx + b * dy]));
  const all = lines.flat().concat(plane);
  const minX = Math.min(...all.map((q) => q[0])), maxX = Math.max(...all.map((q) => q[0]));
  const minY = Math.min(...all.map((q) => q[1])) - 0.3, maxY = Math.max(...all.map((q) => q[1]));
  const W = 520, H = 300;
  const sc = Math.min((W - 40) / (maxX - minX), (H - 40) / (maxY - minY));
  const X = (x: number) => (W - sc * (maxX - minX)) / 2 + (x - minX) * sc, Y = (y: number) => (H - sc * (maxY - minY)) / 2 + (y - minY) * sc;
  const path = (q: [number, number][]) => q.map((s, i) => `${i ? "L" : "M"}${X(s[0]).toFixed(1)},${Y(s[1]).toFixed(1)}`).join(" ");
  const [px, py] = proj([x0, y0, z0]);
  const [nx, ny] = proj([x0 + 0.6 * N[0], y0 + 0.6 * N[1], z0 + 0.6 * N[2]]);
  const s = (v: number) => (v < 0 ? "− " + Math.abs(v).toFixed(2) : "+ " + v.toFixed(2));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Surface">
        {GRAPHS.map((q, i) => <button key={q.label} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => setGi(i)}>{q.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>x₀: <span className="mono">{x0.toFixed(2)}</span></span>
          <input type="range" min={-0.8} max={0.8} step={0.01} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>y₀: <span className="mono">{y0.toFixed(2)}</span></span>
          <input type="range" min={-0.8} max={0.8} step={0.01} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
        <label><span>turn the view: <span className="mono">{phi.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The graph with its tangent plane and normal at a point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {lines.map((q, i) => <path key={i} d={path(q)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
        <path d={path(plane) + " Z"} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1.5, opacity: 0.85 }} />
        <line x1={X(px)} y1={Y(py)} x2={X(nx)} y2={Y(ny)} style={{ stroke: "var(--text)", strokeWidth: 3 }} />
        <text x={X(nx) + 5} y={Y(ny) - 5} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>N</text>
        <circle cx={X(px)} cy={Y(py)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>z = {g.formula}; at the point z₀ = {z0.toFixed(3)}</div>
        <div>tangent plane: z = {z0.toFixed(2)} {s(a)}(x − x₀) {s(b)}(y − y₀)</div>
        <div>unit normal N = ({N[0].toFixed(3)}, {N[1].toFixed(3)}, {N[2].toFixed(3)})</div>
        <div style={{ fontWeight: 700 }}>{Math.hypot(a, b) < 1e-3 ? "the tangent plane is horizontal: a critical point" : "the plane tilts in the direction of steepest ascent"}</div>
      </div>
      <figcaption className="viz-caption">
        The graph x(u, v) = (u, v, f(u, v)) has partial derivatives (1, 0, ∂f/∂x) and (0, 1, ∂f/∂y), which span the tangent plane.
        Their cross product (−∂f/∂x, −∂f/∂y, 1), scaled to length 1, is the unit normal. At a critical point of f the plane is
        horizontal; the saddle and monkey saddle still cross their tangent plane there.
      </figcaption>
    </figure>
  );
}
