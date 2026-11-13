"use client";

import { useState } from "react";

const PRESETS = [
  { label: "wave", A: 1, B: 0, C: -1 },
  { label: "heat", A: 1, B: 0, C: 0 },
  { label: "Laplace", A: 1, B: 0, C: 1 },
];

/** A uₓₓ + B uₓᵧ + C uᵧᵧ: the sign of B² − 4AC decides the type and the characteristic directions. */
export function PdeTypeViz() {
  const [A, setA] = useState(1);
  const [B, setB] = useState(1);
  const [C, setC] = useState(-2);
  const D = B * B - 4 * A * C;
  const eps = 1e-9;
  const type = D > eps ? "hyperbolic" : D < -eps ? "elliptic" : "parabolic";
  const dirs: [number, number][] = [];
  if (A === 0 && B === 0 && C === 0) {
    // no equation
  } else if (Math.abs(A) < eps) {
    dirs.push([0, 1]);
    if (Math.abs(B) > eps) dirs.push([B, C]);
  } else if (D >= -eps) {
    const r = Math.sqrt(Math.max(0, D));
    const m1 = (B + r) / (2 * A), m2 = (B - r) / (2 * A);
    dirs.push([1, m1]);
    if (r > eps) dirs.push([1, m2]);
  }
  const cx = 130, cy = 125, R = 100;
  const lines = dirs.flatMap(([dx, dy], k) => {
    const n = Math.hypot(dx, dy), ux = dx / n, uy = dy / n;
    return Array.from({ length: 9 }, (_, j) => {
      const off = (j - 4) * 22;
      const ox = -uy * off, oy = ux * off;
      return { k, x1: cx + ox - ux * 160, y1: cy - (oy - uy * 160), x2: cx + ox + ux * 160, y2: cy - (oy + uy * 160) };
    });
  });
  const set = (p: { A: number; B: number; C: number }) => { setA(p.A); setB(p.B); setC(p.C); };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Presets">
        {PRESETS.map((p) => <button key={p.label} type="button" aria-pressed={A === p.A && B === p.B && C === p.C} className={A === p.A && B === p.B && C === p.C ? "seg is-on" : "seg"} onClick={() => set(p)}>{p.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>A: <span className="mono">{A.toFixed(1)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={A} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>B: <span className="mono">{B.toFixed(1)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={B} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>C: <span className="mono">{C.toFixed(1)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={C} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 250" role="img" aria-label="Characteristic lines of the equation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><clipPath id="pdetype-clip"><rect x={cx - R} y={cy - R} width={2 * R} height={2 * R} /></clipPath></defs>
        <rect x={cx - R} y={cy - R} width={2 * R} height={2 * R} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
        <g clipPath="url(#pdetype-clip)">
          {lines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} style={{ stroke: l.k === 0 ? "var(--accent)" : "var(--text-muted)", strokeWidth: 1.8 }} />)}
        </g>
        {lines.length === 0 && <text x={cx} y={cy + 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>no real characteristics</text>}
        <text x={cx + R - 4} y={cy + R + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x →</text>
        <text x={cx - R - 6} y={cy - R + 10} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>y ↑</text>
        <text x={270} y={60} style={{ fill: "var(--text)", fontSize: 13 }}>{A.toFixed(1)} uₓₓ {B < 0 ? "−" : "+"} {Math.abs(B).toFixed(1)} uₓᵧ {C < 0 ? "−" : "+"} {Math.abs(C).toFixed(1)} uᵧᵧ = 0</text>
        <text x={270} y={96} style={{ fill: "var(--text)", fontSize: 13 }}>B² − 4AC = {(Math.abs(D) < eps ? 0 : D).toFixed(2)}</text>
        <text x={270} y={130} style={{ fill: "var(--text)", fontSize: 15, fontWeight: 700 }}>{type}</text>
        <text x={270} y={164} style={{ fill: "var(--text)", fontSize: 13 }}>real characteristic directions: {dirs.length}</text>
      </svg>
      <figcaption className="viz-caption">
        Characteristics are the curves along which the equation fails to determine the second derivatives across them; for
        constant coefficients they are straight lines with slope dy/dx solving A m² − B m + C = 0. Two real families make the
        equation hyperbolic, like the wave equation; one makes it parabolic, like the heat equation; none makes it elliptic,
        like Laplace&rsquo;s equation.
      </figcaption>
    </figure>
  );
}
