"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type P3 = [number, number, number];
type Fn = { name: string; f: (x: number, y: number) => number; fx: (x: number, y: number) => number; fy: (x: number, y: number) => number };

const FNS: Fn[] = [
  { name: "f = 4 − x² − y²/2", f: (x, y) => 4 - x * x - (y * y) / 2, fx: (x) => -2 * x, fy: (_, y) => -y },
  { name: "f = x² − y²", f: (x, y) => x * x - y * y, fx: (x) => 2 * x, fy: (_, y) => -2 * y },
  { name: "f = xy", f: (x, y) => x * y, fx: (_, y) => y, fy: (x) => x },
];

/** A surface z = f(x, y) cut by the planes y = b and x = a; the slopes of the two cuts are the partial derivatives. */
export function SurfaceSliceViz() {
  const [k, setK] = useState(0);
  const [A, setA] = useState(1);
  const [B, setB] = useState(0.5);
  const F = FNS[k];
  const proj = (q: P3): [number, number] => {
    const a = 0.55;
    const x = q[0] * Math.cos(a) - q[1] * Math.sin(a);
    const y = q[0] * Math.sin(a) + q[1] * Math.cos(a);
    return [250 + 52 * x, 190 - 26 * (q[2] * 0.9) - 22 * y];
  };
  const L = 2, steps = 8;
  const grid: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const c = -L + (2 * L * i) / steps;
    grid.push(Array.from({ length: 41 }, (_, j) => { const x = -L + (2 * L * j) / 40; return proj([x, c, F.f(x, c)]).join(","); }).join(" "));
    grid.push(Array.from({ length: 41 }, (_, j) => { const y = -L + (2 * L * j) / 40; return proj([c, y, F.f(c, y)]).join(","); }).join(" "));
  }
  const sliceX = Array.from({ length: 61 }, (_, j) => { const x = -L + (2 * L * j) / 60; return proj([x, B, F.f(x, B)]).join(","); }).join(" ");
  const sliceY = Array.from({ length: 61 }, (_, j) => { const y = -L + (2 * L * j) / 60; return proj([A, y, F.f(A, y)]).join(","); }).join(" ");
  const z0 = F.f(A, B), px = F.fx(A, B), py = F.fy(A, B);
  const h = 0.7;
  const tx = [proj([A - h, B, z0 - h * px]), proj([A + h, B, z0 + h * px])];
  const ty = [proj([A, B - h, z0 - h * py]), proj([A, B + h, z0 + h * py])];
  const P = proj([A, B, z0]);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FNS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 500 360" role="img" aria-label={`At (${f(A)}, ${f(B)}) the partial derivatives are ${f(px)} and ${f(py)}.`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {grid.map((g, i) => <polyline key={i} points={g} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 0.8 }} />)}
        <polyline points={sliceX} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <polyline points={sliceY} style={{ fill: "none", stroke: "var(--violet-300)", strokeWidth: 2.5 }} />
        <line x1={tx[0][0]} y1={tx[0][1]} x2={tx[1][0]} y2={tx[1][1]} style={{ stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <line x1={ty[0][0]} y1={ty[0][1]} x2={ty[1][0]} y2={ty[1][1]} style={{ stroke: "var(--text)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <circle cx={P[0]} cy={P[1]} r={5} style={{ fill: "var(--danger)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>a, the x-coordinate: <span className="mono">{f(A)}</span></span>
          <input type="range" min={-1.5} max={1.5} step={0.25} value={A} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b, the y-coordinate: <span className="mono">{f(B)}</span></span>
          <input type="range" min={-1.5} max={1.5} step={0.25} value={B} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>f(a, b)</td><td className="mono">{f(z0)}</td></tr>
          <tr><td>∂f/∂x (a, b): slope of the cut along x, the darker curve</td><td className="mono">{f(px)}</td></tr>
          <tr><td>∂f/∂y (a, b): slope of the cut along y, the lighter curve</td><td className="mono">{f(py)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Freeze y at b and the surface becomes a curve in x; its slope at a is ∂f/∂x. Freeze x at a instead for ∂f/∂y.
        Each partial derivative sees only one direction; the dashed lines are the two tangent lines.
      </figcaption>
    </figure>
  );
}
