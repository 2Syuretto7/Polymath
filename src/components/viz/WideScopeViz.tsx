"use client";

import { useState } from "react";

/** Whether the state (believes she ought to φ, intends to φ) satisfies the enkratic requirement, read wide. */
export const wideOk = (B: boolean, I: boolean) => !B || I;

/** The single changes that bring a state into line: under the wide reading either drop the belief or form the intention; under the narrow reading only the intention will do. */
export function fixes(B: boolean, I: boolean, wide: boolean) {
  if (wideOk(B, I)) return [] as string[];
  return wide ? ["give up the belief", "form the intention"] : ["form the intention"];
}

/** Wide-scope and narrow-scope readings of the requirement to intend what you believe you ought to do. */
export function WideScopeViz() {
  const [B, setB] = useState(true);
  const [I, setI] = useState(false);
  const [wide, setWide] = useState(true);
  const f = fixes(B, I, wide);
  const states: [boolean, boolean][] = [[false, false], [false, true], [true, false], [true, true]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="scope">
        <button type="button" aria-pressed={wide} className={wide ? "seg is-on" : "seg"} onClick={() => setWide(true)}>Wide scope</button>
        <button type="button" aria-pressed={!wide} className={!wide ? "seg is-on" : "seg"} onClick={() => setWide(false)}>Narrow scope</button>
      </div>
      <div className="viz-controls">
        <label><input type="checkbox" checked={B} onChange={() => setB(!B)} /> Ravi believes he ought to visit his grandmother</label>
        <label><input type="checkbox" checked={I} onChange={() => setI(!I)} /> Ravi intends to visit her</label>
      </div>
      <svg viewBox="0 0 540 120" role="img" aria-label="The four combinations of belief and intention" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {states.map(([b, i], k) => {
          const ok = wideOk(b, i), cur = b === B && i === I;
          const x = 14 + k * 130;
          return (
            <g key={k}>
              <rect x={x} y={10} width={120} height={84} rx={6} style={{ fill: ok ? "var(--success-soft)" : "var(--danger-soft)", stroke: cur ? "var(--accent)" : ok ? "var(--success)" : "var(--danger)", strokeWidth: cur ? 3 : 1 }} />
              <text x={x + 60} y={34} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>belief: {b ? "yes" : "no"}</text>
              <text x={x + 60} y={52} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>intention: {i ? "yes" : "no"}</text>
              <text x={x + 60} y={78} textAnchor="middle" style={{ fill: ok ? "var(--success)" : "var(--danger)", fontSize: 11, fontWeight: 700 }}>{ok ? "coherent" : "akratic"}</text>
            </g>
          );
        })}
        <text x={270} y={114} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>outlined: Ravi&rsquo;s present state</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {f.length === 0
          ? wide
            ? "Ravi satisfies the requirement: it only forbids believing he ought to visit while not intending to."
            : B
              ? "The requirement applies, since he has the belief, and he meets it by intending to visit."
              : "Without the belief, the narrow requirement says nothing to him."
          : `Ways to comply by one change: ${f.join(" or ")} (${f.length}).`}
      </p>
      <figcaption className="viz-caption">
        Wide scope: rationality requires that (if you believe you ought to φ, you intend to φ). Narrow scope: if you believe
        you ought to φ, rationality requires that you intend to φ. Only the narrow reading lets a belief, however
        mistaken, generate a requirement to intend; the wide reading leaves two ways back to coherence.
      </figcaption>
    </figure>
  );
}
