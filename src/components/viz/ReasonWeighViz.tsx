"use client";

import { useState } from "react";

export const CONSIDERATIONS = [
  { text: "The doctors put her friend’s chance of recovery at 70 per cent", w: 3, kind: "object" },
  { text: "The latest test results are mixed", w: -1, kind: "object" },
  { text: "A friend with the same illness did not recover", w: -1, kind: "object" },
  { text: "Believing it would make Asha calmer", w: 2, kind: "state" },
  { text: "An eccentric billionaire will pay her to believe it", w: 4, kind: "state" },
] as const;

/** The balance of the switched-on considerations, optionally counting only object-given ones. */
export function balance(on: boolean[], objectOnly: boolean) {
  return CONSIDERATIONS.reduce((s, c, i) => s + (on[i] && (!objectOnly || c.kind === "object") ? c.w : 0), 0);
}

/** Weighing reasons for a belief, and the difference between object-given and state-given reasons. */
export function ReasonWeighViz() {
  const [on, setOn] = useState([true, true, true, true, true]);
  const [objectOnly, setObjectOnly] = useState(true);
  const total = balance(on, objectOnly);
  const px = (v: number) => 270 + v * 26;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="which reasons count">
        <button type="button" aria-pressed={objectOnly} className={objectOnly ? "seg is-on" : "seg"} onClick={() => setObjectOnly(true)}>Reasons for the belief</button>
        <button type="button" aria-pressed={!objectOnly} className={!objectOnly ? "seg is-on" : "seg"} onClick={() => setObjectOnly(false)}>Every consideration</button>
      </div>
      <div className="viz-controls" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        {CONSIDERATIONS.map((c, i) => (
          <label key={c.text}>
            <input type="checkbox" checked={on[i]} onChange={() => setOn(on.map((v, j) => (j === i ? !v : v)))} /> {c.text} ({c.w > 0 ? "+" : "−"}{Math.abs(c.w)}, {c.kind === "object" ? "about whether it is true" : "about having the belief"})
          </label>
        ))}
      </div>
      <svg viewBox="0 0 540 70" role="img" aria-label="Balance of reasons" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={14} y1={30} x2={526} y2={30} style={{ stroke: "var(--border-strong)" }} />
        {[-8, -4, 0, 4, 8].map((v) => (
          <g key={v}>
            <line x1={px(v)} y1={25} x2={px(v)} y2={35} style={{ stroke: "var(--border-strong)" }} />
            <text x={px(v)} y={52} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>
          </g>
        ))}
        <rect x={Math.min(px(0), px(total))} y={20} width={Math.abs(px(total) - px(0))} height={20} style={{ fill: total >= 0 ? "var(--success-soft)" : "var(--danger-soft)", stroke: total >= 0 ? "var(--success)" : "var(--danger)" }} />
        <circle cx={px(total)} cy={30} r={6} style={{ fill: total >= 0 ? "var(--success)" : "var(--danger)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Balance: {String(total).replace("-", "−")}. {objectOnly ? "Only considerations bearing on whether her friend will recover are counted." : "Considerations about the benefits of believing are counted too."}
      </p>
      <figcaption className="viz-caption">
        Should Asha believe her friend will recover? On reasons fundamentalism, each consideration counts in favour of or
        against an attitude, and how strongly is a basic normative fact. The calm and the payment are reasons to want to
        have the belief, not evidence that it is true: the &lsquo;wrong kind&rsquo; of reason, which a theory of reasons
        has to sort from the right kind.
      </figcaption>
    </figure>
  );
}
