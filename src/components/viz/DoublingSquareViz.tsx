"use client";

import { useState } from "react";

type Stage = "start" | "four" | "three" | "diagonal";
const U = 60, PAD = 20, S = 4 * U + 2 * PAD;
const px = (x: number) => PAD + x * U;
const py = (y: number) => PAD + (4 - y) * U;

const STAGES: { k: Stage; label: string; side: string; area: string; text: string }[] = [
  { k: "start", label: "the square", side: "2", area: "4", text: "Socrates draws a square with sides of 2 feet. Its area is 4 square feet. What is the side of a square with double the area, 8?" },
  { k: "four", label: "double the side", side: "4", area: "16", text: "The boy says confidently: double the side. But a side of 4 gives four copies of the original square, an area of 16, not 8. He thought he knew, and he was wrong." },
  { k: "three", label: "try 3", side: "3", area: "9", text: "Then the side must be between 2 and 4, so 3? That gives 9, still too big. Now the boy admits he does not know. Socrates says he is better off: he will now want to find out." },
  { k: "diagonal", label: "use the diagonal", side: "the diagonal of the original", area: "8", text: "Draw the diagonals of the four small squares. They cut each small square in half, so the tilted square inside has area 4 × 2 = 8. The required side is the diagonal of the original square. The boy saw this by answering questions, without being told." },
];

/** The slave boy's geometry lesson in the Meno: doubling the square. */
export function DoublingSquareViz() {
  const [k, setK] = useState<Stage>("start");
  const st = STAGES.find((s) => s.k === k)!;
  const grid = [0, 1, 2, 3, 4];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Stage of the lesson">
        {STAGES.map((s) => (
          <button key={s.k} type="button" className={s.k === k ? "seg is-on" : "seg"} aria-pressed={s.k === k} onClick={() => setK(s.k)}>{s.label}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label={`Square with side ${st.side} and area ${st.area}`} style={{ width: "100%", maxWidth: 360, display: "block", margin: "12px auto 0" }}>
        {grid.map((i) => (
          <g key={i}>
            <line x1={px(i)} y1={py(0)} x2={px(i)} y2={py(4)} className="plot-grid" />
            <line x1={px(0)} y1={py(i)} x2={px(4)} y2={py(i)} className="plot-grid" />
          </g>
        ))}
        {k === "four" && <rect x={px(0)} y={py(4)} width={4 * U} height={4 * U} style={{ fill: "color-mix(in srgb, var(--danger) 18%, transparent)", stroke: "var(--danger)", strokeWidth: 2.5 }} />}
        {k === "three" && <rect x={px(0)} y={py(3)} width={3 * U} height={3 * U} style={{ fill: "color-mix(in srgb, var(--danger) 18%, transparent)", stroke: "var(--danger)", strokeWidth: 2.5 }} />}
        <rect x={px(0)} y={py(2)} width={2 * U} height={2 * U} style={{ fill: "var(--overlay)", stroke: "var(--text)", strokeWidth: 2.5 }} />
        {k === "diagonal" && (
          <>
            {[[0, 0], [2, 0], [0, 2], [2, 2]].map(([x, y]) => (
              <rect key={`${x}${y}`} x={px(x)} y={py(y + 2)} width={2 * U} height={2 * U} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
            ))}
            <polygon points={[[2, 0], [4, 2], [2, 4], [0, 2]].map(([x, y]) => `${px(x)},${py(y)}`).join(" ")}
              style={{ fill: "color-mix(in srgb, var(--accent) 25%, transparent)", stroke: "var(--accent)", strokeWidth: 3 }} />
          </>
        )}
      </svg>
      <p className="mono-meta" style={{ textAlign: "center", margin: "8px 0 0" }}>side: {st.side}; area: {st.area}; target area: 8</p>
      <figcaption className="viz-caption" aria-live="polite">{st.text}</figcaption>
    </figure>
  );
}
