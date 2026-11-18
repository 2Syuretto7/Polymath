import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LargeCardinalViz } from "@/components/viz/LargeCardinalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.5.2",
  minutes: 85,
  links: {
    revisits: ["p22.5.1", "m20.6.6", "p22.3.2"],
    foreshadows: ["p22.5.3", "p22.6.1", "p22.6.2"],
  },

  puzzle: (
    <>
      <p>
        ZFC cannot settle the continuum hypothesis, nor many questions about sets of real numbers. One response is to add
        axioms. But on what grounds? If an axiom is not self-evident, believing it because it proves nice theorems looks like
        wishful thinking. If it must be self-evident, perhaps no new axiom will ever qualify.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Climb the ladder of large cardinals and see what each rung buys.</p>
      <LargeCardinalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Gödel’s programme">
        <p>
          In &lsquo;What is Cantor&rsquo;s continuum problem?&rsquo; (1947, revised 1964) Gödel argued that independence from
          ZFC does not make a question meaningless. The concept of set may yield new axioms, especially axioms of infinity
          asserting ever larger cardinals; and even an axiom without intrinsic necessity might be accepted for its success,
          &lsquo;in the same sense as any well-established physical theory&rsquo;.
        </p>
      </Definition>

      <Example title="intrinsic and extrinsic justification">
        <p>
          An axiom is justified <strong>intrinsically</strong> if it follows from the concept of set, as the iterative
          conception supports power set. It is justified <strong>extrinsically</strong> by its consequences: it proves
          results we already believe, unifies known theory, or opens fruitful mathematics. Reflection principles, which say any
          property of the whole universe already holds at some stage, give small large cardinals intrinsically. The larger
          ones, measurable and beyond, rest mainly on extrinsic grounds.
        </p>
      </Example>

      <Example title="the case for large cardinals">
        <p>
          Large cardinals line up in a single linear order of consistency strength, though defined in unrelated ways. With
          infinitely many Woodin cardinals one gets projective determinacy, which completes the theory of projective sets of
          reals in a way analysts find natural, and theories from different directions converge on the same consequences.
          Defenders read this convergence as evidence, as convergence of independent experiments is in physics.
        </p>
      </Example>

      <Remark title="Maddy’s naturalism">
        <p>
          Penelope Maddy, in <em>Believing the Axioms</em> (1988) and later work, argues that philosophy should not judge
          mathematical method from outside: if axioms serve set theory&rsquo;s own goals, such as maximising the range of
          structures available, that is all the justification they need or can have. On this view V = L is rejected not for
          being false in some external sense, but because it restricts the universe and blocks measurable cardinals. Critics
          ask whether such methodological success has anything to do with truth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "godel",
      rung: "check",
      prompt: <p>What did Gödel suggest might settle questions independent of ZFC?</p>,
      answer: { kind: "choice", options: ["New axioms, especially axioms asserting large cardinals", "Abandoning set theory", "Majority vote among set theorists", "Intuitionistic logic"], correct: [0] },
    },
    {
      key: "extrinsic",
      rung: "check",
      prompt: <p>What is an extrinsic justification of an axiom?</p>,
      answer: { kind: "choice", options: ["A justification by its consequences, such as fruitfulness or unifying known results", "A justification from the concept of set alone", "A proof of it from ZFC", "A justification by its length"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which is the lowest rung that refutes V = L?</p>,
      answer: { kind: "choice", options: ["Measurable", "Inaccessible", "Mahlo", "Woodin"], correct: [0] },
    },
    {
      key: "incon",
      rung: "apply",
      prompt: <p>Why can ZFC not prove that an inaccessible cardinal exists, assuming ZFC is consistent?</p>,
      answer: { kind: "choice", options: ["An inaccessible gives a model of ZFC, so ZFC would prove its own consistency", "Inaccessibles are contradictory", "ZFC has no infinite sets", "Because of the axiom of choice"], correct: [0] },
    },
    {
      key: "maddy",
      rung: "apply",
      prompt: <p>On Maddy&rsquo;s naturalism, why reject V = L?</p>,
      answer: { kind: "choice", options: ["It restricts the range of sets and conflicts with set theory’s goal of maximising", "It is inconsistent", "It is self-evidently false", "Gödel disliked it"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can extrinsic success give us reason to believe that an axiom is true? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains extrinsic justification, with an example such as projective determinacy from Woodin cardinals.",
          "Considers the worry that usefulness or elegance need not track truth, or the analogy with physics.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The large cardinal axioms line up in a single order of consistency strength. Is that evidence of anything?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the linear ordering of axioms defined in unrelated ways.",
          "Considers whether it shows a single underlying reality, or something about our methods.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Large cardinals settle much about sets of reals, but not the most famous independent question: how many real numbers
        are there? Here set theorists disagree not only about the answer, but about whether there is one.
      </p>
      <p>
        Next, the continuum hypothesis debate: Gödel&rsquo;s realism, Feferman&rsquo;s claim that CH is not definite,
        Hamkins&rsquo;s multiverse, and Woodin&rsquo;s attempts to settle it.
      </p>
    </>
  ),
};
