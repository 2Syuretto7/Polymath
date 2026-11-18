"use client";

import { useState } from "react";

type S = [number, number];
const F = ([x, v]: S): S => [v, -x];
const add = (a: S, b: S, h: number): S => [a[0] + h * b[0], a[1] + h * b[1]];
const STEP: Record<string, (y: S, h: number) => S> = {
  Euler: (y, h) => add(y, F(y), h),
  Heun: (y, h) => { const k1 = F(y), k2 = F(add(y, k1, h)); return [y[0] + (h / 2) * (k1[0] + k2[0]), y[1] + (h / 2) * (k1[1] + k2[1])]; },
  "Runge–Kutta 4": (y, h) => {
    const k1 = F(y), k2 = F(add(y, k1, h / 2)), k3 = F(add(y, k2, h / 2)), k4 = F(add(y, k3, h));
    return [y[0] + (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), y[1] + (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])];
  },
};
const NAMES = Object.keys(STEP);
const COLS = ["var(--danger)", "var(--text-muted)", "var(--accent)"];

/** Error at t = 2π when solving x″ = −x from (1, 0) with step 2π/n. */
export function errAt2pi(name: string, n: number) {
  let y: S = [1, 0];
  const h = (2 * Math.PI) / n;
  for (let i = 0; i < n; i++) y = STEP[name](y, h);
  return Math.hypot(y[0] - 1, y[1]);
}

/** Three one-step methods on the harmonic oscillator, drawn in the phase plane over three periods. */
export function OdeStepperViz() {
  const [n, setN] = useState(24);
  const h = (2 * Math.PI) / n;
  const P = (y: S) => [130 + 70 * y[0], 110 - 70 * y[1]] as const;
  const paths = NAMES.map((name) => {
    let y: S = [1, 0];
    const pts: S[] = [y];
    for (let i = 0; i < 3 * n; i++) { y = STEP[name](y, h); pts.push(y); }
    return pts;
  });
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono" style={{ minWidth: 170 }}>steps per period: {n}</span>
        <input type="range" min={6} max={100} step={2} value={n} onChange={(e) => setN(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <svg viewBox="0 0 260 220" role="img" aria-label="Numerical orbits in the phase plane" style={{ width: 260, maxWidth: "100%", display: "block" }}>
          <defs><clipPath id="ode-clip"><rect x={0} y={0} width={260} height={220} /></clipPath></defs>
          <circle cx={130} cy={110} r={70} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
          <g clipPath="url(#ode-clip)">
            {paths.map((pts, i) => (
              <path key={i} d={pts.map((y, k) => `${k ? "L" : "M"}${P(y)[0].toFixed(1)},${P(y)[1].toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: COLS[i], strokeWidth: i === 2 ? 2.5 : 1.5 }} />
            ))}
          </g>
        </svg>
        <div className="mono" style={{ display: "grid", gap: 4, fontSize: 13 }}>
          <div>h = {h.toFixed(3)}; error after one period:</div>
          {NAMES.map((name, i) => (
            <div key={name} style={{ color: COLS[i], fontWeight: i === 2 ? 700 : 400 }}>
              {name}: {errAt2pi(name, n).toExponential(2)} (halving h divides it by {(errAt2pi(name, n) / errAt2pi(name, 2 * n)).toFixed(1)})
            </div>
          ))}
        </div>
      </div>
      <figcaption className="viz-caption">
        The exact solution of x″ = −x circles the dashed orbit for ever. Euler&rsquo;s method spirals outwards, gaining
        energy every step; Heun&rsquo;s method, of order 2, drifts slowly; classical Runge–Kutta, of order 4, stays on the
        circle to the eye even with a dozen steps per period. Halving h divides the error by about 2, 4 and 16.
      </figcaption>
    </figure>
  );
}
