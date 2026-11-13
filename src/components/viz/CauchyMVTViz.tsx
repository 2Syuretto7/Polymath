"use client";

import { useState } from "react";
import { fmtNum } from "./format";

// The curve t ↦ (g(t), f(t)) with g(t) = t + 0.5 sin t and f(t) = sin(2t) + t/2, for t in [0, 3].
const g = (t: number) => t + 0.5 * Math.sin(t), f = (t: number) => Math.sin(2 * t) + t / 2;
const gp = (t: number) => 1 + 0.5 * Math.cos(t), fp = (t: number) => 2 * Math.cos(2 * t) + 0.5;
const W = 520, H = 240, X0 = 30, X1 = 500, Y0 = 210, Y1 = 14, GX = [-0.2, 3.4], FY = [-1, 2.4];

/** Cauchy's mean value theorem: somewhere between a and b, the tangent to the curve (g(t), f(t)) is parallel to the chord. */
export function CauchyMVTViz() {
  const [a, setA] = useState(0.2);
  const [b, setB] = useState(2.6);
  const X = (x: number) => X0 + ((x - GX[0]) / (GX[1] - GX[0])) * (X1 - X0);
  const Y = (y: number) => Y0 - ((y - FY[0]) / (FY[1] - FY[0])) * (Y0 - Y1);
  const lo = Math.min(a, b - 0.1), hi = Math.max(b, lo + 0.1);
  const slope = (f(hi) - f(lo)) / (g(hi) - g(lo));
  // h(t) = (f(b) − f(a))(g(t) − g(a)) − (g(b) − g(a))(f(t) − f(a)) vanishes at both ends; its derivative vanishes at c.
  const hp = (t: number) => (f(hi) - f(lo)) * gp(t) - (g(hi) - g(lo)) * fp(t);
  const cs: number[] = [];
  const N = 600;
  for (let i = 0; i < N; i++) {
    const t0 = lo + ((hi - lo) * i) / N, t1 = lo + ((hi - lo) * (i + 1)) / N;
    if (hp(t0) === 0 || hp(t0) * hp(t1) < 0) { let p = t0, q = t1; for (let k = 0; k < 40; k++) { const m = (p + q) / 2; if (hp(p) * hp(m) <= 0) q = m; else p = m; } cs.push((p + q) / 2); }
  }
  const pts = Array.from({ length: 301 }, (_, i) => (3 * i) / 300).map((t) => `${X(g(t)).toFixed(1)},${Y(f(t)).toFixed(1)}`).join(" ");
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));
  const tan = (c: number) => { const d = 0.5; const m = fp(c) / gp(c); return <line key={c} x1={X(g(c) - d)} y1={Y(f(c) - d * m)} x2={X(g(c) + d)} y2={Y(f(c) + d * m)} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />; };

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A parametric curve with a chord and parallel tangents" style={{ width: "100%", display: "block" }}>
        <polyline points={pts} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <line x1={X(g(lo))} y1={Y(f(lo))} x2={X(g(hi))} y2={Y(f(hi))} style={{ stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "5 4" }} />
        <circle cx={X(g(lo))} cy={Y(f(lo))} r={4} style={{ fill: "var(--danger)" }} />
        <circle cx={X(g(hi))} cy={Y(f(hi))} r={4} style={{ fill: "var(--danger)" }} />
        {cs.map(tan)}
        {cs.map((c) => <circle key={`p${c}`} cx={X(g(c))} cy={Y(f(c))} r={4} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <div className="viz-sliders">
        <label><span>a: <span className="mono">{fm(a)}</span></span>
          <input type="range" min={0} max={2.9} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b: <span className="mono">{fm(b)}</span></span>
          <input type="range" min={0.1} max={3} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>chord slope (f(b) − f(a)) / (g(b) − g(a))</td><td className="mono">{fm(slope)}</td></tr>
          <tr><td>points c where f′(c) / g′(c) equals it</td><td className="mono">{cs.length ? cs.map(fm).join(", ") : "none found"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The curve is traced by (g(t), f(t)) with g(t) = t + ½ sin t and f(t) = sin 2t + t/2. Cauchy&rsquo;s theorem promises at least one c between a and b where the tangent is parallel to the chord: (f(b) − f(a)) g′(c) = (g(b) − g(a)) f′(c).
      </figcaption>
    </figure>
  );
}
