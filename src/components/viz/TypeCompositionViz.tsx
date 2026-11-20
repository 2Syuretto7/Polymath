"use client";

import { useState } from "react";

type Ent = "Ann" | "Bob" | "Cat";
const D: Ent[] = ["Ann", "Bob", "Cat"];
const student = new Set<Ent>(["Ann", "Cat"]);
const sleeps = new Set<Ent>(["Ann", "Bob"]);
const likes = new Set(["Ann>Bob", "Bob>Cat", "Cat>Cat", "Ann>Cat"]);
const setStr = (s: Ent[]) => `{${s.join(", ")}}`;

export const SENTENCES: { label: string; lines: [string, string, string][]; value: boolean }[] = [
  {
    label: "Ann sleeps",
    lines: [["Ann", "e", "Ann"], ["sleeps", "⟨e, t⟩", `λx. x ∈ ${setStr([...sleeps])}`], ["sleeps(Ann)", "t", String(sleeps.has("Ann"))]],
    value: sleeps.has("Ann"),
  },
  {
    label: "Ann likes Bob",
    lines: [["Bob", "e", "Bob"], ["likes", "⟨e, ⟨e, t⟩⟩", "λy.λx. x likes y"], ["likes(Bob)", "⟨e, t⟩", `λx. x likes Bob = ${setStr(D.filter((x) => likes.has(`${x}>Bob`)))}`], ["likes(Bob)(Ann)", "t", String(likes.has("Ann>Bob"))]],
    value: likes.has("Ann>Bob"),
  },
  {
    label: "every student sleeps",
    lines: [["every", "⟨⟨e, t⟩, ⟨⟨e, t⟩, t⟩⟩", "λP.λQ. every P is Q"], ["student", "⟨e, t⟩", setStr([...student])], ["every(student)", "⟨⟨e, t⟩, t⟩", "λQ. every student is Q"], ["sleeps", "⟨e, t⟩", setStr([...sleeps])], ["every(student)(sleeps)", "t", String([...student].every((x) => sleeps.has(x)))]],
    value: [...student].every((x) => sleeps.has(x)),
  },
  {
    label: "some student likes Cat",
    lines: [["some", "⟨⟨e, t⟩, ⟨⟨e, t⟩, t⟩⟩", "λP.λQ. some P is Q"], ["student", "⟨e, t⟩", setStr([...student])], ["some(student)", "⟨⟨e, t⟩, t⟩", "λQ. some student is Q"], ["likes(Cat)", "⟨e, t⟩", setStr(D.filter((x) => likes.has(`${x}>Cat`)))], ["some(student)(likes(Cat))", "t", String([...student].some((x) => likes.has(`${x}>Cat`)))]],
    value: [...student].some((x) => likes.has(`${x}>Cat`)),
  },
];

/** Montague-style composition: each word has a type, and meanings combine by function application. */
export function TypeCompositionViz() {
  const [k, setK] = useState(2);
  const [n, setN] = useState(99);
  const S = SENTENCES[k];
  const shown = Math.min(n, S.lines.length);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sentence">
        {SENTENCES.map((x, i) => <button key={x.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setN(99); }}>{x.label}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setN(1)}>Start again</button>
        <button type="button" className="btn btn-primary" onClick={() => setN(Math.min(shown + 1, S.lines.length))} disabled={shown >= S.lines.length}>Next line</button>
      </div>
      <table className="mono" style={{ fontSize: 12.5, borderCollapse: "collapse", width: "100%", marginTop: 8 }}>
        <thead>
          <tr style={{ color: "var(--text-muted)", textAlign: "left" }}><th style={{ padding: "4px 6px" }}>expression</th><th style={{ padding: "4px 6px" }}>type</th><th style={{ padding: "4px 6px" }}>value in the model</th></tr>
        </thead>
        <tbody>
          {S.lines.slice(0, shown).map(([e, t, v], i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--border)", fontWeight: i === S.lines.length - 1 ? 700 : 400 }}>
              <td style={{ padding: "4px 6px" }}>{e}</td><td style={{ padding: "4px 6px", color: "var(--accent)" }}>{t}</td><td style={{ padding: "4px 6px" }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Model: students {setStr([...student])}; sleepers {setStr([...sleeps])}; likes: Ann→Bob, Ann→Cat, Bob→Cat, Cat→Cat. {shown === S.lines.length ? `The sentence is ${S.value ? "true" : "false"}.` : ""}
      </p>
      <figcaption className="viz-caption">
        Names denote entities, of type e. Intransitive verbs and common nouns denote functions from entities to truth
        values, type ⟨e, t⟩. A function of type ⟨a, b⟩ applies to an argument of type a to give something of type b, and
        a sentence is well formed when the types fit together to give t. Quantifiers like &lsquo;every&rsquo; are relations
        between two sets.
      </figcaption>
    </figure>
  );
}
