"use client";

import { useState } from "react";

export type Term = { t: "var"; n: string } | { t: "lam"; v: string; b: Term } | { t: "app"; f: Term; a: Term };
const V = (n: string): Term => ({ t: "var", n });
const L = (v: string, b: Term): Term => ({ t: "lam", v, b });
const A = (f: Term, ...as: Term[]): Term => as.reduce<Term>((g, a) => ({ t: "app", f: g, a }), f);

export function show(x: Term): string {
  if (x.t === "var") return x.n;
  if (x.t === "lam") { let vs = x.v, b = x.b; while (b.t === "lam") { vs += b.v; b = b.b; } return `λ${vs}.${show(b)}`; }
  const f = x.f.t === "lam" ? `(${show(x.f)})` : show(x.f);
  const a = x.a.t === "var" ? show(x.a) : `(${show(x.a)})`;
  return `${f} ${a}`;
}
const free = (x: Term): Set<string> => x.t === "var" ? new Set([x.n]) : x.t === "lam" ? new Set([...free(x.b)].filter((n) => n !== x.v)) : new Set([...free(x.f), ...free(x.a)]);
/** Capture-avoiding substitution x[v := s]. */
function subst(x: Term, v: string, s: Term): Term {
  if (x.t === "var") return x.n === v ? s : x;
  if (x.t === "app") return { t: "app", f: subst(x.f, v, s), a: subst(x.a, v, s) };
  if (x.v === v) return x;
  if (free(s).has(x.v)) { let w = x.v + "′"; while (free(s).has(w) || free(x.b).has(w)) w += "′"; return L(w, subst(subst(x.b, x.v, V(w)), v, s)); }
  return L(x.v, subst(x.b, v, s));
}
/** One step of normal-order (leftmost outermost) β-reduction, or null at a normal form. */
export function step(x: Term): Term | null {
  if (x.t === "app" && x.f.t === "lam") return subst(x.f.b, x.f.v, x.a);
  if (x.t === "app") { const f = step(x.f); if (f) return { t: "app", f, a: x.a }; const a = step(x.a); return a ? { t: "app", f: x.f, a } : null; }
  if (x.t === "lam") { const b = step(x.b); return b ? L(x.v, b) : null; }
  return null;
}
const one = L("f", L("x", A(V("f"), V("x"))));
const two = L("f", L("x", A(V("f"), A(V("f"), V("x")))));
const plus = L("m", L("n", L("f", L("x", A(V("m"), V("f"), A(V("n"), V("f"), V("x")))))));
const omega = L("x", A(V("x"), V("x")));
export const TERMS: { label: string; term: Term }[] = [
  { label: "K a b", term: A(L("x", L("y", V("x"))), V("a"), V("b")) },
  { label: "twice I z", term: A(two, L("y", V("y")), V("z")) },
  { label: "plus 1 2", term: A(plus, one, two) },
  { label: "capture", term: A(L("x", L("y", A(V("x"), V("y")))), V("y")) },
  { label: "Ω", term: A(omega, omega) },
];
/** The reduction sequence, up to a cap of max steps. */
export function trace(term: Term, max = 12) { const seq = [term]; for (let i = 0; i < max; i++) { const nx = step(seq[seq.length - 1]); if (!nx) break; seq.push(nx); } return seq; }

/** Step through normal-order β-reduction of a few λ-terms. */
export function BetaReduceViz() {
  const [k, setK] = useState(2);
  const [n, setN] = useState(0);
  const seq = trace(TERMS[k].term, 10);
  const normal = step(seq[seq.length - 1]) === null;
  const shown = Math.min(n, seq.length - 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="term">
        {TERMS.map((T, i) => <button key={T.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setN(0); }}>{T.label}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setN(Math.min(n + 1, seq.length - 1))} disabled={shown >= seq.length - 1}>β-reduce once</button>
        <button type="button" className="btn btn-ghost" onClick={() => setN(seq.length - 1)}>Reduce all</button>
        <button type="button" className="btn btn-ghost" onClick={() => setN(0)}>Reset</button>
      </div>
      <ol className="mono" style={{ fontSize: 13, lineHeight: 1.7, margin: "10px 0", paddingLeft: 28, overflowWrap: "anywhere" }}>
        {seq.slice(0, shown + 1).map((x, i) => <li key={i} style={{ color: i === shown ? "var(--text)" : "var(--text-muted)" }}>{show(x)}</li>)}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {shown} step{shown === 1 ? "" : "s"} taken. {shown === seq.length - 1 ? (normal ? "Normal form reached: no redex remains." : "Still reducible: this term has no normal form, and reduction can go on for ever.") : "A redex (λx.M) N remains."}
      </p>
      <figcaption className="viz-caption">
        β-reduction replaces (λx.M) N by M with N substituted for x, renaming bound variables when needed so that free
        variables are not captured: see the term called capture. Church numerals represent n as λf.λx.f(…f(x)), applying
        f n times, and plus 1 2 reduces to the numeral 3. Ω reduces to itself for ever.
      </figcaption>
    </figure>
  );
}
