"use client";

import { useState } from "react";
import { fmtNum } from "./format";

/** Relative and absolute risk: the same finding told two ways. */
export function RiskViz() {
  const [base, setBase] = useState(10);
  const [rel, setRel] = useState(1);
  const after = base * (1 + rel);
  const extra = after - base;
  const f = (x: number) => fmtNum(Number(x.toFixed(1)));

  return (
    <figure className="viz">
      <div className="viz-sliders" style={{ marginTop: 0 }}>
        <label><span>usual risk: <span className="mono">{f(base)}</span> in 10 000 people</span>
          <input type="range" min={1} max={500} step={1} value={base} onChange={(e) => setBase(Number(e.target.value))} /></label>
        <label><span>increase reported in the headline: <span className="mono">{Math.round(rel * 100)}%</span></span>
          <input type="range" min={0.05} max={3} step={0.05} value={rel} onChange={(e) => setRel(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>headline (relative risk)</td><td>&ldquo;Risk up {Math.round(rel * 100)}%!&rdquo;</td></tr>
          <tr><td>risk without the exposure</td><td className="mono">{f(base)} in 10 000</td></tr>
          <tr><td>risk with it</td><td className="mono">{f(after)} in 10 000</td></tr>
          <tr><td>extra cases (absolute risk)</td><td className="mono">{f(extra)} in 10 000</td></tr>
          <tr><td>people exposed for each extra case</td><td className="mono">{f(10000 / extra)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The same percentage rise means very different things for a rare risk and a common one. Ask: what is the risk to begin with?
      </figcaption>
    </figure>
  );
}
