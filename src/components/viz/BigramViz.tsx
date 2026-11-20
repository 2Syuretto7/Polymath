"use client";

import { useState } from "react";

export const CORPUS = "the cat sat on the mat . the dog sat on the log . the cat saw the dog .";

/** Counts of the words that follow w in the corpus. */
export function nextCounts(w: string) {
  const t = CORPUS.split(" ");
  const c = new Map<string, number>();
  for (let i = 0; i + 1 < t.length; i++) if (t[i] === w) c.set(t[i + 1], (c.get(t[i + 1]) ?? 0) + 1);
  return [...c.entries()].sort((a, b) => b[1] - a[1]);
}

export const WORDS = ["the", "cat", "sat", "on", "dog", "saw"];

/** A bigram model: the simplest next-word predictor, trained on one sentence’s worth of text. */
export function BigramViz() {
  const [w, setW] = useState("the");
  const c = nextCounts(w);
  const total = c.reduce((s, [, v]) => s + v, 0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="previous word">
        {WORDS.map((v) => <button key={v} type="button" aria-pressed={w === v} className={w === v ? "seg is-on" : "seg"} onClick={() => setW(v)}>after &lsquo;{v}&rsquo;</button>)}
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="Probabilities of each next word after the chosen word" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>training text: {CORPUS}</text>
        {c.map(([word, v], i) => {
          const y = 40 + i * 30;
          const p = v / total;
          return (
            <g key={word}>
              <text x={100} y={y + 15} textAnchor="end" style={{ fill: "var(--text)", fontSize: 13 }}>{word}</text>
              <rect x={110} y={y} width={p * 380} height={22} rx={3} style={{ fill: "var(--accent)" }} />
              <text x={116 + p * 380} y={y + 15} style={{ fill: "var(--text)", fontSize: 12 }}>{Math.round(p * 100)}% ({v} of {total})</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        After &lsquo;{w}&rsquo;, the model predicts {c.map(([word, v]) => `${word} ${Math.round((v / total) * 100)}%`).join(", ")}.
      </p>
      <figcaption className="viz-caption">
        A bigram model predicts each word from the one before, by counting. Large language models do the same job, predicting
        the next token, but condition on thousands of previous tokens through billions of learned parameters. Whether
        prediction at that scale amounts to understanding is the question of this lesson.
      </figcaption>
    </figure>
  );
}
