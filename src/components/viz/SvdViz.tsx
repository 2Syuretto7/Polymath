"use client";

import { useState } from "react";
import { Arrow, Axes, paramPath, scales, type View } from "./Plot";
import { fmtNum } from "./format";
import { sym2 } from "./sym2";

const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4, w: 400, h: 400 };
const r2 = (x: number) => fmtNum(Number(x.toFixed(2)));

/** Every matrix sends the unit circle to an ellipse: the right singular vectors go to the axes of the ellipse. */
export function SvdViz() {
  const [m, setM] = useState([2, 1, 0, 1]);
  const [a, b, c, d] = m;
  const ap = ([x, y]: [number, number]): [number, number] => [a * x + b * y, c * x + d * y];
  const { l1, l2, q1, q2 } = sym2(a * a + c * c, a * b + c * d, b * b + d * d);
  const s1 = Math.sqrt(Math.max(l1, 0)), s2 = Math.sqrt(Math.max(l2, 0));
  const tiny = 1e-9;
  const u1 = s1 > tiny ? ap(q1).map((x) => x / s1) as [number, number] : null;
  const u2 = s2 > tiny ? ap(q2).map((x) => x / s2) as [number, number] : null;
  const { X, Y } = scales(V);
  const circle = paramPath(V, (t) => [Math.cos(t), Math.sin(t)], 0, 2 * Math.PI, 120);
  const ellipse = paramPath(V, (t) => ap([Math.cos(t), Math.sin(t)]), 0, 2 * Math.PI, 160);
  const det = a * d - b * c;
  const names = ["a", "b", "c", "d"];
  const rank = s1 < tiny ? 0 : s2 < tiny ? 1 : 2;

  return (
    <figure className="viz">
      <Axes v={V} label="The unit circle, its image ellipse, and the singular vectors">
        <path d={circle} className="plot-ghost" style={{ strokeDasharray: "4 4" }} />
        <path d={ellipse} className="plot-curve" />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(q1[0])} y2={Y(q1[1])} className="plot-arrow is-muted" />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(q2[0])} y2={Y(q2[1])} className="plot-arrow is-muted" />
        {u1 && <Arrow x1={X(0)} y1={Y(0)} x2={X(s1 * u1[0])} y2={Y(s1 * u1[1])} />}
        {u2 && <Arrow x1={X(0)} y1={Y(0)} x2={X(s2 * u2[0])} y2={Y(s2 * u2[1])} className="plot-arrow is-hot" />}
      </Axes>
      <div className="viz-sliders">
        {names.map((n, i) => (
          <label key={n}><span>{n} = <span className="mono">{fmtNum(m[i])}</span></span>
            <input type="range" min={-2} max={2} step={0.5} value={m[i]} onChange={(e) => { const x = Number(e.target.value); setM((q) => q.map((y, j) => (j === i ? x : y))); }} /></label>
        ))}
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>[{fmtNum(a)} {fmtNum(b)}; {fmtNum(c)} {fmtNum(d)}]</td></tr>
          <tr><td>singular values</td><td>σ₁ = {r2(s1)}, σ₂ = {r2(s2)}</td></tr>
          <tr><td>right singular vectors</td><td>v₁ = ({r2(q1[0])}, {r2(q1[1])}), v₂ = ({r2(q2[0])}, {r2(q2[1])})</td></tr>
          <tr><td>left singular vectors</td><td>{u1 ? `u₁ = (${r2(u1[0])}, ${r2(u1[1])})` : "u₁ not determined"}, {u2 ? `u₂ = (${r2(u2[0])}, ${r2(u2[1])})` : "u₂ not determined"}</td></tr>
          <tr><td>σ₁σ₂ and |det A|</td><td>{r2(s1 * s2)} and {r2(Math.abs(det))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {rank === 2
          ? `The perpendicular unit vectors v₁ and v₂ (faint arrows) go to the perpendicular axes of the ellipse: Av₁ = σ₁u₁ (dark) and Av₂ = σ₂u₂ (red). So A rotates, stretches by ${r2(s1)} and ${r2(s2)}, and rotates again.`
          : rank === 1
            ? "A has rank 1: σ₂ = 0, and the ellipse has collapsed to a line segment. All of A is carried by σ₁u₁v₁ᵀ."
            : "A is the zero matrix: everything goes to the origin."}
      </figcaption>
    </figure>
  );
}
