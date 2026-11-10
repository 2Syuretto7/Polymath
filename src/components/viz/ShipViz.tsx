"use client";

import { useState } from "react";

const N = 24, PW = 18, PH = 46;

/** The ship of Theseus: replace its planks one at a time, then rebuild a ship from the old ones. */
export function ShipViz() {
  const [k, setK] = useState(0);
  const [rebuilt, setRebuilt] = useState(false);
  const x0 = 70;

  const hull = (y: number, planks: ("old" | "new")[], label: string) => (
    <g>
      <text x={x0} y={y - 10} className="viz-label">{label}</text>
      {planks.map((t, i) => (
        <rect key={i} x={x0 + i * (PW + 2)} y={y} width={PW} height={PH} rx={3} className={t === "old" ? "viz-cell is-on" : "viz-cell"} />
      ))}
      <path d={`M${x0 - 14} ${y + PH} L${x0 + N * (PW + 2) + 12} ${y + PH} L${x0 + N * (PW + 2) - 18} ${y + PH + 22} L${x0 + 16} ${y + PH + 22} Z`} className="viz-frame" />
    </g>
  );

  const first = Array.from({ length: N }, (_, i) => (i < k ? "new" : "old") as "old" | "new");
  const second = Array.from({ length: N }, (_, i) => (i < k ? "old" : "empty"));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 620 ${rebuilt ? 230 : 125}`} role="img" aria-label={`${k} of ${N} planks replaced${rebuilt ? ", and a second ship built from the old planks" : ""}`}>
        {hull(30, first, k === N ? "The ship in the harbour: every plank new" : `The ship in the harbour: ${N - k} original planks, ${k} new`)}
        {rebuilt && (
          <g>
            <text x={x0} y={130} className="viz-label" style={{ fill: "var(--danger)" }}>A ship rebuilt from the {k} discarded original planks</text>
            {second.map((t, i) => t === "old" && <rect key={i} x={x0 + i * (PW + 2)} y={140} width={PW} height={PH} rx={3} className="viz-cell is-on" style={{ stroke: "var(--danger)" }} />)}
            <path d={`M${x0 - 14} ${140 + PH} L${x0 + N * (PW + 2) + 12} ${140 + PH} L${x0 + N * (PW + 2) - 18} ${162 + PH} L${x0 + 16} ${162 + PH} Z`} className="viz-frame" style={{ stroke: "var(--danger)" }} />
          </g>
        )}
      </svg>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          Planks replaced: <span className="mono">{k}</span>
          <input type="range" className="viz-range" min={0} max={N} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} />
        </label>
        <button type="button" className={rebuilt ? "btn btn-primary" : "btn"} aria-pressed={rebuilt} onClick={() => setRebuilt(!rebuilt)}>
          {rebuilt ? "Scrap the second ship" : "Rebuild from the old planks"}
        </button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {k === 0
          ? <>Every plank is original. Drag the slider to replace them one at a time; surely changing one plank does not make it a different ship.</>
          : !rebuilt
            ? <>After {k} {k === 1 ? "replacement" : "replacements"} it still seems to be Theseus&rsquo;s ship, since it changed gradually and never left the harbour. {k === N && <>Yet not one original plank is left. Now try rebuilding from the old planks.</>}</>
            : <>Two ships now have a claim to be Theseus&rsquo;s ship: the one that changed gradually, and the one made of {k === N ? "all" : `${k} of`} the original planks. They cannot both be it, since they are two ships. Which is it, and what decides?</>}
      </figcaption>
    </figure>
  );
}
