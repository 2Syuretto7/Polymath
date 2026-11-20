"use client";

import { useState } from "react";

/** A fixed pseudo-random sequence in [0, 1), so the picture is the same on every visit. */
export function noise(i: number) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Forty evaluative dispositions that evolution favoured. With link ρ between fitness and the evaluative truth,
 * disposition i is true when it is linked (noise below ρ) or, unlinked, by chance (second noise below ½).
 */
export function truths(rho: number) {
  return Array.from({ length: 40 }, (_, i) => noise(i) < rho || noise(i + 100) < 0.5);
}

/** Street’s Darwinian dilemma: how many evolved evaluative beliefs would be true, given how fitness relates to value. */
export function DarwinianDilemmaViz() {
  const [rho, setRho] = useState(0);
  const t = truths(rho);
  const count = t.filter(Boolean).length;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>link between fitness and value = {rho.toFixed(1)} <input type="range" min={0} max={1} step={0.1} value={rho} onChange={(e) => setRho(Number(e.target.value))} aria-label="link" /></label>
      </div>
      <svg viewBox="0 0 540 110" role="img" aria-label="Evolved evaluative beliefs, true or false" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {t.map((ok, i) => {
          const x = 20 + (i % 20) * 26, y = 26 + Math.floor(i / 20) * 40;
          return <circle key={i} cx={x} cy={y} r={10} style={{ fill: ok ? "var(--success)" : "var(--danger-soft)", stroke: ok ? "var(--success)" : "var(--danger)" }} />;
        })}
        <text x={20} y={104} style={{ fill: "var(--text-muted)", fontSize: 10 }}>green: the evolved belief matches the independent evaluative truth; red: it does not</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        True evolved beliefs: {count} of 40 ({Math.round((count / 40) * 100)}%). {rho === 0 ? "With no link, agreement is a matter of luck." : rho === 1 ? "With a perfect link, every evolved belief is true." : "A partial link raises the rate above chance."}
      </p>
      <figcaption className="viz-caption">
        Sharon Street argued that evolution shaped our evaluative dispositions to promote reproduction. If realist truths
        are unrelated to fitness, our beliefs would match them only by luck. If they are related, the realist must explain
        how, and the explanation through fitness alone seems to make the realist truths idle. Enoch&rsquo;s reply is a
        third factor: survival is in fact good, so aiming at it tends towards the truth.
      </figcaption>
    </figure>
  );
}
