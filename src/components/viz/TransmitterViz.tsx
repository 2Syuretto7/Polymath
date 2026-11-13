"use client";

import { useState } from "react";

/** Scanlon’s transmitter room: summing many small benefits against one person’s grave harm, versus comparing individual complaints. */
export function TransmitterViz() {
  const [viewers, setViewers] = useState(5);
  const [pain, setPain] = useState(800);
  const per = 0.002; // each viewer's loss from fifteen minutes of missed match, in the same units as Jones's suffering
  const total = Math.pow(10, viewers) * per;
  const utilStop = total < pain;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>
        Jones is trapped under fallen equipment in the transmitter room during a World Cup final. Rescuing him needs the
        power off for fifteen minutes, interrupting the broadcast.
      </p>
      <div className="viz-sliders">
        <label><span>viewers: <span className="mono">10^{viewers} = {Math.pow(10, viewers).toLocaleString("en-IN")}</span></span><input type="range" min={3} max={9} step={1} value={viewers} onChange={(e) => setViewers(Number(e.target.value))} /></label>
        <label><span>Jones’s suffering: <span className="mono">{pain}</span></span><input type="range" min={100} max={2000} step={100} value={pain} onChange={(e) => setPain(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ fontSize: 14, marginTop: 10 }}>
        <thead><tr><th style={{ textTransform: "none" }}></th><th style={{ textTransform: "none" }}>summing welfare</th><th style={{ textTransform: "none" }}>contractualism</th></tr></thead>
        <tbody>
          <tr><td>what is compared</td><td>Jones&rsquo;s suffering, {pain}, against the total loss to viewers, {total.toLocaleString("en-IN", { maximumFractionDigits: 1 })}</td><td>Jones&rsquo;s complaint against the strongest single viewer&rsquo;s complaint, {per}</td></tr>
          <tr><td>verdict</td><td style={{ color: utilStop ? "var(--accent)" : "var(--danger)" }}>{utilStop ? "stop the broadcast and rescue Jones" : "keep the broadcast running; Jones waits"}</td><td style={{ color: "var(--accent)" }}>stop the broadcast and rescue Jones</td></tr>
        </tbody>
      </table>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {utilStop
          ? "With these numbers both views agree. Raise the number of viewers and see what happens to the sum."
          : "Enough small losses outweigh Jones’s agony in the sum. Scanlon thought this verdict plainly wrong."}
      </p>
      <figcaption className="viz-caption">
        T. M. Scanlon, in <em>What We Owe to Each Other</em> (1998): an act is wrong if any principle permitting it could
        reasonably be rejected. Complaints are compared one person at a time, so no number of small complaints adds up to
        outweigh one grave one. Critics ask whether this mishandles cases where many people face harms nearly as bad.
      </figcaption>
    </figure>
  );
}
