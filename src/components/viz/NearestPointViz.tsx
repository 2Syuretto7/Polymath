"use client";

import { useState } from "react";

type Shape = "disc" | "square" | "line" | "ring";
const SHAPES: { key: Shape; label: string }[] = [
  { key: "disc", label: "closed disc" },
  { key: "square", label: "closed square" },
  { key: "line", label: "a line through 0 (subspace)" },
  { key: "ring", label: "a circle (not convex)" },
];

const nearest = (s: Shape, x: number, y: number): [number, number] => {
  if (s === "disc") { const r = Math.hypot(x, y); return r <= 1 ? [x, y] : [x / r, y / r]; }
  if (s === "square") return [Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y))];
  if (s === "line") { const u = [Math.cos(0.5), Math.sin(0.5)]; const t = x * u[0] + y * u[1]; return [t * u[0], t * u[1]]; }
  const r = Math.hypot(x, y); return r < 1e-9 ? [1, 0] : [x / r, y / r];
};

/** The nearest point of a closed convex set, and the obtuse-angle condition that characterises it. */
export function NearestPointViz() {
  const [s, setS] = useState<Shape>("disc");
  const [deg, setDeg] = useState(30);
  const [rad, setRad] = useState(18);
  const r = rad / 10, t = (deg * Math.PI) / 180;
  const x = r * Math.cos(t), y = r * Math.sin(t);
  const [px, py] = nearest(s, x, y);
  const C = 140, S = 55;
  const P = (a: number, b: number) => [C + S * a, C - S * b];
  const [X0, Y0] = P(x, y), [PX, PY] = P(px, py);
  const d = Math.hypot(x - px, y - py);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="set">
        {SHAPES.map((o) => <button key={o.key} type="button" aria-pressed={s === o.key} className={s === o.key ? "seg is-on" : "seg"} onClick={() => setS(o.key)}>{o.label}</button>)}
      </div>
      <svg viewBox="0 0 280 280" role="img" aria-label="A point, a set and its nearest point" style={{ width: "100%", maxWidth: 320, display: "block", margin: "8px auto" }}>
        <line x1={0} y1={C} x2={280} y2={C} style={{ stroke: "var(--border)" }} />
        <line x1={C} y1={0} x2={C} y2={280} style={{ stroke: "var(--border)" }} />
        {s === "disc" && <circle cx={C} cy={C} r={S} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />}
        {s === "square" && <rect x={C - S} y={C - S} width={2 * S} height={2 * S} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />}
        {s === "line" && <line x1={C - 300 * Math.cos(0.5)} y1={C + 300 * Math.sin(0.5)} x2={C + 300 * Math.cos(0.5)} y2={C - 300 * Math.sin(0.5)} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        {s === "ring" && <circle cx={C} cy={C} r={S} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />}
        <line x1={X0} y1={Y0} x2={PX} y2={PY} style={{ stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <circle cx={X0} cy={Y0} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={PX} cy={PY} r={5} style={{ fill: "var(--accent)" }} />
        <text x={X0 + 8} y={Y0 - 6} style={{ fill: "var(--text)", fontSize: 13 }}>x</text>
        <text x={PX + 8} y={PY + 14} style={{ fill: "var(--accent)", fontSize: 13 }}>Px</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>angle {deg}° <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle of x" /></label>
        <label className="mono" style={{ fontSize: 13 }}>distance from 0: {r.toFixed(1)} <input type="range" min={0} max={24} value={rad} onChange={(e) => setRad(Number(e.target.value))} aria-label="distance of x from 0" /></label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        x = ({x.toFixed(2)}, {y.toFixed(2)}). Nearest point Px = ({px.toFixed(2)}, {py.toFixed(2)}). Distance {d.toFixed(3)}.
      </p>
      <p style={{ fontSize: 14, margin: "4px 0", color: s === "ring" && r < 0.05 ? "var(--danger)" : "var(--text)" }}>
        {s === "ring"
          ? r < 0.05
            ? "At the centre every point of the circle is equally near: no unique nearest point. Convexity fails."
            : "Move x to the centre (distance 0) to see uniqueness fail for this non-convex set."
          : s === "line"
            ? "For a subspace, x − Px is orthogonal to the line: projection is orthogonal projection."
            : "For every y in the set, the angle between x − Px and y − Px is at least a right angle."}
      </p>
      <figcaption className="viz-caption">
        In a Hilbert space, every non-empty closed convex set has exactly one nearest point to each x. For a closed subspace,
        the nearest point is the orthogonal projection, and x splits as Px plus a vector perpendicular to the subspace.
      </figcaption>
    </figure>
  );
}
