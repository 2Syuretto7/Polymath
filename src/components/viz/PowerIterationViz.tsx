"use client";

import { useState } from "react";

const TH = Math.PI / 6;

/** Power iteration on a 2 × 2 symmetric matrix with eigenvalues 1 and r: iterates on the unit circle. */
export function PowerIterationViz() {
  const [r, setR] = useState(0.7);
  const [steps, setSteps] = useState(6);
  const u = [Math.cos(TH), Math.sin(TH)], w = [-Math.sin(TH), Math.cos(TH)];
  const A = [
    [u[0] * u[0] + r * w[0] * w[0], u[0] * u[1] + r * w[0] * w[1]],
    [u[1] * u[0] + r * w[1] * w[0], u[1] * u[1] + r * w[1] * w[1]],
  ];
  const xs: number[][] = [[Math.cos(1.5), Math.sin(1.5)]];
  for (let k = 0; k < steps; k++) {
    const [a, b] = xs[k];
    const y = [A[0][0] * a + A[0][1] * b, A[1][0] * a + A[1][1] * b];
    const ny = Math.hypot(y[0], y[1]);
    xs.push([y[0] / ny, y[1] / ny]);
  }
  const ang = (x: number[]) => Math.abs(Math.asin(Math.max(-1, Math.min(1, x[0] * w[0] + x[1] * w[1]))));
  const P = (x: number[], s = 1) => [130 + 90 * s * x[0], 110 - 90 * s * x[1]] as const;
  const last = xs[xs.length - 1];
  const rq = (A[0][0] * last[0] + A[0][1] * last[1]) * last[0] + (A[1][0] * last[0] + A[1][1] * last[1]) * last[1];
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "grid", gap: 6 }}>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{ minWidth: 150 }}>ratio λ₂/λ₁ = {r.toFixed(2)}</span>
          <input type="range" min={0} max={0.98} step={0.02} value={r} onChange={(e) => setR(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{ minWidth: 150 }}>iterations: {steps}</span>
          <input type="range" min={0} max={30} step={1} value={steps} onChange={(e) => setSteps(Number(e.target.value))} style={{ flex: 1 }} />
        </label>
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <svg viewBox="0 0 260 220" role="img" aria-label="Iterates of the power method on the unit circle" style={{ width: 260, maxWidth: "100%", display: "block" }}>
          <circle cx={130} cy={110} r={90} style={{ fill: "none", stroke: "var(--border)" }} />
          <line x1={P(u, -1.15)[0]} y1={P(u, -1.15)[1]} x2={P(u, 1.15)[0]} y2={P(u, 1.15)[1]} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
          <line x1={P(w, -1.15)[0]} y1={P(w, -1.15)[1]} x2={P(w, 1.15)[0]} y2={P(w, 1.15)[1]} style={{ stroke: "var(--text-faint)", strokeDasharray: "2 4" }} />
          {xs.map((x, k) => (
            <g key={k}>
              <line x1={130} y1={110} x2={P(x)[0]} y2={P(x)[1]} style={{ stroke: k === xs.length - 1 ? "var(--accent)" : "var(--text-faint)", strokeWidth: k === xs.length - 1 ? 2.5 : 1 }} />
              <circle cx={P(x)[0]} cy={P(x)[1]} r={k === xs.length - 1 ? 5 : 3} style={{ fill: k === 0 ? "var(--danger)" : "var(--accent)" }} />
            </g>
          ))}
        </svg>
        <div className="mono" style={{ display: "grid", gap: 4, fontSize: 13 }}>
          <div>angle to top eigenvector, by step:</div>
          <div>{xs.slice(0, 8).map((x) => ang(x).toExponential(1)).join(", ")}{xs.length > 8 ? ", …" : ""}</div>
          <div style={{ fontWeight: 700 }}>after {steps} steps: {ang(last).toExponential(2)}</div>
          <div>Rayleigh quotient: {rq.toFixed(10)} (true λ₁ = 1)</div>
        </div>
      </div>
      <figcaption className="viz-caption">
        The matrix has eigenvalue 1 along the dashed blue line and λ₂ along the dotted one. Each step multiplies by the
        matrix and rescales, so the component along the second eigenvector shrinks by the ratio λ₂/λ₁ every time. The
        angle falls geometrically at that rate, and the Rayleigh quotient, at the square of it. When the ratio is near 1,
        convergence crawls.
      </figcaption>
    </figure>
  );
}
