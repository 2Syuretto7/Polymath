"use client";

import { useMemo, useState } from "react";

/** The partial sum 1/x + Σ over 1 ≤ n ≤ N of 2x/(x² − n²). */
export const partialCot = (x: number, N: number) => { let s = 1 / x; for (let n = 1; n <= N; n++) s += (2 * x) / (x * x - n * n); return s; };
export const piCot = (x: number) => Math.PI / Math.tan(Math.PI * x);

/** Mittag-Leffler for π cot πx: a function built from its poles and principal parts. */
export function CotangentSeriesViz() {
  const [N, setN] = useState(2);
  const xs = useMemo(() => Array.from({ length: 1401 }, (_, i) => -3.5 + i * 0.005).filter((x) => Math.abs(x - Math.round(x)) > 0.02), []);
  const px = (x: number) => 40 + ((x + 3.5) / 7) * 470, py = (v: number) => 110 - v * 18;
  const seg = (f: (x: number) => number) => { let d = "", prev = NaN; for (const x of xs) { const v = f(x), ok = Math.abs(v) < 5.5; if (ok) { d += `${Number.isNaN(prev) || Math.round(x) !== Math.round(prev) ? "M" : "L"}${px(x).toFixed(1)},${py(v).toFixed(1)}`; prev = x; } else prev = NaN; } return d; };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>pole pairs N = {N} <input type="range" min={0} max={40} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Partial sums of the partial fraction expansion of the cotangent" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={py(0)} x2={510} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        {[-3, -2, -1, 0, 1, 2, 3].map((x) => (
          <g key={x}>
            <line x1={px(x)} y1={10} x2={px(x)} y2={210} style={{ stroke: Math.abs(x) <= N ? "var(--danger)" : "var(--grid-line)", strokeDasharray: "3 3" }} />
            <text x={px(x)} y={218} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>
          </g>
        ))}
        <path d={seg(piCot)} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 4, opacity: 0.45 }} />
        <path d={seg((x) => partialCot(x, N))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At x = ¼: partial sum {partialCot(0.25, N).toFixed(4)}, π cot(π/4) = π = {Math.PI.toFixed(4)}. Thick green: π cot πx; blue: the partial sum; red lines: poles included so far.
      </p>
      <figcaption className="viz-caption">
        π cot πx has a simple pole with residue 1 at every integer. Pairing the poles at ±n gives 2x/(x² − n²), which
        makes the series converge, and the sum is π cot πx exactly. Mittag-Leffler&rsquo;s theorem says any discrete set of
        poles with prescribed principal parts is realised by some meromorphic function, after subtracting suitable
        polynomials to force convergence.
      </figcaption>
    </figure>
  );
}
