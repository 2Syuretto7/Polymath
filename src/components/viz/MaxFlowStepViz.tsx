"use client";

import { useState } from "react";

const N = ["s", "a", "b", "c", "d", "t"];
const P: [number, number][] = [[40, 110], [170, 45], [170, 175], [340, 45], [340, 175], [480, 110]];
const E: { u: number; v: number; cap: number }[] = [
  { u: 0, v: 1, cap: 3 }, { u: 0, v: 2, cap: 2 }, { u: 1, v: 2, cap: 1 }, { u: 1, v: 3, cap: 3 },
  { u: 2, v: 4, cap: 2 }, { u: 3, v: 4, cap: 1 }, { u: 3, v: 5, cap: 2 }, { u: 4, v: 5, cap: 3 },
];

/** One Edmonds–Karp step: find a shortest augmenting path in the residual graph and push flow along it. */
export function augment(flow: number[]): { flow: number[]; path: number[] | null; reach: Set<number> } {
  const prev: ({ e: number; dir: 1 | -1 } | null)[] = Array(N.length).fill(null);
  const seen = new Set([0]);
  const q = [0];
  while (q.length) {
    const x = q.shift()!;
    E.forEach((ed, i) => {
      if (ed.u === x && !seen.has(ed.v) && flow[i] < ed.cap) { seen.add(ed.v); prev[ed.v] = { e: i, dir: 1 }; q.push(ed.v); }
      if (ed.v === x && !seen.has(ed.u) && flow[i] > 0) { seen.add(ed.u); prev[ed.u] = { e: i, dir: -1 }; q.push(ed.u); }
    });
  }
  if (!seen.has(5)) return { flow, path: null, reach: seen };
  const steps: { e: number; dir: 1 | -1 }[] = [];
  const path = [5];
  let x = 5;
  while (x !== 0) { const p = prev[x]!; steps.push(p); x = p.dir === 1 ? E[p.e].u : E[p.e].v; path.push(x); }
  const b = Math.min(...steps.map((p) => (p.dir === 1 ? E[p.e].cap - flow[p.e] : flow[p.e])));
  const nf = [...flow];
  for (const p of steps) nf[p.e] += p.dir * b;
  return { flow: nf, path: path.reverse(), reach: seen };
}

/** Ford–Fulkerson by shortest augmenting paths, ending at a cut whose capacity equals the flow. */
export function MaxFlowStepViz() {
  const [flow, setFlow] = useState<number[]>(E.map(() => 0));
  const [last, setLast] = useState<number[] | null>(null);
  const value = E.reduce((a, e, i) => a + (e.u === 0 ? flow[i] : 0), 0);
  const probe = augment(flow);
  const done = probe.path === null;
  const reach = probe.reach;
  const cutCap = E.reduce((a, e) => a + (reach.has(e.u) && !reach.has(e.v) ? e.cap : 0), 0);
  const onLast = (i: number) => !!last && last.some((x, k) => k > 0 && ((last[k - 1] === E[i].u && x === E[i].v) || (last[k - 1] === E[i].v && x === E[i].u)));
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 220" role="img" aria-label="A flow network with capacities" style={{ width: "100%", display: "block" }}>
        <defs><marker id="mf-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker></defs>
        {E.map((e, i) => {
          const [x1, y1] = P[e.u], [x2, y2] = P[e.v];
          const d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
          const cutEdge = done && reach.has(e.u) && !reach.has(e.v);
          return (
            <g key={i}>
              <line x1={x1 + ux * 17} y1={y1 + uy * 17} x2={x2 - ux * 17} y2={y2 - uy * 17} markerEnd="url(#mf-arrow)"
                style={{ stroke: cutEdge ? "var(--danger)" : onLast(i) ? "var(--accent)" : flow[i] > 0 ? "var(--text)" : "var(--text-muted)", strokeWidth: 1.5 + flow[i] * 1.2, strokeDasharray: cutEdge ? "6 4" : undefined }} />
              <text x={(x1 + x2) / 2 + uy * 12} y={(y1 + y2) / 2 - ux * 12 + 4} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{flow[i]}/{e.cap}</text>
            </g>
          );
        })}
        {N.map((n, v) => (
          <g key={n}>
            <circle cx={P[v][0]} cy={P[v][1]} r={15} style={{ fill: done && reach.has(v) ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={P[v][0]} y={P[v][1] + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{n}</text>
          </g>
        ))}
      </svg>
      <div className="viz-controls" style={{ display: "flex", gap: 8 }}>
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => { setLast(probe.path); setFlow(probe.flow); }}>Augment</button>
        <button type="button" className="btn btn-ghost" onClick={() => { setFlow(E.map(() => 0)); setLast(null); }}>Reset</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        flow value: {value}. {last ? `last augmenting path: ${last.map((v) => N[v]).join(" → ")}. ` : ""}
        {done ? `No augmenting path remains. The shaded vertices reachable from s define a cut of capacity ${cutCap}, equal to the flow.` : "An augmenting path exists: press Augment."}
      </p>
      <figcaption className="viz-caption">
        Labels show flow over capacity. Each augmentation pushes as much as the tightest edge on a shortest path allows, possibly
        undoing flow on backward edges. When no path remains, the vertices still reachable from s cut off t, and every edge
        leaving them (dashed red) is full.
      </figcaption>
    </figure>
  );
}
