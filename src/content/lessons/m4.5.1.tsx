import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InsertionSortViz } from "@/components/viz/InsertionSortViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.5.1",
  minutes: 80,
  links: {
    revisits: ["m4.4.3", "m1.5.1", "m1.5.3"],
    foreshadows: ["m4.5.2", "m4.5.3", "m20.5.1"],
  },

  puzzle: (
    <>
      <p>
        The word algorithm comes from the name of Muhammad ibn Musa al-Khwarizmi, a scholar in ninth-century Baghdad whose
        book on Hindu numerals taught Europe to calculate with them. A recipe for long division, a set of directions to a
        friend&rsquo;s house, the steps a computer follows to sort your contacts: all are algorithms. But what exactly makes
        a list of instructions an algorithm, and how can we be sure that one always gives the right answer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through insertion sort, the method many people use to sort a hand of cards. Watch the shaded part, and count
        the comparisons for each kind of input.
      </p>
      <InsertionSortViz />
    </>
  ),

  theory: (
    <>
      <Definition title="algorithms">
        <p>
          An <strong>algorithm</strong> is a finite list of precise instructions that takes an input and, after a finite
          number of steps, produces an output. Each step must be unambiguous and mechanical, so that it could be carried
          out without insight or guesswork. An algorithm solves a <strong>problem</strong> if for every valid input it
          stops with the correct output. Two questions always arise: is it <em>correct</em>, and is it <em>efficient</em>?
        </p>
      </Definition>

      <Example title="insertion sort">
        <p>
          To sort a list <M>{"a_1, \\dots, a_n"}</M>: for i = 2 to n, take <M>{"a_i"}</M> and move it left past every
          larger element before it, then put it down. A card player does the same with a hand of cards. In the worst case,
          a list in reverse order, element i is compared with all i − 1 before it, giving{" "}
          <M>{"1 + 2 + \\dots + (n-1) = n(n-1)/2"}</M> comparisons.
        </p>
      </Example>

      <Definition title="loop invariants">
        <p>
          A <strong>loop invariant</strong> is a statement that is true before a loop starts and stays true after each
          pass. To prove an algorithm correct, show three things: the invariant holds at the start
          (<em>initialisation</em>), each pass preserves it (<em>maintenance</em>), and when the loop ends the invariant
          gives the answer (<em>termination</em>). This is induction on the number of passes.
        </p>
      </Definition>

      <Theorem title="insertion sort is correct">
        <p>When insertion sort finishes, the list is sorted, and it contains the same elements as at the start.</p>
      </Theorem>
      <Proof>
        <p>
          Invariant: before the pass for i, the first i − 1 entries are the original first i − 1 entries, in sorted order.
          It holds for i = 2, since one entry is sorted. The pass inserts <M>{"a_i"}</M> after the last entry not larger
          than it, so the first i entries are sorted, and nothing is lost or added. The loop ends after i = n, when the
          invariant says the whole list is sorted.
        </p>
      </Proof>

      <Remark title="termination and Euclid">
        <p>
          Correct output is no use if the algorithm never stops. The usual proof finds a non-negative integer that strictly
          decreases at each step: in Euclid&rsquo;s algorithm, the remainder. By the well-ordering principle, it cannot
          decrease for ever. Not every procedure stops: nobody knows whether the Collatz procedure, halve n if even,
          replace it with 3n + 1 if odd, reaches 1 for every starting n. And Turing proved in 1936 that no algorithm can
          decide, for every program and input, whether the program stops.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which of these are required of an algorithm? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Each step is precise and mechanical", "It stops after finitely many steps", "It runs on a computer", "It is written in a programming language"],
        correct: [0, 1],
      },
    },
    {
      key: "worst",
      rung: "check",
      prompt: <p>How many comparisons does insertion sort make in the worst case on a list of 10 elements?</p>,
      answer: { kind: "numeric", value: 45 },
    },
    {
      key: "best",
      rung: "apply",
      prompt: <p>How many comparisons does insertion sort make on a list of 10 elements that is already sorted?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "collatz",
      rung: "apply",
      prompt: <p>Starting from 6, how many steps does the Collatz procedure take to reach 1?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: (
        <p>
          An algorithm finds the largest element of a list by keeping a variable m, starting at the first element and
          replacing m whenever a larger element appears. Which is the right loop invariant?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "m is the largest element of the whole list.",
          "After looking at the first k elements, m is the largest of those k.",
          "m only increases.",
          "m is the last element looked at.",
        ],
        correct: [1],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that the largest-element algorithm in the previous question is correct, using a loop invariant: state it,
          and show initialisation, maintenance and termination.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the invariant: after k elements, m is the maximum of the first k.",
          "Shows it holds for k = 1 and is preserved when the next element is compared with m.",
          "Concludes that after all n elements m is the maximum, and notes the loop stops after n − 1 comparisons. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "binary",
      rung: "stretch",
      prompt: (
        <p>
          Binary search looks for x in a sorted list by comparing x with the middle element and discarding the half that
          cannot contain it. Give a loop invariant, prove that the search stops, and show it uses at most about{" "}
          <M>{"\\log_2 n"}</M> comparisons.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an invariant such as: if x is in the list, it lies in the current range.",
          "Argues the range at least halves each step, so the search stops.",
          "Concludes that after about log₂ n halvings the range has one element. A reasonable argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an algorithm is, how insertion sort works and how many comparisons it needs, and how a loop invariant proves an algorithm correct.",

  glimpse: (
    <p>
      The next lesson measures how running time grows with the input. Computability, much later, makes the idea of an
      algorithm precise with Turing machines.
    </p>
  ),
};
