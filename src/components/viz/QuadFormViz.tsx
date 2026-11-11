"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";
import { sym2 } from "./sym2";

const V: View = { xmin: -3, xmax: 3, ymin: -3, ymax: 3, w: 400, h: 400 };
type Pt = [number, number];

/** Curves λ₁u² + λ₂v² = c in the eigenvector coordinates, mapped back to x and y. */
function level(l1: number, l2: number, c: number, q1: Pt, q2: Pt): Pt[][] {
  const toXY = ([u, v]: Pt): Pt => [u * q1[0] + v * q2[0], u * q1[1] + v * q2[1]];
  const N = 160, out: Pt[][] = [];
  const sg0 = (z: number) => (Math.abs(z) < 1e-9 ? 0 : Math.sign(z));
  const s1 = sg0(l1 * c), s2 = sg0(l2 * c);
  const r1 = Math.sqrt(Math.abs(c / l1)), r2 = Math.sqrt(Math.abs(c / l2));
  if (s1 > 0 && s2 > 0) out.push(Array.from({ length: N + 1 }, (_, i) => toXY([r1 * Math.cos((2 * Math.PI * i) / N), r2 * Math.sin((2 * Math.PI * i) / N)])));
  else if (s1 > 0 && s2 < 0) for (const sg of [1, -1]) out.push(Array.from({ length: N + 1 }, (_, i) => { const t = -3 + (6 * i) / N; return toXY([sg * r1 * Math.cosh(t), r2 * Math.sinh(t)]); }));
  else if (s1 < 0 && s2 > 0) for (const sg of [1, -1]) out.push(Array.from({ length: N + 1 }, (_, i) => { const t = -3 + (6 * i) / N; return toXY([r1 * Math.sinh(t), sg * r2 * Math.cosh(t)]); }));
  else if (s1 > 0 && s2 === 0) for (const sg of [1, -1]) out.push([toXY([sg * r1, -10]), toXY([sg * r1, 10])]);
  else if (s2 > 0 && s1 === 0) for (const sg of [1, -1]) out.push([toXY([-10, sg * r2]), toXY([10, sg * r2])]);
  return out;
}

/** The quadratic form xᵀSx: where it equals 1 and −1, and the tests for positive definiteness. */
export function QuadFormViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [d, setD] = useState(2);
  const { X, Y } = scales(V);
  const { l1, l2, q1, q2 } = sym2(a, b, d);
  const det = a * d - b * b;
  const f = (z: number) => fmtNum(Number(z.toFixed(2)));
  const path = (pts: Pt[]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`).join(" ");
  const E = 1e-9;
  const kind = l2 > E ? "positive definite" : l2 > -E && l1 > E ? "positive semidefinite" : l1 < -E ? "negative definite" : l1 < E && l2 < -E ? "negative semidefinite" : l1 > E && l2 < -E ? "indefinite" : "zero";
  const slider = (label: string, val: number, set: (n: number) => void, lo: number, hi: number) => (
    <label><span>{label} = <span className="mono">{f(val)}</span></span>
      <input type="range" min={lo} max={hi} step={0.5} value={val} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  const yes = (t: boolean) => (t ? "yes" : "no");

  return (
    <figure className="viz">
      <Axes v={V} label="Where the quadratic form equals 1 and −1">
        {level(l1, l2, 1, q1, q2).map((p, i) => <path key={`p${i}`} d={path(p)} className="plot-curve" />)}
        {level(l1, l2, -1, q1, q2).map((p, i) => <path key={`n${i}`} d={path(p)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "7 5" }} />)}
      </Axes>
      <div className="viz-sliders">
        {slider("a", a, setA, -3, 3)}
        {slider("b", b, setB, -2, 2)}
        {slider("c", d, setD, -3, 3)}
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>S</td><td>[{f(a)} {f(b)}; {f(b)} {f(d)}]</td></tr>
          <tr><td>xᵀSx</td><td>{f(a)}x² + {f(2 * b)}xy + {f(d)}y²</td></tr>
          <tr><td>eigenvalues</td><td>{f(l1)} and {f(l2)}: both positive? {yes(l2 > E)}</td></tr>
          <tr><td>pivots</td><td>{Math.abs(a) > E ? `${f(a)} and ${f(det / a)}` : "first pivot is 0"}: both positive? {yes(a > E && det > E)}</td></tr>
          <tr><td>leading determinants</td><td>{f(a)} and {f(det)}: both positive? {yes(a > E && det > E)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {`S is ${kind}. `}
        {kind === "positive definite"
          ? "xᵀSx > 0 for every x ≠ 0, so the level set xᵀSx = 1 is an ellipse and there is nowhere it equals −1. All three tests agree."
          : kind === "indefinite"
            ? "xᵀSx is positive in some directions and negative in others: the level sets are hyperbolas, solid where it equals 1 and dashed where it equals −1. The graph is a saddle."
            : kind === "positive semidefinite"
              ? "One eigenvalue is 0: along that direction xᵀSx = 0, so the ellipse has stretched into two parallel lines."
              : kind === "negative definite"
                ? "xᵀSx < 0 for every x ≠ 0: only the dashed curve, where it equals −1, appears."
                : "Along some direction the form is 0, and nowhere is it positive."}
      </figcaption>
    </figure>
  );
}
