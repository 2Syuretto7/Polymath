"use client";

import { useState } from "react";

const SCHEMATA = [
  ["quantity", "number: the successive addition of unit to unit in time"],
  ["reality", "time filled with sensation, to some degree"],
  ["substance", "permanence of the real in time"],
  ["cause", "succession of the manifold according to a rule"],
  ["community", "coexistence of the determinations of substances according to a rule"],
  ["possibility", "agreement with the conditions of time in general"],
  ["actuality", "existence at a determinate time"],
  ["necessity", "existence of an object at all times"],
];

/** Image and schema: you can picture five dots, but not a thousand. What lets you think of a thousand is a rule, which Kant calls a schema. */
export function SchemaViz() {
  const [n, setN] = useState(5);
  const cols = n <= 10 ? n : 40;
  const size = n <= 10 ? 30 : 12;
  const rows = Math.ceil(n / cols);
  const glance = n <= 6;
  return (
    <figure className="viz">
      <svg viewBox={`0 0 520 ${Math.max(60, rows * size + 20)}`} role="img" aria-label={`${n} dots`} style={{ width: "100%", display: "block", maxHeight: 340 }}>
        {Array.from({ length: n }, (_, i) => (
          <circle key={i} cx={20 + (i % cols) * size} cy={20 + Math.floor(i / cols) * size} r={n <= 10 ? 9 : 3.5} style={{ fill: glance ? "var(--accent)" : "var(--text-muted)" }} />
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>how many: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={1000} value={n} onChange={(ev) => setN(Number(ev.target.value))} /></label>
      </div>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0" }} aria-live="polite">
        {glance
          ? "An image: you take in the number at a glance."
          : "No image: you cannot see that there are exactly this many. You know it only by a rule, counting unit after unit in time."}
      </p>
      <table className="table">
        <thead><tr><th>category</th><th>its schema, a determination of time</th></tr></thead>
        <tbody>{SCHEMATA.map(([c, s]) => <tr key={c}><td>{c}</td><td>{s}</td></tr>)}</tbody>
      </table>
      <figcaption className="viz-caption">
        A schema is not a picture but a procedure of the imagination for providing a concept with its image. For the pure categories, which have no images at all, the schema is a rule about time, the one form that all appearances share.
      </figcaption>
    </figure>
  );
}
