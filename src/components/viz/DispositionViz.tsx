"use client";

import { useState } from "react";

const DESIRES = ["to stay dry", "to feel the rain", "to look tough to friends"];
const BACKS = ["nothing else relevant", "believes the umbrella is broken", "believes rain is good for the skin"];

/** Logical behaviourism tries to define a belief by what a person would do. But what they would do depends on their other mental states. */
export function DispositionViz() {
  const [d, setD] = useState(0);
  const [b, setB] = useState(0);
  const act = (() => {
    if (d === 1 || b === 2) return "leaves the umbrella at home and walks out happily";
    if (d === 2) return "leaves the umbrella at home and pretends not to care";
    if (b === 1) return "stays in, or wears a raincoat";
    return "takes an umbrella";
  })();
  const matches = act === "takes an umbrella";
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        A behaviourist translation: <em>&ldquo;Ravi believes it will rain&rdquo; means that if Ravi goes out, he takes an umbrella, cancels the picnic, and so on.</em> Vary Ravi&rsquo;s other mental states, keeping the belief fixed.
      </p>
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Ravi wants:</span>
        {DESIRES.map((x, i) => <button key={x} type="button" aria-pressed={d === i} className={d === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setD(i)}>{x}</button>)}
      </div>
      <div className="viz-controls">
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Ravi also:</span>
        {BACKS.map((x, i) => <button key={x} type="button" aria-pressed={b === i} className={b === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setB(i)}>{x}</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <tbody>
          <tr><td style={{ fontSize: 14 }}>Ravi believes it will rain</td><td style={{ fontSize: 14, fontWeight: 600 }}>yes, in every setting</td></tr>
          <tr><td style={{ fontSize: 14 }}>What Ravi does</td><td style={{ fontSize: 14, fontWeight: 600 }}>{act}</td></tr>
          <tr><td style={{ fontSize: 14 }}>Does the behaviourist translation hold?</td><td style={{ fontSize: 14 }}>{matches ? "yes" : "no: the belief is there, but the predicted behaviour is not"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        The belief issues in umbrella-taking only given a desire to stay dry and no contrary beliefs. To repair the translation we must add &ldquo;provided he wants to stay dry and believes the umbrella works&rdquo;, which mentions further mental states. The definition never escapes the mental: this is the circularity objection.
      </figcaption>
    </figure>
  );
}
