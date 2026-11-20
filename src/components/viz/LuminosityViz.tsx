"use client";

import { useState } from "react";

const T = 10, WARM_FROM = 6;

/** Williamson's anti-luminosity argument, moment by moment, from dawn (cold) to noon (warm). */
export function LuminosityViz() {
  const [step, setStep] = useState(0);
  const lines: string[] = [];
  for (let i = 0; i <= step && i <= WARM_FROM; i++) {
    if (i === 0) lines.push("t0: I feel cold (fact). By luminosity, I am in a position to know I feel cold; suppose I know it.");
    else lines.push(`t${i}: margin for error from t${i - 1}: I feel cold at t${i}. By luminosity, I know it at t${i}.`);
  }
  const contradiction = step >= WARM_FROM;
  return (
    <figure className="viz">
      <svg viewBox="0 0 540 90" role="img" aria-label="Moments from dawn to noon" style={{ width: "100%", display: "block" }}>
        {Array.from({ length: T + 1 }, (_, i) => {
          const x = 30 + i * 48, warm = i >= WARM_FROM, derived = i <= Math.min(step, WARM_FROM);
          return (
            <g key={i}>
              <rect x={x - 18} y={20} width={36} height={30} rx={4} style={{ fill: warm ? "var(--danger-soft)" : "var(--accent-soft)", stroke: derived ? (contradiction && i === WARM_FROM ? "var(--danger)" : "var(--accent)") : "var(--border-strong)", strokeWidth: derived ? 2.5 : 1 }} />
              <text x={x} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{warm ? "warm" : "cold"}</text>
              <text x={x} y={66} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>t{i}</text>
            </g>
          );
        })}
        <text x={10} y={84} style={{ fill: "var(--text-muted)", fontSize: 10 }}>fill: how I actually feel; thick border: &lsquo;I feel cold&rsquo; derived by the argument</text>
      </svg>
      <ol style={{ marginTop: 8, paddingLeft: 22, fontSize: 14 }}>
        {lines.map((l, i) => <li key={i} style={{ color: contradiction && i === WARM_FROM ? "var(--danger)" : "var(--text)" }}>{l}</li>)}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={contradiction} onClick={() => setStep(step + 1)}>Next moment</button>
        <button type="button" className="btn btn-ghost" onClick={() => setStep(0)}>Start again</button>
      </div>
      {contradiction && (
        <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
          Contradiction at t{WARM_FROM}: the argument says I feel cold, but I feel warm. Williamson rejects luminosity, not
          margin for error.
        </p>
      )}
      <figcaption className="viz-caption">
        Luminosity: whenever I feel cold, I am in a position to know that I feel cold. Margin for error: if I know I feel
        cold at one moment, I feel cold at the next, almost indistinguishable moment, since knowledge must be safe. Each
        step is tiny, yet together the principles carry &lsquo;cold&rsquo; all the way to a moment where I feel warm.
      </figcaption>
    </figure>
  );
}
