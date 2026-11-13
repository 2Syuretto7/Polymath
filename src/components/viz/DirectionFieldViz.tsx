"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

type E = { label: string; f: (x: number, y: number) => number; sol: string };
const ES: E[] = [
  { label: "y′ = 0.5y", f: (_x, y) => 0.5 * y, sol: "y = C e^(x/2)" },
  { label: "y′ = xy", f: (x, y) => x * y, sol: "y = C e^(x²/2)" },
  { label: "y′ = y(1 − y)", f: (_x, y) => y * (1 - y), sol: "y = 1/(1 + C e^(−x))" },
  { label: "y′ = −x/y", f: (x, y) => (Math.abs(y) < 1e-6 ? 1e6 * -Math.sign(x || 1) : -x / y), sol: "x² + y² = C" },
];
const B = 3;

/** A direction field for a separable equation dy/dx = g(x)h(y), with the solution through a chosen point. */
export function DirectionFieldViz() {
  const [ei, setEi] = useState(2);
  const [x0, setX0] = useState(-2);
  const [y0, setY0] = useState(0.2);
  const E = ES[ei];
  const W = 400, pad = 16;
  const X = (x: number) => W / 2 + (x / B) * (W / 2 - pad);
  const Y = (y: number) => W / 2 - (y / B) * (W / 2 - pad);
  const grid: number[] = [];
  for (let v = -B; v <= B + 1e-9; v += 0.5) grid.push(v);
  // integrate along arc length so vertical tangents are handled
  const sys = (sgn: number) => (x: number, y: number): [number, number] => { const s = E.f(x, y); const n = Math.hypot(1, s); return [sgn / n, (sgn * s) / n]; };
  const fwd = rk4Path(sys(1), x0, y0, 0.02, 1200, [-B, B, -B, B]);
  const back = rk4Path(sys(-1), x0, y0, 0.02, 1200, [-B, B, -B, B]);
  const pts = [...back.reverse(), ...fwd.slice(1)].filter(([x, y]) => Math.abs(x) <= B + 0.5 && Math.abs(y) <= B + 0.5);
  const path = pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {ES.map((e, i) => <button key={e.label} type="button" aria-pressed={ei === i} className={ei === i ? "seg is-on" : "seg"} onClick={() => setEi(i)}>{e.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>starting x₀: <span className="mono">{x0}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>starting y₀: <span className="mono">{y0}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.1} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Direction field with a solution curve" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {grid.map((gx) => grid.map((gy) => {
          const s = E.f(gx, gy), n = Math.hypot(1, s), dx = (0.18 / n), dy = (0.18 * s) / n;
          return <line key={`${gx},${gy}`} x1={X(gx - dx)} y1={Y(gy - dy)} x2={X(gx + dx)} y2={Y(gy + dy)} style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />;
        }))}
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(x0)} cy={Y(y0)} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>general solution: {E.sol}</p>
      <figcaption className="viz-caption">
        Each short segment has the slope the equation prescribes at that point. A solution is a curve that is tangent to the segments everywhere it goes. Moving the starting point picks out a different member of the family of solutions, which is why separating variables leaves one constant C to be fixed.
      </figcaption>
    </figure>
  );
}
