"use client";

import { useState, type ReactElement } from "react";

type V3 = [number, number, number];
const add = (a: V3, b: V3, s = 1): V3 => [a[0] + s * b[0], a[1] + s * b[1], a[2] + s * b[2]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: V3): V3 => { const l = Math.hypot(...a); return [a[0] / l, a[1] / l, a[2] / l]; };
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** Parallel transport round a geodesic triangle on the unit sphere: pole, down a meridian, along the equator, back up. */
export function SphereTransportViz() {
  const [deg, setDeg] = useState(90);
  const [s, setS] = useState(300);
  const phi = (deg * Math.PI) / 180;
  const t = s / 100; // 0..3
  // position and transported vector along the three legs
  const state = (u: number): [V3, V3] => {
    if (u <= 1) {
      const a = (u * Math.PI) / 2;
      const p: V3 = [Math.sin(a), 0, Math.cos(a)];
      return [p, [Math.cos(a), 0, -Math.sin(a)]];
    }
    if (u <= 2) {
      const b = (u - 1) * phi;
      return [[Math.cos(b), Math.sin(b), 0], [0, 0, -1]];
    }
    const a = ((3 - u) * Math.PI) / 2;
    const p: V3 = [Math.sin(a) * Math.cos(phi), Math.sin(a) * Math.sin(phi), Math.cos(a)];
    return [p, [Math.cos(a) * Math.cos(phi), Math.cos(a) * Math.sin(phi), -Math.sin(a)]];
  };
  const view = norm([1.2, 0.9, 0.8]);
  const ex = norm(cross([0, 0, 1], view));
  const ey = cross(view, ex);
  const S = 90, cx = 150, cy = 115;
  const pr = (p: V3): [number, number] => [cx + S * dot(p, ex), cy - S * dot(p, ey)];
  const front = (p: V3) => dot(p, view) >= -0.02;
  const curve = (f: (u: number) => V3, n = 60) => Array.from({ length: n + 1 }, (_, i) => f(i / n));
  const seg = (pts: V3[], style: object, key: string) => {
    const out: ReactElement[] = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [a, b] = [pr(pts[i]), pr(pts[i + 1])];
      out.push(<line key={key + i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} style={{ ...style, opacity: front(pts[i]) ? 1 : 0.25 }} />);
    }
    return out;
  };
  const eq = curve((u) => [Math.cos(2 * Math.PI * u), Math.sin(2 * Math.PI * u), 0], 90);
  const path = curve((u) => state(3 * u)[0], 150);
  const [p, v] = state(t);
  const arrow = (q: V3, w: V3, col: string, key: string) => {
    const a = pr(q), b = pr(add(q, w, 0.45));
    return <line key={key} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} markerEnd={`url(#st-${col})`} style={{ stroke: `var(--${col})`, strokeWidth: 3 }} />;
  };
  const turned = t >= 3 ? deg : null;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>angle at the pole = {deg}° <input type="range" min={10} max={170} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle" /></label>
        <label>progress = {t.toFixed(2)} of 3 legs <input type="range" min={0} max={300} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="progress" /></label>
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A vector carried round a triangle on the sphere" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          {["accent", "text-muted"].map((c) => <marker key={c} id={`st-${c}`} viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: `var(--${c})` }} /></marker>)}
        </defs>
        <circle cx={cx} cy={cy} r={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {seg(eq, { stroke: "var(--border-strong)", strokeWidth: 1 }, "e")}
        {seg(path, { stroke: "var(--danger)", strokeWidth: 2 }, "p")}
        {arrow([0, 0, 1], [1, 0, 0], "text-muted", "start")}
        {arrow(p, v, "accent", "now")}
        <text x={290} y={50} style={{ fill: "var(--text-muted)", fontSize: 12 }}>grey: the starting vector at the pole</text>
        <text x={290} y={72} style={{ fill: "var(--accent)", fontSize: 12 }}>purple: the transported vector</text>
        <text x={290} y={110} style={{ fill: "var(--text)", fontSize: 12 }}>area enclosed = {phi.toFixed(3)}</text>
        <text x={290} y={134} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{turned === null ? "carry the vector all the way round" : `turned by ${turned}° = ${phi.toFixed(3)} rad`}</text>
      </svg>
      <figcaption className="viz-caption">
        Along each leg, a geodesic, the vector keeps a constant angle with the direction of motion. Yet it comes home
        rotated. On the unit sphere the angle of rotation equals the area enclosed: a direct view of curvature.
      </figcaption>
    </figure>
  );
}
