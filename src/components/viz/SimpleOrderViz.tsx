"use client";

import { useState } from "react";
import { simpleVerdict } from "./groupOrder";

/** Orders 1 to 100: click one to see why no simple group of that order exists, or why one does. */
export function SimpleOrderViz() {
  const [sel, setSel] = useState(30);
  const v = simpleVerdict(sel);
  const nonAbelian = (k: number) => k === 60;
  return (
    <figure className="viz">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 3 }}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((k) => {
          const s = simpleVerdict(k).simple;
          return (
            <button key={k} type="button" aria-pressed={sel === k} onClick={() => setSel(k)} className="mono"
              style={{
                padding: "4px 0", fontSize: 12, borderRadius: 4, cursor: "pointer",
                border: sel === k ? "2px solid var(--text)" : "1px solid var(--border)",
                background: nonAbelian(k) ? "var(--accent)" : s ? "var(--accent-soft)" : "var(--bg)",
                color: nonAbelian(k) ? "var(--bg)" : s ? "var(--text)" : "var(--text-faint)",
              }}>{k}</button>
          );
        })}
      </div>
      <p style={{ margin: "12px 0 4px" }}><strong className="mono">{sel}</strong>: {v.simple ? "a simple group of this order exists" : "no simple group of this order"} <span className="mono-meta" style={{ textTransform: "none" }}>({v.rule})</span></p>
      <p style={{ margin: 0 }}>{v.detail}</p>
      <figcaption className="viz-caption">
        Shaded orders are prime, where the simple groups are cyclic. The one filled order is 60, the first non-abelian simple group. Every other order up to 100 falls to one of five arguments: p-groups, a unique Sylow subgroup, an embedding into a small alternating group, counting elements, or twice an odd number.
      </figcaption>
    </figure>
  );
}
