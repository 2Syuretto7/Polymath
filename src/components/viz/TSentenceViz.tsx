"use client";

import { useState } from "react";

type Atom = { n: "Schnee" | "Gras"; p: "weiß" | "grün"; neg: boolean };
type S = { kind: "atom"; a: Atom } | { kind: "and"; l: Atom; r: Atom };
const REF = { Schnee: "snow", Gras: "grass" } as const;
const PRED = { "weiß": "white", "grün": "green" } as const;
const SENTS: S[] = [
  { kind: "atom", a: { n: "Schnee", p: "weiß", neg: false } },
  { kind: "atom", a: { n: "Gras", p: "weiß", neg: false } },
  { kind: "atom", a: { n: "Schnee", p: "grün", neg: true } },
  { kind: "and", l: { n: "Schnee", p: "weiß", neg: false }, r: { n: "Gras", p: "grün", neg: false } },
];
const de = (a: Atom) => `${a.n} ist ${a.neg ? "nicht " : ""}${a.p}`;
const en = (a: Atom) => `${REF[a.n]} is ${a.neg ? "not " : ""}${PRED[a.p]}`;
const text = (s: S) => (s.kind === "atom" ? de(s.a) : `${de(s.l)} und ${de(s.r)}`);

/** A small Tarski-style truth theory for a fragment of German, deriving a T-sentence for each sentence. */
export function TSentenceViz() {
  const [si, setSi] = useState(3);
  const [col, setCol] = useState<Record<string, "weiß" | "grün">>({ Schnee: "weiß", Gras: "grün" });
  const s = SENTS[si];
  const val = (a: Atom) => (col[a.n] === a.p) !== a.neg;
  const atoms = s.kind === "atom" ? [s.a] : [s.l, s.r];
  const steps: string[] = [];
  for (const a of atoms) {
    steps.push(`“${a.n}” refers to ${REF[a.n]}`);
    steps.push(`“ist ${a.p}” is true of x iff x is ${PRED[a.p]}`);
    if (a.neg) steps.push(`“N ist nicht F” is true iff “N ist F” is not true`);
    steps.push(`so “${de(a)}” is true iff ${en(a)}`);
  }
  if (s.kind === "and") steps.push(`“A und B” is true iff A is true and B is true`);
  const tSent = `“${text(s)}” is true iff ${s.kind === "atom" ? en(s.a) : `${en(s.l)} and ${en(s.r)}`}`;
  const truth = atoms.every(val);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sentence">
        {SENTS.map((x, i) => <button key={i} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{text(x)}</button>)}
      </div>
      <ol style={{ margin: "10px 0", paddingLeft: 22, display: "grid", gap: 3, fontSize: 14 }}>
        {steps.map((t, i) => <li key={i}>{t}</li>)}
      </ol>
      <p style={{ margin: "0 0 10px", padding: "8px 10px", border: "1px solid var(--border)", borderRadius: 6, background: "var(--accent-soft)" }}>
        T-sentence: {tSent}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {(["Schnee", "Gras"] as const).map((n) => (
          <div key={n} className="segmented" role="group" aria-label={`Colour of ${REF[n]}`}>
            <span style={{ alignSelf: "center", fontSize: 13, padding: "0 8px" }}>{REF[n]} is:</span>
            {(["weiß", "grün"] as const).map((p) => <button key={p} type="button" aria-pressed={col[n] === p} className={col[n] === p ? "seg is-on" : "seg"} onClick={() => setCol({ ...col, [n]: p })}>{PRED[p]}</button>)}
          </div>
        ))}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>in this world the sentence is <strong>{truth ? "true" : "false"}</strong></p>
      <figcaption className="viz-caption">
        A finite list of axioms, one for each word and each way of combining words, yields a T-sentence for every sentence of
        the language. Davidson proposed that knowing such a theory is enough to understand the language: the right-hand side
        gives what the sentence means, by stating when it is true.
      </figcaption>
    </figure>
  );
}
