"use client";

import { useState } from "react";

type V = [boolean, boolean];
type Form = {
  name: string;
  premises: { text: string; f: (p: boolean, q: boolean) => boolean }[];
  conclusion: { text: string; f: (p: boolean, q: boolean) => boolean };
  example: string;
  note: string;
};

const ifThen = (p: boolean, q: boolean) => !p || q;
const xor = (p: boolean, q: boolean) => p !== q;

/** Chrysippus' five indemonstrables, written with "the first" and "the second", and two invalid look-alikes. */
export const FORMS: Form[] = [
  {
    name: "first indemonstrable",
    premises: [{ text: "If the first, the second.", f: ifThen }, { text: "The first.", f: (p) => p }],
    conclusion: { text: "The second.", f: (_p, q) => q },
    example: "If it is day, it is light. It is day. Therefore it is light.",
    note: "Later logicians call this modus ponens.",
  },
  {
    name: "second indemonstrable",
    premises: [{ text: "If the first, the second.", f: ifThen }, { text: "Not the second.", f: (_p, q) => !q }],
    conclusion: { text: "Not the first.", f: (p) => !p },
    example: "If it is day, it is light. It is not light. Therefore it is not day.",
    note: "Later called modus tollens.",
  },
  {
    name: "third indemonstrable",
    premises: [{ text: "Not both the first and the second.", f: (p, q) => !(p && q) }, { text: "The first.", f: (p) => p }],
    conclusion: { text: "Not the second.", f: (_p, q) => !q },
    example: "Not both: it is day and it is night. It is day. Therefore it is not night.",
    note: "The Stoics used negated conjunctions where we might use a conditional.",
  },
  {
    name: "fourth indemonstrable",
    premises: [{ text: "Either the first or the second (not both).", f: xor }, { text: "The first.", f: (p) => p }],
    conclusion: { text: "Not the second.", f: (_p, q) => !q },
    example: "Either it is day or it is night. It is day. Therefore it is not night.",
    note: "Stoic disjunction is exclusive: exactly one disjunct is true. With an inclusive 'or' this form would fail.",
  },
  {
    name: "fifth indemonstrable",
    premises: [{ text: "Either the first or the second (not both).", f: xor }, { text: "Not the first.", f: (p) => !p }],
    conclusion: { text: "The second.", f: (_p, q) => q },
    example: "Either it is day or it is night. It is not day. Therefore it is night.",
    note: "Valid with either kind of 'or'.",
  },
  {
    name: "affirming the consequent",
    premises: [{ text: "If the first, the second.", f: ifThen }, { text: "The second.", f: (_p, q) => q }],
    conclusion: { text: "The first.", f: (p) => p },
    example: "If it is day, it is light. It is light. Therefore it is day.",
    note: "Invalid: a lamp at night makes it light without its being day.",
  },
  {
    name: "denying the antecedent",
    premises: [{ text: "If the first, the second.", f: ifThen }, { text: "Not the first.", f: (p) => !p }],
    conclusion: { text: "Not the second.", f: (_p, q) => !q },
    example: "If it is day, it is light. It is not day. Therefore it is not light.",
    note: "Invalid, for the same reason.",
  },
];

const ROWS: V[] = [[true, true], [true, false], [false, true], [false, false]];
const tf = (b: boolean) => (b ? "T" : "F");

/** Check each form by truth table, reading the conditional in Philo's way. */
export function IndemonstrablesViz() {
  const [k, setK] = useState(0);
  const f = FORMS[k];
  const bad = ROWS.filter(([p, q]) => f.premises.every((x) => x.f(p, q)) && !f.conclusion.f(p, q));

  return (
    <figure className="viz">
      <div className="viz-controls">
        {FORMS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === k} onClick={() => setK(i)}>
            {x.name}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 12, lineHeight: 1.7 }}>
        {f.premises.map((x) => <div key={x.text}>{x.text}</div>)}
        <div style={{ borderTop: "1px solid var(--border-strong)", display: "inline-block", minWidth: 220 }}>Therefore: {f.conclusion.text}</div>
        <p className="mono-meta" style={{ margin: "6px 0 0", textTransform: "none" }}>{f.example}</p>
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>first</th><th>second</th>
            {f.premises.map((x, i) => <th key={i}>premise {i + 1}</th>)}
            <th>conclusion</th><th></th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([p, q]) => {
            const prem = f.premises.map((x) => x.f(p, q));
            const all = prem.every(Boolean);
            const c = f.conclusion.f(p, q);
            const counter = all && !c;
            return (
              <tr key={`${p}${q}`} style={{ background: all ? (counter ? "transparent" : "var(--accent-soft)") : "transparent", color: counter ? "var(--danger)" : undefined }}>
                <td className="mono">{tf(p)}</td><td className="mono">{tf(q)}</td>
                {prem.map((b, i) => <td key={i} className="mono">{tf(b)}</td>)}
                <td className="mono">{tf(c)}</td>
                <td style={{ fontSize: 13 }}>{counter ? "counterexample" : all ? "premises true, conclusion true" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {bad.length === 0
          ? `Valid: in every row where all the premises are true, so is the conclusion. ${f.note}`
          : `Invalid: the row where the first is ${bad[0][0] ? "true" : "false"} and the second is ${bad[0][1] ? "true" : "false"} makes the premises true and the conclusion false. ${f.note}`}
      </figcaption>
    </figure>
  );
}
