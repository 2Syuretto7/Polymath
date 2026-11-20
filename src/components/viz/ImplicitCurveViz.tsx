"use client";

import { useState } from "react";

/** Plane curves V(f), with their partial derivatives, the number of irreducible components and the singular points. */
export const CURVES = [
  { label: "y − x²", f: (x: number, y: number) => y - x * x, fx: (x: number) => -2 * x, fy: () => 1, comps: 1, sing: "none" },
  { label: "x² + y² − 2", f: (x: number, y: number) => x * x + y * y - 2, fx: (x: number) => 2 * x, fy: (_: number, y: number) => 2 * y, comps: 1, sing: "none" },
  { label: "(y − x²)(x² + y² − 2)", f: (x: number, y: number) => (y - x * x) * (x * x + y * y - 2), fx: (x: number, y: number) => -2 * x * (x * x + y * y - 2) + (y - x * x) * 2 * x, fy: (x: number, y: number) => (x * x + y * y - 2) + (y - x * x) * 2 * y, comps: 2, sing: "(1, 1) and (−1, 1), where the parabola meets the circle" },
  { label: "y² − x³ − x²", f: (x: number, y: number) => y * y - x ** 3 - x * x, fx: (x: number) => -3 * x * x - 2 * x, fy: (_: number, y: number) => 2 * y, comps: 1, sing: "(0, 0), a node" },
  { label: "y² − x³", f: (x: number, y: number) => y * y - x ** 3, fx: (x: number) => -3 * x * x, fy: (_: number, y: number) => 2 * y, comps: 1, sing: "(0, 0), a cusp" },
  { label: "xy", f: (x: number, y: number) => x * y, fx: (_: number, y: number) => y, fy: (x: number) => x, comps: 2, sing: "(0, 0), where the axes cross" },
];

/** Real points of V(f) drawn by marking grid cells where f changes sign. */
export function zeroCells(k: number, step = 0.04, R = 2.6) {
  const f = CURVES[k].f;
  const cells: [number, number][] = [];
  for (let x = -R; x < R; x += step) for (let y = -R; y < R; y += step) {
    const v = [f(x, y), f(x + step, y), f(x, y + step), f(x + step, y + step)];
    if (Math.min(...v) <= 0 && Math.max(...v) >= 0) cells.push([x + step / 2, y + step / 2]);
  }
  return cells;
}

/** Affine plane curves: zero sets of polynomials, their components and singular points. */
export function ImplicitCurveViz() {
  const [k, setK] = useState(2);
  const c = CURVES[k];
  const S = 46, X0 = 270, Y0 = 125;
  const cells = zeroCells(k);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="polynomial">
        {CURVES.map((v, i) => <button key={v.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{v.label}</button>)}
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="The real points of a plane curve" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[-2, -1, 1, 2].map((t) => (
          <g key={t}>
            <line x1={X0 + t * S} y1={5} x2={X0 + t * S} y2={245} style={{ stroke: "var(--grid-line)" }} />
            <line x1={10} y1={Y0 - t * S} x2={530} y2={Y0 - t * S} style={{ stroke: "var(--grid-line)" }} />
          </g>
        ))}
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={5} x2={X0} y2={245} style={{ stroke: "var(--border-strong)" }} />
        {cells.map(([x, y], i) => <rect key={i} x={X0 + x * S - 1.3} y={Y0 - y * S - 1.3} width={2.6} height={2.6} style={{ fill: "var(--accent)" }} />)}
        {k === 2 && [[1, 1], [-1, 1]].map(([x, y]) => <circle key={x} cx={X0 + x * S} cy={Y0 - y * S} r={6} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />)}
        {(k === 3 || k === 4 || k === 5) && <circle cx={X0} cy={Y0} r={6} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        V({c.label}): irreducible components {c.comps}. Singular points, where f and both partial derivatives vanish: {c.sing}.
      </p>
      <figcaption className="viz-caption">
        An affine variety is the common zero set of polynomials. A product of polynomials vanishes on the union of their
        zero sets, so a reducible polynomial gives a variety with several irreducible components. Points where the gradient
        of f also vanishes are singular: nodes, cusps and the crossings of components.
      </figcaption>
    </figure>
  );
}
