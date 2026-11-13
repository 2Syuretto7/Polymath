"use client";

import { useState } from "react";

type Node = { key: string; label: string; x: number; y: number; failQ: string };
const NODES: Node[] = [
  { key: "lub", label: "least upper bounds", x: 260, y: 40, failQ: "{q ∈ Q : q² < 2} is bounded above in Q but has no least upper bound in Q." },
  { key: "mct", label: "monotone convergence", x: 430, y: 130, failQ: "1, 1.4, 1.41, 1.414, … increases and is bounded, but has no limit in Q." },
  { key: "nip", label: "nested intervals", x: 380, y: 260, failQ: "[1, 2] ⊇ [1.4, 1.5] ⊇ [1.41, 1.42] ⊇ … in Q have no common point." },
  { key: "bw", label: "Bolzano–Weierstrass", x: 140, y: 260, failQ: "The decimal approximations to √2 form a bounded sequence in Q with no subsequence converging in Q." },
  { key: "cauchy", label: "Cauchy sequences converge", x: 90, y: 130, failQ: "The decimal approximations to √2 form a Cauchy sequence in Q with no limit in Q." },
];

const EDGES: { from: string; to: string; proof: string }[] = [
  { from: "lub", to: "mct", proof: "An increasing sequence bounded above has a supremum s. Given ε > 0, s − ε is not an upper bound, so some term exceeds it, and so do all later terms. So the sequence converges to s." },
  { from: "mct", to: "nip", proof: "The left endpoints of nested closed intervals increase and are bounded by any right endpoint, so they converge to some x. Then x lies in every interval." },
  { from: "nip", to: "bw", proof: "Halve an interval containing the bounded sequence, keep a half containing infinitely many terms, and repeat. The nested halves shrink to a point, and choosing one term from each gives a subsequence converging to it." },
  { from: "bw", to: "cauchy", proof: "A Cauchy sequence is bounded, so it has a convergent subsequence. A Cauchy sequence with a convergent subsequence converges to the same limit." },
  { from: "cauchy", to: "lub", proof: "Given a set bounded above, bisect between a point of the set and an upper bound, keeping an upper bound each time. The midpoints form a Cauchy sequence; its limit is the least upper bound. This step uses the Archimedean property." },
];

/** Five forms of completeness, each implying the next. All five fail in the rationals. */
export function ImplicationWebViz() {
  const [e, setE] = useState<number | null>(0);
  const [q, setQ] = useState(false);
  const by = (k: string) => NODES.find((n) => n.key === k)!;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Number system">
        <button type="button" className={!q ? "seg is-on" : "seg"} aria-pressed={!q} onClick={() => setQ(false)}>in the reals</button>
        <button type="button" className={q ? "seg is-on" : "seg"} aria-pressed={q} onClick={() => setQ(true)}>in the rationals</button>
      </div>
      <svg viewBox="0 0 520 300" role="img" aria-label="Five properties joined in a cycle of implications" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <defs>
          <marker id="iw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
        {EDGES.map((ed, i) => {
          const a = by(ed.from), b = by(ed.to);
          const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
          const sx = a.x + (dx / d) * 60, sy = a.y + (dy / d) * 26, tx = b.x - (dx / d) * 64, ty = b.y - (dy / d) * 28;
          return (
            <line key={i} x1={sx} y1={sy} x2={tx} y2={ty} markerEnd="url(#iw-arrow)" onClick={() => setE(i)}
              style={{ stroke: i === e && !q ? "var(--accent)" : "var(--text-faint)", strokeWidth: i === e && !q ? 3.5 : 2, cursor: "pointer", strokeDasharray: q ? "5 4" : "none" }} />
          );
        })}
        {NODES.map((n) => (
          <g key={n.key}>
            <rect x={n.x - 80} y={n.y - 18} width={160} height={36} rx={8} style={{ fill: q ? "var(--danger-soft)" : "var(--bg-subtle)", stroke: q ? "var(--danger)" : "var(--border-strong)" }} />
            <text x={n.x} y={n.y + 4} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--text)" }}>{n.label}</text>
          </g>
        ))}
      </svg>
      {!q && (
        <div className="viz-controls" style={{ flexWrap: "wrap" }}>
          {EDGES.map((ed, i) => (
            <button key={i} type="button" className={i === e ? "viz-chip is-on" : "viz-chip"} style={{ cursor: "pointer" }} aria-pressed={i === e} onClick={() => setE(i)}>
              {by(ed.from).label} ⇒ {by(ed.to).label}
            </button>
          ))}
        </div>
      )}
      {q ? (
        <ul className="tagger" style={{ marginTop: 10 }}>
          {NODES.map((n) => (
            <li key={n.key} className="tagger-row"><p className="tagger-text" style={{ margin: 0 }}><strong>{n.label}</strong> fails: {n.failQ}</p></li>
          ))}
        </ul>
      ) : (
        e !== null && <p className="tagger-why" style={{ marginTop: 10 }}>{EDGES[e].proof}</p>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {q
          ? "The rationals are an ordered field too, but every one of the five properties fails there, each time because of a gap such as √2."
          : "Follow the cycle: each property implies the next, so in an ordered field with the Archimedean property all five are equivalent. Any one can serve as the completeness axiom."}
      </figcaption>
    </figure>
  );
}
