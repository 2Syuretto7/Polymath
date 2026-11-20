"use client";

import { useMemo, useState } from "react";
import { zeta } from "./ZetaModulusViz";

/** Jacobi’s θ(t) = Σ over all integers n of exp(−π n² t). */
export const theta = (t: number) => { let s = 1; for (let n = 1; n < 60; n++) { const v = Math.exp(-Math.PI * n * n * t); s += 2 * v; if (v < 1e-17) break; } return s; };
const LG = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
/** The Gamma function for real x, by Lanczos’s approximation and reflection. */
export function gamma(x: number): number {
  if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  x -= 1;
  let a = 0.99999999999980993;
  const t = x + 7.5;
  for (let i = 0; i < 8; i++) a += LG[i] / (x + i + 1);
  return Math.sqrt(2 * Math.PI) * t ** (x + 0.5) * Math.exp(-t) * a;
}
/** Riemann’s ξ(s) = ½ s(s − 1) π to the −s/2 Γ(s/2) ζ(s), for real s. */
export const xi = (s: number) => 0.5 * s * (s - 1) * Math.PI ** (-s / 2) * gamma(s / 2) * zeta([s, 0])[0];

/** The theta transformation and the symmetry of ξ about s = ½. */
export function ThetaXiViz() {
  const [mode, setMode] = useState(0);
  const [t, setT] = useState(0.5);
  const thetaPts = useMemo(() => Array.from({ length: 300 }, (_, i) => { const x = 0.1 + i * 0.01; return [x, theta(x), theta(1 / x) / Math.sqrt(x)] as const; }), []);
  const xiPts = useMemo(() => Array.from({ length: 701 }, (_, i) => -3 + i * 0.01 + 0.0037).map((s) => [s, xi(s)] as const), []);
  const px1 = (x: number) => 40 + ((x - 0.1) / 2.9) * 470, py1 = (v: number) => 210 - ((v - 0.8) / 2.6) * 190;
  const px2 = (s: number) => 40 + ((s + 3) / 7) * 470, py2 = (v: number) => 210 - ((v - 0.45) / 0.2) * 190;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="view">
        {["θ(t) and θ(1/t)", "ξ on the real line"].map((l, i) => <button key={l} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{l}</button>)}
      </div>
      {mode === 0 && (
        <div className="viz-controls">
          <label>t = {t.toFixed(2)} <input type="range" min={0.1} max={3} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
        </div>
      )}
      <svg viewBox="0 0 540 236" role="img" aria-label={mode === 0 ? "Jacobi theta function and its transform" : "Riemann xi function on the real line"} style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={210} x2={510} y2={210} style={{ stroke: "var(--border-strong)" }} />
        {mode === 0 ? (
          <>
            {[1, 2, 3].map((v) => <text key={v} x={34} y={py1(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
            {[0.5, 1, 1.5, 2, 2.5, 3].map((x) => <text key={x} x={px1(x)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>)}
            <path d={thetaPts.map((p, i) => `${i ? "L" : "M"}${px1(p[0]).toFixed(1)},${py1(Math.min(3.4, p[1])).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4, opacity: 0.5 }} />
            <path d={thetaPts.map((p, i) => `${i ? "L" : "M"}${px1(p[0]).toFixed(1)},${py1(Math.min(3.4, p[2])).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
            <circle cx={px1(t)} cy={py1(Math.min(3.4, theta(t)))} r={5} style={{ fill: "var(--accent)" }} />
            <text x={300} y={30} style={{ fill: "var(--accent)", fontSize: 10 }}>thick: θ(t)</text>
            <text x={380} y={30} style={{ fill: "var(--danger)", fontSize: 10 }}>dashed: θ(1/t)/√t</text>
          </>
        ) : (
          <>
            {[0.5, 0.55, 0.6].map((v) => <text key={v} x={34} y={py2(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
            {[-3, -2, -1, 0, 1, 2, 3, 4].map((x) => <text key={x} x={px2(x)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
            <line x1={px2(0.5)} y1={10} x2={px2(0.5)} y2={210} style={{ stroke: "var(--success)", strokeDasharray: "4 3" }} />
            <text x={px2(0.5) + 4} y={22} style={{ fill: "var(--success)", fontSize: 10 }}>s = ½</text>
            <path d={xiPts.map((p, i) => `${i ? "L" : "M"}${px2(p[0]).toFixed(1)},${py2(Math.min(0.66, p[1])).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
          </>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {mode === 0 ? `θ(${t.toFixed(2)}) = ${theta(t).toFixed(4)} and θ(1/t)/√t = ${(theta(1 / t) / Math.sqrt(t)).toFixed(4)}.` : `ξ(0) = ξ(1) = 0.5000, ξ(½) = ${xi(0.5).toFixed(4)}, ξ(−2) = ξ(3) = ${xi(3).toFixed(4)}.`}
      </p>
      <figcaption className="viz-caption">
        Poisson summation gives θ(1/t) = √t θ(t), so the two curves coincide. Riemann fed this symmetry through the Mellin
        transform to get ξ(s) = ξ(1 − s): the completed zeta function is a mirror image of itself about the line Re s = ½.
      </figcaption>
    </figure>
  );
}
