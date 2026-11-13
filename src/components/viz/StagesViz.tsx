"use client";

import { useState } from "react";

const STAGES = [
  {
    name: "aesthetic",
    figure: "Don Giovanni, and the young author of the papers in Either/Or, Part One",
    lives: "For the interesting moment: pleasure, novelty, the avoidance of boredom, keeping every option open.",
    despair: "A life of moods has no self to hold it together. Melancholy and boredom reveal the emptiness; the aesthete is lost in possibility.",
    move: "Choose yourself: commit, take responsibility for who you are.",
  },
  {
    name: "ethical",
    figure: "Judge William, who writes to the aesthete in Either/Or, Part Two, praising marriage and vocation",
    lives: "For duty, commitment and the universal: becoming a self through choices that bind one's future.",
    despair: "The ethical self discovers guilt it cannot remove by its own effort, and duties that seem to clash with a higher demand.",
    move: "A leap of faith: relate oneself to God as a single individual.",
  },
  {
    name: "religious",
    figure: "Abraham, in Fear and Trembling, called to sacrifice Isaac",
    lives: "For an absolute relation to the absolute, which may suspend the ethical, held in fear and trembling.",
    despair: "Faith is not a resting place but a task to be renewed: holding on, against reason, to what cannot be secured.",
    move: "No further stage. Faith must be chosen again in every moment.",
  },
];

/** Kierkegaard's stages on life's way, each undone by its own form of despair. */
export function StagesViz() {
  const [i, setI] = useState(0);
  const s = STAGES[i];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Stage">
        {STAGES.map((x, j) => <button key={x.name} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{j + 1}. {x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 60" role="img" aria-label="Three stages, joined by leaps" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {STAGES.map((x, j) => (
          <g key={x.name}>
            <rect x={20 + j * 170} y={14} width={140} height={32} rx={6} style={{ fill: j === i ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: j === i ? "var(--accent)" : "var(--border)" }} />
            <text x={90 + j * 170} y={35} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{x.name}</text>
            {j < 2 && <text x={175 + j * 170} y={35} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>leap</text>}
          </g>
        ))}
      </svg>
      <table className="table">
        <tbody>
          <tr><td style={{ width: "24%" }}>figure</td><td>{s.figure}</td></tr>
          <tr><td>lives for</td><td>{s.lives}</td></tr>
          <tr><td>its despair</td><td>{s.despair}</td></tr>
          <tr><td>the way on</td><td>{s.move}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        The stages are not steps of a proof. Nothing in one forces the next; each must be chosen, which is why Kierkegaard speaks of a leap. He presents them through pseudonymous authors, so that readers must decide for themselves.
      </figcaption>
    </figure>
  );
}
