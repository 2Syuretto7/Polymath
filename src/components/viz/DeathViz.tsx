"use client";

import { useState } from "react";

const X0 = 40, X1 = 590, Y = 90;
const T0 = -60, T1 = 140;

/** Lucretius's symmetry argument and the deprivation account of the badness of death, on a timeline. */
export function DeathViz() {
  const [death, setDeath] = useState(45);
  const [view, setView] = useState<0 | 1>(1);
  const X = (t: number) => X0 + ((t - T0) / (T1 - T0)) * (X1 - X0);
  const lost = Math.max(0, 85 - death);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        <button type="button" className={view === 0 ? "btn btn-primary" : "btn"} aria-pressed={view === 0} onClick={() => setView(0)}>Epicurus and Lucretius</button>
        <button type="button" className={view === 1 ? "btn btn-primary" : "btn"} aria-pressed={view === 1} onClick={() => setView(1)}>The deprivation account</button>
      </div>
      <svg viewBox="0 0 620 170" role="img" aria-label={`A life from birth to age ${death}, between two stretches of non-existence`}>
        <rect x={X(T0)} y={Y - 16} width={X(0) - X(T0)} height={32} className="viz-cell" style={{ strokeDasharray: "4 4" }} />
        <rect x={X(0)} y={Y - 16} width={X(death) - X(0)} height={32} className="viz-cell is-on" />
        {view === 1 && lost > 0 && <rect x={X(death)} y={Y - 16} width={X(death + lost) - X(death)} height={32} style={{ fill: "color-mix(in srgb, var(--danger) 22%, transparent)", stroke: "var(--danger)", strokeDasharray: "4 4" }} />}
        <rect x={X(view === 1 ? death + lost : death)} y={Y - 16} width={X(T1) - X(view === 1 ? death + lost : death)} height={32} className="viz-cell" style={{ strokeDasharray: "4 4" }} />
        <text x={(X(T0) + X(0)) / 2} y={Y + 5} textAnchor="middle" className="plot-tick">before birth</text>
        <text x={(X(0) + X(death)) / 2} y={Y + 5} textAnchor="middle" className="viz-label is-on">your life</text>
        {view === 1 && lost > 8 && <text x={(X(death) + X(death + lost)) / 2} y={Y + 5} textAnchor="middle" className="plot-tick" style={{ fill: "var(--danger)" }}>{lost} years lost</text>}
        <text x={(X(view === 1 ? death + lost : death) + X(T1)) / 2} y={Y + 5} textAnchor="middle" className="plot-tick">after death</text>
        <text x={X(0)} y={Y + 36} textAnchor="middle" className="plot-tick">birth</text>
        <text x={X(death)} y={Y - 26} textAnchor="middle" className="plot-tick">death at {death}</text>
      </svg>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          Age at death: <span className="mono">{death}</span>
          <input type="range" className="viz-range" min={5} max={100} step={1} value={death} onChange={(e) => setDeath(Number(e.target.value))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {view === 0
          ? <>Lucretius: the endless time before your birth was nothing to you, and you do not mourn it. The time after your death is its mirror image. So why fear it? And Epicurus: where death is, you are not, so death can never harm you.</>
          : lost > 0
            ? <>The deprivation account: death at {death} is bad for you because it takes away the {lost} more years of life you would otherwise have had (assuming you would have lived to 85). The harm is what you miss, even though you are not there to feel its absence.</>
            : <>Dying at {death}, past the 85 years assumed here, death deprives you of little on this account. But would more good years always be better, so that every death is a loss?</>}
      </figcaption>
    </figure>
  );
}
