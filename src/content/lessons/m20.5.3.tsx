import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HaltDiagonalViz } from "@/components/viz/HaltDiagonalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.5.3",
  minutes: 85,
  links: {
    revisits: ["m20.5.2", "m20.4.3", "m1.8.3"],
    foreshadows: ["m20.5.4", "m20.6.1", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        A program checker that warns you when your code will run forever would be enormously useful. Compilers catch many
        mistakes; why not this one? Is it just hard, or impossible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The table records whether each program halts on each input. Build D from the diagonal, then try to find it in the
        list.
      </p>
      <HaltDiagonalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the halting problem">
        <p>
          Fix an effective listing <strong>P₀, P₁, P₂, …</strong> of all Turing machines. The <strong>halting set</strong> is
          K = {"{"}(e, n) : Pₑ halts on input n{"}"}. The halting problem asks for a machine that, given (e, n), always halts
          and says yes or no correctly.
        </p>
      </Definition>

      <Theorem title="Turing (1936)">
        <p>The halting problem is undecidable: no Turing machine decides K.</p>
      </Theorem>

      <Example title="the proof">
        <p>
          Suppose H decides K. Build D: on input n, run H on (n, n); if H says yes, loop forever; if no, halt. D is a machine,
          so D = Pₑ for some e. Does D halt on e? If it does, H says yes on (e, e), so D loops. If it does not, H says no, so D
          halts. Either way a contradiction, so H does not exist. This is Cantor&rsquo;s diagonal argument, applied to
          programs.
        </p>
      </Example>

      <Definition title="semi-decidable sets">
        <p>
          K is <strong>semi-decidable</strong>, or recursively enumerable: run Pₑ on n and say yes if it halts. A set is
          decidable exactly when both it and its complement are semi-decidable. So the complement of K, the pairs that never
          halt, is not semi-decidable.
        </p>
      </Definition>

      <Remark title="consequences">
        <p>
          By coding machines into logic, Church and Turing showed that validity in first-order logic is undecidable, answering
          Hilbert&rsquo;s Entscheidungsproblem. Rice&rsquo;s theorem extends the result: every non-trivial property of what a
          program computes is undecidable. Incompleteness follows too: if a consistent, effectively axiomatised theory
          proved every true statement &ldquo;Pₑ does not halt on n&rdquo;, the complement of K would be semi-decidable.
          Practical checkers succeed by being incomplete: they answer &ldquo;unknown&rdquo; on hard cases.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Turing&rsquo;s theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["No machine decides, for every machine and input, whether it halts", "Every machine halts", "No machine halts on its own code", "Halting is decidable for finite inputs"],
        correct: [0],
      },
    },
    {
      key: "semi",
      rung: "check",
      prompt: <p>Which of these is semi-decidable?</p>,
      answer: { kind: "choice", options: ["The set of halting pairs", "The set of non-halting pairs", "Neither", "Both"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, P2 halts on input 2. What does D do on input 2?</p>,
      answer: { kind: "choice", options: ["Loops", "Halts", "Outputs 2", "Calls P2"], correct: [0] },
    },
    {
      key: "rice",
      rung: "apply",
      prompt: <p>By Rice&rsquo;s theorem, is &ldquo;this program computes the zero function&rdquo; decidable?</p>,
      answer: { kind: "choice", options: ["No", "Yes", "Only for short programs", "Only if the program halts"], correct: [0] },
    },
    {
      key: "dec",
      rung: "apply",
      prompt: <p>A set and its complement are both semi-decidable. What follows?</p>,
      answer: { kind: "choice", options: ["The set is decidable", "The set is empty", "The set is finite", "Nothing"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the halting problem is undecidable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes a decider H and defines D to do the opposite of what H predicts for (n, n).",
          "Notes D is some Pₑ and asks whether D halts on e.",
          "Shows both answers lead to contradiction, so H cannot exist.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Real computers have finite memory. Is the halting problem for them decidable, and does that matter?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a finite-state machine either halts or repeats a configuration, so halting is decidable in principle.",
          "Notes that the number of configurations is astronomically large, so the decision is useless in practice.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Turing machines, recursive functions, Church&rsquo;s λ-calculus and Post&rsquo;s systems were invented independently
        and all define the same class of functions. Is that class exactly what can be computed by any effective method at
        all?
      </p>
      <p>
        Next, the Church-Turing thesis: why it cannot be proved like a theorem, what the evidence for it is, and how it has
        been extended, and challenged, in physics and philosophy of mind.
      </p>
    </>
  ),
};
