"use client";

import { useState } from "react";

type Lens = "justice" | "care";
type Feature = { text: string; lens: Lens | "both" };
type Case = { name: string; story: string; features: Feature[]; ask: Record<Lens, string>; answer: Record<Lens, string> };

const CASES: Case[] = [
  {
    name: "Heinz",
    story:
      "Heinz's wife is dying. A chemist has the only drug that might save her and charges ten times what it costs to make. Heinz cannot raise the money. Should Heinz steal the drug?",
    features: [
      { text: "the right to life outweighs the right to property", lens: "justice" },
      { text: "stealing breaks a law that applies to everyone", lens: "justice" },
      { text: "the wife will die without the drug", lens: "both" },
      { text: "if Heinz goes to prison, who will look after his wife?", lens: "care" },
      { text: "the chemist might agree if someone talked to them", lens: "care" },
      { text: "a loan or a payment plan could be arranged", lens: "care" },
      { text: "a judge would be lenient in the circumstances", lens: "justice" },
    ],
    ask: {
      justice: "Which right or principle ranks higher, and what would an impartial judge decide?",
      care: "How can the relationships here be kept intact, so that nobody is left alone or hurt?",
    },
    answer: {
      justice:
        "Jake, aged eleven in Kohlberg's study, said Heinz should steal: life is worth more than money, and a judge would understand. Like a maths problem with people, he said.",
      care:
        "Amy, also eleven, hesitated. Stealing might put Heinz in prison and leave his wife worse off. They should talk to the chemist and find another way. Kohlberg scored her lower; Gilligan heard a different voice.",
    },
  },
  {
    name: "An ageing parent",
    story:
      "A daughter has cared for her father at home for three years. His dementia is worsening, she is exhausted, and her own children see little of her. Should he move to a care home?",
    features: [
      { text: "what do adult children owe their parents, in general?", lens: "justice" },
      { text: "the father's history: what he would have wanted", lens: "care" },
      { text: "her exhaustion is itself a sign the care is failing", lens: "care" },
      { text: "fair division of the burden among siblings", lens: "justice" },
      { text: "his safety at night", lens: "both" },
      { text: "the bond between them, and how a move would feel to him", lens: "care" },
      { text: "her duty to her own children", lens: "both" },
    ],
    ask: {
      justice: "What are her duties, to whom, and how should competing duties be weighed?",
      care: "What does each person in this web of relationships need, including the carer herself?",
    },
    answer: {
      justice:
        "The question becomes one of balancing duties: to her father, to her children, and fairness among siblings. A rule may settle it.",
      care:
        "The details carry the moral weight. Caring well includes caring for oneself; a move done with love and visits can be a way of caring, not abandoning.",
    },
  },
  {
    name: "A struggling student",
    story:
      "A teacher marks an essay from a student whose mother died last month. The essay deserves a fail. Should the teacher give a higher mark?",
    features: [
      { text: "the same standard must apply to every student", lens: "justice" },
      { text: "other students would be treated unfairly", lens: "justice" },
      { text: "what this student needs right now", lens: "care" },
      { text: "the mark is not the only thing the teacher can give", lens: "care" },
      { text: "an extension is permitted by the rules", lens: "both" },
      { text: "the trust between teacher and student", lens: "care" },
    ],
    ask: {
      justice: "What does fairness to all students require?",
      care: "How can the teacher respond to this student as a particular person in need?",
    },
    answer: {
      justice: "The mark must reflect the work. Sympathy is not a reason to grade differently.",
      care:
        "The two lenses can agree on the mark and differ on everything around it: a conversation, an extension, attention to how the student is doing.",
    },
  },
];

/** Look at the same dilemma through the justice lens and the care lens, and see which features each one brings forward. */
export function CareLensViz() {
  const [k, setK] = useState(0);
  const [lens, setLens] = useState<Lens>("justice");
  const c = CASES[k];
  const seen = c.features.filter((f) => f.lens === lens || f.lens === "both").length;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Dilemma">
        {CASES.map((d, i) => (
          <button key={d.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>
            {d.name}
          </button>
        ))}
      </div>
      <p style={{ margin: "12px 0" }}>{c.story}</p>
      <div className="segmented" role="group" aria-label="Lens">
        {(["justice", "care"] as Lens[]).map((l) => (
          <button key={l} type="button" className={l === lens ? "seg is-on" : "seg"} aria-pressed={l === lens} onClick={() => setLens(l)}>
            {l} lens
          </button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "12px 0 6px", textTransform: "none" }}>
        the question it asks: {c.ask[lens]}
      </p>
      <ul className="tagger">
        {c.features.map((f) => {
          const on = f.lens === lens || f.lens === "both";
          return (
            <li key={f.text} className={on ? "tagger-row is-right" : "tagger-row"} style={{ opacity: on ? 1 : 0.45 }}>
              <p className="tagger-text" style={{ margin: 0 }}>{f.text}</p>
            </li>
          );
        })}
      </ul>
      <p className="tagger-why" style={{ marginTop: 12 }}>{c.answer[lens]}</p>
      <figcaption className="viz-caption">
        The {lens} lens brings forward {seen} of the {c.features.length} features. Neither lens sees everything: the faded
        features are still there, only less salient.
      </figcaption>
    </figure>
  );
}
