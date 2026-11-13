"use client";

import { useState } from "react";

type G = { g: string; trial: string; why: string; yp: (t: number) => number; dyp: (t: number) => number; coeffs: string };
const GS: G[] = [
  { g: "4", trial: "A", why: "Constant forcing, so try a constant.", yp: () => 2, dyp: () => 0, coeffs: "2A = 4, so A = 2" },
  { g: "e^(−3t)", trial: "Ae^(−3t)", why: "Exponential forcing, so try the same exponential.", yp: (t) => 0.5 * Math.exp(-3 * t), dyp: (t) => -1.5 * Math.exp(-3 * t), coeffs: "A(9 − 9 + 2) = 1, so A = 1/2" },
  { g: "e^(−t)", trial: "Ate^(−t)", why: "e^(−t) already solves the homogeneous equation, since −1 is a root: the guess Ae^(−t) gives 0 = e^(−t). Multiply by t.", yp: (t) => t * Math.exp(-t), dyp: (t) => (1 - t) * Math.exp(-t), coeffs: "A(2(−1) + 3) = 1, so A = 1" },
  { g: "10 cos t", trial: "A cos t + B sin t", why: "Cosine forcing: derivatives mix cos and sin, so include both.", yp: (t) => Math.cos(t) + 3 * Math.sin(t), dyp: (t) => -Math.sin(t) + 3 * Math.cos(t), coeffs: "A + 3B = 10 and B − 3A = 0, so A = 1, B = 3" },
  { g: "t", trial: "At + B", why: "Polynomial forcing, so try a polynomial of the same degree.", yp: (t) => t / 2 - 0.75, dyp: () => 0.5, coeffs: "2A = 1 and 3A + 2B = 0, so A = 1/2, B = −3/4" },
];

/** Undetermined coefficients for y″ + 3y′ + 2y = g(t): guess the form of a particular solution. */
export function UndeterminedViz() {
  const [gi, setGi] = useState(3);
  const G = GS[gi];
  const y0 = G.yp(0), d0 = G.dyp(0);
  const C2 = y0 + d0, C1 = -2 * y0 - d0;
  const y = (t: number) => G.yp(t) + C1 * Math.exp(-t) + C2 * Math.exp(-2 * t);
  const T = 10, ts = Array.from({ length: 401 }, (_, i) => (i / 400) * T);
  const ys = ts.map(y), ps = ts.map(G.yp);
  const hi = Math.max(0.5, ...ys, ...ps), lo = Math.min(-0.5, ...ys, ...ps);
  const W = 520, H = 220, L = 34;
  const X = (t: number) => L + (t / T) * (W - L - 10);
  const Y = (v: number) => 8 + ((hi - v) / (hi - lo)) * (H - 28);
  const path = (vs: number[]) => vs.map((v, i) => `${i ? "L" : "M"}${X(ts[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Solve y″ + 3y′ + 2y = g(t), starting at rest. Choose the forcing g.</p>
      <div className="segmented" role="group" aria-label="Forcing">
        {GS.map((x, i) => <button key={x.g} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => setGi(i)}>g = {x.g}</button>)}
      </div>
      <p className="mono" style={{ margin: "8px 0 2px" }}>trial y_p = {G.trial}; {G.coeffs}</p>
      <p style={{ margin: "2px 0 6px", fontSize: 14 }}>{G.why}</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Particular solution and the full solution from rest" style={{ width: "100%", display: "block" }}>
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {[hi, lo].map((v) => <text key={v} x={L - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v.toFixed(1)}</text>)}
        {[0, 5, 10].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <path d={path(ps)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
        <path d={path(ys)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>y = y_p + ({C1.toFixed(2)})e^(−t) + ({C2.toFixed(2)})e^(−2t)</p>
      <figcaption className="viz-caption">
        The dashed curve is the particular solution found by the guess; the thick curve is the solution starting at rest. They differ by a solution of the homogeneous equation, here a mix of e^(−t) and e^(−2t), which dies away. So the long-run behaviour is decided by the particular solution alone.
      </figcaption>
    </figure>
  );
}
