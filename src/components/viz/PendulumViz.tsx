"use client";

import { useState } from "react";

type Phase = "want" | "satisfied" | "bored";
const TEXT: Record<Phase, string> = {
  want: "You want something you lack. Want is felt as a lack, and so as pain.",
  satisfied: "You have it. The satisfaction is only the removal of a pain, and it fades almost at once.",
  bored: "Nothing is wanted, and existence itself weighs on you. Boredom presses until a new desire arrives.",
};
const ESCAPES = [
  { name: "art", text: "In aesthetic contemplation, above all of music, the subject becomes a pure, will-less knower. The pendulum stops, but only for moments." },
  { name: "compassion", text: "Seeing through individuality, I recognise the same will suffering in another. Compassion is the basis of morality, and it quiets my own striving." },
  { name: "denial of the will", text: "The saint or ascetic, seeing the whole of suffering, turns the will against itself: chastity, poverty, resignation. Schopenhauer compares this to the Buddhist and Hindu ideals of release." },
];

/** Schopenhauer's pendulum between pain and boredom, and the routes he thought could still it. */
export function PendulumViz() {
  const [phase, setPhase] = useState<Phase>("want");
  const [n, setN] = useState(0);
  const [esc, setEsc] = useState<number | null>(null);
  const next = () => { setEsc(null); setPhase((p) => (p === "want" ? "satisfied" : p === "satisfied" ? "bored" : "want")); setN((k) => k + 1); };
  const ang = esc !== null ? 0 : phase === "want" ? -35 : phase === "bored" ? 35 : 0;
  const W = 520, cx = W / 2, top = 18, L = 110;
  const bx = cx + L * Math.sin((ang * Math.PI) / 180), by = top + L * Math.cos((ang * Math.PI) / 180);
  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} 160`} role="img" aria-label="A pendulum between pain and boredom" style={{ width: "100%", display: "block" }}>
        <line x1={cx - 40} y1={top} x2={cx + 40} y2={top} style={{ stroke: "var(--border-strong)", strokeWidth: 3 }} />
        <line x1={cx} y1={top} x2={bx} y2={by} style={{ stroke: "var(--text-muted)", strokeWidth: 2, transition: "all 0.5s" }} />
        <circle cx={bx} cy={by} r={14} style={{ fill: esc !== null ? "var(--accent)" : phase === "satisfied" ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: "var(--text)", transition: "all 0.5s" }} />
        <text x={cx - 150} y={140} textAnchor="middle" style={{ fill: phase === "want" && esc === null ? "var(--danger)" : "var(--text-faint)", fontSize: 13 }}>pain of want</text>
        <text x={cx} y={150} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{esc !== null ? "stilled" : "brief satisfaction"}</text>
        <text x={cx + 150} y={140} textAnchor="middle" style={{ fill: phase === "bored" && esc === null ? "var(--danger)" : "var(--text-faint)", fontSize: 13 }}>boredom</text>
      </svg>
      <p style={{ margin: "4px 0" }}>{esc !== null ? ESCAPES[esc].text : TEXT[phase]}</p>
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6, marginTop: 6 }}>
        <button type="button" className="btn btn-primary" onClick={next}>{phase === "want" ? "Get what you want" : phase === "satisfied" ? "Wait" : "A new desire arrives"}</button>
        {ESCAPES.map((e, i) => <button key={e.name} type="button" aria-pressed={esc === i} className={esc === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setEsc(i)}>{e.name}</button>)}
      </div>
      <p className="mono-meta" style={{ textTransform: "none", margin: "6px 0 0" }}>swings so far: {n}</p>
      <figcaption className="viz-caption">
        &ldquo;Life swings like a pendulum, backwards and forwards, between pain and boredom.&rdquo; Because the will is endless striving, every satisfaction is negative and short, and the cycle never ends by itself. Try the three escapes Schopenhauer describes.
      </figcaption>
    </figure>
  );
}
