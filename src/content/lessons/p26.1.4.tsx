import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CanonicalRelViz } from "@/components/viz/CanonicalRelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.1.4",
  minutes: 90,
  links: {
    revisits: ["p26.1.3", "p17.1.2", "p17.2.2"],
    foreshadows: ["p26.2.1", "p26.3.1", "p26.4.1"],
  },

  puzzle: (
    <>
      <p>
        To show that K proves every formula valid on all frames, we must show: if K does not prove φ, some frame and
        valuation make φ false somewhere. Where could such a model come from, when all we have is a set of axioms?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose which of p, q, □p and □q a world contains. The highlighted worlds are those it sees in the canonical
        relation.
      </p>
      <CanonicalRelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="maximal consistent sets">
        <p>
          Fix a normal modal logic L. A set Γ of formulas is <strong>L-consistent</strong> if no finite conjunction of its
          members has its negation provable in L. It is <strong>maximal</strong> if for every φ, either φ or ¬φ is in Γ. By
          Lindenbaum&rsquo;s lemma, every consistent set extends to a maximal consistent one, as in propositional and
          first-order logic.
        </p>
      </Definition>

      <Definition title="the canonical model">
        <p>
          The <strong>canonical model</strong> for L has as worlds all maximal L-consistent sets. Set wRv when every φ with
          □φ ∈ w is in v. Let p be true at w when p ∈ w.
        </p>
      </Definition>

      <Theorem title="the truth lemma">
        <p>
          For every formula φ and world w of the canonical model, φ is true at w exactly when φ ∈ w.
        </p>
        <p>
          <strong>Proof idea.</strong> By induction on φ. The hard case is □φ. If □φ ∈ w, then φ is in every v that w sees, by
          the definition of R. If □φ ∉ w, the set {"{ψ : □ψ ∈ w}"} ∪ {"{¬φ}"} is consistent, using the K axiom and
          necessitation, so it extends to a maximal consistent v. Then wRv and φ fails at v.
        </p>
      </Theorem>

      <Theorem title="completeness of K">
        <p>
          If K does not prove φ, then {"{¬φ}"} is consistent and lies in some maximal consistent w. By the truth lemma, φ is
          false at w in the canonical model. So every formula valid on all frames is a theorem of K.
        </p>
      </Theorem>

      <Example title="stronger logics">
        <p>
          For T, every maximal consistent set contains □φ → φ for all φ, so if □φ ∈ w then φ ∈ w: the canonical relation is
          reflexive. Similarly, the canonical frame of S4 is reflexive and transitive, and that of S5 is an equivalence
          relation. So each of these logics is complete for its class of frames. A logic whose canonical frame satisfies
          the frame conditions it is meant to capture is called <strong>canonical</strong>.
        </p>
      </Example>

      <Remark title="limits of the method">
        <p>
          Not every logic is canonical. Löb&rsquo;s logic GL is complete for finite transitive irreflexive frames, but its
          canonical frame is not conversely well-founded, so other methods, such as filtration and finite models, are
          needed. Some modal logics are not complete for any class of frames.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "worlds",
      rung: "check",
      prompt: <p>What are the worlds of the canonical model?</p>,
      answer: { kind: "choice", options: ["The maximal consistent sets of formulas", "The sentence letters", "All finite sets of formulas", "The theorems of the logic"], correct: [0] },
    },
    {
      key: "rel",
      rung: "check",
      prompt: <p>When does w see v in the canonical model?</p>,
      answer: { kind: "choice", options: ["When every φ with □φ in w is in v", "When w and v share a formula", "When v is a subset of w", "Always"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with logic K and the starting world, how many of the 16 worlds does w see?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "t",
      rung: "apply",
      prompt: <p>Why is the canonical relation for T reflexive?</p>,
      answer: { kind: "choice", options: ["Every maximal T-consistent set contains □φ → φ, so if □φ ∈ w then φ ∈ w", "T has no modal axioms", "Every set contains itself", "T is complete"], correct: [0] },
    },
    {
      key: "gl",
      rung: "apply",
      prompt: <p>Why does the canonical model method fail for Löb&rsquo;s logic GL?</p>,
      answer: { kind: "choice", options: ["Its canonical frame is not conversely well-founded", "GL is inconsistent", "GL has no maximal consistent sets", "GL is not normal"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using the truth lemma, prove that K is complete: every formula valid on all frames is a theorem of K.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes φ is not a theorem, so {¬φ} is consistent.",
          "Extends it to a maximal consistent set w by Lindenbaum’s lemma.",
          "Uses the truth lemma to show φ is false at w in the canonical model, so φ is not valid on all frames.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the canonical relation for K4 is transitive.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes wRv and vRu and □φ ∈ w.",
          "Uses axiom 4 to get □□φ ∈ w, so □φ ∈ v, so φ ∈ u.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far the language has had only sentence letters. Add quantifiers, and new puzzles appear: if it is possible that
        something is a unicorn, is there something that could be a unicorn?
      </p>
      <p>Next, the Barcan formulas.</p>
    </>
  ),
};
