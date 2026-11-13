"use client";

import { useState, type ReactNode } from "react";

function expm(A: number[], t: number): number[] {
  // 2 by 2 matrix exponential by series
  let term = [1, 0, 0, 1], sum = [1, 0, 0, 1];
  for (let k = 1; k < 40; k++) {
    term = [
      (term[0] * A[0] + term[1] * A[2]) * t / k, (term[0] * A[1] + term[1] * A[3]) * t / k,
      (term[2] * A[0] + term[3] * A[2]) * t / k, (term[2] * A[1] + term[3] * A[3]) * t / k,
    ];
    sum = sum.map((x, i) => x + term[i]);
  }
  return sum;
}

/** The trace as the rate at which the flow of x′ = Ax changes area: det e^(tA) = e^(t·tr A). */
export function TraceFlowViz() {
  const [m, setM] = useState([0.5, 1, -1, 0]);
  const [t, setT] = useState(1);
  const [a, b, c, d] = m;
  const E = expm(m, t);
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  const eig = disc >= 0 ? `${((tr + Math.sqrt(disc)) / 2).toFixed(2)} and ${((tr - Math.sqrt(disc)) / 2).toFixed(2)}` : `${(tr / 2).toFixed(2)} ± ${(Math.sqrt(-disc) / 2).toFixed(2)}i`;
  const area = E[0] * E[3] - E[1] * E[2];
  const W = 320, o = W / 2, S = 50;
  const P = (q: number[]) => `${(o + q[0] * S).toFixed(1)},${(o - q[1] * S).toFixed(1)}`;
  const ap = (v: number[]) => [E[0] * v[0] + E[1] * v[1], E[2] * v[0] + E[3] * v[1]];
  const sq = [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]];
  const arrows: ReactNode[] = [];
  for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) {
    const x = i * 0.5, y = j * 0.5, vx = a * x + b * y, vy = c * x + d * y, L = Math.hypot(vx, vy);
    if (L < 1e-6) continue;
    const s = 0.18 / Math.max(L, 0.6);
    arrows.push(<line key={`${i},${j}`} x1={o + x * S} y1={o - y * S} x2={o + (x + vx * s) * S} y2={o - (y + vy * s) * S} style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />);
  }
  const set = (i: number, x: number) => setM(m.map((y, j) => (j === i ? x : y)));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {["a", "b", "c", "d"].map((nm, i) => (
          <label key={nm}><span>{nm}: <span className="mono">{m[i]}</span></span>
            <input type="range" min={-1.5} max={1.5} step={0.25} value={m[i]} onChange={(e) => set(i, Number(e.target.value))} /></label>
        ))}
        <label><span>time t: <span className="mono">{t}</span></span>
          <input type="range" min={0} max={2} step={0.1} value={t} onChange={(e) => setT(Math.round(Number(e.target.value) * 10) / 10)} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="A square carried by the flow of a linear vector field" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        {arrows}
        <polygon points={sq.map(P).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <polygon points={sq.map(ap).map(P).join(" ")} style={{ fill: "var(--accent-soft)", fillOpacity: 0.5, stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        A = [{a}, {b}; {c}, {d}]: trace {tr.toFixed(2)}, eigenvalues {eig}
      </p>
      <p className="mono" style={{ margin: "4px 0" }}>
        area of the moved square = {area.toFixed(3)}, e^(t · trace) = {Math.exp(t * tr).toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        The faint arrows show the vector field v ↦ Av, and the shaded square is the dashed unit square carried along its flow for time t, which is e^(tA) applied to it. Its area is always e^(t · tr A): the trace is the rate at which the flow expands area. Set a + d = 0 and the square changes shape but never area.
      </figcaption>
    </figure>
  );
}
