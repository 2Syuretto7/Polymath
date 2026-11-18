"use client";

import { useState } from "react";

const NODES: Record<string, [number, number]> = { G: [260, 40], s1: [110, 145], s2: [185, 190], m1: [335, 190], m2: [410, 145] };
const DIFFS = [
  { name: "God and self", pairs: [["G", "s1"], ["G", "s2"]], text: "No self is God, even when liberated. The self is a reflection (pratibimba) of God: wholly dependent on him, never identical with him." },
  { name: "God and matter", pairs: [["G", "m1"], ["G", "m2"]], text: "God is the efficient cause of the world, its maker and controller, but not its material: matter (prakṛti) is eternal and other than him." },
  { name: "self and self", pairs: [["s1", "s2"]], text: "Each self is unique and eternally so. Selves differ in their nature, and so even in the bliss they can enjoy in liberation." },
  { name: "self and matter", pairs: [["s1", "m1"], ["s2", "m2"]], text: "A self is conscious and is not its body or mind, which are made of matter." },
  { name: "matter and matter", pairs: [["m1", "m2"]], text: "Material things differ from one another too. Difference is part of what each thing is (dharmisvarūpa), not an extra relation laid on top." },
];

/** Madhva’s five differences between God, selves and matter. */
export function FiveDifferencesViz() {
  const [k, setK] = useState(0);
  const D = DIFFS[k];
  const on = (a: string, b: string) => D.pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
  const all: [string, string][] = [["G", "s1"], ["G", "s2"], ["G", "m1"], ["G", "m2"], ["s1", "s2"], ["s1", "m1"], ["s2", "m2"], ["m1", "m2"]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="difference" style={{ flexWrap: "wrap" }}>
        {DIFFS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="God, two selves and two material things, with lines of difference" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {all.map(([a, b]) => (
          <line key={a + b} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]}
            style={{ stroke: on(a, b) ? "var(--danger)" : "var(--border)", strokeWidth: on(a, b) ? 3.5 : 1.5, strokeDasharray: on(a, b) ? undefined : "4 4" }} />
        ))}
        <circle cx={260} cy={40} r={26} style={{ fill: "var(--accent)", stroke: "var(--bg)", strokeWidth: 2 }} />
        <text x={260} y={44} textAnchor="middle" style={{ fill: "var(--bg)", fontSize: 12, fontWeight: 700 }}>God</text>
        {(["s1", "s2"] as const).map((s, i) => (
          <g key={s}>
            <circle cx={NODES[s][0]} cy={NODES[s][1]} r={25} style={{ fill: "var(--bg)" }} />
            <circle cx={NODES[s][0]} cy={NODES[s][1]} r={25} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={NODES[s][0]} y={NODES[s][1] + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>self {i + 1}</text>
          </g>
        ))}
        {(["m1", "m2"] as const).map((m, i) => (
          <g key={m}>
            <rect x={NODES[m][0] - 22} y={NODES[m][1] - 14} width={44} height={28} rx={3} style={{ fill: "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 2 }} />
            <text x={NODES[m][0]} y={NODES[m][1] + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>thing {i + 1}</text>
          </g>
        ))}
      </svg>
      <p style={{ margin: "4px 0" }}><strong>Difference between {D.name}</strong></p>
      <p className="mono" style={{ fontSize: 13 }}>{D.text}</p>
      <figcaption className="viz-caption">
        Madhva lists five real and eternal differences (pañcabheda). Against Advaita, he holds that the perception of
        difference is reliable knowledge, and that scripture, rightly read, teaches difference rather than identity.
      </figcaption>
    </figure>
  );
}
