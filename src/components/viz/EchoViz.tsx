"use client";

import { useState } from "react";

/** A bat's sonar, described from outside: echo delay and pitch shift. We can compute everything and still not know what it is like. */
export function EchoViz() {
  const [d, setD] = useState(3);
  const [v, setV] = useState(2);
  const c = 343, f = 50000;
  const delay = (2 * d) / c;
  const shift = f * ((c + v) / (c - v)) - f;
  const W = 560, H = 140, bx = 50, mx = 50 + (d / 10) * 440;
  const rings = [0.25, 0.5, 0.75];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>distance to the moth: <span className="mono">{d.toFixed(1)} m</span></span>
          <input type="range" min={0.5} max={10} step={0.5} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
        <label><span>closing speed: <span className="mono">{v.toFixed(1)} m/s</span></span>
          <input type="range" min={-4} max={8} step={0.5} value={v} onChange={(e) => setV(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A bat's call travelling to a moth and echoing back" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {rings.map((r) => <path key={r} d={`M ${bx + (mx - bx) * r} ${H / 2 - 30} Q ${bx + (mx - bx) * r + 14} ${H / 2} ${bx + (mx - bx) * r} ${H / 2 + 30}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5, strokeOpacity: 0.4 + r * 0.6 }} />)}
        {rings.map((r) => <path key={`e${r}`} d={`M ${mx - (mx - bx) * r} ${H / 2 - 18} Q ${mx - (mx - bx) * r - 10} ${H / 2} ${mx - (mx - bx) * r} ${H / 2 + 18}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.2, strokeDasharray: "3 3" }} />)}
        <circle cx={bx} cy={H / 2} r={12} style={{ fill: "var(--text)" }} />
        <text x={bx} y={H / 2 + 32} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>bat</text>
        <circle cx={mx} cy={H / 2} r={7} style={{ fill: "var(--accent)" }} />
        <text x={mx} y={H / 2 + 26} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>moth</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>echo returns after {(delay * 1000).toFixed(1)} ms</div>
        <div>a {f / 1000} kHz call returns {shift >= 0 ? "higher" : "lower"} by {Math.abs(shift).toFixed(0)} Hz</div>
        <div>what it is like for the bat: ?</div>
      </div>
      <figcaption className="viz-caption">
        The physics is complete: from the delay the bat&rsquo;s brain can work out distance, and from the pitch shift, speed. Nagel&rsquo;s point is that all of this is described from no one&rsquo;s point of view, while the bat&rsquo;s experience is had from one. Knowing every number above does not tell us what perceiving a moth by echo is like.
      </figcaption>
    </figure>
  );
}
