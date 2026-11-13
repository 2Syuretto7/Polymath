"use client";

import { useState } from "react";

const WORDS = "Deus creator omnium polique rector vestiens diem decoro lumine noctem soporis gratia".split(" ");

/** Augustine's psalm: as you recite, what was expectation passes through attention into memory. */
export function PsalmViz() {
  const [k, setK] = useState(0);
  const n = WORDS.length;
  const past = WORDS.slice(0, k), now = k < n ? WORDS[k] : null, future = WORDS.slice(k + 1);

  const bar = (count: number, colour: string, label: string) => (
    <div style={{ display: "grid", gridTemplateColumns: "110px 1fr 40px", gap: 10, alignItems: "center" }}>
      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{label}</span>
      <div style={{ height: 12, background: "var(--bg-subtle)", borderRadius: 6, overflow: "hidden" }}>
        <div style={{ width: `${(count / n) * 100}%`, height: "100%", background: colour, transition: "width 200ms" }} />
      </div>
      <span className="mono" style={{ fontSize: 13 }}>{count}</span>
    </div>
  );

  return (
    <figure className="viz">
      <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.7, margin: "0 0 12px" }}>
        {WORDS.map((w, i) => (
          <span key={i} style={{
            color: i < k ? "var(--text-muted)" : i === k ? "var(--text)" : "var(--text-faint)",
            fontWeight: i === k ? 600 : 400,
            borderBottom: i === k ? "2px solid var(--accent)" : "none",
          }}>{w} </span>
        ))}
      </p>
      <div style={{ display: "grid", gap: 6 }}>
        {bar(past.length, "var(--text-muted)", "memory")}
        {bar(now ? 1 : 0, "var(--accent)", "attention")}
        {bar(future.length, "var(--violet-300)", "expectation")}
      </div>
      <div className="viz-sliders">
        <label><span>recited so far: <span className="mono">{k} of {n} words</span></span>
          <input type="range" min={0} max={n} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {k === 0
          ? "As you begin, the first word is in attention and the rest lies in expectation. The words are a line of a hymn by Ambrose that Augustine uses as his example."
          : k === n
            ? "When you finish, the whole hymn has passed into memory. Nothing of it exists now, yet you can measure it: you measure the impression it left in the mind."
            : `The present word, ${now}, has no length you can hold: it is already passing. What you measure is the stretch of the mind itself, the distentio animi, across memory and expectation.`}
      </figcaption>
    </figure>
  );
}
