"use client";

import type { Cover } from "./coverData";

/** Draws a cover of the figure eight as a graph: a-edges in one colour, b-edges in another. */
export function CoverGraphView({ c, highlight, labels, path }: { c: Cover; highlight?: number; labels?: string[]; path?: [number, number, "a" | "b"][] }) {
  const n = c.a.length;
  const cx = 150, cy = 100, R = 62;
  const P = (i: number): [number, number] => [cx + R * Math.cos(-Math.PI / 2 + (2 * Math.PI * i) / n), cy + R * Math.sin(-Math.PI / 2 + (2 * Math.PI * i) / n)];
  const edge = (i: number, j: number, kind: "a" | "b", key: string) => {
    const col = kind === "a" ? "var(--accent)" : "var(--success)";
    const on = path?.some(([x, y, k]) => x === i && y === j && k === kind);
    const [x1, y1] = P(i), [x2, y2] = P(j);
    if (i === j) {
      const ang = -Math.PI / 2 + (2 * Math.PI * i) / n + (kind === "a" ? -0.5 : 0.5);
      const lx = x1 + 24 * Math.cos(ang), ly = y1 + 24 * Math.sin(ang);
      return <circle key={key} cx={lx} cy={ly} r={14} style={{ fill: "none", stroke: col, strokeWidth: on ? 4 : 2 }} />;
    }
    const bend = kind === "a" ? 0.25 : -0.25;
    const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
    return <path key={key} d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`} markerEnd={`url(#cg-${kind})`} style={{ fill: "none", stroke: col, strokeWidth: on ? 4 : 2 }} />;
  };
  return (
    <svg viewBox={`0 0 300 ${n === 3 ? 172 : 200}`} role="img" aria-label="A covering graph of the figure eight" style={{ width: "100%", maxWidth: 360, display: "block" }}>
      <defs>
        <marker id="cg-a" markerWidth={8} markerHeight={8} refX={14} refY={4} orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--accent)" }} /></marker>
        <marker id="cg-b" markerWidth={8} markerHeight={8} refX={14} refY={4} orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--success)" }} /></marker>
      </defs>
      {c.a.map((j, i) => edge(i, j, "a", `a${i}`))}
      {c.b.map((j, i) => edge(i, j, "b", `b${i}`))}
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = P(i);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={11} style={{ fill: i === highlight ? "var(--accent)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fill: i === highlight ? "var(--bg)" : "var(--text)", fontSize: 11, fontWeight: 700 }}>{labels ? labels[i] : i}</text>
          </g>
        );
      })}
    </svg>
  );
}
