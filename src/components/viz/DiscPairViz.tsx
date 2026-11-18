"use client";

import { useState } from "react";

/** The long exact sequence of the pair (Dⁿ, Sⁿ⁻¹), degree by degree. */
export function DiscPairViz() {
  const [n, setN] = useState(2);
  const sub = (k: number) => String(k).split("").map((c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)]).join("");
  const S = (k: number) => (n - 1 === 0 ? (k === 0 ? "ℤ²" : "0") : k === 0 || k === n - 1 ? "ℤ" : "0");
  const D = (k: number) => (k === 0 ? "ℤ" : "0");
  const R = (k: number) => (k === n ? "ℤ" : "0");
  const rows = Array.from({ length: n + 1 }, (_, i) => n - i);
  const cell = (g: string, bold: boolean) => <span style={{ display: "inline-block", minWidth: 34, textAlign: "center", fontWeight: bold ? 700 : 400, color: g === "0" ? "var(--text-faint)" : "var(--accent)" }}>{g}</span>;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="dimension">
        {[1, 2, 3, 4].map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => setN(m)}>n = {m}</button>)}
      </div>
      <div className="mono" style={{ fontSize: 13, margin: "10px 0", lineHeight: 2 }}>
        {rows.map((k) => (
          <div key={k}>
            H{sub(k)}(S{n - 1 > 0 ? ["", "¹", "²", "³"][n - 1] : "⁰"}) {cell(S(k), false)} → H{sub(k)}(D{["", "¹", "²", "³", "⁴"][n]}) {cell(D(k), false)} → H{sub(k)}(D, S) {cell(R(k), k === n)} {k > 0 ? <span style={{ color: k === n ? "var(--accent)" : "var(--text-muted)" }}>→∂</span> : null}
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The disc is contractible, so exactness forces the connecting map ∂: H{sub(n)}(Dⁿ, Sⁿ⁻¹) → H{sub(n - 1)}(Sⁿ⁻¹) to be an isomorphism {n === 1 ? "onto the kernel of H₀(S⁰) → H₀(D¹), a copy of ℤ" : "onto ℤ"}. By excision, H{sub(n)}(Dⁿ, Sⁿ⁻¹) ≅ H{sub(n)}(Sⁿ) as well.
      </p>
      <figcaption className="viz-caption">
        Read each row left to right, then follow ∂ down to the start of the next row: the whole zigzag is one long exact
        sequence. Knowing two of the three columns determines much of the third.
      </figcaption>
    </figure>
  );
}
