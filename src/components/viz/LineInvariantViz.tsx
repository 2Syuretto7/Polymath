"use client";

import { useState } from "react";

type M2 = [[number, number], [number, number]];
const ALGS: { name: string; gens: { name: string; m: M2 }[] }[] = [
  { name: "diagonal d(2)", gens: [{ name: "E₁₁", m: [[1, 0], [0, 0]] }, { name: "E₂₂", m: [[0, 0], [0, 1]] }] },
  { name: "upper triangular b(2)", gens: [{ name: "E₁₁", m: [[1, 0], [0, 0]] }, { name: "E₂₂", m: [[0, 0], [0, 1]] }, { name: "E₁₂", m: [[0, 1], [0, 0]] }] },
  { name: "sl(2)", gens: [{ name: "H", m: [[1, 0], [0, -1]] }, { name: "E", m: [[0, 1], [0, 0]] }, { name: "F", m: [[0, 0], [1, 0]] }] },
];
const app = (m: M2, v: number[]) => [m[0][0] * v[0] + m[0][1] * v[1], m[1][0] * v[0] + m[1][1] * v[1]];
const COLORS = ["var(--accent)", "var(--danger)", "var(--success)"];

/** Which lines in the plane are invariant under a Lie algebra acting by 2 × 2 matrices. */
export function LineInvariantViz() {
  const [k, setK] = useState(1);
  const [deg, setDeg] = useState(30);
  const alg = ALGS[k];
  const ph = (deg * Math.PI) / 180, v = [Math.cos(ph), Math.sin(ph)];
  const keeps = alg.gens.map((g) => { const w = app(g.m, v); return Math.abs(v[0] * w[1] - v[1] * w[0]) < 1e-9; });
  const invariant = (d: number) => { const p = (d * Math.PI) / 180, u = [Math.cos(p), Math.sin(p)]; return alg.gens.every((g) => { const w = app(g.m, u); return Math.abs(u[0] * w[1] - u[1] * w[0]) < 1e-9; }); };
  const inv = Array.from({ length: 180 }, (_, d) => d).filter(invariant);
  const cx = 160, cy = 110, R = 90;
  const P = (a: number[], s = 1) => [cx + s * R * a[0], cy - s * R * a[1]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Lie algebra">
        {ALGS.map((a, i) => <button key={a.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{a.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>line at {deg}° <input type="range" min={0} max={179} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle of the line" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A line in the plane and the images of its direction under each generator" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          {COLORS.map((c, i) => <marker key={i} id={`li-h${i}`} markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: c }} /></marker>)}
        </defs>
        <line x1={cx - R - 10} y1={cy} x2={cx + R + 10} y2={cy} style={{ stroke: "var(--grid-line)" }} />
        <line x1={cx} y1={cy - R - 10} x2={cx} y2={cy + R + 10} style={{ stroke: "var(--grid-line)" }} />
        {inv.map((d) => { const p = (d * Math.PI) / 180, u = [Math.cos(p), Math.sin(p)]; const [a, b] = P(u, 1.1), [c, e] = P(u, -1.1); return <line key={d} x1={a} y1={b} x2={c} y2={e} style={{ stroke: "var(--success)", strokeWidth: 6, opacity: 0.35 }} />; })}
        {(() => { const [a, b] = P(v, 1.1), [c, e] = P(v, -1.1); return <line x1={a} y1={b} x2={c} y2={e} style={{ stroke: "var(--text)", strokeWidth: 1.6 }} />; })()}
        {alg.gens.map((g, i) => { const w = app(g.m, v); const [a, b] = P(w, 0.8); return Math.hypot(w[0], w[1]) < 1e-9 ? null : <line key={g.name} x1={cx} y1={cy} x2={a} y2={b} markerEnd={`url(#li-h${i})`} style={{ stroke: COLORS[i], strokeWidth: 2 }} />; })}
        {alg.gens.map((g, i) => <text key={g.name} x={330} y={50 + i * 24} style={{ fill: COLORS[i], fontSize: 12 }}>{g.name} v {keeps[i] ? "stays on the line" : "leaves the line"}</text>)}
        <text x={330} y={140} style={{ fill: "var(--success)", fontSize: 11 }}>green: invariant lines</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Invariant lines: {inv.length ? inv.map((d) => `${d}°`).join(", ") : "none"}.{" "}
        {k === 0 ? "Two complementary invariant lines: the representation splits." : k === 1 ? "One invariant line with no invariant complement: reducible but not completely reducible." : "No invariant line: the representation is irreducible."}
      </p>
      <figcaption className="viz-caption">
        Each algebra acts on the plane by its matrices. A line through 0 is a subrepresentation when every generator maps
        its direction v back into it. Weyl&rsquo;s theorem says every representation of a semisimple algebra, such as
        sl(2), splits into irreducibles. The solvable algebra b(2) has a representation that does not.
      </figcaption>
    </figure>
  );
}
