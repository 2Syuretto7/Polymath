"use client";

import { useState } from "react";

type Node = { say: string; options?: { label: string; to: string }[]; end?: boolean };
const TREE: Record<string, Node> = {
  start: {
    say: "The sun has risen every morning you have known. So it will rise tomorrow. What justifies the step from the past mornings to tomorrow?",
    options: [
      { label: "It can be demonstrated, by reason alone", to: "demo" },
      { label: "Experience shows it", to: "exp" },
    ],
  },
  demo: {
    say: "No. That the sun will not rise tomorrow is no less intelligible, and implies no more contradiction, than that it will. Whatever can be denied without contradiction cannot be demonstrated.",
    options: [{ label: "Then experience shows it", to: "exp" }],
  },
  exp: {
    say: "Experience tells us only about past mornings. To carry it to tomorrow, we must assume that the future will resemble the past: the uniformity of nature. What justifies that?",
    options: [
      { label: "Nature has always been uniform before", to: "circle" },
      { label: "It is probable, not certain", to: "prob" },
    ],
  },
  circle: {
    say: "That argues from past uniformity to future uniformity, which is the very inference in question. The reasoning goes in a circle.",
    options: [{ label: "So what is left?", to: "custom" }],
  },
  prob: {
    say: "Probability is still reasoning about matters of fact from experience. A probable argument from the past to the future assumes, again, that the future resembles the past. The circle returns.",
    options: [{ label: "So what is left?", to: "custom" }],
  },
  custom: {
    say: "Hume's answer: nothing in reason. It is custom, or habit, that makes us expect the sun. Nature has not left this to our reasoning, which is slow and fallible, but to an instinct. We could not live without it, but it is not a justification.",
    end: true,
  },
};

/** Try to justify an inductive inference, and follow Hume's replies until the argument closes in a circle. */
export function JustifyInductionViz() {
  const [path, setPath] = useState<string[]>(["start"]);
  const cur = TREE[path[path.length - 1]];

  return (
    <figure className="viz">
      <ol className="tagger" style={{ listStyle: "none", paddingLeft: 0 }}>
        {path.map((id, i) => (
          <li key={i} className={TREE[id].end ? "tagger-row is-right" : "tagger-row"}>
            <p className="tagger-text" style={{ margin: 0 }}>{TREE[id].say}</p>
          </li>
        ))}
      </ol>
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        {cur.options?.map((o) => (
          <button key={o.label} type="button" className="btn btn-primary" onClick={() => setPath([...path, o.to])}>{o.label}</button>
        ))}
        {path.length > 1 && <button type="button" className="btn" onClick={() => setPath(["start"])}>Start again</button>}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {cur.end
          ? "Every route ends in the same place: inductive inference cannot be justified without assuming what it sets out to prove."
          : "Choose a reply. Every branch is one Hume considered."}
      </figcaption>
    </figure>
  );
}
