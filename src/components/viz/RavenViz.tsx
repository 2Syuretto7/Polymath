"use client";

import { useState } from "react";

/** The raven paradox, Bayesian style: a black raven and a white shoe both confirm “all ravens are black”, but by very different amounts. */
export function RavenViz() {
  const [ravens, setRavens] = useState(100);
  const [logN, setLogN] = useState(6);
  const [white, setWhite] = useState(5);
  const N = Math.round(10 ** logN);
  const lrRaven = ravens / (ravens - white);
  const lrShoe = (N + white) / N;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>ravens in the world: <span className="mono">{ravens}</span></span>
          <input type="range" min={10} max={1000} step={10} value={ravens} onChange={(e) => { const r = Number(e.target.value); setRavens(r); if (white >= r) setWhite(r - 1); }} /></label>
        <label><span>non-black things that are not ravens: <span className="mono">{N.toLocaleString("en-IN")}</span></span>
          <input type="range" min={2} max={9} step={0.5} value={logN} onChange={(e) => setLogN(Number(e.target.value))} /></label>
        <label><span>white ravens, if the hypothesis is false: <span className="mono">{white}</span></span>
          <input type="range" min={1} max={Math.min(50, ravens - 1)} step={1} value={white} onChange={(e) => setWhite(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead><tr><th style={{ textTransform: "none" }}>observation</th><th style={{ textTransform: "none" }}>likelihood ratio, true against false</th></tr></thead>
          <tbody>
            <tr><td>pick a raven at random: it is black</td><td className="mono">{lrRaven.toFixed(4)}</td></tr>
            <tr><td>pick a non-black thing at random: it is not a raven, say a white shoe</td><td className="mono">{lrShoe.toFixed(8)}</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        both observations favour &ldquo;all ravens are black&rdquo;; the black raven counts about {Math.round(N / (ravens - white)).toLocaleString("en-IN")} times as much
      </p>
      <figcaption className="viz-caption">
        &ldquo;All ravens are black&rdquo; is logically equivalent to &ldquo;all non-black things are non-ravens&rdquo;, so
        if instances confirm, a white shoe confirms that ravens are black. On a Bayesian reading this is true but harmless: a
        likelihood ratio above 1 means some confirmation, and with vastly more non-black things than ravens the shoe&rsquo;s
        ratio is barely above 1. The comparison of the two excesses over 1 is shown.
      </figcaption>
    </figure>
  );
}
