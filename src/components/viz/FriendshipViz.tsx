"use client";

import { useState } from "react";

const KINDS = ["for utility", "for pleasure", "of character"];
const EVENTS: { name: string; verdicts: [string, string, string]; ends: [boolean, boolean, boolean] }[] = [
  {
    name: "your friend can no longer help you",
    ends: [true, false, false],
    verdicts: [
      "It ends. You loved what you got from them, not them, and when the usefulness goes, so does the friendship. Aristotle says such friendships are easily dissolved.",
      "It lasts, as long as they are still good company. Usefulness was never the point.",
      "It lasts. You wished them well for their own sake; their usefulness was a bonus.",
    ],
  },
  {
    name: "your friend stops being fun",
    ends: [false, true, false],
    verdicts: [
      "It lasts, as long as they are still useful. Pleasure was never the point.",
      "It ends. Aristotle says the young form and drop such friendships quickly, often within a day, as their pleasures change.",
      "It lasts. Good people are pleasant to each other because of what they are, not because of passing amusements.",
    ],
  },
  {
    name: "your friend becomes a worse person",
    ends: [false, false, true],
    verdicts: [
      "It may last. Bad people can be useful to each other, and to good people, so a friendship of utility survives.",
      "It may last, if they stay pleasant. Bad people can be friends for pleasure.",
      "It is in danger. You loved them for their character, and it has changed. Aristotle says you should first try to help them recover, more than you would help them recover lost property; only if they are incurable should you end it, and even then remember the past.",
    ],
  },
  {
    name: "you live far apart for years",
    ends: [false, false, false],
    verdicts: [
      "Probably it lapses, once the exchange of benefits stops.",
      "Probably it lapses: it lived on shared amusements.",
      "Distance does not destroy the friendship, Aristotle says, only its activity. But he quotes a proverb: lack of conversation has dissolved many friendships.",
    ],
  },
];

/** Test Aristotle's three kinds of friendship against changes in circumstances. */
export function FriendshipViz() {
  const [e, setE] = useState<number | null>(null);
  const ev = e === null ? null : EVENTS[e];

  return (
    <figure className="viz">
      <p className="mono-meta" style={{ margin: 0, textTransform: "none" }}>What happens to each kind of friendship if</p>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {EVENTS.map((x, i) => (
          <button key={x.name} type="button" className={i === e ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === e} onClick={() => setE(i)}>{x.name}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        {KINDS.map((k, i) => (
          <div key={k} style={{
            flex: "1 1 180px", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px",
            borderColor: ev ? (ev.ends[i] ? "var(--danger)" : "var(--border)") : "var(--border)",
          }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Friendship {k}</p>
            <p className="mono-meta" style={{ margin: "2px 0 8px", textTransform: "none" }}>
              {i === 0 ? "each loves the other for the good they get" : i === 1 ? "each loves the other for the pleasure they give" : "each loves the other for who they are"}
            </p>
            <p style={{ margin: 0, fontSize: 14, color: ev && ev.ends[i] ? "var(--danger)" : "var(--text)" }}>
              {ev ? ev.verdicts[i] : "Choose a change above."}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {ev
          ? "Each friendship lasts as long as the thing it was based on. Only the friendship of character is based on something that is lasting, which is why Aristotle calls it complete, and the other two friendships only by resemblance to it."
          : "Aristotle distinguishes friendships by what the friends love in each other. Pick a change and see which friendships survive it."}
      </figcaption>
    </figure>
  );
}
