"use client";

import { useState } from "react";

type Case = { name: string; a: string; b: string; deed: string; abelard: string };

const CASES: Case[] = [
  {
    name: "two hangings",
    a: "A judge has a guilty criminal hanged, out of zeal for justice.",
    b: "Another judge hangs the same criminal, out of hatred for them.",
    deed: "The same act, the same outcome: a guilty person hanged by lawful sentence. Judged by the deed, the two judges are alike.",
    abelard: "Abelard's own example. The first judge acts well, the second sins, though they do exactly the same thing. What differs is the intention.",
  },
  {
    name: "two almsgivers",
    a: "One person gives money to the poor to relieve their need.",
    b: "Another gives the same amount so that others will praise their generosity.",
    deed: "Both give the same sum to the same people, who are helped equally.",
    abelard: "Only the first acts well. The second's act is outwardly good but done for the sake of vanity, and so has no moral merit.",
  },
  {
    name: "the plan that fails",
    a: "One person resolves to steal from a neighbour and goes to do it, but finds the house locked.",
    b: "Another resolves to steal and succeeds.",
    deed: "Only the second has taken anything; the first has done no harm at all.",
    abelard: "Both are equally guilty before God, since both consented to the theft. Human courts rightly punish only the deed, because they cannot see the heart.",
  },
  {
    name: "the unknowing",
    a: "A person marries, not knowing that the spouse is a close relative.",
    b: "A person kills someone by accident, with no intention of harm and no carelessness.",
    deed: "Both have done what is forbidden: an unlawful marriage, a killing.",
    abelard: "Neither sins, since neither consented to anything they knew to be wrong. Abelard concluded, controversially, that those who crucified Christ in ignorance did not sin in doing so.",
  },
];

/** Pairs of cases that look alike from outside but differ inside, judged by the deed and by Abelard's test of consent. */
export function IntentionViz() {
  const [k, setK] = useState(0);
  const [lens, setLens] = useState<"deed" | "intention">("deed");
  const c = CASES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Case" style={{ flexWrap: "wrap" }}>
        {CASES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <ul className="tagger" style={{ marginTop: 12 }}>
        <li className="tagger-row"><p className="tagger-text" style={{ margin: 0 }}>{c.a}</p></li>
        <li className="tagger-row"><p className="tagger-text" style={{ margin: 0 }}>{c.b}</p></li>
      </ul>
      <div className="segmented" role="group" aria-label="Judge by" style={{ marginTop: 12 }}>
        <button type="button" className={lens === "deed" ? "seg is-on" : "seg"} aria-pressed={lens === "deed"} onClick={() => setLens("deed")}>judge by the deed</button>
        <button type="button" className={lens === "intention" ? "seg is-on" : "seg"} aria-pressed={lens === "intention"} onClick={() => setLens("intention")}>judge by consent, as Abelard does</button>
      </div>
      <p className="tagger-why" style={{ marginTop: 12 }} aria-live="polite">{lens === "deed" ? c.deed : c.abelard}</p>
      <figcaption className="viz-caption">
        For Abelard, sin lies in consenting to what one believes is contrary to God&rsquo;s will. Desires, and the outward
        deed, add nothing to guilt or merit.
      </figcaption>
    </figure>
  );
}
