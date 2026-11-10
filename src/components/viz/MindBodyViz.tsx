"use client";

import { useState } from "react";

const POSITIONS = [
  { name: "Substance dualism", gist: "The mind is a non-physical thing, distinct from the body (Descartes)." },
  { name: "Identity theory", gist: "Each kind of mental state is a kind of brain state: pain just is a certain firing of neurons." },
  { name: "Functionalism", gist: "A mental state is whatever plays a certain causal role, as a heart is whatever pumps the blood." },
] as const;

type Cell = { ok: boolean; why: string };

const PUZZLES: { name: string; cells: [Cell, Cell, Cell] }[] = [
  {
    name: "Interaction: you decide to raise your arm, and it rises.",
    cells: [
      { ok: false, why: "How can something with no mass, shape or position push a physical nerve?" },
      { ok: true, why: "The decision is a brain event, and brain events cause muscle movements." },
      { ok: true, why: "The decision plays a causal role, filled by brain events that move the arm." },
    ],
  },
  {
    name: "Dependence: a blow to the head, a drug or a stroke changes the mind.",
    cells: [
      { ok: false, why: "It must say mind and brain are tightly linked though distinct, and explain why." },
      { ok: true, why: "Change the brain and you change the mind, because they are the same thing." },
      { ok: true, why: "Damage the parts that play the roles and the roles go unfilled." },
    ],
  },
  {
    name: "Multiple realisation: an octopus, with very different neurons, can surely feel pain.",
    cells: [
      { ok: true, why: "Any creature with the right kind of mind can feel pain; neurons are beside the point." },
      { ok: false, why: "If pain just is one human brain state, a creature without that state cannot be in pain." },
      { ok: true, why: "Different hardware can play the same role, as different engines can drive a car." },
    ],
  },
  {
    name: "Experience: Mary knows every physical fact about colour, but has only ever seen black and white.",
    cells: [
      { ok: true, why: "When she first sees red she learns something non-physical. The dualist expected that." },
      { ok: false, why: "If she knew every physical fact, what new fact could she learn? Yet she seems to learn one." },
      { ok: false, why: "She knew every causal role already, so the same worry applies." },
    ],
  },
];

/** Three answers to the mind-body problem tested against four puzzles. */
export function MindBodyViz() {
  const [p, setP] = useState(0);
  const strains = PUZZLES.filter((q) => !q.cells[p].ok).length;

  return (
    <figure className="viz">
      <div className="choices" role="radiogroup" aria-label="Position">
        {POSITIONS.map((pos, i) => (
          <label key={pos.name} className={`choice ${i === p ? "is-picked" : ""}`}>
            <input type="radio" name="mind-body" checked={i === p} onChange={() => setP(i)} />
            <span><strong>{pos.name}.</strong> {pos.gist}</span>
          </label>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead><tr><th>Puzzle</th><th>For this position</th></tr></thead>
        <tbody>
          {PUZZLES.map((q) => (
            <tr key={q.name}>
              <td>{q.name}</td>
              <td className={`viz-verdict viz-verdict-${q.cells[p].ok ? "right" : "wrong"}`}>
                <strong>{q.cells[p].ok ? "Fits easily. " : "Under strain. "}</strong>{q.cells[p].why}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {POSITIONS[p].name} is under strain on {strains} of the four puzzles. Every position here strains somewhere, which is
        why the problem is still open. Under strain does not mean refuted: each view has replies, which the Philosophy of
        Mind course takes up.
      </figcaption>
    </figure>
  );
}
