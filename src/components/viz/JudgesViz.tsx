"use client";

import { useState } from "react";

const Q = ["delicacy of taste", "practice", "comparison", "free of prejudice", "good sense"];
const CRITICS: { name: string; has: boolean[]; pick: "Milton" | "Ogilby" }[] = [
  { name: "critic A", has: [true, true, true, true, true], pick: "Milton" },
  { name: "critic B", has: [true, true, true, true, true], pick: "Milton" },
  { name: "critic C", has: [true, false, true, true, true], pick: "Milton" },
  { name: "critic D", has: [false, true, true, false, true], pick: "Ogilby" },
  { name: "critic E", has: [true, true, false, true, false], pick: "Milton" },
  { name: "critic F", has: [false, false, false, true, true], pick: "Ogilby" },
  { name: "critic G", has: [true, true, true, false, true], pick: "Ogilby" },
  { name: "critic H", has: [false, false, true, false, false], pick: "Ogilby" },
];

/** Hume's true judges: filter a panel of critics by the five qualities and see whether their verdicts converge. */
export function JudgesViz() {
  const [req, setReq] = useState<boolean[]>([false, false, false, false, false]);
  const kept = CRITICS.filter((c) => req.every((r, i) => !r || c.has[i]));
  const m = kept.filter((c) => c.pick === "Milton").length;
  const o = kept.length - m;
  return (
    <figure className="viz">
      <p style={{ fontSize: 14, margin: "0 0 6px" }}><strong>Count only critics with:</strong></p>
      <div className="viz-controls">
        {Q.map((q, i) => <button key={q} type="button" className={req[i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setReq(req.map((x, j) => (j === i ? !x : x)))}>{q}</button>)}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 12, width: "100%", marginTop: 8 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 4 }}></th>
              {Q.map((q) => <th key={q} style={{ padding: 4, fontWeight: 400, color: "var(--text-muted)" }}>{q}</th>)}
              <th style={{ padding: 4 }}>prefers</th>
            </tr>
          </thead>
          <tbody>
            {CRITICS.map((c) => {
              const inn = kept.includes(c);
              return (
                <tr key={c.name} style={{ borderTop: "1px solid var(--border)", opacity: inn ? 1 : 0.3 }}>
                  <td style={{ padding: 4 }}>{c.name}</td>
                  {c.has.map((h, i) => <td key={i} style={{ padding: 4, textAlign: "center", color: h ? "var(--accent)" : "var(--text-faint)" }}>{h ? "yes" : "no"}</td>)}
                  <td style={{ padding: 4, textAlign: "center", fontWeight: 700 }}>{c.pick}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>
        {kept.length} critic{kept.length === 1 ? "" : "s"} counted: {m} prefer Milton, {o} prefer Ogilby.{" "}
        {kept.length > 0 && o === 0 ? "The joint verdict is unanimous: this is Hume’s standard of taste." : kept.length > 0 && m === 0 ? "Unanimous, but for Ogilby." : "Opinion is divided."}
      </p>
      <figcaption className="viz-caption">
        Hume: &lsquo;Strong sense, united to delicate sentiment, improved by practice, perfected by comparison, and cleared of
        all prejudice, can alone entitle critics to this valuable character; and the joint verdict of such, wherever they
        are to be found, is the true standard of taste and beauty.&rsquo; The critics here are invented to illustrate the
        idea.
      </figcaption>
    </figure>
  );
}
