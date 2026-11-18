"use client";

import { useState } from "react";

type Ab = { r: number; t: number[] };
const SPACES: { name: string; H: Ab[] }[] = [
  { name: "S¹", H: [{ r: 1, t: [] }, { r: 1, t: [] }] },
  { name: "ℝP²", H: [{ r: 1, t: [] }, { r: 0, t: [2] }, { r: 0, t: [] }] },
  { name: "torus", H: [{ r: 1, t: [] }, { r: 2, t: [] }, { r: 1, t: [] }] },
  { name: "Klein bottle", H: [{ r: 1, t: [] }, { r: 1, t: [2] }, { r: 0, t: [] }] },
  { name: "ℝP³", H: [{ r: 1, t: [] }, { r: 0, t: [2] }, { r: 0, t: [] }, { r: 1, t: [] }] },
  { name: "lens space L(5, 1)", H: [{ r: 1, t: [] }, { r: 0, t: [5] }, { r: 0, t: [] }, { r: 1, t: [] }] },
];
const COEFFS = ["ℤ", "ℚ", "ℤ/2", "ℤ/3"];
const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const SUB = "₀₁₂₃";

function show(g: Ab): string {
  const parts: string[] = [];
  if (g.r === 1) parts.push("ℤ");
  if (g.r > 1) parts.push(`ℤ${SUP[g.r]}`);
  for (const t of g.t) parts.push(`ℤ/${t}`);
  return parts.length ? parts.join(" ⊕ ") : "0";
}
function showG(parts: string[]): string {
  const p = parts.filter((x) => x !== "0");
  return p.length ? p.join(" ⊕ ") : "0";
}
function hom(g: Ab, c: string): string[] {
  const out: string[] = [];
  for (let i = 0; i < g.r; i++) out.push(c);
  for (const t of g.t) {
    if (c === "ℤ/2" && t % 2 === 0) out.push("ℤ/2");
    if (c === "ℤ/3" && t % 3 === 0) out.push("ℤ/3");
  }
  return out;
}
function ext(g: Ab | undefined, c: string): string[] {
  if (!g) return [];
  const out: string[] = [];
  for (const t of g.t) {
    if (c === "ℤ") out.push(`ℤ/${t}`);
    if (c === "ℤ/2" && gcd(t, 2) === 2) out.push("ℤ/2");
    if (c === "ℤ/3" && gcd(t, 3) === 3) out.push("ℤ/3");
  }
  return out;
}

/** The universal coefficient theorem: cohomology with any coefficients, from integer homology. */
export function UCTViz() {
  const [k, setK] = useState(1);
  const [c, setC] = useState("ℤ");
  const X = SPACES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space">
        {SPACES.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="coefficients" style={{ marginTop: 6 }}>
        {COEFFS.map((x) => <button key={x} type="button" aria-pressed={c === x} className={c === x ? "seg is-on" : "seg"} onClick={() => setC(x)}>coefficients {x}</button>)}
      </div>
      <div className="mono" style={{ fontSize: 13, marginTop: 10, lineHeight: 1.9, overflowX: "auto" }}>
        {X.H.map((g, n) => {
          const h = hom(g, c), e = ext(X.H[n - 1], c);
          return (
            <div key={n}>
              H{SUB[n]} = {show(g)}; H{SUP[n]}(X; {c}) = Hom(H{SUB[n]}, {c}) ⊕ Ext(H{n > 0 ? SUB[n - 1] : "₋₁"}, {c}) = {showG(h.length ? h : ["0"])} ⊕ {showG(e.length ? e : ["0"])} = <b style={{ color: "var(--accent)" }}>{showG([...h, ...e])}</b>
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {c === "ℤ" ? "With integer coefficients, torsion moves up one degree: it appears in cohomology one step above where it sits in homology." : c === "ℚ" ? "Over ℚ, torsion vanishes and cohomology is the dual of homology: only the Betti numbers survive." : `With ${c} coefficients, ${c === "ℤ/2" ? "2" : "3"}-torsion is seen twice, once by Hom and once by Ext.`}
      </p>
      <figcaption className="viz-caption">
        Hom(ℤ, G) = G and Hom(ℤ/m, ℤ) = 0; Ext(ℤ, G) = 0 and Ext(ℤ/m, ℤ) = ℤ/m. So the integer homology of a space determines
        its cohomology with every coefficient group, and the only subtlety is where the torsion goes.
      </figcaption>
    </figure>
  );
}
