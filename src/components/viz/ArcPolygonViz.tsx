"use client";

import { useState } from "react";

type V2 = [number, number];
type C = { label: string; formula: string; t0: number; t1: number; p: (t: number) => V2; L: number; Llabel: string };
const CURVES: C[] = [
  { label: "cycloid arch", formula: "(t − sin t, 1 − cos t), 0 ≤ t ≤ 2π", t0: 0, t1: 2 * Math.PI, p: (t) => [t - Math.sin(t), 1 - Math.cos(t)], L: 8, Llabel: "8" },
  { label: "catenary", formula: "(t, cosh t), −1 ≤ t ≤ 1", t0: -1, t1: 1, p: (t) => [t, Math.cosh(t)], L: 2 * Math.sinh(1), Llabel: "2 sinh 1" },
  { label: "quarter circle", formula: "(cos t, sin t), 0 ≤ t ≤ π/2", t0: 0, t1: Math.PI / 2, p: (t) => [Math.cos(t), Math.sin(t)], L: Math.PI / 2, Llabel: "π/2" },
  { label: "parabola", formula: "(t, t²), 0 ≤ t ≤ 1", t0: 0, t1: 1, p: (t) => [t, t * t], L: (2 * Math.sqrt(5) + Math.asinh(2)) / 4, Llabel: "(2√5 + arsinh 2)/4" },
];

/** Arc length as the limit of inscribed polygons: the polygon is never longer than the curve. */
export function ArcPolygonViz() {
  const [ci, setCi] = useState(0);
  const [n, setN] = useState(4);
  const c = CURVES[ci];
  const N = 300;
  const pts = Array.from({ length: N + 1 }, (_, i) => c.p(c.t0 + (i / N) * (c.t1 - c.t0)));
  const poly = Array.from({ length: n + 1 }, (_, i) => c.p(c.t0 + (i / n) * (c.t1 - c.t0)));
  let len = 0;
  for (let i = 1; i <= n; i++) len += Math.hypot(poly[i][0] - poly[i - 1][0], poly[i][1] - poly[i - 1][1]);
  const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
  const minX = Math.min(...xs) - 0.2, maxX = Math.max(...xs) + 0.2, minY = Math.min(...ys) - 0.2, maxY = Math.max(...ys) + 0.2;
  const W = 520, H = 240;
  const s = Math.min((W - 20) / (maxX - minX), (H - 20) / (maxY - minY));
  const ox = (W - s * (maxX - minX)) / 2, oy = (H - s * (maxY - minY)) / 2;
  const X = (x: number) => ox + (x - minX) * s, Y = (y: number) => H - oy - (y - minY) * s;
  const path = (q: V2[]) => q.map((r, i) => `${i ? "L" : "M"}${X(r[0]).toFixed(1)},${Y(r[1]).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Curve">
        {CURVES.map((x, i) => <button key={x.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>number of chords n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={64} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The curve and an inscribed polygon" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={path(pts)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={path(poly)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {n <= 32 && poly.map((q, i) => <circle key={i} cx={X(q[0])} cy={Y(q[1])} r={3.5} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>α(t) = {c.formula}</div>
        <div>polygon length = {len.toFixed(5)}</div>
        <div>arc length = {c.Llabel} = {c.L.toFixed(5)}</div>
        <div style={{ fontWeight: 700 }}>shortfall = {(c.L - len).toFixed(5)}</div>
      </div>
      <figcaption className="viz-caption">
        The points split the parameter interval into n equal steps. By the triangle inequality each chord is no longer than the
        arc it cuts off, so every inscribed polygon falls short of the curve, and the arc length is the least upper bound of
        their lengths. For a smooth curve it equals the integral of the speed |α′(t)|.
      </figcaption>
    </figure>
  );
}
