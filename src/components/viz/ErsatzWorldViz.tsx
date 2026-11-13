"use client";

import { useState } from "react";

const PROPS = ["Ram is taller than Sita", "Sita is taller than Ram", "Ram exists", "a talking donkey exists", "every donkey is silent"];
type V = "true" | "false" | "open";

function check(v: V[]): string[] {
  const p: string[] = [];
  if (v[0] === "true" && v[1] === "true") p.push("Ram and Sita cannot each be taller than the other.");
  if (v[0] === "true" && v[2] === "false") p.push("Ram cannot be taller than Sita without existing.");
  if (v[1] === "true" && v[2] === "false") p.push("Sita cannot be taller than Ram if Ram does not exist.");
  if (v[3] === "true" && v[4] === "true") p.push("A talking donkey is not silent, so not every donkey is silent.");
  if (v[3] === "false" && v[4] === "false") p.push("If no donkey talks, every donkey is silent (taking silence as not talking).");
  return p;
}

/** Ersatz worlds: a possible world as a maximal consistent set of propositions, an abstract and actually existing thing. */
export function ErsatzWorldViz() {
  const [v, setV] = useState<V[]>(["true", "open", "true", "open", "open"]);
  const cycle = (i: number) => setV(v.map((x, j) => (j === i ? (x === "open" ? "true" : x === "true" ? "false" : "open") : x)));
  const probs = check(v);
  const maximal = v.every((x) => x !== "open");
  const status = probs.length ? "inconsistent: no possible world" : maximal ? "consistent and maximal: an ersatz possible world (in this small language)" : "consistent but not maximal: a partial description, true at many worlds";
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Build a world-story by deciding each proposition. Click to cycle through true, false and undecided.</p>
      <div style={{ display: "grid", gap: 6 }}>
        {PROPS.map((p, i) => (
          <div key={p} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, border: "1px solid var(--border)", borderRadius: 6, padding: "4px 10px" }}>
            <span>{p}</span>
            <button type="button" className={v[i] === "open" ? "viz-chip" : "viz-chip is-on"} onClick={() => cycle(i)}>{v[i] === "open" ? "undecided" : v[i]}</button>
          </div>
        ))}
      </div>
      <p style={{ margin: "10px 0 4px", fontWeight: 600, color: probs.length ? "var(--danger)" : maximal ? "var(--accent)" : undefined }}>{status}</p>
      {probs.map((x) => <p key={x} style={{ margin: "2px 0", fontSize: 14 }}>{x}</p>)}
      <figcaption className="viz-caption">
        The ersatzist says a possible world is not a concrete universe but a maximal consistent story: every proposition is settled, and none clash. Such stories exist actually, as abstract objects, so modal talk needs nothing that is merely possible. The world-story with a talking donkey exists; the donkey does not.
      </figcaption>
    </figure>
  );
}
