"use client";

import { useState } from "react";

type Belief = { text: string; falls: number | null; why: string };

const WAVES = [
  "no doubt yet",
  "the senses sometimes deceive",
  "I might be dreaming",
  "a deceiving demon might exist",
];

const BELIEFS: Belief[] = [
  { text: "The tower on the far hill is round.", falls: 1, why: "Distant towers that looked round have turned out square. A source that has deceived me once should not be trusted fully here." },
  { text: "I am sitting by the fire in a winter gown.", falls: 2, why: "The senses are reliable about near and middle-sized things, but I have dreamt exactly this, and there are no sure signs to tell waking from dreaming." },
  { text: "I have hands and a body.", falls: 2, why: "Dreams too present hands and bodies. Only a madman would doubt this while awake, Descartes says, but the dream possibility reaches it." },
  { text: "Bodies have extension, shape and number.", falls: 3, why: "Dreams are made from simple general things, as paintings are made from real colours, so the dream argument leaves these standing. The demon does not." },
  { text: "Two plus three makes five.", falls: 3, why: "Waking or dreaming, two and three make five. But a powerful deceiver could make me go wrong even here, as I sometimes go wrong in sums." },
  { text: "A square has exactly four sides.", falls: 3, why: "The same: only the possibility of a deceiver whose power over my mind is total can shake it." },
  { text: "I am thinking.", falls: null, why: "If I am deceived, I am thinking. However far the doubt goes, it cannot reach this. It is the subject of the next lesson." },
];

/** Descartes's three waves of doubt in the First Meditation, and which beliefs each one sweeps away. */
export function DoubtViz() {
  const [wave, setWave] = useState(0);
  const left = BELIEFS.filter((b) => b.falls === null || b.falls > wave).length;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="How far the doubt has gone">
        {WAVES.map((w, i) => (
          <button key={w} type="button" className={i === wave ? "seg is-on" : "seg"} aria-pressed={i === wave} onClick={() => setWave(i)}>
            {i === 0 ? w : `${i}. ${w}`}
          </button>
        ))}
      </div>
      <ul className="tagger" style={{ marginTop: 12 }}>
        {BELIEFS.map((b) => {
          const gone = b.falls !== null && b.falls <= wave;
          const now = b.falls === wave;
          return (
            <li key={b.text} className={gone ? "tagger-row" : "tagger-row is-right"} style={{ opacity: gone && !now ? 0.45 : 1 }}>
              <p className="tagger-text" style={{ margin: 0, textDecoration: gone ? "line-through" : "none" }}>{b.text}</p>
              {(now || (b.falls === null && wave === 3)) && <p className="tagger-why" style={{ marginTop: 6 }}>{b.why}</p>}
            </li>
          );
        })}
      </ul>
      <figcaption className="viz-caption" aria-live="polite">
        {wave === 0
          ? "Choose a wave of doubt. Each one is a reason, not a feeling: a way the belief could be false that I cannot rule out."
          : `${left} of ${BELIEFS.length} beliefs survive. ${wave < 3 ? "Struck-out beliefs are not shown false, only not certain." : "Only one is left standing, and Descartes will build on it."}`}
      </figcaption>
    </figure>
  );
}
