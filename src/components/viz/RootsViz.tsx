"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const sub = (a: C, b: C): C => [a[0] - b[0], a[1] - b[1]];
const div = (a: C, b: C): C => { const d = b[0] * b[0] + b[1] * b[1] || 1e-12; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };

/** Roots of a monic polynomial with coefficients from the highest power down, by the Durand–Kerner iteration. */
function roots(c: number[]): C[] {
  const n = c.length - 1;
  let z: C[] = Array.from({ length: n }, (_, k) => { const r = Math.pow(0.4, k); return [0.4 + 0.9 * Math.cos(k), 0.9 * Math.sin(k) + r * 0.1] as C; });
  const ev = (x: C) => c.reduce<C>((acc, a) => [mul(acc, x)[0] + a, mul(acc, x)[1]], [0, 0]);
  for (let it = 0; it < 300; it++) {
    z = z.map((zi, i) => { let den: C = [1, 0]; z.forEach((zj, j) => { if (j !== i) den = mul(den, sub(zi, zj)); }); return sub(zi, div(ev(zi), den)); });
  }
  return z.map(([x, y]) => [Math.abs(x) < 1e-7 ? 0 : x, Math.abs(y) < 1e-6 ? 0 : y]);
}
const f = (x: number) => (Math.abs(x) < 0.005 ? "0" : x.toFixed(2).replace("-", "−"));

/** The complex roots of a real quartic: conjugate pairs, and the factorisation into real linear and quadratic factors. */
export function RootsViz() {
  const [cf, setCf] = useState([0, -1, 0, -2]);
  const c = [1, ...cf];
  const rs = roots(c).sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  const real = rs.filter((r) => r[1] === 0);
  const upper = rs.filter((r) => r[1] > 0);
  const factors = [
    ...real.map((r) => `(x ${r[0] >= 0 ? "−" : "+"} ${f(Math.abs(r[0]))})`),
    ...upper.map((r) => `(x²${Math.abs(r[0]) < 0.005 ? "" : ` ${-2 * r[0] >= 0 ? "+" : "−"} ${f(Math.abs(2 * r[0]))}x`} + ${f(r[0] * r[0] + r[1] * r[1])})`),
  ];
  const S = 55, W = 380, o = W / 2;
  const lab = ["x³", "x²", "x", "1"];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {cf.map((a, k) => (
          <label key={k}><span>coefficient of {lab[k]}: <span className="mono">{a}</span></span>
            <input type="range" min={-4} max={4} step={0.5} value={a} onChange={(e) => setCf((x) => x.map((y, j) => (j === k ? Number(e.target.value) : y)))} /></label>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Roots in the complex plane" style={{ width: "100%", maxWidth: 400, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border-strong)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        {[-3, -2, -1, 1, 2, 3].map((k) => <text key={k} x={o + k * S} y={o + 14} textAnchor="middle" className="mono" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{k}</text>)}
        {upper.map((r, i) => <line key={i} x1={o + r[0] * S} y1={o - r[1] * S} x2={o + r[0] * S} y2={o + r[1] * S} style={{ stroke: "var(--accent)", strokeDasharray: "3 3" }} />)}
        {rs.map((r, i) => <circle key={i} cx={o + Math.max(-3.4, Math.min(3.4, r[0])) * S} cy={o - Math.max(-3.4, Math.min(3.4, r[1])) * S} r={6} style={{ fill: r[1] === 0 ? "var(--text)" : "var(--accent)" }} />)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>roots: {rs.map((r) => (r[1] === 0 ? f(r[0]) : `${f(r[0])} ${r[1] > 0 ? "+" : "−"} ${f(Math.abs(r[1]))}i`)).join(", ")}</p>
      <p className="mono" style={{ margin: "4px 0" }}>over ℝ: {factors.join(" ")}</p>
      <figcaption className="viz-caption">
        Over ℂ, the quartic has exactly four roots, counted with multiplicity: the fundamental theorem of algebra. Because the coefficients are real, non-real roots come in conjugate pairs, mirror images in the real axis. Each pair gives a real quadratic factor with no real root, so over ℝ every polynomial splits into linear and irreducible quadratic factors.
      </figcaption>
    </figure>
  );
}
