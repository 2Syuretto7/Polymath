"use client";

import { useState } from "react";

const CASES: { name: string; story: string; act: string; rule: string; note: string }[] = [
  {
    name: "the deathbed promise",
    story: "You promised a dying friend to give their savings to their nephew, who is already rich. No one else knows of the promise. Given to a charity fighting malaria, the money would save lives.",
    act: "Break the promise and give to the charity: that act has the better consequences, and no one will ever know.",
    rule: "Keep the promise. A general practice of keeping promises, including secret ones to the dying, has better consequences than a practice of breaking them whenever it seems useful.",
    note: "J. J. C. Smart objected that if keeping the rule here really makes things worse, insisting on it is a kind of rule worship.",
  },
  {
    name: "the surgeon",
    story: "Five patients will die without transplants. A healthy visitor matches all five. The surgeon could kill the visitor in secret and save the five.",
    act: "A simple act utilitarian seems forced to say yes, if it truly stays secret; most add that it could never be counted on to stay secret.",
    rule: "No. A rule allowing doctors to kill patients for their organs would destroy trust in hospitals and cost far more lives than it saves.",
    note: "Cases like this are the main reason rule utilitarianism was developed: it seems to match our sense of justice better.",
  },
  {
    name: "keep off the grass",
    story: "A sign asks people to keep off a new lawn. You are in a hurry, and one person crossing does no harm to the grass.",
    act: "Cross: your crossing does no harm and saves you time.",
    rule: "Do not cross, if the best rule for everyone to follow is to keep off. If everyone reasoned as you do, the lawn would be ruined.",
    note: "But perhaps the best rule is: keep off unless few others are crossing. A rule utilitarian can refine the rule, and that leads to the next case.",
  },
  {
    name: "the murderer at the door",
    story: "Someone bent on murder asks where your friend is hiding.",
    act: "Lie: it saves a life.",
    rule: "Lie too: the best rule is not 'never lie' but 'do not lie, except to prevent serious harm', and this case falls under the exception.",
    note: "The collapse objection, pressed by David Lyons and Smart: if rules may contain every exception that improves the consequences, the best rule just says to do whatever has the best consequences, and rule utilitarianism gives the same verdicts as act utilitarianism.",
  },
];

/** Act and rule utilitarianism compared on four cases. */
export function ActRuleViz() {
  const [k, setK] = useState(0);
  const c = CASES[k];

  return (
    <figure className="viz">
      <div className="viz-controls">
        {CASES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <p style={{ margin: "12px 0 0" }}>{c.story}</p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        {[["Act utilitarianism", "judge each act by its own consequences", c.act], ["Rule utilitarianism", "judge each act by the rule it follows", c.rule]].map(([t, sub, body]) => (
          <div key={t} style={{ flex: "1 1 220px", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px" }}>
            <p style={{ margin: 0, fontWeight: 600 }}>{t}</p>
            <p className="mono-meta" style={{ margin: "2px 0 8px", textTransform: "none" }}>{sub}</p>
            <p style={{ margin: 0, fontSize: 14 }}>{body}</p>
          </div>
        ))}
      </div>
      <figcaption className="viz-caption" aria-live="polite">{c.note}</figcaption>
    </figure>
  );
}
