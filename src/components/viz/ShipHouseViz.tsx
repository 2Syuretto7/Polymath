"use client";

import { useState } from "react";

type K = "house" | "ship";

/** Kant's house and ship: the order of my perceptions of a house is up to me, the order of my perceptions of a ship drifting downstream is not. */
export function ShipHouseViz() {
  const [k, setK] = useState<K>("house");
  const [seq, setSeq] = useState<string[]>([]);
  const [msg, setMsg] = useState("");
  const pick = (q: K) => { setK(q); setSeq([]); setMsg(""); };
  const look = (part: string) => {
    if (k === "house") { setSeq([...seq, part].slice(-4)); setMsg(""); return; }
    if (part === "downstream" && !seq.includes("upstream")) { setSeq(["downstream"]); setMsg(""); return; }
    if (part === "upstream" && seq.includes("downstream")) { setMsg("You cannot: once you have seen the ship lower down, you cannot then see it higher up the river at that earlier moment. The order is fixed by the event."); return; }
    setSeq([...seq.filter((x) => x !== part), part]); setMsg("");
  };
  const last = seq[seq.length - 1];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="What you perceive">
        <button type="button" className={k === "house" ? "seg is-on" : "seg"} aria-pressed={k === "house"} onClick={() => pick("house")}>a house</button>
        <button type="button" className={k === "ship" ? "seg is-on" : "seg"} aria-pressed={k === "ship"} onClick={() => pick("ship")}>a ship drifting downstream</button>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label={k === "house" ? "A house" : "A river with a ship"} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {k === "house" ? <>
          <polygon points="200,70 260,25 320,70" style={{ fill: last === "roof" ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: last === "roof" ? "var(--accent)" : "var(--text-muted)", strokeWidth: 2 }} />
          <rect x={210} y={70} width={100} height={60} style={{ fill: last === "walls" ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: last === "walls" ? "var(--accent)" : "var(--text-muted)", strokeWidth: 2 }} />
          <rect x={196} y={130} width={128} height={14} style={{ fill: last === "foundation" ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: last === "foundation" ? "var(--accent)" : "var(--text-muted)", strokeWidth: 2 }} />
        </> : <>
          <rect x={20} y={95} width={480} height={40} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
          <text x={30} y={155} style={{ fontSize: 11, fill: "var(--text-muted)" }}>upstream</text>
          <text x={490} y={155} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>downstream, the way the current flows</text>
          {[["upstream", 130], ["downstream", 370]].map(([p, x]) => (
            <g key={p as string} transform={`translate(${x} 100)`} style={{ opacity: seq.includes(p as string) ? 1 : 0.3 }}>
              <path d="M -30 0 L 30 0 L 20 14 L -20 14 Z" style={{ fill: last === p ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
              <line x1={0} y1={0} x2={0} y2={-34} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
              <path d="M 2 -32 L 22 -6 L 2 -6 Z" style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
              {seq.includes(p as string) && <text x={0} y={-42} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text)" }}>perception {seq.indexOf(p as string) + 1}</text>}
            </g>
          ))}
        </>}
      </svg>
      <div className="viz-controls">
        {k === "house"
          ? ["roof", "walls", "foundation"].map((p) => <button key={p} type="button" className="btn" onClick={() => look(p)}>Look at the {p}</button>)
          : <>
            <button type="button" className="btn" onClick={() => look("upstream")}>See it upstream</button>
            <button type="button" className="btn" onClick={() => look("downstream")}>See it downstream</button>
          </>}
        <button type="button" className="btn" onClick={() => { setSeq([]); setMsg(""); }}>Start again</button>
      </div>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0 0" }} aria-live="polite">
        {msg || (seq.length ? `Your perceptions, in order: ${seq.join(", then ")}.` : "No perceptions yet.")}
      </p>
      <figcaption className="viz-caption">
        {k === "house"
          ? "Perceive the parts in any order: roof first or foundation first. The succession is in your apprehension only, and you do not take the house to be changing."
          : "Here the order of perceptions is bound: upstream, then downstream. Kant argues that it is bound only because we think the event under a rule that fixes its order, the concept of cause. That is how we tell an objective succession from a merely subjective one."}
      </figcaption>
    </figure>
  );
}
