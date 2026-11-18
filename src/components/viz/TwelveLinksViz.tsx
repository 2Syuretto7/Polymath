"use client";

import { useState } from "react";

const LINKS = [
  { pali: "avijjā", gloss: "ignorance", life: 0 },
  { pali: "saṅkhāra", gloss: "formations", life: 0 },
  { pali: "viññāṇa", gloss: "consciousness", life: 1 },
  { pali: "nāmarūpa", gloss: "name and form", life: 1 },
  { pali: "saḷāyatana", gloss: "six sense bases", life: 1 },
  { pali: "phassa", gloss: "contact", life: 1 },
  { pali: "vedanā", gloss: "feeling", life: 1 },
  { pali: "taṇhā", gloss: "craving", life: 1 },
  { pali: "upādāna", gloss: "clinging", life: 1 },
  { pali: "bhava", gloss: "becoming", life: 1 },
  { pali: "jāti", gloss: "birth", life: 2 },
  { pali: "jarāmaraṇa", gloss: "ageing and death", life: 2 },
];
const LIFE = ["past life", "present life", "future life"];

/** The twelve links of dependent origination, read forwards or backwards. */
export function TwelveLinksViz() {
  const [k, setK] = useState(7);
  const [ceasing, setCeasing] = useState(false);
  const n = LINKS.length;
  const P = LINKS.map((_, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    return [260 + 150 * Math.cos(a), 125 + 100 * Math.sin(a)];
  });
  const L = LINKS[k], prev = LINKS[(k + n - 1) % n], next = LINKS[(k + 1) % n];
  const sentence = ceasing
    ? k === 0 ? "With the remainderless fading and cessation of ignorance, formations cease." : `With the cessation of ${prev.gloss}, ${L.gloss} ceases${k === n - 1 ? "; and so this whole mass of suffering ceases" : ""}.`
    : k === 0 ? "Ignorance is where the chain is broken into, not a first cause: it too is conditioned." : `With ${prev.gloss} as condition, ${L.gloss} arises.`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="direction">
        <button type="button" aria-pressed={!ceasing} className={!ceasing ? "seg is-on" : "seg"} onClick={() => setCeasing(false)}>arising</button>
        <button type="button" aria-pressed={ceasing} className={ceasing ? "seg is-on" : "seg"} onClick={() => setCeasing(true)}>ceasing</button>
      </div>
      <svg viewBox="0 0 520 250" role="img" aria-label="Twelve links arranged in a wheel" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <ellipse cx={260} cy={125} rx={150} ry={100} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 1.5 }} />
        {LINKS.map((l, i) => {
          const [x, y] = P[i];
          const on = i === k;
          const near = i === (k + n - 1) % n;
          return (
            <g key={l.pali} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
              <circle cx={x} cy={y} r={on ? 11 : 8} style={{ fill: on ? (ceasing ? "var(--danger)" : "var(--accent)") : near ? "var(--accent-soft)" : "var(--bg)", stroke: l.life === 1 ? "var(--accent)" : "var(--text-muted)", strokeWidth: 2 }} />
              <text x={x + (x > 262 ? 16 : x < 258 ? -16 : 0)} y={y + (Math.abs(x - 260) < 5 ? (y < 125 ? -16 : 24) : 4)} textAnchor={x > 262 ? "start" : x < 258 ? "end" : "middle"}
                style={{ fill: on ? "var(--text)" : "var(--text-muted)", fontSize: 11, fontWeight: on ? 700 : 400 }}>{i + 1}. {l.gloss}</text>
            </g>
          );
        })}
        <text x={260} y={121} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{LIFE[L.life]}</text>
        <text x={260} y={137} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>(on the three-lives reading)</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setK((k + n - 1) % n)}>Back</button>
        <button type="button" className="btn btn-primary" onClick={() => setK((k + 1) % n)}>Next link</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{k + 1}. {L.pali}, {L.gloss}. {sentence}</p>
      <figcaption className="viz-caption">
        Click a link or step round. Each arises in dependence on the one before, and the last, ageing and death, feeds back
        into ignorance. Next comes {next.gloss}. The path cuts in where the wheel is weakest: between feeling and craving.
      </figcaption>
    </figure>
  );
}
