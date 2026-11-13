"use client";

import { useMemo, useState } from "react";

const G = 401;
const xs = Array.from({ length: G }, (_, i) => i / (G - 1));
const inA = (x: number) => x <= 0.3 || x >= 0.65;
const f = (x: number) => 0.9 * Math.sin(7 * x);
const MAX = 8;

/** The Tietze extension theorem by successive approximation: each step adds a Urysohn function of size a third of the current error bound. */
export function TietzeViz() {
  const [stage, setStage] = useState(0);
  const gs = useMemo(() => {
    const out: number[][] = [xs.map(() => 0)];
    let g = xs.map(() => 0);
    for (let k = 0; k < MAX; k++) {
      const c = (2 / 3) ** k;
      const P: number[] = [], N: number[] = [];
      xs.forEach((x, i) => { if (!inA(x)) return; const e = f(x) - g[i]; if (e >= c / 3) P.push(x); else if (e <= -c / 3) N.push(x); });
      const d = (x: number, S: number[]) => (S.length ? Math.min(...S.map((s) => Math.abs(x - s))) : Infinity);
      g = g.map((v, i) => {
        const dp = d(xs[i], P), dn = d(xs[i], N);
        let h: number;
        if (!P.length && !N.length) h = 0;
        else if (!P.length) h = -c / 3;
        else if (!N.length) h = c / 3;
        else h = (c / 3) * (dn - dp) / (dn + dp);
        return v + h;
      });
      out.push(g);
    }
    return out;
  }, []);
  const g = gs[stage];
  const err = Math.max(...xs.map((x, i) => (inA(x) ? Math.abs(f(x) - g[i]) : 0)));
  const W = 520, H = 220, X0 = 30, X1 = 500, X = (v: number) => X0 + v * (X1 - X0), Y = (v: number) => 110 - v * 90;
  const pathOf = (vals: number[], keep: (x: number) => boolean) => {
    let d = "", pen = false;
    xs.forEach((x, i) => { if (keep(x)) { d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(vals[i]).toFixed(1)}`; pen = true; } else pen = false; });
    return d;
  };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={stage >= MAX} onClick={() => setStage(stage + 1)}>Add the next correction</button>
        <button type="button" className="btn" onClick={() => setStage(0)}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A function on a closed set A, and the extension built so far" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(0)} y={14} width={X(0.3) - X(0)} height={192} style={{ fill: "var(--accent-soft)" }} />
        <rect x={X(0.65)} y={14} width={X(1) - X(0.65)} height={192} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X0} y1={Y(0)} x2={X1} y2={Y(0)} style={{ stroke: "var(--border)", strokeWidth: 1.5 }} />
        {[1, -1].map((v) => <text key={v} x={X0 - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <path d={pathOf(xs.map(f), inA)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 4, opacity: 0.35 }} />
        <path d={pathOf(g, () => true)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={X(0.15)} y={216} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>A</text>
        <text x={X(0.825)} y={216} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>A</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        after {stage} step{stage === 1 ? "" : "s"}: largest error on A is {err.toFixed(4)}, within the bound {((2 / 3) ** stage).toFixed(4)}, which is two thirds of the bound before
      </p>
      <figcaption className="viz-caption">
        The pale thick curve is the given f on the shaded closed set A, with values in [−1, 1]. At each step, where the error
        is at least a third of the current bound we push up, where it is at most minus a third we push down, using a Urysohn
        function of size a third of the bound. The error bound shrinks by a factor 2/3 each time, and the corrections add up
        to a continuous function on the whole interval that equals f on A.
      </figcaption>
    </figure>
  );
}
