"use client";

import { useState } from "react";

const N = 12;

/** φ(x) = Σ xₙ/2ⁿ has norm 1 on c₀ but never reaches it; in ℓ^∞ the constant sequence 1 does. */
export function NormAttainViz() {
  const [k, setK] = useState(3);
  const [all, setAll] = useState(false);
  const val = all ? 1 : 1 - 2 ** -k;
  const H = 120;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space">
        <button type="button" aria-pressed={!all} className={!all ? "seg is-on" : "seg"} onClick={() => setAll(false)}>in c₀: ones then zeros</button>
        <button type="button" aria-pressed={all} className={all ? "seg is-on" : "seg"} onClick={() => setAll(true)}>in ℓ∞: all ones</button>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Weights one over two to the n, with the terms where x is 1 shaded" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: N }, (_, i) => {
          const on = all || i < k;
          const h = H * 2 ** -(i + 1) * 2;
          return (
            <g key={i}>
              <rect x={30 + i * 39} y={140 - h} width={30} height={h} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: on ? "var(--accent)" : "var(--border)" }} />
              <text x={45 + i * 39} y={156} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i + 1}</text>
            </g>
          );
        })}
        <text x={495} y={110} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{all ? "… and so on for ever" : "xₙ = 0 beyond here"}</text>
        <line x1={26} y1={140} x2={505} y2={140} style={{ stroke: "var(--text-muted)" }} />
      </svg>
      {!all && (
        <div className="viz-controls">
          <label className="mono" style={{ fontSize: 13 }}>
            ones: {k}{" "}
            <input type="range" min={1} max={N} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="number of ones" />
          </label>
        </div>
      )}
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖x‖ = 1. φ(x) = {all ? "1" : `1 − 2⁻${String(k).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join("")} = ${val.toFixed(6)}`}. {all ? "The norm is attained." : "Below 1, however many ones."}
      </p>
      <figcaption className="viz-caption">
        Each bar is a weight 1/2ⁿ, shaded where xₙ = 1. On c₀, the functional φ has norm 1, but a sequence in c₀ must tend
        to 0, so some weight is always left out and φ(x) &lt; 1 whenever ‖x‖ ≤ 1. James&rsquo;s theorem: a Banach space is
        reflexive exactly when every functional attains its norm on the unit ball.
      </figcaption>
    </figure>
  );
}
