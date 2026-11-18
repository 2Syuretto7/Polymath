"use client";

import { useState } from "react";
import { Arrow, Axes, paramPath, scales, type View } from "./Plot";
import { fmtNum } from "./format";
import { sym2 } from "./sym2";

const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4, w: 400, h: 400 };

/** Any symmetric 2 by 2 matrix: real eigenvalues, perpendicular eigenvectors, and the unit circle mapped to an ellipse with those axes. */
export function SpectralViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [d, setD] = useState(1);
  const { X, Y } = scales(V);
  const { l1, l2, q1, q2 } = sym2(a, b, d);
  const f = (z: number) => fmtNum(Number(z.toFixed(2)));
  const img = paramPath(V, (s) => [a * Math.cos(s) + b * Math.sin(s), b * Math.cos(s) + d * Math.sin(s)], 0, 2 * Math.PI, 200);
  const circle = paramPath(V, (s) => [Math.cos(s), Math.sin(s)], 0, 2 * Math.PI, 100);
  const slider = (label: string, val: number, set: (n: number) => void, lo: number, hi: number) => (
    <label><span>{label} = <span className="mono">{f(val)}</span></span>
      <input type="range" min={lo} max={hi} step={0.5} value={val} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  const axis = (q: [number, number]) => (
    <line x1={X(-6 * q[0])} y1={Y(-6 * q[1])} x2={X(6 * q[0])} y2={Y(6 * q[1])} style={{ stroke: "var(--border-strong)", strokeWidth: 1, strokeDasharray: "3 4" }} />
  );

  return (
    <figure className="viz">
      <Axes v={V} label="Eigenvectors of a symmetric matrix and the image of the unit circle">
        {axis(q1)}{axis(q2)}
        <path d={circle} className="plot-ghost" />
        <path d={img} className="plot-curve" />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(l1 * q1[0])} y2={Y(l1 * q1[1])} className="plot-arrow is-muted" />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(l2 * q2[0])} y2={Y(l2 * q2[1])} className="plot-arrow is-hot" />
      </Axes>
      <div className="viz-sliders">
        {slider("a (top left)", a, setA, -3, 3)}
        {slider("b (both off-diagonal entries)", b, setB, -2, 2)}
        {slider("d (bottom right)", d, setD, -3, 3)}
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>S</td><td>[{f(a)} {f(b)}; {f(b)} {f(d)}]</td></tr>
          <tr><td>eigenvalues</td><td>λ₁ = {f(l1)}, λ₂ = {f(l2)}</td></tr>
          <tr><td>eigenvectors</td><td>q₁ = ({f(q1[0])}, {f(q1[1])}), q₂ = ({f(q2[0])}, {f(q2[1])}), q₁·q₂ = 0</td></tr>
          <tr><td>S = QΛQᵀ</td><td>{f(l1)}·q₁q₁ᵀ + {f(l2)}·q₂q₂ᵀ</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {Math.abs(l1 - l2) < 1e-9
          ? "The eigenvalues are equal, so S is a multiple of the identity: every vector is an eigenvector, and the circle maps to a circle."
          : `Whatever symmetric matrix you choose, the eigenvalues are real and the eigenvectors, along the dotted axes, are perpendicular. S stretches by λ₁ = ${f(l1)} along one axis and by λ₂ = ${f(l2)} along the other, so the unit circle becomes an ellipse with exactly those axes${l1 * l2 < 0 ? ", flipped over along one of them" : ""}.`}
      </figcaption>
    </figure>
  );
}
