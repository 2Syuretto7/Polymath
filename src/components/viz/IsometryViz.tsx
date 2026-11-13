"use client";

import { useState } from "react";

const KINDS = ["rotation", "reflection", "shear"] as const;

/** Rotations and reflections preserve every length; a shear does not. */
export function IsometryViz() {
  const [k, setK] = useState(0);
  const [th, setTh] = useState(40);
  const [ph, setPh] = useState(70);
  const t = (th * Math.PI) / 180;
  const c = Math.cos(t), s = Math.sin(t);
  const M = k === 0 ? [c, -s, s, c] : k === 1 ? [Math.cos(2 * t), Math.sin(2 * t), Math.sin(2 * t), -Math.cos(2 * t)] : [1, Math.tan(t) * 0.9, 0, 1];
  const ap = (v: number[]) => [M[0] * v[0] + M[1] * v[1], M[2] * v[0] + M[3] * v[1]];
  const p = (ph * Math.PI) / 180;
  const v = [Math.cos(p) * 1.4, Math.sin(p) * 1.4];
  const Tv = ap(v);
  const W = 320, o = W / 2, S = 60;
  const P = (q: number[]) => `${(o + q[0] * S).toFixed(1)},${(o - q[1] * S).toFixed(1)}`;
  const sq = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const nv = Math.hypot(v[0], v[1]), nT = Math.hypot(Tv[0], Tv[1]);
  const col = [M[0], M[2]], col2 = [M[1], M[3]];
  const dot = col[0] * col2[0] + col[1] * col2[1];
  const iso = k !== 2 || Math.abs(M[1]) < 1e-9;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Kind of map">
        {KINDS.map((nm, i) => <button key={nm} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{nm}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>{k === 0 ? "angle of rotation" : k === 1 ? "angle of mirror line" : "amount of shear"}: <span className="mono">{th}°</span></span>
          <input type="range" min={0} max={180} step={5} value={th} onChange={(e) => setTh(Number(e.target.value))} /></label>
        <label><span>direction of v: <span className="mono">{ph}°</span></span>
          <input type="range" min={0} max={355} step={5} value={ph} onChange={(e) => setPh(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The unit square and a vector before and after the map" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        {k === 1 && <line x1={o - c * 200} y1={o + s * 200} x2={o + c * 200} y2={o - s * 200} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />}
        <polygon points={sq.map(P).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polygon points={sq.map(ap).map(P).join(" ")} style={{ fill: "var(--accent-soft)", fillOpacity: 0.5, stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={o} y1={o} x2={o + v[0] * S} y2={o - v[1] * S} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={o + v[0] * S + 5} y={o - v[1] * S - 5} style={{ fill: "var(--text)", fontSize: 12 }}>v</text>
        <line x1={o} y1={o} x2={o + Tv[0] * S} y2={o - Tv[1] * S} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={o + Tv[0] * S + 5} y={o - Tv[1] * S - 5} style={{ fill: "var(--accent)", fontSize: 12 }}>Tv</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        T = [{M.map((x) => x.toFixed(2)).slice(0, 2).join(", ")}; {M.map((x) => x.toFixed(2)).slice(2).join(", ")}]: ‖v‖ = {nv.toFixed(2)}, ‖Tv‖ = {nT.toFixed(2)}, columns have dot product {Math.abs(dot) < 5e-3 ? "0.00" : dot.toFixed(2)}
      </p>
      <p style={{ margin: "4px 0", color: iso ? "var(--accent)" : "var(--danger)" }}>
        {iso ? "An isometry: the columns are orthonormal and every length is preserved." : "Not an isometry: the columns are not orthonormal, and most lengths change."}
      </p>
      <figcaption className="viz-caption">
        An isometry preserves norms, ‖Tv‖ = ‖v‖ for every v. On ℝ² these are exactly the rotations and the reflections, and their matrices have orthonormal columns. The shear keeps the area of the square but stretches most vectors, so it is not an isometry.
      </figcaption>
    </figure>
  );
}
