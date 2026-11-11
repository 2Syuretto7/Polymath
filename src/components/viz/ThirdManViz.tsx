"use client";

import { useState } from "react";

const PREMISES = [
  { key: "om", name: "One over many", text: "Whenever several things are large, there is one Form, the Large, by which they are all large." },
  { key: "sp", name: "Self-predication", text: "The Form of Large is itself large." },
  { key: "ni", name: "Non-identity", text: "Nothing is large by participating in itself, so the Form over a group is not a member of it." },
];
const MAX = 8;
const sub = (n: number) => String(n).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]).join("");

/** Run the third man regress from the Parmenides, switching each premise on or off to see which ones drive it. */
export function ThirdManViz() {
  const [on, setOn] = useState<Record<string, boolean>>({ om: true, sp: true, ni: true });
  const [step, setStep] = useState(0);

  const log: string[] = ["Start with three large things, a, b and c."];
  let forms = 0;
  let group = 0;
  let stop: string | null = null;
  for (let i = 1; i <= step && !stop; i++) {
    if (i % 2 === 1) {
      const members = ["a", "b", "c", ...Array.from({ length: group }, (_, j) => `L${sub(j + 1)}`)].join(", ");
      if (!on.om) { stop = "Without one over many, nothing requires a Form over the large things at all. There is no theory of Forms here, and no regress."; break; }
      if (forms > 0 && !on.ni) { stop = `Without non-identity, the Form over ${members} can be L${sub(forms)} itself: it is large by participating in itself. One Form, no regress.`; break; }
      forms++;
      log.push(`One over many: ${members} are all large, so there is a Form by which they are large. ${forms > 1 ? `By non-identity it is not L${sub(forms - 1)}, so call it L${sub(forms)}.` : `Call it L${sub(1)}.`}`);
    } else {
      if (!on.sp) { stop = `Without self-predication, L${sub(forms)} is not itself large, so it does not join the large things. One Form, no regress.`; break; }
      group = forms;
      log.push(`Self-predication: L${sub(forms)} is itself large, so it belongs with the large things.`);
    }
  }
  const endless = !stop && step >= MAX;
  const chips = ["a", "b", "c", ...Array.from({ length: forms }, (_, j) => `L${sub(j + 1)}`)];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        {PREMISES.map((p) => (
          <button key={p.key} type="button" className={on[p.key] ? "viz-chip is-on" : "viz-chip"} aria-pressed={on[p.key]}
            title={p.text} onClick={() => { setOn({ ...on, [p.key]: !on[p.key] }); setStep(0); }}>
            {p.name}: {on[p.key] ? "assumed" : "dropped"}
          </button>
        ))}
      </div>
      <ul style={{ margin: "10px 0 0", paddingLeft: 18, fontSize: 14, color: "var(--text-muted)" }}>
        {PREMISES.map((p) => <li key={p.key}><strong>{p.name}.</strong> {p.text}</li>)}
      </ul>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "14px 0" }} aria-label="Things counted so far">
        {chips.map((c, i) => (
          <span key={c} className="mono" style={{
            padding: "6px 12px", borderRadius: 8, border: "1px solid var(--border)",
            background: i >= 3 ? "var(--accent-soft)" : "transparent",
            color: i >= 3 ? "var(--accent)" : "var(--text)", fontWeight: i >= 3 ? 600 : 400,
          }}>{c}</span>
        ))}
      </div>
      <ol className="mono-meta" style={{ margin: 0, paddingLeft: 22, lineHeight: 1.6 }}>
        {log.map((l, i) => <li key={i}>{l}</li>)}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={!!stop || endless} onClick={() => setStep(step + 1)}>Next step</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {stop
          ?? (endless
            ? "And so on without end. Every new Form is large, so it joins a new group, which needs a new Form. Instead of one Form of Large there are infinitely many, contradicting the one over many itself, which promised a single Form."
            : step === 0
              ? "Press Next step to apply the premises one at a time. Then drop a premise and run it again."
              : `So far there ${forms === 1 ? "is 1 Form" : `are ${forms} Forms`} of Large.`)}
      </figcaption>
    </figure>
  );
}
