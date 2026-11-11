"use client";

import { useState } from "react";

const POSITIONS = ["best off", "second", "third", "worst off"];
const SOCIETIES: { name: string; w: number[] }[] = [
  { name: "strict equality", w: [5, 5, 5, 5] },
  { name: "steep ladder", w: [16, 9, 4, 1] },
  { name: "lifted floor", w: [9, 7, 6, 6] },
  { name: "aristocracy", w: [20, 3, 2, 1] },
];
const RULES = [
  { name: "maximise the worst position", key: "min" as const },
  { name: "maximise the average", key: "avg" as const },
];

/** Choosing a society behind a veil of ignorance, without knowing which position you will occupy. */
export function VeilViz() {
  const [r, setR] = useState(0);
  const [pos, setPos] = useState<number | null>(null);
  const score = (w: number[]) => (RULES[r].key === "min" ? Math.min(...w) : w.reduce((a, b) => a + b, 0) / w.length);
  const scores = SOCIETIES.map((s) => score(s.w));
  const best = scores.indexOf(Math.max(...scores));

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>You will be placed in one of four equally large groups, but you do not know which. How should you choose?</p>
      <div className="segmented" role="group" aria-label="Decision rule" style={{ marginTop: 6 }}>
        {RULES.map((x, i) => (
          <button key={x.name} type="button" className={i === r ? "seg is-on" : "seg"} aria-pressed={i === r} onClick={() => setR(i)}>{x.name}</button>
        ))}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ marginTop: 10 }}>
          <thead>
            <tr><th>society</th>{POSITIONS.map((p, i) => <th key={p} style={{ background: pos === i ? "var(--accent-soft)" : undefined }}>{p}</th>)}<th>{RULES[r].key === "min" ? "worst" : "average"}</th></tr>
          </thead>
          <tbody>
            {SOCIETIES.map((s, k) => (
              <tr key={s.name} style={{ outline: k === best ? "2px solid var(--accent)" : undefined }}>
                <td>{s.name}</td>
                {s.w.map((x, i) => <td key={i} className="mono" style={{ background: pos === i ? "var(--accent-soft)" : undefined }}>{x}</td>)}
                <td className="mono"><strong>{scores[k]}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="viz-chip" onClick={() => setPos(Math.floor(Math.random() * 4))}>Lift the veil</button>
        {pos !== null && <button type="button" className="viz-chip" onClick={() => setPos(null)}>Lower it again</button>}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {RULES[r].key === "min"
          ? "Rawls argued that behind the veil, where you cannot know your chances and the stakes are your whole life, you should make the worst position as good as possible. That picks the lifted floor: inequality is allowed only if it helps the worst off."
          : "Harsanyi argued that, giving each position an equal chance, you should maximise your expected wellbeing, the average. That picks the steep ladder, accepting a 1 in 4 chance of the worst position."}
        {pos !== null && ` You turned out to be in the ${POSITIONS[pos]} group, with ${SOCIETIES[best].w[pos]} in the society you chose.`}
      </figcaption>
    </figure>
  );
}
