"use client";

import { useState } from "react";
import { FIELDS, makeGF } from "./gfTools";

const ALL = [FIELDS[0], FIELDS[3], FIELDS[4]];
const MODS = ["x² + x + 1 over 𝔽₂", "x³ + x + 1 over 𝔽₂", "x² + 1 over 𝔽₃"];
const BAD = makeGF("𝔽₂[x]/(x² + 1)", 2, [1, 0, 1]);

/** Building a finite field as 𝔽ₚ[x]/(m): the multiplication table, and the Frobenius map a ↦ aᵖ. */
export function FiniteFieldViz() {
  const [fi, setFi] = useState(0);
  const [op, setOp] = useState(1);
  const F = fi === 3 ? BAD : ALL[fi];
  const els = Array.from({ length: F.q }, (_, i) => i);
  const f = (a: number, b: number) => (op ? F.mul(a, b) : F.add(a, b));
  const zeroDiv = fi === 3;
  const frob = els.map((a) => F.pow(a, F.p));
  const fixed = els.filter((a) => frob[a] === a).length;
  const allQ = els.every((a) => F.pow(a, F.q) === a);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Field">
        {[...ALL.map((g, i) => `${g.name} = ${MODS[i]}`), "𝔽₂[x]/(x² + 1)"].map((l, i) => <button key={l} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{l}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Operation" style={{ marginTop: 8 }}>
        {["addition", "multiplication"].map((l, i) => <button key={l} type="button" aria-pressed={op === i} className={op === i ? "seg is-on" : "seg"} onClick={() => setOp(i)}>{l}</button>)}
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table mono" style={{ width: "auto", fontSize: 12 }}>
          <thead><tr><th style={{ textTransform: "none" }}>{op ? "×" : "+"}</th>{els.map((b) => <th key={b} style={{ textTransform: "none" }}>{F.label(b)}</th>)}</tr></thead>
          <tbody>
            {els.map((a) => (
              <tr key={a}>
                <td><strong>{F.label(a)}</strong></td>
                {els.map((b) => { const v = f(a, b); const hot = op === 1 && a && b && v === 0; const one = op === 1 && v === 1; return <td key={b} style={{ color: hot ? "var(--danger)" : one ? "var(--accent)" : undefined, fontWeight: hot || one ? 700 : 400 }}>{F.label(v)}</td>; })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 6 }}>
        {zeroDiv ? (
          <div>x² + 1 = (x + 1)² over 𝔽₂ is reducible, so (x + 1)(x + 1) = 0: zero divisors, not a field</div>
        ) : (
          <>
            <div>{F.q} elements; every non-zero element has an inverse (each row of × contains 1)</div>
            <div>Frobenius a ↦ a{F.p === 2 ? "²" : "³"}: {els.map((a) => `${F.label(a)}↦${F.label(frob[a])}`).join(", ")}; fixed points: {fixed} = 𝔽{F.p === 2 ? "₂" : "₃"}</div>
            <div>a raised to the power {F.q} equals a for every a: {allQ ? "yes" : "no"}, so the field is the set of roots of x to the {F.q} minus x</div>
          </>
        )}
      </div>
      <figcaption className="viz-caption">
        Elements are polynomials of degree below n with coefficients mod p, multiplied modulo an irreducible polynomial m of
        degree n. Products equal to 1 are highlighted. With a reducible modulus, the last choice, non-zero elements multiply to 0.
      </figcaption>
    </figure>
  );
}
