"use client";

import { useState } from "react";

const GOODS = ["pleasure", "knowledge", "friendship", "achievement", "autonomy"];
const LIVES = [
  { name: "Meera, a contented shopkeeper", v: [8, 4, 9, 4, 7] },
  { name: "Arjun, a driven scientist", v: [4, 9, 4, 9, 7] },
  { name: "Kabir, plugged into the machine", v: [10, 0, 0, 0, 2] },
];

/** Objective list theories: wellbeing is having goods such as knowledge and friendship, whatever you feel. The weights matter. */
export function ObjectiveListViz() {
  const [w, setW] = useState([1, 1, 1, 1, 1]);
  const scores = LIVES.map((l) => l.v.reduce((s, x, i) => s + x * w[i], 0));
  const best = scores.indexOf(Math.max(...scores));
  const max = Math.max(...scores, 1);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {GOODS.map((g, i) => (
          <label key={g}><span>weight of {g}: <span className="mono">{w[i]}</span></span>
            <input type="range" min={0} max={3} step={0.5} value={w[i]} onChange={(e) => setW(w.map((x, j) => (j === i ? Number(e.target.value) : x)))} /></label>
        ))}
      </div>
      <table className="table" style={{ fontSize: 14, marginTop: 10 }}>
        <thead><tr><th style={{ textTransform: "none" }}>life</th>{GOODS.map((g) => <th key={g} style={{ textTransform: "none" }}>{g}</th>)}<th style={{ textTransform: "none" }}>score</th></tr></thead>
        <tbody>
          {LIVES.map((l, i) => (
            <tr key={l.name} style={i === best ? { fontWeight: 600 } : undefined}>
              <td>{l.name}</td>{l.v.map((x, j) => <td key={j} className="mono">{x}</td>)}<td className="mono">{scores[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "grid", gap: 6, marginTop: 8 }}>
        {LIVES.map((l, i) => (
          <div key={l.name} style={{ height: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
            <div style={{ width: `${(scores[i] / max) * 100}%`, height: "100%", background: i === best ? "var(--accent)" : "var(--text-faint)" }} />
          </div>
        ))}
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>With these weights, the life going best is {LIVES[best].name}.</p>
      <figcaption className="viz-caption">
        Each life is scored out of 10 on each good, illustratively. Objective list theorists, such as Derek Parfit, John Finnis
        and Martha Nussbaum with her capabilities, say these goods benefit you whether or not you want or enjoy them. Hedonism
        is the special case where only pleasure has weight. The hard questions are which goods belong on the list and how to
        weigh them.
      </figcaption>
    </figure>
  );
}
