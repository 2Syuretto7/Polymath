"use client";

import { useState } from "react";

const THEORIES = [
  { name: "Consequentialism", gist: "Do whatever brings about the best outcome." },
  { name: "Kantian ethics", gist: "Never treat a person merely as a means to an end." },
  { name: "Virtue ethics", gist: "Do what a person of good character would do." },
] as const;

const CASES: { name: string; story: string; common: string; says: [string, string, string]; agree: [boolean, boolean, boolean] }[] = [
  {
    name: "The switch",
    story: "A runaway tram will kill five people on the track. You can pull a lever to send it onto a side track, where it will kill one.",
    common: "Most people say: pull the lever.",
    says: ["Pull: five deaths are worse than one.", "Pulling is allowed: the one dies as a side effect of saving five, not as a means to it.", "A wise and caring person would most likely pull, with deep regret."],
    agree: [true, true, true],
  },
  {
    name: "The footbridge",
    story: "The tram will kill five. You stand on a footbridge beside a large stranger. Pushing him onto the track would stop the tram; he would die, and the five would live.",
    common: "Most people say: do not push.",
    says: ["Push: the numbers are the same as in the switch case.", "Do not push: you would be using him as a tool, his body as a brake.", "Most think a good person could not bring themselves to push, and should not."],
    agree: [false, true, true],
  },
  {
    name: "The surgeon",
    story: "Five patients will die without organ transplants. A healthy visitor is a perfect match for all five. A surgeon could secretly kill him and save the five.",
    common: "Almost everyone says: certainly not.",
    says: ["Simple act-consequentialism seems to say yes, if it stays secret. Most consequentialists add that a world where doctors do this is far worse.", "No: killing him uses him merely as a means.", "No: a good doctor would be horrified by the thought."],
    agree: [false, true, true],
  },
];

/** Three theories of right action tested against the trolley cases. */
export function TrolleyViz() {
  const [c, setC] = useState(1);
  const C = CASES[c];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        {CASES.map((x, i) => (
          <button key={x.name} type="button" className={i === c ? "btn btn-primary" : "btn"} aria-pressed={i === c} onClick={() => setC(i)}>{x.name}</button>
        ))}
      </div>
      <p style={{ margin: "14px 0 4px" }}>{C.story}</p>
      <p className="viz-verdict viz-verdict-info" style={{ margin: "0 0 8px" }}>{C.common}</p>
      <table className="table" style={{ marginTop: 8, marginBottom: 8 }}>
        <thead><tr><th>Theory</th><th>Verdict</th></tr></thead>
        <tbody>
          {THEORIES.map((t, i) => (
            <tr key={t.name}>
              <td><strong>{t.name}</strong><br /><span className="viz-verdict viz-verdict-right">{t.gist}</span></td>
              <td className={`viz-verdict viz-verdict-${C.agree[i] ? "right" : "wrong"}`}>{C.says[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {c === 0
          ? <>In the switch case all three agree with most people. Now try the footbridge, where the numbers are exactly the same.</>
          : <>Verdicts in red clash with what most people believe. A clash does not settle which is wrong, the theory or the common belief; that is the work of moral philosophy.</>}
      </figcaption>
    </figure>
  );
}
