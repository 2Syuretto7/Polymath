import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DerivationViz } from "@/components/viz/DerivationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.1.4",
  minutes: 90,
  links: {
    revisits: ["m20.1.3", "m20.1.2", "m1.5.1"],
    foreshadows: ["m20.2.3", "m20.3.2", "m20.4.3"],
  },

  puzzle: (
    <>
      <p>
        Truth tables tell us which formulas follow from which, by checking every case. Proofs are something else: finite
        chains of small, mechanical steps. Is every truth-table consequence reachable by such a chain, using a handful of
        fixed axioms and one rule? It is not obvious that so little could be enough.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through two derivations line by line, and watch which earlier lines each step uses.</p>
      <DerivationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a deductive system">
        <p>
          Take formulas built from ¬ and → (the others are abbreviations). The axioms are all instances of the three schemas
          shown in the visualisation, and the only rule is <strong>modus ponens</strong>. A <strong>deduction</strong> of φ
          from Γ is a finite sequence ending in φ, each member an axiom, a member of Γ, or obtained by modus ponens from
          earlier members. We write Γ ⊢ φ.
        </p>
      </Definition>

      <Theorem title="soundness and the deduction theorem">
        <p>
          <strong>Soundness</strong>: if Γ ⊢ φ then Γ ⊨ φ, by induction along the deduction, since axioms are tautologies and
          modus ponens preserves truth. <strong>Deduction theorem</strong>: Γ ∪ {"{"}α{"}"} ⊢ β if and only if Γ ⊢ α → β. For the
          hard direction, replace each line δ of a deduction by α → δ and repair the gaps using axioms 1 and 2 and the
          derivation of α → α.
        </p>
      </Theorem>

      <Theorem title="completeness">
        <p>
          If Γ ⊨ φ then Γ ⊢ φ. Proof outline. Call Γ <strong>consistent</strong> if there is no ψ with Γ ⊢ ψ and Γ ⊢ ¬ψ. It
          suffices to show every consistent set is satisfiable, for if Γ ⊬ φ then Γ ∪ {"{"}¬φ{"}"} is consistent, hence satisfied
          by some v, which shows Γ ⊭ φ. Extend a consistent Γ, as in the compactness proof, to a maximal consistent Δ
          containing α or ¬α for every α, and set v(A) = T exactly when A ∈ Δ. Induction shows v satisfies Δ.
        </p>
      </Theorem>

      <Example title="compactness again">
        <p>
          Deductions are finite, so a deduction from Γ uses only finitely many members of Γ. Combined with soundness and
          completeness this gives compactness at once: if Γ is unsatisfiable, then Γ ⊢ A and Γ ⊢ ¬A for some A, using only
          a finite <M>{"\\Gamma_0"}</M>, which is therefore unsatisfiable.
        </p>
      </Example>

      <Remark title="why bother with proofs?">
        <p>
          For sentential logic, truth tables already decide everything, so completeness can seem a curiosity. Its real
          importance is as a model: in first-order logic there are no truth tables, infinitely many structures must be
          considered, and Gödel&rsquo;s completeness theorem says that proofs still capture exactly the valid consequences.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sound",
      rung: "check",
      prompt: <p>What does soundness say?</p>,
      answer: { kind: "choice", options: ["If Γ ⊢ φ then Γ ⊨ φ.", "If Γ ⊨ φ then Γ ⊢ φ.", "Every formula is provable.", "Every tautology is an axiom."], correct: [0] },
    },
    {
      key: "ded",
      rung: "check",
      prompt: <p>What does the deduction theorem say?</p>,
      answer: { kind: "choice", options: ["Γ ∪ {α} ⊢ β if and only if Γ ⊢ α → β", "Γ ⊢ α if and only if Γ ⊨ α", "Every deduction is finite", "α → α is an axiom"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many lines does the derivation of A → A have?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "inst",
      rung: "apply",
      prompt: <p>The formula B → (A → B) is an instance of which axiom schema?</p>,
      answer: { kind: "choice", options: ["Axiom 1", "Axiom 2", "Axiom 3", "None"], correct: [0] },
    },
    {
      key: "finite",
      rung: "apply",
      prompt: <p>Suppose Γ ⊢ φ with Γ infinite. What follows?</p>,
      answer: {
        kind: "choice",
        options: ["Some finite subset of Γ proves φ.", "Every finite subset of Γ proves φ.", "φ is a tautology.", "Γ is inconsistent."],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove soundness: if Γ ⊢ φ then Γ ⊨ φ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Argues by induction on the length of the deduction, or on its lines.",
          "Shows axioms are tautologies and members of Γ are true under any assignment satisfying Γ.",
          "Shows modus ponens preserves truth under an assignment satisfying Γ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Sketch the proof that if Γ ∪ {"{"}α{"}"} ⊢ β then Γ ⊢ α → β.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Proves by induction along the deduction that Γ ⊢ α → δ for every line δ.",
          "Handles axioms and members of Γ with axiom 1, the case δ = α with ⊢ α → α, and modus ponens with axiom 2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, first-order logic: languages with quantifiers, function and relation symbols, and the structures that interpret
      them, from graphs to groups to the natural numbers.
    </p>
  ),
};
