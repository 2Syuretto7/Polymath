"use client";

import { useState } from "react";

const MARKS = ["The reason is present in the subject", "It is present in some similar cases (which have the property)", "It is absent from all dissimilar cases (which lack it)"];
const CASES = [
  { name: "smoke", text: "The hill has fire, because it has smoke.", sim: "a kitchen hearth", dis: "a lake", ok: [true, true, true], note: "All three marks hold: a valid reason. Smoke is pervaded by fire." },
  { name: "visible", text: "Sound is impermanent, because it is visible.", sim: "a pot", dis: "space", ok: [false, true, true], note: "Mark 1 fails: sound is not visible, so the reason does not even belong to the subject (unestablished)." },
  { name: "knowable", text: "Sound is impermanent, because it is knowable.", sim: "a pot", dis: "space", ok: [true, true, false], note: "Mark 3 fails: space is knowable but not impermanent, so the reason strays into dissimilar cases (inconclusive)." },
  { name: "audible", text: "Sound is impermanent, because it is audible.", sim: "a pot", dis: "space", ok: [true, false, true], note: "Mark 2 fails: nothing but sound is audible, so no similar case confirms the link (too narrow; inconclusive for Dignāga)." },
];

/** Dignāga’s three marks of a good reason, tested on four inferences. */
export function TrairupyaViz() {
  const [k, setK] = useState(0);
  const C = CASES[k];
  const valid = C.ok.every(Boolean);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="inference">
        {CASES.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>because {x.name}</button>)}
      </div>
      <p style={{ margin: "8px 0" }}><strong>{C.text}</strong></p>
      <svg viewBox="0 0 520 130" role="img" aria-label="Subject, similar and dissimilar cases, with the reason’s reach" style={{ width: "100%", display: "block" }}>
        {[["subject", k === 0 ? "the hill" : "sound"], ["similar case", C.sim], ["dissimilar case", C.dis]].map(([lab, ex], i) => {
          const x = 30 + i * 165;
          const has = C.ok[i] === (i < 2);
          return (
            <g key={lab}>
              <rect x={x} y={30} width={145} height={70} rx={8} style={{ fill: has ? "var(--accent-soft)" : "var(--bg)", stroke: has ? "var(--accent)" : "var(--border)", strokeWidth: 2 }} />
              <text x={x + 72} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{lab}</text>
              <text x={x + 72} y={60} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{ex}</text>
              <text x={x + 72} y={84} textAnchor="middle" style={{ fill: has ? "var(--accent)" : "var(--text-muted)", fontSize: 11 }}>{has ? "has the reason" : "lacks the reason"}</text>
            </g>
          );
        })}
      </svg>
      <ol className="mono" style={{ fontSize: 13, paddingLeft: 22, margin: "4px 0" }}>
        {MARKS.map((m, i) => <li key={m} style={{ color: C.ok[i] ? "var(--text)" : "var(--danger)" }}>{m}: {C.ok[i] ? "holds" : "fails"}.</li>)}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{valid ? "Valid." : "Not valid."} {C.note}</p>
      <figcaption className="viz-caption">
        Shaded boxes contain the reason. A good reason must belong to the subject, be found with the property, and never be
        found without it. Dharmakīrti grounded the third mark in real relations: identity of nature, or cause and effect.
      </figcaption>
    </figure>
  );
}
