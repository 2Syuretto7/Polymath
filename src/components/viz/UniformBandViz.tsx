"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const FS = {
  pow: { name: "xⁿ on [0, 1]", f: (x: number, n: number) => Math.pow(x, n), lim: (x: number) => (x < 1 ? 0 : 1), b: 1 },
  pow9: { name: "xⁿ on [0, 0.9]", f: (x: number, n: number) => Math.pow(x, n), lim: (_x: number) => 0, b: 0.9 },
  bump: { name: "nx e^(−nx) on [0, 1]", f: (x: number, n: number) => n * x * Math.exp(-n * x), lim: (_x: number) => 0, b: 1 },
};
type K = keyof typeof FS;
const W = 520, H = 210, X0 = 30, X1 = 500, Y0 = 190, Y1 = 14;

/** Pointwise or uniform? Draw the ε-band around the limit and see whether the n-th function fits inside it everywhere. */
export function UniformBandViz() {
  const [k, setK] = useState<K>("pow");
  const [n, setN] = useState(5);
  const [e, setE] = useState(0.2);
  const F = FS[k];
  const X = (x: number) => X0 + (x / F.b) * (X1 - X0);
  const Y = (y: number) => Y0 - (y / 1.1) * (Y0 - Y1);
  const grid = Array.from({ length: 401 }, (_, i) => (F.b * i) / 400);
  let sup = 0, at = 0;
  for (const x of grid) { const d = Math.abs(F.f(x, n) - F.lim(x)); if (d > sup) { sup = d; at = x; } }
  if (k === "pow") { sup = Math.max(sup, Math.pow(1 - 1e-9, n)); }
  const fits = sup < e;
  const fm = (v: number) => fmtNum(Number(v.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sequence">
        {(Object.keys(FS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>fₙ(x) = {FS[q].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The n-th function and an epsilon band around the limit" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <rect x={X0} y={Y(e)} width={X1 - X0} height={Y0 - Y(e)} style={{ fill: "var(--accent-soft)", opacity: 0.7 }} />
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        <polyline points={grid.map((x) => `${X(x).toFixed(1)},${Y(F.f(x, n)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: fits ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />
        {k === "pow" && <circle cx={X(1)} cy={Y(1)} r={4} style={{ fill: "var(--text)" }} />}
      </svg>
      <div className="viz-sliders">
        <label><span>n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={60} value={n} onChange={(ev) => setN(Number(ev.target.value))} /></label>
        <label><span>ε: <span className="mono">{fm(e)}</span></span>
          <input type="range" min={0.05} max={0.5} step={0.05} value={e} onChange={(ev) => setE(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the limit f(x)</td><td>{k === "pow" ? "0 for x < 1, and 1 at x = 1" : "0 everywhere"}</td></tr>
          <tr><td>sup |fₙ − f| over the interval</td><td className="mono">{fm(sup)}{k === "bump" ? `, at x ≈ ${fm(at)}` : ""}</td></tr>
          <tr><td>does fₙ lie inside the ε-band everywhere?</td><td>{fits ? "yes" : "no"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "pow"
          ? "Each xⁿ is continuous, and they converge pointwise to a function with a jump at 1. Just left of 1, xⁿ is still close to 1, so the sup stays at 1: the convergence is not uniform."
          : k === "pow9"
            ? "On [0, 0.9] the sup is 0.9ⁿ, which tends to 0. For large n the whole graph fits in the band: the convergence is uniform."
            : "Every fₙ(x) tends to 0, but each has a bump of height 1/e at x = 1/n. The bump moves left and never shrinks: pointwise but not uniform."}
      </figcaption>
    </figure>
  );
}
