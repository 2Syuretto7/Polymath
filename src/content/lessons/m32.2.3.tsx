import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { YoungHookViz } from "@/components/viz/YoungHookViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.2.3",
  minutes: 90,
  links: {
    revisits: ["m32.2.2", "m32.2.1", "m14.6.4"],
    foreshadows: ["m32.5.2", "m32.5.3", "m32.3.2"],
  },

  puzzle: (
    <>
      <p>
        Two permutations are conjugate exactly when they have the same cycle type, so the conjugacy classes of Sₙ match
        the partitions of n. Hence Sₙ has as many irreducible representations as n has partitions. Is there a natural way
        to attach a representation to each partition, and to read off its dimension from the partition alone?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick n and a partition, and read the hook lengths and the dimension.</p>
      <YoungHookViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Young diagrams and tableaux">
        <p>
          A partition λ = (λ₁ ≥ λ₂ ≥ …) of n is drawn as a <strong>Young diagram</strong>: rows of λ₁, λ₂, … boxes,
          left-justified. A <strong>standard Young tableau</strong> fills the boxes with 1, …, n so that entries increase
          along each row and down each column. The <strong>conjugate</strong> partition λ′ comes from transposing the
          diagram.
        </p>
      </Definition>

      <Theorem title="Specht modules">
        <p>
          For each λ there is an irreducible representation Sλ, the <strong>Specht module</strong>, spanned by
          polytabloids built from tableaux of shape λ. Different partitions give non-isomorphic modules, and every
          irreducible representation of Sₙ is one of them. The module for λ′ is that for λ tensored with sign.
        </p>
      </Theorem>

      <Theorem title="the hook length formula">
        <p>
          dim Sλ equals the number of standard Young tableaux of shape λ, and Frame, Robinson and Thrall showed it is n!
          divided by the product of all hook lengths. The hook of a box is the box, the boxes to its right and the boxes
          below it.
        </p>
      </Theorem>

      <Example title="first cases">
        <p>
          The one-row partition (n) gives the trivial representation, and the one-column partition gives sign. The
          partition (n − 1, 1) gives the standard representation, of dimension n − 1: the permutation representation on n
          points minus the trivial one. For S₄, the dimensions are 1, 3, 2, 3, 1, and 1 + 9 + 4 + 9 + 1 = 24.
        </p>
      </Example>

      <Remark title="further tools">
        <p>
          The Robinson–Schensted correspondence matches permutations with pairs of standard tableaux of the same shape,
          which proves that the squares of the dimensions add up to n!. The Murnaghan–Nakayama rule computes character
          values by removing border strips from the diagram.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cls",
      rung: "check",
      prompt: <p>What indexes the conjugacy classes of Sₙ?</p>,
      answer: { kind: "choice", options: ["The partitions of n, through cycle type", "The subsets of n", "The divisors of n!", "The elements of order 2"], correct: [0] },
    },
    {
      key: "std",
      rung: "check",
      prompt: <p>Which partition gives the standard representation of Sₙ, of dimension n − 1?</p>,
      answer: { kind: "choice", options: ["(n − 1, 1)", "(n)", "(1, 1, …, 1)", "(n − 2, 2)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take n = 6 and the partition (3, 2, 1). What is the dimension?</p>,
      answer: { kind: "numeric", value: 16, tolerance: 0 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many irreducible representations does S₅ have?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Use the hook length formula to find the dimension for the partition (2, 2) of 4.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that there are exactly n − 1 standard Young tableaux of shape (n − 1, 1).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes 1 must go in the top-left box, since entries increase along rows and down columns.",
          "Notes the single box in the second row can hold any of 2, …, n, since only the box above it constrains it.",
          "Notes the remaining numbers then fill the first row in increasing order in exactly one way, giving n − 1 tableaux.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do λ and its conjugate λ′ always give representations of the same dimension?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that transposing the diagram swaps arms and legs, so the multiset of hook lengths is unchanged.",
          "Or notes the module for λ′ is that for λ tensored with the one-dimensional sign representation.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Finite groups have shown how much characters can do. We now turn to the structure of Lie algebras themselves,
        beginning with the ones whose brackets eventually die out.
      </p>
      <p>Next, solvable and nilpotent algebras.</p>
    </>
  ),
};
