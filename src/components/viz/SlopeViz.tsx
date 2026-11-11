"use client";

import { useState } from "react";
import { fmtNum } from "./format";

export type Slope = { title: string; start: string; steps: string[]; init: number[] };

/** A slippery slope as a chain of links, each with a chance of holding; the chance of reaching the bottom is their product. */
export function SlopeViz({ slopes }: { slopes: Slope[] }) {
  const [k, setK] = useState(0);
  const S = slopes[k];
  const [p, setP] = useState<number[]>(S.init);
  const load = (i: number) => { setK(i); setP(slopes[i].init); };
  const cum = p.reduce<number[]>((acc, x) => [...acc, (acc.length ? acc[acc.length - 1] : 1) * x], []);
  const pc = (x: number) => `${fmtNum(Number((100 * x).toFixed(1)))}%`;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Slope">
        {slopes.map((x, i) => (
          <button key={x.title} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <p className="tagger-text" style={{ marginTop: 14 }}>{S.start}</p>
      <ol className="sorter">
        {S.steps.map((s, i) => (
          <li key={s} className="sorter-item">
            <p className="sorter-q">&hellip; then {s}</p>
            <div className="viz-sliders" style={{ marginTop: 0 }}>
              <label>
                <span>chance it follows from the step before: <span className="mono">{pc(p[i])}</span></span>
                <input type="range" min={0.05} max={1} step={0.05} value={p[i]}
                  onChange={(e) => { const v = Number(e.target.value); setP((q) => q.map((x, j) => (j === i ? v : x))); }} />
              </label>
              <span>
                <span className="mono-meta" style={{ textTransform: "none" }}>chance of getting this far: </span>
                <span className="mono">{pc(cum[i])}</span>
                <span style={{ display: "block", height: 6, marginTop: 6, borderRadius: 3, background: "var(--accent-soft)" }}>
                  <span style={{ display: "block", height: 6, width: `${100 * cum[i]}%`, borderRadius: 3, background: "var(--accent)" }} />
                </span>
              </span>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="viz-caption" aria-live="polite">
        However likely each link looks, the chance that every link holds is their product, {pc(cum[cum.length - 1])}. A slope is only as slippery as all its links together.
      </figcaption>
    </figure>
  );
}
