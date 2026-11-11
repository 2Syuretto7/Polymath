"use client";

import { useState } from "react";

export type EquivArg = {
  title: string;
  word: string;
  senses: [string, string];
  premises: { text: string; gloss: [string, string]; truth: [boolean, boolean] }[];
  conclusion: string;
};

/** Fix a sense of the key word in each premise, and see that no single sense makes every premise true. */
export function EquivocationViz({ args }: { args: EquivArg[] }) {
  const [k, setK] = useState(0);
  const A = args[k];
  const [pick, setPick] = useState<number[]>(A.premises.map(() => 0));
  const load = (i: number) => { setK(i); setPick(args[i].premises.map(() => 0)); };
  const same = pick.every((x) => x === pick[0]);
  const allTrue = A.premises.every((p, i) => p.truth[pick[i]]);
  const verdict = !same
    ? `The premises use "${A.word}" in different senses, so the argument's form is broken: it equivocates, and the conclusion does not follow.`
    : allTrue
      ? "Same sense throughout, and every premise true."
      : `With "${A.word}" in one sense throughout, the argument is valid, but a premise is false. Try the other sense.`;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Argument">
        {args.map((x, i) => (
          <button key={x.title} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <ol className="sorter" style={{ marginTop: 14 }}>
        {A.premises.map((p, i) => (
          <li key={p.text} className="sorter-item">
            <p className="sorter-q" style={{ fontFamily: "var(--font-serif)", fontSize: 16 }}>{p.text}</p>
            <div className="segmented" role="group" aria-label={`Sense of "${A.word}" in premise ${i + 1}`}>
              {A.senses.map((s, j) => (
                <button key={s} type="button" aria-pressed={pick[i] === j} className={pick[i] === j ? "seg is-on" : "seg"}
                  onClick={() => setPick((q) => q.map((x, m) => (m === i ? j : x)))}>{s}</button>
              ))}
            </div>
            <p className="sorter-why">
              Read as: {p.gloss[pick[i]]} <strong style={{ color: p.truth[pick[i]] ? "var(--success)" : "var(--danger)" }}>{p.truth[pick[i]] ? "True." : "False."}</strong>
            </p>
          </li>
        ))}
        <li className="sorter-item">
          <p className="sorter-q" style={{ fontFamily: "var(--font-serif)", fontSize: 16 }}>So {A.conclusion}</p>
        </li>
      </ol>
      <figcaption className="viz-caption" aria-live="polite">{verdict}</figcaption>
    </figure>
  );
}
