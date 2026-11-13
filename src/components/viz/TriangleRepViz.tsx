"use client";

import { useState } from "react";

type M2 = [number, number, number, number];
const c = Math.cos((2 * Math.PI) / 3), s = Math.sin((2 * Math.PI) / 3);
const ROT: M2 = [c, -s, s, c];
const REF: M2 = [-1, 0, 0, 1];
const mm = (p: M2, q: M2): M2 => [p[0] * q[0] + p[1] * q[2], p[0] * q[1] + p[1] * q[3], p[2] * q[0] + p[3] * q[2], p[2] * q[1] + p[3] * q[3]];
const ID: M2 = [1, 0, 0, 1];
const ELS: { name: string; m: M2; refl: boolean }[] = [
  { name: "1", m: ID, refl: false },
  { name: "r", m: ROT, refl: false },
  { name: "r²", m: mm(ROT, ROT), refl: false },
  { name: "s", m: REF, refl: true },
  { name: "rs", m: mm(ROT, REF), refl: true },
  { name: "r²s", m: mm(mm(ROT, ROT), REF), refl: true },
];
const REPS = ["trivial", "sign", "standard"] as const;
const VERTS: [number, number][] = [90, 210, 330].map((d) => [Math.cos((d * Math.PI) / 180), Math.sin((d * Math.PI) / 180)]);
const fmt = (x: number) => {
  const r = Math.round(x * 1000) / 1000;
  if (Math.abs(r) < 1e-9) return "0";
  const t = Math.abs(Math.abs(r) - 0.866) < 0.001 ? "√3/2" : Math.abs(Math.abs(r) - 0.5) < 0.001 ? "1/2" : String(Math.abs(r));
  return (r < 0 ? "−" : "") + t;
};

/** The symmetries of a triangle as a group, and three ways of representing it by matrices. */
export function TriangleRepViz() {
  const [ei, setEi] = useState(1);
  const [ri, setRi] = useState(2);
  const g = ELS[ei], rep = REPS[ri];
  const mat: string[][] = rep === "trivial" ? [["1"]] : rep === "sign" ? [[g.refl ? "−1" : "1"]] : [[fmt(g.m[0]), fmt(g.m[1])], [fmt(g.m[2]), fmt(g.m[3])]];
  const chi = (e: (typeof ELS)[number]) => (rep === "trivial" ? 1 : rep === "sign" ? (e.refl ? -1 : 1) : Math.round(e.m[0] + e.m[3]));
  const W = 260, B = 1.35, X = (x: number) => W / 2 + (x / B) * (W / 2), Y = (y: number) => W / 2 - (y / B) * (W / 2);
  const moved = VERTS.map(([x, y]) => [g.m[0] * x + g.m[1] * y, g.m[2] * x + g.m[3] * y] as [number, number]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Group element">
        {ELS.map((e, i) => <button key={e.name} type="button" aria-pressed={ei === i} className={ei === i ? "seg is-on" : "seg"} onClick={() => setEi(i)}>{e.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Representation" style={{ marginTop: 6 }}>
        {REPS.map((r, i) => <button key={r} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{r}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "center", marginTop: 8 }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The triangle before and after the symmetry" style={{ width: 240, maxWidth: "100%" }}>
          <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)", strokeDasharray: "4 4" }} />
          <polygon points={VERTS.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
          <polygon points={moved.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: "var(--accent)", fillOpacity: 0.15, stroke: "var(--accent)", strokeWidth: 2 }} />
          {moved.map(([x, y], i) => (
            <g key={i}>
              <circle cx={X(x)} cy={Y(y)} r={11} style={{ fill: "var(--accent)" }} />
              <text x={X(x)} y={Y(y) + 4} textAnchor="middle" style={{ fill: "var(--accent-text)", fontSize: 12, fontWeight: 600 }}>{i + 1}</text>
            </g>
          ))}
        </svg>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>ρ({g.name}) in the {rep} representation</div>
          <div style={{ display: "inline-grid", gridTemplateColumns: `repeat(${mat.length}, 64px)`, gap: 3 }}>
            {mat.flat().map((x, i) => <div key={i} className="mono" style={{ height: 34, display: "grid", placeItems: "center", border: "1px solid var(--border)", borderRadius: 4, background: "var(--bg)" }}>{x}</div>)}
          </div>
          <div className="mono" style={{ marginTop: 6, fontSize: 14 }}>trace = {chi(g)}</div>
        </div>
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8 }}>
        traces of the {rep} representation: identity {chi(ELS[0])}, rotations {chi(ELS[1])}, reflections {chi(ELS[3])}
      </div>
      <figcaption className="viz-caption">
        The six symmetries form the group S₃: r turns by a third, and s reflects in the dashed line. A representation assigns
        each symmetry an invertible matrix so that composing symmetries multiplies matrices. The standard one is the action on
        the plane itself; the trace depends only on the kind of symmetry.
      </figcaption>
    </figure>
  );
}
