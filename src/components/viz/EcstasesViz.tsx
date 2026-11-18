"use client";

import { useState } from "react";

const MODES = {
  inauthentic: {
    future: { term: "awaiting", ex: "I wait for the next thing to happen to me: the result, the offer, the weekend." },
    past: { term: "forgetting", ex: "Where I come from is just background I have drifted away from." },
    present: { term: "making present", ex: "I am taken up by whatever is in front of me, the news, the next message." },
  },
  authentic: {
    future: { term: "anticipation", ex: "I run ahead to my own finitude, and see my life as a whole that is mine to shape." },
    past: { term: "repetition", ex: "I take up what I have been, my inheritance, as possibilities to retrieve and make my own." },
    present: { term: "the moment of vision", ex: "I see the situation clearly and act in it, resolutely." },
  },
} as const;
type Mode = keyof typeof MODES;
const KEYS = ["future", "past", "present"] as const;
const POS = { future: [260, 40], past: [110, 150], present: [410, 150] } as const;
const NAMES = { future: "future (coming towards)", past: "having-been", present: "present" };
const CARE = { future: "ahead of itself: existence", past: "already in a world: thrownness", present: "alongside things: falling" };

/** The three ecstases of temporality, in their inauthentic and authentic modes. */
export function EcstasesViz() {
  const [mode, setMode] = useState<Mode>("inauthentic");
  const [sel, setSel] = useState<(typeof KEYS)[number]>("future");
  const M = MODES[mode];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="mode">
        {(Object.keys(MODES) as Mode[]).map((m) => <button key={m} type="button" aria-pressed={mode === m} className={mode === m ? "seg is-on" : "seg"} onClick={() => setMode(m)}>{m}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Future, having-been and present as a unity" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="ecst-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} />
          </marker>
        </defs>
        <line x1={225} y1={60} x2={145} y2={125} markerEnd="url(#ecst-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={175} y1={155} x2={340} y2={155} markerEnd="url(#ecst-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={295} y1={60} x2={375} y2={125} markerEnd="url(#ecst-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "4 4" }} />
        {KEYS.map((k) => {
          const [x, y] = POS[k];
          const on = sel === k;
          return (
            <g key={k} role="button" tabIndex={0} aria-label={NAMES[k]} onClick={() => setSel(k)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSel(k); }} style={{ cursor: "pointer" }}>
              <rect x={x - 80} y={y - 26} width={160} height={52} rx={26} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: on ? 2.5 : 1 }} />
              <text x={x} y={y - 5} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{NAMES[k]}</text>
              <text x={x} y={y + 13} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{M[k].term}</text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {KEYS.map((k) => <button key={k} type="button" className={sel === k ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setSel(k)}>{NAMES[k]}</button>)}
      </div>
      <div style={{ marginTop: 8, display: "grid", gap: 4 }}>
        <div className="mono" style={{ fontSize: 13, color: "var(--text-muted)" }}>in the structure of care: {CARE[sel]}</div>
        <div style={{ fontWeight: 600 }}>{M[sel].ex}</div>
      </div>
      <figcaption className="viz-caption">
        For Heidegger the three dimensions of time are not a series of nows but one unity, each standing out
        (ek-stasis) towards the others. The future has priority: Dasein comes towards itself, and in doing so comes back
        to what it has been, and so makes present the situation it acts in. Each ecstasis has an everyday and an owned mode.
      </figcaption>
    </figure>
  );
}
