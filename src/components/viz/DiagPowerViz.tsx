"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

// A Markov matrix: each column adds to 1. Eigenvalues 1 and 1/2.
const A = [[0.8, 0.3], [0.2, 0.7]];
const V1: [number, number] = [0.6, 0.4];
const V2: [number, number] = [1, -1];
const STARTS: { name: string; x: [number, number] }[] = [
  { name: "everyone in city", x: [1, 0] },
  { name: "everyone outside", x: [0, 1] },
  { name: "half and half", x: [0.5, 0.5] },
];
const V: View = { xmin: 0, xmax: 1, ymin: 0, ymax: 1, w: 380, h: 380 };

/** Powers of a diagonalisable matrix: the part along the eigenvalue-1 direction stays, the part along λ = 1/2 halves every step. */
export function DiagPowerViz() {
  const [s, setS] = useState(0);
  const [k, setK] = useState(0);
  const { X, Y } = scales(V);
  const x0 = STARTS[s].x;
  // x0 = c1 v1 + c2 v2, with v1 = (0.6, 0.4), v2 = (1, −1); total population 1 gives c1 = x0[0] + x0[1]
  const c1 = x0[0] + x0[1];
  const c2 = x0[0] - 0.6 * c1;
  const pts: [number, number][] = [];
  let p: [number, number] = [...x0];
  for (let j = 0; j <= k; j++) {
    pts.push(p);
    p = [A[0][0] * p[0] + A[0][1] * p[1], A[1][0] * p[0] + A[1][1] * p[1]];
  }
  const xk = pts[k];
  const f = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Starting state">
        {STARTS.map((st, i) => (
          <button key={st.name} type="button" className={i === s ? "seg is-on" : "seg"} aria-pressed={i === s} onClick={() => setS(i)}>{st.name}</button>
        ))}
      </div>
      <Axes v={V} label="States x, Ax, A²x, … approaching the steady state" xStep={0.2} yStep={0.2}>
        <line x1={X(0)} y1={Y(1)} x2={X(1)} y2={Y(0)} className="plot-ghost" />
        <circle cx={X(V1[0])} cy={Y(V1[1])} r={9} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {pts.slice(1).map((q, j) => (
          <line key={`l${j}`} x1={X(pts[j][0])} y1={Y(pts[j][1])} x2={X(q[0])} y2={Y(q[1])} style={{ stroke: "var(--text-faint)", strokeWidth: 1.5 }} />
        ))}
        {pts.map((q, j) => <circle key={j} cx={X(q[0])} cy={Y(q[1])} r={j === k ? 6 : 3.5} className={j === k ? "plot-hot" : "plot-point"} />)}
      </Axes>
      <div className="viz-sliders">
        <label><span>power k = <span className="mono">{k}</span></span>
          <input type="range" min={0} max={12} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>[0.8 0.3; 0.2 0.7], eigenvalues 1 and 1/2</td></tr>
          <tr><td>x₀ = c₁v₁ + c₂v₂</td><td>{f(c1)}·(0.6, 0.4) + {f(c2)}·(1, −1)</td></tr>
          <tr><td>Aᵏx₀</td><td>{f(c1)}·(0.6, 0.4) + {f(c2)}·(1/2)^{k}·(1, −1) = ({f(xk[0])}, {f(xk[1])})</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {`Each year, 80% of those in the city stay and 20% leave; 30% of those outside move in. Write the start as a combination of the eigenvectors: the part along v₁ = (0.6, 0.4), eigenvalue 1, never changes, while the part along v₂, eigenvalue 1/2, halves every year. After ${k} ${k === 1 ? "step" : "steps"} it has shrunk by a factor ${fmtNum(2 ** k)}, so every start approaches the circled steady state (0.6, 0.4).`}
      </figcaption>
    </figure>
  );
}
