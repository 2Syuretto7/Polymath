"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

type Pre = { name: string; A: [[number, number], [number, number]]; null?: [number, number]; col?: [number, number] };
const PRESETS: Pre[] = [
  { name: "invertible", A: [[2, 1], [1, 1]] },
  { name: "rank one, first", A: [[1, 2], [1, 2]], null: [-2, 1], col: [1, 1] },
  { name: "rank one, second", A: [[1, -1], [-2, 2]], null: [1, 1], col: [1, -2] },
];

const VIN: View = { xmin: -3, xmax: 3, ymin: -3, ymax: 3, w: 280, h: 280 };
const VOUT: View = { xmin: -8, xmax: 8, ymin: -8, ymax: 8, w: 280, h: 280 };

/** Pick x on the left; see Ax = x₁(column 1) + x₂(column 2) on the right, with the null space and column space marked. */
export function ColumnSpaceViz() {
  const [k, setK] = useState(1);
  const [x1, setX1] = useState(1);
  const [x2, setX2] = useState(1);
  const P = PRESETS[k];
  const [[a, b], [c, d]] = P.A;
  const a1: [number, number] = [a, c], a2: [number, number] = [b, d];
  const p1: [number, number] = [x1 * a, x1 * c];
  const Ax: [number, number] = [x1 * a + x2 * b, x1 * c + x2 * d];
  const zero = Ax[0] === 0 && Ax[1] === 0;
  const si = scales(VIN), so = scales(VOUT);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const thick = { stroke: "var(--accent)", strokeWidth: 6, opacity: 0.22 };

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {PRESETS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{p.name}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
        <div style={{ flex: "1 1 240px" }}>
          <p className="mono-meta" style={{ margin: "0 0 4px" }}>input: x, with the null space dashed</p>
          <Axes v={VIN} label="Input plane with x and the null space">
            {P.null && (
              <line x1={si.X(-4 * P.null[0])} y1={si.Y(-4 * P.null[1])} x2={si.X(4 * P.null[0])} y2={si.Y(4 * P.null[1])}
                style={{ stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "7 5" }} />
            )}
            <Arrow x1={si.X(0)} y1={si.Y(0)} x2={si.X(x1)} y2={si.Y(x2)} className={zero ? "plot-arrow is-hot" : "plot-arrow"} />
          </Axes>
        </div>
        <div style={{ flex: "1 1 240px" }}>
          <p className="mono-meta" style={{ margin: "0 0 4px" }}>output: Ax, with the column space shaded</p>
          <Axes v={VOUT} label="Output plane with the columns, Ax and the column space" xStep={2} yStep={2}>
            {P.col
              ? <line x1={so.X(-10 * P.col[0])} y1={so.Y(-10 * P.col[1])} x2={so.X(10 * P.col[0])} y2={so.Y(10 * P.col[1])} style={thick} />
              : <rect x={0} y={0} width={VOUT.w} height={VOUT.h} style={{ fill: "var(--accent)", opacity: 0.08 }} />}
            <Arrow x1={so.X(0)} y1={so.Y(0)} x2={so.X(p1[0])} y2={so.Y(p1[1])} className="plot-arrow is-muted" />
            <Arrow x1={so.X(p1[0])} y1={so.Y(p1[1])} x2={so.X(Ax[0])} y2={so.Y(Ax[1])} className="plot-arrow is-muted" />
            <circle cx={so.X(Ax[0])} cy={so.Y(Ax[1])} r={6} className={zero ? "plot-hot" : "plot-point"} />
          </Axes>
        </div>
      </div>
      <div className="viz-sliders">
        <label><span>x₁ = <span className="mono">{f(x1)}</span></span>
          <input type="range" min={-2} max={2} step={0.5} value={x1} onChange={(e) => setX1(Number(e.target.value))} /></label>
        <label><span>x₂ = <span className="mono">{f(x2)}</span></span>
          <input type="range" min={-2} max={2} step={0.5} value={x2} onChange={(e) => setX2(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>[{a} {b}; {c} {d}], columns ({a}, {c}) and ({b}, {d})</td></tr>
          <tr><td>Ax</td><td>{f(x1)}·({a1.join(", ")}) + {f(x2)}·({a2.join(", ")}) = ({f(Ax[0])}, {f(Ax[1])})</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {!P.null
          ? zero
            ? "Ax = 0 only for x = 0 here. The columns point in different directions, so their combinations fill the whole plane, and the null space is just the zero vector."
            : "The columns point in different directions, so their combinations reach every point of the output plane: the column space is all of it. Only x = 0 is sent to 0."
          : zero
            ? `x lies on the dashed line, the null space: ${f(x1)} times column 1 cancels ${f(x2)} times column 2, and Ax = 0.`
            : "Both columns lie on one line, so every combination Ax stays on that line: the column space is a line. Move x onto the dashed line, the null space, and Ax collapses to 0."}
      </figcaption>
    </figure>
  );
}
