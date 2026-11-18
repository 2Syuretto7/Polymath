"use client";

import { useState } from "react";

/** Lifting the map z ↦ zᵈ of the circle through the n-sheeted cover z ↦ zⁿ: possible exactly when n divides d. */
export function PowerLiftViz() {
  const [d, setD] = useState(2);
  const [n, setN] = useState(3);
  const end = ((d % n) + n) % n;
  const ok = end === 0;
  const R = 70, cx = 140, cy = 105;
  const sheet = (j: number) => [cx + R * Math.cos(-Math.PI / 2 + (2 * Math.PI * j) / n), cy + R * Math.sin(-Math.PI / 2 + (2 * Math.PI * j) / n)];
  const steps = Math.abs(d) * 40;
  const pts = Array.from({ length: steps + 1 }, (_, i) => {
    const t = (d / n) * (i / Math.max(steps, 1));
    return [cx + R * Math.cos(-Math.PI / 2 + 2 * Math.PI * t), cy + R * Math.sin(-Math.PI / 2 + 2 * Math.PI * t)];
  });
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>degree of f, d = {d} <input type="range" min={-4} max={4} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <div className="segmented" role="group" aria-label="cover">
        {[1, 2, 3, 4].map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => setN(m)}>{m}-sheeted cover</button>)}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="The lift of a loop in an n-sheeted cover of the circle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 2 }} />
        <text x={300} y={36} style={{ fill: "var(--text-muted)", fontSize: 11 }}>the cover: circle, map z ↦ z{["", "", "²", "³", "⁴"][n]}</text>
        {d !== 0 && <polyline points={pts.map((p) => p.join(",")).join(" ")} style={{ fill: "none", stroke: ok ? "var(--accent)" : "var(--danger)", strokeWidth: 4, opacity: 0.8 }} />}
        {Array.from({ length: n }, (_, j) => {
          const [x, y] = sheet(j);
          return (
            <g key={j}>
              <circle cx={x} cy={y} r={7} style={{ fill: j === 0 ? "var(--text)" : j === end ? (ok ? "var(--accent)" : "var(--danger)") : "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
              <text x={cx + (R + 20) * Math.cos(-Math.PI / 2 + (2 * Math.PI * j) / n)} y={cy + (R + 20) * Math.sin(-Math.PI / 2 + (2 * Math.PI * j) / n) + 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>sheet {j}</text>
            </g>
          );
        })}
        <text x={300} y={60} style={{ fill: "var(--text)", fontSize: 12 }}>f goes round the base circle {Math.abs(d)} time{Math.abs(d) === 1 ? "" : "s"}{d < 0 ? ", backwards" : ""}.</text>
        <text x={300} y={82} style={{ fill: "var(--text)", fontSize: 12 }}>Its lift from sheet 0 ends on sheet {end}.</text>
        <text x={300} y={110} style={{ fill: ok ? "var(--accent)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{ok ? "A closed loop: f lifts." : "Not closed: f does not lift."}</text>
        <text x={300} y={138} style={{ fill: "var(--text-muted)", fontSize: 11 }}>image of π₁ under f: {d === 0 ? "0" : `${Math.abs(d) === 1 ? "" : Math.abs(d)}ℤ`}; under p: {n === 1 ? "ℤ" : `${n}ℤ`}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Lifting criterion: f lifts exactly when the image of π₁ under f lies in its image under p, that is, when {n} divides {d}. {ok ? "It does." : "It does not."}
      </p>
      <figcaption className="viz-caption">
        Lift the path traced by f, starting at sheet 0. Going once round the base moves you one sheet along, so after d turns
        you are on sheet d mod n. The lifted path closes up, giving a lift of f, exactly when that is sheet 0.
      </figcaption>
    </figure>
  );
}
