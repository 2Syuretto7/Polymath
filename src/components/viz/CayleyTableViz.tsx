"use client";

import { useState } from "react";

const SETS = {
  add6: { name: "ℤ₆ under +", els: [0, 1, 2, 3, 4, 5], op: (a: number, b: number) => (a + b) % 6 },
  mul6: { name: "ℤ₆ under ×", els: [0, 1, 2, 3, 4, 5], op: (a: number, b: number) => (a * b) % 6 },
  mul5: { name: "{1, 2, 3, 4} under × mod 5", els: [1, 2, 3, 4], op: (a: number, b: number) => (a * b) % 5 },
  sub5: { name: "ℤ₅ under −", els: [0, 1, 2, 3, 4], op: (a: number, b: number) => (((a - b) % 5) + 5) % 5 },
};
type K = keyof typeof SETS;

/** Is it a group? Fill in the operation table and test the axioms one by one. */
export function CayleyTableViz() {
  const [k, setK] = useState<K>("add6");
  const S = SETS[k];
  const { els, op } = S;
  const closed = els.every((a) => els.every((b) => els.includes(op(a, b))));
  let assocFail: number[] | null = null;
  for (const a of els) for (const b of els) for (const c of els) {
    if (!assocFail && op(op(a, b), c) !== op(a, op(b, c))) assocFail = [a, b, c];
  }
  const e = els.find((x) => els.every((a) => op(x, a) === a && op(a, x) === a));
  const noInv = e === undefined ? els : els.filter((a) => !els.some((b) => op(a, b) === e && op(b, a) === e));
  const comm = els.every((a) => els.every((b) => op(a, b) === op(b, a)));
  const group = closed && !assocFail && e !== undefined && noInv.length === 0;
  const cell = { padding: "6px 10px", textAlign: "center" as const, border: "1px solid var(--border)" };

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set and operation">
        {(Object.keys(SETS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{SETS[q].name}</button>
        ))}
      </div>
      <div style={{ overflowX: "auto", marginTop: 12 }}>
        <table className="mono" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
          <thead>
            <tr><th style={{ ...cell, color: "var(--text-muted)" }}>a ∗ b</th>{els.map((b) => <th key={b} style={{ ...cell, background: "var(--bg-subtle)" }}>{b}</th>)}</tr>
          </thead>
          <tbody>
            {els.map((a) => (
              <tr key={a}>
                <th style={{ ...cell, background: "var(--bg-subtle)" }}>{a}</th>
                {els.map((b) => {
                  const v = op(a, b);
                  const isE = e !== undefined && v === e;
                  const bad = noInv.includes(a) && e !== undefined;
                  return <td key={b} style={{ ...cell, background: isE ? "var(--accent-soft)" : "transparent", color: bad ? "var(--danger)" : "var(--text)" }}>{v}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td>closure</td><td>{closed ? "yes: every entry is in the set" : "no"}</td></tr>
          <tr><td>associativity</td><td>{assocFail ? `no: (${assocFail[0]} ∗ ${assocFail[1]}) ∗ ${assocFail[2]} = ${op(op(assocFail[0], assocFail[1]), assocFail[2])}, but ${assocFail[0]} ∗ (${assocFail[1]} ∗ ${assocFail[2]}) = ${op(assocFail[0], op(assocFail[1], assocFail[2]))}` : "yes: checked for every triple"}</td></tr>
          <tr><td>identity</td><td>{e !== undefined ? `yes: ${e}` : "no element leaves every other unchanged on both sides"}</td></tr>
          <tr><td>inverses</td><td>{e === undefined ? "not defined without an identity" : noInv.length ? `no: ${noInv.join(", ")} ${noInv.length > 1 ? "have" : "has"} no inverse` : "yes: the identity appears once in every row"}</td></tr>
          <tr><td>a group?</td><td>{group ? (comm ? "yes, and abelian: the table is symmetric" : "yes") : "no"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "add6"
          ? "Clock arithmetic with six hours. Every row is a rearrangement of the set, which is how a group table always looks."
          : k === "mul6"
            ? "Multiplication mod 6 has identity 1, but 0, 2, 3 and 4 have no inverse: no entry in their rows is 1."
            : k === "mul5"
              ? "Throw away 0 and use a prime modulus, and every element has an inverse: 2 × 3 = 6 = 1 mod 5."
              : "Subtraction is closed, but it is not associative, and 0 works only on the right: 0 − 1 is 4, not 1."}
      </figcaption>
    </figure>
  );
}
