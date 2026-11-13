"use client";

import { useState } from "react";

const DEFS = [
  { d: "pleasant", ex: "Gossiping about a friend is pleasant" },
  { d: "what we desire", ex: "Revenge is what Ravi desires" },
  { d: "what we desire to desire", ex: "Fame is what Asha desires to desire" },
  { d: "approved by our society", ex: "Caste discrimination was approved by that society" },
  { d: "commanded by God", ex: "This act is commanded by God" },
];

/** Moore’s open question argument: for any natural property N, “it is N, but is it good?” seems an open question. */
export function OpenQuestionViz() {
  const [di, setDi] = useState(0);
  const [reply, setReply] = useState(false);
  const D = DEFS[di];
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Proposed definition: &ldquo;good&rdquo; means &hellip;</p>
      <div className="viz-controls">
        {DEFS.map((x, i) => <button key={x.d} type="button" aria-pressed={di === i} className={di === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setDi(i)}>{x.d}</button>)}
      </div>
      <div style={{ display: "grid", gap: 8, marginTop: 10, fontSize: 15 }}>
        <div><strong>Closed question:</strong> &ldquo;This is {D.d}, but is it {D.d}?&rdquo; Anyone who understands the words knows the answer.</div>
        <div><strong>Moore&rsquo;s question:</strong> &ldquo;{D.ex}. But is it good?&rdquo; This still seems a real, open question.</div>
      </div>
      <p className="mono" style={{ margin: "10px 0 4px" }}>Moore&rsquo;s verdict: &ldquo;good&rdquo; does not mean &ldquo;{D.d}&rdquo;.</p>
      <div className="viz-controls">
        <button type="button" className={reply ? "btn" : "btn btn-primary"} onClick={() => setReply(!reply)}>{reply ? "Hide the reply" : "Show the naturalist reply"}</button>
      </div>
      {reply && (
        <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
          &ldquo;Water is H₂O, but is it water?&rdquo; was once an open question too, yet water is H₂O. Openness shows at most
          that the two words differ in meaning, not that they pick out different properties. So goodness could still be a
          natural property, discovered rather than defined.
        </p>
      )}
      <figcaption className="viz-caption">
        G. E. Moore, <em>Principia Ethica</em> (1903). If every proposed definition of &ldquo;good&rdquo; in natural terms
        leaves the question open, Moore concluded, goodness is a simple, non-natural property, and defining it naturalistically
        commits the &ldquo;naturalistic fallacy&rdquo;.
      </figcaption>
    </figure>
  );
}
