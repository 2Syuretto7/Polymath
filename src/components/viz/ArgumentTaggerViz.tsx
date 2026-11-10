"use client";

import { useState } from "react";

type Role = "premise" | "conclusion" | "neither";

const PASSAGES: { title: string; sentences: { text: string; role: Role; why: string }[] }[] = [
  {
    title: "Exams",
    sentences: [
      { text: "Many students dread exams.", role: "neither", why: "Background: true, perhaps, but nothing is inferred from it." },
      { text: "Our school should drop its final exams.", role: "conclusion", why: "This is what the rest is offered as a reason for." },
      { text: "After all, a single exam measures how someone performs on one day, not what they have learned.", role: "premise", why: "'After all' marks a reason." },
      { text: "And a school should assess what its students have learned.", role: "premise", why: "A second reason; together with the first, it supports the conclusion." },
      { text: "My cousin, for example, was ill on the day of hers.", role: "neither", why: "An illustration of the first premise, not a separate reason for the conclusion." },
    ],
  },
  {
    title: "Epicurus on death (paraphrased)",
    sentences: [
      { text: "Death is nothing to us.", role: "conclusion", why: "Epicurus states his conclusion first; the rest explains why." },
      { text: "For good and bad consist in sensation.", role: "premise", why: "'For' marks a reason." },
      { text: "And death is the end of all sensation.", role: "premise", why: "The second premise; with the first, it yields the conclusion." },
      { text: "This thought, rightly understood, makes life's limits enjoyable.", role: "neither", why: "A further consequence Epicurus draws, not part of this argument for the conclusion." },
    ],
  },
];

const ROLES: Role[] = ["premise", "conclusion", "neither"];

/** Tag each sentence of a short passage as a premise, the conclusion, or neither; then check. */
export function ArgumentTaggerViz() {
  const [p, setP] = useState(0);
  const [tags, setTags] = useState<(Role | null)[]>(PASSAGES[0].sentences.map(() => null));
  const [checked, setChecked] = useState(false);
  const passage = PASSAGES[p];
  const done = tags.every(Boolean);
  const score = tags.filter((t, i) => t === passage.sentences[i].role).length;

  const load = (i: number) => { setP(i); setTags(PASSAGES[i].sentences.map(() => null)); setChecked(false); };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }} role="group" aria-label="Passage">
        {PASSAGES.map((x, i) => (
          <button key={x.title} type="button" className={i === p ? "btn btn-primary" : "btn"} aria-pressed={i === p} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <ol className="tagger">
        {passage.sentences.map((s, i) => {
          const right = checked && tags[i] === s.role;
          const wrong = checked && tags[i] !== s.role;
          return (
            <li key={s.text} className={`tagger-row ${right ? "is-right" : ""} ${wrong ? "is-wrong" : ""}`}>
              <p className="tagger-text">{s.text}</p>
              <div className="tagger-roles" role="radiogroup" aria-label={`Role of sentence ${i + 1}`}>
                {ROLES.map((r) => (
                  <button key={r} type="button" role="radio" aria-checked={tags[i] === r}
                    className={`viz-chip ${tags[i] === r ? "is-on" : ""}`}
                    onClick={() => { setTags((t) => t.map((x, j) => (j === i ? r : x))); setChecked(false); }}>{r}</button>
                ))}
              </div>
              {checked && <p className="tagger-why">{wrong ? `It is ${s.role === "neither" ? "neither" : `a ${s.role}`}. ` : ""}{s.why}</p>}
            </li>
          );
        })}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={!done} onClick={() => setChecked(true)}>Check my reading</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {checked
          ? `${score} of ${passage.sentences.length} right. Every argument needs a conclusion; many sentences in a real text are neither premise nor conclusion.`
          : "Tag every sentence, then check. Look for words that mark reasons (for, since, after all) and conclusions (so, therefore)."}
      </figcaption>
    </figure>
  );
}
