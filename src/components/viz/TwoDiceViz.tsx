"use client";

import { useState } from "react";

type Ev = { name: string; test: (a: number, b: number) => boolean };

const EVENTS: Ev[] = [
  { name: "the sum is 7", test: (a, b) => a + b === 7 },
  { name: "the sum is 2", test: (a, b) => a + b === 2 },
  { name: "a double", test: (a, b) => a === b },
  { name: "at least one six", test: (a, b) => a === 6 || b === 6 },
  { name: "the first die beats the second", test: (a, b) => a > b },
];

function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : a; }

/** The 36 equally likely outcomes of rolling two dice; pick an event and see which outcomes it contains. */
export function TwoDiceViz() {
  const [k, setK] = useState(0);
  const ev = EVENTS[k];
  let count = 0;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (ev.test(a, b)) count++;
  const g = gcd(count, 36);
  const C = 44;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Event" style={{ flexWrap: "wrap" }}>
        {EVENTS.map((e, i) => (
          <button key={e.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{e.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${C * 6 + 40} ${C * 6 + 40}`} role="img" aria-label={`${count} of the 36 outcomes are in the event ${ev.name}.`} style={{ width: "100%", maxWidth: 340, display: "block", margin: "12px auto 0" }}>
        {[1, 2, 3, 4, 5, 6].map((v) => (
          <g key={v}>
            <text x={40 + (v - 0.5) * C} y={22} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>{v}</text>
            <text x={20} y={40 + (v - 0.5) * C + 4} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>{v}</text>
          </g>
        ))}
        {[1, 2, 3, 4, 5, 6].map((a) => [1, 2, 3, 4, 5, 6].map((b) => {
          const on = ev.test(a, b);
          return (
            <g key={`${a}${b}`}>
              <rect x={40 + (b - 1) * C + 2} y={40 + (a - 1) * C + 2} width={C - 4} height={C - 4} rx={5}
                style={{ fill: on ? "var(--accent)" : "var(--bg-subtle)", stroke: "var(--border)" }} />
              <text x={40 + (b - 0.5) * C} y={40 + (a - 0.5) * C + 4} textAnchor="middle"
                style={{ fontSize: 11, fontFamily: "var(--font-mono)", fill: on ? "var(--bg)" : "var(--text-faint)" }}>{a},{b}</text>
            </g>
          );
        }))}
      </svg>
      <p className="mono-meta" style={{ textAlign: "center", textTransform: "none", margin: "8px 0 0" }}>
        rows: first die, columns: second die
      </p>
      <figcaption className="viz-caption" aria-live="polite">
        The event &ldquo;{ev.name}&rdquo; contains {count} of the 36 equally likely outcomes, so its probability is {count}/36
        {g > 1 ? ` = ${count / g}/${36 / g}` : ""}.
      </figcaption>
    </figure>
  );
}
