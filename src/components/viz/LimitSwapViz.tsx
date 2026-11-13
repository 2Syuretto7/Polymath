"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const EX = {
  spike: { name: "a moving spike" },
  wiggle: { name: "sin(nx)/√n" },
  corner: { name: "√(x² + 1/n)" },
};
type K = keyof typeof EX;
const W = 520, H = 210, X0 = 30, X1 = 500, Y0 = 190, Y1 = 14;

function spike(x: number, n: number) {
  const w = 1 / n;
  if (x <= 0 || x >= 2 * w) return 0;
  return x <= w ? n * (x / w) : n * ((2 * w - x) / w);
}

/** When can limits be swapped? Three sequences show what uniform convergence protects and what it does not. */
export function LimitSwapViz() {
  const [k, setK] = useState<K>("spike");
  const [n, setN] = useState(4);
  const fm = (v: number) => fmtNum(Number(v.toFixed(4)));
  let a = 0, b = 1, ylo = 0, yhi = 1.1;
  let f: (x: number) => number = (x) => spike(x, n);
  let lim: (x: number) => number = () => 0;
  if (k === "spike") { yhi = Math.max(n, 1) * 1.1; }
  if (k === "wiggle") { b = Math.PI; ylo = -1.1; yhi = 1.1; f = (x) => Math.sin(n * x) / Math.sqrt(n); }
  if (k === "corner") { a = -1; b = 1; ylo = 0; yhi = 1.5; f = (x) => Math.sqrt(x * x + 1 / n); lim = (x) => Math.abs(x); }
  const X = (x: number) => X0 + ((x - a) / (b - a)) * (X1 - X0);
  const Y = (y: number) => Y0 - ((y - ylo) / (yhi - ylo)) * (Y0 - Y1);
  const grid = Array.from({ length: 801 }, (_, i) => a + ((b - a) * i) / 800);
  const sup = k === "spike" ? n : 1 / Math.sqrt(n);
  const line = (g: (x: number) => number) => grid.map((x) => `${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`).join(" ");

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sequence">
        {(Object.keys(EX) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{EX[q].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The n-th function and its pointwise limit" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y(0)} x2={X1} y2={Y(0)} className="viz-axis" />
        <polyline points={line(lim)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <polyline points={line(f)} style={{ fill: k === "spike" ? "var(--accent-soft)" : "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={X1} y={Y1 + 4} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>dashed: the limit f</text>
      </svg>
      <div className="viz-sliders">
        <label><span>n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={40} value={n} onChange={(ev) => setN(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>sup |fₙ − f|</td><td className="mono">{fm(sup)}</td></tr>
          {k === "spike" && <>
            <tr><td>∫₀¹ fₙ, the area of the spike</td><td className="mono">1</td></tr>
            <tr><td>∫₀¹ f, where f = 0</td><td className="mono">0</td></tr>
          </>}
          {k === "wiggle" && <>
            <tr><td>fₙ′(0) = √n cos 0</td><td className="mono">{fm(Math.sqrt(n))}</td></tr>
            <tr><td>f′(0), where f = 0</td><td className="mono">0</td></tr>
          </>}
          {k === "corner" && <>
            <tr><td>fₙ′(0)</td><td className="mono">0</td></tr>
            <tr><td>f′(0), where f(x) = |x|</td><td>does not exist</td></tr>
          </>}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "spike"
          ? "Each spike has area 1, and at every point the spikes eventually vanish, so the limit is 0, with integral 0. The convergence is not uniform: the height grows. Limit and integral cannot be swapped."
          : k === "wiggle"
            ? "These converge uniformly to 0, since the sup is 1/√n. Yet the slopes at 0 grow without bound. Uniform convergence of the functions says nothing about their derivatives."
            : "Smooth functions converge uniformly to |x|, with sup error 1/√n, at x = 0. The limit is continuous, as it must be, but it has a corner: a uniform limit of differentiable functions need not be differentiable."}
      </figcaption>
    </figure>
  );
}
