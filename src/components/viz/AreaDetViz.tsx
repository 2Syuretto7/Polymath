"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5, w: 400, h: 400 };

/** The columns of a 2 by 2 matrix span a parallelogram whose signed area is the determinant. */
export function AreaDetViz() {
  const [u, setU] = useState<[number, number]>([2, 0.5]);
  const [v, setV] = useState<[number, number]>([1, 2]);
  const { X, Y } = scales(V);
  const det = u[0] * v[1] - v[0] * u[1];
  const pts = [[0, 0], u, [u[0] + v[0], u[1] + v[1]], v].map(([x, y]) => `${X(x)},${Y(y)}`).join(" ");
  const sq = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => `${X(x)},${Y(y)}`).join(" ");
  const clamp = (x: number) => Math.max(-3, Math.min(3, x));
  const canShear = Math.abs(v[0] + u[0]) <= 3 && Math.abs(v[1] + u[1]) <= 3;
  const slider = (label: string, val: number, set: (n: number) => void) => (
    <label><span>{label} = <span className="mono">{fmtNum(val)}</span></span>
      <input type="range" min={-3} max={3} step={0.5} value={val} onChange={(e) => set(clamp(Number(e.target.value)))} /></label>
  );

  return (
    <figure className="viz">
      <Axes v={V} label={`Parallelogram spanned by the columns, signed area ${fmtNum(det)}`}>
        <polygon points={sq} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
        <polygon points={pts} style={{ fill: det >= 0 ? "var(--accent)" : "var(--danger)", opacity: 0.18, stroke: det >= 0 ? "var(--accent)" : "var(--danger)" }} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(u[0])} y2={Y(u[1])} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(v[0])} y2={Y(v[1])} className="plot-arrow is-muted" />
      </Axes>
      <div className="viz-sliders">
        {slider("column 1, first entry", u[0], (n) => setU([n, u[1]]))}
        {slider("column 1, second entry", u[1], (n) => setU([u[0], n]))}
        {slider("column 2, first entry", v[0], (n) => setV([n, v[1]]))}
        {slider("column 2, second entry", v[1], (n) => setV([v[0], n]))}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" disabled={!canShear} onClick={() => setV([v[0] + u[0], v[1] + u[1]])}>Add column 1 to column 2</button>
        <button type="button" className="btn" onClick={() => { setU(v); setV(u); }}>Swap the columns</button>
        <button type="button" className="btn" onClick={() => setU([clamp(2 * u[0]), clamp(2 * u[1])])}>Double column 1</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>[{fmtNum(u[0])} {fmtNum(v[0])}; {fmtNum(u[1])} {fmtNum(v[1])}]</td></tr>
          <tr><td>det A</td><td>{fmtNum(u[0])}·{fmtNum(v[1])} − {fmtNum(v[0])}·{fmtNum(u[1])} = {fmtNum(det)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {det === 0
          ? "The determinant is 0: the columns lie on one line, the parallelogram is flat, and A squashes the plane onto a line. A is not invertible."
          : `A sends the dashed unit square to the shaded parallelogram, multiplying every area by |det A| = ${fmtNum(Math.abs(det))}. ${det > 0 ? "The sign is positive: turning from column 1 to column 2 is anticlockwise, as from x to y." : "The sign is negative and the shape is shaded red: column 2 lies clockwise from column 1, so A flips orientation, like a mirror."}`}
      </figcaption>
    </figure>
  );
}
