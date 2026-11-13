"use client";

import { useState } from "react";

const ANT = [
  {
    name: "first",
    thesis: "The world has a beginning in time, and is limited in space.",
    tArg: "If the world had no beginning, an infinite series of past states would have been completed by now. But an infinite series can never be completed by successive synthesis.",
    anti: "The world has no beginning and no limits in space; it is infinite in time and space.",
    aArg: "If it had a beginning, it was preceded by empty time. But in empty time no moment is distinguished from any other, so nothing could come into being then rather than earlier.",
    kind: "mathematical",
    res: "Both are false. Each assumes that the world as a whole is given, as a thing in itself, so that it must be either finite or infinite. But the world of appearances is never given as a whole. It exists only in the regress of experience, which can always be continued and is never completed: neither finite nor infinite, but indefinite.",
  },
  {
    name: "second",
    thesis: "Every composite substance in the world consists of simple parts.",
    tArg: "Take away all composition in thought, and if there were no simple parts, nothing would remain. So composites must be made of simples.",
    anti: "No composite thing consists of simple parts; nothing simple exists in the world.",
    aArg: "Whatever is in space is extended, and every part of space is itself divisible. So every part of a body is divisible, and nothing simple can be found.",
    kind: "mathematical",
    res: "Both are false. Division of an appearance can go on indefinitely, but the parts are not all given in advance, waiting to be counted. They exist only as far as the division is actually carried.",
  },
  {
    name: "third",
    thesis: "Besides causality according to laws of nature, there is also causality through freedom.",
    tArg: "If everything happened by natural law, every cause would have a prior cause, and the series would never have a first beginning, so it would never be complete. A spontaneous first cause is needed.",
    anti: "There is no freedom; everything in the world happens solely according to laws of nature.",
    aArg: "A free cause, beginning a series of its own accord, would break the unity of experience, which requires every event to follow from a prior one by a rule.",
    kind: "dynamical",
    res: "Both may be true, in different respects. Every appearance, including my actions as events in time, is determined by natural law. But the same agent, considered as a thing in itself, may be a free cause. Kant does not prove that we are free, only that freedom does not contradict nature.",
  },
  {
    name: "fourth",
    thesis: "There belongs to the world, as its part or its cause, an absolutely necessary being.",
    tArg: "Every change in the world is conditioned, and the series of conditions presupposes something unconditioned, which exists necessarily.",
    anti: "There is no absolutely necessary being, in the world or outside it, as its cause.",
    aArg: "A necessary being within the series would be a beginning without a cause, contrary to natural law; and outside the series, it could not belong to time and so could not begin the series.",
    kind: "dynamical",
    res: "Both may be true. Everything in the world of sense is contingent and conditioned. But a necessary being outside the series of appearances, as its intelligible ground, is not ruled out, though it cannot be known.",
  },
];

/** Kant's four antinomies of pure reason: a thesis and an antithesis, each with a seemingly sound proof, and Kant's way out. */
export function AntinomyViz() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);
  const A = ANT[i];
  const col = { flex: "1 1 220px", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 12px" };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Antinomy">
        {ANT.map((a, j) => (
          <button key={j} type="button" className={j === i ? "seg is-on" : "seg"} aria-pressed={j === i} onClick={() => { setI(j); setShow(false); }}>{a.name} antinomy</button>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
        <div style={col}>
          <p className="mono-meta" style={{ margin: 0 }}>thesis</p>
          <p style={{ margin: "6px 0", fontWeight: 600 }}>{A.thesis}</p>
          <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.5 }}>{A.tArg}</p>
        </div>
        <div style={col}>
          <p className="mono-meta" style={{ margin: 0 }}>antithesis</p>
          <p style={{ margin: "6px 0", fontWeight: 600 }}>{A.anti}</p>
          <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.5 }}>{A.aArg}</p>
        </div>
      </div>
      <div className="viz-controls">
        <button type="button" className={show ? "btn" : "btn btn-primary"} onClick={() => setShow(!show)}>{show ? "Hide the resolution" : "Show Kant's resolution"}</button>
      </div>
      {show && <p style={{ margin: "10px 0 0", lineHeight: 1.55 }} aria-live="polite"><span className="mono-meta" style={{ textTransform: "none" }}>a {A.kind} antinomy. </span>{A.res}</p>}
      <figcaption className="viz-caption">
        Each proof works by refuting the other side, so reason seems to prove a contradiction. Kant takes this as indirect evidence for transcendental idealism: only by distinguishing appearances from things in themselves can reason escape.
      </figcaption>
    </figure>
  );
}
