"use client";

import { useMemo, useState } from "react";

type F = "gauss" | "lorentz" | "laplace";
const LABEL: Record<F, string> = { gauss: "exp(−x²/2)", lorentz: "1/(1 + x²)", laplace: "exp(−|x|)" };

/** Probabilists' Hermite polynomial Heₙ, so that the n-th derivative of exp(−x²/2) is (−1)ⁿ Heₙ(x) exp(−x²/2). */
const he = (n: number, x: number) => { let a = 1, b = x; if (n === 0) return 1; for (let k = 1; k < n; k++) { const c = x * b - k * a; a = b; b = c; } return b; };
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));

/** The b-th derivative of f at x (null where it does not exist). */
export function deriv(f: F, b: number, x: number): number | null {
  if (f === "gauss") return (b % 2 ? -1 : 1) * he(b, x) * Math.exp(-x * x / 2);
  if (f === "laplace") { if (b > 0 && Math.abs(x) < 1e-12) return null; return (x > 0 && b % 2 ? -1 : 1) * Math.exp(-Math.abs(x)); }
  // 1/(1 + x²) = ½(1/(1 − ix) + 1/(1 + ix)); the b-th derivative of 1/(1 ∓ ix) is b! (±i)ᵇ / (1 ∓ ix)ᵇ⁺¹.
  const r = Math.hypot(1, x), th = Math.atan(x);
  return fact(b) * Math.cos(b * (Math.PI / 2) + (b + 1) * th) / r ** (b + 1);
}

/** sup over a grid of |x|ᵃ |f⁽ᵇ⁾(x)|, with x up to R. */
export function seminorm(f: F, a: number, b: number, R: number) {
  let m = 0;
  const M = Math.max(4000, Math.round(R * 50));
  for (let i = 0; i <= M; i++) { const x = -R + (2 * R * i) / M; const d = deriv(f, b, x); if (d !== null) m = Math.max(m, Math.abs(x) ** a * Math.abs(d)); }
  return m;
}

/** Schwartz seminorms sup |xᵃ f⁽ᵇ⁾(x)| for three functions: only the Gaussian keeps them all finite. */
export function SchwartzSeminormViz() {
  const [f, setF] = useState<F>("gauss");
  const [a, setA] = useState(2);
  const [b, setB] = useState(0);
  const sups = useMemo(() => [10, 100, 1000].map((R) => seminorm(f, a, b, R)), [f, a, b]);
  const growing = sups[2] > sups[0] * 1.5;
  const broken = f === "laplace" && b > 0;
  const g = (x: number) => { const d = deriv(f, b, x); return d === null ? NaN : Math.abs(x) ** a * Math.abs(d); };
  const xs = Array.from({ length: 601 }, (_, i) => -10 + (i / 600) * 20);
  const vmax = Math.max(1e-9, ...xs.map(g).filter((v) => Number.isFinite(v))) * 1.1;
  const px = (x: number) => 30 + ((x + 10) / 20) * 480, py = (v: number) => 220 - (v / vmax) * 180;
  const path = xs.map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${py(g(x)).toFixed(1)}`).join("");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {(Object.keys(LABEL) as F[]).map((k) => <button key={k} type="button" aria-pressed={f === k} className={f === k ? "seg is-on" : "seg"} onClick={() => setF(k)}>f = {LABEL[k]}</button>)}
      </div>
      <div className="viz-controls">
        <label>power a = {a} <input type="range" min={0} max={6} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>derivative b = {b} <input type="range" min={0} max={4} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="A weighted derivative of f" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={220} x2={510} y2={220} style={{ stroke: "var(--border-strong)" }} />
        <line x1={px(0)} y1={30} x2={px(0)} y2={220} style={{ stroke: "var(--grid-line)" }} />
        <path d={path} style={{ fill: "none", stroke: growing || broken ? "var(--danger)" : "var(--accent)", strokeWidth: 2 }} />
        {[-10, -5, 0, 5, 10].map((x) => <text key={x} x={px(x)} y={236} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        <text x={30} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>|x|ᵃ |f⁽ᵇ⁾(x)| on [−10, 10]</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {broken
          ? "f is not differentiable at 0, so f is not even smooth."
          : `sup over |x| ≤ 10, 100, 1000: ${sups.map((s) => (s > 1e6 ? s.toExponential(1) : s.toFixed(4))).join(", ")}. ${growing ? "Growing without bound: this seminorm is infinite." : "Settled: this seminorm is finite."}`}
      </p>
      <figcaption className="viz-caption">
        A function is in the Schwartz space when it is smooth and every product of a power of x with a derivative stays
        bounded. The Gaussian passes every test. The function 1/(1 + x²) is smooth but decays only like a power, so x²
        times it already fails to tend to 0 and higher powers blow up. exp(−|x|) decays fast but has a corner.
      </figcaption>
    </figure>
  );
}
