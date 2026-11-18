"use client";

import { useState } from "react";

const f = (n: number) => (n < 0 ? `−${-n}` : `${n}`);

/** The 2-form dx ∧ dy on a pair of vectors: the signed area of the parallelogram they span. */
export function WedgeAreaViz() {
  const [v, setV] = useState<[number, number]>([2, 1]);
  const [w, setW] = useState<[number, number]>([1, 3]);
  const val = v[0] * w[1] - v[1] * w[0];
  const S = 22, CX = 130, CY = 120;
  const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;
  const sl = (label: string, val: number, set: (n: number) => void, aria: string) => (
    <label>{label} = {f(val)} <input type="range" min={-4} max={4} value={val} onChange={(e) => set(Number(e.target.value))} aria-label={aria} /></label>
  );
  const col = val > 0 ? "var(--accent)" : val < 0 ? "var(--danger)" : "var(--text-muted)";
  return (
    <figure className="viz">
      <div className="viz-controls">
        {sl("v¹", v[0], (n) => setV([n, v[1]]), "v1")}
        {sl("v²", v[1], (n) => setV([v[0], n]), "v2")}
        {sl("w¹", w[0], (n) => setW([n, w[1]]), "w1")}
        {sl("w²", w[1], (n) => setW([w[0], n]), "w2")}
        <button type="button" className="btn btn-ghost" onClick={() => { setV(w); setW(v); }}>swap v and w</button>
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="The parallelogram spanned by two vectors" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="wa-v" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={9} markerHeight={9} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0L10,5L0,10z" style={{ fill: "var(--text)" }} /></marker>
        </defs>
        <line x1={X(-5)} y1={Y(0)} x2={X(5)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(-4.8)} x2={X(0)} y2={Y(4.8)} style={{ stroke: "var(--border)" }} />
        <polygon points={[[0, 0], v, [v[0] + w[0], v[1] + w[1]], w].map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: col, opacity: 0.25, stroke: col }} />
        {(v[0] || v[1]) ? <line x1={X(0)} y1={Y(0)} x2={X(v[0])} y2={Y(v[1])} markerEnd="url(#wa-v)" style={{ stroke: "var(--text)", strokeWidth: 2.5 }} /> : null}
        {(w[0] || w[1]) ? <line x1={X(0)} y1={Y(0)} x2={X(w[0])} y2={Y(w[1])} markerEnd="url(#wa-v)" style={{ stroke: "var(--text)", strokeWidth: 2.5, strokeDasharray: "5 3" }} /> : null}
        <text x={X(v[0]) + 6} y={Y(v[1])} style={{ fill: "var(--text)", fontSize: 12 }}>v</text>
        <text x={X(w[0]) + 6} y={Y(w[1])} style={{ fill: "var(--text)", fontSize: 12 }}>w</text>
        <text x={390} y={50} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>(dx ∧ dy)(v, w) = v¹w² − v²w¹</text>
        <text x={390} y={78} textAnchor="middle" style={{ fill: col, fontSize: 15, fontWeight: 700 }}>= {f(val)}</text>
        <text x={390} y={104} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{val > 0 ? "w is anticlockwise from v: positive" : val < 0 ? "w is clockwise from v: negative" : "v and w are parallel: zero area"}</text>
      </svg>
      <figcaption className="viz-caption">
        A 2-form eats two vectors and returns a number, linearly in each and changing sign when they are swapped. On the
        plane every 2-form is a multiple of dx ∧ dy, which measures signed area.
      </figcaption>
    </figure>
  );
}
