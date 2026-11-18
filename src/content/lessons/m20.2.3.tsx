import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { CaptureViz } from "@/components/viz/CaptureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.2.3",
  minutes: 85,
  links: {
    revisits: ["m20.2.2", "m20.1.4", "m1.3.1"],
    foreshadows: ["m20.2.4", "m20.3.1", "m20.4.3"],
  },

  puzzle: (
    <>
      <p>
        If something holds for every x, it holds for any particular thing you name: from ∀x φ infer φ with t in place of x.
        Nothing could be more obvious. Yet from the true &ldquo;for every x there is a y different from x&rdquo;, putting y
        for x gives &ldquo;there is a y different from y&rdquo;, which is false in every structure. What went wrong, and how
        should rules of proof prevent it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a formula and a term, and see whether substituting the term for x is safe.</p>
      <CaptureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="substitution">
        <p>
          <M>{"\\varphi^x_t"}</M> is φ with every <em>free</em> occurrence of x replaced by the term t. The term t is{" "}
          <strong>substitutable</strong> for x in φ if no variable of t becomes bound in the result, that is, no free
          occurrence of x lies within the scope of a quantifier ∀y with y occurring in t.
        </p>
      </Definition>

      <Definition title="a deductive calculus">
        <p>
          Following Enderton, the logical axioms are all generalisations (with any ∀ prefixes) of formulas of these forms:
          tautologies; <M>{"\\forall x\\,\\alpha \\to \\alpha^x_t"}</M> where t is substitutable for x in α;{" "}
          <M>{"\\forall x\\,(\\alpha \\to \\beta) \\to (\\forall x\\,\\alpha \\to \\forall x\\,\\beta)"}</M>;{" "}
          <M>{"\\alpha \\to \\forall x\\,\\alpha"}</M> where x is not free in α; and the equality axioms. The only rule is
          modus ponens. Γ ⊢ φ means φ has a deduction from Γ together with the logical axioms.
        </p>
      </Definition>

      <Theorem title="generalisation and deduction">
        <p>
          <strong>Generalisation theorem</strong>: if Γ ⊢ φ and x does not occur free in any formula of Γ, then Γ ⊢ ∀x φ.
          Proof by induction along the deduction, using the third and fourth kinds of axiom. The{" "}
          <strong>deduction theorem</strong> holds as in sentential logic: Γ ∪ {"{"}α{"}"} ⊢ β if and only if Γ ⊢ α → β. With
          these one can prove, for example, ⊢ ∀x∀y α → ∀y∀x α.
        </p>
      </Theorem>

      <Example title="why the side conditions">
        <p>
          Without the restriction on x, from the hypothesis Px we could generalise to ∀x Px, and then by the deduction
          theorem prove Px → ∀x Px, which is false in any structure where some but not all elements satisfy P. Without
          substitutability, the instance ∀x∃y ¬(x = y) → ∃y ¬(y = y) would be an axiom, though it fails in every structure
          with two elements.
        </p>
      </Example>

      <Remark title="many calculi, one relation">
        <p>
          Natural deduction, sequent calculi and tableaux are other deductive systems, and look very different. All prove
          exactly the same things. What matters is that the set of axioms is decidable and each rule is checkable, so that
          checking a proof is mechanical. Soundness, that Γ ⊢ φ implies Γ ⊨ φ, is routine; the converse is Gödel&rsquo;s
          completeness theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "why",
      rung: "check",
      prompt: <p>Why is the axiom ∀x α → α with t for x restricted to substitutable terms?</p>,
      answer: {
        kind: "choice",
        options: ["Otherwise a variable of t could be captured by a quantifier, changing the meaning", "To keep the axioms finite", "Because terms cannot contain variables", "To make the axioms tautologies"],
        correct: [0],
      },
    },
    {
      key: "gen",
      rung: "check",
      prompt: <p>The generalisation theorem lets us pass from Γ ⊢ φ to Γ ⊢ ∀x φ under which condition?</p>,
      answer: { kind: "choice", options: ["x does not occur free in any formula of Γ", "x does not occur in φ", "Γ is empty", "φ is a sentence"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, is f(y) substitutable for x in Px → ∀y Qxy?</p>,
      answer: { kind: "choice", options: ["No: y would be captured by ∀y", "Yes", "Only for the first occurrence", "Only if f is a constant"], correct: [0] },
    },
    {
      key: "inst",
      rung: "apply",
      prompt: <p>Which of these is a legitimate instance of the axiom ∀x α → α with t for x?</p>,
      answer: {
        kind: "choice",
        options: ["∀x ∃y ¬(x = y) → ∃y ¬(z = y)", "∀x ∃y ¬(x = y) → ∃y ¬(y = y)", "∀x Px → ∀x Py", "Px → ∀x Px"],
        correct: [0],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>In ∀x Px ∧ Qx, how many occurrences of x are replaced when we substitute z for x?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that ⊢ ∀x∀y α → ∀y∀x α, using the axioms, the deduction theorem and the generalisation theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "From the hypothesis ∀x∀y α, derives ∀y α and then α by two instances of the substitution axiom with the variables themselves.",
          "Applies generalisation twice, first on x then on y, noting neither is free in the hypothesis.",
          "Concludes with the deduction theorem.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The calculus has infinitely many axioms. Why does that not make checking proofs impossible?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the set of axioms is decidable: one can mechanically check whether a given formula is an axiom.",
          "Connects this with the later requirement, in Gödel’s theorems, that a theory’s axioms be effectively listable.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, soundness for first-order logic: proving that the calculus never derives a false conclusion from true premises,
      and what that tells us about consistency.
    </p>
  ),
};
