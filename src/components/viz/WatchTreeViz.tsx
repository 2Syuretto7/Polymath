"use client";

import { useState } from "react";

type Act = "none" | "remove" | "grow" | "damage" | "another";
const ACTS: [Act, string][] = [["remove", "Remove a part"], ["grow", "Leave it a year"], ["damage", "Damage it"], ["another", "Make another"]];

const SAY: Record<Exclude<Act, "none">, [string, string]> = {
  remove: ["The watch stops. No part makes another part; the spring cannot replace a missing wheel.", "The tree loses a leaf and grows another. Its leaves are made by the tree, and the tree is kept alive by its leaves."],
  grow: ["Nothing happens. The watch does not take in matter from outside and build itself up.", "The tree grows. It takes in matter and works it into its own substance, producing itself as an individual."],
  damage: ["The watch stays broken. It has no power to repair itself.", "The tree heals over the wound. Bark closes over the cut from within."],
  another: ["No watch makes another watch. Each was made by a watchmaker, whose idea of the whole came first.", "The tree drops a seed, and another tree grows. It produces itself as a species."],
};

/** Kant's contrast between a machine and a natural purpose, in which each part is both cause and effect of the others. */
export function WatchTreeViz() {
  const [act, setAct] = useState<Act>("none");
  const leaves = act === "remove" ? [0, 1, 2, 4] : [0, 1, 2, 3, 4];
  const r = act === "grow" ? 46 : 36;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="What to do to each">
        {ACTS.map(([k, label]) => (
          <button key={k} type="button" aria-pressed={act === k} className={act === k ? "seg is-on" : "seg"} onClick={() => setAct(k)}>{label}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="A watch and a tree" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <g>
          <circle cx={130} cy={88} r={56} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 2 }} />
          {Array.from({ length: 12 }, (_, k) => { const a = (k * Math.PI) / 6; return <line key={k} x1={130 + 48 * Math.sin(a)} y1={88 - 48 * Math.cos(a)} x2={130 + 52 * Math.sin(a)} y2={88 - 52 * Math.cos(a)} style={{ stroke: "var(--text-muted)" }} />; })}
          <line x1={130} y1={88} x2={130} y2={50} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
          {act !== "remove" && <line x1={130} y1={88} x2={158} y2={100} style={{ stroke: "var(--text)", strokeWidth: 3 }} />}
          {act === "damage" && <path d="M 92 60 L 118 82 L 104 96 L 140 128" style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5 }} />}
          <text x={130} y={164} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>watch</text>
        </g>
        <g>
          <rect x={382} y={96} width={14} height={56} style={{ fill: "var(--text-muted)" }} />
          {act === "damage" && <rect x={385} y={118} width={8} height={12} rx={3} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />}
          <circle cx={389} cy={90 - (r - 36)} r={r} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
          {leaves.map((k) => { const a = -0.6 + k * 0.6; return <ellipse key={k} cx={389 + (r - 6) * Math.sin(a)} cy={90 - (r - 36) - (r - 6) * Math.cos(a)} rx={6} ry={4} style={{ fill: "var(--accent)" }} />; })}
          {act === "remove" && <ellipse cx={389 + (r - 6) * Math.sin(1.2)} cy={90 - (r - 6) * Math.cos(1.2)} rx={3} ry={2} style={{ fill: "var(--accent)" }} />}
          {act === "another" && <g><rect x={462} y={136} width={4} height={16} style={{ fill: "var(--text-muted)" }} /><circle cx={464} cy={132} r={9} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} /></g>}
          <line x1={330} y1={152} x2={500} y2={152} style={{ stroke: "var(--border-strong)" }} />
          <text x={389} y={168} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>tree</text>
        </g>
      </svg>
      {act !== "none" && (
        <table className="table">
          <tbody>
            <tr><td><strong>watch</strong></td><td>{SAY[act][0]}</td></tr>
            <tr><td><strong>tree</strong></td><td>{SAY[act][1]}</td></tr>
          </tbody>
        </table>
      )}
      <figcaption className="viz-caption">
        In a machine each part exists for the sake of the others, but not through them. In a natural purpose, Kant says, the parts produce one another and the whole: the thing is both cause and effect of itself. Choose an action to compare.
      </figcaption>
    </figure>
  );
}
