"use client";

import { useState } from "react";

type Temp = "cold" | "hot";
const FEEL: Record<Temp, string> = { cold: "warm", hot: "cold" };

/** Locke's three basins: after one hand has been in cold water and the other in hot, the same lukewarm water feels warm to one and cold to the other. Its shape feels the same to both. */
export function BasinViz() {
  const [left, setLeft] = useState<Temp>("cold");
  const [right, setRight] = useState<Temp>("hot");
  const [moved, setMoved] = useState(false);
  const fill = (t: Temp | "luke") => (t === "cold" ? "var(--accent-soft)" : t === "hot" ? "var(--danger-soft)" : "var(--bg-subtle)");
  const label = (t: Temp | "luke") => (t === "cold" ? "cold water" : t === "hot" ? "hot water" : "lukewarm water");

  const Basin = ({ x, t, hands }: { x: number; t: Temp | "luke"; hands: string[] }) => (
    <g>
      <path d={`M${x - 70},70 L${x - 56},150 L${x + 56},150 L${x + 70},70 Z`} style={{ fill: fill(t), stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
      <text x={x} y={172} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>{label(t)}</text>
      {hands.map((h, i) => (
        <g key={h}>
          <rect x={x - 30 + i * 36} y={30} width={22} height={80} rx={10} style={{ fill: "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
          <text x={x - 19 + i * 36} y={24} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text)" }}>{h}</text>
        </g>
      ))}
    </g>
  );

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 8 }}>
        <div className="segmented" role="group" aria-label="Left hand first">
          {(["cold", "hot"] as Temp[]).map((t) => (
            <button key={t} type="button" className={left === t ? "seg is-on" : "seg"} aria-pressed={left === t} onClick={() => { setLeft(t); setMoved(false); }}>left hand in {t}</button>
          ))}
        </div>
        <div className="segmented" role="group" aria-label="Right hand first">
          {(["cold", "hot"] as Temp[]).map((t) => (
            <button key={t} type="button" className={right === t ? "seg is-on" : "seg"} aria-pressed={right === t} onClick={() => { setRight(t); setMoved(false); }}>right hand in {t}</button>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 520 185" role="img" aria-label="Basins of water with hands in them" style={{ width: "100%", display: "block", marginTop: 12 }}>
        {!moved ? (
          left === right ? (
            <Basin x={260} t={left} hands={["left", "right"]} />
          ) : (
            <>
              <Basin x={130} t={left} hands={["left"]} />
              <Basin x={390} t={right} hands={["right"]} />
            </>
          )
        ) : (
          <Basin x={260} t="luke" hands={["left", "right"]} />
        )}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setMoved(!moved)}>{moved ? "Start again" : "Move both hands into the lukewarm basin"}</button>
      </div>
      {moved && (
        <table className="table" style={{ marginTop: 8 }}>
          <thead><tr><th></th><th>left hand</th><th>right hand</th></tr></thead>
          <tbody>
            <tr><td>the water feels</td><td>{FEEL[left]}</td><td>{FEEL[right]}</td></tr>
            <tr><td>the basin feels</td><td>round and smooth</td><td>round and smooth</td></tr>
          </tbody>
        </table>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {!moved
          ? "Choose where each hand waits first, then move both into the same basin."
          : left !== right
            ? "The same water at the same moment feels warm to one hand and cold to the other. It cannot really be both, so warmth as felt is not in the water: it is an effect in us. The roundness of the basin feels the same to both hands."
            : "With both hands prepared alike, they agree. Try preparing them differently."}
      </figcaption>
    </figure>
  );
}
