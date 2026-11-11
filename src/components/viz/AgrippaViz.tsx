"use client";

import { useState } from "react";

const CHAIN = [
  "This honey is sweet.",
  "It tastes sweet to me.",
  "My sense of taste is working properly.",
  "It has agreed with other people's taste in the past.",
  "Other people's tastes are a good guide to how things are.",
];

type End = "circle" | "assume" | null;

/** Try to justify a claim against Agrippa's five modes. Every route ends in suspension of judgement. */
export function AgrippaViz() {
  const [n, setN] = useState(1);
  const [end, setEnd] = useState<End>(null);
  const reasonText = (i: number) => (i < CHAIN.length ? CHAIN[i] : `A further reason, number ${i}, supporting reason ${i - 1}.`);
  const reset = () => { setN(1); setEnd(null); };

  let reply: string;
  if (end === "circle") {
    reply = "Reciprocity: you now support your last reason with the very claim it was offered to support. The argument goes round in a circle, and a circle proves nothing to someone who doubts its starting point.";
  } else if (end === "assume") {
    reply = "Hypothesis: you have simply laid this down without proof. But if you may assume it, your opponent may with equal right assume the opposite, and then nothing is settled.";
  } else if (n === 1) {
    reply = "Disagreement and relativity: to someone who is ill, the same honey tastes bitter, and philosophers disagree about whether things have tastes at all. It seems sweet relative to you; what it is like in itself is another question. Give a reason.";
  } else {
    reply = `Infinite regress: what supports "${reasonText(n - 1)}" Unless you can say, it is no better established than the claim it was meant to support.`;
  }

  return (
    <figure className="viz">
      <ol style={{ margin: 0, paddingLeft: 22, lineHeight: 1.7 }}>
        {Array.from({ length: n }, (_, i) => (
          <li key={i} style={{ color: i === 0 ? "var(--text)" : "var(--text-muted)" }}>
            {i === 0 ? <strong>{CHAIN[0]}</strong> : reasonText(i)}
          </li>
        ))}
        {end === "circle" && <li style={{ color: "var(--danger)" }}>Because the honey is sweet. (back to the start)</li>}
        {end === "assume" && <li style={{ color: "var(--danger)" }}>It just is so.</li>}
      </ol>
      <p style={{ margin: "10px 0 0", borderLeft: "3px solid var(--accent)", paddingLeft: 10 }}>
        <span className="mono-meta" style={{ textTransform: "none" }}>The sceptic: </span>{reply}
      </p>
      <div className="viz-controls" style={{ marginTop: 10 }}>
        {end === null ? (
          <>
            <button type="button" className="viz-chip" onClick={() => setN((x) => x + 1)}>Give a new reason</button>
            <button type="button" className="viz-chip" disabled={n < 2} onClick={() => setEnd("circle")}>Appeal to an earlier claim</button>
            <button type="button" className="viz-chip" disabled={n < 2} onClick={() => setEnd("assume")}>Just assume it</button>
          </>
        ) : (
          <button type="button" className="viz-chip" onClick={reset}>Start again</button>
        )}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {end !== null || n > 5
          ? "Every route is blocked: go on for ever, go round in a circle, or stop with an assumption. With the reasons for and against evenly balanced, the sceptic suspends judgement, and, Sextus reports, tranquillity follows."
          : "Try to justify the claim. Each answer you give meets one of the modes attributed to Agrippa."}
      </figcaption>
    </figure>
  );
}
