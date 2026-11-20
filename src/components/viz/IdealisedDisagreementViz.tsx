"use client";

import { useState } from "react";

/** Idealising conditions a moral realist might appeal to. */
export const CONDITIONS = [
  { key: "facts", label: "share the non-moral facts" },
  { key: "interest", label: "set aside self-interest" },
  { key: "context", label: "share circumstances" },
];

/** Illustrative disagreements, each with the conditions that, on one possible diagnosis, would resolve it. */
export const CASES = [
  { label: "Whether to punish suspected witches", needs: ["facts"] },
  { label: "Whether slavery is permissible", needs: ["facts", "interest"] },
  { label: "How animals may be farmed", needs: ["facts", "interest"] },
  { label: "Eating or burning the dead (Herodotus)", needs: ["context"] },
  { label: "Lying to save a life", needs: null },
  { label: "Partiality to one’s own children", needs: null },
];

/** Cases still in dispute when the given conditions hold. */
export function remaining(on: string[]) {
  return CASES.filter((c) => c.needs === null || !c.needs.every((n) => on.includes(n)));
}

/** Which disagreements survive idealisation, on one possible diagnosis of their sources. */
export function IdealisedDisagreementViz() {
  const [on, setOn] = useState<string[]>([]);
  const toggle = (k: string) => setOn((o) => (o.includes(k) ? o.filter((x) => x !== k) : [...o, k]));
  const rest = remaining(on);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="idealising conditions">
        {CONDITIONS.map((c) => <button key={c.key} type="button" aria-pressed={on.includes(c.key)} className={on.includes(c.key) ? "seg is-on" : "seg"} onClick={() => toggle(c.key)}>{c.label}</button>)}
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="Moral disagreements that remain under the chosen idealising conditions" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {CASES.map((c, i) => {
          const live = rest.includes(c);
          const y = 10 + i * 31;
          return (
            <g key={c.label}>
              <rect x={10} y={y} width={520} height={26} rx={4} style={{ fill: live ? "var(--danger-soft)" : "var(--success-soft)", stroke: live ? "var(--danger)" : "var(--success)" }} />
              <text x={20} y={y + 17} style={{ fill: "var(--text)", fontSize: 12 }}>{c.label}</text>
              <text x={520} y={y + 17} textAnchor="end" style={{ fill: live ? "var(--danger)" : "var(--success)", fontSize: 11 }}>
                {live ? (c.needs === null ? "persists: fundamental?" : "still disputed") : "resolved"}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {rest.length} of {CASES.length} disagreements remain{on.length ? ` when people ${on.map((k) => CONDITIONS.find((c) => c.key === k)!.label).join(" and ")}` : ""}.
      </p>
      <figcaption className="viz-caption">
        The realist&rsquo;s reply to the argument from disagreement is that much moral disagreement comes from disputes
        over non-moral facts, from self-interest or from different circumstances, and would vanish under ideal conditions.
        The diagnoses here are illustrative and contestable. The anti-realist asks whether any disagreements would remain,
        and what follows if they would.
      </figcaption>
    </figure>
  );
}
