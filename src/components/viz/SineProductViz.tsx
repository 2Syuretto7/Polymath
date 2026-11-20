"use client";

import { useMemo, useState } from "react";

/** The partial product πx Π over n ≤ N of (1 − x²/n²). */
export const partialProduct = (x: number, N: number) => { let p = Math.PI * x; for (let n = 1; n <= N; n++) p *= 1 - (x * x) / (n * n); return p; };
/** Π over n ≤ N of (1 − 1/(4n²)), which tends to 2/π (Wallis). */
export const wallis = (N: number) => { let p = 1; for (let n = 1; n <= N; n++) p *= 1 - 1 / (4 * n * n); return p; };

/** Euler’s product for sin πx: a Weierstrass product built from the zeros at the integers. */
export function SineProductViz() {
  const [N, setN] = useState(3);
  const xs = useMemo(() => Array.from({ length: 701 }, (_, i) => -3.5 + i * 0.01), []);
  const px = (x: number) => 40 + ((x + 3.5) / 7) * 470, py = (v: number) => 110 - v * 45;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>factors N = {N} <input type="range" min={0} max={30} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Partial products against the sine function" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={py(0)} x2={510} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        {[-3, -2, -1, 0, 1, 2, 3].map((x) => (
          <g key={x}>
            <circle cx={px(x)} cy={py(0)} r={3} style={{ fill: Math.abs(x) <= N ? "var(--success)" : "var(--text-faint)" }} />
            <text x={px(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>
          </g>
        ))}
        {[-2, -1, 1, 2].map((v) => <text key={v} x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${py(Math.sin(Math.PI * x)).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 4, opacity: 0.45 }} />
        <path d={xs.map((x, i) => { const v = partialProduct(x, N), prev = i ? partialProduct(xs[i - 1], N) : NaN; return Math.abs(v) > 2.2 ? "" : `${i && Math.abs(prev) <= 2.2 ? "L" : "M"}${px(x).toFixed(1)},${py(v).toFixed(1)}`; }).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />
        <text x={46} y={18} style={{ fill: "var(--success)", fontSize: 10 }}>thick green: sin πx</text>
        <text x={170} y={18} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: πx times the first N factors</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At x = ½ the partial product is {partialProduct(0.5, N).toFixed(4)}; sin(π/2) = 1. Π (1 − 1/4n²) up to N = {wallis(N).toFixed(4)}, tending to 2/π = {(2 / Math.PI).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Each factor 1 − x²/n² puts zeros at ±n, and the product converges because Σ 1/n² does. Euler&rsquo;s identity
        sin πx = πx Π (1 − x²/n²) says that the sine function is determined by its zeros, up to the factor π. Setting
        x = ½ gives Wallis&rsquo;s product for π/2.
      </figcaption>
    </figure>
  );
}
