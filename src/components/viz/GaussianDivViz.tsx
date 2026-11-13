"use client";

import { useState } from "react";

/** Division with remainder in the Gaussian integers: round α/β to the nearest lattice point. */
export function GaussianDivViz() {
  const [a, setA] = useState(7);
  const [b, setB] = useState(4);
  const [c, setC] = useState(2);
  const [d, setD] = useState(1);
  const nb = c * c + d * d || 1;
  const qr = (a * c + b * d) / nb, qi = (b * c - a * d) / nb;
  const q = [Math.round(qr), Math.round(qi)];
  const qb = [q[0] * c - q[1] * d, q[0] * d + q[1] * c];
  const r = [a - qb[0], b - qb[1]];
  const N = (x: number[]) => x[0] * x[0] + x[1] * x[1];
  const S = 14, W = 340, o = W / 2;
  const P = (x: number, y: number) => [o + x * S * 0.9 / 1, o - y * S * 0.9];
  const lattice: [number, number][] = [];
  for (let m = -8; m <= 8; m++) for (let n = -8; n <= 8; n++) {
    const x = m * c - n * d, y = m * d + n * c;
    if (Math.abs(x) <= 11 && Math.abs(y) <= 11) lattice.push([x, y]);
  }
  const fmt = (x: number, y: number) => (y === 0 ? `${x}` : x === 0 ? `${y}i` : `${x} ${y < 0 ? "−" : "+"} ${Math.abs(y)}i`);
  const [ax, ay] = P(a, b), [qx, qy] = P(qb[0], qb[1]);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>α real: <span className="mono">{a}</span></span><input type="range" min={-10} max={10} value={a} onChange={(e) => setA(Math.round(Number(e.target.value)))} /></label>
        <label><span>α imaginary: <span className="mono">{b}</span></span><input type="range" min={-10} max={10} value={b} onChange={(e) => setB(Math.round(Number(e.target.value)))} /></label>
        <label><span>β real: <span className="mono">{c}</span></span><input type="range" min={-4} max={4} value={c} onChange={(e) => setC(Math.round(Number(e.target.value)))} /></label>
        <label><span>β imaginary: <span className="mono">{d}</span></span><input type="range" min={-4} max={4} value={d} onChange={(e) => setD(Math.round(Number(e.target.value)))} /></label>
      </div>
      {c === 0 && d === 0 ? <p>Choose a non-zero β.</p> : <>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Multiples of β in the Gaussian integers" style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
          <line x1={0} y1={o} x2={W} y2={o} className="viz-axis" style={{ stroke: "var(--border)" }} />
          <line x1={o} y1={0} x2={o} y2={W} className="viz-axis" style={{ stroke: "var(--border)" }} />
          {lattice.map(([x, y], i) => { const [px, py] = P(x, y); return <circle key={i} cx={px} cy={py} r={3} style={{ fill: "var(--text-faint)" }} />; })}
          <line x1={qx} y1={qy} x2={ax} y2={ay} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
          <circle cx={qx} cy={qy} r={5} style={{ fill: "var(--accent)" }} />
          <circle cx={ax} cy={ay} r={5} style={{ fill: "var(--text)" }} />
          <text x={ax + 7} y={ay - 6} style={{ fill: "var(--text)", fontSize: 12 }}>α</text>
          <text x={qx + 7} y={qy + 14} style={{ fill: "var(--accent)", fontSize: 12 }}>qβ</text>
        </svg>
        <p className="mono" style={{ margin: "4px 0" }}>
          α/β = {qr.toFixed(2)} + {qi.toFixed(2)}i, round to q = {fmt(q[0], q[1])}
        </p>
        <p className="mono" style={{ margin: "4px 0" }}>
          r = α − qβ = {fmt(r[0], r[1])}; N(r) = {N(r)} &lt; N(β) = {nb}
        </p>
      </>}
      <figcaption className="viz-caption">
        Grey dots are the multiples of β, a square grid. The nearest grid point to α is qβ, and the red segment is the
        remainder. Since α/β is within distance √2/2 of a Gaussian integer, N(r) ≤ N(β)/2, so the remainder is always
        smaller than the divisor. This is what makes ℤ[i] a Euclidean domain.
      </figcaption>
    </figure>
  );
}
