"use client";

import { useId, useState } from "react";
import { cycleString, cycleType } from "./permUtil";

const N = 8;
const START = [1, 2, 0, 4, 3, 6, 7, 5];
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** A permutation of eight points drawn as arrows. Click two points to swap where they go, and watch cycles split and merge. */
export function CycleViz() {
  const [p, setP] = useState<number[]>(START);
  const [sel, setSel] = useState<number | null>(null);
  const mk = useId().replace(/:/g, "");
  const cx = 120, cy = 115, R = 88;
  const pos = (i: number) => { const a = Math.PI / 2 - (2 * Math.PI * i) / N; return [cx + R * Math.cos(a), cy - R * Math.sin(a)]; };
  const click = (i: number) => {
    if (sel === null) { setSel(i); return; }
    if (sel !== i) { const q = [...p]; [q[sel], q[i]] = [q[i], q[sel]]; setP(q); }
    setSel(null);
  };
  const shuffle = () => { const q = Array.from({ length: N }, (_, i) => i); for (let i = N - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [q[i], q[j]] = [q[j], q[i]]; } setP(q); setSel(null); };
  const type = cycleType(p);
  const order = type.reduce((a, b) => (a * b) / gcd(a, b), 1);
  const trans = N - type.length;
  const arrow = (i: number) => {
    const j = p[i];
    const [x1, y1] = pos(i), [x2, y2] = pos(j);
    if (i === j) return <circle key={i} cx={x1 + (x1 - cx) * 0.18} cy={y1 + (y1 - cy) * 0.18} r={9} style={{ fill: "none", stroke: "var(--text-faint)" }} />;
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    const qx = mx - (dy / L) * 22, qy = my + (dx / L) * 22;
    const sh = (ax: number, ay: number, bx: number, by: number, d: number) => { const l = Math.hypot(bx - ax, by - ay); return [ax + ((bx - ax) * d) / l, ay + ((by - ay) * d) / l]; };
    const [sx, sy] = sh(x1, y1, qx, qy, 13), [ex, ey] = sh(x2, y2, qx, qy, 14);
    return <path key={i} d={`M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${qx.toFixed(1)} ${qy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`} markerEnd={`url(#${mk})`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.6 }} />;
  };
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 230" role="img" aria-label="A permutation of eight points drawn as arrows" style={{ width: "100%", display: "block" }}>
        <defs><marker id={mk} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
        {Array.from({ length: N }, (_, i) => arrow(i))}
        {Array.from({ length: N }, (_, i) => {
          const [x, y] = pos(i);
          return <g key={i} style={{ cursor: "pointer" }} onClick={() => click(i)}>
            <circle cx={x} cy={y} r={12} style={{ fill: sel === i ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 11, fill: sel === i ? "var(--bg)" : "var(--text)" }}>{i + 1}</text></g>;
        })}
        <text x={260} y={40} style={{ fontSize: 12, fill: "var(--text-muted)" }}>in cycle notation</text>
        <text x={260} y={64} className="mono" style={{ fontSize: 15, fill: "var(--text)" }}>{cycleString(p)}</text>
        <text x={260} y={100} style={{ fontSize: 12, fill: "var(--text-muted)" }}>in one-line notation</text>
        <text x={260} y={124} className="mono" style={{ fontSize: 14, fill: "var(--text)" }}>{p.map((x) => x + 1).join(" ")}</text>
        <text x={260} y={170} style={{ fontSize: 11, fill: "var(--text-muted)" }}>{sel === null ? "Click two points to swap their arrows." : `Now click a point to swap with ${sel + 1}.`}</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={shuffle}>Random permutation</button>
        <button type="button" className="btn" onClick={() => { setP(Array.from({ length: N }, (_, i) => i)); setSel(null); }}>Identity</button>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>cycle type</td><td className="mono">{type.join(", ")}</td></tr>
          <tr><td>order, the lcm of the cycle lengths</td><td className="mono">{order}</td></tr>
          <tr><td>fewest transpositions needed, 8 − number of cycles</td><td className="mono">{trans}</td></tr>
          <tr><td>parity</td><td>{trans % 2 === 0 ? "even" : "odd"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Each swap either splits one cycle into two or joins two into one, so the number of cycles changes by exactly one and the parity flips. Disjoint cycles commute, and the order of the permutation is the least common multiple of their lengths.
      </figcaption>
    </figure>
  );
}
