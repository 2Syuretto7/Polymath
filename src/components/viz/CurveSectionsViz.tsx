"use client";

import { useState } from "react";

/** The range of ℓ(D) allowed by Riemann-Roch and Clifford for a divisor of degree d on a curve of genus g. */
export function range(g: number, d: number): [number, number] {
  if (d < 0) return [0, 0];
  if (d > 2 * g - 2) return [d - g + 1, d - g + 1];
  return [Math.max(0, d - g + 1), Math.floor(d / 2) + 1];
}

export function CurveSectionsViz() {
  const [g, setG] = useState(2);
  const [d, setD] = useState(5);
  const [lo, hi] = range(g, d);
  const X = (t: number) => 50 + (t + 2) * 32;
  const Y = (v: number) => 200 - v * 16;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>genus g = {g} <input type="range" min={0} max={4} step={1} value={g} onChange={(e) => setG(Number(e.target.value))} aria-label="g" /></label>
        <label>degree d = {d} <input type="range" min={-2} max={12} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="The possible values of l(D) against the degree of D" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={530} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={205} x2={X(0)} y2={20} style={{ stroke: "var(--border-strong)" }} />
        {g > 0 && <rect x={X(0) - 10} y={20} width={X(2 * g - 2) - X(0) + 20} height={180} style={{ fill: "var(--bg-subtle)" }} />}
        {g > 0 && <text x={X(g - 1)} y={34} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>special range 0 ≤ d ≤ 2g − 2</text>}
        {Array.from({ length: 15 }, (_, i) => i - 2).map((t) => {
          const [a, b] = range(g, t);
          const on = t === d;
          return (
            <g key={t} onClick={() => setD(t)} style={{ cursor: "pointer" }}>
              {a !== b && <line x1={X(t)} y1={Y(a)} x2={X(t)} y2={Y(b)} style={{ stroke: "var(--accent)", strokeWidth: 6, opacity: on ? 1 : 0.35, strokeLinecap: "round" }} />}
              {a === b && <circle cx={X(t)} cy={Y(a)} r={on ? 6 : 4} style={{ fill: "var(--success)", opacity: on ? 1 : 0.45 }} />}
              <text x={X(t)} y={216} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 10, fontWeight: on ? 700 : 400 }}>{t}</text>
            </g>
          );
        })}
        <text x={16} y={30} style={{ fill: "var(--text-muted)", fontSize: 11 }}>ℓ(D)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        g = {g}, deg D = {d}: {lo === hi ? `ℓ(D) = ${lo}` : `${lo} ≤ ℓ(D) ≤ ${hi}, depending on D`}.
      </p>
      <figcaption className="viz-caption">
        Riemann-Roch says ℓ(D) − ℓ(K − D) = deg D − g + 1. Above degree 2g − 2, K − D has negative degree, so ℓ(K − D) = 0 and
        ℓ(D) is determined by the degree alone. In the special range it depends on the divisor itself, between the
        Riemann-Roch lower bound and Clifford&rsquo;s upper bound.
      </figcaption>
    </figure>
  );
}
