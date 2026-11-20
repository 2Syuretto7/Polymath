"use client";

import { useState } from "react";

/** exp: sl(2, ℝ) → SL(2, ℝ) is not onto: the trace of exp X is never below −2. */
export function ExpImageViz() {
  const [a100, setA] = useState(0);
  const [b100, setB] = useState(100);
  const [c100, setC] = useState(-100);
  const a = a100 / 100, b = b100 / 100, c = c100 / 100;
  const D = a * a + b * c; // X² = D·I
  let co: number, si: number; // exp X = co·I + si·X
  if (D > 1e-9) { const r = Math.sqrt(D); co = Math.cosh(r); si = Math.sinh(r) / r; }
  else if (D < -1e-9) { const r = Math.sqrt(-D); co = Math.cos(r); si = Math.sin(r) / r; }
  else { co = 1; si = 1; }
  const E = [[co + si * a, si * b], [si * c, co - si * a]];
  const tr = E[0][0] + E[1][1];
  const X0 = 30, W = 460, lo = -6, hi = 8;
  const x = (v: number) => X0 + ((v - lo) / (hi - lo)) * W;
  const f = (v: number) => (v < 0 ? `−${(-v).toFixed(3)}` : v.toFixed(3));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>a = {a.toFixed(2)} <input type="range" min={-300} max={300} value={a100} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>b = {b.toFixed(2)} <input type="range" min={-500} max={500} value={b100} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
        <label>c = {c.toFixed(2)} <input type="range" min={-500} max={500} value={c100} onChange={(e) => setC(Number(e.target.value))} aria-label="c" /></label>
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="The trace of exp X on a number line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={x(lo)} y={30} width={x(-2) - x(lo)} height={16} style={{ fill: "var(--danger-soft)" }} />
        <line x1={x(lo)} y1={38} x2={x(hi)} y2={38} style={{ stroke: "var(--border-strong)" }} />
        {[-6, -4, -2, 0, 2, 4, 6, 8].map((v) => <g key={v}><line x1={x(v)} y1={34} x2={x(v)} y2={42} style={{ stroke: "var(--border-strong)" }} /><text x={x(v)} y={60} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v < 0 ? `−${-v}` : v}</text></g>)}
        <text x={x(-4)} y={22} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 11 }}>trace &lt; −2: never reached</text>
        <circle cx={x(Math.max(lo, Math.min(hi, tr)))} cy={38} r={6} style={{ fill: "var(--accent)" }} />
        <text x={x(Math.max(lo, Math.min(hi, tr)))} y={80} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11 }}>tr exp X</text>
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div>X = [{f(a)}, {f(b)}; {f(c)}, {f(-a)}], X² = {f(D)}·I, so X is {D > 1e-9 ? "hyperbolic" : D < -1e-9 ? "elliptic" : "nilpotent"}.</div>
        <div>exp X = [{f(E[0][0])}, {f(E[0][1])}; {f(E[1][0])}, {f(E[1][1])}]</div>
        <div style={{ fontWeight: 700 }}>trace = {f(tr)}{D > 1e-9 ? " = 2 cosh √(a² + bc)" : D < -1e-9 ? " = 2 cos √−(a² + bc)" : " = 2"}</div>
      </div>
      <figcaption className="viz-caption">
        Every X in sl(2, ℝ) satisfies X² = (a² + bc)I, so exp X = cosh·I + sinh·X or cos·I + sin·X, and its trace is
        2 cosh r ≥ 2 or 2 cos r ≥ −2. So diag(−2, −1/2), with determinant 1 and trace −2.5, is in SL(2, ℝ) but is not
        the exponential of anything.
      </figcaption>
    </figure>
  );
}
