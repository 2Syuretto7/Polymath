"use client";

import { useState } from "react";

const PRESETS: number[][] = [
  [1, 0, 0, -2],
  [1, 0, -6, 3],
  [2, 0, 15, 10, 5],
  [1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, -5, 0, 6],
  [1, 2, 3, 4, 5, 6],
];
const PRIMES = [2, 3, 5, 7, 11];

const sup = (k: number) => String(k).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join("");
/** Coefficients from the highest degree down. */
function show(p: number[]) {
  const d = p.length - 1;
  const parts = p.map((c, i) => ({ c, k: d - i })).filter(({ c }) => c !== 0);
  if (!parts.length) return "0";
  return parts.map(({ c, k }, j) => {
    const sign = c < 0 ? (j === 0 ? "−" : " − ") : j === 0 ? "" : " + ";
    const a = Math.abs(c);
    return sign + (a === 1 && k > 0 ? "" : a) + (k === 0 ? "" : k === 1 ? "x" : `x${sup(k)}`);
  }).join("");
}
const mod = (a: number, p: number) => ((a % p) + p) % p;

/** Eisenstein's criterion and reduction mod p, two tests for irreducibility over ℚ. */
export function IrreducibleTestViz() {
  const [i, setI] = useState(0);
  const [p, setP] = useState(2);
  const f = PRESETS[i];
  const n = f.length - 1;
  const lead = f[0], c0 = f[n];
  const middle = f.slice(1);
  const eis = [
    { ok: middle.every((c) => c % p === 0), text: `${p} divides every coefficient below the top` },
    { ok: lead % p !== 0, text: `${p} does not divide the leading coefficient ${lead}` },
    { ok: c0 % (p * p) !== 0, text: `${p * p} does not divide the constant term ${c0}` },
  ];
  const eisOk = eis.every((e) => e.ok);
  const red = f.map((c) => mod(c, p));
  const sameDeg = red[0] !== 0;
  const roots = Array.from({ length: p }, (_, x) => x).filter((x) => red.reduce((acc, c) => mod(acc * x + c, p), 0) === 0);
  const redVerdict = !sameDeg
    ? "The leading coefficient vanishes mod p, so this test says nothing."
    : n <= 3
      ? roots.length === 0
        ? `No roots mod ${p}, and the degree is ${n} ≤ 3, so the reduction is irreducible; hence f is irreducible over ℚ.`
        : `Roots mod ${p}: ${roots.join(", ")}. The reduction factors, so this prime gives no conclusion.`
      : roots.length === 0
        ? `No roots mod ${p}, but in degree ${n} the reduction could still split into factors of degree 2 or more. Inconclusive on its own.`
        : `Roots mod ${p}: ${roots.join(", ")}. The reduction factors, so this prime gives no conclusion.`;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6 }}>
        {PRESETS.map((q, j) => <button key={j} type="button" aria-pressed={i === j} className={i === j ? "viz-chip is-on" : "viz-chip"} onClick={() => setI(j)}>{show(q)}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Prime" style={{ marginTop: 8 }}>
        {PRIMES.map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "seg is-on" : "seg"} onClick={() => setP(q)}>p = {q}</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <tbody>
          <tr><td style={{ width: "28%" }}>Eisenstein at {p}</td><td>
            {eis.map((e) => <div key={e.text} style={{ color: e.ok ? "var(--text)" : "var(--text-faint)" }}>{e.ok ? "holds" : "fails"}: {e.text}</div>)}
            <div style={{ marginTop: 4, color: eisOk ? "var(--accent)" : "var(--text-muted)" }}>{eisOk ? "All three hold, so f is irreducible over ℚ." : "Not all hold, so Eisenstein at this prime is silent."}</div>
          </td></tr>
          <tr><td>reduce mod {p}</td><td>
            <div className="mono">{show(red)} in ℤ{String(p).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]).join("")}[x]</div>
            <div style={{ marginTop: 4 }}>{redVerdict}</div>
          </td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Both tests use a prime to see a polynomial over ℚ from a new angle. Eisenstein needs p to divide every coefficient except the top, with p² missing the constant term. Reduction mod p works when the leading coefficient survives: a factorisation over ℤ would reduce to one mod p. A test that fails at one prime may succeed at another, and some irreducible polynomials pass neither.
      </figcaption>
    </figure>
  );
}
