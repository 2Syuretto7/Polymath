"use client";

import { useState } from "react";

const PRINCIPLES = [
  { key: "hp", label: "Hume’s principle", rel: "F and G are equinumerous", fin: (n: number) => n + 1, finTxt: (n: number) => `${n + 1} (the sizes 0 to ${n})`, inf: "ℵ₀ (the sizes 0, 1, 2, …, ℵ₀)", infOk: true },
  { key: "v", label: "Basic Law V", rel: "F and G are coextensive", fin: (n: number) => 2 ** n, finTxt: (n: number) => `${2 ** n} (every subset)`, inf: "continuum many (every subset), more than ℵ₀ by Cantor", infOk: false },
  { key: "nui", label: "the Nuisance principle", rel: "F and G differ on finitely many objects", fin: () => 1, finTxt: () => "1 (all concepts differ finitely)", inf: "continuum many classes, more than ℵ₀", infOk: false },
];

/** An abstraction principle needs one object for each equivalence class of concepts: compare the counts. */
export function AbstractionCountViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(3);
  const [inf, setInf] = useState(false);
  const P = PRINCIPLES[k];
  const need = P.fin(n);
  const okFin = need <= n;
  const ok = inf ? P.infOk : okFin;
  const W = 500 / Math.max(n, Math.min(need, 40));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="principle">
        {PRINCIPLES.map((p, i) => <button key={p.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p.label}</button>)}
      </div>
      <p style={{ margin: "8px 0" }}>The abstract of F = the abstract of G exactly when <strong>{P.rel}</strong>.</p>
      {!inf && (
        <svg viewBox="0 0 520 90" role="img" aria-label="Objects available against abstracts needed" style={{ width: "100%", display: "block" }}>
          <text x={10} y={22} style={{ fill: "var(--text-muted)", fontSize: 11 }}>objects</text>
          <text x={10} y={67} style={{ fill: "var(--text-muted)", fontSize: 11 }}>abstracts</text>
          {Array.from({ length: n }, (_, i) => <circle key={i} cx={75 + i * Math.min(W, 40)} cy={18} r={7} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 2 }} />)}
          {Array.from({ length: Math.min(need, 40) }, (_, i) => <rect key={i} x={68 + i * Math.min(W, 11)} y={56} width={Math.min(W, 11) - 2} height={14} style={{ fill: i < n ? "var(--accent-soft)" : "var(--bg)", stroke: i < n ? "var(--accent)" : "var(--danger)" }} />)}
          {need > 40 && <text x={510} y={86} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>… {need} in all</text>}
        </svg>
      )}
      <div className="viz-controls">
        <button type="button" className={inf ? "btn btn-ghost" : "btn btn-primary"} onClick={() => setInf(false)}>finite domain</button>
        <button type="button" className={inf ? "btn btn-primary" : "btn btn-ghost"} onClick={() => setInf(true)}>countably infinite domain</button>
        {!inf && (
          <label className="mono" style={{ fontSize: 13 }}>
            objects: {n}{" "}
            <input type="range" min={1} max={8} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="number of objects" />
          </label>
        )}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: ok ? "var(--text)" : "var(--danger)" }}>
        Objects: {inf ? "ℵ₀" : n}. Abstracts needed: {inf ? P.inf : P.finTxt(n)}. {ok ? "Enough objects: the principle can hold here." : "Too few objects: the principle cannot hold in this domain."}
      </p>
      <figcaption className="viz-caption">
        Each class of concepts under the equivalence needs its own object as abstract. Basic Law V asks for more objects
        than there are, in every domain, which is Cantor&rsquo;s theorem behind Russell&rsquo;s paradox. Hume&rsquo;s
        principle forces the domain to be infinite, which is how it yields arithmetic. The Nuisance principle holds only in
        finite domains, so it is consistent yet incompatible with Hume&rsquo;s: bad company.
      </figcaption>
    </figure>
  );
}
