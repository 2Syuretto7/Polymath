"use client";

import { useState } from "react";

export type SortItem = { text: string; cat: string; why: string };

/** Sort short phrases or sentences into categories, with feedback on each choice. */
export function PhraseSortViz({ items, cats, prompt }: { items: SortItem[]; cats: string[]; prompt: string }) {
  const [picks, setPicks] = useState<Record<number, string>>({});
  const answered = Object.keys(picks).length;
  const right = items.filter((x, i) => picks[i] === x.cat).length;

  return (
    <figure className="viz">
      <ol className="sorter">
        {items.map((x, i) => {
          const pick = picks[i];
          return (
            <li key={x.text} className="sorter-item">
              <p className="sorter-q">{x.text}</p>
              <div className="segmented" role="group" aria-label={`Category for item ${i + 1}`}>
                {cats.map((k) => (
                  <button key={k} type="button" aria-pressed={pick === k}
                    className={pick === k ? (k === x.cat ? "seg is-right" : "seg is-wrong") : "seg"}
                    onClick={() => setPicks((p) => ({ ...p, [i]: k }))}>
                    {k}
                  </button>
                ))}
              </div>
              {pick && <p className="sorter-why">{pick === x.cat ? "Yes. " : `I would call it ${x.cat}. `}{x.why}</p>}
            </li>
          );
        })}
      </ol>
      <figcaption className="viz-caption" aria-live="polite">
        {answered === items.length ? `${right} of ${items.length} sorted as I would. Some cases are arguable, if you can say why.` : prompt}
      </figcaption>
    </figure>
  );
}
