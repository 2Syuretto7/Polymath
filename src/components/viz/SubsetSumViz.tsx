"use client";

import { useState } from "react";

const NUMS = [3, 34, 4, 12, 5, 2, 27, 9];
const TARGETS = [9, 30, 44, 100];

/** Subset sum: finding a subset that hits the target may need a search through 2ⁿ subsets, but checking a proposed one is quick. */
export function SubsetSumViz() {
  const [target, setTarget] = useState(30);
  const [picked, setPicked] = useState<number[]>([]);
  const [search, setSearch] = useState<{ tried: number; found: number[] | null } | null>(null);
  const sum = picked.reduce((s, i) => s + NUMS[i], 0);
  const n = NUMS.length;

  const runSearch = () => {
    let tried = 0; let found: number[] | null = null;
    for (let mask = 0; mask < 1 << n; mask++) {
      tried++;
      let s = 0; const idx: number[] = [];
      for (let i = 0; i < n; i++) if (mask & (1 << i)) { s += NUMS[i]; idx.push(i); }
      if (s === target && idx.length > 0) { found = idx; break; }
    }
    setSearch({ tried, found });
  };
  const toggle = (i: number) => setPicked(picked.includes(i) ? picked.filter((x) => x !== i) : [...picked, i]);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Target">
        {TARGETS.map((t) => (
          <button key={t} type="button" className={t === target ? "seg is-on" : "seg"} aria-pressed={t === target} onClick={() => { setTarget(t); setSearch(null); setPicked([]); }}>target {t}</button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "12px 0 6px", textTransform: "none" }}>tap numbers to propose a subset</p>
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        {NUMS.map((x, i) => (
          <button key={i} type="button" className={picked.includes(i) ? "viz-chip is-on" : "viz-chip"} aria-pressed={picked.includes(i)} style={{ cursor: "pointer", minWidth: 40, justifyContent: "center" }} onClick={() => toggle(i)}>{x}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td>verify your subset</td><td>{picked.length === 0 ? "pick some numbers" : `${picked.map((i) => NUMS[i]).join(" + ")} = ${sum}: ${sum === target ? "hits the target" : "misses"} (${Math.max(picked.length - 1, 0)} ${picked.length === 2 ? "addition" : "additions"})`}</td></tr>
          <tr><td>exhaustive search</td><td>{search ? (search.found ? `found ${search.found.map((i) => NUMS[i]).join(" + ")} after trying ${search.tried} subsets` : `no subset works: all ${search.tried} subsets tried`) : <button type="button" className="btn" onClick={runSearch}>Search every subset</button>}</td></tr>
          <tr><td>subsets of {n} numbers</td><td className="mono">2^{n} = {2 ** n}; with 100 numbers, 2^100 ≈ 1.3 × 10^30</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Checking a proposed answer takes a handful of additions, a number of steps that grows like n. Finding one by brute
        force may mean trying every subset, a number that doubles with each new number. Subset sum is in NP because
        answers are quick to check; whether they can always be found quickly is the P versus NP question.
      </figcaption>
    </figure>
  );
}
