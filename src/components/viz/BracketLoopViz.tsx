"use client";

import { useState } from "react";

type V = (x: number, y: number) => [number, number];
const PAIRS: { name: string; X: V; Y: V; xs: string; ys: string; br: string; brv: (x: number, y: number) => [number, number] }[] = [
  { name: "∂x and ∂y", X: () => [1, 0], Y: () => [0, 1], xs: "∂/∂x", ys: "∂/∂y", br: "0", brv: () => [0, 0] },
  { name: "∂x and x ∂y", X: () => [1, 0], Y: (x) => [0, x], xs: "∂/∂x", ys: "x ∂/∂y", br: "∂/∂y", brv: () => [0, 1] },
  { name: "rotation and ∂x", X: (x, y) => [-y, x], Y: () => [1, 0], xs: "−y ∂/∂x + x ∂/∂y", ys: "∂/∂x", br: "−∂/∂y", brv: () => [0, -1] },
];

function flow(F: V, p: [number, number], t: number): [number, number][] {
  const n = 40, h = t / n;
  const out: [number, number][] = [p];
  let [x, y] = p;
  for (let i = 0; i < n; i++) {
    const [a1, b1] = F(x, y);
    const [a2, b2] = F(x + (h / 2) * a1, y + (h / 2) * b1);
    const [a3, b3] = F(x + (h / 2) * a2, y + (h / 2) * b2);
    const [a4, b4] = F(x + h * a3, y + h * b3);
    x += (h / 6) * (a1 + 2 * a2 + 2 * a3 + a4);
    y += (h / 6) * (b1 + 2 * b2 + 2 * b3 + b4);
    out.push([x, y]);
  }
  return out;
}
const f = (n: number, d = 3) => (n < 0 ? `−${(-n).toFixed(d)}` : n.toFixed(d));

/** The Lie bracket as the gap in a loop: flow along X, Y, −X, −Y for time ε each. */
export function BracketLoopViz() {
  const [k, setK] = useState(1);
  const [e, setE] = useState(0.6);
  const P = PAIRS[k];
  const p0: [number, number] = [0.5, 0.2];
  const legs: [number, number][][] = [];
  let cur = p0;
  for (const [F, s] of [[P.X, e], [P.Y, e], [P.X, -e], [P.Y, -e]] as [V, number][]) {
    const leg = flow(F, cur, s);
    legs.push(leg);
    cur = leg[leg.length - 1];
  }
  const gap: [number, number] = [cur[0] - p0[0], cur[1] - p0[1]];
  const S = 110, CX = 120, CY = 150;
  const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;
  const cols = ["var(--accent)", "var(--success)", "var(--accent)", "var(--success)"];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="pair">
        {PAIRS.map((q, i) => <button key={q.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{q.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>ε = {e.toFixed(2)} <input type="range" min={5} max={100} value={Math.round(e * 100)} onChange={(ev) => setE(Number(ev.target.value) / 100)} aria-label="epsilon" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A loop of flows that fails to close" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-0.8)} y1={Y(0)} x2={X(1.9)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(-1.1)} x2={X(0)} y2={Y(1.3)} style={{ stroke: "var(--border)" }} />
        {legs.map((leg, i) => <polyline key={i} points={leg.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: "none", stroke: cols[i], strokeWidth: 2.5, strokeDasharray: i >= 2 ? "6 4" : undefined }} />)}
        <circle cx={X(p0[0])} cy={Y(p0[1])} r={4} style={{ fill: "var(--text)" }} />
        <circle cx={X(cur[0])} cy={Y(cur[1])} r={4} style={{ fill: "var(--danger)" }} />
        <text x={X(p0[0]) - 8} y={Y(p0[1]) + 16} style={{ fill: "var(--text)", fontSize: 11 }}>p</text>
        <text x={330} y={34} style={{ fill: "var(--accent)", fontSize: 12 }}>X = {P.xs}</text>
        <text x={330} y={54} style={{ fill: "var(--success)", fontSize: 12 }}>Y = {P.ys}</text>
        <text x={330} y={78} style={{ fill: "var(--text)", fontSize: 12 }}>[X, Y] = {P.br}</text>
        <text x={330} y={110} style={{ fill: "var(--text-muted)", fontSize: 11 }}>gap = ({f(gap[0])}, {f(gap[1])})</text>
        <text x={330} y={130} style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>gap / ε² = ({f(gap[0] / (e * e), 2)}, {f(gap[1] / (e * e), 2)})</text>
        <text x={330} y={150} style={{ fill: "var(--text-muted)", fontSize: 11 }}>[X, Y] at p = ({f(P.brv(...p0)[0], 0)}, {f(P.brv(...p0)[1], 0)})</text>
      </svg>
      <figcaption className="viz-caption">
        Solid legs flow forward along X then Y; dashed legs flow back along X then Y. If the flows commute the loop closes.
        Otherwise the red end point misses p by about ε² times the bracket: shrink ε and watch gap / ε² settle.
      </figcaption>
    </figure>
  );
}
