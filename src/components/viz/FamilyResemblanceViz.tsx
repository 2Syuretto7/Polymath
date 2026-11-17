"use client";

import { useState } from "react";

const FEATURES = ["competition", "skill", "luck", "amusement", "ball", "cards", "board", "teams"];
const GAMES: { name: string; has: string[] }[] = [
  { name: "chess", has: ["competition", "skill", "amusement", "board"] },
  { name: "football", has: ["competition", "skill", "luck", "amusement", "ball", "teams"] },
  { name: "patience", has: ["skill", "luck", "amusement", "cards"] },
  { name: "ring-a-ring o’ roses", has: ["amusement"] },
  { name: "tennis", has: ["competition", "skill", "amusement", "ball"] },
  { name: "poker", has: ["competition", "skill", "luck", "amusement", "cards"] },
  { name: "ball against a wall", has: ["skill", "amusement", "ball"] },
  { name: "marathon", has: ["competition", "skill"] },
];

/** Wittgenstein’s games: overlapping similarities, with no feature common to all. */
export function FamilyResemblanceViz() {
  const [sel, setSel] = useState<number[]>([0, 2, 5]);
  const toggle = (i: number) => setSel(sel.includes(i) ? sel.filter((j) => j !== i) : [...sel, i].sort((a, b) => a - b));
  const shared = FEATURES.filter((f) => sel.length > 0 && sel.every((i) => GAMES[i].has.includes(f)));
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>Click games to select them. Which features do the selected games share?</p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 13, minWidth: 520 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "4px 6px" }}>game</th>
              {FEATURES.map((f) => (
                <th key={f} style={{ padding: "4px 6px", fontWeight: shared.includes(f) ? 700 : 400, color: shared.includes(f) ? "var(--accent)" : "var(--text-muted)" }}>{f}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GAMES.map((g, i) => {
              const on = sel.includes(i);
              return (
                <tr key={g.name} onClick={() => toggle(i)} style={{ cursor: "pointer", background: on ? "var(--accent-soft)" : "transparent", borderTop: "1px solid var(--border)" }}>
                  <td style={{ padding: "4px 6px" }}>
                    <button type="button" aria-pressed={on} className="btn btn-ghost" style={{ padding: "2px 6px" }} onClick={(e) => { e.stopPropagation(); toggle(i); }}>{g.name}</button>
                  </td>
                  {FEATURES.map((f) => (
                    <td key={f} className="mono" style={{ textAlign: "center", padding: "4px 6px" }}>{g.has.includes(f) ? "yes" : ""}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSel(GAMES.map((_, i) => i))}>Select all games</button>
        <button type="button" className="btn btn-ghost" onClick={() => setSel([])}>Clear</button>
      </div>
      <div className="mono" style={{ fontSize: 14, fontWeight: 700 }}>
        {sel.length === 0 ? "no games selected" : `shared by all ${sel.length} selected: ${shared.length ? shared.join(", ") : "nothing"}`}
      </div>
      <figcaption className="viz-caption">
        &ldquo;Don&rsquo;t say: there must be something common, or they would not be called games, but look and see whether
        there is anything common to all&rdquo; (Investigations, §66). Small groups share a good deal, but the similarities
        criss-cross and overlap like the resemblances between members of a family, and nothing runs through the whole.
      </figcaption>
    </figure>
  );
}
