"use client";

import { useState } from "react";

const CASES = [
  {
    key: "filial",
    title: "The student who knows but does not do",
    text: "A student can recite every rule for caring for parents, yet neglects their own.",
    zhu: "They have some knowledge but lack practice. Knowledge comes first in order; practice is more important in weight. Keep studying, and act on it.",
    wang: "They do not yet know filial piety. Their knowing has been cut off by selfish desire. One who truly knew would already be acting.",
  },
  {
    key: "bamboo",
    title: "Seven days before the bamboo",
    text: "As a young man, Wang and a friend set out to investigate the principle of the bamboo in front of a pavilion. The friend fell ill after three days; Wang lasted seven, then fell ill too, having found nothing.",
    zhu: "The method was misused: one investigates principles in things patiently, through study and reflection, not by staring at a single plant.",
    wang: "The method itself was wrong. Principle is not out there in the bamboo. The mind is principle; seek it within.",
  },
  {
    key: "odour",
    title: "Smelling a foul odour",
    text: "The Great Learning speaks of loving a beautiful colour and hating a bad odour.",
    zhu: "Sincerity of intention should be as natural as these responses, once knowledge has been extended.",
    wang: "Smelling the odour is knowing; hating it is acting. They happen at once, not one then the other. That is the original unity of knowing and acting.",
  },
  {
    key: "well",
    title: "The child at the well",
    text: "Anyone who suddenly sees a child about to fall into a well feels alarm and moves to help.",
    zhu: "This shows the principle of humaneness in our nature, partly obscured by qi; study clears it.",
    wang: "This is innate knowing (liangzhi), complete in everyone and already active. Cultivation means extending it, not acquiring it from outside.",
  },
];

/** Zhu Xi and Wang Yangming read four cases: knowledge before action, or knowing and acting as one. */
export function KnowActViz() {
  const [k, setK] = useState(0);
  const [who, setWho] = useState<"zhu" | "wang">("wang");
  const C = CASES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((c, i) => <button key={c.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.title}</button>)}
      </div>
      <p style={{ margin: "8px 0" }}>{C.text}</p>
      <div className="segmented" role="group" aria-label="reading">
        <button type="button" aria-pressed={who === "zhu"} className={who === "zhu" ? "seg is-on" : "seg"} onClick={() => setWho("zhu")}>Zhu Xi reads it</button>
        <button type="button" aria-pressed={who === "wang"} className={who === "wang" ? "seg is-on" : "seg"} onClick={() => setWho("wang")}>Wang Yangming reads it</button>
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="Knowing and acting, as two steps or as one" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><marker id="ka-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 Z" style={{ fill: "var(--text-muted)" }} /></marker></defs>
        {who === "zhu" ? (
          <>
            <rect x={60} y={15} width={150} height={40} rx={8} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={135} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>knowing</text>
            <line x1={215} y1={35} x2={300} y2={35} markerEnd="url(#ka-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
            <rect x={310} y={15} width={150} height={40} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={385} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>acting</text>
          </>
        ) : (
          <>
            <rect x={135} y={15} width={250} height={40} rx={8} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={260} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>knowing = acting</text>
          </>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{who === "zhu" ? C.zhu : C.wang}</p>
      <figcaption className="viz-caption">
        Zhu Xi orders knowledge before action and finds principle by investigating things. Wang Yangming holds that the mind
        is principle and that knowing and acting are one: to know without acting is not yet to know.
      </figcaption>
    </figure>
  );
}
