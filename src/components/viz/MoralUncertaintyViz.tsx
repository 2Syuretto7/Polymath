"use client";

import { useState } from "react";

/** Choiceworthiness of eating meat and of a vegetarian diet under two theories; the vegetarian diet is the zero point. */
export const T1 = { name: "Animal welfare matters greatly", meat: -100, veg: 0 };
export const T2 = { name: "Animals have little moral status", meat: 10, veg: 0 };

/** Expected choiceworthiness of each option given credence c in T1. */
export function expected(c: number) {
  return { meat: c * T1.meat + (1 - c) * T2.meat, veg: c * T1.veg + (1 - c) * T2.veg };
}

/** Maximising expected choiceworthiness against following one’s favourite theory. */
export function MoralUncertaintyViz() {
  const [c, setC] = useState(0.1);
  const e = expected(c);
  const mec = e.meat > e.veg ? "eat meat" : e.meat < e.veg ? "be vegetarian" : "either";
  const mft = c > 0.5 ? T1 : T2;
  const mftChoice = mft.meat > mft.veg ? "eat meat" : "be vegetarian";
  const px = (v: number) => 270 + v * 2.2;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>credence in the first theory = {Math.round(c * 100)}% <input type="range" min={0} max={1} step={0.05} value={c} onChange={(ev) => setC(Number(ev.target.value))} aria-label="credence" /></label>
      </div>
      <svg viewBox="0 0 540 130" role="img" aria-label="Choiceworthiness of eating meat under each theory and in expectation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={px(0)} y1={6} x2={px(0)} y2={110} style={{ stroke: "var(--border-strong)" }} />
        {[[`${T1.name} (${Math.round(c * 100)}%)`, T1.meat, 20], [`${T2.name} (${Math.round((1 - c) * 100)}%)`, T2.meat, 52], ["Expected choiceworthiness", e.meat, 84]].map(([lab, v, y]) => (
          <g key={lab as string}>
            <rect x={Math.min(px(0), px(v as number))} y={(y as number) - 10} width={Math.abs(px(v as number) - px(0))} height={18} style={{ fill: (v as number) < 0 ? "var(--danger)" : "var(--success)", opacity: lab === "Expected choiceworthiness" ? 1 : 0.6 }} />
            <text x={(v as number) < 0 ? px(0) + 6 : px(0) - 6} y={(y as number) + 3} textAnchor={(v as number) < 0 ? "start" : "end"} style={{ fill: "var(--text)", fontSize: 11 }}>{lab as string}: {String(Math.round((v as number) * 10) / 10).replace("-", "−")}</text>
          </g>
        ))}
        <text x={270} y={124} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>choiceworthiness of eating meat, with a vegetarian diet at 0</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Maximise expected choiceworthiness: {mec}. My Favourite Theory ({c > 0.5 ? "the first" : c < 0.5 ? "the second" : "a tie; the second"}): {mftChoice}.
      </p>
      <figcaption className="viz-caption">
        If you are unsure which moral theory is true, you might act on the one you find most plausible, or weigh each
        option by your credences, as in decisions under empirical uncertainty. Weighing lets a theory you think unlikely
        win when it says much more is at stake, but it assumes that the two theories&rsquo; scales can be compared.
      </figcaption>
    </figure>
  );
}
