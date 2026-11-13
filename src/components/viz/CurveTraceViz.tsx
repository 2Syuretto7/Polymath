"use client";

import { useState } from "react";

type V2 = [number, number];
type C = { label: string; formula: string; t0: number; t1: number; p: (t: number) => V2; v: (t: number) => V2; k: number };
const TAU = 2 * Math.PI;
const CURVES: C[] = [
  { label: "circle", formula: "(cos t, sin t)", t0: 0, t1: TAU, p: (t) => [Math.cos(t), Math.sin(t)], v: (t) => [-Math.sin(t), Math.cos(t)], k: 0.5 },
  { label: "figure eight", formula: "(sin t, sin t cos t)", t0: 0, t1: TAU, p: (t) => [Math.sin(t), Math.sin(t) * Math.cos(t)], v: (t) => [Math.cos(t), Math.cos(2 * t)], k: 0.4 },
  { label: "cusp", formula: "(t², t³)", t0: -1.2, t1: 1.2, p: (t) => [t * t, t * t * t], v: (t) => [2 * t, 3 * t * t], k: 0.45 },
  { label: "cycloid", formula: "(t − sin t, 1 − cos t)", t0: 0, t1: 2 * TAU, p: (t) => [t - Math.sin(t), 1 - Math.cos(t)], v: (t) => [1 - Math.cos(t), Math.sin(t)], k: 0.6 },
];

/** A parametrised curve as a moving point: its trace, its velocity, and the points where the velocity vanishes. */
export function CurveTraceViz() {
  const [ci, setCi] = useState(2);
  const [u, setU] = useState(0.3);
  const c = CURVES[ci];
  const t = c.t0 + u * (c.t1 - c.t0);
  const N = 400;
  const pts = Array.from({ length: N + 1 }, (_, i) => c.p(c.t0 + (i / N) * (c.t1 - c.t0)));
  const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
  const pad = 0.5;
  const minX = Math.min(...xs) - pad, maxX = Math.max(...xs) + pad, minY = Math.min(...ys) - pad, maxY = Math.max(...ys) + pad;
  const W = 520, H = 280;
  const s = Math.min((W - 20) / (maxX - minX), (H - 20) / (maxY - minY));
  const ox = (W - s * (maxX - minX)) / 2, oy = (H - s * (maxY - minY)) / 2;
  const X = (x: number) => ox + (x - minX) * s, Y = (y: number) => H - oy - (y - minY) * s;
  const [px, py] = c.p(t), [vx, vy] = c.v(t);
  const speed = Math.hypot(vx, vy);
  const f = (v: number) => (Math.abs(v) < 5e-4 ? "0.000" : v.toFixed(3));
  const regular = speed > 1e-3;
  const d = pts.map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(" ");
  const ex = X(px + c.k * vx), ey = Y(py + c.k * vy);
  const ang = Math.atan2(ey - Y(py), ex - X(px));
  const head = (da: number) => `${(ex - 9 * Math.cos(ang + da)).toFixed(1)},${(ey - 9 * Math.sin(ang + da)).toFixed(1)}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Curve">
        {CURVES.map((x, i) => <button key={x.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>parameter t: <span className="mono">{t.toFixed(3)}</span></span>
          <input type="range" min={0} max={1} step={0.0025} value={u} onChange={(e) => setU(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The trace of the curve with the moving point and its velocity" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(minX)} y1={Y(0)} x2={X(maxX)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(minY)} x2={X(0)} y2={Y(maxY)} style={{ stroke: "var(--border)" }} />
        <path d={d} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {regular && (
          <g>
            <line x1={X(px)} y1={Y(py)} x2={ex} y2={ey} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
            <polygon points={`${ex.toFixed(1)},${ey.toFixed(1)} ${head(0.45)} ${head(-0.45)}`} style={{ fill: "var(--accent)" }} />
          </g>
        )}
        <circle cx={X(px)} cy={Y(py)} r={6} style={{ fill: regular ? "var(--text)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>α(t) = {c.formula} = ({f(px)}, {f(py)})</div>
        <div>α′(t) = ({f(vx)}, {f(vy)}), speed |α′(t)| = {speed.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>{regular ? "α′(t) ≠ 0: the curve is regular here" : "α′(t) = 0: the curve is not regular here"}</div>
      </div>
      <figcaption className="viz-caption">
        A parametrised curve is a smooth map α from an interval into the plane or space. The arrow shows the velocity α′(t),
        drawn at a fixed scale. Where the velocity vanishes the curve may turn sharply, as at the cusp of (t², t³) at t = 0
        and at each point where the cycloid touches the line.
      </figcaption>
    </figure>
  );
}
