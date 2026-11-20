"use client";

import { useState } from "react";

export const MODELS = [
  { label: "constants unbounded", realised: false, least: false, text: "The constants cₙ are cofinal: nothing lies above all of them. The type p(x) = {x > cₙ : n ∈ ℕ} is omitted. This is the prime model." },
  { label: "a least element above", realised: true, least: true, text: "Above all the cₙ there is a copy of [0, 1) ∩ ℚ, with a least element. The type p is realised, and has a least realisation." },
  { label: "no least element above", realised: true, least: false, text: "Above all the cₙ there is a copy of ℚ, with no least element. The type p is realised, but by no least element." },
];

/** Ehrenfeucht’s theory: a dense linear order with constants c₀ < c₁ < c₂ < ⋯ has exactly three countable models. */
export function EhrenfeuchtModelsViz() {
  const [k, setK] = useState(0);
  const M = MODELS[k];
  const c = (n: number) => 40 + 300 * (1 - Math.pow(0.72, n + 1));
  const sup = 345;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="model">
        {MODELS.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>)}
      </div>
      <svg viewBox="0 0 540 110" role="img" aria-label="The order with its constants, and what lies above them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={50} x2={k === 0 ? sup : 520} y2={50} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {Array.from({ length: 12 }, (_, n) => (
          <g key={n}>
            <line x1={c(n)} y1={42} x2={c(n)} y2={58} style={{ stroke: "var(--text)", strokeWidth: n < 6 ? 2 : 1 }} />
            {n < 4 && <text x={c(n)} y={78} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>c{"₀₁₂₃"[n]}</text>}
          </g>
        ))}
        {k === 0 && <text x={sup + 8} y={54} style={{ fill: "var(--text-muted)", fontSize: 12 }}>nothing above all the cₙ</text>}
        {k > 0 && <rect x={sup + 20} y={44} width={150} height={12} rx={3} style={{ fill: "var(--success-soft)", stroke: "var(--success)" }} />}
        {k === 1 && <circle cx={sup + 20} cy={50} r={6} style={{ fill: "var(--success)" }} />}
        {k === 2 && <circle cx={sup + 20} cy={50} r={6} style={{ fill: "var(--surface)", stroke: "var(--success)", strokeWidth: 2 }} />}
        {k > 0 && <text x={sup + 95} y={80} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>realisations of p</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {M.text}
      </p>
      <figcaption className="viz-caption">
        The theory of dense linear orders without endpoints, with constants c₀ &lt; c₁ &lt; c₂ &lt; ⋯, is complete. The type
        p is not isolated, so the omitting types theorem gives a countable model omitting it. Up to isomorphism there are
        exactly three countable models, distinguished by what lies above the constants.
      </figcaption>
    </figure>
  );
}
