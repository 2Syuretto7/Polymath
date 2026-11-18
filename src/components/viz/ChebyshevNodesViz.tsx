"use client";

import { useState } from "react";
import { Axes, curvePath, scales, type View } from "./Plot";

/** The node polynomial (x − x₀)…(x − xₙ) for equally spaced and Chebyshev nodes. */
export function ChebyshevNodesViz() {
  const [n, setN] = useState(6);
  const m = n + 1;
  const eq = Array.from({ length: m }, (_, i) => -1 + (2 * i) / n);
  const ch = Array.from({ length: m }, (_, i) => Math.cos(((2 * i + 1) * Math.PI) / (2 * m)));
  const w = (nodes: number[]) => (x: number) => nodes.reduce((s, t) => s * (x - t), 1);
  const we = w(eq), wc = w(ch);
  let me = 0, mc = 0;
  for (let k = 0; k <= 4000; k++) { const x = -1 + k / 2000; me = Math.max(me, Math.abs(we(x))); mc = Math.max(mc, Math.abs(wc(x))); }
  const top = me * 1.15;
  const V: View = { xmin: -1, xmax: 1, ymin: -top, ymax: top, w: 560, h: 240 };
  const { X, Y } = scales(V);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>degree n (n + 1 nodes): <span className="mono">{n}</span></span>
          <input type="range" min={2} max={14} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <Axes v={V} label="Node polynomials for equally spaced and Chebyshev nodes" xStep={0.5} yStep={top / 2}>
        <path d={curvePath(V, we, 800)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.8 }} />
        <path d={curvePath(V, wc, 800)} className="plot-curve" />
        <line x1={X(-1)} y1={Y(mc)} x2={X(1)} y2={Y(mc)} style={{ stroke: "var(--accent)", strokeDasharray: "4 4" }} />
        <line x1={X(-1)} y1={Y(-mc)} x2={X(1)} y2={Y(-mc)} style={{ stroke: "var(--accent)", strokeDasharray: "4 4" }} />
        {ch.map((x, i) => <circle key={`c${i}`} cx={X(x)} cy={Y(0)} r={4} className="plot-point" />)}
        {eq.map((x, i) => <circle key={`e${i}`} cx={X(x)} cy={Y(0) + 10} r={3} style={{ fill: "var(--text-muted)" }} />)}
      </Axes>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>largest |ω(x)|, equally spaced nodes: {me.toExponential(3)}</div>
        <div style={{ fontWeight: 700 }}>largest |ω(x)|, Chebyshev nodes: {mc.toExponential(3)} = 2⁻ⁿ = {(2 ** -n).toExponential(3)}</div>
        <div>ratio: {(me / mc).toFixed(2)}</div>
      </div>
      <figcaption className="viz-caption">
        The interpolation error contains the factor ω(x) = (x − x₀)(x − x₁)…(x − xₙ). For equally spaced nodes (grey) it is
        tiny in the middle and large near the ends. Placing the nodes at the zeros of the Chebyshev polynomial Tₙ₊₁ makes ω
        equal to 2⁻ⁿTₙ₊₁, which equioscillates between ±2⁻ⁿ: the smallest maximum any monic polynomial of its degree can
        have.
      </figcaption>
    </figure>
  );
}
