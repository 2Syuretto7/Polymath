import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { LindenbaumViz } from "@/components/viz/LindenbaumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.1.2",
  minutes: 85,
  links: {
    revisits: ["p17.1.1", "p2.3.3", "p2.2.4"],
    foreshadows: ["p17.1.3", "p17.2.1", "p17.2.2"],
  },

  puzzle: (
    <>
      <p>
        Soundness says the rules prove nothing false. But perhaps they are too weak: perhaps some valid arguments cannot be
        derived at all, however clever we are. Can we be sure that a handful of rules captures every valid argument, out of
        infinitely many?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Extend a consistent set one formula at a time, and watch a valuation emerge.</p>
      <LindenbaumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="completeness">
        <p>
          A proof system is <strong>complete</strong> if whenever Γ ⊨ φ, also Γ ⊢ φ. With soundness, it means ⊢ and ⊨ coincide:
          derivability is exactly validity. Call Γ <strong>consistent</strong> if no contradiction can be derived from it.
        </p>
      </Definition>

      <Theorem title="the key lemma">
        <p>
          Every consistent set is satisfiable. This gives completeness: if Γ ⊨ φ, then Γ ∪ {"{¬φ}"} is unsatisfiable, so by the
          lemma it is inconsistent, and then indirect proof derives φ from Γ.
        </p>
      </Theorem>

      <Example title="proving the lemma">
        <p>
          <strong>Lindenbaum&rsquo;s lemma</strong>: list all formulas φ₁, φ₂, … and extend Γ step by step, adding φₙ if the
          result is consistent and ¬φₙ otherwise. One shows that one of the two always keeps the set consistent, so the union
          Γ* is consistent and <strong>maximal</strong>: for every φ, either φ or ¬φ is in Γ*. Now define a valuation making an
          atom true exactly when it is in Γ*. The <strong>truth lemma</strong>, proved by induction on formulas, says that a
          formula is true under this valuation exactly when it belongs to Γ*. In particular every member of Γ is true.
        </p>
      </Example>

      <Remark title="history and significance">
        <p>
          Completeness for sentential logic was proved by Post in 1920; Henkin&rsquo;s 1949 method, sketched here, extends to
          first-order logic, where Gödel had first proved completeness in 1929. Completeness is a remarkable fit between
          syntax and semantics: finitely many mechanical rules capture a notion defined by quantifying over all valuations. It
          also has a cost-free corollary for sentential logic: validity is decidable, by truth tables.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does completeness say?</p>,
      answer: {
        kind: "choice",
        options: ["If Γ ⊨ φ then Γ ⊢ φ", "If Γ ⊢ φ then Γ ⊨ φ", "Every set of formulas is consistent", "Every formula is either valid or contradictory"],
        correct: [0],
      },
    },
    {
      key: "lemma",
      rung: "check",
      prompt: <p>Which lemma is the heart of the completeness proof?</p>,
      answer: {
        kind: "choice",
        options: ["Every consistent set is satisfiable", "Every satisfiable set is finite", "Every rule is truth-preserving", "Every formula has a normal form"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, start from {"{P ∨ Q, ¬P}"} and go through all six steps. Is R true or false in the resulting valuation?</p>,
      answer: { kind: "choice", options: ["True", "False", "Undetermined", "Both"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>In the visualisation, for any starting set, how many valuations satisfy the set once all six steps are done?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "equiv",
      rung: "apply",
      prompt: <p>Given soundness and completeness, which is true?</p>,
      answer: {
        kind: "choice",
        options: ["A set is consistent exactly when it is satisfiable.", "Every consistent set is finite.", "Every satisfiable set is maximal.", "Consistency and satisfiability are unrelated."],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assuming that every consistent set is satisfiable, prove that if Γ ⊨ φ then Γ ⊢ φ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that Γ ⊨ φ means no valuation makes Γ true and φ false, so Γ ∪ {¬φ} is unsatisfiable.",
          "By the assumption, Γ ∪ {¬φ} is inconsistent: a contradiction can be derived from it.",
          "Concludes by indirect proof that Γ ⊢ φ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does completeness show that proof and truth are the same thing, or only that they always agree?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes coextension (the same arguments count) from identity of the two notions.",
          "Considers that the agreement depends on the chosen semantics and system, and that it fails for some logics, such as second-order logic.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what completeness says, why it follows from the lemma that every consistent set is satisfiable, and how Lindenbaum’s construction and the truth lemma prove that lemma.",

  glimpse: (
    <p>
      Next, expressive adequacy: why every truth function can be written with ¬, ∧ and ∨, and even with a single connective.
    </p>
  ),
};
