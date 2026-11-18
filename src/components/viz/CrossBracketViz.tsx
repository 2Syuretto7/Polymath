"use client";

import { useState } from "react";

type V3 = [number, number, number];
const hat = ([x, y, z]: V3) => [[0, -z, y], [z, 0, -x], [-y, x, 0]];
const mul = (A: number[][], B: number[][]) => A.map((r, i) => B[0].map((_, j) => r.reduce((s, _, k) => s + A[i][k] * B[k][j], 0)));
const sub = (A: number[][], B: number[][]) => A.map((r, i) => r.map((v, j) => v - B[i][j]));
const cross = ([a, b, c]: V3, [d, e, f]: V3): V3 => [b * f - c * e, c * d - a * f, a * e - b * d];
const s = (n: number) => (n < 0 ? `−${-n}` : `${n}`);

/** The Lie algebra so(3): skew-symmetric matrices, whose commutator is the cross product. */
export function CrossBracketViz() {
  const [u, setU] = useState<V3>([1, 0, 0]);
  const [v, setV] = useState<V3>([0, 1, 0]);
  const C = sub(mul(hat(u), hat(v)), mul(hat(v), hat(u)));
  const w = cross(u, v);
  const mat = (A: number[][], x: number, y: number, label: string, col = "var(--text)") => (
    <g>
      <text x={x} y={y - 6} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label}</text>
      {A.map((r, i) => r.map((val, j) => <text key={`${i}${j}`} x={x + 8 + j * 30} y={y + 14 + i * 18} textAnchor="middle" style={{ fill: col, fontSize: 12 }}>{s(val)}</text>))}
      <path d={`M${x - 6},${y} l-4,0 l0,${54} l4,0 M${x + 80},${y} l4,0 l0,${54} l-4,0`} style={{ fill: "none", stroke: "var(--text-muted)" }} />
    </g>
  );
  const sl = (label: string, vec: V3, set: (q: V3) => void, i: number, aria: string) => (
    <label>{label} = {s(vec[i])} <input type="range" min={-3} max={3} value={vec[i]} onChange={(e) => { const q = [...vec] as V3; q[i] = Number(e.target.value); set(q); }} aria-label={aria} /></label>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        {sl("u₁", u, setU, 0, "u1")}{sl("u₂", u, setU, 1, "u2")}{sl("u₃", u, setU, 2, "u3")}
      </div>
      <div className="viz-controls">
        {sl("v₁", v, setV, 0, "v1")}{sl("v₂", v, setV, 1, "v2")}{sl("v₃", v, setV, 2, "v3")}
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="Two skew-symmetric matrices and their commutator" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {mat(hat(u), 20, 30, "û")}
        {mat(hat(v), 150, 30, "v̂")}
        {mat(C, 290, 30, "[û, v̂] = ûv̂ − v̂û", "var(--accent)")}
        <text x={400} y={52} style={{ fill: "var(--text)", fontSize: 12 }}>u × v =</text>
        <text x={400} y={72} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>({s(w[0])}, {s(w[1])}, {s(w[2])})</text>
      </svg>
      <figcaption className="viz-caption">
        The tangent space of SO(3) at the identity is the space of skew-symmetric 3 × 3 matrices, each of the form û for a
        vector u. The commutator [û, v̂] is the matrix of u × v, so so(3) is ℝ³ with the cross product.
      </figcaption>
    </figure>
  );
}
