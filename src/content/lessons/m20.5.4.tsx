import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ModelsAgreeViz } from "@/components/viz/ModelsAgreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.5.4",
  minutes: 75,
  links: {
    revisits: ["m20.5.3", "m20.5.2", "m20.5.1"],
    foreshadows: ["m20.6.1", "m20.6.4", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        We proved that no Turing machine decides halting. But the halting problem was meant to show that no{" "}
        <em>algorithm</em> of any kind decides it. What licenses the step from &ldquo;no Turing machine&rdquo; to &ldquo;no
        method whatever&rdquo;? And is that step a theorem, a definition, or something else?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and an input, and compare how four different formalisms compute it.</p>
      <ModelsAgreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Church-Turing thesis">
        <p>
          A function on the natural numbers is <strong>effectively calculable</strong>, computable by a mechanical procedure
          that a human could follow with unlimited paper and time and no insight, if and only if it is Turing computable,
          equivalently, partial recursive, equivalently, λ-definable.
        </p>
      </Definition>

      <Example title="why it is a thesis">
        <p>
          &ldquo;Effectively calculable&rdquo; is an informal notion, so the thesis cannot be proved as a theorem of
          mathematics. One direction is uncontroversial: every Turing computable function is clearly calculable. The other
          direction is the claim that the formal notion captures everything the informal one includes.
        </p>
      </Example>

      <Definition title="the evidence">
        <p>
          There are three kinds. <strong>Convergence</strong>: Turing machines, recursive functions, λ-calculus, Post systems,
          register machines and every programming language define the same class. <strong>Analysis</strong>: Turing&rsquo;s
          argument that any computation by a human clerk reduces to steps of a machine. <strong>Absence of counterexamples</strong>:
          no one has produced an intuitively calculable function that is not Turing computable.
        </p>
      </Definition>

      <Remark title="stronger and weaker versions">
        <p>
          The thesis is about what a human calculator can do. A different claim, the <strong>physical</strong>{" "}
          Church-Turing thesis, says any function computed by a physical system is Turing computable; it is an empirical claim
          about physics. Quantum computers compute nothing beyond Turing machines, though perhaps faster. Some have argued,
          following Lucas and Penrose, that human minds exceed machines; most logicians are not persuaded.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the Church-Turing thesis say?</p>,
      answer: {
        kind: "choice",
        options: ["The effectively calculable functions are exactly the Turing computable ones", "Every function is computable", "Turing machines are faster than humans", "Halting is decidable"],
        correct: [0],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why can&rsquo;t the thesis be proved as a mathematical theorem?</p>,
      answer: {
        kind: "choice",
        options: ["It links a formal notion to an informal one", "It is false", "It needs the axiom of choice", "It is independent of ZFC"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what output do all four models give for factorial at n = 5?</p>,
      answer: { kind: "numeric", value: 120 },
    },
    {
      key: "evid",
      rung: "apply",
      prompt: <p>Which is not part of the evidence for the thesis?</p>,
      answer: { kind: "choice", options: ["A formal proof from ZFC", "Convergence of many formalisms", "Turing’s analysis of human calculation", "No known counterexamples"], correct: [0] },
    },
    {
      key: "phys",
      rung: "apply",
      prompt: <p>What kind of claim is the physical Church-Turing thesis?</p>,
      answer: { kind: "choice", options: ["An empirical claim about physical systems", "A theorem of logic", "A definition", "A claim about human psychology only"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain how the thesis is used to conclude that no algorithm decides the halting problem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recalls that no Turing machine decides halting.",
          "Supposes an algorithm did, and uses the thesis to say it would be carried out by some Turing machine.",
          "Concludes there is no such algorithm, and notes the conclusion depends on the thesis.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If someone built a device that reliably solved the halting problem, would that refute the Church-Turing thesis?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the thesis about human calculation from the physical thesis.",
          "Says which would be refuted, and perhaps how we could ever verify the device.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The last chapter of the course turns from what can be proved and computed to the universe of sets in which modern
        mathematics is built. Numbers, functions, spaces and structures can all be represented as sets, and a handful of
        axioms says which sets exist.
      </p>
      <p>
        Next, the ZFC axioms: extensionality, pairing, union, power set, infinity, separation, replacement, foundation and
        choice, and the picture of the cumulative hierarchy that motivates them, after Russell&rsquo;s paradox wrecked naive
        set theory.
      </p>
    </>
  ),
};
