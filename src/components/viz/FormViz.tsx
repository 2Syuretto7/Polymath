"use client";

import { useState } from "react";

type Form = {
  name: string;
  schema: string[];
  valid: boolean;
  instance: string[];
  /** For an invalid form: a situation, and an instance with true premises and a false conclusion in it. */
  counter?: { situation: string; lines: string[] };
  why: string;
};

const FORMS: Form[] = [
  {
    name: "Modus ponens",
    schema: ["If P, then Q.", "P.", "So Q."],
    valid: true,
    instance: ["If it is raining, the pavement is wet.", "It is raining.", "So the pavement is wet."],
    why: "Whenever both premises are true, P is true, and the first premise says that whenever P is true so is Q.",
  },
  {
    name: "Modus tollens",
    schema: ["If P, then Q.", "Not Q.", "So not P."],
    valid: true,
    instance: ["If the battery were charged, the torch would light.", "The torch does not light.", "So the battery is not charged."],
    why: "If P were true, Q would be too; but Q is false. So P cannot be true.",
  },
  {
    name: "Affirming the consequent",
    schema: ["If P, then Q.", "Q.", "So P."],
    valid: false,
    instance: ["If it is raining, the pavement is wet.", "The pavement is wet.", "So it is raining."],
    counter: {
      situation: "Tibbles is a cat.",
      lines: ["If Tibbles is a dog, Tibbles is a mammal.", "Tibbles is a mammal.", "So Tibbles is a dog."],
    },
    why: "Q can be true for some other reason. The first premise says P is enough for Q, not that P is the only way to get Q.",
  },
  {
    name: "Denying the antecedent",
    schema: ["If P, then Q.", "Not P.", "So not Q."],
    valid: false,
    instance: ["If it is raining, the pavement is wet.", "It is not raining.", "So the pavement is not wet."],
    counter: {
      situation: "Tibbles is a cat.",
      lines: ["If Tibbles is a dog, Tibbles is a mammal.", "Tibbles is not a dog.", "So Tibbles is not a mammal."],
    },
    why: "The first premise says nothing about what happens when P is false. Q may still be true.",
  },
  {
    name: "Disjunctive syllogism",
    schema: ["P or Q.", "Not P.", "So Q."],
    valid: true,
    instance: ["The keys are in my bag or on the table.", "They are not in my bag.", "So they are on the table."],
    why: "At least one of P and Q is true, and it is not P. So it must be Q.",
  },
  {
    name: "Affirming a disjunct",
    schema: ["P or Q.", "P.", "So not Q."],
    valid: false,
    instance: ["Ravi is a student or Ravi has a job.", "Ravi is a student.", "So Ravi does not have a job."],
    counter: {
      situation: "Ravi is a student who also works in a café.",
      lines: ["Ravi is a student or Ravi has a job.", "Ravi is a student.", "So Ravi does not have a job."],
    },
    why: "In logic, 'or' allows both. Knowing one side is true tells you nothing about the other.",
  },
];

/** Argument forms: guess whether each is valid, then see why, with a counterexample for each invalid one. */
export function FormViz() {
  const [f, setF] = useState(0);
  const [guess, setGuess] = useState<(boolean | null)[]>(FORMS.map(() => null));
  const form = FORMS[f];
  const g = guess[f];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Argument form">
        {FORMS.map((x, i) => (
          <button key={x.name} type="button" className={i === f ? "btn btn-primary" : "btn"} aria-pressed={i === f} onClick={() => setF(i)}>
            {x.name}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 12 }}>
        <div>
          <p className="mono-meta" style={{ margin: "0 0 4px" }}>The form</p>
          {form.schema.map((s) => <p key={s} className="mono" style={{ margin: "2px 0" }}>{s}</p>)}
        </div>
        <div>
          <p className="mono-meta" style={{ margin: "0 0 4px" }}>An instance</p>
          {form.instance.map((s) => <p key={s} style={{ margin: "2px 0", fontFamily: "var(--font-serif)", fontSize: 15 }}>{s}</p>)}
        </div>
      </div>
      <div className="viz-controls" role="group" aria-label="Your verdict">
        <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>Is the form valid?</span>
        <button type="button" className={g === true ? "btn btn-primary" : "btn"} aria-pressed={g === true} onClick={() => setGuess((a) => a.map((x, i) => (i === f ? true : x)))}>Valid</button>
        <button type="button" className={g === false ? "btn btn-primary" : "btn"} aria-pressed={g === false} onClick={() => setGuess((a) => a.map((x, i) => (i === f ? false : x)))}>Invalid</button>
      </div>
      {g !== null && (
        <>
          <p className={`viz-verdict ${g === form.valid ? "viz-verdict-right" : "viz-verdict-wrong"}`} style={{ margin: "8px 0 0" }}>
            {g === form.valid ? "Right: " : "Not quite: "}{form.name.toLowerCase()} is {form.valid ? "valid" : "invalid"}.
          </p>
          {form.counter && (
            <div style={{ marginTop: 10, padding: "8px 12px", border: "1px solid var(--danger)", borderRadius: "var(--radius)" }}>
              <p className="mono-meta" style={{ margin: "0 0 4px" }}>A counterexample. Suppose: {form.counter.situation}</p>
              {form.counter.lines.map((s, i) => (
                <p key={s} style={{ margin: "2px 0", fontFamily: "var(--font-serif)", fontSize: 15 }}>
                  {s} <span className="mono-meta">{i < 2 ? "true" : "false"}</span>
                </p>
              ))}
            </div>
          )}
        </>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {g === null
          ? "Look at the form, not at whether the instance sounds convincing. Then give your verdict."
          : form.why + (form.counter ? " One instance with true premises and a false conclusion is enough to show the form is invalid." : " No instance of this form can have true premises and a false conclusion.")}
      </figcaption>
    </figure>
  );
}
