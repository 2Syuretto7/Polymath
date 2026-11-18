"use client";

import { useState } from "react";

const SYMS = ["0", "S", "+", "×", "=", "(", ")", "¬", "→", "∀", "x", "y"];
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
const PRESETS = [2430, 20212500, 10, 8192, 1500];
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const sup = (n: number) => String(n).split("").map((d) => SUP[Number(d)]).join("");

export function decode(n: number): { exps: number[]; ok: boolean; reason: string; text: string } {
  if (!Number.isInteger(n) || n < 2) return { exps: [], ok: false, reason: "Codes are whole numbers of at least 2.", text: "" };
  let m = n;
  const exps: number[] = [];
  for (const p of PRIMES) {
    let e = 0;
    while (m % p === 0) { m /= p; e++; }
    exps.push(e);
    if (m === 1) break;
  }
  if (m !== 1) return { exps, ok: false, reason: "It has a prime factor beyond 47, so it is too long for this table or not a code.", text: "" };
  const gap = exps.indexOf(0);
  if (gap >= 0) return { exps, ok: false, reason: `The prime ${PRIMES[gap]} is missing while a later prime appears, so the sequence has a gap.`, text: "" };
  const bad = exps.findIndex((e) => e > SYMS.length);
  if (bad >= 0) return { exps, ok: false, reason: `The exponent ${exps[bad]} of ${PRIMES[bad]} is not the code of any symbol.`, text: "" };
  return { exps, ok: true, reason: "Every exponent is a symbol code, with no gaps.", text: exps.map((e) => SYMS[e - 1]).join(" ") };
}

/** Factor a number and test whether it codes a string of symbols: syntax becomes arithmetic. */
export function GodelDecodeViz() {
  const [n, setN] = useState(2430);
  const r = decode(n);
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <label className="mono" style={{ display: "flex", gap: 6, alignItems: "center" }}>
          n =
          <input type="number" min={2} value={n} onChange={(e) => setN(Number(e.target.value))} style={{ width: 140 }} aria-label="number to decode" />
        </label>
        {PRESETS.map((p) => <button key={p} type="button" className={p === n ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setN(p)}>{p}</button>)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 10 }}>
        <div>
          factors: {r.exps.length ? r.exps.map((e, i) => `${PRIMES[i]}${sup(e)}`).join(" · ") : "none"}
        </div>
        <div>symbol codes: {SYMS.map((s, i) => `${i + 1}=${s}`).join("  ")}</div>
        <div style={{ fontWeight: 700, color: r.ok ? "var(--accent)" : "var(--danger)" }}>
          {r.ok ? `codes the string: ${r.text}` : "not the code of a string"}
        </div>
        <div style={{ color: "var(--text-muted)" }}>{r.reason}</div>
      </div>
      <figcaption className="viz-caption">
        Deciding whether n codes a string only needs factoring and checking exponents, which a primitive recursive function
        can do. In the same way, &ldquo;n codes a formula&rdquo;, &ldquo;n codes an axiom&rdquo; and &ldquo;n codes a proof of
        the formula coded by k&rdquo; all become arithmetical properties of numbers.
      </figcaption>
    </figure>
  );
}
