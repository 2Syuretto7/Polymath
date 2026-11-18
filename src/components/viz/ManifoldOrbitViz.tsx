"use client";

import { useState } from "react";

const ACTIONS = [
  { name: "rotations of the plane", kind: "plane-rot", orbit: "circles about the origin, and the origin alone", stab: "trivial away from the origin; all of SO(2) at the origin", quot: "the half-line [0, ∞): not a manifold without boundary, because the action is not free" },
  { name: "scalings of the plane", kind: "plane-scale", orbit: "open rays from the origin, and the origin alone", stab: "trivial away from the origin; all of ℝ at the origin", quot: "a circle plus one extra point whose every neighbourhood is everything: not Hausdorff" },
  { name: "ℝ on the torus, slope 1/2", kind: "torus", slope: 0.5, orbit: "closed curves, each winding twice one way and once the other", stab: "the subgroup 2ℤ of ℝ, for every point", quot: "a circle: every orbit is a closed embedded circle" },
  { name: "ℝ on the torus, slope √2", kind: "torus", slope: Math.SQRT2, orbit: "dense lines that never close", stab: "trivial, for every point", quot: "a space whose only open sets are empty or everything: not Hausdorff" },
];

/** Orbits of smooth group actions on the plane and the torus, with stabilisers and the orbit space. */
export function ManifoldOrbitViz() {
  const [k, setK] = useState(3);
  const [T, setT] = useState(12);
  const A = ACTIONS[k];
  const cx = 130, cy = 105;
  const segs: string[] = [];
  if (A.kind === "torus") {
    const s = A.slope as number;
    let pts: string[] = [];
    let px = 0.13, py = 0.21;
    const N = Math.round(T * 120);
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * T;
      const x = (0.13 + t) % 1, y = (0.21 + s * t) % 1;
      if (i > 0 && (Math.abs(x - px) > 0.5 || Math.abs(y - py) > 0.5)) { segs.push(pts.join(" ")); pts = []; }
      pts.push(`${40 + x * 180},${195 - y * 180}`);
      px = x; py = y;
    }
    segs.push(pts.join(" "));
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="action" style={{ flexWrap: "wrap" }}>
        {ACTIONS.map((a, i) => <button key={a.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{a.name}</button>)}
      </div>
      {A.kind === "torus" && (
        <div className="viz-controls">
          <label>time T = {T} <input type="range" min={1} max={60} value={T} onChange={(e) => setT(Number(e.target.value))} aria-label="time" /></label>
        </div>
      )}
      <svg viewBox="0 0 520 210" role="img" aria-label="Orbits of the chosen action" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {A.kind === "plane-rot" && [20, 40, 60, 80].map((r) => <circle key={r} cx={cx} cy={cy} r={r} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />)}
        {A.kind === "plane-scale" && Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          return <line key={i} x1={cx + 6 * Math.cos(a)} y1={cy - 6 * Math.sin(a)} x2={cx + 90 * Math.cos(a)} y2={cy - 90 * Math.sin(a)} style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />;
        })}
        {A.kind !== "torus" && <circle cx={cx} cy={cy} r={4} style={{ fill: "var(--danger)" }} />}
        {A.kind === "torus" && (
          <g>
            <rect x={40} y={15} width={180} height={180} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            {segs.map((p, i) => <polyline key={i} points={p} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2 }} />)}
            <circle cx={40 + 0.13 * 180} cy={195 - 0.21 * 180} r={4} style={{ fill: "var(--danger)" }} />
          </g>
        )}
        <text x={270} y={40} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{A.kind === "torus" ? "opposite edges of the square are glued" : "red: the fixed point"}</text>
        <text x={270} y={64} style={{ fill: "var(--text)", fontSize: 12 }}>{A.kind === "torus" ? `orbit of one point for 0 ≤ t ≤ ${T}` : "several orbits drawn"}</text>
      </svg>
      <div style={{ fontSize: 13, display: "grid", gap: 4 }}>
        <div><strong>Orbits:</strong> {A.orbit}.</div>
        <div><strong>Stabilisers:</strong> {A.stab}.</div>
        <div><strong>Orbit space:</strong> {A.quot}.</div>
      </div>
      <figcaption className="viz-caption">
        A smooth action of a Lie group moves points along orbits. The orbit space is a manifold when the action is free and
        proper; fixed points and dense orbits are what spoil it.
      </figcaption>
    </figure>
  );
}
