"use client";

import { useState } from "react";

const TRUTHS = [
  { pali: "dukkha", short: "suffering", med: "the illness", text: "Life as ordinarily lived is marked by dukkha: pain, but also change, loss and the unsatisfactoriness of everything conditioned. Birth, ageing, sickness and death are dukkha; so is not getting what one wants." },
  { pali: "samudaya", short: "its origin", med: "the cause", text: "Dukkha arises from taṇhā, thirst or craving: for pleasures, for becoming, and for non-becoming. Craving clings to what cannot last." },
  { pali: "nirodha", short: "its cessation", med: "the cure exists", text: "When craving ceases without remainder, dukkha ceases. This cessation is nirvāṇa, the ‘blowing out’ of the fires of greed, hatred and delusion." },
  { pali: "magga", short: "the path", med: "the treatment", text: "The way to cessation is the noble eightfold path, a middle way between indulgence and self-torment." },
];
const PATH = [
  { group: "wisdom", items: ["right view", "right intention"] },
  { group: "ethical conduct", items: ["right speech", "right action", "right livelihood"] },
  { group: "meditation", items: ["right effort", "right mindfulness", "right concentration"] },
];

/** The four noble truths, set beside the physician’s four questions. */
export function FourTruthsViz() {
  const [k, setK] = useState(0);
  const T = TRUTHS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="truth">
        {TRUTHS.map((t, i) => <button key={t.pali} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{t.pali}</button>)}
      </div>
      <svg viewBox="0 0 520 130" role="img" aria-label="Four truths beside a physician’s diagnosis" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><marker id="ft-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker></defs>
        <text x={4} y={38} style={{ fill: "var(--text-muted)", fontSize: 11 }}>physician</text>
        <text x={4} y={98} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Buddha</text>
        {TRUTHS.map((t, i) => {
          const x = 70 + i * 113;
          const on = i === k;
          return (
            <g key={t.pali} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y={14} width={98} height={40} rx={5} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: on ? "var(--accent)" : "var(--border)", strokeWidth: on ? 2.5 : 1.5 }} />
              <text x={x + 49} y={38} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{t.med}</text>
              <rect x={x} y={74} width={98} height={40} rx={5} style={{ fill: on ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
              <text x={x + 49} y={98} textAnchor="middle" style={{ fill: on ? "var(--bg)" : "var(--text)", fontSize: 12, fontWeight: 700 }}>{t.short}</text>
              {i < 3 && <line x1={x + 100} y1={94} x2={x + 111} y2={94} markerEnd="url(#ft-arrow)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />}
            </g>
          );
        })}
      </svg>
      <p style={{ margin: "4px 0" }}><strong>{k + 1}. {T.pali}</strong>: {T.short}</p>
      <p className="mono" style={{ fontSize: 13 }}>{T.text}</p>
      {k === 3 && (
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 13 }}>
          {PATH.map((g) => (
            <div key={g.group}>
              <strong>{g.group}</strong>
              <ul style={{ margin: "4px 0", paddingLeft: 18 }}>{g.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
      <figcaption className="viz-caption">
        The truths follow the order of a physician&rsquo;s work: name the illness, find its cause, say whether it can be cured,
        and prescribe. The Buddha offered them as a diagnosis and a treatment, not as a metaphysics to be believed.
      </figcaption>
    </figure>
  );
}
