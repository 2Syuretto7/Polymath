"use client";

import { useState } from "react";

const FS = [
  { label: "box on [−1, 1]", f: (x: number) => (Math.abs(x) < 1 ? 1 : 0), H: (x: number) => Math.log(Math.abs((x + 1) / (x - 1))) / Math.PI, Hlabel: "(1/π) log |(x + 1)/(x − 1)|" },
  { label: "1/(1 + x²)", f: (x: number) => 1 / (1 + x * x), H: (x: number) => x / (1 + x * x), Hlabel: "x/(1 + x²)" },
  { label: "x/(1 + x²)", f: (x: number) => x / (1 + x * x), H: (x: number) => -1 / (1 + x * x), Hlabel: "−1/(1 + x²)" },
];
export const hilbertOf = (k: number, x: number) => FS[k].H(x);

/** The Hilbert transform Hf(x) = (1/π) p.v. ∫ f(y)/(x − y) dy, for three functions with closed forms. */
export function HilbertTransformViz() {
  const [k, setK] = useState(0);
  const [x0, setX0] = useState(3);
  const { f, H, Hlabel } = FS[k];
  const xs = Array.from({ length: 801 }, (_, i) => -4 + i * 0.01);
  const px = (x: number) => 30 + ((x + 4) / 8) * 480, py = (v: number) => 120 - Math.max(-1.6, Math.min(1.6, v)) * 55;
  const path = (g: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${py(g(x)).toFixed(1)}`).join("");
  const h0 = H(x0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FS.map((g, i) => <button key={g.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>f = {g.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>x = {x0.toFixed(2).replace("-", "−")} <input type="range" min={-4} max={4} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} aria-label="x" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="A function and its Hilbert transform" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={120} x2={510} y2={120} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4].map((x) => <text key={x} x={px(x)} y={232} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        <path d={path(f)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={path(H)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={px(x0)} y1={25} x2={px(x0)} y2={215} style={{ stroke: "var(--grid-line)" }} />
        {Number.isFinite(h0) && <circle cx={px(x0)} cy={py(h0)} r={5} style={{ fill: "var(--danger)" }} />}
        <text x={30} y={18} style={{ fill: "var(--text-muted)", fontSize: 10 }}>grey: f</text>
        <text x={80} y={18} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: Hf = {Hlabel}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        f({x0.toFixed(2).replace("-", "−")}) = {f(x0).toFixed(3).replace("-", "−")}, Hf({x0.toFixed(2).replace("-", "−")}) = {Number.isFinite(h0) ? h0.toFixed(3).replace("-", "−") : "∞ (a logarithmic singularity)"}.
      </p>
      <figcaption className="viz-caption">
        The Hilbert transform is convolution with 1/(πx), taken as a principal value. It turns the real part of a function
        analytic in the upper half-plane into the imaginary part, so applying it twice gives −f: compare the second and
        third choices. The box is bounded, yet its transform blows up at the jumps, so H is not bounded on L∞.
      </figcaption>
    </figure>
  );
}
