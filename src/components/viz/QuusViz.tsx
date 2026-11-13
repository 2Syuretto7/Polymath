"use client";

import { useState } from "react";

/** Kripke’s quus: x ⊕ y is x + y when both are below a bound, and 5 otherwise. Past use cannot tell plus from quus. */
export function QuusViz() {
  const [bound, setBound] = useState(57);
  const [x, setX] = useState(68);
  const [y, setY] = useState(57);
  const quus = (a: number, b: number) => (a < bound && b < bound ? a + b : 5);
  const past = [[2, 3], [12, 7], [25, 30], [40, 16], [9, 47]].filter(([a, b]) => a < bound && b < bound);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>the largest number you have ever added is below: <span className="mono">{bound}</span></span>
          <input type="range" min={20} max={100} step={1} value={bound} onChange={(e) => setBound(Number(e.target.value))} /></label>
        <label><span>x: <span className="mono">{x}</span></span>
          <input type="range" min={0} max={120} step={1} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
        <label><span>y: <span className="mono">{y}</span></span>
          <input type="range" min={0} max={120} step={1} value={y} onChange={(e) => setY(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead>
            <tr><th style={{ textTransform: "none" }}>past sums you worked out</th><th style={{ textTransform: "none" }}>plus</th><th style={{ textTransform: "none" }}>quus</th></tr>
          </thead>
          <tbody>
            {past.map(([a, b]) => <tr key={`${a},${b}`}><td className="mono">{a} and {b}</td><td className="mono">{a + b}</td><td className="mono">{quus(a, b)}</td></tr>)}
            <tr style={{ fontWeight: 600, background: x + y !== quus(x, y) ? "var(--danger-soft)" : "var(--accent-soft)" }}>
              <td className="mono">new: {x} and {y}</td><td className="mono">{x + y}</td><td className="mono">{quus(x, y)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {x + y !== quus(x, y) ? "plus and quus disagree here; your past use fits both, so which did you mean?" : "plus and quus agree here, as on every past case"}
      </p>
      <figcaption className="viz-caption">
        Kripke&rsquo;s sceptic grants that every sum you have ever done fits both functions. Nothing in your past behaviour, and,
        he argues, nothing in your mind, settles that by &ldquo;plus&rdquo; you meant addition rather than quaddition. So what
        fact makes 125 the answer you ought to give to &ldquo;68 plus 57&rdquo;?
      </figcaption>
    </figure>
  );
}
