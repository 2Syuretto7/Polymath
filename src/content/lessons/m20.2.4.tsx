import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SoundnessCheckViz } from "@/components/viz/SoundnessCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.2.4",
  minutes: 80,
  links: {
    revisits: ["m20.2.3", "m20.2.2", "m1.5.1"],
    foreshadows: ["m20.3.2", "m20.3.3", "m20.4.3"],
  },

  puzzle: (
    <>
      <p>
        You spend an afternoon trying to derive ∃y∀x Exy from ∀x∃y Exy and fail. Maybe you were not clever enough. How
        could you ever be sure that no deduction exists, when there are infinitely many candidate deductions to try?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a structure and check each line of the deduction in it.</p>
      <SoundnessCheckViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="soundness">
        <p>
          If Γ ⊢ φ then Γ ⊨ φ. Proof: by induction along a deduction, every line is true in every model of Γ under every
          assignment. Members of Γ are true there by assumption. Every logical axiom is valid, and modus ponens preserves
          truth. The real work is checking that each kind of axiom is valid.
        </p>
      </Theorem>

      <Definition title="the substitution lemma">
        <p>
          For the axiom <M>{"\\forall x\\,\\alpha \\to \\alpha^x_t"}</M>, one needs: if t is substitutable for x in α, then{" "}
          <M>{"\\mathfrak A \\vDash \\alpha^x_t[s]"}</M> if and only if <M>{"\\mathfrak A \\vDash \\alpha[s(x \\mid \\bar s(t))]"}</M>.
          Substituting a term is the same as assigning its value. The proof is by induction on α, and the substitutability
          condition is exactly what makes the quantifier step work.
        </p>
      </Definition>

      <Example title="proving that something cannot be proved">
        <p>
          Soundness turns unprovability into a search for a structure. In the two-element structure with E = {"{"}(0, 1), (1,
          0){"}"}, ∀x∃y Exy is true but ∃y∀x Exy is false. So ∀x∃y Exy ⊭ ∃y∀x Exy, and by soundness no deduction exists, however
          clever.
        </p>
      </Example>

      <Theorem title="consistency">
        <p>
          A corollary: every satisfiable set of formulas is consistent. If Γ ⊢ ψ and Γ ⊢ ¬ψ, then a model of Γ would make
          both ψ and ¬ψ true. In particular, the empty set is consistent: the calculus cannot prove a contradiction.
        </p>
      </Theorem>

      <Remark title="the easy half">
        <p>
          Soundness says the calculus never proves too much. It is the easy half of the relation between ⊢ and ⊨. The hard
          half, that the calculus proves enough, is the completeness theorem, which needs a genuinely new idea: building a
          model from a consistent set of sentences.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stmt",
      rung: "check",
      prompt: <p>What does the soundness theorem say?</p>,
      answer: { kind: "choice", options: ["If Γ ⊢ φ then Γ ⊨ φ.", "If Γ ⊨ φ then Γ ⊢ φ.", "Every sentence is decidable.", "Every consistent set is finite."], correct: [0] },
    },
    {
      key: "cor",
      rung: "check",
      prompt: <p>Which follows from soundness?</p>,
      answer: { kind: "choice", options: ["Every satisfiable set is consistent.", "Every consistent set is satisfiable.", "Every valid sentence is an axiom.", "Every structure is finite."], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in the structure &ldquo;a → b only&rdquo;, which hypothesis fails?</p>,
      answer: { kind: "choice", options: ["∀x∀y (Exy → Eyx)", "Eab", "Both", "Neither"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>In the visualisation, in the structure &ldquo;symmetric, with a–b&rdquo;, how many of the seven lines are true?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "how",
      rung: "apply",
      prompt: <p>How does one show that Γ ⊬ φ?</p>,
      answer: {
        kind: "choice",
        options: ["Find a structure in which every member of Γ is true and φ is false.", "Try many deductions and fail.", "Show φ is long.", "Show Γ is infinite."],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every instance of the axiom α → ∀x α, where x does not occur free in α, is valid.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Fixes a structure and assignment s with 𝔄 ⊨ α[s].",
          "Uses the fact that satisfaction depends only on the free variables, so 𝔄 ⊨ α[s(x | d)] for every d.",
          "Concludes 𝔄 ⊨ ∀x α[s], so the implication holds.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain where the proof of validity of ∀x α → α with t for x would break down if t were not substitutable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the substitution lemma is needed to equate truth of the instance with truth of α at the value of t.",
          "Explains that a captured variable would be evaluated by the inner quantifier rather than by s, as in ∃y ¬(y = y).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the hard half: Henkin&rsquo;s construction, which builds a model for any consistent set of sentences out of the
      language itself.
    </p>
  ),
};
