"use client";

import { useState } from "react";

/** Worlds: 0 is the root, 1 and 2 lie above it. Above(w) lists w and every world reachable from it. */
const ABOVE = [[0, 1, 2], [1], [2]];
type F = (w: number) => boolean;

/** A three-world Kripke model for intuitionistic logic: excluded middle and double negation elimination can fail. */
export function KripkeForceViz() {
  const [p, setP] = useState<boolean[]>([false, true, false]);
  const toggle = (w: number) => {
    if (w === 0) setP(p[0] ? [false, p[1], p[2]] : [true, true, true]);
    else if (!p[0]) setP(p.map((v, i) => (i === w ? !v : v)));
  };
  const P: F = (w) => p[w];
  const not = (a: F): F => (w) => ABOVE[w].every((v) => !a(v));
  const or = (a: F, b: F): F => (w) => a(w) || b(w);
  const imp = (a: F, b: F): F => (w) => ABOVE[w].every((v) => !a(v) || b(v));
  const rows: { s: string; f: F }[] = [
    { s: "p", f: P },
    { s: "¬p", f: not(P) },
    { s: "p ∨ ¬p", f: or(P, not(P)) },
    { s: "¬¬p", f: not(not(P)) },
    { s: "¬¬p → p", f: imp(not(not(P)), P) },
    { s: "¬p ∨ ¬¬p", f: or(not(P), not(not(P))) },
    { s: "¬¬(p ∨ ¬p)", f: not(not(or(P, not(P)))) },
  ];
  const pos = [[150, 170], [80, 50], [220, 50]];
  const cell = { border: "1px solid var(--border)", padding: "3px 10px", textAlign: "center" as const };
  return (
    <figure className="viz">
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start" }}>
        <svg viewBox="0 0 300 210" role="img" aria-label="Three worlds: a root and two later worlds above it" style={{ width: 300, maxWidth: "100%", display: "block" }}>
          {[1, 2].map((w) => (
            <line key={w} x1={pos[0][0]} y1={pos[0][1] - 24} x2={pos[w][0]} y2={pos[w][1] + 24} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
          ))}
          {[0, 1, 2].map((w) => (
            <g key={w} onClick={() => toggle(w)} style={{ cursor: "pointer" }} role="button" aria-label={`toggle p at world ${w}`}>
              <circle cx={pos[w][0]} cy={pos[w][1]} r={24} style={{ fill: p[w] ? "var(--accent)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
              <text x={pos[w][0]} y={pos[w][1] + 5} textAnchor="middle" style={{ fill: p[w] ? "var(--bg)" : "var(--text)", fontSize: 13, fontWeight: 700 }}>w{["₀", "₁", "₂"][w]}</text>
            </g>
          ))}
          <text x={10} y={205} style={{ fill: "var(--text-muted)", fontSize: 11 }}>filled: p has been established there</text>
        </svg>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>formula</th><th style={cell}>w₀</th><th style={cell}>w₁</th><th style={cell}>w₂</th></tr>
            {rows.map((r) => (
              <tr key={r.s}>
                <td style={{ ...cell, textAlign: "left" }}>{r.s}</td>
                {[0, 1, 2].map((w) => <td key={w} style={{ ...cell, background: r.f(w) ? "var(--accent-soft)" : "transparent", fontWeight: r.f(w) ? 700 : 400 }}>{r.f(w) ? "⊩" : "⊮"}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8, fontWeight: 700 }}>
        {or(P, not(P))(0) ? "p ∨ ¬p is forced at the root" : "p ∨ ¬p is not forced at the root: excluded middle fails"}
      </div>
      <figcaption className="viz-caption">
        Click a world to change whether p holds there; truth persists upwards, so p at w₀ brings p at w₁ and w₂. A world
        forces ¬A when no world above it forces A, and A → B when every world above it that forces A also forces B. With p at
        w₁ only, the root forces neither p nor ¬p, since p may still be established. Put p at both w₁ and w₂: the root forces
        ¬¬p but not p. Yet ¬¬(p ∨ ¬p) is forced everywhere, in every model.
      </figcaption>
    </figure>
  );
}
