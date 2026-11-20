"use client";

import { useState } from "react";

const CASES = [
  { name: "live wire", thing: "a live copper wire", stim: "touched by a conductor", resp: "current flows", has: true, cf: true, story: "Nothing interferes. Current flows when it is touched." },
  { name: "live wire + fink", thing: "a live wire attached to an electro-fink", stim: "touched by a conductor", resp: "current flows", has: true, cf: false, story: "The fink detects the touch and instantly makes the wire dead. No current flows, though the wire was live until touched." },
  { name: "dead wire + reverse fink", thing: "a dead wire attached to a reverse fink", stim: "touched by a conductor", resp: "current flows", has: false, cf: true, story: "The reverse fink detects the touch and makes the wire live. Current flows, though the wire was dead until touched." },
  { name: "packed glass", thing: "a fragile glass packed in foam", stim: "struck", resp: "it breaks", has: true, cf: false, story: "The foam absorbs the blow. The glass does not break, yet it is as fragile as ever: the disposition is masked." },
];

/** Martin's finks and masks as counterexamples to the simple conditional analysis of dispositions. */
export function FinkViz() {
  const [k, setK] = useState(1);
  const [done, setDone] = useState(false);
  const C = CASES[k];
  const cf = C.cf;
  const fits = C.has === cf;
  const cell = (x: number, label: string, v: boolean, sub: string) => (
    <g>
      <rect x={x} y={70} width={220} height={58} rx={8} style={{ fill: v ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: v ? "var(--accent)" : "var(--border-strong)" }} />
      <text x={x + 110} y={92} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label}</text>
      <text x={x + 110} y={116} textAnchor="middle" className="mono" style={{ fill: v ? "var(--success)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{v ? "yes" : "no"}{sub}</text>
    </g>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setDone(false); }}>{c.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setDone(true)}>apply the stimulus</button>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Whether the object has the disposition and whether the conditional holds" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={22} style={{ fill: "var(--text)", fontSize: 12 }}>{C.thing[0].toUpperCase() + C.thing.slice(1)}.</text>
        <text x={20} y={44} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Stimulus: {C.stim}. Manifestation: {C.resp}.</text>
        {cell(20, "has the disposition, before the stimulus?", C.has, "")}
        {cell(280, "would manifest if given the stimulus?", cf, "")}
        <text x={260} y={156} textAnchor="middle" style={{ fill: fits ? "var(--success)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>
          {fits ? "The conditional analysis gets this case right." : "Counterexample: the disposition and the conditional come apart."}
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{done ? C.story : "Press the button to see what happens."}</p>
      <figcaption className="viz-caption">
        The simple conditional analysis says x is disposed to M when C just in case x would M if it were subjected to C.
        Martin&rsquo;s finks change the disposition at the moment of the stimulus; masks and antidotes block the
        manifestation while leaving the disposition in place. Either way the two columns can disagree.
      </figcaption>
    </figure>
  );
}
