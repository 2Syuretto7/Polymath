"use client";

import { useState } from "react";

type V3 = [number, number, number];

/** The Frenet frame T, N, B moving along a helix, with its constant curvature and torsion. */
export function FrenetHelixViz() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0.3);
  const [t, setT] = useState(2);
  const [phi, setPhi] = useState(0.6);
  const c = Math.hypot(a, b);
  const P = (s: number): V3 => [a * Math.cos(s), a * Math.sin(s), b * s];
  const Tv: V3 = [(-a * Math.sin(t)) / c, (a * Math.cos(t)) / c, b / c];
  const Nv: V3 = [-Math.cos(t), -Math.sin(t), 0];
  const Bv: V3 = [(b * Math.sin(t)) / c, (-b * Math.cos(t)) / c, a / c];
  const kappa = a / (c * c), tau = b / (c * c);
  const el = 0.35;
  const proj = ([x, y, z]: V3): [number, number] => {
    const x1 = x * Math.cos(phi) - y * Math.sin(phi);
    const y1 = x * Math.sin(phi) + y * Math.cos(phi);
    return [x1, -(y1 * Math.sin(el) + z * Math.cos(el))];
  };
  const T1 = 4 * Math.PI, M = 400;
  const raw = Array.from({ length: M + 1 }, (_, i) => proj(P((i / M) * T1)));
  const p0 = P(t);
  const L = 1;
  const tips = [Tv, Nv, Bv].map((v) => proj([p0[0] + L * v[0], p0[1] + L * v[1], p0[2] + L * v[2]]));
  const all = raw.concat(tips);
  const minX = Math.min(...all.map((q) => q[0])) - 0.4, maxX = Math.max(...all.map((q) => q[0])) + 0.4;
  const minY = Math.min(...all.map((q) => q[1])) - 0.4, maxY = Math.max(...all.map((q) => q[1])) + 0.4;
  const W = 520, H = 320;
  const s = Math.min(W / (maxX - minX), H / (maxY - minY));
  const X = (v: number) => (W - s * (maxX - minX)) / 2 + (v - minX) * s, Y = (v: number) => (H - s * (maxY - minY)) / 2 + (v - minY) * s;
  const d = raw.map((q, i) => `${i ? "L" : "M"}${X(q[0]).toFixed(1)},${Y(q[1]).toFixed(1)}`).join(" ");
  const [qx, qy] = proj(p0);
  const names = ["T", "N", "B"];
  const styles = ["var(--accent)", "var(--text)", "var(--text-muted)"];
  const dot = (u: V3, v: V3) => u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>radius a: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={0.2} max={2} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>pitch b: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>position t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={T1} step={0.01} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>turn the view: <span className="mono">{phi.toFixed(2)}</span></span>
          <input type="range" min={0} max={6.28} step={0.01} value={phi} onChange={(e) => setPhi(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A helix with the Frenet frame at a point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={d} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 2 }} />
        {tips.map((q, i) => (
          <g key={names[i]}>
            <line x1={X(qx)} y1={Y(qy)} x2={X(q[0])} y2={Y(q[1])} style={{ stroke: styles[i], strokeWidth: 3 }} />
            <circle cx={X(q[0])} cy={Y(q[1])} r={3.5} style={{ fill: styles[i] }} />
            <text x={X(q[0]) + 6} y={Y(q[1]) - 6} style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{names[i]}</text>
          </g>
        ))}
        <circle cx={X(qx)} cy={Y(qy)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>α(t) = (a cos t, a sin t, b t), traversed with speed √(a² + b²) = {c.toFixed(3)}</div>
        <div>curvature κ = a/(a² + b²) = {kappa.toFixed(4)}</div>
        <div>torsion τ = b/(a² + b²) = {tau.toFixed(4)}</div>
        <div>T·N = {Math.abs(dot(Tv, Nv)).toFixed(3)}, N·B = {Math.abs(dot(Nv, Bv)).toFixed(3)}, B·T = {Math.abs(dot(Bv, Tv)).toFixed(3)}</div>
      </div>
      <figcaption className="viz-caption">
        T is the unit tangent, N points towards the axis, where the curve is bending, and B = T × N completes a right-handed
        orthonormal frame. As t moves the frame turns, but κ and τ stay the same everywhere on the helix. Set b to 0 and the
        helix becomes a circle: B stops turning and the torsion is 0.
      </figcaption>
    </figure>
  );
}
