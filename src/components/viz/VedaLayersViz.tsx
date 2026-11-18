"use client";

import { useState } from "react";

const LAYERS = [
  { name: "Saṃhitā", part: "ritual", gist: "Collections of hymns, chants and formulas addressed to the gods, used in the sacrifice. The Ṛg Veda is the oldest, composed perhaps from about 1500 BCE.", ex: "“Then there was neither existence nor non-existence … Who really knows, whence this creation came?” (Ṛg Veda 10.129)" },
  { name: "Brāhmaṇa", part: "ritual", gist: "Prose manuals explaining the sacrifice: how it is done, why each act matters, and the hidden connections (bandhu) between ritual and cosmos.", ex: "The fire altar is built as the body of Prajāpati, the creator, so that building it restores the world." },
  { name: "Āraṇyaka", part: "knowledge", gist: "“Forest texts”, for those who withdraw from household life. The sacrifice is increasingly performed in thought: ritual turns into meditation.", ex: "The horse of the horse sacrifice is meditated on as the whole universe: its head the dawn, its eye the sun." },
  { name: "Upaniṣad", part: "knowledge", gist: "Dialogues and teachings, roughly 800 to 200 BCE for the oldest, asking what the self is, what ultimate reality is, and how they are related. Called Vedānta, the end of the Veda.", ex: "“You are that (tat tvam asi), Śvetaketu.” (Chāndogya Upaniṣad 6.8.7)" },
];

/** The four layers of each Veda, from hymn and ritual to philosophical inquiry. */
export function VedaLayersViz() {
  const [i, setI] = useState(0);
  const L = LAYERS[i];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="layer">
        {LAYERS.map((l, k) => <button key={l.name} type="button" aria-pressed={i === k} className={i === k ? "seg is-on" : "seg"} onClick={() => setI(k)}>{l.name}</button>)}
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="The four layers of a Veda, in order" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {LAYERS.map((l, k) => (
          <g key={l.name}>
            <rect x={20 + k * 122} y={30} width={114} height={44} rx={6}
              style={{ fill: k === i ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--border)", cursor: "pointer" }} onClick={() => setI(k)} />
            <text x={77 + k * 122} y={57} textAnchor="middle" style={{ fill: k === i ? "var(--bg)" : "var(--text)", fontSize: 13, fontWeight: 700, pointerEvents: "none" }}>{l.name}</text>
          </g>
        ))}
        <line x1={20} y1={92} x2={254} y2={92} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={137} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>karma-kāṇḍa: the portion on action</text>
        <line x1={264} y1={92} x2={498} y2={92} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={381} y={110} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12 }}>jñāna-kāṇḍa: the portion on knowledge</text>
        <text x={20} y={18} style={{ fill: "var(--text-faint)", fontSize: 11 }}>older</text>
        <text x={498} y={18} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>later</text>
      </svg>
      <p style={{ margin: "6px 0" }}>{L.gist}</p>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{L.ex}</p>
      <figcaption className="viz-caption">
        Each of the four Vedas (Ṛg, Sāma, Yajur, Atharva) has these layers. Later tradition divides them into the portion on
        ritual action and the portion on knowledge; the Āraṇyakas sit on the border. The schools of Mīmāṃsā and Vedānta take
        their names from this divide.
      </figcaption>
    </figure>
  );
}
