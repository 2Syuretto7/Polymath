"use client";

import { useState } from "react";

/** Tent functions of height 1 and base 2/n: sup-norm 1, L¹-norm 1/n. */
export function TentNormsViz() {
  const [n, setN] = useState(4);
  const [mode, setMode] = useState<"tents" | "basis">("tents");
  const X = (x: number) => 30 + x * 460, Y = (y: number) => 150 - y * 120;
  const w = 1 / n;
  const N = 6;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="example">
        <button type="button" aria-pressed={mode === "tents"} className={mode === "tents" ? "seg is-on" : "seg"} onClick={() => setMode("tents")}>two norms on C[0, 1]</button>
        <button type="button" aria-pressed={mode === "basis"} className={mode === "basis" ? "seg is-on" : "seg"} onClick={() => setMode("basis")}>the unit ball of ℓ²</button>
      </div>
      {mode === "tents" ? (
        <>
          <svg viewBox="0 0 520 170" role="img" aria-label="A narrow tent function" style={{ width: "100%", display: "block", marginTop: 8 }}>
            <path d={`M${X(0)} ${Y(0)} L${X(0.5 - w)} ${Y(0)} L${X(0.5)} ${Y(1)} L${X(0.5 + w)} ${Y(0)} L${X(1)} ${Y(0)}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
            <path d={`M${X(0.5 - w)} ${Y(0)} L${X(0.5)} ${Y(1)} L${X(0.5 + w)} ${Y(0)} Z`} style={{ fill: "var(--accent-soft)" }} />
            <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />
            <line x1={X(0)} y1={Y(1)} x2={X(1)} y2={Y(1)} style={{ stroke: "var(--border)", strokeDasharray: "4 3" }} />
            <text x={X(0) - 6} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
          </svg>
          <div className="viz-controls">
            <label className="mono" style={{ fontSize: 13 }}>
              n = {n}{" "}
              <input type="range" min={1} max={40} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" />
            </label>
          </div>
          <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
            ‖fₙ‖<sub>∞</sub> = 1. ‖fₙ‖₁ = 1/{n} = {(1 / n).toFixed(4)}. Ratio ‖fₙ‖<sub>∞</sub> / ‖fₙ‖₁ = {n}.
          </p>
          <p style={{ fontSize: 14, margin: "4px 0" }}>
            The ratio grows without bound, so no constant C gives ‖f‖<sub>∞</sub> ≤ C‖f‖₁ for all f. The two norms are not
            equivalent: in finite dimensions, any two norms would be.
          </p>
        </>
      ) : (
        <>
          <svg viewBox="0 0 520 170" role="img" aria-label="Distances between basis vectors" style={{ width: "100%", display: "block", marginTop: 8 }}>
            {Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => (
              <g key={`${i}-${j}`}>
                <rect x={140 + j * 40} y={10 + i * 25} width={40} height={25} style={{ fill: i === j ? "var(--bg-subtle)" : "var(--accent-soft)", stroke: "var(--border)" }} />
                <text x={160 + j * 40} y={27 + i * 25} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11, fontFamily: "var(--font-mono)" }}>{i === j ? "0" : "1.414"}</text>
              </g>
            )))}
            {Array.from({ length: N }, (_, i) => <text key={`r${i}`} x={130} y={27 + i * 25} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>e{"₁₂₃₄₅₆"[i]}</text>)}
          </svg>
          <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>‖eᵢ − eⱼ‖₂ = √2 for all i ≠ j.</p>
          <p style={{ fontSize: 14, margin: "4px 0" }}>
            The unit vectors e₁, e₂, … all lie in the closed unit ball, but no subsequence is Cauchy. So the closed unit ball of
            ℓ² is bounded and closed, yet not compact. Riesz&rsquo;s lemma shows this happens in every infinite-dimensional
            normed space.
          </p>
        </>
      )}
      <figcaption className="viz-caption">
        Two signs of infinite dimensions: norms that disagree about which sequences are small, and unit balls that are not
        compact.
      </figcaption>
    </figure>
  );
}
