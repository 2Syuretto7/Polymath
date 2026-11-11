"use client";

import { useState } from "react";

const PEOPLE = ["you", "your neighbour", "a stranger across town", "another stranger"];
const POLICIES: { name: string; effects: number[] }[] = [
  { name: "a new cricket stadium", effects: [3, 3, 1, 1] },
  { name: "a free clinic", effects: [0, 2, 4, 4] },
  { name: "a cut in your taxes", effects: [5, 0, -1, -1] },
];
const VIEWS: { name: string; weights: number[]; say: string }[] = [
  {
    name: "everyone counts equally",
    weights: [1, 1, 1, 1],
    say: "This is utilitarian impartiality: in Bentham's phrase, each to count for one and none for more than one. Your own gain gets no extra weight because it is yours.",
  },
  {
    name: "only you count",
    weights: [1, 0, 0, 0],
    say: "This is ethical egoism. It picks the policy that is worst for everyone taken together.",
  },
  {
    name: "you and those near you",
    weights: [1, 1, 0, 0],
    say: "Partiality towards those close to us feels natural, but the utilitarian asks what makes the strangers' wellbeing count for less.",
  },
];

/** The utilitarian sum: add up everyone's gains and losses, with equal weight, and choose the largest total. */
export function HappinessSumViz() {
  const [v, setV] = useState(0);
  const view = VIEWS[v];
  const totals = POLICIES.map((p) => p.effects.reduce((s, e, i) => s + e * view.weights[i], 0));
  const best = totals.indexOf(Math.max(...totals));
  const sign = (x: number) => (x > 0 ? `+${x}` : x < 0 ? `−${-x}` : "0");

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>The council can afford one project. Whose wellbeing counts?</p>
      <div className="segmented" role="group" aria-label="Whose wellbeing counts" style={{ marginTop: 6 }}>
        {VIEWS.map((x, i) => (
          <button key={x.name} type="button" className={i === v ? "seg is-on" : "seg"} aria-pressed={i === v} onClick={() => setV(i)}>{x.name}</button>
        ))}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>project</th>
              {PEOPLE.map((p, i) => <th key={p} style={{ opacity: view.weights[i] ? 1 : 0.4 }}>{p}</th>)}
              <th>counted total</th>
            </tr>
          </thead>
          <tbody>
            {POLICIES.map((p, k) => (
              <tr key={p.name} style={{ background: k === best ? "var(--accent-soft)" : "transparent" }}>
                <td>{p.name}</td>
                {p.effects.map((e, i) => (
                  <td key={i} className="mono" style={{ opacity: view.weights[i] ? 1 : 0.4, color: e < 0 ? "var(--danger)" : undefined }}>{sign(e)}</td>
                ))}
                <td className="mono"><strong>{sign(totals[k])}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        The numbers are units of wellbeing, gains and losses of happiness. Counting this way picks {POLICIES[best].name}. {view.say}
      </figcaption>
    </figure>
  );
}
