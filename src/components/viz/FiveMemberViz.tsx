"use client";

import { useState } from "react";

type Ex = { name: string; members: [string, string][]; pos: string; neg: string; ok: boolean; verdict: string };
const EXS: Ex[] = [
  {
    name: "fire on the hill",
    members: [
      ["thesis (pratijñā)", "The hill has fire."],
      ["reason (hetu)", "Because it has smoke."],
      ["example (udāharaṇa)", "Whatever has smoke has fire, like a kitchen; whatever lacks fire lacks smoke, like a lake."],
      ["application (upanaya)", "The hill has smoke, which is pervaded by fire."],
      ["conclusion (nigamana)", "Therefore the hill has fire."],
    ],
    pos: "kitchen: smoke and fire", neg: "lake: no fire and no smoke", ok: true,
    verdict: "Sound. Smoke is pervaded by fire (vyāpti): no case of smoke without fire is known.",
  },
  {
    name: "sound is impermanent",
    members: [
      ["thesis (pratijñā)", "Sound is impermanent."],
      ["reason (hetu)", "Because it is produced."],
      ["example (udāharaṇa)", "Whatever is produced is impermanent, like a pot; whatever is permanent is unproduced, like space."],
      ["application (upanaya)", "Sound is produced, which is pervaded by impermanence."],
      ["conclusion (nigamana)", "Therefore sound is impermanent."],
    ],
    pos: "pot: produced and impermanent", neg: "space: permanent and unproduced", ok: true,
    verdict: "Sound by Nyāya lights. The Mīmāṃsakas, who held sound eternal, rejected the reason as unestablished.",
  },
  {
    name: "smoke on the hill?",
    members: [
      ["thesis (pratijñā)", "The hill has smoke."],
      ["reason (hetu)", "Because it has fire."],
      ["example (udāharaṇa)", "Whatever has fire has smoke, like a kitchen."],
      ["application (upanaya)", "The hill has fire, which is pervaded by smoke."],
      ["conclusion (nigamana)", "Therefore the hill has smoke."],
    ],
    pos: "kitchen: fire and smoke", neg: "red-hot iron ball: fire without smoke", ok: false,
    verdict: "Fallacious. Fire is not pervaded by smoke: the red-hot iron ball has fire and no smoke. The reason is ‘deviating’ (savyabhicāra).",
  },
];

/** The Nyāya five-membered inference, with its positive and negative examples. */
export function FiveMemberViz() {
  const [e, setE] = useState(0);
  const [k, setK] = useState(5);
  const X = EXS[e];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="inference">
        {EXS.map((x, i) => <button key={x.name} type="button" aria-pressed={e === i} className={e === i ? "seg is-on" : "seg"} onClick={() => { setE(i); setK(5); }}>{x.name}</button>)}
      </div>
      <ol style={{ display: "grid", gap: 6, paddingLeft: 22, marginTop: 10 }}>
        {X.members.slice(0, k).map(([lab, txt]) => (
          <li key={lab}><span className="mono" style={{ color: "var(--text-muted)", fontSize: 12 }}>{lab}: </span>{txt}</li>
        ))}
      </ol>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div>positive example: {X.pos}</div>
        <div style={{ color: X.ok ? "var(--text)" : "var(--danger)" }}>{X.ok ? "negative example" : "counterexample"}: {X.neg}</div>
        <div style={{ fontWeight: 700, color: X.ok ? "var(--accent)" : "var(--danger)" }}>{X.verdict}</div>
      </div>
      <div className="viz-controls" style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button type="button" className="btn btn-ghost" disabled={k <= 1} onClick={() => setK(k - 1)}>Fewer members</button>
        <button type="button" className="btn btn-primary" disabled={k >= 5} onClick={() => setK(k + 1)}>More members</button>
      </div>
      <figcaption className="viz-caption">
        The inference is for persuading another. Its heart is the example, which states the pervasion (vyāpti) between the
        reason and what is to be proved, backed by a case where both occur and a case where both are absent.
      </figcaption>
    </figure>
  );
}
