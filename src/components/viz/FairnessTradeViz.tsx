"use client";

import { useState } from "react";

// People per score 1 to 10 in each invented group. Scores are calibrated: a person with score s reoffends with probability s/10.
const W = {
  A: [1, 2, 4, 7, 10, 12, 12, 10, 7, 4],
  B: [4, 7, 10, 12, 12, 10, 7, 4, 2, 1],
};

function stats(w: number[], t: number) {
  let neg = 0, pos = 0, fp = 0, fn = 0, flagged = 0, tp = 0, n = 0;
  w.forEach((c, i) => {
    const s = i + 1, p = s / 10;
    n += c; pos += c * p; neg += c * (1 - p);
    if (s >= t) { flagged += c; tp += c * p; fp += c * (1 - p); } else fn += c * p;
  });
  return { base: pos / n, fpr: neg ? fp / neg : 0, fnr: pos ? fn / pos : 0, ppv: flagged ? tp / flagged : 0 };
}

/** A calibrated risk score applied to two groups with different base rates: error rates cannot all be equal. */
export function FairnessTradeViz() {
  const [t, setT] = useState(6);
  const [tB, setTB] = useState(6);
  const [sep, setSep] = useState(false);
  const a = stats(W.A, t), b = stats(W.B, sep ? tB : t);
  const pc = (x: number) => `${Math.round(x * 100)}%`;
  const rows: [string, number, number][] = [
    ["base rate (who reoffend)", a.base, b.base],
    ["false positive rate", a.fpr, b.fpr],
    ["false negative rate", a.fnr, b.fnr],
    ["of those flagged, share who reoffend", a.ppv, b.ppv],
  ];
  const bars = (w: number[], x0: number, th: number, label: string) => (
    <g>
      <text x={x0} y={16} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{label}</text>
      {w.map((c, i) => (
        <g key={i}>
          <rect x={x0 + i * 22} y={110 - c * 7} width={18} height={c * 7} style={{ fill: i + 1 >= th ? "var(--danger)" : "var(--accent)", opacity: 0.75 }} />
          <text x={x0 + i * 22 + 9} y={124} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i + 1}</text>
        </g>
      ))}
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>threshold{sep ? " for A" : ""} = {t} <input type="range" min={1} max={10} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="threshold" /></label>
        {sep && <label>threshold for B = {tB} <input type="range" min={1} max={10} value={tB} onChange={(e) => setTB(Number(e.target.value))} aria-label="threshold B" /></label>}
        <button type="button" className="btn btn-ghost" onClick={() => setSep(!sep)}>{sep ? "use one threshold" : "use separate thresholds"}</button>
      </div>
      <svg viewBox="0 0 520 132" role="img" aria-label="Score distributions of two groups" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {bars(W.A, 20, t, "group A")}
        {bars(W.B, 280, sep ? tB : t, "group B")}
      </svg>
      <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
        <thead><tr><th style={{ textAlign: "left", padding: 4, fontWeight: 400, color: "var(--text-muted)" }}>measure</th><th style={{ padding: 4 }}>A</th><th style={{ padding: 4 }}>B</th></tr></thead>
        <tbody>
          {rows.map(([n, x, y]) => (
            <tr key={n} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: 4 }}>{n}</td>
              <td style={{ padding: 4, textAlign: "center", fontWeight: 700 }}>{pc(x)}</td>
              <td style={{ padding: 4, textAlign: "center", fontWeight: 700 }}>{pc(y)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        The groups and numbers are invented. Bars count people at each risk score; red bars are flagged as high risk. The
        score is calibrated: a score of s carries the same risk in both groups. Apart from flagging everyone, one threshold
        never equalises both error rates here. Chouldechova proved the general fact: when base rates differ, a classifier
        with equal predictive value in both groups cannot also have equal false positive and false negative rates, unless
        it makes no errors.
      </figcaption>
    </figure>
  );
}
