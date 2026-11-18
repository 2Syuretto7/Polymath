"use client";

import { useState } from "react";

const EVENTS = ["Boethius is born", "becomes consul", "loses the king's favour", "is imprisoned", "writes the Consolation", "is executed"];
const W = 600, H = 170, X0 = 64, X1 = 536, Y = 110;

/** Boethius: a temporal knower sees only the present moment and the past; an eternal knower sees the whole of time at once, as from a peak. */
export function EternityViz() {
  const [now, setNow] = useState(2);
  const [view, setView] = useState<"time" | "eternity">("time");
  const x = (i: number) => X0 + (i * (X1 - X0)) / (EVENTS.length - 1);
  const seen = (i: number) => view === "eternity" || i <= now;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Point of view">
        <button type="button" className={view === "time" ? "seg is-on" : "seg"} aria-pressed={view === "time"} onClick={() => setView("time")}>a knower in time</button>
        <button type="button" className={view === "eternity" ? "seg is-on" : "seg"} aria-pressed={view === "eternity"} onClick={() => setView("eternity")}>the eternal view</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A timeline of Boethius's life" style={{ width: "100%", marginTop: 12 }}>
        {view === "eternity" && (
          <>
            <circle cx={W / 2} cy={22} r={7} style={{ fill: "var(--accent)" }} />
            {EVENTS.map((_, i) => <line key={i} x1={W / 2} y1={28} x2={x(i)} y2={Y - 10} style={{ stroke: "var(--accent)", strokeWidth: 1, opacity: 0.5 }} />)}
          </>
        )}
        <line x1={X0} y1={Y} x2={X1} y2={Y} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {view === "time" && <rect x={x(now) + 12} y={Y - 14} width={X1 - x(now) - 6} height={28} style={{ fill: "var(--bg-subtle)", opacity: 0.9 }} />}
        {EVENTS.map((e, i) => (
          <g key={e}>
            <circle cx={x(i)} cy={Y} r={i === now && view === "time" ? 8 : 6}
              style={{ fill: seen(i) ? (i === now && view === "time" ? "var(--accent)" : "var(--text)") : "var(--border)" }} />
            <text x={x(i)} y={i % 2 ? Y + 26 : Y + 42} textAnchor="middle" style={{ fontSize: 11.5, fill: seen(i) ? "var(--text)" : "var(--text-faint)" }}>{seen(i) ? e : "?"}</text>
          </g>
        ))}
      </svg>
      {view === "time" && (
        <div className="viz-sliders">
          <label><span>the present moment: <span className="mono">{EVENTS[now]}</span></span>
            <input type="range" min={0} max={EVENTS.length - 1} value={now} onChange={(e) => setNow(Number(e.target.value))} /></label>
        </div>
      )}
      <figcaption className="viz-caption">
        {view === "time"
          ? "A knower in time has the past in memory and the present before them, but the future is hidden. To know it in advance would be foreknowledge, and foreknowledge seems to fix it."
          : "God, Boethius argues, is eternal: possessing the whole of unending life all at once. God does not foresee your future acts; God sees them, as present, the way you see someone walking without making them walk."}
      </figcaption>
    </figure>
  );
}
