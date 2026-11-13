"use client";

import { useState } from "react";

const PREMISES = [
  "RAIN",
  "RAIN → WET",
  "WET → SLIPPERY",
  "SLIPPERY → CAREFUL",
  "COLD ∧ RAIN",
  "SNOW → COLD",
];

const derive = (start: string[]) => {
  const have = new Set(start);
  const steps: { s: string; rule: string }[] = [];
  let changed = true;
  while (changed) {
    changed = false;
    for (const f of [...have]) {
      const m = f.match(/^(\w+) → (\w+)$/);
      if (m && have.has(m[1]) && !have.has(m[2])) { have.add(m[2]); steps.push({ s: m[2], rule: `from “${m[1]}” and “${f}”, by the shape A, A → B ⊢ B` }); changed = true; }
      const c = f.match(/^(\w+) ∧ (\w+)$/);
      if (c) for (const part of [c[1], c[2]]) if (!have.has(part)) { have.add(part); steps.push({ s: part, rule: `from “${f}”, by the shape A ∧ B ⊢ A, B` }); changed = true; }
    }
  }
  return steps;
};

/** A symbol-crunching inference engine: it applies rules by the shapes of strings alone, yet never derives a falsehood from truths. */
export function SymbolInferenceViz() {
  const [on, setOn] = useState<string[]>(["RAIN → WET", "WET → SLIPPERY"]);
  const toggle = (p: string) => setOn(on.includes(p) ? on.filter((x) => x !== p) : [...on, p]);
  const steps = derive(on);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 6px" }}>Choose which strings are stored in the machine&rsquo;s &ldquo;belief box&rdquo;.</p>
      <div className="viz-controls" style={{ marginTop: 0 }}>
        {PREMISES.map((p) => <button key={p} type="button" aria-pressed={on.includes(p)} className={on.includes(p) ? "viz-chip is-on" : "viz-chip"} onClick={() => toggle(p)}>{p}</button>)}
      </div>
      <div style={{ display: "grid", gap: 4, marginTop: 10 }}>
        <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted)" }}>Strings the machine writes into the box:</p>
        {steps.length ? steps.map((t) => (
          <div key={t.s} style={{ fontSize: 14 }}><span className="mono" style={{ fontWeight: 700 }}>{t.s}</span> <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{t.rule}</span></div>
        )) : <div style={{ fontSize: 14, color: "var(--text-muted)" }}>nothing yet: no rule matches</div>}
      </div>
      <figcaption className="viz-caption">
        The machine never looks at what RAIN or WET mean; it only matches the shapes of strings. Yet if the stored strings are true, so is every string it writes. Fodor saw this as the key to the computational theory of mind: thinking is the manipulation of symbols by their form, arranged so that form tracks meaning.
      </figcaption>
    </figure>
  );
}
