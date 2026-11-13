"use client";

import { useState } from "react";

const f = (x: number) => (Math.abs(x) < 5e-4 ? "0.00" : x.toFixed(2));

/** The adjoint of a real 2 by 2 matrix: ⟨Tv, w⟩ = ⟨v, T*w⟩ for every v and w. */
export function AdjointViz() {
  const [m, setM] = useState([1, 2, 0, 1]);
  const [tv, setTv] = useState(30);
  const [tw, setTw] = useState(120);
  const [a, b, c, d] = m;
  const v = [Math.cos((tv * Math.PI) / 180), Math.sin((tv * Math.PI) / 180)];
  const w = [Math.cos((tw * Math.PI) / 180), Math.sin((tw * Math.PI) / 180)];
  const Tv = [a * v[0] + b * v[1], c * v[0] + d * v[1]];
  const Ts = [a * w[0] + c * w[1], b * w[0] + d * w[1]];
  const lhs = Tv[0] * w[0] + Tv[1] * w[1];
  const rhs = v[0] * Ts[0] + v[1] * Ts[1];
  const sa = b === c;
  const W = 300, o = W / 2, S = 55;
  const P = (p: number[]) => [o + p[0] * S, o - p[1] * S];
  const arrow = (p: number[], col: string, dash?: string, lbl?: string) => {
    const [x, y] = P(p);
    return (
      <g>
        <line x1={o} y1={o} x2={x} y2={y} style={{ stroke: col, strokeWidth: 2, strokeDasharray: dash }} />
        <circle cx={x} cy={y} r={3} style={{ fill: col }} />
        {lbl && <text x={x + 6} y={y - 6} style={{ fill: col, fontSize: 12 }}>{lbl}</text>}
      </g>
    );
  };
  const set = (i: number, x: number) => setM(m.map((y, j) => (j === i ? x : y)));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {["a", "b", "c", "d"].map((nm, i) => (
          <label key={nm}><span>{nm}: <span className="mono">{m[i]}</span></span>
            <input type="range" min={-2} max={2} step={0.5} value={m[i]} onChange={(e) => set(i, Number(e.target.value))} /></label>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>angle of v: <span className="mono">{tv}°</span></span>
          <input type="range" min={0} max={355} step={5} value={tv} onChange={(e) => setTv(Number(e.target.value))} /></label>
        <label><span>angle of w: <span className="mono">{tw}°</span></span>
          <input type="range" min={0} max={355} step={5} value={tw} onChange={(e) => setTw(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Vectors v, Tv, w and T*w" style={{ width: "100%", maxWidth: 300 }}>
          <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
          <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
          <circle cx={o} cy={o} r={S} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "2 3" }} />
          {arrow(v, "var(--text)", undefined, "v")}
          {arrow(Tv, "var(--text)", "5 3", "Tv")}
          {arrow(w, "var(--accent)", undefined, "w")}
          {arrow(Ts, "var(--accent)", "5 3", "T*w")}
        </svg>
        <div>
          <table className="table mono" style={{ width: "auto" }}>
            <tbody>
              <tr><td>T =</td><td>[{a}, {b}]</td><td>T* =</td><td>[{a}, {c}]</td></tr>
              <tr><td></td><td>[{c}, {d}]</td><td></td><td>[{b}, {d}]</td></tr>
            </tbody>
          </table>
          <p className="mono" style={{ margin: "8px 0 4px" }}>⟨Tv, w⟩ = {f(lhs)}</p>
          <p className="mono" style={{ margin: "4px 0" }}>⟨v, T*w⟩ = {f(rhs)}</p>
          <p style={{ margin: "8px 0", color: sa ? "var(--accent)" : "var(--text-muted)" }}>
            {sa ? "b = c, so T* = T: this operator is self-adjoint." : "b ≠ c, so T* ≠ T."}
          </p>
        </div>
      </div>
      <figcaption className="viz-caption">
        The adjoint T* is defined by ⟨Tv, w⟩ = ⟨v, T*w⟩ for all v and w. With the standard inner product on ℝ², its matrix is the transpose of the matrix of T, so the two numbers always agree, whatever v and w you choose. Set b = c to make T equal to its own adjoint.
      </figcaption>
    </figure>
  );
}
