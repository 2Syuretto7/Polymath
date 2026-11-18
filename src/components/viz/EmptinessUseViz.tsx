"use client";

import { useState } from "react";

/** Daodejing 11: the use of a wheel, a pot and a room lies in what is empty. */
export function EmptinessUseViz() {
  const [filled, setFilled] = useState(false);
  const fill = filled ? "var(--text-muted)" : "var(--bg)";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="emptiness">
        <button type="button" aria-pressed={!filled} className={!filled ? "seg is-on" : "seg"} onClick={() => setFilled(false)}>keep the empty spaces</button>
        <button type="button" aria-pressed={filled} className={filled ? "seg is-on" : "seg"} onClick={() => setFilled(true)}>fill them in</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A wheel, a pot and a room" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <g>
          <circle cx={90} cy={90} r={62} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 5 }} />
          {Array.from({ length: 30 }, (_, i) => { const t = (i / 30) * 2 * Math.PI; return <line key={i} x1={90 + 12 * Math.cos(t)} y1={90 + 12 * Math.sin(t)} x2={90 + 60 * Math.cos(t)} y2={90 + 60 * Math.sin(t)} style={{ stroke: "var(--text-muted)", strokeWidth: 1.2 }} />; })}
          <circle cx={90} cy={90} r={12} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
          <circle cx={90} cy={90} r={5} style={{ fill, stroke: "var(--accent)" }} />
          <text x={90} y={180} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{filled ? "no axle can pass" : "the empty hub takes the axle"}</text>
        </g>
        <g>
          <path d="M215 40 Q205 40 210 60 Q190 110 215 150 L295 150 Q320 110 300 60 Q305 40 295 40 Z" style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 3 }} />
          <path d="M219 48 Q214 48 217 62 Q200 110 222 142 L288 142 Q310 110 293 62 Q296 48 291 48 Z" style={{ fill, stroke: "none" }} />
          <text x={255} y={180} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{filled ? "a solid lump holds nothing" : "the hollow holds water"}</text>
        </g>
        <g>
          <rect x={360} y={40} width={130} height={110} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 3 }} />
          <rect x={370} y={50} width={110} height={100} style={{ fill }} />
          <rect x={385} y={95} width={28} height={55} style={{ fill: filled ? "var(--text-muted)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
          <rect x={440} y={70} width={26} height={22} style={{ fill: filled ? "var(--text-muted)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
          <text x={425} y={180} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{filled ? "no one can live inside" : "door, window and space to live"}</text>
        </g>
      </svg>
      <p style={{ fontSize: 14, margin: "4px 0" }}>
        &ldquo;Thirty spokes share one hub: where it is empty lies the use of the cart. Clay is shaped into a vessel: where it
        is empty lies the use of the vessel. Doors and windows are cut for a room: where it is empty lies the use of the
        room.&rdquo; (Daodejing 11, paraphrased)
      </p>
      <figcaption className="viz-caption">
        Shaded: what is there (yǒu, being). Unshaded: what is not (wú, non-being). What is there gives benefit, but what is not gives use.
      </figcaption>
    </figure>
  );
}
