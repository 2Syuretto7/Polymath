"use client";

import { useState } from "react";

/** Bentham’s panopticon: cells round a tower whose occupant cannot be seen from the cells. */
export function PanopticonViz() {
  const [guard, setGuard] = useState(true);
  const [watched, setWatched] = useState(3);
  const [internal, setInternal] = useState(true);
  const N = 12;
  const look = Array.from({ length: N }, (_, i) => guard && i < watched);
  const conform = Array.from({ length: N }, (_, i) => internal || look[i]);
  const count = conform.filter(Boolean).length;
  const cx = 270;
  const cy = 120;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="tower">
        <button type="button" aria-pressed={guard} className={guard ? "seg is-on" : "seg"} onClick={() => setGuard(true)}>guard in the tower</button>
        <button type="button" aria-pressed={!guard} className={!guard ? "seg is-on" : "seg"} onClick={() => setGuard(false)}>tower empty</button>
      </div>
      <div className="segmented" role="group" aria-label="inmates" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={internal} className={internal ? "seg is-on" : "seg"} onClick={() => setInternal(true)}>the tower is opaque</button>
        <button type="button" aria-pressed={!internal} className={!internal ? "seg is-on" : "seg"} onClick={() => setInternal(false)}>inmates can see in</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>cells the guard is watching = {guard ? watched : 0} <input type="range" min={1} max={12} step={1} value={watched} onChange={(e) => setWatched(Number(e.target.value))} aria-label="watched" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="Cells arranged in a ring around a central tower" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: N }, (_, i) => {
          const a = (2 * Math.PI * i) / N - Math.PI / 2;
          const x = cx + 95 * Math.cos(a);
          const y = cy + 95 * Math.sin(a);
          return (
            <g key={i}>
              {look[i] && <line x1={cx} y1={cy} x2={x} y2={y} style={{ stroke: "var(--accent)", strokeDasharray: "3 3" }} />}
              <rect x={x - 14} y={y - 14} width={28} height={28} rx={4} style={{ fill: conform[i] ? "var(--success-soft)" : "var(--danger-soft)", stroke: conform[i] ? "var(--success)" : "var(--danger)", strokeWidth: 2 }} />
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={24} style={{ fill: internal ? "var(--text)" : "var(--surface)", stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {!internal && guard && <circle cx={cx} cy={cy} r={6} style={{ fill: "var(--accent)" }} />}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {count} of {N} inmates keep the rules.{" "}
        {internal ? "No one can tell whether they are watched, so each behaves as if always watched: the surveillance has become self-surveillance." : "Inmates who can see the tower behave only when they are watched."}
      </p>
      <figcaption className="viz-caption">
        Green cells keep the rules; red cells do not. In Jeremy Bentham&rsquo;s design, the inmates can always be seen but
        can never see whether they are being seen. Foucault takes it as the diagram of disciplinary power: power that works
        best when it is invisible and the watched take over the work of watching themselves.
      </figcaption>
    </figure>
  );
}
