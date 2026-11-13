"use client";

import { useState } from "react";

/** Wittgenstein’s pupil: two rules agree on every example used in training, and part ways beyond it. */
export function RuleFollowViz() {
  const [trained, setTrained] = useState(40);
  const [start, setStart] = useState(980);
  const add2 = (n: number) => 2 * n;
  const deviant = (n: number) => (2 * n <= 1000 ? 2 * n : 1000 + 4 * (n - 500));
  const trainedUpTo = add2(trained);
  const shown = Array.from({ length: 12 }, (_, i) => start / 2 + i);
  const agreeAll = deviant(trained) === add2(trained) && trainedUpTo <= 1000;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>training went up to: <span className="mono">{trainedUpTo}</span></span>
          <input type="range" min={5} max={600} step={5} value={trained} onChange={(e) => setTrained(Number(e.target.value))} /></label>
        <label><span>look at the series from: <span className="mono">{start}</span></span>
          <input type="range" min={0} max={1100} step={10} value={start} onChange={(e) => setStart(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead>
            <tr><th style={{ textTransform: "none" }}>step</th>{shown.map((n) => <th key={n} style={{ textTransform: "none" }}>{n}</th>)}</tr>
          </thead>
          <tbody>
            <tr><td>“add 2”</td>{shown.map((n) => <td key={n} className="mono">{add2(n)}</td>)}</tr>
            <tr><td>the pupil</td>{shown.map((n) => <td key={n} className="mono" style={deviant(n) !== add2(n) ? { background: "var(--danger-soft)", fontWeight: 600 } : undefined}>{deviant(n)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {agreeAll
          ? `every number written in training, up to ${trainedUpTo}, fits both rules`
          : `training went past 1000, so the pupil would already have been corrected`}
      </p>
      <figcaption className="viz-caption">
        The pupil writes 996, 998, 1000, 1004, 1008, and insists they are going on in the same way. Any finite set of examples,
        and any explanation we gave, fits their rule as well as ours. Wittgenstein asked what, then, makes one continuation the
        correct one, and answered that it lies in a practice, not in anything that occurred in the pupil&rsquo;s mind.
      </figcaption>
    </figure>
  );
}
