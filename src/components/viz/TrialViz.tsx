"use client";

import { useState } from "react";
import { fmtNum } from "./format";

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const BASE = 0.4;

function run(seed: number, n: number, effect: number) {
  const r = rng(seed);
  let c = 0, t = 0;
  for (let i = 0; i < n; i++) { if (r() < BASE) c++; if (r() < BASE + effect) t++; }
  const diff = (t - c) / n;
  const p = (c + t) / (2 * n);
  const margin = 1.645 * Math.sqrt((p * (1 - p) * 2) / n);
  return { c, t, diff, margin, sig: diff > margin };
}

/** A randomised trial: treatment against control, with chance variation, and what happens when many null trials are run. */
export function TrialViz() {
  const [n, setN] = useState(50);
  const [effect, setEffect] = useState(0.1);
  const [seed, setSeed] = useState(1);
  const [batch, setBatch] = useState<number | null>(null);
  const R = run(seed, n, effect);
  const pc = (x: number) => `${fmtNum(Number((100 * x).toFixed(1)))}%`;
  const runNull = () => {
    let k = 0;
    for (let i = 0; i < 20; i++) if (run(1000 + seed * 20 + i, n, 0).sig) k++;
    setBatch(k);
  };

  return (
    <figure className="viz">
      <p style={{ margin: 0 }}>
        Patients are assigned at random to a new treatment or to a placebo. Without treatment, {pc(BASE)} recover.
      </p>
      <div className="viz-sliders">
        <label><span>patients in each group: <span className="mono">{n}</span></span>
          <input type="range" min={10} max={500} step={10} value={n} onChange={(e) => { setN(Number(e.target.value)); setBatch(null); }} /></label>
        <label><span>true extra recovery from the treatment: <span className="mono">{pc(effect)}</span></span>
          <input type="range" min={0} max={0.3} step={0.01} value={effect} onChange={(e) => setEffect(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => { setSeed((s) => s + 1); setBatch(null); }}>Run the trial again</button>
        <button type="button" className="btn" onClick={runNull}>Run 20 trials of a useless treatment</button>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>recovered on placebo</td><td className="mono">{R.c} of {n} = {pc(R.c / n)}</td></tr>
          <tr><td>recovered on treatment</td><td className="mono">{R.t} of {n} = {pc(R.t / n)}</td></tr>
          <tr><td>difference</td><td className="mono">{pc(R.diff)}</td></tr>
          <tr><td>a difference chance alone exceeds only 1 time in 20</td><td className="mono">{pc(R.margin)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {batch !== null
          ? `Of 20 trials of a treatment that does nothing, ${batch} looked like a success by this test. About 1 in 20 is expected. If only the 'successes' are published, the literature fills with false findings.`
          : R.sig
            ? "The difference is larger than chance alone usually produces: evidence that the treatment works. Run it again to see how much the result varies."
            : "The difference is no larger than chance alone could easily produce, so this trial cannot tell the treatment from a placebo. Try more patients."}
      </figcaption>
    </figure>
  );
}
