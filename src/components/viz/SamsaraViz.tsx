"use client";

import { useState } from "react";

const MODES = [
  { name: "act from desire", loop: true, text: "Action done from desire leaves a trace (saṃskāra) and a result to be reaped. The traces shape new desires, which drive new actions, and the account carries into a new life. The wheel keeps turning." },
  { name: "act without attachment", loop: true, weak: true, text: "The Gītā’s niṣkāma karma: do your duty without craving its fruits. Action continues, but it no longer adds fresh bonds, and the old traces are slowly exhausted." },
  { name: "know the self", loop: false, text: "For the Upaniṣads, knowledge that the self is brahman cuts the root: ignorance. Without it, no new karma binds, and at death there is no further birth. This is mokṣa." },
];
const NODES = ["ignorance", "desire", "action", "trace", "rebirth"];

/** Saṃsāra as a cycle: ignorance, desire, action, trace and rebirth, and the ways it is said to be broken. */
export function SamsaraViz() {
  const [m, setM] = useState(0);
  const M = MODES[m];
  const cx = 130, cy = 115, r = 80;
  const pos = NODES.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / NODES.length; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="way of living">
        {MODES.map((x, i) => <button key={x.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="The cycle of rebirth" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {pos.map((p, i) => {
          const q = pos[(i + 1) % pos.length];
          const broken = !M.loop && i === 0;
          return <line key={i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} style={{ stroke: broken ? "var(--text-faint)" : M.weak ? "var(--text-muted)" : "var(--danger)", strokeWidth: M.weak ? 1.5 : 2.5, strokeDasharray: broken ? "4 6" : M.weak ? "6 4" : undefined }} />;
        })}
        {pos.map((p, i) => (
          <g key={NODES[i]}>
            <rect x={p[0] - 40} y={p[1] - 13} width={80} height={26} rx={13} style={{ fill: !M.loop && i === 0 ? "var(--accent)" : "var(--bg)", stroke: "var(--border)" }} />
            <text x={p[0]} y={p[1] + 4} textAnchor="middle" style={{ fill: !M.loop && i === 0 ? "var(--bg)" : "var(--text)", fontSize: 12 }}>{!M.loop && i === 0 ? "knowledge" : NODES[i]}</text>
          </g>
        ))}
        <text x={290} y={60} style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{M.loop ? (M.weak ? "the wheel slows" : "the wheel turns") : "the wheel stops"}</text>
        <text x={290} y={84} style={{ fill: "var(--text-muted)", fontSize: 12 }}>saṃsāra: wandering through births</text>
        <text x={290} y={104} style={{ fill: "var(--text-muted)", fontSize: 12 }}>mokṣa: release from it</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{M.text}</p>
      <figcaption className="viz-caption">
        Most Indian schools share this picture, though they explain it differently. They disagree about what karma is,
        whether a self transmigrates at all, and whether release comes through knowledge, action, devotion or discipline.
      </figcaption>
    </figure>
  );
}
