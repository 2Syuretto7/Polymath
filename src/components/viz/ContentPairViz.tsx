"use client";

import { useState } from "react";

/** Alleged cases of phenomenal difference without representational difference, with replies. */
export const CASES = [
  {
    label: "Two trees",
    who: "Christopher Peacocke",
    objection: "Two trees of the same size, one twice as far away, look the same size, yet the nearer one fills more of the visual field. Same represented size, different character.",
    reply: "The experience also represents perspectival properties, such as the angle each tree subtends from here, and these differ.",
  },
  {
    label: "Blurry vision",
    who: "Paul Boghossian and David Velleman",
    objection: "Taking off your glasses makes the scene blurry, but you do not see the objects as blurry. The character changes; the represented world does not.",
    reply: "Blurry experience represents less: it fails to represent sharp boundaries that sharp experience represents.",
  },
  {
    label: "Inverted spectrum",
    who: "a classic thought experiment",
    objection: "Someone whose colour experiences are swapped, red for green, represents ripe tomatoes as red just as you do, yet what it is like for them differs.",
    reply: "If content is fixed by what experiences track, an inversion that leaves all tracking unchanged is impossible; or the contents differ after all.",
  },
  {
    label: "Pain",
    who: "a standard objection",
    objection: "A pain does not seem to be about anything; it is just a feeling.",
    reply: "Michael Tye: a pain represents a disturbance of a certain kind at a place in the body, which is why it is felt as in the foot.",
  },
  {
    label: "Undirected anxiety",
    who: "a standard objection",
    objection: "A free-floating mood has a distinctive character but no object at all.",
    reply: "Moods represent the world as a whole, or whatever one meets, as threatening, gloomy or bright.",
  },
];

/** Test cases for representationalism: same content, different character? */
export function ContentPairViz() {
  const [k, setK] = useState(0);
  const c = CASES[k];
  const box = (title: string, body: string, colour: string, soft: string) => (
    <div style={{ flex: "1 1 220px", border: `1px solid ${colour}`, background: soft, borderRadius: 6, padding: "10px 12px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: colour, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.45 }}>{body}</div>
    </div>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((v, i) => <button key={v.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{v.label}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10, marginBottom: 10 }}>
        {box("The objection: same content, different character", c.objection, "var(--danger)", "var(--danger-soft)")}
        {box("A representationalist reply: the content differs too", c.reply, "var(--success)", "var(--success-soft)")}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {c.label}, from {c.who}. Representationalism stands if every such case has a difference in content.
      </p>
      <figcaption className="viz-caption">
        Representationalism says that the phenomenal character of an experience is fixed by what it represents. Critics
        look for pairs of experiences that represent the same things but feel different; defenders look for a difference in
        content that the critics have missed.
      </figcaption>
    </figure>
  );
}
