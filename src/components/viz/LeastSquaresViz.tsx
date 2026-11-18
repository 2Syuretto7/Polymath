"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const DATA: { name: string; pts: [number, number][]; c: number; d: number }[] = [
  { name: "three points", pts: [[0, 6], [1, 0], [2, 0]], c: 4, d: -1 },
  { name: "four points", pts: [[1, 1], [2, 2], [3, 2], [4, 4]], c: 1, d: 0.5 },
];
const V: View = { xmin: -1, xmax: 5, ymin: -2, ymax: 8, w: 420, h: 380 };

/** Fit a line C + Dt to data by hand, watching the squared errors, then compare with the solution of the normal equations. */
export function LeastSquaresViz() {
  const [k, setK] = useState(0);
  const [C, setC] = useState(DATA[0].c);
  const [D, setD] = useState(DATA[0].d);
  const { X, Y } = scales(V);
  const pts = DATA[k].pts;
  const r2 = (x: number) => Number(x.toFixed(2));
  const E = pts.reduce((s, [t, b]) => s + (b - C - D * t) ** 2, 0);
  // normal equations AᵀA x̂ = Aᵀb with A = [1 t]
  const m = pts.length, St = pts.reduce((s, [t]) => s + t, 0), Stt = pts.reduce((s, [t]) => s + t * t, 0);
  const Sb = pts.reduce((s, [, b]) => s + b, 0), Stb = pts.reduce((s, [t, b]) => s + t * b, 0);
  const det = m * Stt - St * St;
  const Cb = (Sb * Stt - St * Stb) / det, Db = (m * Stb - St * Sb) / det;
  const Emin = pts.reduce((s, [t, b]) => s + (b - Cb - Db * t) ** 2, 0);
  const best = Math.abs(C - Cb) < 1e-9 && Math.abs(D - Db) < 1e-9;
  const pick = (i: number) => { setK(i); setC(DATA[i].c); setD(DATA[i].d); };

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Data">
        {DATA.map((d, i) => (
          <button key={d.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => pick(i)}>{d.name}</button>
        ))}
      </div>
      <Axes v={V} label={`Data and the line ${fmtNum(C)} + ${fmtNum(D)}t`}>
        <line x1={X(-2)} y1={Y(C - 2 * D)} x2={X(6)} y2={Y(C + 6 * D)} className="plot-curve" />
        {pts.map(([t, b]) => (
          <line key={`e${t}`} x1={X(t)} y1={Y(b)} x2={X(t)} y2={Y(C + D * t)} className="plot-line" style={{ strokeWidth: 2.5 }} />
        ))}
        {pts.map(([t, b]) => <circle key={`p${t}`} cx={X(t)} cy={Y(b)} r={5.5} className="plot-hot" />)}
      </Axes>
      <div className="viz-sliders">
        <label><span>C, the height at t = 0: <span className="mono">{fmtNum(C)}</span></span>
          <input type="range" min={-2} max={8} step={0.25} value={C} onChange={(e) => setC(Number(e.target.value))} /></label>
        <label><span>D, the slope: <span className="mono">{fmtNum(D)}</span></span>
          <input type="range" min={-5} max={3} step={0.1} value={D} onChange={(e) => setD(r2(Number(e.target.value)))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => { setC(r2(Cb)); setD(r2(Db)); }}>Solve the normal equations</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>errors b − (C + Dt)</td><td>{pts.map(([t, b]) => fmtNum(r2(b - C - D * t))).join(", ")}</td></tr>
          <tr><td>E = sum of squares</td><td>{fmtNum(r2(E))} (smallest possible: {fmtNum(r2(Emin))})</td></tr>
          <tr><td>AᵀA x̂ = Aᵀb</td><td>[{m} {fmtNum(St)}; {fmtNum(St)} {fmtNum(Stt)}] x̂ = ({fmtNum(Sb)}, {fmtNum(Stb)})</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {best
          ? `This is the least squares line, ${fmtNum(r2(Cb))} + ${fmtNum(r2(Db))}t. No choice of C and D makes E smaller. The errors add up to zero, and so do the errors times t: the error vector is perpendicular to both columns of A.`
          : `No line passes through all the points, so Ax = b has no solution. Adjust C and D to make E, the total of the squared red lengths, as small as you can, then compare with the normal equations.`}
      </figcaption>
    </figure>
  );
}
