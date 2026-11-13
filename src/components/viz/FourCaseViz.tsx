"use client";

import { useState } from "react";

const CASES = [
  { name: "Case 1", text: "Neuroscientists manipulate Plum moment by moment, by radio, so that his reasoning leads him to kill White. His reasoning is ordinary and reasons-responsive." },
  { name: "Case 2", text: "Neuroscientists programmed Plum at the start of his life, so that he would reason in just this way and kill White." },
  { name: "Case 3", text: "Plum’s community trained him from childhood, so rigorously that his character, and so his killing of White, was determined by that training." },
  { name: "Case 4", text: "Plum is an ordinary person in a deterministic world. The past and the laws determined that he would reason as he did and kill White." },
];
const DIFF = [
  "From 1 to 2: the manipulation happens once, long ago, instead of moment by moment. Does timing matter, if the result is the same?",
  "From 2 to 3: the shaping is done by a community rather than by scientists. Does it matter who, or what, does the shaping?",
  "From 3 to 4: the causes are natural laws and the distant past rather than any agent. Pereboom asks why that should restore responsibility.",
];

/** Pereboom's four-case argument: if Plum is not responsible in case 1, where could responsibility come back? */
export function FourCaseViz() {
  const [v, setV] = useState<(boolean | null)[]>([null, null, null, null]);
  const set = (i: number, x: boolean) => setV(v.map((y, j) => (j === i ? x : y)));
  const done = v.every((x) => x !== null);
  const switches = v.slice(0, 3).map((x, i) => x !== null && v[i + 1] !== null && x !== v[i + 1]);
  const first = switches.findIndex(Boolean);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>In every case Plum kills White for selfish reasons, after reasoning that is normal and responsive to reasons. Is Plum morally responsible?</p>
      <div style={{ display: "grid", gap: 8 }}>
        {CASES.map((c, i) => (
          <div key={c.name} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "8px 10px" }}>
            <p style={{ margin: "0 0 6px" }}><strong>{c.name}.</strong> {c.text}</p>
            <div className="viz-controls" style={{ marginTop: 0 }}>
              <button type="button" aria-pressed={v[i] === true} className={v[i] === true ? "viz-chip is-on" : "viz-chip"} onClick={() => set(i, true)}>responsible</button>
              <button type="button" aria-pressed={v[i] === false} className={v[i] === false ? "viz-chip is-on" : "viz-chip"} onClick={() => set(i, false)}>not responsible</button>
            </div>
          </div>
        ))}
      </div>
      {done && (
        <p className={first < 0 ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "10px 0 4px" }}>
          {first < 0
            ? v[0] ? "You judge Plum responsible in every case, even when manipulated. This is the hard-line compatibilist reply: since Plum meets every compatibilist condition in case 1, he is responsible there too." : "You judge Plum not responsible in every case, including the ordinary deterministic one. This is Pereboom’s conclusion: determinism rules out the kind of responsibility that makes blame deserved."
            : `Your verdict changes between case ${first + 1} and case ${first + 2}. Pereboom challenges you to name a difference here that matters for responsibility.`}
        </p>
      )}
      {done && first >= 0 && <p style={{ margin: "4px 0", fontSize: 14 }}>{DIFF[first]}</p>}
      <figcaption className="viz-caption">
        Each case differs from the next in one respect that seems irrelevant to responsibility. If Plum is not responsible in case 1 and no step makes a difference, he is not responsible in case 4, where he is simply determined.
      </figcaption>
    </figure>
  );
}
