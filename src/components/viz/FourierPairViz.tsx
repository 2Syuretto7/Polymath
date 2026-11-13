"use client";

import { useState } from "react";

type Kind = "gauss" | "box" | "exp";
const LABEL: Record<Kind, string> = { gauss: "Gaussian", box: "box", exp: "two-sided exponential" };

/** Fourier transform pairs, with f̂(ξ) = ∫ f(x) exp(−ixξ) dx: squeezing a function spreads its transform. */
export function FourierPairViz() {
  const [kind, setKind] = useState<Kind>("gauss");
  const [a, setA] = useState(1);
  const f = (x: number) => (kind === "gauss" ? Math.exp((-x * x) / (2 * a * a)) : kind === "box" ? (Math.abs(x) < a ? 1 : 0) : Math.exp(-Math.abs(x) / a));
  const F = (k: number) =>
    kind === "gauss" ? a * Math.sqrt(2 * Math.PI) * Math.exp((-a * a * k * k) / 2)
    : kind === "box" ? (Math.abs(k) < 1e-9 ? 2 * a : (2 * Math.sin(a * k)) / k)
    : (2 * a) / (1 + a * a * k * k);
  const F0 = F(0);
  const spread = kind === "gauss" ? 0.5 : kind === "exp" ? 1 / Math.sqrt(2) : Infinity;
  const xs = Array.from({ length: 601 }, (_, i) => -8 + (i / 600) * 16);
  const panel = (g: (t: number) => number, x0: number, top: number, bottom: number) => {
    const X = (t: number) => x0 + ((t + 8) / 16) * 230, Y = (v: number) => 170 - ((v - bottom) / (top - bottom)) * 140;
    return {
      axis: <line x1={X(-8)} y1={Y(0)} x2={X(8)} y2={Y(0)} style={{ stroke: "var(--border)" }} />,
      path: xs.map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(g(t)).toFixed(1)}`).join(" "),
    };
  };
  const topF = Math.max(F0, 1);
  const left = panel(f, 15, 1.1, -0.1);
  const right = panel(F, 275, topF * 1.05, kind === "box" ? -topF * 0.3 : -topF * 0.05);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(["gauss", "box", "exp"] as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>width a: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={0.25} max={3} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A function and its Fourier transform side by side" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {left.axis}
        <path d={left.path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        {right.axis}
        <path d={right.path} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={15} y={192} style={{ fill: "var(--text-muted)", fontSize: 11 }}>f(x), x from −8 to 8</text>
        <text x={275} y={192} style={{ fill: "var(--text-muted)", fontSize: 11 }}>f̂(ξ), ξ from −8 to 8</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>f̂(0) = ∫ f dx = {F0.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>
          spread of |f|² × spread of |f̂|² = {Number.isFinite(spread) ? spread.toFixed(4) : "infinite: |f̂|² decays too slowly"}
        </div>
      </div>
      <figcaption className="viz-caption">
        The Gaussian exp(−x²/2a²) has transform a√(2π) exp(−a²ξ²/2), another Gaussian; the box of half-width a has 2 sin(aξ)/ξ;
        the two-sided exponential exp(−|x|/a) has 2a/(1 + a²ξ²). Narrowing f widens f̂ in exact proportion, so the product of
        their spreads (standard deviations of |f|² and |f̂|²) does not depend on a. The uncertainty principle says it is never
        less than ½, and the Gaussian attains it. A jump in f, as for the box, makes f̂ decay slowly.
      </figcaption>
    </figure>
  );
}
