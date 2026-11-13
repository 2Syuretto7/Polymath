"use client";

import { useState } from "react";

const P_LOW = 0.3;
const P_FALL = { low: 0.9, high: 0.1 };
const P_STORM = { low: 0.8, high: 0.1 };

type Mode = "none" | "seeFall" | "forceFall" | "seeLow" | "forceLow";
const MODES: { key: Mode; label: string }[] = [
  { key: "none", label: "no information" },
  { key: "seeFall", label: "see the barometer fall" },
  { key: "forceFall", label: "push the needle down" },
  { key: "seeLow", label: "measure low pressure" },
  { key: "forceLow", label: "lower the pressure" },
];

/** Woodward’s test: X explains Y when intervening on X would change Y. Observing a symptom and forcing it differ. */
export function InterventionViz() {
  const [mode, setMode] = useState<Mode>("seeFall");
  let pLow = P_LOW;
  if (mode === "seeFall") pLow = (P_LOW * P_FALL.low) / (P_LOW * P_FALL.low + (1 - P_LOW) * P_FALL.high);
  if (mode === "seeLow" || mode === "forceLow") pLow = 1;
  const pStorm = pLow * P_STORM.low + (1 - pLow) * P_STORM.high;
  const base = P_LOW * P_STORM.low + (1 - P_LOW) * P_STORM.high;
  const cut = mode === "forceFall";
  const cutP = mode === "forceLow";
  const node = (x: number, y: number, label: string, on: boolean, forced: boolean) => (
    <g>
      <rect x={x - 70} y={y - 20} width={140} height={40} rx={8} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: forced ? "var(--accent)" : "var(--border)", strokeWidth: forced ? 3 : 1.5 }} />
      <text x={x} y={y + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{label}</text>
    </g>
  );
  const arrow = (x1: number, y1: number, x2: number, y2: number, broken: boolean) => {
    const a = Math.atan2(y2 - y1, x2 - x1);
    const h = (d: number) => `${(x2 - 10 * Math.cos(a + d)).toFixed(1)},${(y2 - 10 * Math.sin(a + d)).toFixed(1)}`;
    return (
      <g style={{ opacity: broken ? 0.35 : 1 }}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: broken ? "5 4" : undefined }} />
        <polygon points={`${x2},${y2} ${h(0.4)} ${h(-0.4)}`} style={{ fill: "var(--text-muted)" }} />
      </g>
    );
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="What you know or do">
        {MODES.map((m) => <button key={m.key} type="button" aria-pressed={mode === m.key} className={mode === m.key ? "seg is-on" : "seg"} onClick={() => setMode(m.key)}>{m.label}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Air pressure causes both the barometer reading and the storm" style={{ width: "100%", display: "block", marginTop: 10 }}>
        {arrow(220, 52, 130, 128, cut)}
        {arrow(300, 52, 390, 128, false)}
        {node(260, 32, "low air pressure", mode === "seeLow" || mode === "forceLow" || mode === "seeFall", cutP)}
        {node(110, 150, "barometer falls", mode === "seeFall" || mode === "forceFall", cut)}
        {node(410, 150, "storm", false, false)}
        {cut && <text x={100} y={92} style={{ fill: "var(--text-muted)", fontSize: 11 }}>link cut</text>}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>P(low pressure) = {pLow.toFixed(3)}</div>
        <div>P(storm) = {pStorm.toFixed(3)}, against {base.toFixed(3)} with no information</div>
        <div style={{ fontWeight: 700 }}>
          {mode === "seeFall" && "seeing the fall is evidence of a storm"}
          {mode === "forceFall" && "forcing the needle changes nothing about the storm"}
          {mode === "seeLow" && "low pressure is evidence of a storm"}
          {mode === "forceLow" && "changing the pressure changes the chance of a storm"}
          {mode === "none" && "the base rate"}
        </div>
      </div>
      <figcaption className="viz-caption">
        Low pressure causes both the barometer to fall and the storm. Observing the barometer raises the probability of a
        storm, because it tells you about the pressure. But an intervention that pushes the needle down cuts it off from its
        cause, and the storm&rsquo;s chance stays at the base rate. Intervening on the pressure itself does change it, which is
        why the pressure explains the storm and the barometer does not.
      </figcaption>
    </figure>
  );
}
