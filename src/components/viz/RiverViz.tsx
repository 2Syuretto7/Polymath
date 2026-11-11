"use client";

import { useState } from "react";
import { fmtNum } from "./format";

/** The same river, different waters: how much of today's water remains after a time. */
export function RiverViz() {
  const [t, setT] = useState(0);
  const W = 520, n = 120;
  const old = Math.max(0, n - Math.round(t * 12));
  const keep = old / n;
  const xs = Array.from({ length: n }, (_, i) => i);

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} 140`} style={{ width: "100%", display: "block" }} role="img"
        aria-label={`After ${t} minutes, ${Math.round(keep * 100)}% of the original water is still in this stretch of river`}>
        <path d={`M0 40 C130 20, 260 60, ${W} 35 L${W} 105 C390 125, 130 85, 0 110 Z`} style={{ fill: "var(--accent-soft)" }} />
        {xs.map((i) => {
          const x = ((i * 37) % 100) / 100 * (W - 20) + 10;
          const y = 50 + ((i * 53) % 100) / 100 * 50;
          const isOld = i >= n - old;
          return <circle key={i} cx={x} cy={y} r={3} style={{ fill: isOld ? "var(--accent)" : "var(--text-muted)", opacity: isOld ? 1 : 0.45 }} />;
        })}
      </svg>
      <div className="viz-sliders">
        <label><span>minutes later: <span className="mono">{t}</span></span>
          <input type="range" min={0} max={10} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>water here now that was here at the start (purple)</td><td className="mono">{fmtNum(Math.round(keep * 100))}%</td></tr>
          <tr><td>is it the same river?</td><td>{keep === 1 ? "obviously" : keep > 0 ? "we still say so" : "we still say so, though not one drop is the same"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The river&rsquo;s shape and course persist while its matter is entirely replaced. What, then, is the river: the water, or the pattern the water keeps?
      </figcaption>
    </figure>
  );
}
