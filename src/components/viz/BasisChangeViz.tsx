"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4, w: 400, h: 400 };
const A = [[2, 1], [1, 2]];
type P = [number, number];

const BASES: { name: string; b1: P; b2: P; say: string }[] = [
  { name: "standard basis", b1: [1, 0], b2: [0, 1], say: "In the standard basis the matrix of the map is just A, with an off-diagonal 1 mixing the coordinates." },
  { name: "eigenvector basis", b1: [1, 1], b2: [-1, 1], say: "In the eigenvector basis the matrix is diagonal: the map triples the first coordinate and leaves the second alone. Nothing is mixed." },
  { name: "a skew basis", b1: [1, 0], b2: [1, 1], say: "Any basis gives some matrix for the same map. This one is no simpler than A: a basis is only worth changing to if it makes the map easier to see." },
];

const r2 = (x: number) => fmtNum(Number(x.toFixed(2)));

/** The same linear map, described in different bases: its matrix is B⁻¹AB. */
export function BasisChangeViz() {
  const [k, setK] = useState(0);
  const [c, setC] = useState<P>([1, 1]);
  const { b1, b2, say } = BASES[k];
  const B = [[b1[0], b2[0]], [b1[1], b2[1]]];
  const det = B[0][0] * B[1][1] - B[0][1] * B[1][0];
  const Bi = [[B[1][1] / det, -B[0][1] / det], [-B[1][0] / det, B[0][0] / det]];
  const mul = (P: number[][], Q: number[][]) => [0, 1].map((i) => [0, 1].map((j) => P[i][0] * Q[0][j] + P[i][1] * Q[1][j]));
  const AB = mul(Bi, mul(A, B));
  const v: P = [c[0] * b1[0] + c[1] * b2[0], c[0] * b1[1] + c[1] * b2[1]];
  const Av: P = [A[0][0] * v[0] + A[0][1] * v[1], A[1][0] * v[0] + A[1][1] * v[1]];
  const cAv: P = [AB[0][0] * c[0] + AB[0][1] * c[1], AB[1][0] * c[0] + AB[1][1] * c[1]];
  const { X, Y } = scales(V);
  const lines = [];
  for (let i = -8; i <= 8; i++) {
    lines.push(<line key={`a${i}`} x1={X(i * b2[0] - 8 * b1[0])} y1={Y(i * b2[1] - 8 * b1[1])} x2={X(i * b2[0] + 8 * b1[0])} y2={Y(i * b2[1] + 8 * b1[1])} />);
    lines.push(<line key={`b${i}`} x1={X(i * b1[0] - 8 * b2[0])} y1={Y(i * b1[1] - 8 * b2[1])} x2={X(i * b1[0] + 8 * b2[0])} y2={Y(i * b1[1] + 8 * b2[1])} />);
  }
  const slider = (label: string, i: 0 | 1) => (
    <label><span>{label} = <span className="mono">{fmtNum(c[i])}</span></span>
      <input type="range" min={-2} max={2} step={0.5} value={c[i]} onChange={(e) => { const n = Number(e.target.value); setC((q) => (i === 0 ? [n, q[1]] : [q[0], n])); }} /></label>
  );

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Basis">
        {BASES.map((b, i) => (
          <button key={b.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{b.name}</button>
        ))}
      </div>
      <Axes v={V} label="A vector, its image, and the grid of the chosen basis">
        <g style={{ stroke: "var(--accent)", opacity: 0.22 }}>{lines}</g>
        <Arrow x1={X(0)} y1={Y(0)} x2={X(b1[0])} y2={Y(b1[1])} className="plot-arrow is-muted" />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(b2[0])} y2={Y(b2[1])} className="plot-arrow is-muted" />
        {Math.hypot(...v) > 1e-9 && <Arrow x1={X(0)} y1={Y(0)} x2={X(v[0])} y2={Y(v[1])} />}
        {Math.hypot(...Av) > 1e-9 && <Arrow x1={X(0)} y1={Y(0)} x2={X(Av[0])} y2={Y(Av[1])} className="plot-arrow is-hot" />}
      </Axes>
      <div className="viz-sliders">
        {slider("first coordinate of v in this basis", 0)}
        {slider("second coordinate of v in this basis", 1)}
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>basis</td><td>b₁ = ({b1.join(", ")}), b₂ = ({fmtNum(b2[0])}, {fmtNum(b2[1])})</td></tr>
          <tr><td>v</td><td>{fmtNum(c[0])}b₁ + {fmtNum(c[1])}b₂ = ({r2(v[0])}, {r2(v[1])})</td></tr>
          <tr><td>Av</td><td>{r2(cAv[0])}b₁ + {r2(cAv[1])}b₂ = ({r2(Av[0])}, {r2(Av[1])})</td></tr>
          <tr><td>B⁻¹AB</td><td>[{r2(AB[0][0])} {r2(AB[0][1])}; {r2(AB[1][0])} {r2(AB[1][1])}]</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The map is always A = [2 1; 1 2]; the dark arrow is v and the red arrow Av. The matrix B⁻¹AB turns the coordinates of v in the new basis into the coordinates of Av. {say}
      </figcaption>
    </figure>
  );
}
