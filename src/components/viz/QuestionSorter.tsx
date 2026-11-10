"use client";

import { useState } from "react";

type Kind = "empirical" | "conceptual" | "normative";

const QUESTIONS: { q: string; kind: Kind; why: string }[] = [
  { q: "How many moons does Jupiter have?", kind: "empirical", why: "Better telescopes settle it. Nobody needs to argue about what a moon is." },
  { q: "What is a moon, as opposed to a large rock in orbit?", kind: "conceptual", why: "Every fact about the rocks can be known and the question remains: where should the line be drawn, and why?" },
  { q: "Should we spend public money to send people to Mars?", kind: "normative", why: "Costs and risks are facts, but deciding what we ought to do also needs values." },
  { q: "Does this medicine lower blood pressure?", kind: "empirical", why: "A careful trial answers it." },
  { q: "Can a person be the same person after losing all their memories?", kind: "conceptual", why: "It turns on what we mean by being the same person, which no scan settles." },
  { q: "Is it ever right to break a promise?", kind: "normative", why: "It asks what we ought to do, not what people in fact do." },
];

const LABEL: Record<Kind, string> = { empirical: "Empirical", conceptual: "Conceptual", normative: "Normative" };

/** Sort questions by what it would take to answer them. */
export function QuestionSorter() {
  const [picks, setPicks] = useState<Record<number, Kind>>({});
  const answered = Object.keys(picks).length;
  const right = QUESTIONS.filter((x, i) => picks[i] === x.kind).length;

  return (
    <figure className="viz">
      <ol className="sorter">
        {QUESTIONS.map((x, i) => {
          const pick = picks[i];
          return (
            <li key={x.q} className="sorter-item">
              <p className="sorter-q">{x.q}</p>
              <div className="segmented" role="group" aria-label="Kind of question">
                {(Object.keys(LABEL) as Kind[]).map((k) => (
                  <button key={k} type="button" aria-pressed={pick === k}
                    className={pick === k ? (k === x.kind ? "seg is-right" : "seg is-wrong") : "seg"}
                    onClick={() => setPicks((p) => ({ ...p, [i]: k }))}>
                    {LABEL[k]}
                  </button>
                ))}
              </div>
              {pick && (
                <p className="sorter-why">
                  {pick === x.kind ? "Yes. " : `Closer to ${LABEL[x.kind].toLowerCase()}. `}
                  {x.why}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="viz-caption" aria-live="polite">
        {answered === QUESTIONS.length
          ? `${right} of ${QUESTIONS.length} sorted as I would. Disagreeing is allowed, if you can say why.`
          : "Decide what it would take to answer each question."}
      </figcaption>
    </figure>
  );
}
