"use client";

import { useState } from "react";

/** ℓ(dP) for a point P that is not a Weierstrass point of a compact surface of genus g: the gaps are 1, …, g. */
export const ellDP = (g: number, d: number) => (d < 0 ? 0 : d <= g ? 1 : d - g + 1);

/** Riemann-Roch for the divisors dP: ℓ(D) − ℓ(K − D) = deg D − g + 1. */
export function RiemannRochViz() {
  const [g, setG] = useState(2);
  const [d, setD] = useState(5);
  const ell = ellDP(g, d);
  const rr = d - g + 1;
  const ellK = ell - rr;
  const px = (k: number) => 50 + k * 42, py = (v: number) => 190 - v * 18;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>genus g = {g} <input type="range" min={0} max={4} step={1} value={g} onChange={(e) => setG(Number(e.target.value))} aria-label="genus" /></label>
        <label>degree d = {d} <input type="range" min={0} max={10} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="degree" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Dimensions of spaces of meromorphic functions with poles at one point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, 2, 4, 6, 8, 10].map((v) => (
          <g key={v}>
            <line x1={40} y1={py(v)} x2={520} y2={py(v)} style={{ stroke: "var(--grid-line)" }} />
            <text x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>
          </g>
        ))}
        {Array.from({ length: 11 }, (_, k) => (
          <g key={k}>
            <rect x={px(k) - 13} y={py(ellDP(g, k))} width={26} height={ellDP(g, k) * 18} style={{ fill: k === d ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={px(k)} y={208} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>
          </g>
        ))}
        <path d={`M${px(0) - 13},${py(1 - g)} L${px(10) + 13},${py(11 - g)}`} style={{ fill: "none", stroke: "var(--danger)", strokeDasharray: "5 3", strokeWidth: 2 }} />
        <line x1={px(2 * g - 2) + 21} y1={py(0)} x2={px(2 * g - 2) + 21} y2={py(10.5)} style={{ stroke: g > 0 ? "var(--text-faint)" : "none", strokeDasharray: "2 3" }} />
        <text x={518} y={py(10.5) + 4} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 10 }}>d − g + 1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        D = {d}P: ℓ(D) = {ell}, d − g + 1 = {String(rr).replace("-", "−")}, so ℓ(K − D) = {ellK}. {d > 2 * g - 2 ? "Since d > 2g − 2, K − D has negative degree and ℓ(K − D) = 0." : "Here d ≤ 2g − 2, and the correction term ℓ(K − D) can be positive."}
      </p>
      <figcaption className="viz-caption">
        Bars show ℓ(dP), the dimension of the space of meromorphic functions whose only pole is at P, of order at most d,
        for a general point P. The dashed line is Riemann&rsquo;s lower bound d − g + 1. The gap between them is ℓ(K − D),
        which vanishes once d passes 2g − 2, marked by the dotted line.
      </figcaption>
    </figure>
  );
}
