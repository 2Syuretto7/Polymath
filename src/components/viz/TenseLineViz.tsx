"use client";

import { useState } from "react";

const N = 12;

/** Prior's tense operators on a line of moments: F (at some future time), P (at some past time), G (always in the future), H (always in the past). */
export function TenseLineViz() {
  const [p, setP] = useState([false, false, true, false, false, true, true, false, true, true, true, true]);
  const [now, setNow] = useState(4);
  const fut = p.slice(now + 1), past = p.slice(0, now);
  const ops: [string, string, boolean][] = [
    ["Fp", "p will be true at some later moment", fut.some(Boolean)],
    ["Pp", "p was true at some earlier moment", past.some(Boolean)],
    ["Gp", "p will always be true", fut.every(Boolean)],
    ["Hp", "p has always been true", past.every(Boolean)],
    ["FGp", "p will eventually be true from then on", Array.from({ length: N }, (_, k) => k).some((k) => k > now && p.slice(k + 1).every(Boolean))],
  ];
  const X0 = 30, step = 38;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>now = moment {now} <input type="range" min={0} max={N - 1} value={now} onChange={(e) => setNow(Number(e.target.value))} aria-label="now" /></label>
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="A line of moments; click a moment to change whether p is true there" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0 - 10} y1={45} x2={X0 + step * (N - 1) + 10} y2={45} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {p.map((v, i) => (
          <g key={i} onClick={() => setP(p.map((x, j) => (j === i ? !x : x)))} style={{ cursor: "pointer" }} role="button" aria-label={`moment ${i}`}>
            <circle cx={X0 + i * step} cy={45} r={13} style={{ fill: v ? "var(--accent)" : "var(--bg)", stroke: i === now ? "var(--danger)" : "var(--border-strong)", strokeWidth: i === now ? 3 : 1.5 }} />
            <text x={X0 + i * step} y={49} textAnchor="middle" style={{ fill: v ? "var(--bg)" : "var(--text-muted)", fontSize: 11, fontWeight: 700 }}>{v ? "p" : "¬p"}</text>
            <text x={X0 + i * step} y={78} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i}</text>
          </g>
        ))}
        <text x={X0 + now * step} y={20} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 11, fontWeight: 700 }}>now</text>
      </svg>
      <table className="mono" style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
        <tbody>
          {ops.map(([f, m, v]) => (
            <tr key={f} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: 4, fontWeight: 700 }}>{f}</td><td style={{ padding: 4 }}>{m}</td>
              <td style={{ padding: 4, fontWeight: 700, color: v ? "var(--accent)" : "var(--danger)" }}>{v ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Click a moment to switch p. The time line here ends at moment 11, so &lsquo;always&rsquo; means &lsquo;at every later
        moment shown&rsquo;. Prior&rsquo;s tense logic treats these as modal operators over the earlier-than relation.
      </figcaption>
    </figure>
  );
}
