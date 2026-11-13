"use client";

import { useMemo, useState } from "react";

function rng(seed: number) {
  let a = seed;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const N = 200;
const BASE = (() => {
  const r = rng(7);
  return Array.from({ length: N }, () => {
    const u = Math.max(r(), 1e-9), v = r();
    const m = Math.sqrt(-2 * Math.log(u));
    return [m * Math.cos(2 * Math.PI * v), m * Math.sin(2 * Math.PI * v)];
  });
})();

/** A cloud of points with chosen correlation, and a curved pattern whose correlation is zero. */
export function CorrelationCloudViz() {
  const [rho, setRho] = useState(0.6);
  const [curve, setCurve] = useState(false);
  const pts = useMemo(() => BASE.map(([z1, z2]) => (curve ? [z1, z1 * z1 - 1 + 0.3 * z2] : [z1, rho * z1 + Math.sqrt(1 - rho * rho) * z2])), [rho, curve]);
  const mx = pts.reduce((s, p) => s + p[0], 0) / N, my = pts.reduce((s, p) => s + p[1], 0) / N;
  const cxy = pts.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0) / N;
  const vx = pts.reduce((s, p) => s + (p[0] - mx) ** 2, 0) / N, vy = pts.reduce((s, p) => s + (p[1] - my) ** 2, 0) / N;
  const r = cxy / Math.sqrt(vx * vy);
  const W = 360, H = 300, L = 3.5;
  const X = (x: number) => W / 2 + (x / L) * (W / 2 - 10);
  const Y = (y: number) => H / 2 - (y / L) * (H / 2 - 10);
  const b = cxy / vx;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Pattern">
        <button type="button" aria-pressed={!curve} className={!curve ? "seg is-on" : "seg"} onClick={() => setCurve(false)}>straight-line pattern</button>
        <button type="button" aria-pressed={curve} className={curve ? "seg is-on" : "seg"} onClick={() => setCurve(true)}>curved pattern</button>
      </div>
      {!curve && (
        <div className="viz-sliders" style={{ marginTop: 8 }}>
          <label><span>correlation ρ: <span className="mono">{rho.toFixed(2)}</span></span>
            <input type="range" min={-1} max={1} step={0.05} value={rho} onChange={(e) => setRho(Number(e.target.value))} /></label>
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Scatter plot of 200 pairs with the least squares line" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={H} style={{ stroke: "var(--border)" }} />
        {pts.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(Math.max(-L, Math.min(L, y)))} r={2.6} style={{ fill: "var(--accent)", fillOpacity: 0.6 }} />)}
        <line x1={X(-L)} y1={Y(my + b * (-L - mx))} x2={X(L)} y2={Y(my + b * (L - mx))} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        sample covariance {cxy.toFixed(3)}; sample correlation r = {r.toFixed(3)}; slope of the best line {b.toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        Two hundred pairs (X, Y), each X standard normal. With the straight-line pattern, Y = ρX + √(1 − ρ²)Z for independent noise Z, so the correlation is ρ. With the curved pattern, Y is almost a function of X, yet the correlation is near 0: correlation measures only straight-line association.
      </figcaption>
    </figure>
  );
}
