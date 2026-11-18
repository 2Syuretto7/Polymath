import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TuringIncrementViz } from "@/components/viz/TuringIncrementViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.5.1",
  minutes: 85,
  links: {
    revisits: ["m20.4.1", "m20.4.2", "m1.5.4"],
    foreshadows: ["m20.5.2", "m20.5.3", "m20.5.4"],
  },

  puzzle: (
    <>
      <p>
        Hilbert asked for a procedure that would decide, for any sentence of first-order logic, whether it is valid. To
        prove that no such procedure exists, you first need to say exactly what a procedure is. What is the simplest device
        that can carry out any calculation a person could?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through a machine that adds one to a binary number.</p>
      <TuringIncrementViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Turing machine">
        <p>
          A <strong>Turing machine</strong> has a tape divided into squares, infinite in both directions, each holding a
          symbol from a finite alphabet including a blank; a head that reads one square; a finite set of states including a
          start state and a halting state; and a transition table that, for each state and symbol read, says what to write,
          whether to move left or right, and which state to enter. A <strong>configuration</strong> records the tape, head
          position and state.
        </p>
      </Definition>

      <Definition title="computing a function">
        <p>
          A machine M computes a partial function f on the natural numbers if, started with n written on the tape (say in
          binary or unary) and the head at its left end, M halts with f(n) on the tape when f(n) is defined, and never halts
          when it is not.
        </p>
      </Definition>

      <Example title="Turing's analysis">
        <p>
          Turing&rsquo;s 1936 paper argued from what a human computer does: they attend to finitely many symbols at a time,
          are in one of finitely many states of mind, and change one symbol and their attention a little at each step. Every
          such process can be broken into the moves of a machine like the one above. The argument is why the definition is
          widely accepted as capturing computation.
        </p>
      </Example>

      <Theorem title="the universal machine">
        <p>
          There is a single machine U that, given the code of any machine M and an input n, simulates M on n: U halts with
          output m exactly when M does. A transition table is a finite list, so it can be coded as a number, just as
          formulas were coded. U is the idea of the stored-program computer.
        </p>
      </Theorem>

      <Remark title="robustness">
        <p>
          Many variations, such as several tapes, a tape infinite in one direction only, two symbols only, or
          nondeterministic choice, compute exactly the same functions, though at different speeds. This robustness is part
          of the evidence that the notion is the right one.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "parts",
      rung: "check",
      prompt: <p>Which is not part of a Turing machine?</p>,
      answer: { kind: "choice", options: ["An unbounded set of states", "A tape of squares", "A transition table", "A read-write head"], correct: [0] },
    },
    {
      key: "u",
      rung: "check",
      prompt: <p>What does the universal machine do?</p>,
      answer: {
        kind: "choice",
        options: ["Simulates any machine given its code and input", "Decides whether any machine halts", "Computes every real number", "Proves every theorem"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many steps does the machine take on input 1011 before halting?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "out",
      rung: "apply",
      prompt: <p>What does the machine leave on the tape for input 111?</p>,
      answer: { kind: "choice", options: ["1000", "111", "1110", "0001"], correct: [0] },
    },
    {
      key: "partial",
      rung: "apply",
      prompt: <p>A machine never halts on input 5. What does that mean for the function it computes?</p>,
      answer: { kind: "choice", options: ["It is undefined at 5", "Its value at 5 is 0", "Its value at 5 is infinite", "The machine is broken"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why there are only countably many Turing machines, and conclude that some function from ℕ to ℕ is not computable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each machine has a finite transition table, which can be coded by a natural number.",
          "Concludes there are countably many machines and so countably many computable functions.",
          "Uses that there are uncountably many functions from ℕ to ℕ to conclude some are not computable.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Turing based his definition on a human clerk. Is that a good basis for a definition of computation in general?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what the analysis assumes, such as finitely many states and local steps.",
          "Considers whether physical or other devices could exceed it, or why the analysis is persuasive.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Turing&rsquo;s definition starts from machines. Gödel, Herbrand and Kleene approached computation from the other side:
        build up functions from simple ones by composition and recursion, the way one defines addition from successor and
        multiplication from addition.
      </p>
      <p>
        Next, the recursive functions: primitive recursion, which always terminates, and minimisation, the open-ended search
        that brings in every computable function. The two approaches turn out to define exactly the same class.
      </p>
    </>
  ),
};
