"use client";

import { useState } from "react";

type Piece = [number, number, boolean, boolean]; // a, b, includes a, includes b
type S = { name: string; pieces: Piece[]; rational?: boolean };
const SETS: S[] = [
  { name: "[0, 1] ∪ [1.5, 2]", pieces: [[0, 1, true, true], [1.5, 2, true, true]] },
  { name: "[0, 1) ∪ (1, 2]", pieces: [[0, 1, true, false], [1, 2, false, true]] },
  { name: "[0, 1] ∪ (1, 2]", pieces: [[0, 1, true, true], [1, 2, false, true]] },
  { name: "the rationals in [0, 2]", pieces: [[0, 2, true, true]], rational: true },
];
const W = 520, H = 90, X0 = 30, X1 = 490, LO = -0.2, HI = 2.2, Y = 50;
const X = (v: number) => X0 + ((v - LO) / (HI - LO)) * (X1 - X0);

/** Try to split a set into two separated pieces by cutting at a point c that is not in the set. */
export function ConnectedSplitViz() {
  const [k, setK] = useState(0);
  const [c, setC] = useState(1.25);
  const [root2, setRoot2] = useState(false);
  const s = SETS[k];
  const cut = root2 && s.rational ? Math.SQRT2 : c;
  const inA = s.rational ? !(root2) : s.pieces.some(([a, b, ia, ib]) => (cut > a && cut < b) || (cut === a && ia) || (cut === b && ib));
  const left = s.pieces.some(([a]) => a < cut), right = s.pieces.some(([, b]) => b > cut);
  const splits = !inA && left && right;
  const fm = (z: number) => (root2 && s.rational ? "√2" : z.toFixed(2));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Set">
        {SETS.map((t, i) => (
          <button key={t.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => { setK(i); setRoot2(false); }}>{t.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The set on the number line with a cut" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y} x2={X1} y2={Y} className="viz-axis" />
        {[0, 1, 2].map((v) => <text key={v} x={X(v)} y={Y + 24} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>{v}</text>)}
        {s.pieces.map(([a, b, ia, ib], i) => (
          <g key={i}>
            <line x1={X(a)} y1={Y} x2={X(b)} y2={Y} style={{ stroke: splits && !s.rational ? (b <= cut ? "var(--accent)" : "var(--danger)") : "var(--accent)", strokeWidth: 4, strokeDasharray: s.rational ? "2 3" : "none" }} />
            {!s.rational && [[a, ia], [b, ib]].map(([v, inc], j) => (
              <circle key={j} cx={X(v as number)} cy={Y} r={5} style={{ fill: inc ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
            ))}
          </g>
        ))}
        {s.rational && splits && <line x1={X(cut)} y1={Y} x2={X(2)} y2={Y} style={{ stroke: "var(--danger)", strokeWidth: 4, strokeDasharray: "2 3" }} />}
        <line x1={X(cut)} y1={Y - 26} x2={X(cut)} y2={Y + 8} style={{ stroke: "var(--text)", strokeWidth: 1.5 }} />
        <text x={X(cut)} y={Y - 30} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text)" }}>c = {fm(cut)}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>the cut c: <span className="mono">{fm(cut)}</span></span>
          <input type="range" min={-0.1} max={2.1} step={0.05} value={c} onChange={(e) => { setC(Math.round(Number(e.target.value) * 100) / 100); setRoot2(false); }} /></label>
      </div>
      {s.rational && (
        <div className="viz-controls">
          <button type="button" className="btn btn-primary" onClick={() => setRoot2(true)}>Cut at √2</button>
        </div>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {splits
          ? `The cut is not in the set, and there are points on both sides. The parts below and above c are separated: neither contains a limit point of the other. So the set is disconnected.`
          : inA
            ? `The point c is in the set, so cutting there cannot separate it: c would sit on one side and be a limit point of the other.${s.rational ? " Every point the slider reaches is rational. Try cutting at an irrational point." : ""}`
            : "Cut where the set has points on both sides."}
        {k === 2 && " This set is just [0, 2], an interval, and intervals are connected: no cut works."}
      </figcaption>
    </figure>
  );
}
