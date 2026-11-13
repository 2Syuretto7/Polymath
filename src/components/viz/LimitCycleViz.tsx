"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";



/** Limit cycles: trajectories from inside and outside wind onto the same isolated closed orbit. */
export function LimitCycleViz() {
  const [pi, setPi] = useState(0);
  const [mu, setMu] = useState(1);
  const B = pi === 0 ? 6 : 3;
  const F = (x: number, y: number): [number, number] => {
    if (pi === 0) return [y, mu * (1 - x * x) * y - x];
    const r2 = x * x + y * y;
    return [x * (1 - r2) * mu - y, y * (1 - r2) * mu + x];
  };
  const starts: [number, number][] = pi === 0 ? [[0.1, 0], [4, 5], [-4, -5], [0.5, -0.5]] : [[0.1, 0], [2.5, 2], [-2.5, -1], [0.4, 0.3]];
  const W = 380, X = (x: number) => W / 2 + (x / B) * (W / 2 - 8), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 8);
  const paths = starts.map(([x, y]) => rk4Path(F, x, y, 0.01, 4000, [-B, B, -B, B]));
  // the x(t) trace of the first trajectory
  const tr = paths[0].filter((_, i) => i % 4 === 0).slice(0, 1000);
  const CW = 380, CH = 110;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="System">
        {["van der Pol oscillator", "r′ = μr(1 − r²), θ′ = 1"].map((l, i) => <button key={l} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{l}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>μ: <span className="mono">{mu.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={3} step={0.05} value={mu} onChange={(e) => setMu(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Trajectories approaching a limit cycle" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        {paths.map((ps, k) => <path key={k} d={ps.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: k === 0 ? "var(--accent)" : "var(--text-muted)", strokeWidth: k === 0 ? 1.8 : 1.2 }} />)}
        {starts.map(([x, y], k) => <circle key={k} cx={X(x)} cy={Y(y)} r={4} style={{ fill: k === 0 ? "var(--accent)" : "var(--text-muted)" }} />)}
        <circle cx={X(0)} cy={Y(0)} r={3.5} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0 0", fontSize: 13 }}>x(t) for the solution starting near the origin, 0 ≤ t ≤ 40</p>
      <svg viewBox={`0 0 ${CW} ${CH}`} role="img" aria-label="x against time" style={{ width: "100%", display: "block" }}>
        <line x1={0} y1={CH / 2} x2={CW} y2={CH / 2} style={{ stroke: "var(--border)" }} />
        <path d={tr.map(([x], i) => `${i ? "L" : "M"}${((i / 1000) * CW).toFixed(1)},${(CH / 2 - (x / 2.6) * (CH / 2 - 4)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
      </svg>
      <figcaption className="viz-caption">
        The origin is an unstable equilibrium: the solution starting near it spirals out. Solutions starting far away spiral in. All of them approach the same closed orbit, a limit cycle, whose size does not depend on where you start. For van der Pol, larger μ makes the cycle jerky: slow drifts and sudden jumps, called relaxation oscillations.
      </figcaption>
    </figure>
  );
}
