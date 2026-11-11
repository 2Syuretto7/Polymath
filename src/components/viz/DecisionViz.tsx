"use client";

import { useState } from "react";
import { fmtNum } from "./format";

export type Decision = {
  title: string;
  states: [string, string];
  acts: { name: string; u: [number, number] }[];
  pMax: number;
  p0: number;
  unit: string;
  note: string;
};

/** Expected value of each act as the probability of the first state changes. */
export function DecisionViz({ decisions }: { decisions: Decision[] }) {
  const [k, setK] = useState(0);
  const D = decisions[k];
  const [p, setP] = useState(D.p0);
  const load = (i: number) => { setK(i); setP(decisions[i].p0); };
  const ev = D.acts.map((a) => p * a.u[0] + (1 - p) * a.u[1]);
  const best = ev.indexOf(Math.max(...ev));
  const f = (x: number) => fmtNum(Number(x.toFixed(3)));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Decision">
        {decisions.map((x, i) => (
          <button key={x.title} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              <th style={{ textTransform: "none" }}>act</th>
              <th style={{ textTransform: "none" }}>if {D.states[0]}</th>
              <th style={{ textTransform: "none" }}>if {D.states[1]}</th>
              <th style={{ textTransform: "none" }}>expected value</th>
            </tr>
          </thead>
          <tbody>
            {D.acts.map((a, i) => (
              <tr key={a.name}>
                <td>{a.name}</td>
                <td className="mono">{f(a.u[0])}</td>
                <td className="mono">{f(a.u[1])}</td>
                <td className="mono" style={{ color: i === best ? "var(--accent)" : undefined }}>
                  {f(ev[i])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="viz-sliders">
        <label><span>P({D.states[0]}) = <span className="mono">{f(p)}</span></span>
          <input type="range" min={0} max={D.pMax} step={D.pMax / 100} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Highest expected value: {D.acts[best].name} ({D.unit}). {D.note}
      </figcaption>
    </figure>
  );
}
