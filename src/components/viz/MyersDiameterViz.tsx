"use client";

import { useState } from "react";

/** Bonnet–Myers: Ric ≥ (n − 1)k with k > 0 forces diameter ≤ π/√k, attained by the sphere of radius 1/√k. */
export function MyersDiameterViz() {
  const [k100, setK] = useState(100);
  const k = k100 / 100;
  const D = Math.PI / Math.sqrt(k), R = 1 / Math.sqrt(k);
  const X0 = 250, W = 250, Y0 = 12, H = 160;
  const ks = Array.from({ length: 200 }, (_, i) => 0.2 + (3.8 * i) / 199);
  const x = (v: number) => X0 + ((v - 0.2) / 3.8) * W;
  const y = (d: number) => Y0 + H - (Math.min(d, 7.2) / 7.2) * H;
  const cx = 110, cy = 92, pr = 34 * R;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>k = {k.toFixed(2)} <input type="range" min={20} max={400} value={k100} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="The diameter bound and the extremal sphere" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={pr} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={`M ${cx} ${cy - pr} A ${pr} ${pr} 0 0 1 ${cx} ${cy + pr}`} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 3 }} />
        <circle cx={cx} cy={cy - pr} r={3.5} style={{ fill: "var(--text)" }} />
        <circle cx={cx} cy={cy + pr} r={3.5} style={{ fill: "var(--text)" }} />
        <text x={cx} y={Y0 + H + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>sphere of radius 1/√k</text>
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={Y0} x2={X0} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={ks.map((v) => `${x(v)},${y(Math.PI / Math.sqrt(v))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={x(k)} cy={y(D)} r={5} style={{ fill: "var(--danger)" }} />
        <text x={X0 + W} y={Y0 + H + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>k</text>
        <text x={X0 + 6} y={Y0 + 10} style={{ fill: "var(--text-muted)", fontSize: 10 }}>largest possible diameter π/√k</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Ric ≥ (n − 1)·{k.toFixed(2)} ⇒ diameter ≤ π/√k = {D.toFixed(3)}. The sphere of radius {R.toFixed(3)} attains it (red: a half great circle).
      </p>
      <figcaption className="viz-caption">
        The stronger the lower bound on Ricci curvature, the smaller the manifold must be. A complete manifold with
        Ric ≥ (n − 1)k for some k &gt; 0 is compact with finite fundamental group. The bound on k matters: a paraboloid
        has positive curvature tending to 0 and is not compact.
      </figcaption>
    </figure>
  );
}
