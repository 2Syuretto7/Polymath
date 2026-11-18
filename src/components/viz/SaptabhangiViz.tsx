"use client";

import { useState } from "react";
import type { ReactElement } from "react";

const PRIM = ["exists", "does not exist", "is inexpressible"];
const SEVEN = [
  { s: [0], skt: "syād asti", text: "In some respect, the pot exists: as a pot, made of clay, here and now, in its own form." },
  { s: [1], skt: "syān nāsti", text: "In some respect, the pot does not exist: as a cloth, made of thread, elsewhere, in another’s form." },
  { s: [0, 1], skt: "syād asti nāsti", text: "In some respect it exists, and in some respect it does not: the two claims taken one after the other." },
  { s: [2], skt: "syād avaktavya", text: "In some respect it is inexpressible: existence and non-existence asserted at once cannot be said in a single word." },
  { s: [0, 2], skt: "syād asti avaktavya", text: "In some respect it exists, and is inexpressible." },
  { s: [1, 2], skt: "syān nāsti avaktavya", text: "In some respect it does not exist, and is inexpressible." },
  { s: [0, 1, 2], skt: "syād asti nāsti avaktavya", text: "In some respect it exists, does not exist, and is inexpressible." },
];
const C: [number, number][] = [[210, 80], [310, 80], [260, 160]];

/** The seven-fold predication: every non-empty combination of three basic values. */
export function SaptabhangiViz() {
  const [k, setK] = useState(0);
  const S = SEVEN[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="predication" style={{ flexWrap: "wrap" }}>
        {SEVEN.map((x, i) => <button key={x.skt} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{i + 1}</button>)}
      </div>
      <svg viewBox="0 0 520 256" role="img" aria-label="Three overlapping circles for exists, does not exist and inexpressible" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          {C.map(([x, y], i) => <clipPath key={i} id={`sb-c${i}`}><circle cx={x} cy={y} r={68} /></clipPath>)}
        </defs>
        {S.s.reduceRight<ReactElement>((inner, i) => <g clipPath={`url(#sb-c${i})`}>{inner}</g>, (
          <>
            <rect x={0} y={0} width={520} height={256} style={{ fill: "var(--accent-soft)" }} />
            {[0, 1, 2].filter((i) => !S.s.includes(i)).map((i) => <circle key={i} cx={C[i][0]} cy={C[i][1]} r={68} style={{ fill: "var(--bg)" }} />)}
          </>
        ))}
        {C.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={68} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={i === 0 ? 130 : i === 1 ? 390 : 260} y={i === 2 ? 248 : 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 600 }}>{PRIM[i]}</text>
          </g>
        ))}
      </svg>
      <p style={{ margin: "4px 0" }}><strong>{k + 1}. {S.skt}</strong></p>
      <p className="mono" style={{ fontSize: 13 }}>{S.text}</p>
      <figcaption className="viz-caption">
        Three basic values give 2³ − 1 = 7 non-empty combinations, the shaded region in each case. Every predication is
        prefixed by syāt, &lsquo;in some respect&rsquo;: none is false, and none alone is the whole truth.
      </figcaption>
    </figure>
  );
}
