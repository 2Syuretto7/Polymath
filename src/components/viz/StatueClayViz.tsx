"use client";

import { useState } from "react";

const T = ["Monday", "Tuesday", "Wednesday", "Thursday"];

/** The statue and the clay: Lumpl and Goliath, with and without Gibbard’s simultaneous creation and destruction. */
export function StatueClayViz() {
  const [gib, setGib] = useState(false);
  // existence by day: lump, statue
  const lump = gib ? [false, true, true, false] : [true, true, true, true];
  const statue = gib ? [false, true, true, false] : [false, true, true, false];
  const events = gib
    ? ["", "two halves of clay are joined: the statue and the lump both begin", "", "the statue is burnt to ash: both end"]
    : ["a lump of clay is bought", "it is sculpted into a statue of Goliath", "", "the statue is squashed into a ball; the clay remains"];
  const same = lump.every((x, i) => x === statue[i]);
  const W = 560, H = 120, x = (i: number) => 20 + i * 120;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Story">
        {["ordinary story", "Gibbard’s story"].map((l, i) => <button key={l} type="button" aria-pressed={gib === (i === 1)} className={gib === (i === 1) ? "seg is-on" : "seg"} onClick={() => setGib(i === 1)}>{l}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="When the lump and the statue exist" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={4} y={44} style={{ fill: "var(--text)", fontSize: 12 }}>the lump</text>
        <text x={4} y={84} style={{ fill: "var(--text)", fontSize: 12 }}>the statue</text>
        {T.map((d, i) => (
          <g key={d}>
            <text x={x(i) + 120} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{d}</text>
            <rect x={x(i) + 66} y={30} width={104} height={22} rx={4} style={{ fill: lump[i] ? "var(--accent)" : "none", fillOpacity: 0.6, stroke: "var(--border)" }} />
            <rect x={x(i) + 66} y={70} width={104} height={22} rx={4} style={{ fill: statue[i] ? "var(--accent)" : "none", fillOpacity: 0.9, stroke: "var(--border)" }} />
          </g>
        ))}
      </svg>
      <div style={{ display: "grid", gap: 4, fontSize: 14 }}>
        {T.map((d, i) => events[i] && <div key={d}><strong>{d}:</strong> {events[i]}.</div>)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, marginTop: 10, fontSize: 14 }}>
        <div>same times of existence: <strong>{same ? "yes" : "no"}</strong></div>
        <div>the lump could survive being squashed: <strong>yes</strong></div>
        <div>the statue could survive being squashed: <strong>no</strong></div>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {same
          ? "The two share every part and every moment of existence, yet still seem to differ in what could have happened to them. By Leibniz’s law, things with different properties are different, so the modal properties alone seem to make them two."
          : "The lump existed on Monday and Thursday when the statue did not, so they differ in their history. By Leibniz’s law they are two things, in the same place, made of the same clay."}
      </p>
      <figcaption className="viz-caption">
        Allan Gibbard&rsquo;s version removes the temporal difference: he called the lump Lumpl and the statue Goliath. Then four-dimensionalists can say they are one worm, and the remaining puzzle is about modal properties alone, which counterpart theory makes depend on how the thing is described.
      </figcaption>
    </figure>
  );
}
