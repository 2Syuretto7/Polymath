"use client";

import { useState } from "react";

const IND = ["recurrent processing", "a global workspace", "higher-order self-monitoring", "agency and embodiment", "a living, biological substrate"];
const THEORIES = [
  { name: "recurrent processing theory", need: 0 },
  { name: "global workspace theory", need: 1 },
  { name: "higher-order theories", need: 2 },
  { name: "embodied and enactive views", need: 3 },
  { name: "biological naturalism", need: 4 },
];
type V = "yes" | "no" | "partly" | "unclear";
const SYS: { name: string; v: V[] }[] = [
  { name: "a thermostat", v: ["no", "no", "no", "no", "no"] },
  { name: "a chess engine", v: ["no", "no", "no", "no", "no"] },
  { name: "a chatbot built on a language model", v: ["partly", "unclear", "unclear", "no", "no"] },
  { name: "a language-model agent with memory and tools", v: ["partly", "unclear", "unclear", "partly", "no"] },
  { name: "a honeybee", v: ["yes", "unclear", "unclear", "yes", "yes"] },
  { name: "a whole-brain emulation", v: ["yes", "yes", "yes", "partly", "no"] },
];

/** The indicator approach: each theory of consciousness names a property to look for in a system. */
export function AIIndicatorViz() {
  const [si, setSi] = useState(2);
  const [ti, setTi] = useState(1);
  const S = SYS[si], T = THEORIES[ti];
  const v = S.v[T.need];
  const colour = (x: V) => (x === "yes" ? "var(--accent)" : x === "no" ? "var(--danger)" : "var(--text-muted)");
  return (
    <figure className="viz">
      <div className="viz-controls">
        {SYS.map((s, i) => <button key={s.name} type="button" aria-pressed={si === i} className={si === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setSi(i)}>{s.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Theory" style={{ marginTop: 8 }}>
        {THEORIES.map((t, i) => <button key={t.name} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>{t.name}</button>)}
      </div>
      <table className="table" style={{ fontSize: 14, marginTop: 10 }}>
        <thead><tr><th style={{ textTransform: "none" }}>indicator property</th><th style={{ textTransform: "none" }}>{S.name}</th></tr></thead>
        <tbody>
          {IND.map((ind, i) => (
            <tr key={ind} style={i === T.need ? { fontWeight: 600 } : undefined}>
              <td>{ind}{i === T.need ? " (what this theory looks for)" : ""}</td>
              <td style={{ color: colour(S.v[i]) }}>{S.v[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        On {T.name}, the evidence that {S.name} is conscious is: <strong>{v === "yes" ? "present" : v === "no" ? "absent" : v === "partly" ? "partial" : "unsettled"}</strong>.
      </p>
      <figcaption className="viz-caption">
        These ratings are rough and disputed, in the spirit of the 2023 report by Patrick Butlin, Robert Long and colleagues,
        which derived indicator properties from scientific theories. Since we do not know which theory is true, the verdict
        about any system inherits that uncertainty.
      </figcaption>
    </figure>
  );
}
