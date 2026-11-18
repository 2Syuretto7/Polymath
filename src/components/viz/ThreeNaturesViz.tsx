"use client";

import { useState } from "react";

const NATURES = [
  { name: "dependent", skt: "paratantra", text: "The flow of experience itself, arising from causes and conditions: seeing, feeling, thinking, moment by moment. This is what is really there." },
  { name: "imagined", skt: "parikalpita", text: "The same flow as we ordinarily take it: split into a grasping subject, a self, and grasped objects outside it. This split is constructed and does not exist as it appears." },
  { name: "perfected", skt: "pariniṣpanna", text: "The dependent flow seen as empty of the imagined split: experience without the duality of grasper and grasped. This is suchness, realised in awakening." },
];

/** Yogācāra’s three natures, drawn over one stream of experience. */
export function ThreeNaturesViz() {
  const [k, setK] = useState(0);
  const N = NATURES[k];
  const wave = Array.from({ length: 41 }, (_, i) => `${60 + i * 10},${100 + 14 * Math.sin(i / 2.2)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="nature">
        {NATURES.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A stream of experience, with or without a split into subject and object" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polyline points={wave} style={{ fill: "none", stroke: k === 2 ? "var(--accent)" : "var(--text-muted)", strokeWidth: k === 1 ? 2 : 5, opacity: k === 1 ? 0.5 : 1 }} />
        <text x={260} y={150} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>a stream of momentary cognitions</text>
        {k === 1 && (
          <>
            <rect x={40} y={20} width={130} height={40} rx={6} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "5 4" }} />
            <text x={105} y={45} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>‘I’, the grasper</text>
            <rect x={350} y={20} width={130} height={40} rx={6} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "5 4" }} />
            <text x={415} y={45} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>things, the grasped</text>
            <line x1={175} y1={40} x2={345} y2={40} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
            <text x={260} y={34} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 11 }}>imagined split</text>
          </>
        )}
        {k === 2 && <text x={260} y={45} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>no grasper, no grasped: only the flow</text>}
      </svg>
      <p style={{ margin: "4px 0" }}><strong>The {N.name} nature</strong> <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>({N.skt})</span></p>
      <p className="mono" style={{ fontSize: 13 }}>{N.text}</p>
      <figcaption className="viz-caption">
        The three natures are not three things but three ways of regarding one. Vasubandhu compares them to a magician&rsquo;s
        illusion: the conjured elephant is imagined, the appearance produced by the spell is dependent, and the absence of
        any real elephant in that appearance is perfected.
      </figcaption>
    </figure>
  );
}
