import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CounterexampleViz } from "@/components/viz/CounterexampleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.5.2",
  minutes: 80,
  links: {
    revisits: ["p2.1.2", "p2.2.4"],
    foreshadows: ["p2.6.1", "p17.2.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Every student owes money to some bank. So there is a bank to which every student owes money.&rdquo; You
        can probably feel that this is a bad argument. But feeling is not showing. How would you prove, beyond doubt, that
        it is invalid?
      </p>
      <p>
        And for an argument that is valid, how could you ever show it, now that there are infinitely many interpretations
        to check?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Validity is a claim about every interpretation; invalidity is a claim that one exists. So the two are shown in very
        different ways. To show an argument invalid, build one interpretation, a small world will often do, where the
        premises are true and the conclusion false. Try it below. For the last argument you will fail, and the failure is
        instructive.
      </p>
      <CounterexampleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="models and entailment">
        <p>
          An interpretation is a <strong>model</strong> of a set of sentences if it makes them all true. The premises Γ{" "}
          <strong>entail</strong> φ, written Γ ⊨ φ, if every model of Γ is a model of φ. An argument is valid when its
          premises entail its conclusion.
        </p>
        <p>
          A <strong>counterexample</strong> to an argument is an interpretation in which every premise is true and the
          conclusion false. An argument is invalid exactly when it has a counterexample.
        </p>
      </Definition>

      <Example title="the students and the banks">
        <p>
          Domain: {"{s, t, b, c}"}. Sx: x is a student, true of s and t. Bx: x is a bank, true of b and c. Oxy: x owes
          money to y, true of the pairs (s, b) and (t, c) only.
        </p>
        <ul>
          <li>The premise ∀x(Sx → ∃y(By ∧ Oxy)) is true: s owes b, and t owes c.</li>
          <li>The conclusion ∃y(By ∧ ∀x(Sx → Oxy)) is false: b is not owed by t, and c is not owed by s.</li>
        </ul>
        <p>That settles it: the argument is invalid. This is the quantifier shift of the last chapter, now refuted formally.</p>
      </Example>

      <Remark title="how to find counterexamples">
        <ul>
          <li>Start small. Most invalid arguments with a few predicates have counterexamples with one, two or three objects.</li>
          <li>Work backwards: make the conclusion false first, then try to make the premises true without undoing that.</li>
          <li>
            Use familiar structures. Numbers with &ldquo;less than&rdquo;, or people with &ldquo;is a parent of&rdquo;,
            supply relations with known properties.
          </li>
          <li>
            Check each sentence against the definition of truth, object by object. A counterexample is only as good as
            this check.
          </li>
        </ul>
      </Remark>

      <Example title="when small worlds are not enough">
        <p>
          Some sentences have only infinite models. Let S say that R is irreflexive, transitive, and that everything bears R
          to something. In a finite domain, following R from any object must return to an object already visited, and
          transitivity then makes that object bear R to itself. So S has no finite model, though &ldquo;less than&rdquo; on
          the natural numbers is a model. An argument whose only counterexamples make S true can be refuted, but only with
          an infinite domain.
        </p>
      </Example>

      <Remark title="showing validity">
        <p>
          For the valid argument in the visualisation, the reason no counterexample exists can be given in words. Suppose
          some interpretation makes ∀x(Fx → Gx) and ∃xFx true. Then some object is F, and by the first premise that object
          is G, so ∃xGx is true. The argument considers an arbitrary interpretation, so it covers all of them. Reasoning of
          this kind can be made formal, and the last chapter of this course does so, with rules of proof for the
          quantifiers.
        </p>
      </Remark>

      <Remark title="no mechanical test">
        <p>
          In sentential logic, a truth table decides validity in a finite number of steps. In predicate logic no such method
          exists: Alonzo Church and Alan Turing proved in 1936 that no algorithm can decide, for every argument, whether it
          is valid. Finding a counterexample, or a proof, can require real ingenuity, and that is a theorem, not a failure of
          effort.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "show",
      rung: "check",
      prompt: <p>To show that an argument of predicate logic is invalid, it is enough to&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "find one interpretation in which the premises are true and the conclusion is false",
          "find one interpretation in which the conclusion is false",
          "check every interpretation with up to three objects",
          "fail to find a proof",
        ],
        correct: [0],
      },
    },
    {
      key: "two",
      rung: "check",
      prompt: <p>What is the smallest domain in which there is a counterexample to ∃xFx, ∃xGx ∴ ∃x(Fx ∧ Gx)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "valid",
      rung: "apply",
      prompt: <p>Which of these arguments are valid? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "∀x(Fx ∧ Gx) ∴ ∀xFx",
          "∃x(Fx ∧ Gx) ∴ ∃xFx ∧ ∃xGx",
          "∃xFx ∧ ∃xGx ∴ ∃x(Fx ∧ Gx)",
          "∀xFx ∨ ∀xGx ∴ ∀x(Fx ∨ Gx)",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "split",
      rung: "apply",
      prompt: <p>What is the smallest domain in which there is a counterexample to ∀x(Fx ∨ Gx) ∴ ∀xFx ∨ ∀xGx?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>What is the smallest domain in which there is a counterexample to ∀x∃y Rxy ∴ ∃x Rxx?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "counter",
      rung: "prove",
      prompt: (
        <p>
          Give a counterexample to the argument ∀x(Fx → ∃y Rxy), ∃xFx ∴ ∃x(Fx ∧ Rxx). Describe the domain and extensions
          precisely, and check each sentence.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a definite interpretation, for example domain {1, 2}, F true of 1, R = {(1, 2)}.",
          "Checks that both premises are true.",
          "Checks that the conclusion is false, because the F object does not bear R to itself.",
        ],
      },
    },
    {
      key: "validity",
      rung: "stretch",
      prompt: (
        <p>
          Explain in words why ∃y∀x Rxy entails ∀x∃y Rxy, reasoning about an arbitrary interpretation. Then explain why no
          finite number of checked interpretations, however large, could establish this.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes an arbitrary model of the premise, picks the object y that every x bears R to, and shows each x bears R to something.",
          "Notes that the argument does not depend on which interpretation was chosen, so it covers all.",
          "Explains that there are infinitely many interpretations, including infinite ones, so checking examples can never be complete.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to show that an argument in predicate logic is invalid by building a counterexample, and why showing that one is valid needs a different kind of reasoning.",

  glimpse: (
    <p>
      The next lesson adapts truth trees to predicate logic, as a systematic search for counterexamples. The last chapter
      adds proof rules for the quantifiers. In Logic II: Metalogic and Beyond, the compactness theorem shows that models
      can behave very strangely, and the completeness theorem shows that the proof rules capture entailment exactly.
    </p>
  ),
};
