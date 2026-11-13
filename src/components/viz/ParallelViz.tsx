"use client";

import { useState } from "react";

const ROWS = [
  { body: "a thorn pierces the skin of the hand", mind: "the idea of the pierced hand: a sharp pain" },
  { body: "nerves carry motions to the brain", mind: "the idea of those motions: attention fixes on the hand" },
  { body: "the brain sets the arm muscles moving", mind: "the idea of that change: a desire to pull the thorn out" },
  { body: "the fingers grip and draw out the thorn", mind: "the idea of the freed hand: relief, a kind of joy" },
];

const W = 560, H = 300, LX = 140, RX = 420, Y0 = 50, DY = 64;

/** Descartes: mind and body act on each other. Spinoza: one substance, so each bodily event and its idea are one thing under two attributes, and causes run only within each attribute. */
export function ParallelViz() {
  const [view, setView] = useState<"descartes" | "spinoza">("spinoza");
  const [k, setK] = useState(0);
  const sp = view === "spinoza";

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="View">
        <button type="button" className={!sp ? "seg is-on" : "seg"} aria-pressed={!sp} onClick={() => setView("descartes")}>Descartes: two substances</button>
        <button type="button" className={sp ? "seg is-on" : "seg"} aria-pressed={sp} onClick={() => setView("spinoza")}>Spinoza: one substance</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Bodily events and ideas in two columns, with arrows of causation" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <defs>
          <marker id="pv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} />
          </marker>
          <marker id="pv-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--danger)" }} />
          </marker>
        </defs>
        <text x={LX} y={20} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text-muted)" }}>{sp ? "under the attribute of extension" : "body: extended substance"}</text>
        <text x={RX} y={20} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text-muted)" }}>{sp ? "under the attribute of thought" : "mind: thinking substance"}</text>
        {ROWS.map((_, i) => {
          const y = Y0 + i * DY;
          const on = i === k;
          return (
            <g key={i} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
              <rect x={LX - 120} y={y} width={240} height={36} rx={6} style={{ fill: on ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: on ? "var(--accent)" : "var(--border)" }} />
              <rect x={RX - 120} y={y} width={240} height={36} rx={6} style={{ fill: on ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: on ? "var(--accent)" : "var(--border)" }} />
              <text x={LX} y={y + 22} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--text)" }}>{`event ${i + 1}`}</text>
              <text x={RX} y={y + 22} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--text)" }}>{`idea ${i + 1}`}</text>
              {sp && <line x1={LX + 120} y1={y + 18} x2={RX - 120} y2={y + 18} style={{ stroke: "var(--text-faint)", strokeDasharray: "2 4", strokeWidth: 2 }} />}
              {i < ROWS.length - 1 && (
                <>
                  <line x1={LX} y1={y + 37} x2={LX} y2={y + DY - 2} markerEnd="url(#pv-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
                  {sp && <line x1={RX} y1={y + 37} x2={RX} y2={y + DY - 2} markerEnd="url(#pv-arrow)" style={{ stroke: "var(--accent)", strokeWidth: 2 }} />}
                </>
              )}
            </g>
          );
        })}
        {!sp && (
          <>
            <line x1={LX + 120} y1={Y0 + DY + 18} x2={RX - 122} y2={Y0 + DY + 18} markerEnd="url(#pv-arrow2)" style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
            <line x1={RX - 120} y1={Y0 + 2 * DY + 18} x2={LX + 122} y2={Y0 + 2 * DY + 18} markerEnd="url(#pv-arrow2)" style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
          </>
        )}
      </svg>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td className="mono">event {k + 1}</td><td>{ROWS[k].body}</td></tr>
          <tr><td className="mono">idea {k + 1}</td><td>{ROWS[k].mind}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {sp
          ? "Click a row. For Spinoza the event and the idea are one and the same mode, expressed under two attributes, so nothing needs to cross between the columns. Bodies are explained only by bodies and ideas only by ideas, and the two orders match."
          : "For Descartes the red arrows cross between substances: motions in the brain cause an idea in the mind, and a desire in the mind causes the arm to move. This crossing is what Elisabeth could not understand."}
      </figcaption>
    </figure>
  );
}
