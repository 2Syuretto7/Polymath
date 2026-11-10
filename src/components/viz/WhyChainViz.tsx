"use client";

import { useState } from "react";

const CHAIN = [
  { thing: "This book exists.", because: "A printer printed it." },
  { thing: "The printer existed.", because: "A factory built it, from metal mined from the Earth." },
  { thing: "The Earth exists.", because: "Dust and gas around the young Sun clumped together." },
  { thing: "The Sun exists.", because: "A cloud of hydrogen collapsed under gravity." },
  { thing: "The hydrogen exists.", because: "It formed in the early universe, after the Big Bang." },
  { thing: "The early universe existed.", because: "?" },
];

const ANSWERS = [
  { name: "A necessary being", who: "Ibn Sīnā, Aquinas, Leibniz", text: "The chain of contingent things, which could have failed to exist, needs an explanation outside itself: something that exists by its own nature and could not have failed to exist. This, the argument says, is what people call God.", cost: "Is a 'necessary being' coherent? And why should it have the properties of God, rather than being, say, the universe itself or a law of physics?" },
  { name: "A brute fact", who: "Bertrand Russell", text: "Some things simply have no explanation. As Russell put it in a 1948 radio debate, ‘I should say that the universe is just there, and that’s all.’", cost: "This gives up the principle that everything has a reason, which we rely on everywhere else in science and life." },
  { name: "An infinite chain", who: "Hume", text: "Perhaps the chain goes back forever, and each link is explained by the one before. Hume argued that once each member of a collection is explained, there is nothing left over to explain about the whole.", cost: "Explaining each link may not explain why there is a chain at all, rather than nothing. And modern cosmology may suggest the past is finite." },
];

/** The cosmological argument as a chain of 'why?' questions, and three ways the chain might end. */
export function WhyChainViz() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState(0);
  const done = step >= CHAIN.length - 1;

  return (
    <figure className="viz">
      <ol style={{ margin: 0, paddingLeft: 22 }}>
        {CHAIN.slice(0, step + 1).map((c, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {c.thing} <span className="viz-verdict viz-verdict-right">Why?</span>{" "}
            {i < step ? <span className="viz-verdict viz-verdict-info">{c.because}</span> : c.because === "?" ? <strong className="viz-verdict viz-verdict-wrong">Why is there a universe at all?</strong> : null}
          </li>
        ))}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setStep(step + 1)} disabled={done}>Ask why again</button>
        <button type="button" className="btn" onClick={() => setStep(0)} disabled={step === 0}>Start again</button>
      </div>
      {done && (
        <>
          <div className="choices" role="radiogroup" aria-label="How the chain ends" style={{ marginTop: 16 }}>
            {ANSWERS.map((a, i) => (
              <label key={a.name} className={`choice ${i === ans ? "is-picked" : ""}`}>
                <input type="radio" name="why-end" checked={i === ans} onChange={() => setAns(i)} />
                <span><strong>{a.name}</strong> <span className="viz-verdict viz-verdict-right">({a.who})</span></span>
              </label>
            ))}
          </div>
          <p style={{ margin: "12px 0 4px" }}>{ANSWERS[ans].text}</p>
          <p className="viz-verdict viz-verdict-wrong" style={{ margin: 0 }}><strong>The price:</strong> {ANSWERS[ans].cost}</p>
        </>
      )}
      <figcaption className="viz-caption" aria-live="polite">
        {done
          ? <>Every answer has a price. The cosmological argument says the first price is the one worth paying.</>
          : <>Each answer to &ldquo;why?&rdquo; points to something else that also needs explaining. Keep asking.</>}
      </figcaption>
    </figure>
  );
}
