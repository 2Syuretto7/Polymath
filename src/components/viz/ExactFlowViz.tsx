"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

type E = { label: string; F: (x: number, y: number) => number; M: (x: number, y: number) => number; N: (x: number, y: number) => number; Fs: string };
const ES: E[] = [
  { label: "(2x + y) dx + (x + 2y) dy = 0", F: (x, y) => x * x + x * y + y * y, M: (x, y) => 2 * x + y, N: (x, y) => x + 2 * y, Fs: "F = x² + xy + y²" },
  { label: "(2xy) dx + (x² − 1) dy = 0", F: (x, y) => x * x * y - y, M: (x, y) => 2 * x * y, N: (x) => x * x - 1, Fs: "F = x²y − y" },
  { label: "(y cos x) dx + (sin x + 2y) dy = 0", F: (x, y) => y * Math.sin(x) + y * y, M: (x, y) => y * Math.cos(x), N: (x, y) => Math.sin(x) + 2 * y, Fs: "F = y sin x + y²" },
];
const B = 3;

/** Exact equations: solutions are level curves of a potential F with F_x = M and F_y = N. */
export function ExactFlowViz() {
  const [ei, setEi] = useState(0);
  const [x0, setX0] = useState(1);
  const [y0, setY0] = useState(0.5);
  const E = ES[ei];
  const W = 400, pad = 14;
  const X = (x: number) => W / 2 + (x / B) * (W / 2 - pad);
  const Y = (y: number) => W / 2 - (y / B) * (W / 2 - pad);
  // move along (N, −M), which is tangent to the level curves of F
  const sys = (sgn: number) => (x: number, y: number): [number, number] => { const a = E.N(x, y), b = -E.M(x, y), n = Math.hypot(a, b) || 1; return [(sgn * a) / n, (sgn * b) / n]; };
  const curve = (sx: number, sy: number) => {
    const f = rk4Path(sys(1), sx, sy, 0.02, 1500, [-B, B, -B, B]);
    const b = rk4Path(sys(-1), sx, sy, 0.02, 1500, [-B, B, -B, B]);
    // leave the box: lift the pen, so parts of a curve outside the view are not joined by straight lines
    let pen = false;
    return [...b.reverse(), ...f.slice(1)].map(([x, y]) => {
      if (Math.abs(x) > B + 0.3 || Math.abs(y) > B + 0.3) { pen = false; return ""; }
      const cmd = `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`; pen = true; return cmd;
    }).filter(Boolean).join(" ");
  };
  const seeds: [number, number][] = [[-2, -2], [-1.5, 1.8], [2, 2], [0.5, -1.5], [2.5, -0.5], [-2.5, 0.3]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {ES.map((e, i) => <button key={e.label} type="button" aria-pressed={ei === i} className={ei === i ? "seg is-on" : "seg"} onClick={() => setEi(i)}>{e.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>point x₀: <span className="mono">{x0}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>point y₀: <span className="mono">{y0}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.25} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Level curves of the potential function, with the solution through a chosen point" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {seeds.map(([sx, sy], i) => <path key={i} d={curve(sx, sy)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.2 }} />)}
        <path d={curve(x0, y0)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(x0)} cy={Y(y0)} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>{E.Fs}; through ({x0}, {y0}) the solution is F(x, y) = {E.F(x0, y0).toFixed(3)}</p>
      <figcaption className="viz-caption">
        The equation M dx + N dy = 0 is exact when M = F_x and N = F_y for some potential F. Then dF = 0 along a solution, so solutions are the level curves F(x, y) = C. The thin curves are other level curves; the thick one passes through the chosen point.
      </figcaption>
    </figure>
  );
}
