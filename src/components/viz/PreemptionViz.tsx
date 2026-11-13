"use client";

import { useState } from "react";

/** Suzy and Billy throw rocks at a bottle: counterfactual dependence, preemption and overdetermination. */
export function PreemptionViz() {
  const [suzy, setSuzy] = useState(true);
  const [billy, setBilly] = useState(true);
  const [sim, setSim] = useState(false);
  const shatters = suzy || billy;
  const hitter = !shatters ? "nobody" : suzy && billy ? (sim ? "both rocks, at the same instant" : "Suzy’s rock, a moment before Billy’s") : suzy ? "Suzy’s rock" : "Billy’s rock";
  const withoutSuzy = billy;
  const intuitive = suzy && shatters;
  const naive = suzy && shatters && !withoutSuzy;
  const W = 520, H = 120;
  const sx = suzy && billy && !sim ? 400 : 430;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" aria-pressed={suzy} className={suzy ? "viz-chip is-on" : "viz-chip"} onClick={() => setSuzy(!suzy)}>Suzy {suzy ? "throws" : "does not throw"}</button>
        <button type="button" aria-pressed={billy} className={billy ? "viz-chip is-on" : "viz-chip"} onClick={() => setBilly(!billy)}>Billy {billy ? "throws" : "does not throw"}</button>
        <button type="button" aria-pressed={sim} className={sim ? "viz-chip is-on" : "viz-chip"} onClick={() => setSim(!sim)}>{sim ? "rocks arrive together" : "Suzy’s rock is faster"}</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two throwers and a bottle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={38} style={{ fill: "var(--text)", fontSize: 13 }}>Suzy</text>
        <text x={20} y={92} style={{ fill: "var(--text)", fontSize: 13 }}>Billy</text>
        {suzy && <><line x1={70} y1={34} x2={sx} y2={34 + (60 - 34) * ((sx - 70) / 400)} style={{ stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "6 4" }} /><circle cx={sx} cy={34 + (60 - 34) * ((sx - 70) / 400)} r={6} style={{ fill: "var(--accent)" }} /></>}
        {billy && <><line x1={70} y1={88} x2={suzy && !sim ? 330 : 430} y2={88 - (88 - 60) * (((suzy && !sim ? 330 : 430) - 70) / 400)} style={{ stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }} /><circle cx={suzy && !sim ? 330 : 430} cy={88 - (88 - 60) * (((suzy && !sim ? 330 : 430) - 70) / 400)} r={6} style={{ fill: "var(--text-muted)" }} /></>}
        <rect x={470} y={38} width={20} height={44} rx={5} style={{ fill: shatters ? "none" : "var(--accent-soft)", stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: shatters ? "3 3" : undefined }} />
        <text x={480} y={104} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{shatters ? "shattered" : "intact"}</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, marginTop: 6, fontSize: 14 }}>
        <div>the bottle is broken by: <strong>{hitter}</strong></div>
        <div>if Suzy had not thrown, would it have shattered? <strong>{withoutSuzy ? "yes" : "no"}</strong></div>
        <div>naive counterfactual test, Suzy caused it: <strong>{naive ? "yes" : "no"}</strong></div>
        <div>intuitive verdict, Suzy caused it: <strong>{intuitive ? (billy && sim ? "unclear: overdetermination" : "yes") : "no"}</strong></div>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14, color: naive !== intuitive && suzy && billy ? "var(--danger)" : undefined }}>
        {suzy && billy && !sim ? "Preemption: Suzy’s rock did the work, but the bottle does not depend on her throw, since Billy was a backup. The simple test gets this wrong." : suzy && billy && sim ? "Overdetermination: both rocks hit at once. Neither throw makes a difference on its own, yet each seems to be a cause." : "With one thrower, the simple counterfactual test and intuition agree."}
      </p>
      <figcaption className="viz-caption">
        Lewis&rsquo;s simplest idea: e depends causally on c if, had c not occurred, e would not have occurred. Turn both throwers on to see how a backup cause breaks the test. Lewis responded by using chains of dependence, and later the idea of influence.
      </figcaption>
    </figure>
  );
}
