"use client";

import { useState } from "react";

const LINKS = [
  { name: "names", ok: "Names are correct: ‘ruler’, ‘father’, ‘minister’ fit those who bear them.", bad: "Names are not correct: a ‘ruler’ who does not rule, a ‘father’ who does not act as one." },
  { name: "speech", ok: "Speech accords with how things are.", bad: "Speech does not accord with things: words mislead." },
  { name: "affairs", ok: "Affairs can be accomplished.", bad: "Affairs cannot be accomplished." },
  { name: "rites and music", ok: "Rites and music flourish.", bad: "Rites and music do not flourish." },
  { name: "punishments", ok: "Punishments fit the offence.", bad: "Punishments miss the mark." },
  { name: "the people", ok: "The people know how to act.", bad: "The people do not know where to put hand or foot." },
];

/** Analects 13.3: what follows if names are not correct. */
export function NameCascadeViz() {
  const [ok, setOk] = useState(false);
  const [k, setK] = useState(LINKS.length - 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="names">
        <button type="button" aria-pressed={!ok} className={!ok ? "seg is-on" : "seg"} onClick={() => setOk(false)}>names not correct</button>
        <button type="button" aria-pressed={ok} className={ok ? "seg is-on" : "seg"} onClick={() => setOk(true)}>names correct</button>
      </div>
      <svg viewBox="0 0 520 130" role="img" aria-label="A chain of consequences" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="nc-arr" markerUnits="userSpaceOnUse" markerWidth={9} markerHeight={9} refX={8} refY={4.5} orient="auto">
            <path d="M0 0 L9 4.5 L0 9 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
        {LINKS.map((l, i) => {
          const col = i % 3, row = Math.floor(i / 3);
          const x = 20 + col * 170, y = 8 + row * 64;
          return (
            <g key={l.name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
              {col > 0 && <line x1={x - 28} y1={y + 24} x2={x - 4} y2={y + 24} markerEnd="url(#nc-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />}
              <rect x={x} y={y} width={140} height={48} rx={6} style={{ fill: i > k ? "var(--bg)" : ok ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: i === k ? "var(--accent)" : ok ? "var(--accent)" : "var(--danger)", strokeWidth: i === k ? 2.5 : 1.2 }} />
              <text x={x + 70} y={y + 29} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{i + 1}. {l.name}</text>
            </g>
          );
        })}
      </svg>
      <ol style={{ paddingLeft: 22, margin: "4px 0", fontSize: 14 }}>
        {LINKS.slice(0, k + 1).map((l) => <li key={l.name} style={{ color: ok ? "var(--text)" : "var(--danger)" }}>{ok ? l.ok : l.bad}</li>)}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setK(Math.max(0, k - 1))} disabled={k === 0}>back</button>
        <button type="button" className="btn btn-primary" onClick={() => setK(Math.min(LINKS.length - 1, k + 1))} disabled={k === LINKS.length - 1}>next</button>
      </div>
      <figcaption className="viz-caption">
        Asked what he would do first if given charge of government, Confucius said he would rectify names. Each link in the
        chain depends on the one before: political order begins with words that fit their roles.
      </figcaption>
    </figure>
  );
}
