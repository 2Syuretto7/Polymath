"use client";

import { useState } from "react";

function rng(seed: number) {
  let a = seed;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const PTS = (() => { const r = rng(11); return Array.from({ length: 400 }, () => { const x = r(); return [x, x * r()]; }); })();

/** Break a stick at X, then break the left piece at Y: E(Y | X) = X/2, a random variable. */
export function StickBreakViz() {
  const [x0, setX0] = useState(0.6);
  const [h, setH] = useState(0.05);
  const slice = PTS.filter(([x]) => Math.abs(x - x0) <= h);
  const avg = slice.length ? slice.reduce((s, p) => s + p[1], 0) / slice.length : NaN;
  const ey = PTS.reduce((s, p) => s + p[1], 0) / PTS.length;
  const W = 360, H = 330, pad = 30;
  const X = (x: number) => pad + x * (W - 2 * pad);
  const Y = (y: number) => H - pad - y * (H - 2 * pad);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>condition on X near <span className="mono">{x0.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.05} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>slice half-width: <span className="mono">{h.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.2} step={0.01} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Scatter of the two break points with a vertical slice and its average" style={{ width: "100%", maxWidth: 400, display: "block", margin: "6px auto" }}>
        <rect x={X(x0 - h)} y={Y(1)} width={X(x0 + h) - X(x0 - h)} height={Y(0) - Y(1)} style={{ fill: "var(--accent)", fillOpacity: 0.12 }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(1)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(1)} style={{ stroke: "var(--border-strong)", strokeDasharray: "2 3" }} />
        {PTS.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={2.2} style={{ fill: Math.abs(x - x0) <= h ? "var(--accent)" : "var(--text-faint)", fillOpacity: Math.abs(x - x0) <= h ? 0.9 : 0.4 }} />)}
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0.5)} style={{ stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        {Number.isFinite(avg) && <line x1={X(x0 - h)} y1={Y(avg)} x2={X(x0 + h)} y2={Y(avg)} style={{ stroke: "var(--text)", strokeWidth: 3 }} />}
        {[0, 0.5, 1].map((t) => <text key={t} x={X(t)} y={H - 10} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        <text x={X(1) - 4} y={Y(0) - 6} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>X</text>
        <text x={X(0) + 6} y={Y(1) + 10} style={{ fill: "var(--text-faint)", fontSize: 11 }}>Y</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        points in slice: {slice.length}; their average Y = {Number.isFinite(avg) ? avg.toFixed(3) : "none"}; x/2 = {(x0 / 2).toFixed(3)}; average Y over all points = {ey.toFixed(3)} (exact value 1/4)
      </p>
      <figcaption className="viz-caption">
        A stick of length 1 is broken at a uniform point X, and the left piece is broken again at a uniform point Y of it. Each dot is one experiment. The average of Y over a thin vertical slice tracks the dashed line y = x/2: that line is E(Y | X), a function of X and so itself random. Averaging it over X gives E(Y) = E(X)/2 = 1/4.
      </figcaption>
    </figure>
  );
}
