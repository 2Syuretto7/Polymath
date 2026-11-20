"use client";

import { useState } from "react";

const sn = (K: number, t: number) => (K > 1e-9 ? Math.sin(Math.sqrt(K) * t) / Math.sqrt(K) : K < -1e-9 ? Math.sinh(Math.sqrt(-K) * t) / Math.sqrt(-K) : t);

/** The Jacobi field J(t) = sn_K(t) between nearby geodesics leaving a point, in constant curvature K. */
export function JacobiFieldViz() {
  const [k100, setK] = useState(100);
  const [t100, setT] = useState(200);
  const K = k100 / 100, t = t100 / 100;
  const X0 = 40, W = 450, Y0 = 12, H = 160, T = 7, top = 4, bot = -1.5;
  const x = (s: number) => X0 + (s / T) * W;
  const y = (v: number) => Y0 + ((top - Math.max(bot, Math.min(top, v))) / (top - bot)) * H;
  const pts = (k: number) => ts.filter((s) => sn(k, s) <= top && sn(k, s) >= bot).map((s) => `${x(s)},${y(sn(k, s))}`).join(" ");
  const ts = Array.from({ length: 281 }, (_, i) => (T * i) / 280);
  const zero = K > 1e-9 ? Math.PI / Math.sqrt(K) : null;
  const curves = [-1, 0, 1].filter((c) => c !== K);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>curvature K = {K.toFixed(2)} <input type="range" min={-100} max={100} value={k100} onChange={(e) => setK(Number(e.target.value))} aria-label="K" /></label>
        <label>t = {t.toFixed(2)} <input type="range" min={0} max={700} value={t100} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Length of a Jacobi field along a geodesic" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        {[0, 2, 4, 6].map((s) => <text key={s} x={x(s)} y={y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{s}</text>)}
        {curves.map((c) => <polyline key={c} points={pts(c)} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "4 3" }} />)}
        <polyline points={pts(K)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {zero !== null && zero <= T && <g><circle cx={x(zero)} cy={y(0)} r={5} style={{ fill: "var(--danger)" }} /><text x={x(zero)} y={y(0) + 28} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 11 }}>conjugate point</text></g>}
        <line x1={x(t)} y1={Y0} x2={x(t)} y2={Y0 + H} style={{ stroke: "var(--text-muted)", strokeWidth: 1 }} />
        {sn(K, t) <= top && <circle cx={x(t)} cy={y(sn(K, t))} r={4} style={{ fill: "var(--accent)" }} />}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        |J(t)| = {sn(K, t).toFixed(3)}. {zero !== null ? `First zero at t = π/√K = ${zero.toFixed(3)}.` : "No zero for t > 0: nearby geodesics never meet again."}
      </p>
      <figcaption className="viz-caption">
        Two geodesics leave a point at a small angle. Their separation, divided by the angle, is the length of a Jacobi
        field solving J″ + KJ = 0 with J(0) = 0 and |J′(0)| = 1. Positive curvature bends them back together, negative
        curvature spreads them apart. Dashed: the curves for K = −1, 0 and 1.
      </figcaption>
    </figure>
  );
}
