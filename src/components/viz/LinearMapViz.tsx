"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -3, xmax: 3, ymin: -3, ymax: 3, w: 400, h: 400 };
type M2 = [[number, number], [number, number]];

const KINDS = [
  { name: "rotate", angle: true, def: 45, m: (t: number): M2 => { const c = Math.cos(t), s = Math.sin(t); return [[c, -s], [s, c]]; },
    say: "Rotation keeps lengths and angles, and keeps the F the right way round. Its determinant is 1." },
  { name: "reflect", angle: true, def: 30, m: (t: number): M2 => [[Math.cos(2 * t), Math.sin(2 * t)], [Math.sin(2 * t), -Math.cos(2 * t)]],
    say: "Reflection in the dotted line keeps lengths but turns the F over, so its determinant is −1. Doing it twice gives the identity." },
  { name: "project", angle: true, def: 30, m: (t: number): M2 => { const c = Math.cos(t), s = Math.sin(t); return [[c * c, c * s], [c * s, s * s]]; },
    say: "Projection onto the dotted line flattens the whole plane onto that line. The determinant is 0 and the map cannot be undone. Doing it twice is the same as doing it once." },
  { name: "shear", angle: false, def: 1, m: (k: number): M2 => [[1, k], [0, 1]],
    say: "A shear slides each horizontal line sideways, in proportion to its height. Areas do not change: the determinant is 1." },
  { name: "stretch", angle: false, def: 2, m: (k: number): M2 => [[k, 0], [0, 1]],
    say: "Stretching the x direction by k multiplies areas by k. A negative k also flips the F over." },
];

const F: [number, number][] = [[0.2, 0], [0.2, 1], [0.8, 1], [0.2, 1], [0.2, 0.55], [0.6, 0.55]];

/** A linear map is fixed by where it sends e1 and e2: those images are the columns of its matrix. */
export function LinearMapViz() {
  const [k, setK] = useState(0);
  const [p, setP] = useState<number[]>(KINDS.map((x) => x.def));
  const kind = KINDS[k];
  const t = kind.angle ? (p[k] * Math.PI) / 180 : p[k];
  const A = kind.m(t);
  const ap = ([x, y]: [number, number]): [number, number] => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
  const { X, Y } = scales(V);
  const poly = (pts: [number, number][]) => pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ");
  const sq: [number, number][] = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
  const c1 = ap([1, 0]), c2 = ap([0, 1]);
  const showLine = kind.name === "reflect" || kind.name === "project";

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Transformation">
        {KINDS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <Axes v={V} label={`The unit square and the letter F under a ${kind.name}`}>
        {showLine && (
          <line x1={X(-3 * Math.cos(t))} y1={Y(-3 * Math.sin(t))} x2={X(3 * Math.cos(t))} y2={Y(3 * Math.sin(t))}
            style={{ stroke: "var(--text-faint)", strokeDasharray: "3 4" }} />
        )}
        <polygon points={poly(sq)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
        <polyline points={poly(F)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 2 }} />
        <polygon points={poly(sq.map(ap))} style={{ fill: "var(--accent)", opacity: 0.15, stroke: "var(--accent)" }} />
        <polyline points={poly(F.map(ap))} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2.5 }} />
        {Math.hypot(...c1) > 1e-9 && <Arrow x1={X(0)} y1={Y(0)} x2={X(c1[0])} y2={Y(c1[1])} />}
        {Math.hypot(...c2) > 1e-9 && <Arrow x1={X(0)} y1={Y(0)} x2={X(c2[0])} y2={Y(c2[1])} className="plot-arrow is-muted" />}
      </Axes>
      <div className="viz-sliders">
        <label>
          <span>{kind.angle ? (kind.name === "rotate" ? "angle" : "angle of the line") : "k"} = <span className="mono">{fmtNum(p[k])}{kind.angle ? "°" : ""}</span></span>
          <input type="range" min={kind.angle ? 0 : -2} max={kind.angle ? 180 : 2} step={kind.angle ? 15 : 0.5} value={p[k]}
            onChange={(e) => { const n = Number(e.target.value); setP((q) => q.map((x, i) => (i === k ? n : x))); }} />
        </label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>A e₁ (column 1)</td><td>({fmtNum(c1[0])}, {fmtNum(c1[1])})</td></tr>
          <tr><td>A e₂ (column 2)</td><td>({fmtNum(c2[0])}, {fmtNum(c2[1])})</td></tr>
          <tr><td>A</td><td>[{fmtNum(A[0][0])} {fmtNum(A[0][1])}; {fmtNum(A[1][0])} {fmtNum(A[1][1])}]</td></tr>
          <tr><td>det A</td><td>{fmtNum(det)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The faint square and F are the originals; the shaded square and solid F are their images. The two arrows are where e₁ and e₂ go, and they are the columns of A. {kind.say}
      </figcaption>
    </figure>
  );
}
