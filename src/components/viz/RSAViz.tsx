"use client";

import { useState } from "react";
import { gcd, modpow } from "./ntTools";

const PR = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

const inverse = (e: number, m: number) => {
  let [r0, r1, s0, s1] = [m, e % m, 0, 1];
  while (r1 !== 0) { const q = Math.floor(r0 / r1); [r0, r1] = [r1, r0 - q * r1]; [s0, s1] = [s1, s0 - q * s1]; }
  return ((s0 % m) + m) % m;
};

/** RSA with small primes: choose p, q, e and a message; encrypt with the public key and decrypt with the private one. */
export function RSAViz() {
  const [p, setP] = useState(17);
  const [q, setQ] = useState(23);
  const [ei, setEi] = useState(0);
  const [m, setM] = useState(42);
  const n = p * q, f = (p - 1) * (q - 1);
  const es = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37].filter((e) => gcd(e, f) === 1 && e < f);
  const e = es[Math.min(ei, es.length - 1)];
  const d = inverse(e, f);
  const M = Math.min(m, n - 1);
  const c = modpow(M, e, n), back = modpow(c, d, n);
  const pick = (cur: number, set: (v: number) => void, other: number, label: string) => (
    <div className="viz-controls">
      <span style={{ fontSize: 13, color: "var(--text-muted)", minWidth: 18 }}>{label}:</span>
      {PR.map((x) => <button key={x} type="button" aria-pressed={cur === x} disabled={x === other} className={cur === x ? "viz-chip is-on" : "viz-chip"} onClick={() => set(x)}>{x}</button>)}
    </div>
  );
  return (
    <figure className="viz">
      {pick(p, setP, q, "p")}
      {pick(q, setQ, p, "q")}
      <div className="viz-controls">
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>public exponent e:</span>
        {es.map((x, i) => <button key={x} type="button" aria-pressed={e === x} className={e === x ? "viz-chip is-on" : "viz-chip"} onClick={() => setEi(i)}>{x}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>message m: <span className="mono">{M}</span></span>
          <input type="range" min={2} max={n - 1} step={1} value={M} onChange={(ev) => setM(Number(ev.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
        <div style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "8px 10px" }}>
          <p style={{ margin: "0 0 4px", fontSize: 13, color: "var(--text-muted)" }}>public: anyone may know</p>
          <p className="mono" style={{ margin: 0, fontSize: 14 }}>n = {n}, e = {e}</p>
        </div>
        <div style={{ border: "1px solid var(--accent)", borderRadius: 6, padding: "8px 10px" }}>
          <p style={{ margin: "0 0 4px", fontSize: 13, color: "var(--text-muted)" }}>private: only the receiver</p>
          <p className="mono" style={{ margin: 0, fontSize: 14 }}>p = {p}, q = {q}, φ(n) = {f}, d = {d}</p>
        </div>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, marginTop: 10, fontSize: 14 }}>
        <div>check: e · d = {e} · {d} = {e * d} ≡ 1 (mod {f})</div>
        <div>encrypt: c = mᵉ mod n = {M}^{e} mod {n} = <strong>{c}</strong></div>
        <div>decrypt: cᵈ mod n = {c}^{d} mod {n} = <strong>{back}</strong></div>
      </div>
      <p className={back === M ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "6px 0" }}>
        {back === M ? "The receiver recovers the message." : "Decryption failed."}
      </p>
      <figcaption className="viz-caption">
        To find d you need φ(n) = (p − 1)(q − 1), and to find that you need the factors of n. With primes of a few hundred digits each, factorising n is far beyond any known method, so publishing n and e gives nothing away.
      </figcaption>
    </figure>
  );
}
