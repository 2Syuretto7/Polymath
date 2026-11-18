"use client";

import { useState } from "react";

const LEVELS = [
  { name: "prakṛti", items: ["unmanifest nature"], text: "Primal matter, unmanifest, with the three guṇas in balance. It is uncaused, and the cause of all else except puruṣa." },
  { name: "buddhi", items: ["intellect (mahat)"], text: "The first evolute: intellect, the faculty of judgement and decision. It is material, though subtle." },
  { name: "ahaṃkāra", items: ["I-maker"], text: "The sense of ‘I’ and ‘mine’, which appropriates experience. From it the rest unfold." },
  { name: "the sixteen", items: ["mind (manas)", "5 sense capacities", "5 action capacities", "5 subtle elements"], text: "Mind, the five capacities of sensing (hearing, touch, sight, taste, smell), the five of acting (speech, grasping, walking, excreting, generating), and the five subtle elements of sound, touch, form, taste and smell." },
  { name: "gross elements", items: ["ether", "air", "fire", "water", "earth"], text: "From the subtle elements come the five gross elements of the perceptible world." },
];

/** The twenty-five principles (tattvas) of Sāṃkhya: puruṣa apart, and prakṛti unfolding into twenty-three evolutes. */
export function TattvaViz() {
  const [k, setK] = useState(LEVELS.length - 1);
  const count = 1 + LEVELS.slice(0, k + 1).reduce((a, l) => a + (l.name === "the sixteen" ? 16 : l.items.length), 0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="level">
        {LEVELS.map((l, i) => <button key={l.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{l.name}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 150px", gap: 12, marginTop: 10, alignItems: "start" }}>
        <div style={{ display: "grid", gap: 6 }}>
          {LEVELS.map((l, i) => (
            <div key={l.name} style={{ display: "flex", gap: 6, flexWrap: "wrap", opacity: i <= k ? 1 : 0.2 }}>
              {l.items.map((it) => (
                <span key={it} className="mono" style={{ fontSize: 12, padding: "3px 8px", borderRadius: 12, border: "1px solid var(--border)", background: i === k ? "var(--accent-soft)" : "transparent", color: i === k ? "var(--accent)" : "var(--text)" }}>{it}</span>
              ))}
            </div>
          ))}
        </div>
        <div style={{ border: "2px solid var(--accent)", borderRadius: 10, padding: 10, textAlign: "center" }}>
          <div style={{ fontWeight: 700 }}>puruṣa</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>pure consciousness, the witness: not an evolute, never changes</div>
        </div>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>{LEVELS[k].text} Principles counted so far, with puruṣa: {count}.</p>
      <figcaption className="viz-caption">
        Everything on the left, including intellect and the sense of self, is matter, prakṛti, in more or less subtle forms.
        Only puruṣa, on the right, is conscious. Bondage is mistaking the activity on the left for one&rsquo;s own.
      </figcaption>
    </figure>
  );
}
