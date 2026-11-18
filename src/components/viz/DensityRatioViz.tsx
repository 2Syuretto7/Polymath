"use client";

import { useState } from "react";

const MU0 = [2, 1, 3, 1, 2, 0, 1, 2];
const NU = [4, 1, 1.5, 3, 0, 0, 2, 1];

/** Radon-Nikodym on eight points: the derivative is the ratio of masses, when it makes sense. */
export function DensityRatioViz() {
  const [mu, setMu] = useState(MU0);
  const n = mu.length;
  const bad = mu.map((m, i) => m === 0 && NU[i] > 0);
  const ac = !bad.some(Boolean);
  const W = 56, O = 36, Y0 = 150, H = 24;
  const toggle = (i: number) => setMu(mu.map((m, j) => (j === i ? (m === 0 ? MU0[i] || 1 : 0) : m)));
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 260" role="img" aria-label="Masses of two measures on eight points" style={{ width: "100%", display: "block" }}>
        <text x={10} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>μ (shaded) and ν (outlined) at each point. Click a point to switch its μ-mass to 0 and back.</text>
        {mu.map((m, i) => {
          const x = O + i * W;
          return (
            <g key={i} onClick={() => toggle(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y={30} width={W - 6} height={190} style={{ fill: "transparent" }} />
              <rect x={x + 4} y={Y0 - m * H} width={20} height={m * H} style={{ fill: "var(--accent)", opacity: 0.6 }} />
              <rect x={x + 26} y={Y0 - NU[i] * H} width={20} height={NU[i] * H} style={{ fill: "none", stroke: bad[i] ? "var(--danger)" : "var(--text)", strokeWidth: 2 }} />
              <text x={x + 25} y={Y0 + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x{"₁₂₃₄₅₆₇₈"[i]}</text>
              <text x={x + 25} y={Y0 + 40} textAnchor="middle" style={{ fill: bad[i] ? "var(--danger)" : "var(--text)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
                {m > 0 ? (NU[i] / m).toFixed(2).replace(/\.?0+$/, "") : bad[i] ? "none" : "any"}
              </text>
            </g>
          );
        })}
        <line x1={O} y1={Y0} x2={O + n * W} y2={Y0} style={{ stroke: "var(--text-muted)" }} />
        <text x={10} y={Y0 + 40} style={{ fill: "var(--text-muted)", fontSize: 10 }}>dν/dμ</text>
        <text x={10} y={250} style={{ fill: ac ? "var(--success)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>
          {ac ? "ν ≪ μ: every μ-null point is ν-null, so dν/dμ exists." : "Not absolutely continuous: some point has μ-mass 0 but ν-mass > 0."}
        </text>
      </svg>
      <figcaption className="viz-caption">
        On a finite set, ν(A) = Σ over A of (dν/dμ)·μ, with dν/dμ = ν/μ at each point. Where μ is 0 the ratio is free if ν is
        0 too, and impossible if ν is not. The Radon-Nikodym theorem says absolute continuity is the only obstacle, on any
        σ-finite space.
      </figcaption>
    </figure>
  );
}
