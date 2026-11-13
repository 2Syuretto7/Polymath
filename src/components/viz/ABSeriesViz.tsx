"use client";

import { useState } from "react";

const EV = [
  { y: 1947, name: "Indian independence" },
  { y: 1969, name: "the first moon landing" },
  { y: 1983, name: "India’s first cricket World Cup win" },
  { y: 2024, name: "a general election" },
  { y: 2061, name: "Halley’s comet returns" },
];

/** McTaggart’s A series (past, present, future) changes as time passes; the B series (earlier than, later than) never does. */
export function ABSeriesViz() {
  const [now, setNow] = useState(1990);
  const [pick, setPick] = useState(1);
  const a = (y: number) => (y < now ? "past" : y === now ? "present" : "future");
  const W = 560, H = 110, X = (y: number) => 30 + ((y - 1940) / 130) * (W - 60);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>now: <span className="mono">{now}</span></span>
          <input type="range" min={1940} max={2070} step={1} value={now} onChange={(e) => setNow(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Events on a timeline with the present moment" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={20} y1={60} x2={W - 20} y2={60} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        <rect x={20} y={52} width={X(now) - 20} height={16} style={{ fill: "var(--text-faint)", fillOpacity: 0.25 }} />
        <line x1={X(now)} y1={20} x2={X(now)} y2={96} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X(now)} y={14} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 600 }}>now</text>
        {EV.map((e, i) => (
          <g key={e.y} onClick={() => setPick(i)} style={{ cursor: "pointer" }}>
            <circle cx={X(e.y)} cy={60} r={i === pick ? 8 : 6} style={{ fill: i === pick ? "var(--accent)" : "var(--text-muted)" }} />
            <text x={X(e.y)} y={88} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{e.y}</text>
          </g>
        ))}
      </svg>
      <div className="viz-controls">
        {EV.map((e, i) => <button key={e.y} type="button" aria-pressed={pick === i} className={pick === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setPick(i)}>{e.name}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginTop: 10 }}>
        <div style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "8px 10px" }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>A series: changes as now moves</div>
          <div className="mono" style={{ fontSize: 13 }}>{EV[pick].name} is {a(EV[pick].y)}</div>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "8px 10px" }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>B series: fixed for ever</div>
          {EV.filter((_, i) => i !== pick).slice(0, 3).map((e) => <div key={e.y} className="mono" style={{ fontSize: 13 }}>{EV[pick].name} is {EV[pick].y < e.y ? "earlier" : "later"} than {e.name}</div>)}
        </div>
      </div>
      <figcaption className="viz-caption">
        Move &ldquo;now&rdquo; and the A-properties of the chosen event change, while its B-relations stay put. McTaggart argued that time needs change, so needs the A series; but every event is past, present and future, which are incompatible. Saying &ldquo;at different times&rdquo; uses the A series again, he claimed, starting a regress. So, he concluded, time is unreal.
      </figcaption>
    </figure>
  );
}
