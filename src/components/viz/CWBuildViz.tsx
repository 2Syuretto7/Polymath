"use client";

import { useState } from "react";

type Sp = { name: string; cells: [number, number, number]; word: string[]; pi: string };
const SPACES: Sp[] = [
  { name: "circle", cells: [1, 1, 0], word: [], pi: "⟨a⟩ ≅ ℤ" },
  { name: "sphere", cells: [1, 0, 1], word: [], pi: "trivial" },
  { name: "torus", cells: [1, 2, 1], word: ["a", "b", "a⁻¹", "b⁻¹"], pi: "⟨a, b | aba⁻¹b⁻¹⟩ ≅ ℤ²" },
  { name: "projective plane", cells: [1, 1, 1], word: ["a", "a"], pi: "⟨a | a²⟩ ≅ ℤ/2" },
  { name: "Klein bottle", cells: [1, 2, 1], word: ["a", "b", "a", "b⁻¹"], pi: "⟨a, b | abab⁻¹⟩" },
  { name: "genus 2 surface", cells: [1, 4, 1], word: ["a", "b", "a⁻¹", "b⁻¹", "c", "d", "c⁻¹", "d⁻¹"], pi: "⟨a, b, c, d | aba⁻¹b⁻¹cdc⁻¹d⁻¹⟩" },
];
const LET = ["a", "b", "c", "d"];
const COL: Record<string, string> = { a: "var(--accent)", b: "var(--success)", c: "var(--danger)", d: "var(--text-muted)" };

/** Building spaces cell by cell: a point, then loops, then a disc glued along a word in the loops. */
export function CWBuildViz() {
  const [k, setK] = useState(2);
  const [stage, setStage] = useState(2);
  const S = SPACES[k];
  const chi = S.cells[0] - S.cells[1] + S.cells[2];
  const n1 = S.cells[1];
  const cx = 130, cy = 100;
  const sides = Math.max(S.word.length, 2);
  const R = 70, px = 380, py = 100;
  const vert = (i: number) => [px + R * Math.cos(-Math.PI / 2 + (2 * Math.PI * i) / sides), py + R * Math.sin(-Math.PI / 2 + (2 * Math.PI * i) / sides)];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space">
        {SPACES.map((s, i) => <button key={s.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="skeleton" style={{ marginTop: 6 }}>
        {[0, 1, 2].map((j) => <button key={j} type="button" aria-pressed={stage === j} className={stage === j ? "seg is-on" : "seg"} onClick={() => setStage(j)}>{j}-skeleton</button>)}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="The skeleta of a CW complex" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={cx} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1-skeleton: loops at one point</text>
        {stage >= 1 && Array.from({ length: n1 }, (_, i) => {
          const ang = (2 * Math.PI * i) / n1 - Math.PI / 2;
          const ex = cx + 50 * Math.cos(ang), ey = cy + 50 * Math.sin(ang);
          return (
            <g key={i}>
              <ellipse cx={(cx + ex) / 2} cy={(cy + ey) / 2} rx={30} ry={14} transform={`rotate(${(ang * 180) / Math.PI} ${(cx + ex) / 2} ${(cy + ey) / 2})`} style={{ fill: "none", stroke: COL[LET[i]], strokeWidth: 2.5 }} />
              <text x={cx + 72 * Math.cos(ang)} y={cy + 72 * Math.sin(ang) + 4} textAnchor="middle" style={{ fill: COL[LET[i]], fontSize: 13, fontWeight: 700 }}>{LET[i]}</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={5} style={{ fill: "var(--text)" }} />
        <text x={px} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>2-cell and its attaching word</text>
        {stage === 2 && S.cells[2] === 1 && S.word.length === 2 && (
          <g>
            <circle cx={px} cy={py} r={R} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
            <path d={`M${px},${py - R} A${R},${R} 0 0 1 ${px},${py + R}`} style={{ fill: "none", stroke: COL.a, strokeWidth: 3 }} />
            <path d={`M${px},${py + R} A${R},${R} 0 0 1 ${px},${py - R}`} style={{ fill: "none", stroke: COL.a, strokeWidth: 3 }} />
            <text x={px + R + 14} y={py + 4} textAnchor="middle" style={{ fill: COL.a, fontSize: 13, fontWeight: 700 }}>a</text>
            <text x={px - R - 14} y={py + 4} textAnchor="middle" style={{ fill: COL.a, fontSize: 13, fontWeight: 700 }}>a</text>
            <text x={px} y={py + R + 22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>both halves go round a, the same way</text>
          </g>
        )}
        {stage === 2 && S.cells[2] === 1 && S.word.length !== 2 && (S.word.length ? (
          <g>
            <polygon points={Array.from({ length: sides }, (_, i) => vert(i).join(",")).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
            {S.word.map((w, i) => {
              const [x1, y1] = vert(i), [x2, y2] = vert(i + 1);
              const base = w[0];
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: COL[base], strokeWidth: 3 }} />
                  <text x={(x1 + x2) / 2 + ((x1 + x2) / 2 - px) * 0.25} y={(y1 + y2) / 2 + ((y1 + y2) / 2 - py) * 0.25 + 4} textAnchor="middle" style={{ fill: COL[base], fontSize: 13, fontWeight: 700 }}>{w}</text>
                </g>
              );
            })}
          </g>
        ) : (
          <g>
            <circle cx={px} cy={py} r={R} style={{ fill: "var(--accent-soft)", stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={px} y={py + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>whole boundary to the point</text>
          </g>
        ))}
        {stage === 2 && S.cells[2] === 0 && <text x={px} y={py} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 12 }}>no 2-cells</text>}
        {stage < 2 && <text x={px} y={py} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 12 }}>not yet attached</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Cells in each dimension: {S.cells.join(", ")}. Euler characteristic {S.cells[0]} − {S.cells[1]} + {S.cells[2]} = {chi}. Fundamental group {S.pi}.
      </p>
      <figcaption className="viz-caption">
        A CW complex is built by attaching cells of increasing dimension, each along its boundary. The 1-skeleton here is a
        wedge of circles; the 2-cell is a polygon whose edges are glued to the loops in the order of its word, so the word
        becomes a relation in the fundamental group.
      </figcaption>
    </figure>
  );
}
