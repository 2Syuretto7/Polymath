"use client";

import { useState } from "react";

const OBJS: { name: string; props: string[] }[] = [
  { name: "tomato", props: ["red", "round"] },
  { name: "fire engine", props: ["red"] },
  { name: "cricket ball", props: ["red", "round"] },
  { name: "lime", props: ["green", "round"] },
  { name: "parrot", props: ["green"] },
];
const PROPS = ["red", "green", "round"];
export type Mode = "realism" | "class nominalism" | "resemblance nominalism" | "trope theory";
const MODES: Mode[] = ["realism", "class nominalism", "resemblance nominalism", "trope theory"];
const SAY: Record<Mode, (p: string, k: number) => string> = {
  "realism": (p, k) => `There is one entity, the universal ${p}ness, wholly present in each of the ${k} things at once. They are alike because they literally share it.`,
  "class nominalism": (p, k) => `There is no universal. Being ${p} is just being a member of the class of ${p} things, which has ${k} members here. Nothing explains membership further.`,
  "resemblance nominalism": (p, k) => `There is no universal. The ${k} things resemble one another, which takes ${(k * (k - 1)) / 2} resemblance links, and being ${p} is resembling the paradigm ${p} things.`,
  "trope theory": (p, k) => `Each thing has its own particular ${p}ness, a trope: ${k} tropes in all, not one shared entity. The tropes resemble each other exactly.`,
};

/** One property, many things: how realism, nominalism and trope theory account for what alike things have in common. */
export function UniversalsViz({ initial = "realism" }: { initial?: Mode }) {
  const [m, setM] = useState<Mode>(initial);
  const [p, setP] = useState("red");
  const has = OBJS.map((o) => o.props.includes(p));
  const idx = OBJS.map((_, i) => i).filter((i) => has[i]);
  const W = 640, H = 230, oy = 180;
  const ox = (i: number) => 70 + i * 125;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Theory">
        {MODES.map((x) => <button key={x} type="button" aria-pressed={m === x} className={m === x ? "seg is-on" : "seg"} onClick={() => setM(x)}>{x}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {PROPS.map((x) => <button key={x} type="button" aria-pressed={p === x} className={p === x ? "viz-chip is-on" : "viz-chip"} onClick={() => setP(x)}>{x}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`How ${m} accounts for things being ${p}`} style={{ width: "100%", display: "block", marginTop: 6 }}>
        {m === "realism" && <>
          {idx.map((i) => <line key={i} x1={W / 2} y1={46} x2={ox(i)} y2={oy - 18} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />)}
          <rect x={W / 2 - 75} y={20} width={150} height={28} rx={14} style={{ fill: "var(--accent)" }} />
          <text x={W / 2} y={39} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 13, fontWeight: 600 }}>{p}ness (one universal)</text>
        </>}
        {m === "class nominalism" && <>
          <rect x={20} y={oy - 40} width={W - 40} height={62} rx={10} style={{ fill: "none", stroke: "var(--border)" }} />
          <text x={W / 2} y={44} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 13 }}>the class of {p} things = {"{"}{idx.map((i) => OBJS[i].name).join(", ")}{"}"}</text>
          {idx.map((i) => <line key={i} x1={W / 2} y1={52} x2={ox(i)} y2={oy - 18} style={{ stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />)}
        </>}
        {m === "resemblance nominalism" && idx.flatMap((i, a) => idx.slice(a + 1).map((j) => {
          const mx = (ox(i) + ox(j)) / 2, h = 30 + Math.abs(j - i) * 28;
          return <path key={`${i}-${j}`} d={`M${ox(i)},${oy - 18} Q${mx},${oy - 18 - 2 * h} ${ox(j)},${oy - 18}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.8 }} />;
        }))}
        {m === "trope theory" && <>
          {idx.flatMap((i, a) => idx.slice(a + 1).map((j) => {
            const mx = (ox(i) + ox(j)) / 2, h = 20 + Math.abs(j - i) * 18;
            return <path key={`${i}-${j}`} d={`M${ox(i)},${oy - 52} Q${mx},${oy - 52 - 2 * h} ${ox(j)},${oy - 52}`} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.2, strokeDasharray: "4 3" }} />;
          }))}
          {idx.map((i) => <g key={i}>
            <line x1={ox(i)} y1={oy - 38} x2={ox(i)} y2={oy - 18} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
            <rect x={ox(i) - 50} y={oy - 62} width={100} height={24} rx={12} style={{ fill: "var(--accent)" }} />
            <text x={ox(i)} y={oy - 45} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 11, fontWeight: 600 }}>its own {p}ness</text>
          </g>)}
        </>}
        {OBJS.map((o, i) => (
          <g key={o.name}>
            <rect x={ox(i) - 52} y={oy - 18} width={104} height={36} rx={6} style={{ fill: has[i] ? "var(--accent-soft)" : "var(--bg)", stroke: has[i] ? "var(--accent)" : "var(--border)", strokeWidth: has[i] ? 2 : 1 }} />
            <text x={ox(i)} y={oy + 5} textAnchor="middle" style={{ fill: has[i] ? "var(--text)" : "var(--text-faint)", fontSize: 13 }}>{o.name}</text>
          </g>
        ))}
      </svg>
      <p style={{ margin: "6px 0" }}>{SAY[m](p, idx.length)}</p>
      <figcaption className="viz-caption">
        Pick a property and a theory. All four agree on the data, that some things are {p} and some are not; they disagree about what, if anything, the things have in common. Realism posits one extra entity per property, trope theory one per instance, and the nominalists none at all.
      </figcaption>
    </figure>
  );
}
