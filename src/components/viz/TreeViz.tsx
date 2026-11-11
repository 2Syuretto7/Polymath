"use client";

import { useState } from "react";

/** A line of a tree, and the step at which it is ticked off as decomposed. */
export type TreeLine = { t: string; tick?: number; at?: number };
/** A node is a run of lines, shown from step `at`, ending either in a split, a close (×), or an open end (○). */
export type TreeNode = { at: number; lines: TreeLine[]; kids?: TreeNode[]; close?: number; open?: number };
export type Tree = { name: string; claim: string; root: TreeNode; notes: string[]; verdict: string };

const TREES: Tree[] = [
  {
    name: "Modus ponens",
    claim: "A → B, A ∴ B",
    root: {
      at: 0, lines: [{ t: "A → B", tick: 1 }, { t: "A" }, { t: "¬B" }],
      kids: [{ at: 1, lines: [{ t: "¬A" }], close: 2 }, { at: 1, lines: [{ t: "B" }], close: 2 }],
    },
    notes: [
      "List the premises and the negation of the conclusion. We are asking: can these all be true together?",
      "A → B is true when ¬A is true or when B is true, so the tree branches. Tick A → B: it has been dealt with.",
      "Each branch now contains a sentence and its negation (A and ¬A on the left, B and ¬B on the right). Both close.",
    ],
    verdict: "Every branch closes, so the premises and the negated conclusion cannot all be true. The argument is valid.",
  },
  {
    name: "Affirming the consequent",
    claim: "A → B, B ∴ A",
    root: {
      at: 0, lines: [{ t: "A → B", tick: 1 }, { t: "B" }, { t: "¬A" }],
      kids: [{ at: 1, lines: [{ t: "¬A" }], open: 2 }, { at: 1, lines: [{ t: "B" }], open: 2 }],
    },
    notes: [
      "List the premises and the negation of the conclusion.",
      "Branch on A → B: either ¬A or B.",
      "Neither branch contains a sentence and its negation, and nothing is left to decompose. Both stay open.",
    ],
    verdict: "An open branch is a recipe for a counterexample. Read off its letters: ¬A and B, so A false and B true. Then both premises are true and the conclusion false. Invalid.",
  },
  {
    name: "Disjunctive syllogism",
    claim: "A ∨ B, ¬A ∴ B",
    root: {
      at: 0, lines: [{ t: "A ∨ B", tick: 1 }, { t: "¬A" }, { t: "¬B" }],
      kids: [{ at: 1, lines: [{ t: "A" }], close: 2 }, { at: 1, lines: [{ t: "B" }], close: 2 }],
    },
    notes: [
      "List the premises and the negation of the conclusion.",
      "A disjunction is true when one of its parts is, so branch: A or B.",
      "The left branch has A and ¬A; the right has B and ¬B. Both close.",
    ],
    verdict: "All branches close. Valid.",
  },
  {
    name: "A De Morgan slip",
    claim: "¬(A ∧ B) ∴ ¬A ∧ ¬B",
    root: {
      at: 0, lines: [{ t: "¬(A ∧ B)", tick: 1 }, { t: "¬(¬A ∧ ¬B)", tick: 2 }],
      kids: [
        {
          at: 1, lines: [{ t: "¬A" }],
          kids: [{ at: 2, lines: [{ t: "¬¬A", tick: 3 }, { t: "A", at: 3 }], close: 3 }, { at: 2, lines: [{ t: "¬¬B", tick: 3 }, { t: "B", at: 3 }], open: 4 }],
        },
        {
          at: 1, lines: [{ t: "¬B" }],
          kids: [{ at: 2, lines: [{ t: "¬¬A", tick: 3 }, { t: "A", at: 3 }], open: 4 }, { at: 2, lines: [{ t: "¬¬B", tick: 3 }, { t: "B", at: 3 }], close: 3 }],
        },
      ],
    },
    notes: [
      "List the premise and the negation of the conclusion.",
      "¬(A ∧ B) is true when ¬A or ¬B is: branch.",
      "¬(¬A ∧ ¬B) is true when ¬¬A or ¬¬B is. It must be decomposed on every open branch below it, so each branch splits again.",
      "Double negations give A and B. Two branches close; two stay open.",
      "Nothing is left to decompose. Read a counterexample off an open branch.",
    ],
    verdict: "The open branch ¬A, B gives A false and B true: then ¬(A ∧ B) is true but ¬A ∧ ¬B is false. Invalid: 'not both' does not mean 'neither'.",
  },
];

function NodeView({ n, step }: { n: TreeNode; step: number }) {
  if (n.at > step) return null;
  const kidsShown = n.kids && n.kids[0].at <= step;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 0, flex: 1 }}>
      {n.lines.filter((l) => (l.at ?? n.at) <= step).map((l, i) => (
        <span key={i} className="mono" style={{ fontSize: 14, lineHeight: "24px", whiteSpace: "nowrap" }}>
          {l.t}{l.tick !== undefined && l.tick <= step ? <span style={{ color: "var(--accent)" }}> ✓</span> : null}
        </span>
      ))}
      {n.close !== undefined && n.close <= step && <span style={{ color: "var(--danger)", fontWeight: 600, lineHeight: "24px" }} aria-label="closed">×</span>}
      {n.open !== undefined && n.open <= step && <span style={{ color: "var(--accent)", fontWeight: 600, lineHeight: "24px" }} aria-label="open">○</span>}
      {kidsShown && (
        <div style={{ display: "flex", gap: 10, width: "100%", marginTop: 4, paddingTop: 6, borderTop: "1.5px solid var(--border-strong)" }}>
          {n.kids!.map((k, i) => <NodeView key={i} n={k} step={step} />)}
        </div>
      )}
    </div>
  );
}

/** Truth trees, built one step at a time. */
export function TreeViz({ trees = TREES }: { trees?: Tree[] }) {
  const [k, setK] = useState(0);
  const [step, setStep] = useState(0);
  const T = trees[k];
  const last = T.notes.length - 1;
  const pick = (i: number) => { setK(i); setStep(0); };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Argument">
        {trees.map((t, i) => (
          <button key={t.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{t.name}</button>
        ))}
      </div>
      <p className="mono" style={{ margin: "12px 0 8px" }}>Test: {T.claim}</p>
      <div style={{ overflowX: "auto", padding: "8px 0", border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
        <div style={{ minWidth: 300, maxWidth: 460, margin: "0 auto" }}>
          <NodeView n={T.root} step={step} />
        </div>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setStep(0)} disabled={step === 0}>Start again</button>
        <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)} disabled={step >= last}>Next step</button>
        <span className="mono-meta">step {step + 1} of {last + 1}</span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {T.notes[step]}{step === last ? ` ${T.verdict}` : ""}
      </figcaption>
    </figure>
  );
}
