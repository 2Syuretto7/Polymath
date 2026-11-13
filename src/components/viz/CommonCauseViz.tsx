"use client";

import { useState } from "react";

const DAYS = 14;
const PRESSURE = [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0];

/** Regularity and common causes: a falling barometer is always followed by a storm, yet does not cause it. */
export function CommonCauseViz() {
  const [tapped, setTapped] = useState<boolean[]>(Array(DAYS).fill(false));
  const B = PRESSURE.map((p, i) => p === 1 || tapped[i]);
  const S = PRESSURE.map((p) => p === 1);
  const bThenS = B.every((b, i) => !b || S[i]);
  const pThenS = PRESSURE.every((p, i) => !p || S[i]);
  const row = (label: string, vals: boolean[], click?: (i: number) => void) => (
    <tr>
      <td style={{ whiteSpace: "nowrap" }}>{label}</td>
      {vals.map((v, i) => (
        <td key={i} style={{ padding: 2, textAlign: "center" }}>
          {click ? (
            <button type="button" aria-label={`day ${i + 1}`} aria-pressed={v} className={v ? "viz-chip is-on" : "viz-chip"} style={{ minWidth: 26, padding: "2px 4px" }} onClick={() => click(i)}>{v ? "yes" : "no"}</button>
          ) : (
            <span className="mono" style={{ display: "inline-block", minWidth: 26, color: v ? "var(--accent)" : "var(--text-faint)", fontWeight: v ? 700 : 400 }}>{v ? "yes" : "no"}</span>
          )}
        </td>
      ))}
    </tr>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Fourteen days. When the air pressure drops, the barometer falls and a storm follows. Click a day&rsquo;s barometer to push its needle down by hand.</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table mono" style={{ fontSize: 13, width: "auto" }}>
          <thead><tr><th style={{ textTransform: "none" }}>day</th>{Array.from({ length: DAYS }, (_, i) => <th key={i} style={{ textTransform: "none", padding: 2, textAlign: "center" }}>{i + 1}</th>)}</tr></thead>
          <tbody>
            {row("pressure drops", PRESSURE.map(Boolean))}
            {row("barometer falls", B, (i) => { if (!PRESSURE[i]) setTapped(tapped.map((x, j) => (j === i ? !x : x))); })}
            {row("storm follows", S)}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, marginTop: 10, fontSize: 14 }}>
        <div>every falling barometer is followed by a storm: <strong>{bThenS ? "yes" : "no"}</strong></div>
        <div>every pressure drop is followed by a storm: <strong>{pThenS ? "yes" : "no"}</strong></div>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {bThenS ? "A naive regularity theory counts the barometer as a cause of storms: the conjunction is constant." : "Pushing the needle breaks the regularity: the barometer fell, yet no storm came. The pressure drop, the common cause, is what the storms depend on."}
      </p>
      <figcaption className="viz-caption">
        Hume analysed causation as constant conjunction: c causes e when events like c are always followed by events like e. But two effects of a common cause are also constantly conjoined. Intervening on one of them, here by hand, reveals the difference, an idea that counterfactual and interventionist theories build on.
      </figcaption>
    </figure>
  );
}
