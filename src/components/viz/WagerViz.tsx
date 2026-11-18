"use client";

import { useState } from "react";

const REWARDS: { name: string; v: number }[] = [
  { name: "infinite", v: Infinity },
  { name: "10 000", v: 10000 },
  { name: "100", v: 100 },
];

/** Pascal's wager as a decision under uncertainty, with an option for a rival god. */
export function WagerViz() {
  const [lp, setLp] = useState(-1);
  const [ri, setRi] = useState(0);
  const [cost, setCost] = useState(10);
  const [rival, setRival] = useState(false);
  const p = Math.pow(10, lp);
  const R = REWARDS[ri].v;
  const fmt = (v: number) => (Number.isNaN(v) ? "undefined (∞ − ∞)" : v === Infinity ? "∞" : v === -Infinity ? "−∞" : v.toFixed(2));
  const q = rival ? p : 0;
  const evB = rival ? (R === Infinity ? NaN : p * R - q * R - (1 - p - q) * cost) : p * R - (1 - p) * cost;
  const evN = rival ? (R === Infinity ? NaN : q * R) : 0;
  const verdict = Number.isNaN(evB) ? "No verdict: both options have an infinite gain and an infinite loss." : evB > evN ? "Expected value favours believing." : evB < evN ? "Expected value favours not believing." : "The options tie.";
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>chance God exists = {p < 0.01 ? p.toExponential(0) : p.toFixed(2)} <input type="range" min={-60} max={-3} value={Math.round(lp * 10)} onChange={(e) => setLp(Number(e.target.value) / 10)} aria-label="chance" /></label>
        <label>cost of a believing life = {cost} <input type="range" min={0} max={50} value={cost} onChange={(e) => setCost(Number(e.target.value))} aria-label="cost" /></label>
      </div>
      <div className="segmented" role="group" aria-label="reward">
        {REWARDS.map((r, i) => <button key={r.name} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>reward {r.name}</button>)}
        <button type="button" aria-pressed={rival} className={rival ? "seg is-on" : "seg"} onClick={() => setRival(!rival)}>{rival ? "rival god: on" : "rival god: off"}</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13, width: "100%", marginTop: 10 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 6 }}></th>
              <th style={{ padding: 6 }}>God exists ({p < 0.01 ? p.toExponential(0) : p.toFixed(2)})</th>
              {rival && <th style={{ padding: 6 }}>rival god ({p < 0.01 ? p.toExponential(0) : p.toFixed(2)})</th>}
              <th style={{ padding: 6 }}>no god ({(1 - p - q).toFixed(3)})</th>
              <th style={{ padding: 6 }}>expected value</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: 6 }}>believe</td>
              <td style={{ padding: 6, textAlign: "center" }}>{fmt(R)}</td>
              {rival && <td style={{ padding: 6, textAlign: "center" }}>{fmt(-R)}</td>}
              <td style={{ padding: 6, textAlign: "center" }}>−{cost}</td>
              <td style={{ padding: 6, textAlign: "center", fontWeight: 700, color: "var(--accent)" }}>{fmt(evB)}</td>
            </tr>
            <tr style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: 6 }}>do not believe</td>
              <td style={{ padding: 6, textAlign: "center" }}>0</td>
              {rival && <td style={{ padding: 6, textAlign: "center" }}>{fmt(R)}</td>}
              <td style={{ padding: 6, textAlign: "center" }}>0</td>
              <td style={{ padding: 6, textAlign: "center", fontWeight: 700, color: "var(--accent)" }}>{fmt(evN)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{verdict}</p>
      <figcaption className="viz-caption">
        With an infinite reward, any non-zero chance makes believing win, however small the chance and however large the
        finite cost: that is Pascal&rsquo;s point. A rival god, equally likely, who rewards unbelief in the first, gives
        each option an infinite gain and an infinite loss, and expected value no longer decides.
      </figcaption>
    </figure>
  );
}
