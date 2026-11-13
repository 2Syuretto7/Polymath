"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

type Sys = { label: string; F: (x: number, y: number) => [number, number]; eq: [number, number]; J: [number, number, number, number]; verdict: string };
const SYS: Sys[] = [
  { label: "pendulum, hanging down", F: (x, y) => [y, -Math.sin(x) - 0.3 * y], eq: [0, 0], J: [0, 1, -1, -0.3], verdict: "Eigenvalues −0.15 ± 0.99i: a stable spiral. The equilibrium is hyperbolic, so the nonlinear system is a stable spiral too." },
  { label: "pendulum, upside down", F: (x, y) => [y, -Math.sin(x) - 0.3 * y], eq: [Math.PI, 0], J: [0, 1, 1, -0.3], verdict: "Eigenvalues 0.86 and −1.16: a saddle. Hyperbolic, so the nonlinear pendulum also has a saddle at the top." },
  { label: "x′ = −y + xr², y′ = x + yr²", F: (x, y) => { const r2 = x * x + y * y; return [-y + x * r2, x + y * r2]; }, eq: [0, 0], J: [0, -1, 1, 0], verdict: "Eigenvalues ±i: the linearisation is a centre, but r′ = r³ > 0, so the true system spirals outwards. Linearisation cannot decide non-hyperbolic cases." },
];

/** Near an equilibrium, compare the nonlinear flow with the flow of its linearisation, at a chosen zoom. */
export function LinearisationViz() {
  const [si, setSi] = useState(0);
  const [R, setR] = useState(1.5);
  const S = SYS[si];
  const [ex, ey] = S.eq, J = S.J;
  const lin = (x: number, y: number): [number, number] => { const u = x - ex, v = y - ey; return [J[0] * u + J[1] * v, J[2] * u + J[3] * v]; };
  const box: [number, number, number, number] = [ex - R, ex + R, ey - R, ey + R];
  const W = 380;
  const X = (x: number) => W / 2 + ((x - ex) / R) * (W / 2 - 10), Y = (y: number) => W / 2 - ((y - ey) / R) * (W / 2 - 10);
  const starts: [number, number][] = Array.from({ length: 6 }, (_, k) => { const a = (2 * Math.PI * k) / 6 + 0.3; return [ex + 0.7 * R * Math.cos(a), ey + 0.7 * R * Math.sin(a)]; });
  const h = 0.01 * R, steps = 1600;
  const draw = (f: (x: number, y: number) => [number, number], x: number, y: number) => {
    const g = (sg: number) => (a: number, b: number): [number, number] => { const [u, v] = f(a, b); return [sg * u, sg * v]; };
    const pts = [...rk4Path(g(-1), x, y, h, steps / 4, box).reverse(), ...rk4Path(g(1), x, y, h, steps, box).slice(1)];
    return pts.map(([a, b], i) => `${i ? "L" : "M"}${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(" ");
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="System and equilibrium">
        {SYS.map((x, i) => <button key={x.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>window half-width around the equilibrium: <span className="mono">{R.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={2.5} step={0.05} value={R} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Nonlinear and linearised trajectories near an equilibrium" style={{ width: "100%", maxWidth: 420, display: "block", margin: "6px auto" }}>
        <defs><clipPath id="lin-clip"><rect x={0} y={0} width={W} height={W} /></clipPath></defs>
        <line x1={0} y1={Y(ey)} x2={W} y2={Y(ey)} style={{ stroke: "var(--border)" }} />
        <line x1={X(ex)} y1={0} x2={X(ex)} y2={W} style={{ stroke: "var(--border)" }} />
        <g clipPath="url(#lin-clip)">
          {starts.map(([x, y], k) => <path key={`l${k}`} d={draw(lin, x, y)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />)}
          {starts.map(([x, y], k) => <path key={`n${k}`} d={draw(S.F, x, y)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />)}
        </g>
        {starts.map(([x, y], k) => <circle key={k} cx={X(x)} cy={Y(y)} r={3.5} style={{ fill: "var(--accent)" }} />)}
        <circle cx={X(ex)} cy={Y(ey)} r={4} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>Jacobian at ({ex === Math.PI ? "π" : ex}, {ey}): [[{J[0]}, {J[1]}], [{J[2]}, {J[3]}]]</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{S.verdict}</p>
      <figcaption className="viz-caption">
        Solid curves follow the nonlinear system, dashed curves its linearisation x′ = J(x − x*), from the same starting points. Shrink the window: for a hyperbolic equilibrium the two pictures become indistinguishable, which is the Hartman–Grobman theorem. For the third system they never agree, however closely you look.
      </figcaption>
    </figure>
  );
}
