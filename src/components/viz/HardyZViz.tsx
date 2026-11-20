"use client";

import { useMemo, useState } from "react";
import { zeta } from "./ZetaModulusViz";

/** The Riemann–Siegel theta function, by its asymptotic expansion. */
export const rsTheta = (t: number) => (t / 2) * Math.log(t / (2 * Math.PI)) - t / 2 - Math.PI / 8 + 1 / (48 * t) + 7 / (5760 * t ** 3);
/** Hardy’s Z(t) = exp(iθ(t)) ζ(½ + it), which is real for real t. */
export const hardyZ = (t: number) => { const [a, b] = zeta([0.5, t]), th = rsTheta(t); return a * Math.cos(th) - b * Math.sin(th); };
/** Zeros of Z on (5, T], located by sign changes. */
export function signChanges(T: number) {
  const out: number[] = [];
  let prev = hardyZ(5);
  for (let t = 5.02; t <= T; t += 0.02) { const v = hardyZ(t); if (v * prev < 0) out.push(t); prev = v; }
  return out;
}
/** The Riemann–von Mangoldt main term for the number of zeros with height up to T. */
export const rvm = (T: number) => (T / (2 * Math.PI)) * Math.log(T / (2 * Math.PI * Math.E)) + 7 / 8;

/** Hardy’s Z function: each sign change is a zero of ζ on the critical line. */
export function HardyZViz() {
  const [T, setT] = useState(50);
  const pts = useMemo(() => Array.from({ length: 2751 }, (_, i) => { const t = 5 + i * 0.02; return [t, hardyZ(t)] as const; }), []);
  const zs = useMemo(() => signChanges(60), []);
  const below = zs.filter((z) => z <= T).length;
  const px = (t: number) => 40 + ((t - 5) / 55) * 470, py = (v: number) => 110 - v * 22;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>T = {T} <input type="range" min={15} max={60} step={1} value={T} onChange={(e) => setT(Number(e.target.value))} aria-label="T" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Hardy's Z function along the critical line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(5)} y={10} width={px(T) - px(5)} height={200} style={{ fill: "var(--accent-soft)", opacity: 0.35 }} />
        <line x1={40} y1={py(0)} x2={510} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 2, 4].map((v) => <text key={v} x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        {[10, 20, 30, 40, 50, 60].map((t) => <text key={t} x={px(t)} y={218} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(Math.max(-4.5, Math.min(4.5, p[1]))).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        {zs.map((z) => <circle key={z} cx={px(z)} cy={py(0)} r={3.5} style={{ fill: z <= T ? "var(--danger)" : "var(--text-faint)" }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {below} sign changes with t ≤ {T}; the Riemann–von Mangoldt formula predicts about {rvm(T).toFixed(1)} zeros up to height {T}.
      </p>
      <figcaption className="viz-caption">
        Z(t) is real and has the same absolute value as ζ(½ + it), so each sign change is a zero exactly on the critical
        line. Comparing the number of sign changes with the total count of zeros in the strip, given by Riemann and von
        Mangoldt, is how the hypothesis has been checked for the first ten trillion zeros.
      </figcaption>
    </figure>
  );
}
