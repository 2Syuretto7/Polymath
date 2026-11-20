"use client";

import { useState } from "react";

/** Quadratic fields ℚ(√d) with their discriminants D; each lies in ℚ(ζₘ) for m = |D|. */
export const QFIELDS = [
  { d: 5, D: 5 },
  { d: -3, D: -3 },
  { d: -1, D: -4 },
  { d: 2, D: 8 },
  { d: 3, D: 12 },
  { d: -5, D: -20 },
];

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

function chiPrime(D: number, p: number) {
  if (p === 2) {
    if (D % 2 === 0) return 0;
    const r = ((D % 8) + 8) % 8;
    return r === 1 || r === 7 ? 1 : -1;
  }
  const r = ((D % p) + p) % p;
  if (r === 0) return 0;
  let e = (p - 1) / 2, b = r, acc = 1;
  while (e > 0) { if (e & 1) acc = (acc * b) % p; b = (b * b) % p; e >>= 1; }
  return acc === 1 ? 1 : -1;
}

/** The Kronecker symbol (D/n) for a positive integer n, multiplicative in n. */
export function kronecker(D: number, n: number) {
  let v = 1, m = n;
  for (let p = 2; p * p <= m; p++) while (m % p === 0) { v *= chiPrime(D, p); m /= p; }
  if (m > 1) v *= chiPrime(D, m);
  return v;
}

/** The units modulo |D| with their character values. */
export function characterTable(D: number) {
  const m = Math.abs(D);
  const out: { a: number; chi: number }[] = [];
  for (let a = 1; a < m; a++) if (gcd(a, m) === 1) out.push({ a, chi: kronecker(D, a) });
  return out;
}

const PR = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
const subs = (n: number) => String(n).split("").map((c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)]).join("");
const fmt = (n: number) => String(n).replace("-", "−");

/** The quadratic character modulo |D|: its kernel cuts out ℚ(√d) inside the cyclotomic field. */
export function QuadraticCharacterViz() {
  const [fi, setFi] = useState(5);
  const f = QFIELDS[fi];
  const m = Math.abs(f.D);
  const tab = characterTable(f.D);
  const ker = tab.filter((t) => t.chi === 1).length;
  const cols = Math.min(tab.length, 8);
  const cw = 58;
  const rows = Math.ceil(tab.length / cols);
  const P = 28 + rows * 34 + 20;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="field">
        {QFIELDS.map((v, i) => <button key={v.d} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>ℚ(√{fmt(v.d)})</button>)}
      </div>
      <svg viewBox={`0 0 540 ${P + 58}`} role="img" aria-label="Values of the quadratic character on the units modulo the discriminant, and the primes that split" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>units modulo {m}, coloured by χ(a)</text>
        {tab.map((t, i) => {
          const x = 14 + (i % cols) * cw, y = 28 + Math.floor(i / cols) * 34;
          return (
            <g key={t.a}>
              <rect x={x} y={y} width={cw - 6} height={28} rx={4} style={{ fill: t.chi === 1 ? "var(--success-soft)" : "var(--danger-soft)", stroke: t.chi === 1 ? "var(--success)" : "var(--danger)" }} />
              <text x={x + (cw - 6) / 2} y={y + 18} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{t.a}: {t.chi === 1 ? "+1" : "−1"}</text>
            </g>
          );
        })}
        <text x={14} y={P - 10} style={{ fill: "var(--text-muted)", fontSize: 11 }}>primes below 60 in ℚ(√{fmt(f.d)})</text>
        {PR.map((p, i) => {
          const c = kronecker(f.D, p);
          const x = 14 + i * 30.5;
          return (
            <g key={p}>
              <rect x={x} y={P} width={27} height={24} rx={3} style={{ fill: c === 1 ? "var(--success-soft)" : c === -1 ? "var(--danger-soft)" : "var(--bg-subtle)", stroke: c === 1 ? "var(--success)" : c === -1 ? "var(--danger)" : "var(--border-strong)" }} />
              <text x={x + 13.5} y={P + 16} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{p}</text>
            </g>
          );
        })}
        <text x={14} y={P + 48} style={{ fill: "var(--success)", fontSize: 11 }}>green: splits</text>
        <text x={110} y={P + 48} style={{ fill: "var(--danger)", fontSize: 11 }}>red: inert</text>
        <text x={190} y={P + 48} style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey: ramified (divides {m})</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ℚ(√{fmt(f.d)}) has discriminant {fmt(f.D)} and lies in ℚ(ζ{subs(m)}). Kernel of χ: {ker} of the {tab.length} units mod {m}, index 2.
      </p>
      <figcaption className="viz-caption">
        The Galois group of ℚ(ζₘ) is the group of units modulo m. A quadratic field ℚ(√d) is the fixed field of the kernel
        of a character χ of order 2 modulo |D|, and an odd prime p not dividing D splits exactly when χ(p) = +1. So whether p
        splits depends only on p modulo |D|: quadratic reciprocity, seen as a statement about cyclotomic fields.
      </figcaption>
    </figure>
  );
}
