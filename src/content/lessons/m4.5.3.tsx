import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MergeSortViz } from "@/components/viz/MergeSortViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.5.3",
  minutes: 85,
  links: {
    revisits: ["m4.5.2", "m4.5.1", "m1.5.4"],
    foreshadows: ["m4.5.4", "m21.3.1", "m20.5.1"],
  },

  puzzle: (
    <>
      <p>
        In 1945 John von Neumann wrote one of the first programs for a stored-program computer. It sorted a list by a
        strange-sounding plan: split the list in half, sort each half, then merge the two sorted halves. But how do you
        sort each half? By the same plan. It sounds like a method that assumes what it is trying to do. Why does it
        work, and why is it so much faster than sorting cards one at a time?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through merge sort on eight numbers. First the list is split until every piece has one element, then the
        pieces are merged back together in sorted order. Count the comparisons at each level of merging.
      </p>
      <MergeSortViz />
    </>
  ),

  theory: (
    <>
      <Definition title="recursive algorithms">
        <p>
          A <strong>recursive algorithm</strong> solves a problem by calling itself on smaller instances of the same
          problem. It needs a <strong>base case</strong>, small enough to solve directly, and a{" "}
          <strong>recursive case</strong> that reduces every other input to smaller ones. Because the inputs keep
          shrinking and the natural numbers cannot shrink for ever, the calls must eventually reach a base case.
          Correctness is proved by strong induction on the size of the input: assume the algorithm works on all smaller
          inputs, and show it works on this one.
        </p>
      </Definition>

      <Example title="merge sort">
        <p>
          To sort a list of length <M>{"n"}</M>: if <M>{"n \\le 1"}</M>, it is already sorted. Otherwise sort the first
          half and the second half recursively, then <strong>merge</strong>: repeatedly compare the front elements of the
          two sorted halves and move the smaller one to the output. Merging two lists of total length <M>{"n"}</M> takes
          at most <M>{"n - 1"}</M> comparisons, since each comparison places one element and the last element needs none.
        </p>
      </Example>

      <Theorem title="the running time of merge sort">
        <p>
          Let <M>{"T(n)"}</M> be the most comparisons merge sort makes on a list of length <M>{"n = 2^k"}</M>. Then{" "}
          <M>{"T(n) \\le n \\log_2 n"}</M>, so merge sort runs in <M>{"O(n \\log n)"}</M> time.
        </p>
      </Theorem>

      <Proof>
        <p>The recursion gives</p>
        <MD>{"T(1) = 0, \\qquad T(n) \\le 2\\,T(n/2) + n."}</MD>
        <p>
          We prove <M>{"T(2^k) \\le k\\,2^k"}</M> by induction on <M>{"k"}</M>. For <M>{"k = 0"}</M> both sides are 0.
          If it holds for <M>{"k"}</M>, then{" "}
          <M>{"T(2^{k+1}) \\le 2 \\cdot k\\,2^k + 2^{k+1} = (k+1)\\,2^{k+1}"}</M>. Another way to see it: the splitting
          makes <M>{"\\log_2 n"}</M> levels, and the merges on each level handle <M>{"n"}</M> elements in all, costing at
          most <M>{"n"}</M> comparisons per level.
        </p>
      </Proof>

      <Remark title="divide and conquer, and its traps">
        <p>
          Merge sort is the model of <strong>divide and conquer</strong>: split, solve the parts, combine. For a million
          names, <M>{"n \\log_2 n"}</M> is about twenty million, against about five hundred billion comparisons for
          insertion sort in the worst case, which explains the puzzle in the previous lesson. But recursion is not
          automatically fast. Computing the Fibonacci numbers by <M>{"F(n) = F(n-1) + F(n-2)"}</M> directly solves the
          same subproblems again and again and takes exponential time. Remembering answers already found, called{" "}
          <strong>memoisation</strong>, cuts it to linear time.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "base",
      rung: "check",
      prompt: <p>Why must a recursive algorithm have a base case?</p>,
      answer: {
        kind: "choice",
        options: [
          "To make the code shorter.",
          "So that the chain of smaller and smaller calls eventually stops with a direct answer.",
          "Because computers cannot call a function twice.",
          "To make the algorithm run in linear time.",
        ],
        correct: [1],
      },
    },
    {
      key: "levels",
      rung: "check",
      prompt: <p>Merge sort is run on a list of 1024 elements. How many levels of halving are there before every piece has one element?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "rec",
      rung: "apply",
      prompt: (
        <p>
          Suppose <M>{"T(1) = 0"}</M> and <M>{"T(n) = 2T(n/2) + n"}</M>. Compute <M>{"T(16)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 64 },
    },
    {
      key: "merge",
      rung: "apply",
      prompt: (
        <p>
          Merge the sorted lists 2, 5, 9 and 3, 4, 10. What is the third element of the merged list?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "fib",
      rung: "apply",
      prompt: (
        <p>
          The naive recursive program computes <M>{"F(n)"}</M> by calling itself on <M>{"n-1"}</M> and <M>{"n-2"}</M>,
          with <M>{"F(0)"}</M> and <M>{"F(1)"}</M> as base cases that make no further calls. Counting the first call, how
          many calls in total does it make to compute <M>{"F(5)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove by strong induction on the length of the list that merge sort returns the list sorted.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Handles the base case: a list of length 0 or 1 is already sorted.",
          "Uses the inductive hypothesis on the two shorter halves, then argues that merging two sorted lists gives a sorted list containing the same elements.",
        ],
      },
    },
    {
      key: "three",
      rung: "stretch",
      prompt: (
        <p>
          A variant splits the list into three parts instead of two, sorts each recursively, and merges them. Write down
          its recurrence and find its growth rate. Is it better than ordinary merge sort?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a recurrence of the form T(n) = 3T(n/3) + cn, with the merge costing linear time.",
          "Concludes the growth rate is still Θ(n log n), so it is no better in big O terms; only the constant changes.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a recursive algorithm works, why it needs a base case, how merge sort sorts a list, and why it takes about n log n comparisons.",

  glimpse: (
    <p>
      The next lesson asks a harder question: are there problems where no clever method is known, and checking an answer
      is easy but finding one seems hard?
    </p>
  ),
};
