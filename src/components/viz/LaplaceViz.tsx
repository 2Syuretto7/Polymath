"use client";

import { useState } from "react";

const W = 41, H = 22, C = 13, X0 = (620 - W * C) / 2, Y0 = 12;

function run(first: boolean[]) {
  const rows = [first];
  for (let t = 1; t < H; t++) {
    const p = rows[t - 1];
    // Rule 30: new = left XOR (centre OR right)
    rows.push(p.map((_, i) => p[(i - 1 + W) % W] !== (p[i] || p[(i + 1) % W])));
  }
  return rows;
}

const START = Array.from({ length: W }, (_, i) => i === 20);
const BASE = run(START);

/** A tiny deterministic world: each row fixes the next by one rule. Change one cell at the start and compare futures. */
export function LaplaceViz() {
  const [first, setFirst] = useState<boolean[]>(START);
  const [replays, setReplays] = useState(0);
  const rows = run(first);
  const changed = first.some((v, i) => v !== START[i]);
  const diffLast = rows[H - 1].filter((v, i) => v !== BASE[H - 1][i]).length;

  const flip = (i: number) => setFirst(first.map((v, j) => (j === i ? !v : v)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 620 ${Y0 * 2 + H * C + 18}`} role="img" aria-label="A grid of cells evolving row by row under a fixed rule">
        {rows.map((row, t) =>
          row.map((on, i) => {
            const differs = on !== BASE[t][i];
            return (
              <rect
                key={`${t}-${i}`}
                x={X0 + i * C}
                y={Y0 + t * C}
                width={C}
                height={C}
                className={on ? "viz-cell is-on" : "viz-cell"}
                style={differs ? { fill: on ? "color-mix(in srgb, var(--danger) 60%, transparent)" : "color-mix(in srgb, var(--danger) 18%, transparent)", stroke: "var(--danger)" } : undefined}
                onClick={t === 0 ? () => flip(i) : undefined}
                cursor={t === 0 ? "pointer" : undefined}
              />
            );
          }),
        )}
        <text x={X0} y={Y0 + H * C + 15} className="plot-tick">the present: click any cell in the top row</text>
        <text x={X0 + W * C} y={Y0 + H * C + 15} textAnchor="end" className="plot-tick">time runs downwards</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setReplays(replays + 1)}>Run the world again</button>
        <button type="button" className="btn" onClick={() => flip(27)}>Nudge one cell</button>
        <button type="button" className="btn" onClick={() => { setFirst(START); setReplays(0); }} disabled={!changed && replays === 0}>Reset</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Each cell is fixed by the three cells above it, by one unchanging rule.{" "}
        {replays > 0 && <>You have rerun this world {replays} {replays === 1 ? "time" : "times"}, and the history came out identical each time. </>}
        {changed
          ? <>Your change to the start is the only difference, yet by the bottom row {diffLast} of {W} cells differ from the original history (in red). The future is fixed by the present, but tiny differences grow.</>
          : <>Given the top row, every later row is settled. An intelligence that knew the rule and the top row could read off the whole future.</>}
      </figcaption>
    </figure>
  );
}
