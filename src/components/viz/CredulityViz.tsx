"use client";

import { useState } from "react";

const CONS: { text: string; defeats: boolean; why: string }[] = [
  { text: "The experience happened under conditions shown to be unreliable, such as a drug known to cause visions.", defeats: true, why: "Swinburne’s first limit: experiences in conditions that usually mislead give no justification." },
  { text: "The person is known to be unreliable, for example often deluded about such things.", defeats: true, why: "Swinburne’s second limit: credulity applies to subjects without a track record of error." },
  { text: "There is strong independent evidence that God does not exist.", defeats: true, why: "Swinburne’s third limit: background evidence against the object can outweigh the experience. Whether such evidence exists is what the rest of the course argues about." },
  { text: "The experience was probably caused by something other than God, whether or not God exists.", defeats: true, why: "Swinburne’s fourth limit. But note: if God exists, God may act through any natural cause, so this is hard to establish." },
  { text: "Neuroscience can describe the brain activity that accompanies the experience.", defeats: false, why: "Every experience, including seeing a tree, has neural correlates. Describing the mechanism does not show the experience is not of anything." },
  { text: "Believers in other traditions report experiences of quite different ultimate realities.", defeats: false, why: "Not one of Swinburne’s limits, but a serious objection: conflicting experiences cannot all be veridical. Hick read them as different responses to one Real; others see a defeater." },
];

/** Swinburne's principle of credulity: a religious experience is prima facie evidence unless a defeater applies. */
export function CredulityViz() {
  const [on, setOn] = useState<boolean[]>(CONS.map(() => false));
  const [last, setLast] = useState<number | null>(null);
  const defeated = CONS.some((c, i) => on[i] && c.defeats);
  return (
    <figure className="viz">
      <p className="mono" style={{ fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>It seems to Asha that God is present to her.</p>
      <ol style={{ paddingLeft: 20, margin: 0 }}>
        {CONS.map((c, i) => (
          <li key={i} style={{ margin: "6px 0", fontSize: 14 }}>
            {c.text}{" "}
            <button type="button" className={on[i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => { setOn(on.map((x, j) => (j === i ? !x : x))); setLast(i); }}>{on[i] ? "holds" : "suppose it holds"}</button>
          </li>
        ))}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 10, color: defeated ? "var(--danger)" : "var(--accent)" }}>
        {defeated ? "Defeated: the experience no longer justifies Asha in believing God is present." : "Prima facie justified: Asha may reasonably believe what her experience presents, absent defeaters."}
      </p>
      {last !== null && <p style={{ fontSize: 14 }}>{CONS[last].defeats ? "Defeater. " : "Not a defeater on Swinburne’s view. "}{CONS[last].why}</p>}
      <figcaption className="viz-caption">
        Swinburne&rsquo;s principle of credulity: if it seems to you that x is present, then probably x is present, unless
        there are special considerations to the contrary. We trust perception and memory this way; he argues religious
        experience deserves the same treatment.
      </figcaption>
    </figure>
  );
}
