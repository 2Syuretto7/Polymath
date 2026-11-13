"use client";

import { useState } from "react";

/** Conditionalisation and Jeffrey conditionalisation: updating on evidence learnt with certainty or only partly. */
export function JeffreyUpdateViz() {
  const [prior, setPrior] = useState(0.3);
  const [lh, setLh] = useState(0.8);
  const [ln, setLn] = useState(0.2);
  const [q, setQ] = useState(1);
  const pe = prior * lh + (1 - prior) * ln;
  const hGivenE = (prior * lh) / pe;
  const hGivenNotE = (prior * (1 - lh)) / (1 - pe);
  const post = q * hGivenE + (1 - q) * hGivenNotE;
  const bar = (v: number, strong: boolean) => (
    <div style={{ height: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
      <div style={{ width: `${v * 100}%`, height: "100%", background: strong ? "var(--accent)" : "var(--text-faint)" }} />
    </div>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>H: the fruit seller&rsquo;s mangoes are Alphonso. E: the mango you are handed is sweet.</p>
      <div className="viz-sliders">
        <label><span>prior Cr(H): <span className="mono">{prior.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.05} value={prior} onChange={(e) => setPrior(Number(e.target.value))} /></label>
        <label><span>Cr(E | H): <span className="mono">{lh.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.05} value={lh} onChange={(e) => setLh(Number(e.target.value))} /></label>
        <label><span>Cr(E | not H): <span className="mono">{ln.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.05} value={ln} onChange={(e) => setLn(Number(e.target.value))} /></label>
        <label><span>new Cr(E) after tasting: <span className="mono">{q.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={q} onChange={(e) => setQ(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        <div className="mono" style={{ fontSize: 13 }}>prior Cr(H) = {prior.toFixed(3)}</div>
        {bar(prior, false)}
        <div className="mono" style={{ fontSize: 13 }}>new Cr(H) = q·Cr(H | E) + (1 − q)·Cr(H | not E) = {post.toFixed(3)}</div>
        {bar(post, true)}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px" }}>Cr(H | E) = {hGivenE.toFixed(3)}; Cr(H | not E) = {hGivenNotE.toFixed(3)}; prior Cr(E) = {pe.toFixed(3)}</p>
      <figcaption className="viz-caption">
        With the last slider at 1 you become certain the mango is sweet, and conditionalisation sets your new credence in H to your old Cr(H | E). If the taste leaves you only fairly sure, Jeffrey&rsquo;s rule mixes the two conditional credences in proportion to your new confidence in E.
      </figcaption>
    </figure>
  );
}
