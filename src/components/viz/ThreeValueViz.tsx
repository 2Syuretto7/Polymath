"use client";

import { useState, type CSSProperties } from "react";

type Logic = "K3" | "L3" | "LP";
type Conn = "not" | "and" | "or" | "imp";
const V = [1, 0.5, 0];
const LOGIC: Record<Logic, string> = { K3: "Kleene K3", L3: "Łukasiewicz Ł3", LP: "Priest LP" };
const CONN: Record<Conn, string> = { not: "¬", and: "∧", or: "∨", imp: "→" };

/** Truth tables for three three-valued logics, and which classical laws survive in each. */
export function ThreeValueViz() {
  const [logic, setLogic] = useState<Logic>("K3");
  const [conn, setConn] = useState<Conn>("imp");
  const mid = logic === "LP" ? "B" : "U";
  const name = (v: number) => (v === 1 ? "T" : v === 0 ? "F" : mid);
  const designated = (v: number) => (logic === "LP" ? v >= 0.5 : v === 1);
  const neg = (a: number) => 1 - a;
  const imp = (a: number, b: number) => (logic === "L3" ? Math.min(1, 1 - a + b) : Math.max(1 - a, b));
  const op = (a: number, b: number) => (conn === "and" ? Math.min(a, b) : conn === "or" ? Math.max(a, b) : imp(a, b));
  const laws: { s: string; f: (p: number, q: number) => number }[] = [
    { s: "p ∨ ¬p", f: (p) => Math.max(p, neg(p)) },
    { s: "¬(p ∧ ¬p)", f: (p) => neg(Math.min(p, neg(p))) },
    { s: "p → p", f: (p) => imp(p, p) },
    { s: "(p ∧ ¬p) → q", f: (p, q) => imp(Math.min(p, neg(p)), q) },
    { s: "p → (q → p)", f: (p, q) => imp(p, imp(q, p)) },
  ];
  const valid = (f: (p: number, q: number) => number) => V.every((p) => V.every((q) => designated(f(p, q))));
  const cell: CSSProperties = { border: "1px solid var(--border)", padding: "4px 10px", textAlign: "center" };
  const shade = (v: number): CSSProperties => ({ ...cell, background: designated(v) ? "var(--accent-soft)" : "transparent", fontWeight: designated(v) ? 700 : 400 });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Logic">
        {(["K3", "L3", "LP"] as Logic[]).map((k) => (
          <button key={k} type="button" aria-pressed={logic === k} className={logic === k ? "seg is-on" : "seg"} onClick={() => setLogic(k)}>{LOGIC[k]}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="Connective" style={{ marginTop: 6 }}>
        {(["not", "and", "or", "imp"] as Conn[]).map((k) => (
          <button key={k} type="button" aria-pressed={conn === k} className={conn === k ? "seg is-on" : "seg"} onClick={() => setConn(k)}>{CONN[k]}</button>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 12, alignItems: "flex-start" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 14 }}>
          {conn === "not" ? (
            <tbody>
              <tr><th style={cell}>p</th><th style={cell}>¬p</th></tr>
              {V.map((a) => <tr key={a}><td style={cell}>{name(a)}</td><td style={shade(neg(a))}>{name(neg(a))}</td></tr>)}
            </tbody>
          ) : (
            <tbody>
              <tr><th style={cell}>p {CONN[conn]} q</th>{V.map((b) => <th key={b} style={cell}>q = {name(b)}</th>)}</tr>
              {V.map((a) => (
                <tr key={a}><th style={cell}>p = {name(a)}</th>{V.map((b) => <td key={b} style={shade(op(a, b))}>{name(op(a, b))}</td>)}</tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
          <div>designated values: {logic === "LP" ? `T and ${mid}` : "T only"}</div>
          {laws.map((l) => (
            <div key={l.s} style={{ fontWeight: valid(l.f) ? 700 : 400, color: valid(l.f) ? "var(--text)" : "var(--text-muted)", whiteSpace: "pre" }}>
              {valid(l.f) ? "valid    " : "not valid"}  {l.s}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="viz-caption">
        The values are T, F and a third: U, &ldquo;undetermined&rdquo;, in K3 and Ł3; B, &ldquo;both true and false&rdquo;, in
        LP. Negation swaps T and F and fixes the middle; ∧ takes the lower value and ∨ the higher. The logics differ in the
        conditional and in which values count as designated, that is, as good enough to be asserted. Shaded cells are
        designated. A formula is valid when it is designated under every assignment.
      </figcaption>
    </figure>
  );
}
