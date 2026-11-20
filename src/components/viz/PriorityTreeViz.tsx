"use client";

import { useState } from "react";

const LEVELS = 4;

/** Priority pluralism versus priority monism on a part–whole tree, with an option for gunk. */
export function PriorityTreeViz() {
  const [view, setView] = useState(1);
  const [gunk, setGunk] = useState(false);
  const nodes: { x: number; y: number; lvl: number; i: number }[] = [];
  for (let l = 0; l < LEVELS; l++) {
    const n = 2 ** l;
    for (let i = 0; i < n; i++) nodes.push({ x: 20 + ((i + 0.5) * 420) / n, y: 24 + l * 44, lvl: l, i });
  }
  const fundLevel = view === 1 ? 0 : gunk ? null : LEVELS - 1;
  const up = view === 0; // pluralism: grounding runs from parts up to wholes
  const names = ["the cosmos", "halves", "quarters", "eighths"];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="view">
        {["priority pluralism", "priority monism"].map((v, i) => <button key={v} type="button" aria-pressed={view === i} className={view === i ? "seg is-on" : "seg"} onClick={() => setView(i)}>{v}</button>)}
      </div>
      <div className="viz-controls">
        <label><input type="checkbox" checked={gunk} onChange={(e) => setGunk(e.target.checked)} aria-label="gunk" /> gunk: every part has further proper parts</label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A part–whole tree with the direction of grounding" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="pt-head" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--accent)" }} /></marker>
        </defs>
        {nodes.filter((n) => n.lvl > 0).map((n) => {
          const p = nodes.find((m) => m.lvl === n.lvl - 1 && m.i === Math.floor(n.i / 2))!;
          const [a, b] = up ? [n, p] : [p, n];
          return <line key={`${n.lvl}-${n.i}`} x1={a.x} y1={a.y + (up ? -9 : 9)} x2={b.x} y2={b.y + (up ? 9 : -9)} markerEnd="url(#pt-head)" style={{ stroke: "var(--accent)", strokeWidth: 1.3 }} />;
        })}
        {nodes.map((n) => (
          <circle key={`c${n.lvl}-${n.i}`} cx={n.x} cy={n.y} r={8} style={{ fill: fundLevel === n.lvl ? "var(--accent)" : "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        ))}
        {gunk && nodes.filter((n) => n.lvl === LEVELS - 1).map((n) => <text key={`g${n.i}`} x={n.x} y={n.y + 26} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>⋮</text>)}
        {names.map((t, l) => <text key={t} x={512} y={24 + l * 44 + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {view === 1 ? "Fundamental: the cosmos alone. Each part is grounded in the whole it belongs to." : gunk ? "No fundamental level: every part is grounded in smaller parts, without end." : "Fundamental: the smallest parts. Each whole is grounded in its parts."}
      </p>
      <figcaption className="viz-caption">
        Arrows run from ground to grounded; filled circles are fundamental. The pluralist puts the many smallest parts at
        the bottom; Schaffer&rsquo;s monist puts the one cosmos there. Tick gunk: if matter divides without end, the
        pluralist loses a fundamental level, while the monist&rsquo;s base is untouched.
      </figcaption>
    </figure>
  );
}
