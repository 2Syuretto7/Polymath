"use client";

import { useState } from "react";

type F = "gauss" | "exp" | "box";
const NAMES: Record<F, string> = { gauss: "Gaussian", exp: "two-sided exponential", box: "box" };

/** f and its transform f̂(ξ) = ∫ f(x) exp(−ixξ) dx, both real here, for width s. */
export function pair(k: F, s: number) {
  if (k === "gauss") return { f: (x: number) => Math.exp(-(x * x) / (2 * s * s)), F: (w: number) => s * Math.sqrt(2 * Math.PI) * Math.exp(-(s * s * w * w) / 2), dx: s / Math.SQRT2, dw: 1 / (s * Math.SQRT2) };
  if (k === "exp") return { f: (x: number) => Math.exp(-Math.abs(x) / s), F: (w: number) => (2 * s) / (1 + s * s * w * w), dx: s / Math.SQRT2, dw: 1 / s };
  return { f: (x: number) => (Math.abs(x) <= s ? 1 : 0), F: (w: number) => (Math.abs(w) < 1e-9 ? 2 * s : (2 * Math.sin(s * w)) / w), dx: s / Math.sqrt(3), dw: Infinity };
}

/** Plancherel's two sides by the midpoint rule: ∫|f|² dx and (1/2π)∫|f̂|² dξ. */
export function plancherel(k: F, s: number) {
  const { f, F } = pair(k, s);
  let a = 0, b = 0;
  const M = 40000, X = 40 * s, W = 400 / s;
  for (let i = 0; i < M; i++) { const x = -X + ((i + 0.5) * 2 * X) / M; a += f(x) ** 2 * ((2 * X) / M); const w = -W + ((i + 0.5) * 2 * W) / M; b += F(w) ** 2 * ((2 * W) / M); }
  return { lhs: a, rhs: b / (2 * Math.PI) };
}

export function UncertaintyViz() {
  const [k, setK] = useState<F>("gauss");
  const [s, setS] = useState(1);
  const P = pair(k, s);
  const pl = plancherel(k, s);
  const fx = (x: number) => 20 + ((x + 6) / 12) * 230, fy = (v: number) => 200 - v * 150;
  const Fmax = P.F(0);
  const gx = (w: number) => 290 + ((w + 12) / 24) * 230, gy = (v: number) => 140 - (v / Fmax) * 90;
  const curve = (h: (t: number) => number, lo: number, hi: number, X: (t: number) => number, Y: (v: number) => number) => Array.from({ length: 401 }, (_, i) => lo + (i / 400) * (hi - lo)).map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(h(t)).toFixed(1)}`).join("");
  const prod = P.dx * P.dw;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {(Object.keys(NAMES) as F[]).map((key) => <button key={key} type="button" aria-pressed={k === key} className={k === key ? "seg is-on" : "seg"} onClick={() => setK(key)}>{NAMES[key]}</button>)}
      </div>
      <div className="viz-controls">
        <label>width s = {s.toFixed(2)} <input type="range" min={0.25} max={3} step={0.25} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="width" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="A function and its Fourier transform" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={200} x2={250} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <path d={curve(P.f, -6, 6, fx, fy)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={20} y={30} style={{ fill: "var(--accent)", fontSize: 11 }}>f(x), x from −6 to 6</text>
        <line x1={290} y1={140} x2={520} y2={140} style={{ stroke: "var(--border-strong)" }} />
        <path d={curve(P.F, -12, 12, gx, gy)} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2 }} />
        <text x={290} y={30} style={{ fill: "var(--success)", fontSize: 11 }}>f̂(ξ), ξ from −12 to 12 (rescaled)</text>
        <text x={20} y={240} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Δx = {P.dx.toFixed(3)}</text>
        <text x={290} y={240} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Δξ = {Number.isFinite(P.dw) ? P.dw.toFixed(3) : "∞ (|f̂|² decays only like 1/ξ²)"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Plancherel: ∫|f|² = {pl.lhs.toFixed(3)}, (1/2π)∫|f̂|² = {pl.rhs.toFixed(3)}. Δx · Δξ = {Number.isFinite(prod) ? prod.toFixed(3) : "∞"} ≥ 0.5.
      </p>
      <figcaption className="viz-caption">
        With f̂(ξ) = ∫ f(x) exp(−ixξ) dx, Plancherel&rsquo;s theorem says ∫|f|² = (1/2π)∫|f̂|²: the transform preserves
        energy. Here Δx and Δξ are the standard deviations of |f|² and |f̂|² as distributions. Their product is at least
        ½, with equality exactly for Gaussians: a function and its transform cannot both be concentrated. (The right side is computed over a finite range of ξ, so for the box it falls slightly short.)
      </figcaption>
    </figure>
  );
}
