"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

type L = { label: string; F: (x: number, y: number) => [number, number]; V: (x: number, y: number) => number; Vs: string; dVs: string; verdict: string };
const LS: L[] = [
  { label: "x′ = −x + y², y′ = −y − xy", F: (x, y) => [-x + y * y, -y - x * y], V: (x, y) => x * x + y * y, Vs: "V = x² + y²", dVs: "V̇ = −2(x² + y²) < 0 away from 0", verdict: "V̇ is negative everywhere except the origin, so the origin is asymptotically stable." },
  { label: "damped spring x′ = y, y′ = −x − 0.5y", F: (x, y) => [y, -x - 0.5 * y], V: (x, y) => x * x + y * y, Vs: "V = x² + y²", dVs: "V̇ = −y² ≤ 0", verdict: "V̇ ≤ 0, and it vanishes only on the x-axis, which no solution other than 0 stays on. LaSalle’s principle gives asymptotic stability." },
  { label: "pendulum x′ = y, y′ = −sin x", F: (x, y) => [y, -Math.sin(x)], V: (x, y) => y * y / 2 + 1 - Math.cos(x), Vs: "V = y²/2 + 1 − cos x (energy)", dVs: "V̇ = 0", verdict: "Energy is conserved: solutions stay on level curves of V. The origin is stable but not asymptotically stable." },
];
const B = 2.5;

/** A Lyapunov function: solutions cross its level curves inwards, so V decreases along every solution. */
export function LyapunovViz() {
  const [li, setLi] = useState(0);
  const [x0, setX0] = useState(1);
  const [y0, setY0] = useState(1);
  const S = LS[li];
  const W = 360, X = (x: number) => W / 2 + (x / B) * (W / 2 - 8), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 8);
  const pts = rk4Path((x, y) => S.F(x, y), x0, y0, 0.02, 1000, [-B, B, -B, B]);
  const vs = pts.map(([x, y]) => S.V(x, y));
  // level curves of V by marching squares on a coarse grid
  const N = 60, levels = [0.25, 0.75, 1.5, 2.5, 4];
  const segs: string[] = [];
  const g = (i: number) => -B + (2 * B * i) / N;
  for (const lv of levels) {
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const xs = [g(i), g(i + 1)], ys = [g(j), g(j + 1)];
      const c = [S.V(xs[0], ys[0]), S.V(xs[1], ys[0]), S.V(xs[1], ys[1]), S.V(xs[0], ys[1])];
      const corners: [number, number][] = [[xs[0], ys[0]], [xs[1], ys[0]], [xs[1], ys[1]], [xs[0], ys[1]]];
      const hits: [number, number][] = [];
      for (let k = 0; k < 4; k++) {
        const a = c[k] - lv, b = c[(k + 1) % 4] - lv;
        if ((a < 0) !== (b < 0)) { const t = a / (a - b), p = corners[k], q = corners[(k + 1) % 4]; hits.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); }
      }
      if (hits.length >= 2) segs.push(`M${X(hits[0][0]).toFixed(1)},${Y(hits[0][1]).toFixed(1)}L${X(hits[1][0]).toFixed(1)},${Y(hits[1][1]).toFixed(1)}`);
    }
  }
  const CW = 360, CH = 110, vm = Math.max(...vs, 0.01);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="System">
        {LS.map((x, i) => <button key={x.label} type="button" aria-pressed={li === i} className={li === i ? "seg is-on" : "seg"} onClick={() => setLi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>start x: <span className="mono">{x0}</span></span>
          <input type="range" min={-2} max={2} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>start y: <span className="mono">{y0}</span></span>
          <input type="range" min={-2} max={2} step={0.25} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center", marginTop: 6 }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Level curves of V and a solution" style={{ flex: "1 1 260px", maxWidth: 380, minWidth: 0 }}>
          <path d={segs.join("")} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.2 }} />
          <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
          <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
          <path d={pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
          <circle cx={X(x0)} cy={Y(y0)} r={5} style={{ fill: "var(--accent)" }} />
        </svg>
        <div style={{ flex: "1 1 220px", minWidth: 0 }}>
          <p className="mono" style={{ margin: "0 0 4px", fontSize: 13 }}>V along the solution, 0 ≤ t ≤ 20</p>
          <svg viewBox={`0 0 ${CW} ${CH}`} role="img" aria-label="V against time" style={{ width: "100%", display: "block" }}>
            <line x1={30} y1={CH - 16} x2={CW - 6} y2={CH - 16} style={{ stroke: "var(--border)" }} />
            <line x1={30} y1={6} x2={30} y2={CH - 16} style={{ stroke: "var(--border)" }} />
            <text x={26} y={12} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{vm.toFixed(1)}</text>
            <text x={26} y={CH - 14} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
            <path d={vs.map((v, i) => `${i ? "L" : "M"}${(30 + (i / 1000) * (CW - 36)).toFixed(1)},${(CH - 16 - (v / vm) * (CH - 24)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
          </svg>
          <p className="mono" style={{ margin: "6px 0 2px", fontSize: 13 }}>{S.Vs}; {S.dVs}</p>
        </div>
      </div>
      <p style={{ margin: "6px 0 4px", fontSize: 14 }}>{S.verdict}</p>
      <figcaption className="viz-caption">
        The faint curves are level curves of V, which is positive except at the origin. If V never increases along solutions, a solution that starts inside a level curve can never cross it outwards, so solutions starting near the origin stay near it. No solution formula is needed.
      </figcaption>
    </figure>
  );
}
