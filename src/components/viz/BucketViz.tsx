"use client";

import { useState } from "react";

const STAGES = [
  { name: "at rest", bucket: 0, water: 0, note: "Bucket and water at rest. No relative motion, flat surface." },
  { name: "bucket starts spinning", bucket: 1, water: 0, note: "The bucket spins, the water has not yet caught up. Relative motion is greatest, yet the surface is flat." },
  { name: "water catches up", bucket: 1, water: 1, note: "Water and bucket turn together. No relative motion between them, yet the surface is concave, climbing the sides." },
  { name: "bucket stopped", bucket: 0, water: 1, note: "The bucket is stopped, the water still turns. Relative motion again, and the surface is still concave." },
];

/** Newton's bucket: the curvature of the water tracks its rotation, but not its rotation relative to the bucket. */
export function BucketViz() {
  const [s, setS] = useState(0);
  const st = STAGES[s];
  const curve = st.water ? 26 : 0;
  const rel = st.bucket !== st.water;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Stage">
        {STAGES.map((x, i) => (
          <button key={x.name} type="button" className={i === s ? "seg is-on" : "seg"} aria-pressed={i === s} onClick={() => setS(i)}>{i + 1}. {x.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 180" role="img" aria-label="A bucket of water" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <path d={`M190,${80 - curve / 2} Q260,${80 + curve * 1.5} 330,${80 - curve / 2} L320,160 L200,160 Z`} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
        <path d={`M190,${80 - curve / 2} Q260,${80 + curve * 1.5} 330,${80 - curve / 2}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d="M180,40 L200,162 L320,162 L340,40" style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3 }} />
        <line x1={260} y1={10} x2={260} y2={40} style={{ stroke: "var(--text-muted)" }} />
        {st.bucket ? <text x={360} y={60} style={{ fontSize: 12, fill: "var(--text)" }}>bucket turning</text> : null}
        {st.water ? <text x={60} y={110} style={{ fontSize: 12, fill: "var(--accent)" }}>water turning</text> : null}
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>motion of the water relative to the bucket</td><td>{rel ? "yes" : "none"}</td></tr>
          <tr><td>surface of the water</td><td>{st.water ? "concave" : "flat"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {st.note} Newton concluded that the concavity reveals true, absolute rotation, rotation with respect to space itself. Leibniz never gave a full answer. Ernst Mach later replied that rotation might be relative to the rest of the matter in the universe, such as the distant stars.
      </figcaption>
    </figure>
  );
}
