"use client";

import { useState } from "react";

const PR = [
  { k: "efficacy", text: "Mental causation: the decision M causes the arm to rise, P*." },
  { k: "closure", text: "Closure: P* has a sufficient physical cause, the brain state P." },
  { k: "distinct", text: "Distinctness: M is not identical to P." },
  { k: "exclusion", text: "Exclusion: P* is not caused by two distinct sufficient causes, unless it is overdetermined." },
  { k: "nooverdet", text: "No systematic overdetermination: actions are not all overdetermined." },
];
const VIEW: Record<string, string> = {
  efficacy: "Epiphenomenalism: the decision causes nothing; the brain does all the work.",
  closure: "Interactionist dualism: the mind makes a difference that physics leaves open.",
  distinct: "Reductive physicalism: the decision just is the brain state, so there is one cause, not two. This is Kim’s own conclusion.",
  exclusion: "Compatibilism about causes: Yablo, List and Menzies argue that the mental property can be the more appropriate cause, being proportional to the effect.",
  nooverdet: "Overdetermination: every action has two sufficient causes, mental and physical. Many find this an incredible coincidence.",
};

/** Kim's exclusion argument: five plausible claims that cannot all be true. Drop one and see where you end up. */
export function ExclusionViz() {
  const [off, setOff] = useState<string | null>(null);
  const W = 520, H = 170;
  const mOn = off !== "efficacy";
  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mental and physical causes of an action" style={{ width: "100%", display: "block" }}>
        <text x={10} y={36} style={{ fill: "var(--text-muted)", fontSize: 11 }}>mental</text>
        <text x={10} y={136} style={{ fill: "var(--text-muted)", fontSize: 11 }}>physical</text>
        <line x1={140} y1={52} x2={140} y2={110} style={{ stroke: "var(--text-faint)", strokeDasharray: off === "distinct" ? undefined : "4 3", strokeWidth: off === "distinct" ? 3 : 1.5 }} />
        <text x={150} y={86} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{off === "distinct" ? "identical" : "realised by"}</text>
        {mOn && <line x1={160} y1={36} x2={392} y2={116} style={{ stroke: "var(--accent)", strokeWidth: 2.5, strokeDasharray: off === "nooverdet" || off === "exclusion" || off === "closure" ? undefined : "6 4" }} />}
        {off !== "closure" && <line x1={160} y1={130} x2={392} y2={130} style={{ stroke: "var(--text-muted)", strokeWidth: 2.5 }} />}
        <circle cx={140} cy={36} r={18} style={{ fill: "var(--accent)", fillOpacity: 0.25, stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <text x={140} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 600 }}>M</text>
        <circle cx={140} cy={130} r={18} style={{ fill: "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <text x={140} y={134} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 600 }}>P</text>
        <circle cx={410} cy={130} r={18} style={{ fill: "var(--bg)", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <text x={410} y={134} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 600 }}>P*</text>
        <text x={440} y={134} style={{ fill: "var(--text-muted)", fontSize: 11 }}>arm rises</text>
        <text x={185} y={30} style={{ fill: "var(--text-muted)", fontSize: 10 }}>decision</text>
        <text x={185} y={156} style={{ fill: "var(--text-muted)", fontSize: 10 }}>brain state</text>
      </svg>
      <p style={{ margin: "6px 0", fontSize: 14 }}>Click a claim to reject it.</p>
      <div style={{ display: "grid", gap: 6 }}>
        {PR.map((x) => (
          <button key={x.k} type="button" aria-pressed={off === x.k} onClick={() => setOff(off === x.k ? null : x.k)} className={off === x.k ? "viz-chip is-on" : "viz-chip"}
            style={{ textAlign: "left", textDecoration: off === x.k ? "line-through" : undefined, whiteSpace: "normal", height: "auto", padding: "6px 10px" }}>{x.text}</button>
        ))}
      </div>
      <p className={off ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "8px 0" }}>
        {off ? VIEW[off] : "All five together are inconsistent: if M and P are distinct and both sufficient, P* is overdetermined, which the last claim denies."}
      </p>
      <figcaption className="viz-caption">
        The dashed line from M is mental causation as the non-reductive physicalist wants it. Jaegwon Kim argued that, given closure and exclusion, the physical cause P leaves nothing for a distinct M to do.
      </figcaption>
    </figure>
  );
}
