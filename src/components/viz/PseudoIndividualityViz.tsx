"use client";

import { useState } from "react";

const SLOTS = [
  { name: "intro", parts: ["piano sting", "drum fill", "synth swell", "guitar riff", "string hit"] },
  { name: "verse", parts: ["love found", "love lost", "nightlife", "hometown", "summer"] },
  { name: "hook", parts: ["oh-oh", "na-na", "hey!", "baby", "tonight"] },
];

/** Songs assembled from standard parts: many apparent choices, one formula. */
export function PseudoIndividualityViz() {
  const [k, setK] = useState(3);
  const [seed, setSeed] = useState(0);
  const total = k ** 3;
  const idx = seed % total;
  const pick = [Math.floor(idx / (k * k)) % k, Math.floor(idx / k) % k, idx % k];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>parts per slot = {k} <input type="range" min={2} max={5} step={1} value={k} onChange={(e) => { setK(Number(e.target.value)); setSeed(0); }} aria-label="parts" /></label>
        <button type="button" className="seg" onClick={() => setSeed((s) => s + 7)}>next release</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8, marginTop: 12 }}>
        {SLOTS.map((s, j) => (
          <div key={s.name} style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)" }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{s.name}</div>
            {s.parts.slice(0, k).map((p, i) => (
              <div key={p} style={{ fontSize: 13, padding: "2px 6px", borderRadius: 4, marginTop: 2, background: i === pick[j] ? "var(--accent-soft)" : "transparent", color: i === pick[j] ? "var(--text)" : "var(--text-muted)", fontWeight: i === pick[j] ? 700 : 400 }}>{p}</div>
            ))}
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        This week&rsquo;s hit: {SLOTS.map((s, j) => s.parts[pick[j]]).join(" + ")}. The catalogue offers {total} apparently different songs, all built from the same {3 * k} parts in the same order.
      </p>
      <figcaption className="viz-caption">
        Adorno and Horkheimer argue that the culture industry produces standardised goods dressed up as unique. The details
        vary, the formula never does, and the listener&rsquo;s sense of free choice among them is what they call
        pseudo-individuality. The real choice, of what kind of thing art could be, has already been made.
      </figcaption>
    </figure>
  );
}
