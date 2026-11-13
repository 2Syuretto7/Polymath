"use client";

import { useState } from "react";

const W = 520, X0 = 40, X1 = 480, LO = -0.15, HI = 1.15;
const X = (v: number) => X0 + ((Math.max(LO, Math.min(HI, v)) - LO) / (HI - LO)) * (X1 - X0);

/** The cover of a set by the open intervals (1/n, 2). For (0, 1] no finite part of it covers; for [0, 1] one extra interval around 0 is needed, and then finitely many suffice. */
export function OpenCoverViz() {
  const [closed, setClosed] = useState(false);
  const [n, setN] = useState(5);
  const rows = Math.min(n, 8);
  const H = 70 + (rows + (closed ? 1 : 0)) * 14;
  const gap = 1 / n; // (0, 1/n] uncovered by the first n intervals
  const covered = closed ? 1 / n < 0.05 : false;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set">
        <button type="button" className={!closed ? "seg is-on" : "seg"} aria-pressed={!closed} onClick={() => setClosed(false)}>the set (0, 1]</button>
        <button type="button" className={closed ? "seg is-on" : "seg"} aria-pressed={closed} onClick={() => setClosed(true)}>the set [0, 1]</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Open intervals covering part of the set" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X(0)} y1={30} x2={X(1)} y2={30} style={{ stroke: "var(--text)", strokeWidth: 4 }} />
        <circle cx={X(0)} cy={30} r={5} style={{ fill: closed ? "var(--text)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={X(1)} cy={30} r={5} style={{ fill: "var(--text)" }} />
        {!covered && <line x1={X(0)} y1={30} x2={X(gap)} y2={30} style={{ stroke: "var(--danger)", strokeWidth: 4 }} />}
        <text x={X(0)} y={18} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>0</text>
        <text x={X(1)} y={18} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>1</text>
        {Array.from({ length: rows }, (_, i) => {
          const k = i < rows - 1 || n <= 8 ? i + 1 : n;
          return (
            <g key={i}>
              <line x1={X(1 / k)} y1={52 + i * 14} x2={X1} y2={52 + i * 14} style={{ stroke: "var(--accent)", strokeWidth: 3, opacity: 0.8 }} />
              <circle cx={X(1 / k)} cy={52 + i * 14} r={3} style={{ fill: "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
              <text x={X0 - 6} y={56 + i * 14} textAnchor="end" style={{ fontSize: 10, fill: "var(--text-muted)" }}>{n > 8 && i === rows - 2 ? "⋮" : `n=${k}`}</text>
            </g>
          );
        })}
        {closed && (
          <line x1={X(-0.1)} y1={52 + rows * 14} x2={X(0.05)} y2={52 + rows * 14} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
        )}
      </svg>
      <div className="viz-sliders">
        <label><span>use the intervals (1/n, 2) for n = 1 to <span className="mono">{n}</span></span>
          <input type="range" min={1} max={40} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {!closed
          ? `Every point of (0, 1] lies in some (1/n, 2), so these intervals cover it. But the first ${n} leave (0, 1/${n}] uncovered, shown in red, and no finite number will ever do. So (0, 1] is not compact.`
          : covered
            ? `To cover 0 we must add an open interval around it, here (−0.1, 0.05). With it, the first ${n} intervals already cover [0, 1]: a finite subcover. Heine-Borel says this always happens for a closed bounded set.`
            : `To cover 0 we must add an open interval around it, here (−0.1, 0.05). Once 1/n drops below 0.05 the gap closes, so finitely many intervals cover [0, 1]. Keep going.`}
      </figcaption>
    </figure>
  );
}
