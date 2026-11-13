"use client";

import { useState } from "react";

type Fn = { name: string; f: (x: number) => number; coef: (k: number) => [number, number]; norm2: number };
// On [−π, π] with the orthonormal basis 1/√(2π), cos(kx)/√π, sin(kx)/√π.
const FNS: Fn[] = [
  { name: "square wave", f: (x) => (x >= 0 ? 1 : -1), coef: (k) => [0, k % 2 === 1 ? 4 / (Math.PI * k) : 0], norm2: 2 * Math.PI },
  { name: "sawtooth", f: (x) => x, coef: (k) => [0, (2 * (k % 2 === 1 ? 1 : -1)) / k], norm2: (2 * Math.PI ** 3) / 3 },
  { name: "triangle", f: (x) => Math.abs(x), coef: (k) => [k % 2 === 1 ? -4 / (Math.PI * k * k) : 0, 0], norm2: (2 * Math.PI ** 3) / 3 },
];
const a0 = [0, 0, Math.PI / 2];

/** Orthonormal expansion in trigonometric functions: partial sums and Bessel's inequality. */
export function FourierViz() {
  const [fi, setFi] = useState(0);
  const [n, setN] = useState(5);
  const F = FNS[fi];
  const S = (x: number) => { let s = a0[fi]; for (let k = 1; k <= n; k++) { const [a, b] = F.coef(k); s += a * Math.cos(k * x) + b * Math.sin(k * x); } return s; };
  // energy captured: ‖proj‖² = 2π a0² + π Σ (a² + b²)
  let cap = 2 * Math.PI * a0[fi] ** 2;
  for (let k = 1; k <= n; k++) { const [a, b] = F.coef(k); cap += Math.PI * (a * a + b * b); }
  const W = 520, H = 200, ymax = fi === 0 ? 1.5 : 3.6, ymin = fi === 2 ? -0.3 : -ymax;
  const X = (x: number) => 20 + ((x + Math.PI) / (2 * Math.PI)) * (W - 40);
  const Y = (y: number) => 10 + ((ymax - y) / (ymax - ymin)) * (H - 20);
  const path = (g: (x: number) => number) => Array.from({ length: 401 }, (_, i) => { const x = -Math.PI + (i / 400) * 2 * Math.PI; return `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`; }).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FNS.map((x, i) => <button key={x.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>frequencies used, up to k = <span className="mono">{n}</span></span>
          <input type="range" min={0} max={40} value={n} onChange={(e) => setN(Math.round(Number(e.target.value)))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A function and its projection onto the first trigonometric functions" style={{ width: "100%", display: "block" }}>
        <line x1={20} y1={Y(0)} x2={W - 20} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(F.f)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={path(S)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        ‖projection‖² = {cap.toFixed(3)} ≤ ‖f‖² = {F.norm2.toFixed(3)} ({((cap / F.norm2) * 100).toFixed(1)}% captured)
      </p>
      <figcaption className="viz-caption">
        With the inner product ⟨f, g⟩ = ∫ f g over [−π, π], the functions 1, cos kx and sin kx are orthogonal. The coloured curve is the orthogonal projection of f onto the first few of them, built from the coefficients ⟨f, eₖ⟩. Bessel&rsquo;s inequality says the captured squared length never exceeds ‖f‖²; as more frequencies are added it approaches it.
      </figcaption>
    </figure>
  );
}
