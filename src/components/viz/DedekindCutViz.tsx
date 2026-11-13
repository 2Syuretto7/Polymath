"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, H = 170, L = 1.3, R = 1.55, X0 = 30, X1 = 490;
const X = (v: number) => X0 + ((v - L) / (R - L)) * (X1 - X0);
const inA = (p: number, q: number) => p < 0 || p * p < 2 * q * q;

/** The cut for √2: rationals p/q with q ≤ N, split into A = {q < 0 or q² < 2} and B, the rest. The gap narrows but no rational sits at the boundary. */
export function DedekindCutViz() {
  const [n, setN] = useState(8);
  const pts: { p: number; q: number; v: number; a: boolean }[] = [];
  for (let q = 1; q <= n; q++) for (let p = Math.ceil(L * q); p <= Math.floor(R * q); p++) {
    let g = p, h = q; while (h) { [g, h] = [h, g % h]; }
    if (g !== 1) continue;
    pts.push({ p, q, v: p / q, a: inA(p, q) });
  }
  const maxA = pts.filter((t) => t.a).reduce((m, t) => (t.v > m.v ? t : m), { p: 0, q: 1, v: -Infinity, a: true });
  const minB = pts.filter((t) => !t.a).reduce((m, t) => (t.v < m.v ? t : m), { p: 0, q: 1, v: Infinity, a: false });
  const fm = (z: number) => fmtNum(Number(z.toFixed(6)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Rational numbers near the square root of 2, coloured by side of the cut" style={{ width: "100%", display: "block" }}>
        <line x1={X0} y1={110} x2={X1} y2={110} style={{ stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        <line x1={X(Math.SQRT2)} y1={20} x2={X(Math.SQRT2)} y2={135} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 4" }} />
        <text x={X(Math.SQRT2)} y={152} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>where √2 would be</text>
        {pts.map((t) => (
          <circle key={`${t.p}/${t.q}`} cx={X(t.v)} cy={110 - 4 * t.q - 4} r={2.6}
            style={{ fill: t.a ? "var(--accent)" : "var(--danger)" }} />
        ))}
        {[1.3, 1.35, 1.4, 1.45, 1.5, 1.55].map((v) => (
          <text key={v} x={X(v)} y={126} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-faint)" }}>{v}</text>
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>largest denominator N: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={24} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>largest of these in A (q² &lt; 2)</td><td className="mono">{maxA.q ? `${maxA.p}/${maxA.q} = ${fm(maxA.v)}` : "none"}</td></tr>
          <tr><td>smallest of these in B (q² &gt; 2)</td><td className="mono">{Number.isFinite(minB.v) ? `${minB.p}/${minB.q} = ${fm(minB.v)}` : "none"}</td></tr>
          <tr><td>width of the gap between them</td><td className="mono">{Number.isFinite(minB.v) && Number.isFinite(maxA.v) ? fm(minB.v - maxA.v) : "?"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each dot is a fraction p/q, raised by its denominator, coloured by the side of the cut. Allowing larger denominators
        narrows the gap, but A never gets a largest element and B never a smallest: no rational has square 2. Dedekind&rsquo;s
        idea is to take the cut itself, the pair (A, B), as the number √2.
      </figcaption>
    </figure>
  );
}
