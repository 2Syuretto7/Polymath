"use client";

import { useState } from "react";
import { Arrow, Axes, paramPath, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const PRESETS: { name: string; A: [[number, number], [number, number]]; note: string }[] = [
  { name: "symmetric", A: [[2, 1], [1, 2]], note: "Eigenvalues 3 and 1, along the perpendicular directions 45° and 135°." },
  { name: "triangular", A: [[3, 1], [0, 2]], note: "Eigenvalues 3 and 2, the diagonal entries, along 0° and 135°. The eigenvectors are not perpendicular." },
  { name: "with a negative eigenvalue", A: [[1, 2], [2, 1]], note: "Eigenvalues 3 and −1: along 135°, Ax points exactly the opposite way." },
  { name: "shear", A: [[1, 1], [0, 1]], note: "Only one eigenvector direction, 0°, with eigenvalue 1 repeated. Not enough eigenvectors to make a basis." },
  { name: "rotation", A: [[0, -1], [1, 0]], note: "Ax is always at right angles to x: no real eigenvectors. The eigenvalues are i and −i." },
];
const V: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4, w: 400, h: 400 };

/** Turn a unit vector x around the circle and watch Ax; where they line up, x is an eigenvector. */
export function EigenViz() {
  const [k, setK] = useState(0);
  const [deg, setDeg] = useState(20);
  const { X, Y } = scales(V);
  const [[a, b], [c, d]] = PRESETS[k].A;
  const t = (deg * Math.PI) / 180;
  const x: [number, number] = [Math.cos(t), Math.sin(t)];
  const Ax: [number, number] = [a * x[0] + b * x[1], c * x[0] + d * x[1]];
  const cross = x[0] * Ax[1] - x[1] * Ax[0];
  const lam = x[0] * Ax[0] + x[1] * Ax[1];
  const eig = Math.abs(cross) < 1e-9;
  const f = (z: number) => fmtNum(Number(z.toFixed(2)));
  const ellipse = paramPath(V, (s) => [a * Math.cos(s) + b * Math.sin(s), c * Math.cos(s) + d * Math.sin(s)], 0, 2 * Math.PI, 200);
  const circle = paramPath(V, (s) => [Math.cos(s), Math.sin(s)], 0, 2 * Math.PI, 100);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {PRESETS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{p.name}</button>
        ))}
      </div>
      <Axes v={V} label="A unit vector x and its image Ax">
        <path d={circle} className="plot-ghost" />
        <path d={ellipse} className="plot-curve-2" />
        {eig && <line x1={X(-6 * x[0])} y1={Y(-6 * x[1])} x2={X(6 * x[0])} y2={Y(6 * x[1])} style={{ stroke: "var(--accent)", strokeWidth: 6, opacity: 0.2 }} />}
        <Arrow x1={X(0)} y1={Y(0)} x2={X(Ax[0])} y2={Y(Ax[1])} className={eig ? "plot-arrow is-hot" : "plot-arrow is-muted"} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(x[0])} y2={Y(x[1])} />
      </Axes>
      <div className="viz-sliders">
        <label><span>direction of x: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={180} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>[{a} {b}; {c} {d}]</td></tr>
          <tr><td>x, Ax</td><td>({f(x[0])}, {f(x[1])}), ({f(Ax[0])}, {f(Ax[1])})</td></tr>
          <tr><td>lined up?</td><td>{eig ? `yes: Ax = ${f(lam)}x` : "no"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {eig
          ? `x is an eigenvector: A only stretches it, by the eigenvalue λ = ${f(lam)}. ${PRESETS[k].note}`
          : "As x goes round the dashed unit circle, Ax traces the other curve. Most of the time Ax points in a new direction. Turn x until Ax lies along the same line."}
      </figcaption>
    </figure>
  );
}
