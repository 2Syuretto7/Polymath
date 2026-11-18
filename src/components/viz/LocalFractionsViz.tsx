"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const M = 12;

/** ℤ localised at p: fractions a/b with p not dividing b. Units are those with p dividing neither; the rest form pℤ₍ₚ₎. */
export function LocalFractionsViz() {
  const [p, setP] = useState(2);
  const [sel, setSel] = useState<[number, number] | null>([3, 5]);
  const S = 34, O = 34;
  const status = (a: number, b: number) => {
    const g = gcd(a, b), a1 = a / g, b1 = b / g;
    if (b1 % p === 0) return "out";
    return a1 % p === 0 ? "ideal" : "unit";
  };
  const describe = (a: number, b: number) => {
    const s = status(a, b), g = gcd(a, b);
    const red = `${a / g}/${b / g}`;
    if (s === "out") return `${a}/${b} = ${red}: the denominator is divisible by ${p}, so it is not in ℤ₍${p}₎.`;
    if (s === "unit") return `${a}/${b} = ${red}: in ℤ₍${p}₎, and a unit, with inverse ${b / g}/${a / g}.`;
    return `${a}/${b} = ${red}: in ℤ₍${p}₎ but not a unit, since ${p} divides the numerator. It lies in the maximal ideal ${p}ℤ₍${p}₎.`;
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="prime">
        {[2, 3, 5].map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "seg is-on" : "seg"} onClick={() => setP(q)}>localise at {q}</button>)}
      </div>
      <svg viewBox="0 0 470 470" role="img" aria-label="A grid of fractions a over b, coloured by their status" style={{ width: "100%", maxWidth: 470, display: "block", margin: "8px auto 0" }}>
        {Array.from({ length: M }, (_, i) => <text key={`a${i}`} x={O + i * S + S / 2} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>a={i + 1}</text>)}
        {Array.from({ length: M }, (_, j) => <text key={`b${j}`} x={O - 4} y={O + j * S + S / 2 + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>b={j + 1}</text>)}
        {Array.from({ length: M }, (_, j) => Array.from({ length: M }, (_, i) => {
          const a = i + 1, b = j + 1, s = status(a, b), on = sel && sel[0] === a && sel[1] === b;
          return (
            <rect key={`${a}/${b}`} x={O + i * S} y={O + j * S} width={S - 3} height={S - 3} rx={4} onClick={() => setSel([a, b])}
              style={{ cursor: "pointer", fill: s === "unit" ? "var(--accent-soft)" : s === "ideal" ? "var(--bg-subtle)" : "var(--bg)", stroke: on ? "var(--text)" : s === "unit" ? "var(--accent)" : s === "ideal" ? "var(--text-muted)" : "var(--border)", strokeWidth: on ? 3 : 1, strokeDasharray: s === "out" ? "3 3" : undefined }} />
          );
        }))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{sel ? describe(sel[0], sel[1]) : "Click a fraction."}</p>
      <figcaption className="viz-caption">
        Click any square a/b. Shaded with a coloured border: units of ℤ₍{p}₎. Grey: in ℤ₍{p}₎ but not units, together the
        unique maximal ideal. Dashed: not in ℤ₍{p}₎ at all. Localising inverts everything outside the prime ideal ({p}), and
        what remains is a local ring with one maximal ideal.
      </figcaption>
    </figure>
  );
}
