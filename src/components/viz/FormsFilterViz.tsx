"use client";

import { useState } from "react";

const LAYERS = [
  { key: "space", label: "space, the form of outer sense", adds: "Things appear outside me and outside one another, with shape, size and position." },
  { key: "time", label: "time, the form of inner sense", adds: "Everything I experience comes in an order: before, after, at the same time." },
  { key: "cats", label: "the categories of the understanding", adds: "What appears is unified into objects, as substances with properties, connected as cause and effect." },
] as const;

/** Transcendental idealism: what we experience is the thing as it appears, shaped by the forms of intuition and the categories. Take the forms away and see what is left to know. */
export function FormsFilterViz() {
  const [on, setOn] = useState<boolean[]>([true, true, true]);
  const all = on.every(Boolean);
  const none = on.every((v) => !v);
  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: "0 0 6px", textTransform: "none" }}>Which contributions of the mind are in place?</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {LAYERS.map((l, i) => (
          <button key={l.key} type="button" style={{ cursor: "pointer" }} className={on[i] ? "viz-chip is-on" : "viz-chip"} aria-pressed={on[i]}
            onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}>{l.label}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="The thing in itself, filtered by the mind into an appearance" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <rect x={10} y={25} width={110} height={40} rx={6} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />
        <text x={65} y={50} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>thing in itself</text>
        {LAYERS.map((l, i) => (
          <rect key={l.key} x={150 + i * 60} y={15} width={40} height={60} rx={4} style={{ fill: on[i] ? "var(--accent-soft)" : "none", stroke: on[i] ? "var(--accent)" : "var(--border)", strokeDasharray: on[i] ? "none" : "4 3" }} />
        ))}
        <rect x={380} y={25} width={130} height={40} rx={6} style={{ fill: all ? "var(--accent-soft)" : "none", stroke: all ? "var(--accent)" : "var(--border)" }} />
        <text x={445} y={50} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text)" }}>{all ? "an object of experience" : none ? "nothing for us" : "no unified experience"}</text>
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          {LAYERS.map((l, i) => (
            <tr key={l.key}><td>{l.label}</td><td>{on[i] ? l.adds : "Removed. Try to imagine experience without it."}</td></tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {all
          ? "With every form in place, we have experience of a world of objects in space and time, connected causally. We can know a priori that it has these features, because we contribute them. What the thing is in itself, apart from these forms, we cannot know."
          : "Take away a form and what remains is not a clearer view of things in themselves but no experience we could have at all. That is why Kant calls space, time and the categories conditions of the possibility of experience."}
      </figcaption>
    </figure>
  );
}
