"use client";

import { useState } from "react";

const LEVELS = ["chatting on the way home", "a careful conversation", "a large cheque must clear by Monday", "a philosophy seminar on scepticism"];
const ALTS: { text: string; from: number; out: boolean; why: string }[] = [
  { text: "The bank is never open on Saturdays.", from: 0, out: true, why: "Asha saw it open last Saturday." },
  { text: "Asha is misremembering which day she went.", from: 1, out: true, why: "It was the day of her cousin's wedding lunch, which was certainly a Saturday." },
  { text: "The bank has changed its hours since last week.", from: 2, out: false, why: "Nothing in her evidence rules this out; banks do sometimes change their hours." },
  { text: "Asha is a brain in a vat and there is no bank.", from: 3, out: false, why: "Her experience would be the same, so her evidence cannot rule it out." },
];

/** Contextualism: whether "Asha knows" is true depends on which alternatives the conversation makes relevant. */
export function ContextStandardsViz() {
  const [lv, setLv] = useState(0);
  const relevant = ALTS.filter((a) => a.from <= lv);
  const knows = relevant.every((a) => a.out);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        On Friday afternoon, Asha says: &ldquo;I know the bank is open tomorrow; I was there last Saturday.&rdquo; Choose the
        context in which her claim is assessed.
      </p>
      <div className="viz-sliders">
        <label><span>context: <span className="mono">{LEVELS[lv]}</span></span>
          <input type="range" min={0} max={3} step={1} value={lv} onChange={(e) => setLv(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        {ALTS.map((a) => {
          const rel = a.from <= lv;
          return (
            <div key={a.text} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "6px 10px", opacity: rel ? 1 : 0.45 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 14 }}>
                <span>{a.text}</span>
                <span className="mono" style={{ whiteSpace: "nowrap", color: !rel ? "var(--text-faint)" : a.out ? "var(--accent)" : "var(--danger)" }}>
                  {!rel ? "not relevant" : a.out ? "ruled out" : "not ruled out"}
                </span>
              </div>
              {rel && <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{a.why}</div>}
            </div>
          );
        })}
      </div>
      <p style={{ margin: "10px 0 4px", fontWeight: 600, color: knows ? "var(--accent)" : "var(--danger)" }}>
        In this context, &ldquo;Asha knows the bank is open tomorrow&rdquo; is {knows ? "true" : "false"}.
      </p>
      <figcaption className="viz-caption">
        For the contextualist, &ldquo;knows&rdquo; is true when the subject&rsquo;s evidence rules out every alternative that is relevant in the speaker&rsquo;s context. Raising the stakes, or mentioning sceptical possibilities, brings more alternatives into play. Asha&rsquo;s evidence never changes; only the standard does.
      </figcaption>
    </figure>
  );
}
