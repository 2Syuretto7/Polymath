"use client";

import { useState } from "react";

const RUNGS: { name: string; text: string }[] = [
  { name: "one beautiful body", text: "The lover begins, guided rightly, by loving one beautiful body, and producing beautiful words in its company." },
  { name: "all beautiful bodies", text: "Seeing that the beauty of one body is akin to that of another, the lover comes to love the beauty of all bodies, and to think less of passion for just one." },
  { name: "beautiful souls", text: "Next the lover values the beauty of souls above that of bodies, so that even a soul in a plain body is enough to love and care for." },
  { name: "practices and laws", text: "From souls the lover is led to the beauty of activities and laws, and sees that all this beauty is of one kind." },
  { name: "kinds of knowledge", text: "Then to the beauty of the sciences, turning towards ‘the great sea of beauty’ and giving birth to many beautiful thoughts in philosophy." },
  { name: "Beauty itself", text: "Suddenly the lover sees Beauty itself: always being, neither coming to be nor passing away, not beautiful in one way and ugly in another, ‘itself by itself with itself’, in which all beautiful things share." },
];

/** Diotima's ladder of love in Plato's Symposium, from one beautiful body to the Form of Beauty. */
export function LadderViz() {
  const [r, setR] = useState(0);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setR(Math.max(0, r - 1))} disabled={r === 0}>step down</button>
        <button type="button" className="btn btn-primary" onClick={() => setR(Math.min(RUNGS.length - 1, r + 1))} disabled={r === RUNGS.length - 1}>climb</button>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A ladder of six rungs" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={60} y1={20} x2={60} y2={210} style={{ stroke: "var(--border-strong)", strokeWidth: 3 }} />
        <line x1={140} y1={20} x2={140} y2={210} style={{ stroke: "var(--border-strong)", strokeWidth: 3 }} />
        {RUNGS.map((g, i) => {
          const y = 195 - i * 34;
          const on = i === r, done = i < r;
          return (
            <g key={g.name} style={{ cursor: "pointer" }} onClick={() => setR(i)}>
              <line x1={60} y1={y} x2={140} y2={y} style={{ stroke: on ? "var(--accent)" : done ? "var(--text-muted)" : "var(--border-strong)", strokeWidth: on ? 6 : 3 }} />
              <text x={156} y={y + 4} style={{ fill: on ? "var(--accent)" : done ? "var(--text)" : "var(--text-faint)", fontSize: 13, fontWeight: on ? 700 : 400 }}>{i + 1}. {g.name}</text>
            </g>
          );
        })}
        <text x={156} y={14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>from the particular and changing to the universal and eternal</text>
      </svg>
      <p style={{ fontSize: 15, margin: "6px 0" }}>{RUNGS[r].text}</p>
      <figcaption className="viz-caption">
        In the Symposium, Socrates reports what the priestess Diotima taught him: love of beauty, rightly led, climbs from
        bodies to souls to institutions and knowledge, and ends in the vision of the Form of Beauty, the source of every
        beautiful thing&rsquo;s beauty. Each rung is not abandoned but seen as a share in the next.
      </figcaption>
    </figure>
  );
}
