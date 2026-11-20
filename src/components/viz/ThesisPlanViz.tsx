"use client";

import { useState } from "react";

/** Dividing 15,000 words into chapters, and the time a first draft takes at a steady pace. */
export function ThesisPlanViz() {
  const [n, setN] = useState(4);
  const [pace, setPace] = useState(1500);
  const total = 15000;
  const frame = 1500;
  const body = Math.round((total - 2 * frame) / n);
  const chapters = [{ name: "Introduction", w: frame }, ...Array.from({ length: n }, (_, i) => ({ name: `Chapter ${i + 1}`, w: body })), { name: "Conclusion", w: frame }];
  const weeks = Math.ceil(total / pace);
  let x = 20;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>main chapters = {n} <input type="range" min={3} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="chapters" /></label>
        <label>words drafted per week = {pace.toLocaleString("en-IN")} <input type="range" min={500} max={3000} step={250} value={pace} onChange={(e) => setPace(Number(e.target.value))} aria-label="pace" /></label>
      </div>
      <svg viewBox="0 0 540 80" role="img" aria-label="The thesis divided into chapters" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {chapters.map((c, i) => {
          const w = (c.w / total) * 500;
          const el = (
            <g key={c.name}>
              <rect x={x} y={10} width={w - 3} height={34} rx={4} style={{ fill: i === 0 || i === chapters.length - 1 ? "var(--bg-subtle)" : "var(--accent-soft)", stroke: "var(--accent)" }} />
              <text x={x + w / 2} y={60} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i === 0 ? "intro" : i === chapters.length - 1 ? "concl." : `ch. ${i}`}</text>
              <text x={x + w / 2} y={74} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{c.w.toLocaleString("en-IN")}</text>
            </g>
          );
          x += w;
          return el;
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Each main chapter: about {body.toLocaleString("en-IN")} words. A first draft takes {weeks} weeks at this pace; allow as long again for revision.
      </p>
      <figcaption className="viz-caption">
        Each main chapter should do one job in the overall argument, and the introduction should say what each job is. A
        steady weekly pace beats bursts: a thesis is finished by many ordinary weeks, not a few heroic ones.
      </figcaption>
    </figure>
  );
}
