"use client";

import { useState } from "react";

const LEVELS = [
  {
    name: "The One",
    tag: "also called the Good; beyond being and thought",
    down: "Perfectly simple, with no parts and no distinction even between thinker and thought. It needs nothing and wills nothing, yet because it is perfect it overflows, the way a fire gives off heat, and remains undiminished.",
    up: "Union: beyond thinking, the soul is no longer aware of itself as separate. Porphyry says Plotinus reached this four times in the six years they were together.",
  },
  {
    name: "Intellect",
    tag: "Nous: thinking, and the Forms it thinks",
    down: "The first thing after the One: it turns back to contemplate its source, and in doing so becomes thought thinking itself. Its objects are Plato's Forms, and here thinker and thought are one, though they can be told apart.",
    up: "Contemplation: through dialectic the soul comes to see the Forms directly, all at once, rather than step by step.",
  },
  {
    name: "Soul",
    tag: "the World Soul and individual souls",
    down: "Soul proceeds from Intellect. It thinks discursively, one thing after another, and so time comes to be as its life. It animates and orders the cosmos. Plotinus holds that part of each human soul never descends, but stays in Intellect.",
    up: "Purification: the soul turns away from the body's concerns, and the virtues become purifications, freeing it to attend to what is higher in itself.",
  },
  {
    name: "Nature and bodies",
    tag: "the sensible world",
    down: "Soul's lowest activity is nature, which produces the forms of living things in matter. The sensible world is an image of the intelligible, beautiful because it shares in form.",
    up: "Civic virtue: the first step is ordering one's desires and actions well in ordinary life, and noticing beauty in bodies as a trace of something higher.",
  },
  {
    name: "Matter",
    tag: "the limit where the procession fades out",
    down: "Matter has no form of its own. It is like darkness, the point where the light from the source finally gives out. Plotinus calls it evil itself, but evil as privation, a lack of good, not a rival force.",
    up: "The starting point of the ascent, where the soul finds itself most scattered and least itself.",
  },
];

/** Plotinus' levels of reality, read downwards as procession or upwards as the soul's return. */
export function EmanationViz() {
  const [dir, setDir] = useState<"down" | "up">("down");
  const [k, setK] = useState(0);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="direction">
        <button type="button" className={dir === "down" ? "seg is-on" : "seg"} aria-pressed={dir === "down"} onClick={() => setDir("down")}>procession, from the One</button>
        <button type="button" className={dir === "up" ? "seg is-on" : "seg"} aria-pressed={dir === "up"} onClick={() => setDir("up")}>return, to the One</button>
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 12 }}>
        <div style={{ flex: "0 1 220px", display: "flex", flexDirection: "column", alignItems: "stretch", gap: 2 }}>
          {LEVELS.map((l, i) => (
            <div key={l.name} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {i > 0 && <span aria-hidden style={{ color: "var(--text-faint)", lineHeight: 1 }}>{dir === "down" ? "↓" : "↑"}</span>}
              <button type="button" onClick={() => setK(i)} aria-pressed={i === k}
                style={{
                  width: `${100 - i * 8}%`, padding: "6px 8px", borderRadius: 8, cursor: "pointer", font: "inherit",
                  border: `1px solid ${i === k ? "var(--accent)" : "var(--border)"}`,
                  background: i === k ? "var(--accent-soft)" : `color-mix(in srgb, var(--accent-soft) ${Math.max(0, 70 - i * 18)}%, var(--bg-subtle))`,
                  color: "var(--text)",
                }}>
                {l.name}
              </button>
            </div>
          ))}
        </div>
        <div style={{ flex: "1 1 240px" }}>
          <p style={{ margin: 0, fontWeight: 600 }}>{LEVELS[k].name}</p>
          <p className="mono-meta" style={{ margin: "2px 0 8px", textTransform: "none" }}>{LEVELS[k].tag}</p>
          <p style={{ margin: 0 }}>{dir === "down" ? LEVELS[k].down : LEVELS[k].up}</p>
        </div>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {dir === "down"
          ? "Read downwards, each level comes from the one above without the higher losing anything, like light from the sun, growing dimmer with distance."
          : "Read upwards, the same levels are the stages of the soul's return: virtue, then dialectic and contemplation, and at last union with the One."}
      </figcaption>
    </figure>
  );
}
