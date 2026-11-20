"use client";

import { useState } from "react";

/** Calibrated credence: reliability 0.99 when thinking clearly, 0.5 (guessing) when impaired. */
export const calibrated = (q: number) => (1 - q) * 0.99 + q * 0.5;

/** A pilot's reasoning and the higher-order evidence that it may be impaired. */
export function HypoxiaViz() {
  const [q, setQ] = useState(0.5);
  const [view, setView] = useState(0);
  const c = view === 0 ? calibrated(q) : 0.99;
  const px = (v: number) => 40 + v * 460;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>chance of hypoxia = {q.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={q} onChange={(e) => setQ(Number(e.target.value))} aria-label="hypoxia" /></label>
      </div>
      <div className="segmented" role="group" aria-label="view">
        <button type="button" aria-pressed={view === 0} className={view === 0 ? "seg is-on" : "seg"} onClick={() => setView(0)}>calibrationism</button>
        <button type="button" aria-pressed={view === 1} className={view === 1 ? "seg is-on" : "seg"} onClick={() => setView(1)}>level-splitting</button>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Credence that the fuel suffices" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={px(0)} y1={110} x2={px(1)} y2={110} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <text key={v} x={px(v)} y={128} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={px(0.5)} y={146} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>credence that the fuel suffices</text>
        <rect x={px(0.5)} y={60} width={px(0.99) - px(0.5)} height={8} rx={3} style={{ fill: "var(--accent-soft)" }} />
        <circle cx={px(0.99)} cy={64} r={5} style={{ fill: "var(--text-muted)" }} />
        <text x={px(0.99)} y={50} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>what the instruments support: 0.99</text>
        <circle cx={px(c)} cy={92} r={7} style={{ fill: view === 0 ? "var(--accent)" : "var(--danger)" }} />
        <text x={px(c)} y={84 - 8} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{c.toFixed(3)}</text>
        <text x={px(0)} y={24} style={{ fill: "var(--text)", fontSize: 11 }}>
          Believes &lsquo;my reasoning is impaired&rsquo; with probability {q.toFixed(2)}.
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {view === 0
          ? `Calibrated credence = (1 − ${q.toFixed(2)}) × 0.99 + ${q.toFixed(2)} × 0.5 = ${c.toFixed(3)}.`
          : `Credence stays 0.99 while the pilot thinks, with probability ${q.toFixed(2)}, that it is not rational: the akratic combination.`}
      </p>
      <figcaption className="viz-caption">
        A pilot calculates that the fuel will last. Then they learn that at this altitude there is a real chance of hypoxia,
        which makes such calculations feel fine while being no better than a guess. The first-order evidence has not
        changed. Calibrationism says to trust the conclusion only as far as the reasoning is reliable; level-splitting
        keeps the first-order credence and doubts only one&rsquo;s own rationality.
      </figcaption>
    </figure>
  );
}
