"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 40, H = 25, N = W * H;

/** A thousand people, a condition and a test: count the true and false positives. */
export function FrequencyGridViz() {
  const [base, setBase] = useState(0.01);
  const [sens, setSens] = useState(0.9);
  const [fpr, setFpr] = useState(0.09);
  const sick = Math.round(base * N);
  const tp = Math.round(sens * sick);
  const fp = Math.round(fpr * (N - sick));
  const post = tp + fp ? tp / (tp + fp) : 0;
  const pc = (x: number) => `${fmtNum(Number((100 * x).toFixed(1)))}%`;
  // Lay out: sick people first, then healthy; within each group, positives first.
  const kind = (i: number) => (i < tp ? "tp" : i < sick ? "fn" : i < sick + fp ? "fp" : "tn");
  const cell = 13;
  const style: Record<string, React.CSSProperties> = {
    tp: { fill: "var(--accent)" },
    fn: { fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 },
    fp: { fill: "var(--danger)" },
    tn: { fill: "var(--text-muted)", opacity: 0.2 },
  };

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W * cell} ${H * cell}`} style={{ width: "100%", display: "block" }} role="img"
        aria-label={`Of ${N} people, ${sick} have the condition. ${tp} of them test positive, and so do ${fp} people without it.`}>
        {Array.from({ length: N }, (_, i) => (
          <circle key={i} cx={(i % W) * cell + cell / 2} cy={Math.floor(i / W) * cell + cell / 2} r={4.2} style={style[kind(i)]} />
        ))}
      </svg>
      <p className="mono-meta" style={{ margin: "6px 0 0", textTransform: "none" }}>
        purple: has it, tests positive · purple ring: has it, tests negative · red: does not have it, tests positive · faint: neither
      </p>
      <div className="viz-sliders">
        <label><span>base rate: <span className="mono">{pc(base)}</span></span>
          <input type="range" min={0.001} max={0.3} step={0.001} value={base} onChange={(e) => setBase(Number(e.target.value))} /></label>
        <label><span>test finds the condition: <span className="mono">{pc(sens)}</span></span>
          <input type="range" min={0.5} max={1} step={0.01} value={sens} onChange={(e) => setSens(Number(e.target.value))} /></label>
        <label><span>false alarms among the healthy: <span className="mono">{pc(fpr)}</span></span>
          <input type="range" min={0} max={0.2} step={0.005} value={fpr} onChange={(e) => setFpr(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>people who test positive</td><td className="mono">{tp} + {fp} = {tp + fp}</td></tr>
          <tr><td>chance a positive person has the condition</td><td className="mono">{tp} / {tp + fp} = {pc(post)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {post < 0.5
          ? "Most positives are false alarms: when a condition is rare, the many healthy people produce more false positives than the few sick people produce true ones."
          : "Now most positives are real. Raise the base rate or cut the false alarms and a positive result becomes trustworthy."}
      </figcaption>
    </figure>
  );
}
