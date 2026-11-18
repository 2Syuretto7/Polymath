"use client";

import { useState } from "react";

const MANIFOLDS: { name: string; n: number; orient: boolean; q: number[]; z2: number[] }[] = [
  { name: "S²", n: 2, orient: true, q: [1, 0, 1], z2: [1, 0, 1] },
  { name: "torus", n: 2, orient: true, q: [1, 2, 1], z2: [1, 2, 1] },
  { name: "genus 3 surface", n: 2, orient: true, q: [1, 6, 1], z2: [1, 6, 1] },
  { name: "Klein bottle", n: 2, orient: false, q: [1, 1, 0], z2: [1, 2, 1] },
  { name: "ℝP²", n: 2, orient: false, q: [1, 0, 0], z2: [1, 1, 1] },
  { name: "S¹ × S²", n: 3, orient: true, q: [1, 1, 1, 1], z2: [1, 1, 1, 1] },
  { name: "3-torus", n: 3, orient: true, q: [1, 3, 3, 1], z2: [1, 3, 3, 1] },
  { name: "ℂP²", n: 4, orient: true, q: [1, 0, 1, 0, 1], z2: [1, 0, 1, 0, 1] },
];
const SUB = "₀₁₂₃₄";

/** Poincaré duality as a symmetry of Betti numbers, which fails over ℚ for non-orientable manifolds and returns over ℤ/2. */
export function PoincareViz() {
  const [k, setK] = useState(1);
  const [z2, setZ2] = useState(false);
  const M = MANIFOLDS[k];
  const b = z2 ? M.z2 : M.q;
  const sym = b.every((x, i) => x === b[M.n - i]);
  const W = 480, bw = Math.min(60, (W - 40) / b.length - 10), top = Math.max(...b, 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="manifold">
        {MANIFOLDS.map((m, i) => <button key={m.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="coefficients" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={!z2} className={!z2 ? "seg is-on" : "seg"} onClick={() => setZ2(false)}>coefficients ℚ</button>
        <button type="button" aria-pressed={z2} className={z2 ? "seg is-on" : "seg"} onClick={() => setZ2(true)}>coefficients ℤ/2</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Betti numbers in each degree" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={160} x2={500} y2={160} style={{ stroke: "var(--border-strong)" }} />
        {b.map((x, i) => {
          const cx = 40 + ((W - 40) * (i + 0.5)) / b.length;
          const h = (120 * x) / top;
          const mirror = b[M.n - i] === x;
          return (
            <g key={i}>
              <rect x={cx - bw / 2} y={160 - h} width={bw} height={h} rx={3} style={{ fill: mirror ? "var(--accent)" : "var(--danger)", opacity: 0.85 }} />
              <text x={cx} y={154 - h} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{x}</text>
              <text x={cx} y={178} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>b{SUB[i]}</text>
            </g>
          );
        })}
        <text x={260} y={196} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>dimension n = {M.n}: bₖ should equal bₙ₋ₖ</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {sym ? `Symmetric: bₖ = bₙ₋ₖ for every k.` : "Not symmetric."} {M.orient ? "The manifold is orientable, so duality holds with any coefficients." : z2 ? "Not orientable, but every manifold is ℤ/2-orientable, so duality holds over ℤ/2." : "Not orientable, so duality fails over ℚ: there is no fundamental class."}
      </p>
      <figcaption className="viz-caption">
        For a closed n-manifold oriented over a field F, Hᵏ(M; F) ≅ Hₙ₋ₖ(M; F), and by universal coefficients the Betti
        numbers read the same forwards and backwards. Red bars mark degrees where the symmetry breaks.
      </figcaption>
    </figure>
  );
}
