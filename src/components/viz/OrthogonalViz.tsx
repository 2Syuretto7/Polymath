"use client";

import { useState, type CSSProperties } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5, w: 400, h: 400 };

/** A rank one matrix with rows r and 2r: its row space is the line through r, its null space the perpendicular line. */
export function OrthogonalViz() {
  const [p, setP] = useState(1);
  const [q, setQ] = useState(2);
  const [x1, setX1] = useState(2);
  const [x2, setX2] = useState(1);
  const { X, Y } = scales(V);
  const f = fmtNum;
  const zeroRow = p === 0 && q === 0;
  const dot = p * x1 + q * x2;
  const perp = dot === 0;
  const line = (dx: number, dy: number, style: CSSProperties) => (
    <line x1={X(-10 * dx)} y1={Y(-10 * dy)} x2={X(10 * dx)} y2={Y(10 * dy)} style={style} />
  );
  const pf = (v: number) => (v < 0 ? `(${f(v)})` : f(v));

  return (
    <figure className="viz">
      <Axes v={V} label="Row space line, null space line, and a test vector x">
        {!zeroRow && line(p, q, { stroke: "var(--accent)", strokeWidth: 6, opacity: 0.25 })}
        {!zeroRow && line(-q, p, { stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "7 5" })}
        {!zeroRow && <Arrow x1={X(0)} y1={Y(0)} x2={X(p)} y2={Y(q)} />}
        <Arrow x1={X(0)} y1={Y(0)} x2={X(x1)} y2={Y(x2)} className={perp ? "plot-arrow is-hot" : "plot-arrow is-muted"} />
      </Axes>
      <div className="viz-sliders">
        <label><span>row r, first entry = <span className="mono">{f(p)}</span></span>
          <input type="range" min={-3} max={3} step={1} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>row r, second entry = <span className="mono">{f(q)}</span></span>
          <input type="range" min={-3} max={3} step={1} value={q} onChange={(e) => setQ(Number(e.target.value))} /></label>
        <label><span>x, first entry = <span className="mono">{f(x1)}</span></span>
          <input type="range" min={-4} max={4} step={1} value={x1} onChange={(e) => setX1(Number(e.target.value))} /></label>
        <label><span>x, second entry = <span className="mono">{f(x2)}</span></span>
          <input type="range" min={-4} max={4} step={1} value={x2} onChange={(e) => setX2(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A</td><td>[{f(p)} {f(q)}; {f(2 * p)} {f(2 * q)}], rows r and 2r</td></tr>
          <tr><td>r · x</td><td>{pf(p)}·{pf(x1)} + {pf(q)}·{pf(x2)} = {f(dot)}</td></tr>
          <tr><td>Ax</td><td>({f(dot)}, {f(2 * dot)})</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {zeroRow
          ? "With r = 0, A is the zero matrix: the row space is just {0}, and every x is in the null space. Even so, the two are orthogonal complements: everything is perpendicular to 0."
          : perp
            ? `r · x = 0, so x is perpendicular to the row space and Ax = 0: x lies on the dashed line, the null space. The shaded row space and the dashed null space are orthogonal complements: together their dimensions make 1 + 1 = 2.`
            : `r · x = ${f(dot)}, not 0, so x is not perpendicular to the row and Ax ≠ 0. Move x onto the dashed line through (${f(-q)}, ${f(p)}), at right angles to r.`}
      </figcaption>
    </figure>
  );
}
