"use client";

import { useState } from "react";

/** Testimony: a message passed along a chain degrades, while independent witnesses who agree reinforce one another. */
export function TestimonyViz() {
  const [r, setR] = useState(0.9);
  const [links, setLinks] = useState(5);
  const [wit, setWit] = useState(3);
  const [prior, setPrior] = useState(0.1);
  const chain = (1 + Math.pow(2 * r - 1, links)) / 2;
  const post = (prior * r ** wit) / (prior * r ** wit + (1 - prior) * (1 - r) ** wit);
  const bar = (v: number) => (
    <div style={{ height: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
      <div style={{ width: `${v * 100}%`, height: "100%", background: "var(--accent)" }} />
    </div>
  );
  const W = 520, H = 60;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>reliability of each person r: <span className="mono">{r.toFixed(2)}</span></span>
          <input type="range" min={0.5} max={0.99} step={0.01} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>people in the chain: <span className="mono">{links}</span></span>
          <input type="range" min={1} max={30} step={1} value={links} onChange={(e) => setLinks(Number(e.target.value))} /></label>
        <label><span>independent witnesses: <span className="mono">{wit}</span></span>
          <input type="range" min={1} max={8} step={1} value={wit} onChange={(e) => setWit(Number(e.target.value))} /></label>
        <label><span>prior probability of the claim: <span className="mono">{prior.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.9} step={0.01} value={prior} onChange={(e) => setPrior(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A chain of people passing on a report" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: links + 1 }, (_, i) => {
          const x = 20 + (i / Math.max(links, 1)) * (W - 40);
          return (
            <g key={i}>
              {i > 0 && <line x1={20 + ((i - 1) / Math.max(links, 1)) * (W - 40)} y1={30} x2={x} y2={30} style={{ stroke: "var(--border-strong)" }} />}
              <circle cx={x} cy={30} r={i === 0 ? 7 : 5} style={{ fill: i === 0 ? "var(--text)" : "var(--accent)", fillOpacity: i === 0 ? 1 : Math.max(0.15, Math.pow(2 * r - 1, i)) }} />
            </g>
          );
        })}
        <text x={20} y={54} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>witness</text>
        <text x={W - 20} y={54} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>you</text>
      </svg>
      <div style={{ display: "grid", gap: 8, marginTop: 8 }}>
        <div className="mono" style={{ fontSize: 13 }}>chain: probability the report reaching you is still correct = {chain.toFixed(3)}</div>
        {bar(chain)}
        <div className="mono" style={{ fontSize: 13 }}>{wit} independent witnesses all report the claim: probability it is true = {post.toFixed(3)}</div>
        {bar(post)}
      </div>
      <figcaption className="viz-caption">
        Along a chain, each person passes the report on correctly with probability r, so errors accumulate and the report drifts towards a coin toss. Independent witnesses work the other way: when several who could each be wrong agree, the agreement is hard to explain unless the claim is true. Independence is the crucial assumption.
      </figcaption>
    </figure>
  );
}
