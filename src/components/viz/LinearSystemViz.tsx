"use client";

import { useState } from "react";
import { rk4Path } from "./odeTools";

type S = { label: string; A: [number, number, number, number]; note: string };
const SS: S[] = [
  { label: "y″ + 3y′ + 2y = 0", A: [0, 1, -2, -3], note: "With x₁ = y and x₂ = y′, the second-order equation becomes x′ = Ax. Both eigenvalues are negative: every solution decays." },
  { label: "y″ + y = 0", A: [0, 1, -1, 0], note: "Complex eigenvalues ±i: solutions circle the origin, which is the oscillation y = cos t seen in the plane of (y, y′)." },
  { label: "a saddle", A: [1, 1, 4, 1], note: "Eigenvalues 3 and −1: solutions along one eigenvector grow, along the other they shrink, and every other solution eventually follows the growing direction." },
  { label: "a star", A: [-1, 0, 0, -1], note: "A = −I: every vector is an eigenvector, and solutions run straight into the origin." },
];
const B = 3;

/** A linear system x′ = Ax in the plane: the field of velocity arrows, eigenvector lines, and one solution. */
export function LinearSystemViz() {
  const [si, setSi] = useState(0);
  const [x0, setX0] = useState(2);
  const [y0, setY0] = useState(1);
  const S = SS[si];
  const [a, b, c, d] = S.A;
  const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det;
  const F = (x: number, y: number): [number, number] => [a * x + b * y, c * x + d * y];
  const lam = disc >= 0 ? [(tr + Math.sqrt(disc)) / 2, (tr - Math.sqrt(disc)) / 2] : [];
  const evec = (l: number): [number, number] => (Math.abs(b) > 1e-9 ? [b, l - a] : Math.abs(c) > 1e-9 ? [l - d, c] : [1, 0]);
  const vecs = b === 0 && c === 0 && a === d ? [] : lam.map(evec);
  const W = 400, pad = 14;
  const X = (x: number) => W / 2 + (x / B) * (W / 2 - pad);
  const Y = (y: number) => W / 2 - (y / B) * (W / 2 - pad);
  const grid: number[] = [];
  for (let v = -B + 0.25; v <= B; v += 0.5) grid.push(v);
  const sys = (sg: number) => (x: number, y: number): [number, number] => [sg * F(x, y)[0], sg * F(x, y)[1]];
  const fw = rk4Path(sys(1), x0, y0, 0.02, 800, [-B, B, -B, B]);
  const bw = rk4Path(sys(-1), x0, y0, 0.02, 300, [-B, B, -B, B]);
  const pts = [...bw.reverse(), ...fw.slice(1)];
  const fmt = (v: number) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(2));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="System">
        {SS.map((s, i) => <button key={s.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{s.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>start x₁(0): <span className="mono">{x0}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.25} value={x0} onChange={(e) => setX0(Number(e.target.value))} /></label>
        <label><span>start x₂(0): <span className="mono">{y0}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.25} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Vector field and a solution of the linear system" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <defs><clipPath id="linsys-clip"><rect x={0} y={0} width={W} height={W} /></clipPath></defs>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <g clipPath="url(#linsys-clip)">
          {vecs.map(([p, q], k) => { const n = Math.hypot(p, q) || 1; return <line key={k} x1={X((-5 * p) / n)} y1={Y((-5 * q) / n)} x2={X((5 * p) / n)} y2={Y((5 * q) / n)} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />; })}
          {grid.map((gx) => grid.map((gy) => {
            const [u, v] = F(gx, gy), n = Math.hypot(u, v);
            if (n < 1e-9) return null;
            const s = 0.2 / n;
            return <line key={`${gx},${gy}`} x1={X(gx)} y1={Y(gy)} x2={X(gx + u * s)} y2={Y(gy + v * s)} style={{ stroke: "var(--text-faint)", strokeWidth: 1.2 }} />;
          }))}
          {grid.map((gx) => grid.map((gy) => { const [u, v] = F(gx, gy), n = Math.hypot(u, v); return n < 1e-9 ? null : <circle key={`d${gx},${gy}`} cx={X(gx + (u * 0.2) / n)} cy={Y(gy + (v * 0.2) / n)} r={1.6} style={{ fill: "var(--text-faint)" }} />; }))}
          <path d={pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </g>
        <circle cx={X(x0)} cy={Y(y0)} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        A = [[{fmt(a)}, {fmt(b)}], [{fmt(c)}, {fmt(d)}]]; eigenvalues: {disc >= 0 ? lam.map(fmt).join(" and ") : `${fmt(tr / 2)} ± ${fmt(Math.sqrt(-disc) / 2)}i`}
      </p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{S.note}</p>
      <figcaption className="viz-caption">
        Each short stroke, with a dot at its head, shows the direction of the velocity Ax at that point. The dashed lines are real eigenvector directions: a solution that starts on one stays on it, moving as e^(λt). Move the starting point to see the other solutions.
      </figcaption>
    </figure>
  );
}
