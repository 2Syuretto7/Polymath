"use client";

import { useState } from "react";

/** Frege’s equinumerosity: pair the cups with the saucers one to one, without counting either. */
export function EquinumerosityViz() {
  const [cups, setCups] = useState(6);
  const [saucers, setSaucers] = useState(8);
  const [paired, setPaired] = useState(0);
  const most = Math.min(cups, saucers);
  const done = paired === most;
  const reset = (f: () => void) => { f(); setPaired(0); };
  // Scatter the saucers so that pairing cannot be done by position alone.
  const sx = (i: number, m: number) => 40 + ((i * 5) % m) * (440 / Math.max(1, m - 1));
  const cx = (i: number, m: number) => 40 + i * (440 / Math.max(1, m - 1));
  const sOrder = Array.from({ length: saucers }, (_, i) => i).sort((a, b) => sx(a, saucers) - sx(b, saucers));
  let verdict = "Keep pairing.";
  if (done) {
    if (cups === saucers) verdict = "Every cup has a saucer and every saucer a cup: the concepts are equinumerous, so the number of cups is the number of saucers.";
    else if (cups > saucers) verdict = `${cups - saucers} cup${cups - saucers > 1 ? "s are" : " is"} left over: there are more cups than saucers.`;
    else verdict = `${saucers - cups} saucer${saucers - cups > 1 ? "s are" : " is"} left over: there are more saucers than cups.`;
  }
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>cups: <span className="mono">{cups}</span></span>
          <input type="range" min={1} max={9} step={1} value={cups} onChange={(e) => reset(() => setCups(Number(e.target.value)))} /></label>
        <label><span>saucers: <span className="mono">{saucers}</span></span>
          <input type="range" min={1} max={9} step={1} value={saucers} onChange={(e) => reset(() => setSaucers(Number(e.target.value)))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" disabled={done} onClick={() => setPaired((p) => Math.min(most, p + 1))}>pair one more</button>
        <button type="button" className="btn btn-ghost" disabled={done} onClick={() => setPaired(most)}>pair all</button>
        <button type="button" className="btn btn-ghost" onClick={() => setPaired(0)}>start again</button>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Cups paired with saucers" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: paired }, (_, i) => (
          <line key={i} x1={cx(i, cups)} y1={42} x2={sx(sOrder[i], saucers)} y2={128} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        ))}
        {Array.from({ length: cups }, (_, i) => (
          <g key={i}>
            <rect x={cx(i, cups) - 12} y={20} width={24} height={22} rx={4} style={{ fill: i < paired ? "var(--accent-soft)" : "var(--bg)", stroke: i < paired ? "var(--accent)" : "var(--text-muted)", strokeWidth: 1.5 }} />
          </g>
        ))}
        {Array.from({ length: saucers }, (_, i) => {
          const used = sOrder.indexOf(i) < paired;
          return <ellipse key={i} cx={sx(i, saucers)} cy={134} rx={18} ry={7} style={{ fill: used ? "var(--accent-soft)" : "var(--bg)", stroke: used ? "var(--accent)" : "var(--text-muted)", strokeWidth: 1.5 }} />;
        })}
        <text x={8} y={14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>cups</text>
        <text x={8} y={162} style={{ fill: "var(--text-muted)", fontSize: 11 }}>saucers</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>pairs made: {paired}</div>
        <div style={{ fontWeight: 700 }}>{verdict}</div>
      </div>
      <figcaption className="viz-caption">
        A waiter can tell that there are as many saucers as cups by putting one cup on each saucer, without counting either.
        Frege took this one-to-one correspondence as basic. The concepts F and G are equinumerous when such a pairing
        exists, and Hume&rsquo;s principle says the number of Fs equals the number of Gs exactly when F and G are
        equinumerous. Counting is then a special case: pairing things with the numbers from 1 up to some n.
      </figcaption>
    </figure>
  );
}
