"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const PARTS = [
  { name: "imaging", greek: "eikasia", obj: "shadows and reflections" },
  { name: "belief", greek: "pistis", obj: "animals, plants, made things" },
  { name: "thought", greek: "dianoia", obj: "mathematical objects, reached through hypotheses" },
  { name: "understanding", greek: "noēsis", obj: "the Forms, up to the Good" },
];

/** Plato's divided line: cut a line unequally, cut each part in the same ratio, and the middle parts come out equal. */
export function DividedLineViz() {
  const [k, setK] = useState(2);
  const A = 1 / (1 + k), B = k / (1 + k);
  const len = [A / (1 + k), (A * k) / (1 + k), B / (1 + k), (B * k) / (1 + k)];
  const W = 520, L = 480, x0 = 20;
  let acc = 0;
  const xs = len.map((l) => { const s = acc; acc += l; return [x0 + s * L, x0 + acc * L]; });
  const f = (x: number) => fmtNum(Number(x.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} 120`} role="img" aria-label={`Divided line with ratio ${k}; the two middle segments both have length ${f(len[1])}`} style={{ width: "100%" }}>
        <text x={x0} y={18} className="viz-label">the visible</text>
        <text x={x0 + A * L + 4} y={18} className="viz-label">the intelligible</text>
        <line x1={x0 + A * L} y1={24} x2={x0 + A * L} y2={78} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        {xs.map(([a, b], i) => (
          <g key={i}>
            <rect x={a + 1} y={40} width={Math.max(0, b - a - 2)} height={22} rx={3}
              style={{ fill: i === 1 || i === 2 ? "var(--accent)" : "var(--text-muted)", opacity: 0.25 + 0.2 * i }} />
            <text x={(a + b) / 2} y={98} textAnchor="middle" className={i === 1 || i === 2 ? "viz-label is-on" : "viz-label"}>{PARTS[i].greek}</text>
          </g>
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>ratio of each upper part to the lower <span className="mono">{f(k)} : 1</span></span>
          <input type="range" min={1.2} max={4} step={0.1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <thead><tr><th>segment</th><th>state of mind</th><th>objects</th><th>length</th></tr></thead>
        <tbody>
          {PARTS.map((p, i) => (
            <tr key={p.greek}><td className="mono">{i + 1}</td><td>{p.name} ({p.greek})</td><td>{p.obj}</td><td className="mono">{f(len[i])}</td></tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {`Whatever ratio you choose, segments 2 and 3 are equal: both are ${f(len[1])}. Plato does not mention this, but it follows from his instructions, and readers have long wondered whether it means anything.`}
      </figcaption>
    </figure>
  );
}
