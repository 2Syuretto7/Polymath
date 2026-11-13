"use client";

import { useState } from "react";

type Case = { label: string; laws: string; conditions: string; explanandum: string; dn: boolean; explains: boolean; why: string };
const CASES: Case[] = [
  {
    label: "eclipse",
    laws: "Newton’s laws of motion and gravitation",
    conditions: "the positions and velocities of the sun, moon and earth last year",
    explanandum: "a solar eclipse occurred on the predicted day",
    dn: true,
    explains: true,
    why: "A law and initial conditions deductively yield the event, and they genuinely account for it. This is the model’s paradigm.",
  },
  {
    label: "flagpole",
    laws: "light travels in straight lines; trigonometry",
    conditions: "the shadow is 15 m long and the sun is 53° above the horizon",
    explanandum: "the flagpole is 20 m tall",
    dn: true,
    explains: false,
    why: "The derivation is valid, but the shadow does not explain the height. Run it the other way, from height to shadow, and it does explain. The model ignores this asymmetry.",
  },
  {
    label: "barometer",
    laws: "whenever the barometer falls sharply, a storm soon follows",
    conditions: "the barometer fell sharply this morning",
    explanandum: "a storm came this afternoon",
    dn: true,
    explains: false,
    why: "Both the falling barometer and the storm are effects of a drop in air pressure. A common cause makes the regularity reliable without the barometer explaining anything.",
  },
  {
    label: "hexed salt",
    laws: "all hexed salt dissolves in water",
    conditions: "this salt was hexed and put in water",
    explanandum: "this salt dissolved",
    dn: true,
    explains: false,
    why: "The premises are true and the law is exceptionless, but the hex is irrelevant: unhexed salt dissolves too.",
  },
  {
    label: "paresis",
    laws: "only about a quarter of people with untreated latent syphilis develop paresis",
    conditions: "this patient had untreated latent syphilis",
    explanandum: "this patient developed paresis",
    dn: false,
    explains: true,
    why: "No strict law makes paresis follow, and it was not even likely, yet the syphilis seems to explain it. Scriven used this against the requirement that explanations be arguments.",
  },
];

/** The deductive-nomological model tested on five cases: when deduction from laws and explanation come apart. */
export function DNCaseViz() {
  const [ci, setCi] = useState(1);
  const C = CASES[ci];
  const agree = C.dn === C.explains;
  const row = (head: string, body: string) => (
    <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 8, padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6 }}>
      <strong style={{ fontSize: 14 }}>{head}</strong>
      <span style={{ fontSize: 14 }}>{body}</span>
    </div>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Case">
        {CASES.map((c, i) => <button key={c.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{c.label}</button>)}
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        {row("law", C.laws)}
        {row("conditions", C.conditions)}
        {row("explanandum", C.explanandum)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>fits the DN model: {C.dn ? "yes, the explanandum follows deductively" : "no, the explanandum does not follow"}</div>
        <div>intuitively an explanation: {C.explains ? "yes" : "no"}</div>
      </div>
      <p style={{ margin: "6px 0 4px", padding: "6px 8px", borderRadius: 6, fontSize: 14, background: agree ? "var(--accent-soft)" : "var(--danger-soft)" }}>
        {agree ? "The model and intuition agree. " : "The model and intuition come apart. "}
        {C.why}
      </p>
      <figcaption className="viz-caption">
        Hempel and Oppenheim held that to explain an event is to deduce it from at least one law of nature together with
        particular conditions. The counterexamples suggest that deduction from laws is neither sufficient nor necessary for
        explanation, and point towards causation and relevance.
      </figcaption>
    </figure>
  );
}
