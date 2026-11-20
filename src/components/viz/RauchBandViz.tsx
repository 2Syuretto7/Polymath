"use client";

import { useState } from "react";

const MODES = [
  { name: "0 ≤ K ≤ 1", K: (t: number) => 0.5 + 0.5 * Math.cos(3 * t), lo: 0, hi: 1 },
  { name: "−1 ≤ K ≤ 0", K: (t: number) => -0.5 - 0.5 * Math.cos(3 * t), lo: -1, hi: 0 },
];
const sn = (K: number, t: number) => (K > 0 ? Math.sin(Math.sqrt(K) * t) / Math.sqrt(K) : K < 0 ? Math.sinh(Math.sqrt(-K) * t) / Math.sqrt(-K) : t);

function solve(K: (t: number) => number, T: number, n: number) {
  const h = T / n, out = [0];
  let y = 0, v = 1, t = 0;
  for (let i = 0; i < n; i++) {
    const f = (tt: number, yy: number, vv: number) => [vv, -K(tt) * yy];
    const k1 = f(t, y, v), k2 = f(t + h / 2, y + (h / 2) * k1[0], v + (h / 2) * k1[1]);
    const k3 = f(t + h / 2, y + (h / 2) * k2[0], v + (h / 2) * k2[1]), k4 = f(t + h, y + h * k3[0], v + h * k3[1]);
    y += (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
    v += (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
    t += h; out.push(y);
  }
  return out;
}

/** Rauch comparison: a Jacobi field under curvature between two constants lies between the model fields. */
export function RauchBandViz() {
  const [m, setM] = useState(0);
  const [t100, setT] = useState(250);
  const T = 3.5, n = 350, md = MODES[m];
  const J = solve(md.K, T, n);
  const t = t100 / 100, idx = Math.round((t / T) * n);
  const ts = Array.from({ length: n + 1 }, (_, i) => (T * i) / n);
  const top = m === 0 ? 3.6 : 8, bot = -0.3;
  const X0 = 40, W = 450, Y0 = 12, H = 160;
  const x = (s: number) => X0 + (s / T) * W;
  const y = (v: number) => Y0 + ((top - v) / (top - bot)) * H;
  const line = (f: (s: number) => number) => ts.filter((s) => f(s) <= top && f(s) >= bot).map((s) => `${x(s)},${y(f(s))}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="curvature range">
        {MODES.map((d, i) => <button key={d.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>t = {t.toFixed(2)} <input type="range" min={0} max={350} value={t100} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A Jacobi field between two comparison fields" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        {[0, 1, 2, 3].map((s) => <text key={s} x={x(s)} y={y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{s}</text>)}
        <polyline points={line((s) => sn(md.lo, s))} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        <polyline points={line((s) => sn(md.hi, s))} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        <polyline points={ts.filter((_, i) => J[i] <= top && J[i] >= bot).map((s) => `${x(s)},${y(J[Math.round((s / T) * n)])}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={x(t)} y1={Y0} x2={x(t)} y2={Y0 + H} style={{ stroke: "var(--text-muted)" }} />
        <text x={X0 + 8} y={Y0 + 12} style={{ fill: "var(--success)", fontSize: 11 }}>model with K = {md.lo}</text>
        <text x={X0 + 8} y={Y0 + 28} style={{ fill: "var(--danger)", fontSize: 11 }}>model with K = {md.hi}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At t = {t.toFixed(2)}: sn for K = {md.hi} is {sn(md.hi, t).toFixed(3)} ≤ |J| = {J[idx].toFixed(3)} ≤ sn for K = {md.lo} is {sn(md.lo, t).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Violet: the length of a normal Jacobi field with J(0) = 0, |J′(0)| = 1 along a geodesic whose sectional curvature
        K(t) wobbles between two constants. Dashed: the same field in the two model spaces. More curvature means slower
        spreading, so the field stays between the models, at least until the more curved model reaches a conjugate point.
      </figcaption>
    </figure>
  );
}
