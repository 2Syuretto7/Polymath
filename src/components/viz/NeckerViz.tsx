"use client";

import { useState } from "react";

const MODES = ["just lines", "square A in front", "square B in front"];
const TEXT = [
  "Twelve lines on a page. Nothing on the paper changes in what follows.",
  "Square A comes forward: the cube is seen from above, and its lower-left face faces you.",
  "Square B comes forward: the cube is seen from below, and its upper-right face faces you.",
];

/** The Necker cube: one drawing, two incompatible ways of seeing it, and no sensation that changes between them. */
export function NeckerViz() {
  const [m, setM] = useState(0);
  const A = [[150, 70], [270, 70], [270, 190], [150, 190]];
  const B = A.map(([x, y]) => [x + 70, y - 45]);
  const poly = (q: number[][]) => q.map((p) => p.join(",")).join(" ");
  const style = (front: boolean, back: boolean) => ({
    fill: front ? "var(--accent-soft)" : "none",
    stroke: front ? "var(--accent)" : back ? "var(--text-faint)" : "var(--text)",
    strokeWidth: front ? 3 : 2,
    strokeDasharray: back ? "5 4" : undefined,
  });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="how to see it">
        {MODES.map((s, i) => <button key={s} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{s}</button>)}
      </div>
      <svg viewBox="0 0 420 220" role="img" aria-label="A Necker cube" style={{ width: "100%", maxWidth: 420, display: "block", marginTop: 8 }}>
        <polygon points={poly(B)} style={style(m === 2, m === 1)} />
        <polygon points={poly(A)} style={style(m === 1, m === 2)} />
        {A.map((p, i) => <line key={i} x1={p[0]} y1={p[1]} x2={B[i][0]} y2={B[i][1]} style={{ stroke: "var(--text)", strokeWidth: 2 }} />)}
        <text x={140} y={208} style={{ fill: "var(--text-muted)", fontSize: 13 }}>A</text>
        <text x={346} y={20} style={{ fill: "var(--text-muted)", fontSize: 13 }}>B</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{TEXT[m]}</p>
      <figcaption className="viz-caption">
        The marks on the page, and so the sensations they cause, are the same in both ways of seeing. What differs is the
        organisation of the whole: which face stands out, which recedes. Merleau-Ponty takes such cases to show that
        perception is not sensations plus a judgement added afterwards.
      </figcaption>
    </figure>
  );
}
