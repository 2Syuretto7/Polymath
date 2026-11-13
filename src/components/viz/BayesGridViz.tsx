"use client";

import { useState } from "react";

const N = 1000, COLS = 40;

/** A thousand people take a test for a rare condition. Count who tests positive, and how many of them are ill. */
export function BayesGridViz() {
  const [prev, setPrev] = useState(10); // per thousand
  const [sens, setSens] = useState(90); // per cent
  const [fpr, setFpr] = useState(5); // per cent
  const ill = prev;
  const truePos = Math.round((ill * sens) / 100);
  const falsePos = Math.round(((N - ill) * fpr) / 100);
  const pos = truePos + falsePos;
  const share = pos ? truePos / pos : 0;

  // order: ill and positive, ill and negative, well and positive, well and negative
  const kind = (i: number) => (i < truePos ? 0 : i < ill ? 1 : i < ill + falsePos ? 2 : 3);
  const fill = ["var(--accent)", "var(--violet-300)", "var(--danger)", "var(--bg-subtle)"];
  const S = 12;

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${COLS * S} ${(N / COLS) * S}`} role="img" aria-label={`Of ${pos} people who test positive, ${truePos} are ill.`} style={{ width: "100%", display: "block" }}>
        {Array.from({ length: N }, (_, i) => (
          <rect key={i} x={(i % COLS) * S + 1} y={Math.floor(i / COLS) * S + 1} width={S - 2} height={S - 2} rx={2}
            style={{ fill: fill[kind(i)], stroke: kind(i) === 3 ? "var(--border)" : "none", strokeWidth: 0.5 }} />
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>ill, per thousand people: <span className="mono">{prev}</span></span>
          <input type="range" min={1} max={200} value={prev} onChange={(e) => setPrev(Number(e.target.value))} /></label>
        <label><span>test finds the illness in: <span className="mono">{sens}%</span> of the ill</span>
          <input type="range" min={50} max={100} value={sens} onChange={(e) => setSens(Number(e.target.value))} /></label>
        <label><span>false alarm in: <span className="mono">{fpr}%</span> of the well</span>
          <input type="range" min={0} max={20} value={fpr} onChange={(e) => setFpr(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>ill and positive</td><td className="mono">{truePos}</td></tr>
          <tr><td>well but positive (false alarms, shown in red)</td><td className="mono">{falsePos}</td></tr>
          <tr><td>chance of being ill, given a positive test</td><td className="mono">{truePos} / {pos} ≈ {(share * 100).toFixed(1)}%</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each square is a person. When the illness is rare, the false alarms among the many well people can outnumber the
        true positives among the few ill ones, so a positive result is much weaker evidence than the test&rsquo;s accuracy
        suggests.
      </figcaption>
    </figure>
  );
}
