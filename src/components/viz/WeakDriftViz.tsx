"use client";

import { useState } from "react";

const YS = [
  { key: "inv", label: "yₖ = 1/k", y: (k: number) => 1 / k },
  { key: "geo", label: "yₖ = 2⁻ᵏ", y: (k: number) => 2 ** -k },
  { key: "sq", label: "yₖ = 1/k²", y: (k: number) => 1 / (k * k) },
];
const N = 30;

/** eₙ in ℓ²: every functional ⟨·, y⟩ sends it to 0, yet ‖eₙ‖ = 1 for all n. */
export function WeakDriftViz() {
  const [n, setN] = useState(3);
  const [k, setK] = useState(0);
  const Y = YS[k];
  const pair = Y.y(n);
  const B = (v: number) => 150 - v * 110;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="test vector">
        {YS.map((s, i) => <button key={s.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 520 180" role="img" aria-label="The unit vector e n as a single spike, with the test vector y" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: N }, (_, i) => {
          const x = 30 + i * 16;
          return (
            <g key={i}>
              <rect x={x} y={B(Y.y(i + 1))} width={12} height={150 - B(Y.y(i + 1))} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 0.8 }} />
              {i + 1 === n && <line x1={x + 6} y1={150} x2={x + 6} y2={B(1)} style={{ stroke: "var(--text)", strokeWidth: 3 }} />}
            </g>
          );
        })}
        <line x1={26} y1={150} x2={510} y2={150} style={{ stroke: "var(--text-muted)" }} />
        <text x={30 + (n - 1) * 16 + 6} y={B(1) - 6} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11, fontWeight: 700 }}>e{String(n).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]).join("")}</text>
        <text x={270} y={172} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>coordinates k = 1 to {N}; shaded bars are y</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          n = {n}{" "}
          <input type="range" min={1} max={N} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="index n" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ⟨eₙ, y⟩ = yₙ = {pair.toFixed(4)}, which tends to 0 as n grows. ‖eₙ − 0‖ = 1 for every n.
      </p>
      <figcaption className="viz-caption">
        The spike eₙ slides off to infinity. Any fixed y in ℓ² has terms tending to 0, so every bounded functional, which by
        Riesz is ⟨·, y⟩, sees eₙ tend to 0. But eₙ never gets closer to 0 in norm: eₙ converges to 0 weakly, not strongly.
      </figcaption>
    </figure>
  );
}
