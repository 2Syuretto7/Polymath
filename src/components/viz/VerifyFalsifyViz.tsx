"use client";

import { useState } from "react";

const CASES = [
  {
    label: "all copper conducts",
    claim: "All copper conducts electricity.",
    obs: "samples of copper tested, each conducting",
    special: "a sample of copper that does not conduct",
    verdict: (n: number, sp: boolean) => (sp ? { v: false, f: true } : { v: false, f: false }),
    why: (sp: boolean) => (sp ? "one counterexample refutes a universal claim" : "however many samples pass, untested copper remains, so the claim is never conclusively verified"),
  },
  {
    label: "there is a white raven",
    claim: "There is at least one white raven.",
    obs: "ravens seen, each black",
    special: "a white raven",
    verdict: (n: number, sp: boolean) => (sp ? { v: true, f: false } : { v: false, f: false }),
    why: (sp: boolean) => (sp ? "one instance verifies an existential claim" : "unseen ravens remain, so no number of black ravens refutes it"),
  },
  {
    label: "every metal melts somewhere",
    claim: "Every metal melts at some temperature.",
    obs: "metals heated until they melted",
    special: "a metal that has not melted yet at any temperature tried",
    verdict: () => ({ v: false, f: false }),
    why: (sp: boolean) => (sp ? "an unmelted metal might melt at a higher temperature, so it does not refute the claim" : "untested metals remain, so the claim is not verified"),
  },
];

/** Strong verification and falsification for universal, existential and mixed claims. */
export function VerifyFalsifyViz() {
  const [ci, setCi] = useState(0);
  const [n, setN] = useState(100);
  const [sp, setSp] = useState(false);
  const C = CASES[ci];
  const r = C.verdict(n, sp);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Claim">
        {CASES.map((c, i) => <button key={c.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => { setCi(i); setSp(false); }}>{c.label}</button>)}
      </div>
      <p style={{ margin: "10px 0 6px", fontSize: 15 }}><strong>{C.claim}</strong></p>
      <div className="viz-sliders">
        <label><span>{C.obs}: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={10000} step={10} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 6 }}>
        <button type="button" className={sp ? "btn btn-primary" : "btn"} aria-pressed={sp} onClick={() => setSp(!sp)}>{sp ? `Remove: ${C.special}` : `Observe ${C.special}`}</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>conclusively verified: {r.v ? "yes" : "no"}</div>
        <div>conclusively falsified: {r.f ? "yes" : "no"}</div>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>{C.why(sp)}</p>
      <figcaption className="viz-caption">
        Universal laws can be falsified but not conclusively verified by finitely many observations; existential claims can be
        verified but not falsified; claims mixing &ldquo;every&rdquo; and &ldquo;some&rdquo; can be neither. A strict
        verifiability criterion of meaning would therefore rule out the laws of science, which pushed the logical empiricists
        towards weaker notions of confirmation.
      </figcaption>
    </figure>
  );
}
