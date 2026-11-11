"use client";

import { useState } from "react";

type Role = "reason" | "conclusion" | "not a marker";
export type MarkerWord = { w: string; role: Role; why: string };
export type MarkerPassage = { title: string; parts: (string | MarkerWord)[] };

const ROLES: Role[] = ["reason", "conclusion", "not a marker"];
const SHORT: Record<Role, string> = { reason: "R", conclusion: "C", "not a marker": "×" };

/** Click the highlighted words in a passage to say what each one marks, then check. */
export function MarkerSpotViz({ passages }: { passages: MarkerPassage[] }) {
  const [p, setP] = useState(0);
  const [tags, setTags] = useState<Record<number, Role>>({});
  const [checked, setChecked] = useState(false);
  const P = passages[p];
  const words = P.parts.map((x, i) => [x, i] as const).filter(([x]) => typeof x !== "string") as [MarkerWord, number][];
  const done = words.every(([, i]) => tags[i]);
  const score = words.filter(([x, i]) => tags[i] === x.role).length;
  const load = (i: number) => { setP(i); setTags({}); setChecked(false); };
  const cycle = (i: number) => {
    setTags((t) => ({ ...t, [i]: ROLES[(ROLES.indexOf(t[i] ?? "not a marker") + 1) % 3] }));
    setChecked(false);
  };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Passage">
        {passages.map((x, i) => (
          <button key={x.title} type="button" className={i === p ? "btn btn-primary" : "btn"} aria-pressed={i === p} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <p className="tagger-text" style={{ marginTop: 14, lineHeight: 2.1 }}>
        {P.parts.map((x, i) => {
          if (typeof x === "string") return <span key={i}>{x}</span>;
          const t = tags[i];
          const cls = checked ? (t === x.role ? "viz-chip is-on" : "viz-chip") : t ? "viz-chip is-on" : "viz-chip";
          return (
            <button key={i} type="button" className={cls} onClick={() => cycle(i)}
              aria-label={`${x.w}: ${t ?? "not yet tagged"}`}
              style={{ cursor: "pointer", fontSize: 15, margin: "0 2px", ...(checked && t !== x.role ? { borderColor: "var(--danger)", color: "var(--danger)" } : {}) }}>
              {x.w}{t ? <sup style={{ marginLeft: 4, fontSize: 11 }}>{SHORT[t]}</sup> : null}
            </button>
          );
        })}
      </p>
      {checked && (
        <ul className="tagger" style={{ fontSize: 14 }}>
          {words.map(([x, i]) => (
            <li key={i} className={`tagger-row ${tags[i] === x.role ? "is-right" : "is-wrong"}`}>
              <strong>{x.w}</strong>: {x.role === "not a marker" ? "not an argument marker here" : `marks a ${x.role}`}. {x.why}
            </li>
          ))}
        </ul>
      )}
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={!done} onClick={() => setChecked(true)}>Check</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {checked
          ? `${score} of ${words.length} right.`
          : "Click each highlighted word to cycle through: marks a reason (R), marks a conclusion (C), not a marker here (×)."}
      </figcaption>
    </figure>
  );
}
