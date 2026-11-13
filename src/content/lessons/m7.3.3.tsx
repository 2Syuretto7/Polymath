import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EightPuzzleViz } from "@/components/viz/EightPuzzleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.3.3",
  minutes: 85,
  links: {
    revisits: ["m7.3.2", "m7.2.2", "m3.6.2"],
    foreshadows: ["m7.5.4", "m14.4.2", "m7.4.4"],
  },

  puzzle: (
    <>
      <p>
        In the 1880s a craze swept America for the fifteen puzzle, and prizes were offered for solving a version with the 14
        and 15 swapped. Nobody claimed them. The same permutation can be written as a product of transpositions in many ways,
        of many lengths. Yet something about those lengths never changes, and it decides which puzzles can be solved.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Slide the tiles of this smaller eight puzzle as you like, and watch the count of pairs out of order. Then cheat by
        swapping two tiles.
      </p>
      <EightPuzzleViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="parity is well defined">
        <p>
          A permutation cannot be both a product of an even number of transpositions and a product of an odd number. So{" "}
          <M>{"\\operatorname{sgn}(\\sigma) = (-1)^k"}</M>, where <M>{"\\sigma"}</M> is a product of <M>{"k"}</M>{" "}
          transpositions, is well defined, and <M>{"\\operatorname{sgn} : S_n \\to \\{\\pm 1\\}"}</M> is a homomorphism.
        </p>
      </Theorem>

      <Proof>
        <p>
          Count the <strong>inversions</strong> of <M>{"\\sigma"}</M>, the pairs <M>{"i < j"}</M> with{" "}
          <M>{"\\sigma(i) > \\sigma(j)"}</M>. Composing with a transposition of two adjacent positions changes the count by
          exactly 1. Any transposition <M>{"(a\\,b)"}</M> is a product of an odd number, <M>{"2(b - a) - 1"}</M>, of adjacent
          ones. So each transposition flips the parity of the inversion count, and a product of <M>{"k"}</M> transpositions,
          starting from the identity with 0 inversions, has inversion count of the same parity as <M>{"k"}</M>.
        </p>
      </Proof>

      <Definition title="the alternating group">
        <p>
          The even permutations form the <strong>alternating group</strong> <M>{"A_n"}</M>, the kernel of{" "}
          <M>{"\\operatorname{sgn}"}</M>. For <M>{"n \\ge 2"}</M> it is a normal subgroup of index 2, of order{" "}
          <M>{"n!/2"}</M>. A cycle of length <M>{"k"}</M> is even exactly when <M>{"k"}</M> is odd.
        </p>
      </Definition>

      <Example title="puzzles and determinants">
        <p>
          In the eight puzzle, every slide keeps the inversion count&rsquo;s parity, so exactly half of the arrangements are
          reachable. The same argument, with care about the gap&rsquo;s row, settles the fifteen puzzle. In linear algebra, the
          determinant&rsquo;s formula <M>{"\\sum_\\sigma \\operatorname{sgn}(\\sigma)\\prod_i a_{i\\sigma(i)}"}</M> uses the
          sign, which is why swapping two rows changes the sign of the determinant.
        </p>
      </Example>

      <Remark title="simplicity">
        <p>
          <M>{"A_4"}</M>, of order 12, has no subgroup of order 6, showing that Lagrange&rsquo;s theorem has no simple converse.
          For <M>{"n \\ge 5"}</M>, <M>{"A_n"}</M> is simple: it has no normal subgroups except the trivial ones. That fact is
          the group-theoretic heart of the unsolvability of the general quintic by radicals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sign",
      rung: "check",
      prompt: <p>What is the sign of the cycle (1 2 3 4)?</p>,
      answer: { kind: "choice", options: ["+1", "−1"], correct: [1] },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>How many elements does A₅ have?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these are even permutations? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(1 2 3)", "(1 2)(3 4)", "(1 2 3 4)", "(1 2)", "e"], correct: [0, 1, 4] },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>How many inversions does the arrangement 3 1 2 have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "puzzle",
      rung: "apply",
      prompt: <p>An eight puzzle reads 2 1 3 4 5 6 7 8 with the gap in the corner. Can it be solved by sliding?</p>,
      answer: { kind: "choice", options: ["Yes", "No: it has one inversion, an odd number"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Assuming sgn is a homomorphism, prove that Aₙ is a normal subgroup of Sₙ. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Aₙ is the kernel of sgn.",
          "Uses that kernels of homomorphisms are normal subgroups, or checks sgn(τστ⁻¹) = sgn(σ) directly.",
        ],
      },
    },
    {
      key: "a4",
      rung: "stretch",
      prompt: <p>List the cycle types of the elements of A₄, and count the elements of each type.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies the identity (1), the double transpositions such as (1 2)(3 4) (3), and the 3-cycles (8).",
          "Checks the total is 12. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the parity of a permutation is well defined, how inversions prove it, what the alternating group is, and how parity explains the unsolvable sliding puzzles.",

  glimpse: (
    <p>
      The next chapter lets groups act on sets, generalising permutation groups. Simple groups, with A₅ the smallest
      non-abelian one, appear at the end of this course, and Abstract Algebra II uses them to show that the quintic cannot be
      solved by radicals.
    </p>
  ),
};
