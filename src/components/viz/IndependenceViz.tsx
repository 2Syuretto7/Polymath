"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";
import { fr, fstr } from "./frac";

const V: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 6, w: 400, h: 400 };
const V1: [number, number] = [2, 1];
const V3: [number, number] = [-1, 2];
const CS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

/** Change v₂ and watch the integer combinations of v₁ and v₂ fill the plane, or collapse onto a line when the vectors are dependent. */
export function IndependenceViz() {
  const [a, setA] = useState(-1);
  const [b, setB] = useState(1.5);
  const [third, setThird] = useState(false);
  const { X, Y } = scales(V);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const pf = (x: number) => (x < 0 ? `(${f(x)})` : f(x));
  const det = V1[0] * b - V1[1] * a;
  const dep = Math.abs(det) < 1e-9;
  const a2 = Math.round(2 * a), b2 = Math.round(2 * b);
  const dots: [number, number][] = [];
  for (const c1 of CS) for (const c2 of CS) dots.push([c1 * V1[0] + c2 * a, c1 * V1[1] + c2 * b]);
  const poly = [[0, 0], V1, [V1[0] + a, V1[1] + b], [a, b]].map(([x, y]) => `${X(x)},${Y(y)}`).join(" ");

  let relation: string;
  if (dep) {
    relation = a === 0 && b === 0
      ? "0·v₁ + 1·v₂ = 0: v₂ is the zero vector, and any set containing 0 is dependent."
      : `${fstr(fr(a2, 4))}·v₁ − v₂ = 0: v₂ is a multiple of v₁, so a combination with coefficients not all zero gives 0.`;
  } else if (third) {
    const c1 = fr(-b2 - 2 * a2, 2 * b2 - a2), c2 = fr(10, 2 * b2 - a2);
    const c2s = c2.n < 0 ? `− ${fstr(fr(-c2.n, c2.d))}` : `+ ${fstr(c2)}`;
    relation = `${fstr(c1)}·v₁ ${c2s}·v₂ − v₃ = 0. Any third vector in the plane is a combination of two independent ones, so three vectors in the plane are always dependent.`;
  } else {
    relation = "Only 0·v₁ + 0·v₂ = 0. The dots fill out a lattice covering the whole plane, and the shaded parallelogram has area |det| > 0.";
  }

  return (
    <figure className="viz">
      <Axes v={V} label="Integer combinations of v₁ and v₂">
        {!dep && <polygon points={poly} style={{ fill: "var(--accent)", opacity: 0.14 }} />}
        {dots.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={2.6} style={{ fill: "var(--text-faint)" }} />)}
        <Arrow x1={X(0)} y1={Y(0)} x2={X(V1[0])} y2={Y(V1[1])} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(a)} y2={Y(b)} className={dep ? "plot-arrow is-hot" : "plot-arrow"} />
        {third && <Arrow x1={X(0)} y1={Y(0)} x2={X(V3[0])} y2={Y(V3[1])} className="plot-arrow is-muted" />}
      </Axes>
      <div className="viz-sliders">
        <label><span>v₂, first entry = <span className="mono">{f(a)}</span></span>
          <input type="range" min={-3} max={3} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>v₂, second entry = <span className="mono">{f(b)}</span></span>
          <input type="range" min={-3} max={3} step={0.5} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" aria-pressed={third} onClick={() => setThird(!third)}>{third ? "Remove v₃" : "Add v₃ = (−1, 2)"}</button>
        <button type="button" className="btn" onClick={() => { setA(-2); setB(-1); }}>Try v₂ = (−2, −1)</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>vectors</td><td>v₁ = (2, 1), v₂ = ({f(a)}, {f(b)}){third ? ", v₃ = (−1, 2)" : ""}</td></tr>
          <tr><td>det [v₁ v₂]</td><td>2·{pf(b)} − 1·{pf(a)} = {f(det)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {dep ? "Dependent. The dots collapse onto a single line. " : third ? "Dependent, because of v₃. " : "Independent. "}
        {relation}
      </figcaption>
    </figure>
  );
}
