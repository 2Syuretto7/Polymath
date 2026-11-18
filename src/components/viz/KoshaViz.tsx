"use client";

import { useState } from "react";

const SHEATHS = [
  { name: "annamaya", gloss: "made of food", text: "The physical body, nourished by food and returning to it. It changes and decays, so it cannot be the unchanging self." },
  { name: "prāṇamaya", gloss: "made of breath", text: "The vital breaths that animate the body. They come and go, and continue in sleep without my awareness." },
  { name: "manomaya", gloss: "made of mind", text: "The mind of perceptions, desires and doubts. Its contents are objects I can observe, so it is not the observer." },
  { name: "vijñānamaya", gloss: "made of understanding", text: "The intellect that judges and decides, and the sense of being an agent. It too is a function that rises and lapses." },
  { name: "ānandamaya", gloss: "made of bliss", text: "The bliss of deep, dreamless sleep. The Taittirīya treats it as the innermost sheath, still a covering of the self." },
];

/** The five sheaths of the Taittirīya Upaniṣad, peeled away one by one in search of the self. */
export function KoshaViz() {
  const [k, setK] = useState(0);
  const R = [110, 92, 74, 56, 38];
  const done = k >= SHEATHS.length;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 240" role="img" aria-label="Five nested sheaths around the self" style={{ width: "100%", display: "block" }}>
        {SHEATHS.map((s, i) => (
          <g key={s.name} style={{ opacity: i < k ? 0.12 : 1 }}>
            <circle cx={130} cy={120} r={R[i]} style={{ fill: i === k ? "var(--accent-soft)" : "var(--bg)", stroke: i === k ? "var(--accent)" : "var(--border)", strokeWidth: i === k ? 3 : 1.5 }} />
          </g>
        ))}
        <circle cx={130} cy={120} r={16} style={{ fill: done ? "var(--accent)" : "var(--text-faint)" }} />
        <text x={130} y={124} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 10, fontWeight: 700 }}>ātman</text>
        {SHEATHS.map((s, i) => (
          <text key={s.name} x={270} y={46 + i * 34} style={{ fill: i === k ? "var(--accent)" : i < k ? "var(--text-faint)" : "var(--text)", fontSize: 13, fontWeight: i === k ? 700 : 400, textDecoration: i < k ? "line-through" : "none" }}>
            {i + 1}. {s.name}: {s.gloss}
          </text>
        ))}
        <text x={270} y={46 + 5 * 34} style={{ fill: done ? "var(--accent)" : "var(--text-muted)", fontSize: 13, fontWeight: 700 }}>the self: the witness of all five</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {done ? "What remains is not a further layer but the awareness to which every layer appeared. The Upaniṣads identify this ātman with brahman." : SHEATHS[k].text}
      </p>
      <div className="viz-controls" style={{ display: "flex", gap: 8 }}>
        <button type="button" className="btn btn-ghost" disabled={k === 0} onClick={() => setK(k - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setK(k + 1)}>Not this: peel it away</button>
      </div>
      <figcaption className="viz-caption">
        Each sheath is set aside by the same test, neti neti, &ldquo;not this, not this&rdquo;: whatever can be observed,
        changes or comes and goes is not the self that observes it. Later Vedānta makes this the standard route to the self.
      </figcaption>
    </figure>
  );
}
