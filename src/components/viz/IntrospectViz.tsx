"use client";

import { useState } from "react";

const FINDS = [
  "a sensation of warmth from the sun on your hand",
  "the sound of traffic outside",
  "a faint worry about tomorrow",
  "the colour of the page in front of you",
  "a slight pressure where you are sitting",
  "a memory of breakfast",
  "a wish to stop this exercise",
  "the thought that you are looking for yourself",
];

/** Hume looks inward for the self and finds only particular perceptions. Try it. */
export function IntrospectViz() {
  const [n, setN] = useState(0);
  return (
    <figure className="viz">
      <ul className="tagger">
        {FINDS.slice(0, n).map((f) => (
          <li key={f} className="tagger-row"><p className="tagger-text" style={{ margin: 0 }}>you catch: {f}</p></li>
        ))}
        {n === 0 && <li className="tagger-row"><p className="tagger-text" style={{ margin: 0 }}>Turn your attention inward, and look for the self that has your experiences.</p></li>}
      </ul>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={n >= FINDS.length} onClick={() => setN(n + 1)}>Look inward again</button>
        {n > 0 && <button type="button" className="btn" onClick={() => setN(0)}>Start again</button>}
      </div>
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>
        perceptions found: {n} · a self, distinct from them: 0
      </p>
      <figcaption className="viz-caption" aria-live="polite">
        {n < FINDS.length
          ? "Each time you look, you stumble on some particular perception, never on something that has them."
          : "When I enter most intimately into what I call myself, Hume wrote, I always stumble on some particular perception or other. I never catch myself at any time without a perception, and never observe anything but the perception. The last find is telling: even the thought of looking is just one more perception."}
      </figcaption>
    </figure>
  );
}
