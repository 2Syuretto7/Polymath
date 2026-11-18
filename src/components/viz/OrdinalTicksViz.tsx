"use client";

import { useState } from "react";

const ORDS = ["ω", "ω + 1", "ω + 2", "ω · 2", "1 + ω", "ω · 3"];

/** Ordinals as well-ordered sequences: ω, ω + 1, ω · 2, and why 1 + ω = ω. */
export function OrdinalTicksViz() {
  const [o, setO] = useState(1);
  const name = ORDS[o];
  const blocks = name === "ω · 2" ? 2 : name === "ω · 3" ? 3 : 1;
  const extra = name === "ω + 1" ? 1 : name === "ω + 2" ? 2 : 0;
  const pre = name === "1 + ω" ? 1 : 0;
  const W = 520, x0 = 20, x1 = 480;
  const bw = (x1 - x0 - extra * 30) / blocks;
  const ticks: { x: number; lab: string; tone: string }[] = [];
  for (let b = 0; b < blocks; b++) {
    const bx = x0 + b * bw;
    for (let k = 0; k < 18; k++) {
      const x = bx + bw * 0.92 * (1 - Math.pow(0.78, k));
      const lab = b === 0 ? (k < 4 ? String(k) : "") : k === 0 ? (b === 1 ? "ω" : "ω·2") : "";
      ticks.push({ x, lab, tone: pre && b === 0 && k === 0 ? "var(--danger)" : "var(--accent)" });
    }
  }
  for (let e = 0; e < extra; e++) ticks.push({ x: x1 - (extra - 1 - e) * 30, lab: e === 0 ? "ω" : "ω+1", tone: "var(--danger)" });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="ordinal">
        {ORDS.map((s, i) => <button key={s} type="button" aria-pressed={o === i} className={o === i ? "seg is-on" : "seg"} onClick={() => setO(i)}>{s}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} 90`} role="img" aria-label={`The order type ${name}`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={x0} y1={40} x2={x1 + 10} y2={40} style={{ stroke: "var(--border)" }} />
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={t.x} y1={30} x2={t.x} y2={50} style={{ stroke: t.tone, strokeWidth: 2 }} />
            {t.lab && <text x={t.x} y={68} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t.lab}</text>}
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {name === "1 + ω" ? "One point, then a copy of ω. The new point simply becomes the first of infinitely many: the order type is ω again." :
          extra ? `A copy of ω, then ${extra} more ${extra === 1 ? "point" : "points"} after all of it. There is now a largest element: this is not ω.` :
          blocks > 1 ? `${blocks} copies of ω, one after another. Each copy after the first starts at a limit ordinal.` :
          "The natural numbers in their usual order: every element has a successor, and there is no last one."}
      </p>
      <figcaption className="viz-caption">
        Each picture is a well-order: every non-empty subset has a least element. Ordinals measure such orders. Putting a
        point after ω gives something new, ω + 1; putting a point before ω does not, since 1 + ω = ω. So ordinal addition is
        not commutative.
      </figcaption>
    </figure>
  );
}
