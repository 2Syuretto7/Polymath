"use client";

import { useState } from "react";

const SCENES = [
  { text: "a white rabbit runs past", rabbit: true },
  { text: "a brown rabbit sits in the grass", rabbit: true },
  { text: "only the ears of a rabbit show above a bush", rabbit: true },
  { text: "a fox crosses the field", rabbit: false },
  { text: "an empty field", rabbit: false },
  { text: "a stuffed rabbit toy on a table", rabbit: false },
];
const READINGS = [
  { word: "rabbit", gloss: "an enduring whole animal" },
  { word: "undetached rabbit part", gloss: "some part of a rabbit, still attached" },
  { word: "rabbit stage", gloss: "a brief temporal slice of a rabbit" },
  { word: "rabbithood", gloss: "the universal, manifested here" },
];

/** Quine’s field linguist: every candidate translation of “gavagai” fits every observation. */
export function GavagaiViz() {
  const [shown, setShown] = useState<number[]>([]);
  const [reading, setReading] = useState(0);
  const show = (i: number) => !shown.includes(i) && setShown([...shown, i]);
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>Point at a scene and ask &ldquo;Gavagai?&rdquo; Record the speaker&rsquo;s answer.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 6 }}>
        {SCENES.map((s, i) => (
          <button key={s.text} type="button" aria-pressed={shown.includes(i)} onClick={() => show(i)}
            style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid var(--border)", background: shown.includes(i) ? "var(--accent-soft)" : "var(--bg)", color: "var(--text)", textAlign: "left", cursor: "pointer" }}>
            {s.text}{shown.includes(i) ? (s.rabbit ? ": assents" : ": dissents") : ""}
          </button>
        ))}
      </div>
      <p className="viz-caption">Choose a translation hypothesis for &ldquo;gavagai&rdquo;.</p>
      <div className="segmented" role="group" aria-label="translation">
        {READINGS.map((r, i) => (
          <button key={r.word} type="button" aria-pressed={reading === i} className={reading === i ? "seg is-on" : "seg"} onClick={() => setReading(i)}>{r.word}</button>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>hypothesis: &ldquo;gavagai&rdquo; means {READINGS[reading].word}, {READINGS[reading].gloss}</div>
        <div>observations recorded: {shown.length} of {SCENES.length}</div>
        <div style={{ fontWeight: 700 }}>predictions matching the speaker&rsquo;s answers: {shown.length} of {shown.length}</div>
      </div>
      <figcaption className="viz-caption">
        Wherever there is a rabbit there is an undetached rabbit part, a rabbit stage and a manifestation of rabbithood, and
        not otherwise, so every hypothesis predicts exactly the same assents and dissents. Pointing cannot settle which is
        meant. Questions such as &ldquo;is this the same gavagai as that?&rdquo; would need translations of the native
        words for identity and plurality, and those can be adjusted to compensate. This is Quine&rsquo;s inscrutability of
        reference.
      </figcaption>
    </figure>
  );
}
