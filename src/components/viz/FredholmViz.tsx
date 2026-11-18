"use client";

import { useState } from "react";

const YS = [
  { key: "perp", label: "y = (1, −1)", y: [1, -1] },
  { key: "not", label: "y = (1, 0)", y: [1, 0] },
];

/** (I − μB)x = y with B the swap matrix: unique solutions unless 1/μ is an eigenvalue of B, then a solvability condition. */
export function FredholmViz() {
  const [m20, setM] = useState(10);
  const [k, setK] = useState(0);
  const mu = m20 / 20;
  const y = YS[k].y;
  const det = 1 - mu * mu;
  const sing = Math.abs(det) < 1e-9;
  const C = 130, U = 40;
  const P = (u: number, v: number) => [C + u * U, C - v * U];
  let msg: string;
  let sol: number[] | null = null;
  if (!sing) {
    sol = [(y[0] + mu * y[1]) / det, (y[1] + mu * y[0]) / det];
    msg = `det(I − μB) = ${det.toFixed(3)} ≠ 0. Unique solution x = (${sol[0].toFixed(3)}, ${sol[1].toFixed(3)}).`;
  } else {
    const perp = Math.abs(y[0] + y[1]) < 1e-9;
    msg = perp
      ? "μ = 1: the kernel is spanned by (1, 1). y is orthogonal to it, so solutions exist but are not unique: x = (1, 0) + t(1, 1)."
      : "μ = 1: the kernel is spanned by (1, 1). y is not orthogonal to it, so there is no solution.";
  }
  const [yx, yy] = P(y[0], y[1]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="right-hand side">
        {YS.map((s, i) => <button key={s.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 520 260" role="img" aria-label="The range of I minus mu B, and the target y" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={10} y={10} width={240} height={240} style={{ fill: sing ? "var(--bg)" : "var(--accent-soft)", stroke: "var(--border)" }} />
        <line x1={10} y1={C} x2={250} y2={C} style={{ stroke: "var(--border)" }} />
        <line x1={C} y1={10} x2={C} y2={250} style={{ stroke: "var(--border)" }} />
        {sing && <line x1={P(-2.9, 2.9)[0]} y1={P(-2.9, 2.9)[1]} x2={P(2.9, -2.9)[0]} y2={P(2.9, -2.9)[1]} style={{ stroke: "var(--accent)", strokeWidth: 4 }} />}
        {sing && <line x1={P(-2.9, -2.9)[0]} y1={P(-2.9, -2.9)[1]} x2={P(2.9, 2.9)[0]} y2={P(2.9, 2.9)[1]} style={{ stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />}
        <circle cx={yx} cy={yy} r={6} style={{ fill: "var(--text)" }} />
        <text x={yx + 9} y={yy + 4} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>y</text>
        <text x={270} y={40} style={{ fill: "var(--text)", fontSize: 13 }}>range of I − μB:</text>
        <text x={270} y={60} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>{sing ? "the line through (1, −1)" : "the whole plane"}</text>
        {sing && <text x={270} y={90} style={{ fill: "var(--text-muted)", fontSize: 12 }}>dashed: kernel, spanned by (1, 1)</text>}
        <text x={270} y={130} style={{ fill: "var(--text-muted)", fontSize: 12 }}>B swaps coordinates;</text>
        <text x={270} y={148} style={{ fill: "var(--text-muted)", fontSize: 12 }}>its eigenvalues are 1 and −1.</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          μ = {mu.toFixed(2)}{" "}
          <input type="range" min={0} max={40} value={m20} onChange={(e) => setM(Number(e.target.value))} aria-label="value of mu" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: sing && Math.abs(y[0] + y[1]) > 1e-9 ? "var(--danger)" : "var(--text)" }}>{msg}</p>
      <figcaption className="viz-caption">
        Either the equation (I − μB)x = y has exactly one solution for every y, or the homogeneous equation has a non-zero
        solution, and then (B being symmetric) a solution exists exactly when y is orthogonal to the kernel. Fredholm showed
        that this dichotomy, obvious for matrices, survives for compact operators in infinite dimensions.
      </figcaption>
    </figure>
  );
}
