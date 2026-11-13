"use client";

import { useState } from "react";

/** The proof of the inverse function theorem: solve f(x) = y by iterating x ↦ x − (f(x) − y)/f′(a), a contraction near a. */
export function InverseIterViz() {
  const [a, setA] = useState(1);
  const [dy, setDy] = useState(0.3);
  const f = (x: number) => x * x * x, fp = (x: number) => 3 * x * x;
  const y = f(a) + dy;
  const d = fp(a);
  const its: number[] = [a];
  if (d !== 0) for (let i = 0; i < 10; i++) { const v = its[i] - (f(its[i]) - y) / d; if (!isFinite(v) || Math.abs(v) > 20) break; its.push(v); }
  const exact = Math.cbrt(y);
  // T′(x) = 1 − f′(x)/f′(a); |T′| ≤ 1/2 on the interval |x − a| ≤ r
  let r = 0; if (d !== 0) while (r < 2 && Math.abs(1 - fp(a + r) / d) <= 0.5 && Math.abs(1 - fp(a - r) / d) <= 0.5) r += 0.01;
  const W = 560, H = 220, lo = -2, hi = 2.2, pl = 30;
  const X = (x: number) => pl + ((x - lo) / (hi - lo)) * (W - pl - 10), Y = (v: number) => H / 2 - (Math.max(-9, Math.min(9, v)) / 9) * (H / 2 - 12);
  const xs = Array.from({ length: 200 }, (_, i) => lo + (i / 199) * (hi - lo));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>base point a: <span className="mono">{a}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>target y − f(a): <span className="mono">{dy}</span></span><input type="range" min={-1} max={1} step={0.05} value={dy} onChange={(e) => setDy(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The graph of x cubed and the iteration solving f(x) = y" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {r > 0 && <rect x={X(a - r)} y={10} width={X(a + r) - X(a - r)} height={H - 20} style={{ fill: "var(--accent)", fillOpacity: 0.1 }} />}
        <line x1={pl} y1={Y(y)} x2={W - 10} y2={Y(y)} style={{ stroke: "var(--text-faint)", strokeDasharray: "5 4" }} />
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        {its.map((x, i) => <circle key={i} cx={X(x)} cy={Y(f(x))} r={i === 0 ? 5 : 3.5} style={{ fill: "var(--accent)", fillOpacity: 0.4 + (0.6 * i) / its.length }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        {d === 0
          ? <div>f′(a) = 0: the iteration is undefined, and near 0 the inverse ∛y is not differentiable.</div>
          : <>
            <div>iterates: {its.slice(0, 7).map((x) => x.toFixed(5)).join(", ")}</div>
            <div>true solution ∛y = {exact.toFixed(5)}; contraction region |x − a| ≤ {r.toFixed(2)}</div>
            {Math.abs(its[its.length - 1] - exact) > 1e-4 && <div style={{ color: "var(--danger)" }}>The iterates do not settle: the target is too far from f(a) for the contraction region around a.</div>}
          </>}
      </div>
      <figcaption className="viz-caption">
        To solve x³ = y near a, iterate T(x) = x − (f(x) − y)/f′(a), using the fixed slope f′(a). In the shaded region T is a
        contraction with constant 1/2, so for y close enough to f(a) the iterates stay there and converge to the unique local
        solution. This is the heart of the proof of the inverse function theorem, with the matrix Df(a)⁻¹ in place of 1/f′(a).
      </figcaption>
    </figure>
  );
}
