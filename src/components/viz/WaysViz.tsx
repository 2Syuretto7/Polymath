"use client";

import { useState } from "react";

type Way = { name: string; fact: string; chain: string[]; rule: string; first: string; doubt: string };

const WAYS: Way[] = [
  {
    name: "motion",
    fact: "Some things are in motion, that is, changing.",
    chain: ["wood becomes hot", "because fire heats it", "fire is kept in being by something else", "…"],
    rule: "Whatever is changed is changed by another, and the series of changers that are themselves changed cannot go on to infinity.",
    first: "a first unmoved mover",
    doubt: "Newton's first law says a body in uniform motion needs no mover at all. Does the first way survive modern physics?",
  },
  {
    name: "efficient cause",
    fact: "We find an order of efficient causes in the world.",
    chain: ["a plant grows", "sustained by the sun", "sustained by something else", "…"],
    rule: "Nothing causes itself, and an ordered series of causes, each acting only through the one before, cannot be infinite.",
    first: "a first efficient cause",
    doubt: "Why can the series not be infinite? Aquinas means a series of simultaneous, dependent causes, not a chain back in time.",
  },
  {
    name: "possibility and necessity",
    fact: "Some things come into being and pass away, so they are able not to be.",
    chain: ["you exist", "but could have failed to", "so you depend on another", "…"],
    rule: "If everything could fail to exist, at some time nothing would have existed, and then nothing would exist now.",
    first: "something necessary of itself",
    doubt: "Does it follow that if each thing can fail to exist at some time, there is a time when all fail together?",
  },
  {
    name: "gradation",
    fact: "Things are more and less good, true and noble.",
    chain: ["this act is good", "that one better", "measured against something best", "…"],
    rule: "More and less are said by reference to a maximum, and the maximum in a kind is the cause of all in that kind.",
    first: "something that is best and most fully being",
    doubt: "Things are more or less hot without a hottest thing existing. Does gradation really need a maximum?",
  },
  {
    name: "governance",
    fact: "Things that lack knowledge, such as natural bodies, act for an end.",
    chain: ["an acorn grows into an oak", "always or nearly always", "not by chance", "…"],
    rule: "What lacks knowledge does not move towards an end unless directed by something with knowledge, as the arrow by the archer.",
    first: "an intelligent being directing all natural things to their end",
    doubt: "Darwin offered another explanation of how things without minds come to act as if for an end.",
  },
];

/** Aquinas's five ways: each starts from a fact about the world and climbs a chain of dependence to a first. */
export function WaysViz() {
  const [k, setK] = useState(0);
  const [step, setStep] = useState(0);
  const w = WAYS[k];
  const total = w.chain.length + 1;
  const pick = (i: number) => { setK(i); setStep(0); };

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Way" style={{ flexWrap: "wrap" }}>
        {WAYS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => pick(i)}>{i + 1}. {x.name}</button>
        ))}
      </div>
      <p style={{ margin: "12px 0 8px" }}><strong>Starting point:</strong> {w.fact}</p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
        {w.chain.map((c, i) => (
          <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span className="viz-chip" style={{ opacity: i <= step ? 1 : 0.25 }}>{c}</span>
            {i < w.chain.length - 1 && <span style={{ color: "var(--text-faint)", opacity: i < step ? 1 : 0.25 }}>←</span>}
          </span>
        ))}
      </div>
      <p className="tagger-why" style={{ marginTop: 12, opacity: step >= w.chain.length - 1 ? 1 : 0.3 }}><strong>The key premise:</strong> {w.rule}</p>
      <div style={{ marginTop: 10, padding: "10px 12px", border: "1px solid var(--border)", borderRadius: 8, background: step >= total - 1 ? "var(--accent-soft)" : "var(--bg-subtle)", opacity: step >= total - 1 ? 1 : 0.4 }}>
        <span className="mono-meta" style={{ textTransform: "none" }}>so there is </span>{w.first}<span className="mono-meta" style={{ textTransform: "none" }}>, &ldquo;and this all call God&rdquo;</span>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={step >= total - 1} onClick={() => setStep(step + 1)}>Climb the chain</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {step >= total - 1 ? `A question to press: ${w.doubt}` : "Each link depends on the one beyond it. The argument turns on whether the chain must end."}
      </figcaption>
    </figure>
  );
}
