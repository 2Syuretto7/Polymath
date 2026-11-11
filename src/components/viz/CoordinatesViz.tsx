"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fr, fstr } from "./frac";

type Vec = [number, number];
const BASES: { name: string; b1: Vec; b2: Vec }[] = [
  { name: "standard", b1: [1, 0], b2: [0, 1] },
  { name: "(1, 1) and (−1, 1)", b1: [1, 1], b2: [-1, 1] },
  { name: "(2, 1) and (1, 1)", b1: [2, 1], b2: [1, 1] },
  { name: "(1, 0) and (1, 2)", b1: [1, 0], b2: [1, 2] },
];
const V: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5, w: 400, h: 400 };
const RANGE = Array.from({ length: 21 }, (_, i) => i - 10);

/** One vector, many coordinate systems: its coordinates are the amounts of each basis vector needed to reach it. */
export function CoordinatesViz() {
  const [k, setK] = useState(2);
  const [wx, setWx] = useState(3);
  const [wy, setWy] = useState(1);
  const { X, Y } = scales(V);
  const { b1, b2 } = BASES[k];
  const det = b1[0] * b2[1] - b2[0] * b1[1];
  const c1 = fr(wx * b2[1] - b2[0] * wy, det), c2 = fr(b1[0] * wy - wx * b1[1], det);
  const n1 = c1.n / c1.d, n2 = c2.n / c2.d;
  const tip: Vec = [n1 * b1[0], n1 * b1[1]];
  const gl = { stroke: "var(--accent)", strokeWidth: 1, opacity: 0.3 };
  const vec = (p: Vec) => `(${fstr(fr(p[0]))}, ${fstr(fr(p[1]))})`;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Basis">
        {BASES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <Axes v={V} label={`The vector w in the basis ${BASES[k].name}`}>
        {RANGE.map((i) => (
          <g key={i}>
            <line x1={X(i * b1[0] - 20 * b2[0])} y1={Y(i * b1[1] - 20 * b2[1])} x2={X(i * b1[0] + 20 * b2[0])} y2={Y(i * b1[1] + 20 * b2[1])} style={gl} />
            <line x1={X(i * b2[0] - 20 * b1[0])} y1={Y(i * b2[1] - 20 * b1[1])} x2={X(i * b2[0] + 20 * b1[0])} y2={Y(i * b2[1] + 20 * b1[1])} style={gl} />
          </g>
        ))}
        <Arrow x1={X(0)} y1={Y(0)} x2={X(tip[0])} y2={Y(tip[1])} className="plot-arrow is-muted" />
        <Arrow x1={X(tip[0])} y1={Y(tip[1])} x2={X(wx)} y2={Y(wy)} className="plot-arrow is-muted" />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(b1[0])} y2={Y(b1[1])} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(b2[0])} y2={Y(b2[1])} />
        <circle cx={X(wx)} cy={Y(wy)} r={6} className="plot-hot" />
      </Axes>
      <div className="viz-sliders">
        <label><span>w, first entry = <span className="mono">{fstr(fr(wx))}</span></span>
          <input type="range" min={-4} max={4} step={1} value={wx} onChange={(e) => setWx(Number(e.target.value))} /></label>
        <label><span>w, second entry = <span className="mono">{fstr(fr(wy))}</span></span>
          <input type="range" min={-4} max={4} step={1} value={wy} onChange={(e) => setWy(Number(e.target.value))} /></label>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>basis</td><td>b₁ = {vec(b1)}, b₂ = {vec(b2)}</td></tr>
          <tr><td>w</td><td>({fstr(fr(wx))}, {fstr(fr(wy))}) = {fstr(c1)}·b₁ {c2.n < 0 ? "−" : "+"} {fstr(fr(Math.abs(c2.n), c2.d))}·b₂</td></tr>
          <tr><td>coordinates</td><td>[{fstr(c1)}, {fstr(c2)}]</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === 0
          ? `In the standard basis the coordinates of w are just its entries, ${fstr(fr(wx))} and ${fstr(fr(wy))}.`
          : `The point has not moved, but its coordinates are now ${fstr(c1)} and ${fstr(c2)}: go ${fstr(c1)} times along b₁, then ${fstr(c2)} times along b₂. The grid shows the new coordinate lines. Because b₁ and b₂ are independent and span the plane, these numbers exist and are unique.`}
      </figcaption>
    </figure>
  );
}
