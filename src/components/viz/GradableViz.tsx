"use client";

import { useState } from "react";

const CLASSES = [
  { label: "ten-year-olds", mean: 138, sd: 6 },
  { label: "adults in India", mean: 160, sd: 8 },
  { label: "basketball players", mean: 200, sd: 8 },
  { label: "jockeys", mean: 157, sd: 5 },
];

/** “Tall” shifts its standard with the comparison class: the same height is tall in one context and not in another. */
export function GradableViz() {
  const [h, setH] = useState(172);
  const [ci, setCi] = useState(1);
  const W = 520, H = 90, lo = 120, hi = 220, X = (v: number) => 20 + ((v - lo) / (hi - lo)) * (W - 40);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>Kiran&rsquo;s height: <span className="mono">{h} cm</span></span>
          <input type="range" min={125} max={215} step={1} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="Context" style={{ marginTop: 6 }}>
        {CLASSES.map((c, i) => <button key={c.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{c.label}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Heights, with the threshold for tall in each comparison class" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(lo)} y1={50} x2={X(hi)} y2={50} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        {[120, 140, 160, 180, 200, 220].map((t) => <text key={t} x={X(t)} y={80} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
        {CLASSES.map((c, i) => {
          const th = c.mean + c.sd;
          return (
            <g key={c.label}>
              <line x1={X(th)} y1={36} x2={X(th)} y2={64} style={{ stroke: i === ci ? "var(--accent)" : "var(--text-faint)", strokeWidth: i === ci ? 3 : 1.5 }} />
              {i === ci && <rect x={X(th)} y={44} width={X(hi) - X(th)} height={12} style={{ fill: "var(--accent-soft)" }} />}
            </g>
          );
        })}
        <circle cx={X(h)} cy={50} r={7} style={{ fill: "var(--text)" }} />
        <text x={X(h)} y={28} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>Kiran</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        {CLASSES.map((c, i) => (
          <div key={c.label} style={i === ci ? { fontWeight: 700 } : undefined}>
            for {c.label}, &ldquo;Kiran is tall&rdquo; is {h >= c.mean + c.sd ? "true" : "false"}
          </div>
        ))}
      </div>
      <figcaption className="viz-caption">
        The threshold here is set, for illustration, a little above the average of the comparison class. Kiran&rsquo;s height
        never changes, but whether &ldquo;Kiran is tall&rdquo; is true depends on which class the context makes relevant. The
        word has a stable meaning that leaves a standard to be fixed by context.
      </figcaption>
    </figure>
  );
}
