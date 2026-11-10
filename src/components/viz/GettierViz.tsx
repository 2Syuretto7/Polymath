"use client";

import { useState } from "react";

const ANALYSES = [
  "Justified true belief.",
  "Justified true belief, not reached through any false belief.",
  "True belief that could not easily have been false.",
] as const;

const CASES: { name: string; knows: boolean; fits: [boolean, boolean, boolean] }[] = [
  { name: "You see your friend walk into the room and believe she is here.", knows: true, fits: [true, true, true] },
  { name: "You guess the winning lottery number and turn out to be right.", knows: false, fits: [false, false, false] },
  { name: "Smith has strong evidence that Jones will get the job and that Jones has ten coins, so believes the man who gets the job has ten coins. Smith gets it, and unknown to him he also has ten coins.", knows: false, fits: [true, false, false] },
  { name: "You read the time from a clock that stopped exactly twelve hours ago. The time you read happens to be right.", knows: false, fits: [true, false, false] },
  { name: "Dharmottara's traveller sees a mirage, believes there is water ahead, and by luck finds water hidden under a rock on that spot.", knows: false, fits: [true, false, false] },
  { name: "Henry looks at a real barn in a county full of fake barn facades, and believes it is a barn.", knows: false, fits: [true, true, false] },
];

function judge(knows: boolean, fits: boolean) {
  if (knows && fits) return { tone: "right", text: "counts as knowledge, correctly" };
  if (!knows && !fits) return { tone: "right", text: "excluded, correctly" };
  if (!knows) return { tone: "wrong", text: "counts as knowledge, but is luck: too broad" };
  return { tone: "wrong", text: "knowledge, but excluded: too narrow" };
}

/** Testing analyses of knowledge against cases, including Gettier cases and their older Indian ancestor. */
export function GettierViz() {
  const [a, setA] = useState(0);
  const verdicts = CASES.map((c) => judge(c.knows, c.fits[a]));
  const wrong = verdicts.filter((v) => v.tone === "wrong").length;

  return (
    <figure className="viz">
      <p className="viz-stepper-label" style={{ margin: "0 0 8px" }}>Choose an analysis: knowledge is&hellip;</p>
      <div className="choices" role="radiogroup" aria-label="Analysis of knowledge">
        {ANALYSES.map((text, i) => (
          <label key={text} className={`choice ${i === a ? "is-picked" : ""}`}>
            <input type="radio" name="analysis" checked={i === a} onChange={() => setA(i)} />
            <span>{text}</span>
          </label>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead><tr><th>Case</th><th>On this analysis</th></tr></thead>
        <tbody>
          {CASES.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td className={`viz-verdict viz-verdict-${verdicts[i].tone}`}>{verdicts[i].text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {wrong === 0
          ? <>This analysis gets every case here right. That is not the end of the story: it faces counterexamples of its own, which Epistemology takes up.</>
          : <>This analysis gets {wrong} {wrong === 1 ? "case" : "cases"} wrong. Each such case is a counterexample, and the analysis must be repaired or abandoned.</>}
      </figcaption>
    </figure>
  );
}
