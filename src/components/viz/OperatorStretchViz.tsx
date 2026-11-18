"use client";

import { useState } from "react";

const MATS: { name: string; m: [number, number, number, number] }[] = [
  { name: "diagonal (2, 0.5)", m: [2, 0, 0, 0.5] },
  { name: "shear", m: [1, 1.2, 0, 1] },
  { name: "rotation", m: [0.6, -0.8, 0.8, 0.6] },
  { name: "rank one", m: [1, 1, 0.5, 0.5] },
];

/** The operator norm as the largest stretch of a unit vector. */
export function OperatorStretchViz() {
  const [k, setK] = useState(1);
  const [deg, setDeg] = useState(40);
  const [a, b, c, d] = MATS[k].m;
  const T = (x: number, y: number) => [a * x + b * y, c * x + d * y];
  const t = (deg * Math.PI) / 180;
  const v = [Math.cos(t), Math.sin(t)], Tv = T(v[0], v[1]);
  let best = 0;
  const img = Array.from({ length: 361 }, (_, i) => {
    const s = (i / 360) * 2 * Math.PI;
    const w = T(Math.cos(s), Math.sin(s));
    best = Math.max(best, Math.hypot(w[0], w[1]));
    return w;
  });
  const C = 140, R = 50;
  const P = (x: number, y: number) => `${(C + R * x).toFixed(1)},${(C - R * y).toFixed(1)}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="matrix">
        {MATS.map((m, i) => <button key={m.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.name}</button>)}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
        <svg viewBox="0 0 280 280" role="img" aria-label="Unit circle and its image" style={{ width: "100%", maxWidth: 300, display: "block" }}>
          <line x1={0} y1={C} x2={280} y2={C} style={{ stroke: "var(--border)" }} />
          <line x1={C} y1={0} x2={C} y2={280} style={{ stroke: "var(--border)" }} />
          <circle cx={C} cy={C} r={R} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
          <polygon points={img.map(([x, y]) => P(x, y)).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
          <line x1={C} y1={C} x2={C + R * v[0]} y2={C - R * v[1]} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
          <line x1={C} y1={C} x2={C + R * Tv[0]} y2={C - R * Tv[1]} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
          <circle cx={C + R * v[0]} cy={C - R * v[1]} r={4} style={{ fill: "var(--text)" }} />
          <circle cx={C + R * Tv[0]} cy={C - R * Tv[1]} r={4} style={{ fill: "var(--accent)" }} />
        </svg>
        <div className="mono" style={{ fontSize: 13, flex: "1 1 200px" }}>
          <p>T = [[{a}, {b}], [{c}, {d}]]</p>
          <p>‖v‖ = 1, ‖Tv‖ = {Math.hypot(Tv[0], Tv[1]).toFixed(3)}</p>
          <p style={{ fontWeight: 700 }}>‖T‖ = largest ‖Tv‖ = {best.toFixed(3)}</p>
        </div>
      </div>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          direction of v: {deg}°{" "}
          <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="direction of v" />
        </label>
      </div>
      <figcaption className="viz-caption">
        Dashed: the unit circle. Shaded: its image under T, an ellipse. The operator norm is the furthest the image reaches
        from the origin, the largest factor by which T stretches any vector. In finite dimensions it is always finite; in
        infinite dimensions, linear maps can stretch without bound.
      </figcaption>
    </figure>
  );
}
