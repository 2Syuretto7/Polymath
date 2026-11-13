"use client";

import { useState } from "react";

type Glue = { label: string; lr: "none" | "same" | "flip"; tb: "none" | "same" | "flip"; note: string };
const GLUES: Glue[] = [
  { label: "cylinder", lr: "same", tb: "none", note: "the left and right edges are glued the same way up" },
  { label: "Möbius band", lr: "flip", tb: "none", note: "the left and right edges are glued with a half twist" },
  { label: "torus", lr: "same", tb: "same", note: "both pairs of opposite edges are glued the same way" },
  { label: "Klein bottle", lr: "flip", tb: "same", note: "top and bottom as for a torus, left and right with a twist" },
];
const S = 280, P = 20, L = S - 2 * P;

/** Quotient spaces of a square: a straight path wraps across glued edges, reappearing where the gluing sends it. */
export function GluingViz() {
  const [gi, setGi] = useState(2);
  const [ang, setAng] = useState(30);
  const [len, setLen] = useState(3);
  const g = GLUES[gi];
  // walk in small steps through the unit square, wrapping by the gluing
  const segs: [number, number][][] = [[]];
  let x = 0.2, y = 0.3, dx = Math.cos((ang * Math.PI) / 180), dy = Math.sin((ang * Math.PI) / 180), stopped = "";
  const h = 0.005;
  segs[0].push([x, y]);
  for (let t = 0; t < len; t += h) {
    x += dx * h; y += dy * h;
    if (x > 1 || x < 0) {
      if (g.lr === "none") { stopped = "the path reached a free edge"; break; }
      x = x > 1 ? x - 1 : x + 1;
      if (g.lr === "flip") { y = 1 - y; dy = -dy; }
      segs.push([]);
    }
    if (y > 1 || y < 0) {
      if (g.tb === "none") { stopped = "the path reached a free edge"; break; }
      y = y > 1 ? y - 1 : y + 1;
      if (g.tb === "flip") { x = 1 - x; dx = -dx; }
      segs.push([]);
    }
    segs[segs.length - 1].push([x, y]);
  }
  const X = (u: number) => P + u * L, Y = (v: number) => P + (1 - v) * L;
  const edge = (x1: number, y1: number, x2: number, y2: number, kind: string, k: string) => {
    const glued = kind !== "none";
    const mx = (X(x1) + X(x2)) / 2, my = (Y(y1) + Y(y2)) / 2, up = y2 > y1 ? 1 : -1, rt = x2 > x1 ? 1 : -1;
    return (
      <g key={k}>
        <line x1={X(x1)} y1={Y(y1)} x2={X(x2)} y2={Y(y2)} style={{ stroke: glued ? "var(--accent)" : "var(--text-faint)", strokeWidth: glued ? 3 : 1.5, strokeDasharray: glued ? undefined : "4 4" }} />
        {glued && <path d={x1 === x2 ? `M${mx - 6},${my + 5 * up} L${mx},${my - 5 * up} L${mx + 6},${my + 5 * up}` : `M${mx - 5 * rt},${my - 6} L${mx + 5 * rt},${my} L${mx - 5 * rt},${my + 6}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />}
      </g>
    );
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Gluing">
        {GLUES.map((x, i) => <button key={x.label} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => setGi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>direction of the path: <span className="mono">{ang}°</span></span>
          <input type="range" min={0} max={90} step={5} value={ang} onChange={(e) => setAng(Number(e.target.value))} /></label>
        <label><span>length of the path: <span className="mono">{len}</span></span>
          <input type="range" min={0.5} max={8} step={0.5} value={len} onChange={(e) => setLen(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label="The square with glued edges, and a straight path that wraps across them" style={{ width: "100%", maxWidth: 320, display: "block", margin: "6px auto" }}>
        <rect x={P} y={P} width={L} height={L} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
        {/* left edge reads upward; the right edge points the same way, or down for a flip */}
        {edge(0, 0, 0, 1, g.lr, "l")}
        {g.lr === "flip" ? edge(1, 1, 1, 0, g.lr, "r") : edge(1, 0, 1, 1, g.lr, "r")}
        {edge(0, 0, 1, 0, g.tb, "b")}
        {g.tb === "flip" ? edge(1, 1, 0, 1, g.tb, "t") : edge(0, 1, 1, 1, g.tb, "t")}
        {segs.map((sg, i) => sg.length > 1 && <path key={i} d={sg.map(([u, v], j) => `${j ? "L" : "M"}${X(u).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.6 }} />)}
        <circle cx={X(0.2)} cy={Y(0.3)} r={4} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="mono" style={{ fontSize: 14 }}>
        {g.note}; the path crossed a glued edge {segs.length - 1} times{stopped ? `, then ${stopped}` : ""}
      </div>
      <figcaption className="viz-caption">
        The quotient topology makes glued points one point: a set is open when its preimage in the square is open. Edges with
        matching arrows are identified so the arrows agree. A path leaving through one glued edge comes back in through its
        partner, and with a twist it comes back upside down.
      </figcaption>
    </figure>
  );
}
