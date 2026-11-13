"use client";

import { useState } from "react";

/** A Dutch book: credences in A and not-A that do not sum to 1 let a bookie guarantee you a loss. */
export function DutchBookViz() {
  const [ca, setCa] = useState(0.6);
  const [cn, setCn] = useState(0.6);
  const s = ca + cn;
  const stake = 100;
  // If s > 1 the bookie sells you both bets; if s < 1 the bookie buys both from you.
  const dir = s > 1 + 1e-9 ? 1 : s < 1 - 1e-9 ? -1 : 0;
  const pay = (aTrue: boolean) => {
    if (dir === 0) return 0;
    const price = stake * (ca + cn);
    const receipt = stake; // exactly one of the two bets pays out
    void aTrue;
    return dir === 1 ? receipt - price : price - receipt;
  };
  const fmt = (v: number) => `${v >= 0 ? "+" : "−"}₹${Math.abs(v).toFixed(0)}`;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>A: India wins the toss. You regard a bet that pays ₹100 if X is true as worth ₹100 × Cr(X), and will buy or sell it at that price.</p>
      <div className="viz-sliders">
        <label><span>Cr(A): <span className="mono">{ca.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={ca} onChange={(e) => setCa(Number(e.target.value))} /></label>
        <label><span>Cr(not A): <span className="mono">{cn.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={cn} onChange={(e) => setCn(Number(e.target.value))} /></label>
      </div>
      <p style={{ margin: "10px 0 6px" }}>
        {dir === 1 && <>The bookie <strong>sells</strong> you both bets, for ₹{(stake * ca).toFixed(0)} and ₹{(stake * cn).toFixed(0)}.</>}
        {dir === -1 && <>The bookie <strong>buys</strong> both bets from you, paying ₹{(stake * ca).toFixed(0)} and ₹{(stake * cn).toFixed(0)}.</>}
        {dir === 0 && <>Your credences sum to 1, so no combination of these bets guarantees you a loss.</>}
      </p>
      <table className="table mono" style={{ width: "auto", margin: "0 auto" }}>
        <thead><tr><th style={{ textTransform: "none" }}>outcome</th><th style={{ textTransform: "none" }}>your net gain</th></tr></thead>
        <tbody>
          <tr><td>A true</td><td style={{ color: pay(true) < 0 ? "var(--danger)" : undefined }}>{fmt(pay(true))}</td></tr>
          <tr><td>A false</td><td style={{ color: pay(false) < 0 ? "var(--danger)" : undefined }}>{fmt(pay(false))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Exactly one of the two bets pays ₹100, whatever happens. So if your prices add up to more than ₹100 you lose the difference buying both, and if they add up to less you lose it selling both. Only credences that sum to 1 escape a sure loss, which is the core of the Dutch book argument for probabilism.
      </figcaption>
    </figure>
  );
}
