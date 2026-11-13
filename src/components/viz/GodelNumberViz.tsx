"use client";

import { useState } from "react";

const SYMS = ["0", "S", "+", "×", "=", "(", ")", "¬", "→", "∀", "x", "y"];
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sup = (n: number) => String(n).split("").map((d) => SUP[Number(d)]).join("");
const PRESETS: { label: string; s: string[] }[] = [
  { label: "0 = 0", s: ["0", "=", "0"] },
  { label: "S0 = S0", s: ["S", "0", "=", "S", "0"] },
  { label: "¬ 0 = S0", s: ["¬", "0", "=", "S", "0"] },
  { label: "∀x (x = x)", s: ["∀", "x", "(", "x", "=", "x", ")"] },
];

/** Gödel numbering: a formula becomes one number, the product of primes raised to the codes of its symbols. */
export function GodelNumberViz() {
  const [f, setF] = useState<string[]>(["0", "=", "0"]);
  const codes = f.map((s) => SYMS.indexOf(s) + 1);
  let g = BigInt(1);
  codes.forEach((c, i) => { g *= BigInt(PRIMES[i]) ** BigInt(c); });
  const digits = g.toString();
  const shown = digits.length > 60 ? `${digits.slice(0, 28)}…${digits.slice(-28)}` : digits;
  const full = f.length >= PRIMES.length;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {SYMS.map((s, i) => (
          <button key={s} type="button" className="btn btn-ghost" disabled={full} onClick={() => setF([...f, s])}>
            <span className="mono" style={{ fontSize: 16, fontWeight: 700 }}>{s}</span> <span style={{ fontSize: 12 }}>code {i + 1}</span>
          </button>
        ))}
      </div>
      <div className="viz-controls" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
        <button type="button" className="btn btn-ghost" onClick={() => setF(f.slice(0, -1))} disabled={!f.length}>delete last</button>
        <button type="button" className="btn btn-ghost" onClick={() => setF([])}>clear</button>
        {PRESETS.map((p) => (
          <button key={p.label} type="button" className="btn btn-ghost" onClick={() => setF(p.s)}>{p.label}</button>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 6, fontSize: 14, marginTop: 12 }}>
        <div>formula: {f.length ? f.join(" ") : "(empty)"}</div>
        <div>codes: {codes.join(", ") || "none"}</div>
        <div style={{ overflowWrap: "anywhere" }}>Gödel number = {codes.map((c, i) => `${PRIMES[i]}${sup(c)}`).join(" · ") || "1"}</div>
        <div style={{ fontWeight: 700, overflowWrap: "anywhere" }}>= {shown}</div>
        <div>{digits.length} digit{digits.length === 1 ? "" : "s"}{full ? "; at most twelve symbols here" : ""}</div>
      </div>
      <figcaption className="viz-caption">
        Each symbol gets a code, and a string of symbols with codes c₁, c₂, c₃, … gets the number 2 to the power c₁, times 3
        to the power c₂, times 5 to the power c₃, and so on. By unique factorisation the number can be decoded again. Proofs,
        which are strings of formulas, get numbers in the same way, so &ldquo;n is the number of a proof of the formula with
        number m&rdquo; becomes an arithmetical relation between n and m that the theory itself can express.
      </figcaption>
    </figure>
  );
}
