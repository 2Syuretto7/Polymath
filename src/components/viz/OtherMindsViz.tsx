"use client";

import { useState } from "react";

const FEATURES = [
  "avoids harm",
  "reacts to injury as you do",
  "has a brain much like yours",
  "is a close evolutionary relative",
  "tells you what it feels",
] as const;

const BEINGS: { name: string; has: boolean[]; note: string }[] = [
  { name: "a friend", has: [true, true, true, true, true], note: "Every point of the analogy holds. Even so, the argument rests on one case where you have checked that behaviour goes with feeling: your own." },
  { name: "a chimpanzee", has: [true, true, true, true, false], note: "Very close in brain and ancestry, and its pain behaviour is like ours. Most people find the inference here almost as strong." },
  { name: "a dog", has: [true, true, true, true, false], note: "A mammal brain and familiar pain behaviour: yelping, limping, guarding a paw. Few doubt that dogs feel pain." },
  { name: "an octopus", has: [true, true, false, false, false], note: "It guards and tends its wounds, yet most of its neurons are in its arms and its ancestry parted from ours over half a billion years ago." },
  { name: "a honeybee", has: [true, false, false, false, false], note: "It avoids harm and learns, but whether it feels anything is still debated. The analogy has grown thin." },
  { name: "a robot vacuum", has: [true, false, false, false, false], note: "It avoids falling down stairs, as a bee avoids harm. Few think it feels anything. So avoiding harm alone cannot be the mark of a mind." },
  { name: "a chatbot", has: [false, false, false, false, true], note: "It may say it feels, the one feature that settles the matter for a friend, while lacking every other. The analogy points two ways at once." },
];

/** The argument from analogy for other minds, and how it weakens with distance from your own case. */
export function OtherMindsViz() {
  const [b, setB] = useState(0);
  const B = BEINGS[b];
  const count = B.has.filter(Boolean).length;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        {BEINGS.map((x, i) => (
          <button key={x.name} type="button" className={i === b ? "btn btn-primary" : "btn"} aria-pressed={i === b} onClick={() => setB(i)}>{x.name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead><tr><th>Like you, it&hellip;</th><th>You</th><th>{B.name}</th></tr></thead>
        <tbody>
          {FEATURES.map((f, i) => (
            <tr key={f}>
              <td>{f}</td>
              <td className="viz-verdict viz-verdict-right">yes</td>
              <td className={`viz-verdict viz-verdict-${B.has[i] ? "info" : "wrong"}`}>{B.has[i] ? "yes" : "no"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Shared features: {count} of {FEATURES.length}. {B.note}
      </figcaption>
    </figure>
  );
}
