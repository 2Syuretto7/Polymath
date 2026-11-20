"use client";

import { useState } from "react";

const DICT: Record<string, { def: string; next: string[] }> = {
  meaning: { def: "the sense of a word or sign", next: ["sense", "sign"] },
  sense: { def: "the significance something has", next: ["significance"] },
  significance: { def: "the import of a thing", next: ["import"] },
  import: { def: "the meaning conveyed", next: ["meaning"] },
  sign: { def: "a mark that signifies something", next: ["mark", "significance"] },
  mark: { def: "a sign made on a surface", next: ["sign"] },
};

/** Following definitions in a dictionary: every meaning is given by further signs. */
export function DeferralChainViz() {
  const [path, setPath] = useState<string[]>(["meaning"]);
  const cur = path[path.length - 1];
  const E = DICT[cur];
  const returned = path.length > 1 && path.lastIndexOf(cur, path.length - 2) >= 0;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="seg" onClick={() => setPath(["meaning"])}>start again</button>
      </div>
      <div style={{ marginTop: 12, padding: "12px 14px", borderRadius: 8, border: "2px solid var(--accent)", background: "var(--accent-soft)" }}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>{cur}</div>
        <div style={{ color: "var(--text-muted)", marginTop: 4 }}>{E.def}</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {E.next.map((n) => (
            <button key={n} type="button" className="seg is-on" onClick={() => setPath([...path, n])} aria-label={`look up ${n}`}>look up &ldquo;{n}&rdquo;</button>
          ))}
        </div>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        Trail: {path.join(" → ")}. Steps taken: {path.length - 1}.
        {returned ? ` You are back at “${cur}”: the definitions refer only to one another.` : " Still no meaning outside the system of signs."}
      </p>
      <figcaption className="viz-caption">
        Each definition hands you on to other words, never to a meaning present in itself. Derrida coins{" "}
        <em>différance</em> for this double movement: a sign means by differing from other signs, and its meaning is
        always deferred along the chain. There is no transcendental signified that would bring the chain to rest.
      </figcaption>
    </figure>
  );
}
