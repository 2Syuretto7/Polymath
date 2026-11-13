"use client";

import { useState } from "react";

type C = { world: string; who: string; sim: number; won: boolean; egg: boolean };
const CS: C[] = [
  { world: "world A", who: "a senator just like Humphrey, who campaigned harder", sim: 0.95, won: true, egg: false },
  { world: "world B", who: "a Humphrey-like man who never entered politics", sim: 0.7, won: false, egg: false },
  { world: "world C", who: "a woman born to Humphrey’s parents, who ran and won", sim: 0.5, won: true, egg: false },
  { world: "world D", who: "a man with Humphrey’s career but different parents", sim: 0.8, won: false, egg: false },
  { world: "world E", who: "a poached egg on the breakfast table of Humphrey’s parents", sim: 0.05, won: false, egg: true },
];

/** Lewis’s counterpart theory: Humphrey could have won if some sufficiently similar counterpart in another world wins. */
export function CounterpartViz() {
  const [th, setTh] = useState(0.6);
  const cps = CS.filter((c) => c.sim >= th);
  const could = cps.some((c) => c.won), egg = cps.some((c) => c.egg);
  const nec = cps.length > 0 && cps.every((c) => !c.won);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>In the actual world, Hubert Humphrey lost the 1968 US presidential election. Other worlds contain people more or less like him.</p>
      <div className="viz-sliders">
        <label><span>how similar a counterpart must be: <span className="mono">{th.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={th} onChange={(e) => setTh(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        {CS.map((c) => {
          const on = c.sim >= th;
          return (
            <div key={c.world} style={{ border: `1px solid ${on ? "var(--accent)" : "var(--border)"}`, borderRadius: 6, padding: "6px 10px", opacity: on ? 1 : 0.55 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap", fontSize: 14 }}>
                <span><strong>{c.world}</strong>: {c.who}</span>
                <span className="mono" style={{ whiteSpace: "nowrap" }}>similarity {c.sim.toFixed(2)}; {c.won ? "wins" : "does not win"}; {on ? "a counterpart" : "not a counterpart"}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, marginTop: 10, fontSize: 14 }}>
        <div>&ldquo;Humphrey could have won&rdquo;: <strong>{could ? "true" : "false"}</strong></div>
        <div>&ldquo;Humphrey could have been a poached egg&rdquo;: <strong>{egg ? "true" : "false"}</strong></div>
        <div>&ldquo;Humphrey necessarily loses&rdquo;: <strong>{nec ? "true" : "false"}</strong></div>
      </div>
      <figcaption className="viz-caption">
        For Lewis, Humphrey exists only in our world. &ldquo;He could have won&rdquo; is true because a counterpart, someone in another world similar enough to him, wins. Kripke objected that Humphrey cares about whether he could have won, not about someone else. Moving the threshold shows how flexible the counterpart relation is, which Lewis saw as a virtue.
      </figcaption>
    </figure>
  );
}
