"use client";

import { useState } from "react";

type Case = { text: string; neg: boolean; pos: boolean; negWhy: string; posWhy: string };
const CASES: Case[] = [
  {
    text: "An occupying power forbids you to leave the country.",
    neg: true, pos: true,
    negWhy: "Other people deliberately block a door you might choose to walk through.",
    posWhy: "You are governed by others, not by yourself or a people you belong to.",
  },
  {
    text: "You are too poor to afford the train fare to the city.",
    neg: false, pos: true,
    negWhy: "On Berlin’s view, mere inability is not unfreedom unless others’ actions cause it. G. A. Cohen replied that lacking money exposes you to interference: the guard will stop you boarding.",
    posWhy: "You lack the means to act on your own purposes, so you are not fully able to direct your life.",
  },
  {
    text: "An addiction keeps you gambling against your own better judgement.",
    neg: false, pos: true,
    negWhy: "No one else interferes with you: the obstacle is inside you.",
    posWhy: "Your ‘lower self’ rules your ‘higher self’: you are not master of yourself.",
  },
  {
    text: "A kindly ruler could stop you at any time, but never does.",
    neg: false, pos: true,
    negWhy: "There is no actual interference, so negative liberty is untouched, as Berlin admitted.",
    posWhy: "You do not govern yourself: you live at another’s pleasure. Republicans call this domination, the topic of the next lesson.",
  },
  {
    text: "The state makes you attend school until you are sixteen.",
    neg: true, pos: false,
    negWhy: "You are coerced: you may not choose to stay away.",
    posWhy: "Schooling builds the capacities for self-direction, so a positive theorist may say it enlarges freedom. Berlin warned that this reasoning can justify coercing people in the name of their ‘real’ selves.",
  },
  {
    text: "You vote in fair elections, but the majority bans your religion.",
    neg: true, pos: false,
    negWhy: "The ban interferes with you whoever made it.",
    posWhy: "Understood as collective self-government, positive liberty is intact: the people rule themselves. Berlin’s point is that democracy and negative liberty can come apart.",
  },
];

/** Berlin's two concepts: predict whether each case reduces negative and positive liberty, then reveal. */
export function LibertyCasesViz() {
  const [ci, setCi] = useState(0);
  const [ans, setAns] = useState<Record<string, boolean>>({});
  const C = CASES[ci];
  const row = (key: "neg" | "pos", label: string) => {
    const k = `${ci}${key}`, a = ans[k];
    const right = C[key];
    return (
      <div style={{ display: "grid", gap: 4, marginTop: 8 }}>
        <div style={{ fontSize: 14 }}><strong>{label}</strong></div>
        <div className="viz-controls">
          {[true, false].map((v) => (
            <button key={String(v)} type="button" aria-pressed={a === v} className={a === v ? "viz-chip is-on" : "viz-chip"} onClick={() => setAns({ ...ans, [k]: v })}>
              {v ? "reduced" : "not reduced"}
            </button>
          ))}
        </div>
        {a !== undefined && (
          <p style={{ margin: 0, fontSize: 14 }}>
            <span style={{ color: a === right ? "var(--accent)" : "var(--danger)", fontWeight: 600 }}>{a === right ? "Agreed." : "Not quite."}</span>{" "}
            {right ? "Reduced" : "Not reduced"}: {key === "neg" ? C.negWhy : C.posWhy}
          </p>
        )}
      </div>
    );
  };
  const done = Object.keys(ans).length;
  return (
    <figure className="viz">
      <div className="viz-controls">
        {CASES.map((c, i) => <button key={c.text} type="button" aria-pressed={ci === i} className={ci === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setCi(i)}>case {i + 1}</button>)}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: 16 }}>{C.text}</p>
      {row("neg", "Negative liberty: is anyone interfering with your choices?")}
      {row("pos", "Positive liberty: are you master of your own life?")}
      <figcaption className="viz-caption">
        {done} of {CASES.length * 2} predictions made. The two concepts often agree, but they come apart in cases of inner
        compulsion, poverty, kindly masters, paternalism and majority rule.
      </figcaption>
    </figure>
  );
}
