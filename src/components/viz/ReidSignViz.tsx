"use client";

import { useState } from "react";

const VIEWS = {
  ideas: {
    name: "the way of ideas",
    chain: ["your mind", "an idea or impression", "the object?"],
    rows: [
      ["What do you perceive directly?", "Only your own ideas."],
      ["How do you know there is an object?", "By inference from the ideas, which you can never check against the object."],
      ["Where it led", "Locke to an unknowable substratum, Berkeley to no matter, Hume to scepticism about the world and the self."],
    ],
  },
  reid: {
    name: "Reid's common sense",
    chain: ["your mind", "a sensation, a sign", "the object itself"],
    rows: [
      ["What do you perceive directly?", "The object. The sensation is a natural sign that suggests it, as a word suggests its meaning."],
      ["How do you know there is an object?", "Perception includes an immediate, irresistible belief in it, by the constitution of our nature."],
      ["Where it led", "To trusting our faculties as innocent until proved guilty, and to the direct realism of later philosophers."],
    ],
  },
};
type K = keyof typeof VIEWS;

/** Two pictures of perception: the way of ideas, with ideas standing between mind and world, and Reid's view, on which sensations are signs through which we perceive objects directly. */
export function ReidSignViz() {
  const [k, setK] = useState<K>("ideas");
  const v = VIEWS[k];
  const xs = [80, 260, 440];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="View">
        {(Object.keys(VIEWS) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => setK(x)}>{VIEWS[x].name}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 110" role="img" aria-label="A chain from mind to object" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <defs>
          <marker id="rs-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
        {k === "ideas" ? (
          <>
            <line x1={150} y1={45} x2={190} y2={45} markerEnd="url(#rs-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
            <line x1={340} y1={45} x2={360} y2={45} style={{ stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "4 4" }} />
            <line x1={350} y1={20} x2={350} y2={72} style={{ stroke: "var(--danger)", strokeWidth: 3 }} />
            <text x={350} y={90} textAnchor="middle" style={{ fontSize: 11, fill: "var(--danger)" }}>the veil</text>
          </>
        ) : (
          <path d="M150,45 C220,0 300,0 365,40" markerEnd="url(#rs-arr)" style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        )}
        {v.chain.map((t, i) => (
          <g key={t}>
            <rect x={xs[i] - 70} y={30} width={140} height={30} rx={6} style={{ fill: i === 1 && k === "ideas" ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={xs[i]} y={50} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text)" }}>{t}</text>
          </g>
        ))}
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          {v.rows.map(([q, a]) => <tr key={q}><td>{q}</td><td>{a}</td></tr>)}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "ideas"
          ? "Descartes, Locke, Berkeley and Hume all assumed that the immediate objects of the mind are ideas. Reid called this the theory of ideas, and blamed it for every sceptical conclusion that followed."
          : "For Reid the sensation is real but is not what we perceive. Through it, the mind is carried straight to the object, much as a reader looks through the letters to the meaning."}
      </figcaption>
    </figure>
  );
}
