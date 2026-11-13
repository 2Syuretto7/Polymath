"use client";

import { useState } from "react";

const STAGES = ["green", "green", "yellow", "yellow", "brown"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
type V = "endurantism" | "perdurantism" | "stage theory";
const VIEWS: V[] = ["endurantism", "perdurantism", "stage theory"];

/** How does a banana persist through change? Endurance, perdurance and stage theory compared. */
export function PersistenceViz() {
  const [v, setV] = useState<V>("perdurantism");
  const [d, setD] = useState(2);
  const W = 560, H = 150, x = (i: number) => 30 + i * 104, wdt = 92;
  const op = (s: string) => (s === "green" ? 0.25 : s === "yellow" ? 0.55 : 0.9);
  const say: Record<V, string> = {
    "endurantism": `One and the same banana is wholly present on each day. On ${DAYS[d]} it is ${STAGES[d]}; to avoid contradiction, the endurantist says it has the property ‘${STAGES[d]} at ${DAYS[d]}’, or bears ${STAGES[d]}ness in a ${DAYS[d]} way.`,
    "perdurantism": `The banana is a four-dimensional worm, spread out over the week. ‘The banana is ${STAGES[d]} on ${DAYS[d]}’ means its ${DAYS[d]} temporal part is ${STAGES[d]}, simply. Different parts have different colours, as different parts of a road have different surfaces.`,
    "stage theory": `‘The banana’ refers to the ${DAYS[d]} stage alone, which is ${STAGES[d]}. ‘It will be brown’ is true because a later stage, a temporal counterpart of this one, is brown.`,
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Theory of persistence">
        {VIEWS.map((x2) => <button key={x2} type="button" aria-pressed={v === x2} className={v === x2 ? "seg is-on" : "seg"} onClick={() => setV(x2)}>{x2}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>day: <span className="mono">{DAYS[d]}</span></span>
          <input type="range" min={0} max={4} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The banana across five days" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {v === "perdurantism" && <rect x={x(0) - 4} y={26} width={x(4) + wdt - x(0) + 8} height={64} rx={30} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />}
        {STAGES.map((s, i) => {
          const on = v === "endurantism" ? i === d : v === "stage theory" ? i === d : true;
          return (
            <g key={i}>
              <rect x={x(i)} y={32} width={wdt} height={52} rx={24} style={{ fill: "var(--accent)", fillOpacity: on ? op(s) : op(s) * 0.25, stroke: i === d ? "var(--text)" : "var(--border)", strokeWidth: i === d ? 2 : 1 }} />
              <text x={x(i) + wdt / 2} y={62} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, opacity: on ? 1 : 0.4 }}>{s}</text>
              <text x={x(i) + wdt / 2} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{DAYS[i]}</text>
            </g>
          );
        })}
        {v === "endurantism" && <text x={W / 2} y={138} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>only the present day&rsquo;s banana is shown: the whole banana, wholly there</text>}
        {v === "perdurantism" && <text x={W / 2} y={138} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the outline is the banana; each box is a temporal part</text>}
        {v === "stage theory" && <text x={W / 2} y={138} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the highlighted stage is the banana now; the others are its counterparts</text>}
      </svg>
      <p style={{ margin: "6px 0 4px", fontSize: 14 }}>{say[v]}</p>
      <figcaption className="viz-caption">
        The puzzle, Lewis&rsquo;s problem of temporary intrinsics: the banana is green and it is yellow, which are incompatible. Each theory removes the contradiction differently, by relativising the properties to times, by giving them to different temporal parts, or by making each stage a different object.
      </figcaption>
    </figure>
  );
}
