"use client";

import { useState } from "react";

const P2 = [[], [1], [2], [1, 1], [3], [2, 1]];
const P3 = [[], [1], [2], [1, 1]];
const SUP = "⁰¹²³⁴⁵⁶";

/** Coefficients, constant term first, of the product of (x − λ)^k over the given factors. */
function expand(factors: [number, number][]): number[] {
  let c = [1];
  for (const [lam, k] of factors) for (let i = 0; i < k; i++) {
    const n = new Array(c.length + 1).fill(0);
    c.forEach((a, j) => { n[j + 1] += a; n[j] -= lam * a; });
    c = n;
  }
  return c;
}
const factorStr = (fs: [number, number][]) => fs.filter(([, k]) => k > 0).map(([l, k]) => `(x − ${l})${k > 1 ? SUP[k] : ""}`).join("") || "1";
const label = (p: number[]) => (p.length ? p.join(" + ") : "none");

/** Jordan form and rational canonical form of the same linear map, from its elementary divisors. */
export function CanonicalFormViz() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(1);
  const parts: [number, number[]][] = [[2, P2[a]], [3, P3[b]]];
  const n = P2[a].reduce((s, x) => s + x, 0) + P3[b].reduce((s, x) => s + x, 0);
  // Jordan form
  const J: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
  let pos = 0;
  for (const [lam, ps] of parts) for (const k of ps) {
    for (let i = 0; i < k; i++) { J[pos + i][pos + i] = lam; if (i + 1 < k) J[pos + i][pos + i + 1] = 1; }
    pos += k;
  }
  // invariant factors: the largest uses the largest block for each eigenvalue, and so on
  const r = Math.max(P2[a].length, P3[b].length);
  const inv: [number, number][][] = [];
  for (let i = 0; i < r; i++) inv.push(parts.map(([lam, ps]) => [lam, [...ps].sort((x, y) => y - x)[i] ?? 0] as [number, number]));
  inv.reverse(); // d₁ | d₂ | …
  const R: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
  pos = 0;
  for (const fs of inv) {
    const c = expand(fs), d = c.length - 1;
    for (let i = 0; i < d; i++) { if (i > 0) R[pos + i][pos + i - 1] = 1; R[pos + i][pos + d - 1] = -c[i]; }
    pos += d;
  }
  const grid = (M: number[][], title: string) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>{title}</div>
      <div style={{ display: "inline-grid", gridTemplateColumns: `repeat(${Math.max(n, 1)}, 34px)`, gap: 2 }}>
        {M.flat().map((x, i) => (
          <div key={i} className="mono" style={{ height: 30, display: "grid", placeItems: "center", fontSize: 13, borderRadius: 3, background: x ? "var(--accent-soft)" : "var(--bg)", border: "1px solid var(--border)", color: x ? "var(--text)" : "var(--text-faint)" }}>{String(x).replace("-", "−")}</div>
        ))}
      </div>
    </div>
  );
  const elem = parts.flatMap(([lam, ps]) => ps.map((k) => factorStr([[lam, k]])));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Blocks for eigenvalue 2">
        <span style={{ alignSelf: "center", fontSize: 13, padding: "0 8px" }}>blocks for 2:</span>
        {P2.map((p, i) => <button key={i} type="button" aria-pressed={a === i} className={a === i ? "seg is-on" : "seg"} disabled={n - P2[a].reduce((s, x) => s + x, 0) + p.reduce((s, x) => s + x, 0) === 0} onClick={() => setA(i)}>{label(p)}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Blocks for eigenvalue 3" style={{ marginTop: 6 }}>
        <span style={{ alignSelf: "center", fontSize: 13, padding: "0 8px" }}>blocks for 3:</span>
        {P3.map((p, i) => <button key={i} type="button" aria-pressed={b === i} className={b === i ? "seg is-on" : "seg"} disabled={n - P3[b].reduce((s, x) => s + x, 0) + p.reduce((s, x) => s + x, 0) === 0} onClick={() => setB(i)}>{label(p)}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", margin: "12px 0" }}>
        {grid(J, "Jordan form")}
        {grid(R, "rational canonical form")}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>elementary divisors: {elem.join(", ")}</div>
        <div>invariant factors: {inv.map(factorStr).join(" | ")}</div>
        <div>minimal polynomial: {factorStr(inv[inv.length - 1])}; characteristic polynomial: {factorStr(parts.map(([lam, ps]) => [lam, ps.reduce((s, x) => s + x, 0)] as [number, number]))}</div>
      </div>
      <figcaption className="viz-caption">
        Both matrices describe the same ℚ[x]-module. The Jordan form splits it into cyclic pieces ℚ[x]/(x − λ)ᵏ, one block for
        each elementary divisor. The rational canonical form uses one companion matrix for each invariant factor, each dividing
        the next, and needs no eigenvalues at all.
      </figcaption>
    </figure>
  );
}
