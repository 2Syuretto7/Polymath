"use client";

import { useState } from "react";

const BEINGS = [
  { name: "a human", realiser: "C-fibre firing", note: "Pain is caused by damage, causes distress and avoidance, and is realised by firing in certain nerve fibres." },
  { name: "an octopus", realiser: "activity in a very different, distributed nervous system", note: "Octopuses guard and tend wounds and learn to avoid harm, with a nervous system largely spread through their arms and built quite unlike ours." },
  { name: "a silicon robot", realiser: "a state of its silicon circuits", note: "Imagine a robot whose circuits are caused by damage and cause avoidance, distress signals and learning, in just the pattern that pain does in us." },
  { name: "a human with a repaired brain", realiser: "a silicon implant replacing the C-fibres", note: "Suppose the nerve fibres are replaced, one by one, by chips that do the same job. Nothing in the person’s behaviour or reports changes." },
];

/** Multiple realisability: the same mental state, pain, could be realised by quite different physical states. */
export function RealiserViz() {
  const [i, setI] = useState(1);
  const B = BEINGS[i];
  const cf = i === 0;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Being">
        {BEINGS.map((b, j) => <button key={b.name} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{b.name}</button>)}
      </div>
      <p style={{ margin: "10px 0 6px" }}>{B.note}</p>
      <table className="table" style={{ marginTop: 6 }}>
        <tbody>
          <tr><td style={{ fontSize: 14 }}>State that plays the pain role</td><td style={{ fontSize: 14, fontWeight: 600 }}>{B.realiser}</td></tr>
          <tr><td style={{ fontSize: 14 }}>Pain, if pain = C-fibre firing (type identity)</td><td style={{ fontSize: 14, color: cf ? "var(--accent)" : "var(--danger)" }}>{cf ? "yes" : "no: there are no C-fibres firing"}</td></tr>
          <tr><td style={{ fontSize: 14 }}>Pain, if pain = whatever plays the pain role (functionalism)</td><td style={{ fontSize: 14, color: "var(--accent)" }}>yes</td></tr>
          <tr><td style={{ fontSize: 14 }}>Pain, on species-specific identities (Kim, Lewis)</td><td style={{ fontSize: 14 }}>{cf ? "yes: human pain is C-fibre firing" : `yes: pain in this kind of being is ${B.realiser}`}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Putnam argued that if pain just is C-fibre firing, no creature without C-fibres can be in pain, which seems wrong for octopuses and possible robots. Pain looks like a role that different physical states can fill, as a lock can be opened by brass or by steel keys.
      </figcaption>
    </figure>
  );
}
