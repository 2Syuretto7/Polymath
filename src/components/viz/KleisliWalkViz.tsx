"use client";

import { useState } from "react";

/** Apply the Kleisli extension of f(n) = [n − 1, n + 1] k times to [0], in the list or the powerset monad. */
export function walk(k: number, monad: "list" | "set") {
  let cur = new Map<number, number>([[0, 1]]);
  for (let s = 0; s < k; s++) {
    const next = new Map<number, number>();
    cur.forEach((c, n) => {
      for (const m of [n - 1, n + 1]) next.set(m, monad === "list" ? (next.get(m) ?? 0) + c : 1);
    });
    cur = next;
  }
  return cur;
}

/** Kleisli composition: chaining a nondeterministic step, with the monad deciding how results are collected. */
export function KleisliWalkViz() {
  const [k, setK] = useState(3);
  const [monad, setMonad] = useState<"list" | "set">("list");
  const res = walk(k, monad);
  const total = Array.from(res.values()).reduce((a, b) => a + b, 0);
  const max = Math.max(...Array.from(res.values()));
  const X = (n: number) => 270 + n * 36;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="monad">
        <button type="button" aria-pressed={monad === "list"} className={monad === "list" ? "seg is-on" : "seg"} onClick={() => setMonad("list")}>list monad</button>
        <button type="button" aria-pressed={monad === "set"} className={monad === "set" ? "seg is-on" : "seg"} onClick={() => setMonad("set")}>powerset monad</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>steps k = {k} <input type="range" min={0} max={6} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="How many times each integer appears after k steps of the walk" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={160} x2={500} y2={160} style={{ stroke: "var(--border-strong)" }} />
        {Array.from({ length: 13 }, (_, i) => i - 6).map((n) => {
          const c = res.get(n) ?? 0;
          const h = c ? (c / max) * 120 : 0;
          return (
            <g key={n}>
              {c > 0 && <rect x={X(n) - 13} y={160 - h} width={26} height={h} rx={3} style={{ fill: monad === "list" ? "var(--accent)" : "var(--success)" }} />}
              {c > 0 && <text x={X(n)} y={152 - h} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{c}</text>}
              <text x={X(n)} y={178} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{n}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        f(n) = [n − 1, n + 1], composed {k} times from 0: {monad === "list" ? `a list of ${total} results, with multiplicities` : `a set of ${total} reachable values`}.
      </p>
      <figcaption className="viz-caption">
        A Kleisli arrow X → T(Y) is a computation with effects. Composing two of them applies T to the second and then
        flattens with the multiplication μ : T(T(Y)) → T(Y). The list monad keeps every path, so the counts are binomial
        coefficients; the powerset monad forgets how many paths led to each value.
      </figcaption>
    </figure>
  );
}
