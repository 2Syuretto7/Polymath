"use client";

import { useState } from "react";

type View = "interactionism" | "parallelism" | "occasionalism" | "epiphenomenalism";
const VIEWS: View[] = ["interactionism", "parallelism", "occasionalism", "epiphenomenalism"];
const ARROWS: Record<View, [string, string][]> = {
  interactionism: [["P1", "P2"], ["P1", "M1"], ["M1", "M2"], ["M2", "P3"], ["P2", "P3"]],
  parallelism: [["P1", "P2"], ["P2", "P3"], ["M1", "M2"]],
  occasionalism: [["G", "M1"], ["G", "P3"]],
  epiphenomenalism: [["P1", "P2"], ["P2", "P3"], ["P1", "M1"], ["P2", "M2"]],
};
const NOTE: Record<View, string> = {
  interactionism: "Descartes: the body affects the mind (the pin causes pain) and the mind moves the body (the decision raises the arm). But how can a non-spatial thing push a spatial one, as Elisabeth asked? And if the brain event P3 already has a sufficient physical cause, the mind’s push either overdetermines it or breaks physical causal closure.",
  parallelism: "Leibniz: mind and body never act on each other; they run in a harmony set up in advance, like two clocks keeping the same time. Closure is safe, but the agreement of pain with pinpricks becomes a cosmic coincidence or a divine arrangement.",
  occasionalism: "Malebranche: God is the only true cause. On the occasion of a pinprick, God produces pain; on the occasion of a decision, God moves the arm. The mind is causally idle, and so is the body.",
  epiphenomenalism: "Huxley: physical events cause mental ones, but mental events cause nothing. Closure is safe, but then pain never makes you wince, and your belief that you feel pain is not caused by the pain.",
};

/** Four dualist pictures of the causal links between mind and brain. */
export function InteractionViz() {
  const [v, setV] = useState<View>("interactionism");
  const P: Record<string, [number, number]> = { P1: [70, 150], P2: [280, 150], P3: [490, 150], M1: [175, 50], M2: [385, 50], G: [175, 225] };
  const label: Record<string, string> = { P1: "pinprick", P2: "brain state", P3: "arm moves", M1: "pain", M2: "decision to move", G: "God" };
  const W = 560, H = 250;
  const arrow = ([a, b]: [string, string], i: number) => {
    const [x1, y1] = P[a], [x2, y2] = P[b];
    const d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
    const sx = x1 + ux * 20, sy = y1 + uy * 20, ex = x2 - ux * 22, ey = y2 - uy * 22;
    const mental = a.startsWith("M") || b.startsWith("M");
    return (
      <g key={i}>
        <line x1={sx} y1={sy} x2={ex} y2={ey} style={{ stroke: mental ? "var(--accent)" : "var(--text-muted)", strokeWidth: 2 }} />
        <polygon points={`${ex},${ey} ${ex - ux * 9 - uy * 5},${ey - uy * 9 + ux * 5} ${ex - ux * 9 + uy * 5},${ey - uy * 9 - ux * 5}`} style={{ fill: mental ? "var(--accent)" : "var(--text-muted)" }} />
      </g>
    );
  };
  const nodes = v === "occasionalism" ? Object.keys(P) : Object.keys(P).filter((k) => k !== "G");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Dualist view">
        {VIEWS.map((x) => <button key={x} type="button" aria-pressed={v === x} className={v === x ? "seg is-on" : "seg"} onClick={() => setV(x)}>{x}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Causal links on ${v}`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={8} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>mind</text>
        <text x={8} y={118} style={{ fill: "var(--text-muted)", fontSize: 11 }}>body</text>
        <line x1={0} y1={100} x2={W} y2={100} style={{ stroke: "var(--border)", strokeDasharray: "4 4" }} />
        {ARROWS[v].map(arrow)}
        {nodes.map((k) => (
          <g key={k}>
            <circle cx={P[k][0]} cy={P[k][1]} r={18} style={{ fill: k.startsWith("M") ? "var(--accent)" : "var(--bg)", fillOpacity: k.startsWith("M") ? 0.25 : 1, stroke: k.startsWith("M") ? "var(--accent)" : "var(--text-muted)", strokeWidth: 1.5 }} />
            <text x={P[k][0]} y={P[k][1] + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11, fontWeight: 600 }}>{k}</text>
            <text x={P[k][0]} y={k === "G" ? P[k][1] + 4 : k.startsWith("M") ? P[k][1] - 26 : P[k][1] + 34} dx={k === "G" ? 26 : 0} textAnchor={k === "G" ? "start" : "middle"} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label[k]}</text>
          </g>
        ))}
      </svg>
      <figcaption className="viz-caption">{NOTE[v]}</figcaption>
    </figure>
  );
}
