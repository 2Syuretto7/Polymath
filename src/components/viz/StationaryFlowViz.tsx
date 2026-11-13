"use client";

import { useMemo, useState } from "react";
import { seededRng } from "./seededRng";

/** A two-state chain: the stationary distribution balances the flow of probability in each direction. */
export function StationaryFlowViz() {
  const [a, setA] = useState(0.3);
  const [b, setB] = useState(0.1);
  const pi0 = b / (a + b), pi1 = a / (a + b);
  const frac = useMemo(() => {
    const r = seededRng(17);
    let s = 0, c = 0;
    for (let t = 0; t < 5000; t++) { if (s === 0) { if (r() < a) s = 1; } else if (r() < b) s = 0; c += s; }
    return c / 5000;
  }, [a, b]);
  const W = 520, H = 170;
  const R = (p: number) => 18 + 40 * Math.sqrt(p);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>P(working → broken) a: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={0.02} max={0.98} step={0.02} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>P(broken → working) b: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={0.02} max={0.98} step={0.02} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two states with probability flowing between them" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <circle cx={130} cy={85} r={R(pi0)} style={{ fill: "var(--accent)", fillOpacity: 0.25, stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={390} cy={85} r={R(pi1)} style={{ fill: "var(--accent)", fillOpacity: 0.25, stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={130} y={89} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>working</text>
        <text x={390} y={89} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>broken</text>
        <path d="M 190 62 Q 260 30 330 62" style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1 + 30 * pi0 * a }} />
        <path d="M 330 108 Q 260 140 190 108" style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1 + 30 * pi1 * b }} />
        <text x={260} y={30} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 12 }}>π₀a = {(pi0 * a).toFixed(3)}</text>
        <text x={260} y={160} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 12 }}>π₁b = {(pi1 * b).toFixed(3)}</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        stationary π = (b/(a + b), a/(a + b)) = ({pi0.toFixed(3)}, {pi1.toFixed(3)}); fraction of 5000 simulated days broken: {frac.toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        A machine is working or broken, and changes state each day with the chances shown. The circles are sized by the stationary probabilities. In the stationary distribution the probability flowing from working to broken each day, π₀a, equals the flow back, π₁b, so nothing changes. The simulated long-run fraction of broken days matches π₁.
      </figcaption>
    </figure>
  );
}
