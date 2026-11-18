"use client";

import { useState } from "react";

const T: Record<string, string> = {};
const put = (k: number, n: number, g: string) => { T[`${k},${n}`] = g; };
for (let k = 1; k <= 8; k++) for (let n = 1; n <= 8; n++) put(k, n, k < n ? "0" : k === n ? "ℤ" : "");
for (let k = 2; k <= 8; k++) put(k, 1, "0");
[["3", "ℤ"], ["4", "ℤ/2"], ["5", "ℤ/2"], ["6", "ℤ/12"], ["7", "ℤ/2"], ["8", "ℤ/2"]].forEach(([k, g]) => put(Number(k), 2, g));
[["4", "ℤ/2"], ["5", "ℤ/2"], ["6", "ℤ/12"], ["7", "ℤ/2"], ["8", "ℤ/2"]].forEach(([k, g]) => put(Number(k), 3, g));
[["5", "ℤ/2"], ["6", "ℤ/2"], ["7", "ℤ ⊕ ℤ/12"], ["8", "(ℤ/2)²"]].forEach(([k, g]) => put(Number(k), 4, g));
[["6", "ℤ/2"], ["7", "ℤ/2"], ["8", "ℤ/24"]].forEach(([k, g]) => put(Number(k), 5, g));
[["7", "ℤ/2"], ["8", "ℤ/2"]].forEach(([k, g]) => put(Number(k), 6, g));
put(8, 7, "ℤ/2");

function why(k: number, n: number): string {
  if (n === 1 && k > 1) return "The universal cover of S¹ is ℝ, which is contractible, and higher homotopy groups lift to covers. So all of them vanish.";
  if (k < n) return "Any map Sᵏ → Sⁿ with k < n can be made to miss a point, by cellular approximation, and Sⁿ minus a point is contractible.";
  if (k === n) return "πₙ(Sⁿ) ≅ ℤ, detected by degree: Hopf’s theorem says two maps are homotopic exactly when their degrees agree.";
  if (k === 3 && n === 2) return "The Hopf fibration S¹ → S³ → S² gives π₃(S²) ≅ π₃(S³) ≅ ℤ. Its generator, the Hopf map, links any two fibres once.";
  if (k - n >= 0 && k < 2 * n - 1) return `In the stable range k < 2n − 1, Freudenthal’s theorem says πₖ(Sⁿ) depends only on k − n = ${k - n}. Read along the diagonal.`;
  return "Outside the stable range, groups are hard to compute; these were found by Serre, Toda and others with spectral sequences.";
}

/** The homotopy groups πₖ(Sⁿ) for k, n ≤ 8, with the reason behind each entry. */
export function HomotopyTableViz() {
  const [sel, setSel] = useState<[number, number]>([3, 2]);
  const [sk, sn] = sel;
  const stem = sk - sn;
  return (
    <figure className="viz">
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 12, width: "100%" }}>
          <thead>
            <tr>
              <th style={{ padding: 4, color: "var(--text-muted)", fontWeight: 400 }}>πₖ(Sⁿ)</th>
              {Array.from({ length: 8 }, (_, i) => <th key={i} style={{ padding: 4 }}>n = {i + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }, (_, r) => {
              const k = r + 1;
              return (
                <tr key={k} style={{ borderTop: "1px solid var(--border)" }}>
                  <td style={{ padding: 4, fontWeight: 700 }}>k = {k}</td>
                  {Array.from({ length: 8 }, (_, c) => {
                    const n = c + 1;
                    const g = T[`${k},${n}`];
                    const on = k === sk && n === sn;
                    const diag = stem > 0 && k - n === stem;
                    return (
                      <td key={n} style={{ padding: 2, textAlign: "center" }}>
                        <button type="button" onClick={() => setSel([k, n])} aria-label={`pi ${k} of S ${n}`} style={{ width: "100%", minWidth: 52, padding: "4px 2px", borderRadius: 4, border: on ? "2px solid var(--text)" : "1px solid transparent", background: diag ? "var(--accent-soft)" : "transparent", color: g === "0" ? "var(--text-faint)" : "var(--text)", fontFamily: "inherit", fontSize: 12, cursor: "pointer" }}>
                          {g}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>
        π{"₀₁₂₃₄₅₆₇₈"[sk]}(S{"⁰¹²³⁴⁵⁶⁷⁸"[sn]}) = {T[`${sk},${sn}`]}. {why(sk, sn)}
      </p>
      <figcaption className="viz-caption">
        Click any entry. Below the diagonal everything vanishes; on it sits ℤ; above it the groups are mostly finite and
        famously irregular. Shaded cells share the selected value of k − n, along which the groups settle down.
      </figcaption>
    </figure>
  );
}
