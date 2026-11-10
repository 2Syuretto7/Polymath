"use client";

import { useState } from "react";

const RULES: { q: string; a: string; qEn: string; aEn: string }[] = [
  { q: "你好吗？", a: "我很好，谢谢。", qEn: "How are you?", aEn: "I am well, thank you." },
  { q: "你会说中文吗？", a: "会，说得很好。", qEn: "Can you speak Chinese?", aEn: "Yes, very well." },
  { q: "你明白这些话吗？", a: "当然明白。", qEn: "Do you understand these words?", aEn: "Of course I understand." },
];

const STEPS = [
  "A slip of paper covered in squiggles comes in through the slot.",
  "The man inside, who knows no Chinese, searches the rulebook for a row whose left side has exactly these shapes.",
  "He copies the shapes from the right side of that row onto a new slip, stroke by stroke.",
  "He pushes the slip out. Outside, a Chinese speaker reads a sensible, fluent answer.",
];

/** Searle's Chinese room: following a rulebook of shapes produces fluent answers without understanding. */
export function ChineseRoomViz() {
  const [q, setQ] = useState(2);
  const [s, setS] = useState(0);
  const [meanings, setMeanings] = useState(false);
  const R = RULES[q];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        <span className="viz-stepper-label">Slip</span>
        {RULES.map((r, i) => (
          <button key={r.q} type="button" className={i === q ? "btn btn-primary" : "btn"} aria-pressed={i === q} onClick={() => { setQ(i); setS(0); }} lang="zh">{r.q}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <thead><tr><th>Rulebook: if you see these shapes</th><th>write these shapes</th></tr></thead>
        <tbody>
          {RULES.map((r, i) => (
            <tr key={r.q} style={s >= 1 && i === q ? { background: "var(--accent-soft)" } : undefined}>
              <td><span lang="zh" style={{ fontSize: 18 }}>{r.q}</span>{meanings && <span className="viz-verdict viz-verdict-info"> ({r.qEn})</span>}</td>
              <td><span lang="zh" style={{ fontSize: 18 }}>{r.a}</span>{meanings && <span className="viz-verdict viz-verdict-info"> ({r.aEn})</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "12px 0 0" }}>
        <span className="viz-stepper-label">Slip in: </span><span lang="zh" style={{ fontSize: 18 }}>{R.q}</span>
        <span className="viz-stepper-label" style={{ marginLeft: 24 }}>Slip out: </span>
        <span lang="zh" style={{ fontSize: 18 }}>{s >= 2 ? R.a : "…"}</span>
      </p>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setS(Math.max(0, s - 1))} disabled={s === 0}>Back</button>
        <button type="button" className="btn btn-primary" onClick={() => setS(Math.min(STEPS.length - 1, s + 1))} disabled={s === STEPS.length - 1}>Next step</button>
        <button type="button" className={meanings ? "btn btn-primary" : "btn"} aria-pressed={meanings} onClick={() => setMeanings(!meanings)}>{meanings ? "Hide meanings" : "Show meanings"}</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Step {s + 1} of {STEPS.length}. {STEPS[s]}
        {s === STEPS.length - 1 && <> The man has matched shapes and nothing more{meanings ? ". The meanings you just revealed were never available to him" : "; he never saw the meanings, which you can reveal with the button"}. Searle asks: does anything in the room understand Chinese?</>}
      </figcaption>
    </figure>
  );
}
