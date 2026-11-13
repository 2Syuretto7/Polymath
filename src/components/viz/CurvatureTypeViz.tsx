"use client";

import { useState } from "react";

const PRESETS = [
  { label: "sphere of radius 2", k1: 0.5, k2: 0.5 },
  { label: "cylinder of radius 1", k1: 1, k2: 0 },
  { label: "saddle", k1: 1, k2: -1 },
  { label: "torus, outer equator", k1: 1.43, k2: 0.37 },
  { label: "torus, inner equator", k1: 1.43, k2: -0.77 },
];

/** Euler’s formula: normal curvature varies between the principal curvatures, and K and H summarise them. */
export function CurvatureTypeViz() {
  const [k1, setK1] = useState(1);
  const [k2, setK2] = useState(-0.5);
  const [deg, setDeg] = useState(30);
  const t = (deg * Math.PI) / 180;
  const kn = k1 * Math.cos(t) ** 2 + k2 * Math.sin(t) ** 2;
  const K = k1 * k2, Hm = (k1 + k2) / 2;
  const type = Math.abs(K) < 1e-3 ? (Math.abs(k1) < 1e-3 && Math.abs(k2) < 1e-3 ? "planar point" : "parabolic point") : K > 0 ? (Math.abs(k1 - k2) < 1e-3 ? "umbilic point (elliptic)" : "elliptic point") : "hyperbolic point";
  const W = 520, H = 240, cx = 150, cy = 120, s = 70;
  const curve = (sgn: number) => {
    let d = "";
    let pen = false;
    for (let i = 0; i <= 360; i++) {
      const th = (i * Math.PI) / 180;
      const v = k1 * Math.cos(th) ** 2 + k2 * Math.sin(th) ** 2;
      if (sgn * v > 0) {
        const r = Math.min(1.6, Math.abs(v));
        d += `${pen ? "L" : "M"}${(cx + s * r * Math.cos(th)).toFixed(1)},${(cy - s * r * Math.sin(th)).toFixed(1)} `;
        pen = true;
      } else pen = false;
    }
    return d;
  };
  const bars = [["κ₁", k1], ["κ₂", k2], ["κₙ(θ)", kn], ["K = κ₁κ₂", K], ["H = (κ₁ + κ₂)/2", Hm]] as const;
  const BX = (v: number) => 400 + Math.max(-2.5, Math.min(2.5, v)) * 40;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Preset point">
        {PRESETS.map((p) => <button key={p.label} type="button" className="seg" onClick={() => { setK1(p.k1); setK2(p.k2); }}>{p.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>κ₁: <span className="mono">{k1.toFixed(2)}</span></span>
          <input type="range" min={-2} max={2} step={0.01} value={k1} onChange={(e) => setK1(Number(e.target.value))} /></label>
        <label><span>κ₂: <span className="mono">{k2.toFixed(2)}</span></span>
          <input type="range" min={-2} max={2} step={0.01} value={k2} onChange={(e) => setK2(Number(e.target.value))} /></label>
        <label><span>direction θ from the first principal direction: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={180} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Polar plot of normal curvature against direction, and bars for the curvatures" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={cx - 115} y1={cy} x2={cx + 115} y2={cy} style={{ stroke: "var(--border)" }} />
        <line x1={cx} y1={cy - 115} x2={cx} y2={cy + 115} style={{ stroke: "var(--border)" }} />
        <path d={curve(1)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={curve(-1)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "5 4" }} />
        <line x1={cx} y1={cy} x2={cx + s * Math.min(1.6, Math.abs(kn)) * Math.cos(t)} y2={cy - s * Math.min(1.6, Math.abs(kn)) * Math.sin(t)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={cx + 112} y={cy - 6} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>e₁</text>
        <text x={cx + 6} y={cy - 104} style={{ fill: "var(--text-muted)", fontSize: 11 }}>e₂</text>
        <line x1={BX(0)} y1={20} x2={BX(0)} y2={220} style={{ stroke: "var(--border)" }} />
        {bars.map(([lab, v], i) => (
          <g key={lab}>
            <rect x={Math.min(BX(0), BX(v))} y={26 + i * 40} width={Math.abs(BX(v) - BX(0))} height={16} style={{ fill: i === 2 ? "var(--accent)" : "var(--text-faint)" }} />
            <text x={300} y={20 + i * 40} style={{ fill: "var(--text)", fontSize: 12 }}>{lab} = {v.toFixed(2)}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14, fontWeight: 700 }}>{type}</p>
      <figcaption className="viz-caption">
        Euler&rsquo;s formula κₙ(θ) = κ₁ cos²θ + κ₂ sin²θ gives the normal curvature in every direction from the two principal
        curvatures. The polar plot draws |κₙ| in each direction, solid where it is positive and dashed where negative. Where K
        &gt; 0 the surface bends the same way in every direction; where K &lt; 0 it is saddle-shaped.
      </figcaption>
    </figure>
  );
}
