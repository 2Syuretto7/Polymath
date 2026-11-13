"use client";

import { useState } from "react";

function svd(a: number, b: number, c: number, d: number) {
  // eigen-decomposition of AᵀA = [[p, q], [q, r]]
  const p = a * a + c * c, q = a * b + c * d, r = b * b + d * d;
  const tr = p + r, disc = Math.sqrt(Math.max((p - r) ** 2 + 4 * q * q, 0));
  const l1 = (tr + disc) / 2, l2 = Math.max((tr - disc) / 2, 0);
  const th = 0.5 * Math.atan2(2 * q, p - r);
  const v1 = [Math.cos(th), Math.sin(th)], v2 = [-Math.sin(th), Math.cos(th)];
  const s1 = Math.sqrt(l1), s2 = Math.sqrt(l2);
  const Av1 = [a * v1[0] + b * v1[1], c * v1[0] + d * v1[1]];
  const Av2 = [a * v2[0] + b * v2[1], c * v2[0] + d * v2[1]];
  const u1 = s1 > 1e-9 ? [Av1[0] / s1, Av1[1] / s1] : [1, 0];
  const det = a * d - b * c;
  const u2 = s2 > 1e-9 ? [Av2[0] / s2, Av2[1] / s2] : det >= 0 ? [-u1[1], u1[0]] : [u1[1], -u1[0]];
  return { s1, s2, v1, v2, u1, u2 };
}

const STAGES = ["start", "turn by V*", "stretch by Σ", "turn by U"];

/** The singular value decomposition of a 2 by 2 matrix as turn, stretch, turn. */
export function SingularStagesViz() {
  const [m, setM] = useState([1.5, 1, 0, 1]);
  const [st, setSt] = useState(3);
  const [a, b, c, d] = m;
  const { s1, s2, v1, v2, u1, u2 } = svd(a, b, c, d);
  const stage = (x: number[]) => {
    if (st === 0) return x;
    const y = [x[0] * v1[0] + x[1] * v1[1], x[0] * v2[0] + x[1] * v2[1]];
    if (st === 1) return y;
    const z = [s1 * y[0], s2 * y[1]];
    if (st === 2) return z;
    return [z[0] * u1[0] + z[1] * u2[0], z[0] * u1[1] + z[1] * u2[1]];
  };
  const W = 320, o = W / 2, S = 50;
  const P = (q: number[]) => `${(o + q[0] * S).toFixed(1)},${(o - q[1] * S).toFixed(1)}`;
  const circ = Array.from({ length: 181 }, (_, k) => { const t = (k / 180) * 2 * Math.PI; return P(stage([Math.cos(t), Math.sin(t)])); }).join(" ");
  const e1 = stage(v1), e2 = stage(v2);
  const set = (i: number, x: number) => setM(m.map((y, j) => (j === i ? x : y)));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {["a", "b", "c", "d"].map((nm, i) => (
          <label key={nm}><span>{nm}: <span className="mono">{m[i]}</span></span>
            <input type="range" min={-2} max={2} step={0.25} value={m[i]} onChange={(e) => set(i, Number(e.target.value))} /></label>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="Stage of the decomposition">
        {STAGES.map((nm, i) => <button key={nm} type="button" aria-pressed={st === i} className={st === i ? "seg is-on" : "seg"} onClick={() => setSt(i)}>{nm}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The unit circle at each stage of the singular value decomposition" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={o} cy={o} r={S} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polygon points={circ} style={{ fill: "var(--accent-soft)", fillOpacity: 0.45, stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={o} y1={o} x2={o + e1[0] * S} y2={o - e1[1] * S} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <line x1={o} y1={o} x2={o + e2[0] * S} y2={o - e2[1] * S} style={{ stroke: "var(--danger)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        A = [{a}, {b}; {c}, {d}]: singular values σ₁ = {s1.toFixed(2)}, σ₂ = {s2.toFixed(2)}; |det A| = {Math.abs(a * d - b * c).toFixed(2)} = σ₁σ₂
      </p>
      <figcaption className="viz-caption">
        Every matrix A factors as UΣV*, with U and V isometries and Σ diagonal with entries σ₁ ≥ σ₂ ≥ 0. Step through the stages: V* turns the two right singular vectors, drawn as the two segments, onto the axes; Σ stretches the axes by σ₁ and σ₂; U turns the result into place. The final shape is A applied to the unit circle, an ellipse with semi-axes σ₁ and σ₂.
      </figcaption>
    </figure>
  );
}
