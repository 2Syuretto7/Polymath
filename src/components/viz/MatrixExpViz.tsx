"use client";

import { useState } from "react";

type Mat = [number, number, number, number];
type P = { label: string; A: Mat; note: string };
const PS: P[] = [
  { label: "rotation [[0, −1], [1, 0]]", A: [0, -1, 1, 0], note: "e^(tA) is rotation by angle t: the series reassembles the series for cos t and sin t." },
  { label: "nilpotent [[0, 1], [0, 0]]", A: [0, 1, 0, 0], note: "A² = 0, so the series stops: e^(tA) = I + tA exactly, from two terms on." },
  { label: "diagonal [[1, 0], [0, −1]]", A: [1, 0, 0, -1], note: "For a diagonal matrix, e^(tA) is diagonal with entries e^t and e^(−t)." },
  { label: "defective [[−1, 1], [0, −1]]", A: [-1, 1, 0, -1], note: "Only one eigenvector, yet e^(tA) = e^(−t)(I + tN) with N = [[0, 1], [0, 0]]: the te^(−t) term appears." },
];
const mul = (a: Mat, b: Mat): Mat => [a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3], a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]];
function expExact(A: Mat, t: number): Mat {
  const s = (A[0] + A[3]) / 2;
  const N: Mat = [A[0] - s, A[1], A[2], A[3] - s];
  const q = s * s - (A[0] * A[3] - A[1] * A[2]);
  let c: number, f: number;
  if (Math.abs(q) < 1e-12) { c = 1; f = t; } else if (q > 0) { const r = Math.sqrt(q); c = Math.cosh(r * t); f = Math.sinh(r * t) / r; } else { const r = Math.sqrt(-q); c = Math.cos(r * t); f = Math.sin(r * t) / r; }
  const e = Math.exp(s * t);
  return [e * (c + f * N[0]), e * f * N[1], e * f * N[2], e * (c + f * N[3])];
}

/** The matrix exponential as the series I + tA + (tA)²/2! + …, compared with its exact value. */
export function MatrixExpViz() {
  const [pi, setPi] = useState(0);
  const [t, setT] = useState(1.5);
  const [K, setK] = useState(3);
  const P = PS[pi];
  const tA: Mat = P.A.map((x) => x * t) as Mat;
  let term: Mat = [1, 0, 0, 1], sum: Mat = [1, 0, 0, 1];
  for (let k = 1; k <= K; k++) { term = mul(term, tA).map((x) => x / k) as Mat; sum = sum.map((x, i) => x + term[i]) as Mat; }
  const ex = expExact(P.A, t);
  const err = Math.max(...sum.map((x, i) => Math.abs(x - ex[i])));
  const W = 360, R = 2, o = W / 2, S = (W / 2 - 12) / R;
  const X = (x: number) => o + x * S, Y = (y: number) => o - y * S;
  const sq = (M: Mat) => [[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => `${X(Math.max(-R, Math.min(R, M[0] * x + M[1] * y)))},${Y(Math.max(-R, Math.min(R, M[2] * x + M[3] * y)))}`).join(" ");
  const f = (v: number) => v.toFixed(3);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {PS.map((x, i) => <button key={x.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={3} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>terms of the series used, up to k = <span className="mono">{K}</span></span>
          <input type="range" min={0} max={12} step={1} value={K} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Image of the unit square under the partial sum and under the exact exponential" style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <polygon points={sq([1, 0, 0, 1])} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polygon points={sq(ex)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <polygon points={sq(sum)} style={{ fill: "var(--accent-soft)", fillOpacity: 0.35, stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>partial sum: [[{f(sum[0])}, {f(sum[1])}], [{f(sum[2])}, {f(sum[3])}]]</p>
      <p className="mono" style={{ margin: "4px 0" }}>e^(tA):      [[{f(ex[0])}, {f(ex[1])}], [{f(ex[2])}, {f(ex[3])}]]; largest entry error {err.toExponential(1)}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{P.note}</p>
      <figcaption className="viz-caption">
        The faint dotted square is the unit square; the dashed shape is its image under the exact e^(tA), and the shaded shape its image under the partial sum. Adding terms makes the two agree. The columns of e^(tA) are the solutions of x′ = Ax starting from (1, 0) and (0, 1).
      </figcaption>
    </figure>
  );
}
