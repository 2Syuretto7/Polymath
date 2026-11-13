"use client";

import { useState } from "react";

type V3 = [number, number, number];

/** Geodesics leaving a point of the unit sphere: great circles that spread out, then meet again at the antipode. */
export function GeodesicSprayViz() {
  const [s, setS] = useState(1.2);
  const [az, setAz] = useState(0.5);
  const lat = 0.5;
  const p: V3 = [Math.cos(lat), 0, Math.sin(lat)];
  const e1: V3 = [0, 1, 0];
  const e2: V3 = [-Math.sin(lat), 0, Math.cos(lat)];
  const K = 16;
  const el = 0.4;
  const proj = ([x, y, z]: V3): [number, number, number] => {
    const x1 = x * Math.cos(az) - y * Math.sin(az), y1 = x * Math.sin(az) + y * Math.cos(az);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el)), -(y1 * Math.cos(el) - z * Math.sin(el))];
  };
  const geo = (b: number, t: number): V3 => {
    const w: V3 = [Math.cos(b) * e1[0] + Math.sin(b) * e2[0], Math.cos(b) * e1[1] + Math.sin(b) * e2[1], Math.cos(b) * e1[2] + Math.sin(b) * e2[2]];
    return [Math.cos(t) * p[0] + Math.sin(t) * w[0], Math.cos(t) * p[1] + Math.sin(t) * w[1], Math.cos(t) * p[2] + Math.sin(t) * w[2]];
  };
  const cx = 260, cy = 130, r = 110;
  const S = 60;
  const segs: { x1: number; y1: number; x2: number; y2: number; front: boolean; key: string }[] = [];
  for (let k = 0; k < K; k++) {
    const b = (k / K) * 2 * Math.PI;
    for (let i = 0; i < S; i++) {
      const a = proj(geo(b, (i / S) * s)), c = proj(geo(b, ((i + 1) / S) * s));
      segs.push({ x1: cx + r * a[0], y1: cy + r * a[1], x2: cx + r * c[0], y2: cy + r * c[1], front: a[2] + c[2] >= 0, key: `${k}-${i}` });
    }
  }
  const front = Array.from({ length: 121 }, (_, i) => proj(geo((i / 120) * 2 * Math.PI, s)));
  const [px, py] = proj(p);
  const [qx, qy, qz] = proj([-p[0], -p[1], -p[2]]);
  const circ = 2 * Math.PI * Math.sin(s);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>distance travelled along each geodesic: <span className="mono">{s.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={6.25} step={0.01} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
        <label><span>turn the sphere: <span className="mono">{az.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={az} onChange={(e) => setAz(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 260" role="img" aria-label="Geodesics on a sphere spreading from a point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={r} style={{ fill: "var(--bg)", stroke: "var(--border)", strokeWidth: 1.5 }} />
        {segs.map((g) => <line key={g.key} x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2} style={{ stroke: g.front ? "var(--text-muted)" : "var(--text-faint)", strokeWidth: g.front ? 1.5 : 1, opacity: g.front ? 1 : 0.5 }} />)}
        <path d={front.map((q, i) => `${i ? "L" : "M"}${(cx + r * q[0]).toFixed(1)},${(cy + r * q[1]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={cx + r * px} cy={cy + r * py} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={cx + r * qx} cy={cy + r * qy} r={5} style={{ fill: qz >= 0 ? "var(--text)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>circumference of the geodesic circle = 2π sin s = {circ.toFixed(4)}</div>
        <div>in the plane it would be 2πs = {(2 * Math.PI * s).toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>{Math.abs(s - Math.PI) < 0.03 ? "all the geodesics meet again at the antipode" : s < Math.PI ? "the geodesics spread out, but more slowly than in the plane" : "past the antipode the geodesics are no longer shortest"}</div>
      </div>
      <figcaption className="viz-caption">
        A geodesic is a curve whose acceleration is everywhere normal to the surface, so it does not turn within the surface.
        On the unit sphere the geodesics are great circles. Those leaving a point all meet again at the opposite point after
        distance π, and the circles of points at distance s are shorter than in the plane, a symptom of positive curvature.
      </figcaption>
    </figure>
  );
}
