"use client";

import { useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const inv = (a: C): C => { const d = a[0] * a[0] + a[1] * a[1]; return [a[0] / d, -a[1] / d]; };
const invSin2 = (z: C): C => {
  const x = Math.PI * z[0], y = Math.PI * z[1];
  const s: C = [Math.sin(x) * Math.cosh(y), Math.cos(x) * Math.sinh(y)];
  return inv(mul(s, s));
};

/**
 * ℘(z) for the lattice ℤ + ℤτ, summing over m first: Σ 1/(z + m)² = π² / sin²(πz),
 * so ℘(z) = π² [1/sin²(πz) − 1/3 + Σ_{n ≠ 0} (1/sin²(π(z + nτ)) − 1/sin²(πnτ))].
 */
export function wp(z: C, tau: C, N = 12): C {
  const s = invSin2(z);
  let re = s[0] - 1 / 3, im = s[1];
  for (let n = 1; n <= N; n++) for (const sg of [1, -1]) {
    const u = invSin2([z[0] + sg * n * tau[0], z[1] + sg * n * tau[1]]);
    const v = invSin2([sg * n * tau[0], sg * n * tau[1]]);
    re += u[0] - v[0];
    im += u[1] - v[1];
  }
  return [Math.PI ** 2 * re, Math.PI ** 2 * im];
}

const sigma = (n: number, k: number) => { let s = 0; for (let d = 1; d <= n; d++) if (n % d === 0) s += d ** k; return s; };
/** g₂ = 60 G₄ and g₃ = 140 G₆ for the lattice ℤ + ℤ·ib, from the q-expansions with q = e to the −2πb. */
export function g2g3(b: number): [number, number] {
  const q = Math.exp(-2 * Math.PI * b);
  let e4 = 1, e6 = 1;
  for (let n = 1; n < 40; n++) { e4 += 240 * sigma(n, 3) * q ** n; e6 -= 504 * sigma(n, 5) * q ** n; }
  return [(60 * Math.PI ** 4 / 45) * e4, (140 * 2 * Math.PI ** 6 / 945) * e6];
}

/** ℘ along the real axis for the rectangular lattice ℤ + ℤ·ib, with its values at the half-periods. */
export function WeierstrassPViz() {
  const [b, setB] = useState(1);
  const tau: C = [0, b];
  const e1 = wp([0.5, 0], tau)[0], e2 = wp([0.5, b / 2], tau)[0], e3 = wp([0, b / 2], tau)[0];
  const [g2, g3] = g2g3(b);
  const YMIN = -20, YMAX = 60;
  const px = (x: number) => 50 + x * 450, py = (y: number) => 210 - ((y - YMIN) / (YMAX - YMIN)) * 195;
  const xs = Array.from({ length: 197 }, (_, i) => 0.02 + i * 0.005);
  let d = "", on = false;
  for (const x of xs) {
    const y = wp([x, 0], tau)[0];
    if (y > YMAX) { on = false; continue; }
    d += `${on ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
    on = true;
  }
  const f = (v: number) => (Math.abs(v) < 5e-4 ? 0 : v).toFixed(3).replace("-", "−");
  const lines: [number, string][] = [[e1, "e₁ = ℘(½)"], [e2, "e₂"], [e3, "e₃"]];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>τ = {b.toFixed(1)}i <input type="range" min={0.6} max={2} step={0.1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="imaginary period" /></label>
      </div>
      <svg viewBox="0 0 540 232" role="img" aria-label="The Weierstrass p-function on the real axis" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[-20, 0, 20, 40, 60].map((v) => (
          <g key={v}>
            <line x1={50} y1={py(v)} x2={500} y2={py(v)} style={{ stroke: "var(--grid-line)" }} />
            <text x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>
          </g>
        ))}
        {[0, 0.25, 0.5, 0.75, 1].map((x) => <text key={x} x={px(x)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>)}
        {lines.map(([v, lab], i) => (
          <g key={lab}>
            <line x1={50} y1={py(v)} x2={500} y2={py(v)} style={{ stroke: i === 0 ? "var(--success)" : "var(--text-faint)", strokeDasharray: "5 3" }} />
            <text x={i === 0 ? 498 : 56} y={py(v) - 4} textAnchor={i === 0 ? "end" : "start"} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{lab}</text>
          </g>
        ))}
        <path d={d} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(0.5)} cy={py(e1)} r={5} style={{ fill: "var(--success)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        e₁ = {f(e1)}, e₂ = {f(e2)}, e₃ = {f(e3)}; g₂ = {f(g2)}, g₃ = {f(g3)}; 4e₁³ − g₂e₁ − g₃ = {f(4 * e1 ** 3 - g2 * e1 - g3)}.
      </p>
      <figcaption className="viz-caption">
        For the lattice with periods 1 and τ = bi, ℘ is real on the real axis, has a double pole at each integer and takes
        its least value e₁ at the half-period ½. The values e₂ = ℘(½ + τ/2) and e₃ = ℘(τ/2) at the other half-periods are real too, and e₁, e₂, e₃ are the roots of 4x³ − g₂x − g₃,
        which is why (℘′)² = 4℘³ − g₂℘ − g₃.
      </figcaption>
    </figure>
  );
}
