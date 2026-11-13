"use client";

import { useState } from "react";

/** Peer disagreement: how far to move towards a peer's credence, from steadfast to equal weight. */
export function PeerDisagreementViz() {
  const [mine, setMine] = useState(0.8);
  const [theirs, setTheirs] = useState(0.3);
  const [w, setW] = useState(0.5);
  const after = (1 - w) * mine + w * theirs;
  const W = 520, H = 90, pad = 20;
  const X = (v: number) => pad + v * (W - 2 * pad);
  const label = w === 0 ? "steadfast: ignore the disagreement" : Math.abs(w - 0.5) < 1e-9 ? "equal weight: split the difference" : w < 0.5 ? "partly conciliatory" : "deferring more to the peer than to yourself";
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>your credence: <span className="mono">{mine.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={mine} onChange={(e) => setMine(Number(e.target.value))} /></label>
        <label><span>your peer&rsquo;s credence: <span className="mono">{theirs.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={theirs} onChange={(e) => setTheirs(Number(e.target.value))} /></label>
        <label><span>weight given to the peer: <span className="mono">{w.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={w} onChange={(e) => setW(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Your credence, your peer's, and your revised credence on a line from 0 to 1" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={X(0)} y1={45} x2={X(1)} y2={45} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {[0, 0.5, 1].map((t) => <text key={t} x={X(t)} y={80} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        <circle cx={X(mine)} cy={45} r={7} style={{ fill: "var(--accent)" }} />
        <text x={X(mine)} y={25} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>you</text>
        <circle cx={X(theirs)} cy={45} r={7} style={{ fill: "var(--text-muted)" }} />
        <text x={X(theirs)} y={25} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>peer</text>
        <rect x={X(after) - 6} y={39} width={12} height={12} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={X(after)} y={68} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>after</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>revised credence = {after.toFixed(3)} ({label})</p>
      <figcaption className="viz-caption">
        You and an equally informed, equally able peer reach different credences on the same evidence. The conciliationist says the disagreement is itself evidence that one of you erred, and you have no special reason to think it was the peer, so move towards them. The steadfast view says that if you in fact reasoned well, you may stay put.
      </figcaption>
    </figure>
  );
}
