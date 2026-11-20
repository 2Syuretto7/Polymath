"use client";

import { useState } from "react";

export function classify(l: number, m: number) {
  const a = Math.abs(l), b = Math.abs(m), e = 1e-9;
  if (Math.abs(a - 1) < e || Math.abs(b - 1) < e) return "not hyperbolic: an eigenvalue has modulus 1";
  if (a < 1 && b < 1) return "hyperbolic sink: every orbit near 0 converges to it";
  if (a > 1 && b > 1) return "hyperbolic source: every orbit near 0 leaves";
  return "hyperbolic saddle: one direction contracts, the other expands";
}

/** Orbits of (x, y) ↦ (λx, μy), optionally with a quadratic term, near the fixed point 0. */
export function HyperbolicMapViz() {
  const [l, setL] = useState(2);
  const [m, setM] = useState(0.5);
  const [nl, setNl] = useState(false);
  const F = ([x, y]: number[]) => [l * x, m * y + (nl ? x * x : 0)];
  const starts = Array.from({ length: 12 }, (_, i) => { const t = (2 * Math.PI * (i + 0.5)) / 12; return [0.9 * Math.cos(t), 0.9 * Math.sin(t)]; })
    .concat(Array.from({ length: 6 }, (_, i) => { const t = (2 * Math.PI * (i + 0.25)) / 6; return [0.08 * Math.cos(t), 0.08 * Math.sin(t)]; }));
  const S = 100, C = 120;
  const P = (p: number[]) => [C + p[0] * S, C - p[1] * S];
  const inBox = (p: number[]) => Math.abs(p[0]) < 1.15 && Math.abs(p[1]) < 1.15;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>λ = {l.toFixed(1).replace("-", "−")} <input type="range" min={-2} max={2} step={0.1} value={l} onChange={(e) => setL(Number(e.target.value))} aria-label="lambda" /></label>
        <label>μ = {m.toFixed(1).replace("-", "−")} <input type="range" min={-2} max={2} step={0.1} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="mu" /></label>
      </div>
      <div className="segmented" role="group" aria-label="map">
        <button type="button" aria-pressed={!nl} className={!nl ? "seg is-on" : "seg"} onClick={() => setNl(false)}>linear (λx, μy)</button>
        <button type="button" aria-pressed={nl} className={nl ? "seg is-on" : "seg"} onClick={() => setNl(true)}>with a term: (λx, μy + x²)</button>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="Orbits near a fixed point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={C - 1.15 * S} y={C - 1.15 * S} width={2.3 * S} height={2.3 * S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <line x1={C - 1.15 * S} y1={C} x2={C + 1.15 * S} y2={C} style={{ stroke: "var(--border-strong)" }} />
        <line x1={C} y1={C - 1.15 * S} x2={C} y2={C + 1.15 * S} style={{ stroke: "var(--border-strong)" }} />
        {starts.map((p0, i) => {
          const pts: number[][] = [p0];
          for (let k = 0; k < 14; k++) { const q = F(pts[pts.length - 1]); if (!inBox(q)) break; pts.push(q); }
          return (
            <g key={i}>
              {pts.map((p, j) => <circle key={j} cx={P(p)[0]} cy={P(p)[1]} r={j === 0 ? 3.5 : 2.2} style={{ fill: j === 0 ? "var(--text-muted)" : "var(--accent)", opacity: 1 - j * 0.05 }} />)}
              <path d={pts.map((p, j) => `${j ? "L" : "M"}${P(p)[0].toFixed(1)},${P(p)[1].toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 0.7, opacity: 0.5 }} />
            </g>
          );
        })}
        <circle cx={C} cy={C} r={4} style={{ fill: "var(--danger)" }} />
        <text x={260} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>Derivative at 0: diag({l.toFixed(1).replace("-", "−")}, {m.toFixed(1).replace("-", "−")})</text>
        <text x={260} y={62} style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey: starting points; blue: up to 14 iterates</text>
        <text x={260} y={84} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Unstable directions: {[l, m].filter((v) => Math.abs(v) > 1 + 1e-9).length}; stable: {[l, m].filter((v) => Math.abs(v) < 1 - 1e-9).length}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>The fixed point 0 is a {classify(l, m)}.</p>
      <figcaption className="viz-caption">
        A fixed point is hyperbolic when no eigenvalue of the derivative there has modulus 1. The Hartman–Grobman theorem
        says that near such a point the map is topologically conjugate to its linear part: switch on the quadratic term
        and the orbits bend, but the picture near 0 keeps its shape. Move an eigenvalue to ±1 and the linear part no
        longer decides.
      </figcaption>
    </figure>
  );
}
