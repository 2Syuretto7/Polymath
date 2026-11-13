"use client";

import { useState } from "react";

type V2 = [number, number];
type C = { label: string; formula: string; t0: number; t1: number; p: (t: number) => V2; d1: (t: number) => V2; d2: (t: number) => V2; box: [number, number, number, number] };
const CURVES: C[] = [
  { label: "parabola", formula: "(t, t²)", t0: -1.6, t1: 1.6, p: (t) => [t, t * t], d1: (t) => [1, 2 * t], d2: () => [0, 2], box: [-2.4, 2.4, -0.6, 2.8] },
  { label: "ellipse", formula: "(2 cos t, sin t)", t0: 0, t1: 2 * Math.PI, p: (t) => [2 * Math.cos(t), Math.sin(t)], d1: (t) => [-2 * Math.sin(t), Math.cos(t)], d2: (t) => [-2 * Math.cos(t), -Math.sin(t)], box: [-2.8, 2.8, -1.8, 1.8] },
  { label: "sine wave", formula: "(t, sin t)", t0: -3.5, t1: 3.5, p: (t) => [t, Math.sin(t)], d1: (t) => [1, Math.cos(t)], d2: (t) => [0, -Math.sin(t)], box: [-3.8, 3.8, -2.2, 2.2] },
];

/** Curvature through the osculating circle: the circle that best fits the curve at a point has radius 1/κ. */
export function OsculatingViz() {
  const [ci, setCi] = useState(0);
  const [u, setU] = useState(0.5);
  const c = CURVES[ci];
  const t = c.t0 + u * (c.t1 - c.t0);
  const [x, y] = c.p(t), [x1, y1] = c.d1(t), [x2, y2] = c.d2(t);
  const sp = Math.hypot(x1, y1);
  const k = (x1 * y2 - y1 * x2) / (sp * sp * sp);
  const n: V2 = [-y1 / sp, x1 / sp];
  const flat = Math.abs(k) < 1e-3;
  const R = flat ? Infinity : 1 / k;
  const centre: V2 = flat ? [x, y] : [x + R * n[0], y + R * n[1]];
  const [a, b, lo, hi] = c.box;
  const W = 520, H = 300;
  const s = Math.min(W / (b - a), H / (hi - lo));
  const X = (v: number) => (W - s * (b - a)) / 2 + (v - a) * s, Y = (v: number) => H - (H - s * (hi - lo)) / 2 - (v - lo) * s;
  const N = 300;
  const d = Array.from({ length: N + 1 }, (_, i) => c.p(c.t0 + (i / N) * (c.t1 - c.t0))).map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(" ");
  const tx = x1 / sp, ty = y1 / sp;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Curve">
        {CURVES.map((q, i) => <button key={q.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{q.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>parameter t: <span className="mono">{t.toFixed(3)}</span></span>
          <input type="range" min={0} max={1} step={0.0025} value={u} onChange={(e) => setU(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The curve and its osculating circle at a point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><clipPath id="osc-clip"><rect x={0} y={0} width={W} height={H} /></clipPath></defs>
        <g clipPath="url(#osc-clip)">
          <path d={d} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
          {flat ? (
            <line x1={X(x - 6 * tx)} y1={Y(y - 6 * ty)} x2={X(x + 6 * tx)} y2={Y(y + 6 * ty)} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
          ) : (
            <g>
              <circle cx={X(centre[0])} cy={Y(centre[1])} r={Math.abs(R) * s} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
              <line x1={X(x)} y1={Y(y)} x2={X(centre[0])} y2={Y(centre[1])} style={{ stroke: "var(--accent)", strokeDasharray: "4 3" }} />
              <circle cx={X(centre[0])} cy={Y(centre[1])} r={3} style={{ fill: "var(--accent)" }} />
            </g>
          )}
          <circle cx={X(x)} cy={Y(y)} r={5} style={{ fill: "var(--text)" }} />
        </g>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>α(t) = {c.formula} = ({x.toFixed(3)}, {y.toFixed(3)})</div>
        <div>signed curvature κ = {flat ? "0" : k.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>{flat ? "κ = 0: the osculating circle becomes the tangent line" : `radius of curvature 1/|κ| = ${Math.abs(R).toFixed(4)}`}</div>
      </div>
      <figcaption className="viz-caption">
        Of all circles touching the curve at the point, the osculating circle agrees with it to second order. Its radius is
        1/|κ|, so tight bends have large curvature. For a plane curve κ = (x′y″ − y′x″)/(x′² + y′²)<sup>3/2</sup>, positive when
        the curve turns anticlockwise.
      </figcaption>
    </figure>
  );
}
