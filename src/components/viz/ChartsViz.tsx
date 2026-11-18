"use client";

import { useState } from "react";

/** Two stereographic charts on the circle and their transition map, v = 1/u. */
export function ChartsViz() {
  const [deg, setDeg] = useState(30);
  const t = (deg * Math.PI) / 180;
  const x = Math.cos(t), y = Math.sin(t);
  const atN = Math.abs(1 - y) < 1e-6, atS = Math.abs(1 + y) < 1e-6;
  const u = atN ? Infinity : x / (1 - y);
  const v = atS ? Infinity : x / (1 + y);
  const cx = 140, cy = 120, R = 70, L = 130;
  const P = (a: number, b: number) => [cx + R * a, cy - R * b];
  const [px, py] = P(x, y);
  const lineX = (w: number) => cx + R * Math.max(-L / R, Math.min(L / R, w));
  const f = (n: number) => (!isFinite(n) ? "undefined" : (n < 0 ? "−" : "") + Math.abs(n).toFixed(3));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>angle of the point = {deg}° <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle" /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="Stereographic projection of the circle from both poles" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={cx - L} y1={cy} x2={cx + L} y2={cy} style={{ stroke: "var(--border-strong)" }} />
        <text x={cx - L} y={cy - 6} style={{ fill: "var(--text-muted)", fontSize: 11 }}>y = 0</text>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        {!atN && <line x1={cx} y1={cy - R} x2={lineX(u)} y2={cy} style={{ stroke: "var(--accent)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />}
        {!atS && <line x1={cx} y1={cy + R} x2={lineX(v)} y2={cy} style={{ stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />}
        <circle cx={cx} cy={cy - R} r={5} style={{ fill: "var(--accent)" }} />
        <circle cx={cx} cy={cy + R} r={5} style={{ fill: "var(--danger)" }} />
        <text x={cx + 8} y={cy - R - 6} style={{ fill: "var(--accent)", fontSize: 11 }}>N</text>
        <text x={cx + 8} y={cy + R + 14} style={{ fill: "var(--danger)", fontSize: 11 }}>S</text>
        {!atN && Math.abs(u) * R <= L && <circle cx={lineX(u)} cy={cy} r={5} style={{ fill: "var(--accent)" }} />}
        {!atS && Math.abs(v) * R <= L && <circle cx={lineX(v)} cy={cy} r={5} style={{ fill: "var(--danger)" }} />}
        <circle cx={px} cy={py} r={7} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={300} y={50} style={{ fill: "var(--text)", fontSize: 12 }}>point p = ({f(x)}, {f(y)})</text>
        <text x={300} y={78} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>chart from N: u = x/(1 − y) = {f(u)}</text>
        <text x={300} y={102} style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>chart from S: v = x/(1 + y) = {f(v)}</text>
        <text x={300} y={134} style={{ fill: "var(--text)", fontSize: 12 }}>{isFinite(u) && isFinite(v) && Math.abs(u) > 1e-9 ? `u · v = ${(u * v).toFixed(3)}, so v = 1/u` : atN ? "p = N: only the chart from S covers it" : atS ? "p = S: only the chart from N covers it" : "u = v = 0 at this point"}</text>
        <text x={300} y={160} style={{ fill: "var(--text-muted)", fontSize: 11 }}>transition map: u ↦ 1/u, smooth for u ≠ 0</text>
      </svg>
      <figcaption className="viz-caption">
        Project from the north pole to get one chart, from the south pole to get another. Each misses one point; together
        they cover the circle. Where both are defined, the change of coordinates is u ↦ 1/u, which is smooth, so these two
        charts form a smooth atlas.
      </figcaption>
    </figure>
  );
}
