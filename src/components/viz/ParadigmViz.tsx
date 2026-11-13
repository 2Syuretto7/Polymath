"use client";

import { useState } from "react";

const STAGES = ["normal science", "crisis", "revolution"] as const;

/** Kuhn’s cycle: puzzle-solving within a paradigm, anomalies piling up, crisis, and a revolution to a new paradigm. */
export function ParadigmViz() {
  const [paradigm, setParadigm] = useState(0);
  const [solved, setSolved] = useState(0);
  const [anomalies, setAnomalies] = useState(0);
  const [tolerance, setTolerance] = useState(5);
  const [log, setLog] = useState<string[]>([]);
  const names = ["Ptolemaic astronomy", "Copernican astronomy", "Newtonian mechanics", "relativity"];
  const stage = anomalies >= tolerance ? (anomalies >= tolerance + 3 ? 2 : 1) : 0;
  const step = () => {
    // a deterministic pattern: the older a paradigm, the more often a puzzle resists
    const k = solved + anomalies;
    const resists = (k * 7 + paradigm * 3) % 10 < 2 + Math.floor(k / 4);
    if (resists) { setAnomalies(anomalies + 1); setLog([`puzzle ${k + 1} resists: an anomaly`, ...log].slice(0, 5)); }
    else { setSolved(solved + 1); setLog([`puzzle ${k + 1} solved within ${names[paradigm % 4]}`, ...log].slice(0, 5)); }
  };
  const revolt = () => { setParadigm(paradigm + 1); setSolved(0); setAnomalies(0); setLog([`revolution: ${names[(paradigm + 1) % 4]} replaces ${names[paradigm % 4]}`]); };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>anomalies the community tolerates before crisis: <span className="mono">{tolerance}</span></span>
          <input type="range" min={2} max={10} step={1} value={tolerance} onChange={(e) => setTolerance(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 6 }}>
        <button type="button" className="btn btn-primary" onClick={step} disabled={stage === 2}>Work on the next puzzle</button>
        <button type="button" className="btn" onClick={revolt} disabled={stage < 1}>Adopt a new paradigm</button>
      </div>
      <div className="segmented" role="group" aria-label="Stage" style={{ marginTop: 8 }}>
        {STAGES.map((s, i) => <span key={s} className={stage === i ? "seg is-on" : "seg"}>{s}</span>)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>paradigm: {names[paradigm % 4]}</div>
        <div>puzzles solved: {solved}, anomalies: {anomalies}</div>
        {log.map((l, i) => <div key={i} style={{ color: i ? "var(--text-muted)" : "var(--text)" }}>{l}</div>)}
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {stage === 0 ? "anomalies are set aside as puzzles for later; nobody tests the paradigm itself" : stage === 1 ? "crisis: the anomalies can no longer be shelved, and rival paradigms are proposed" : "the old paradigm cannot go on; a revolution is due"}
      </p>
      <figcaption className="viz-caption">
        For Kuhn, normal scientists do not try to refute their paradigm: a failed puzzle reflects on the scientist, not the
        theory. Only when anomalies pile up past what the community will tolerate does crisis set in, and then a new
        paradigm is adopted, not because it has been proved better by neutral rules, but because it promises to solve the
        problems that matter.
      </figcaption>
    </figure>
  );
}
