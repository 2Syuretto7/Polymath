import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DerangementViz } from "@/components/viz/DerangementViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.5.3",
  minutes: 90,
  links: {
    revisits: ["m4.2.3", "m4.2.1", "m21.5.1"],
    foreshadows: ["m22.1.1", "m27.3.1", "m28.4.2"],
  },

  puzzle: (
    <>
      <p>
        At a wedding, <M>n</M> guests leave their shoes at the door, and on leaving each picks up a pair at random. What is
        the chance that nobody gets their own pair? For three guests it is <M>{"1/3"}</M>; for a hundred, it is almost
        exactly <M>{"0.3679"}</M>. Why does it settle down, and to what?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>List the permutations of n items and pick out those that move every item.</p>
      <DerangementViz />
    </>
  ),

  theory: (
    <>
      <Definition title="exponential generating functions">
        <p>
          The <strong>exponential generating function</strong> of a sequence <M>{"a_0, a_1, \\dots"}</M> is
        </p>
        <MD>{"A(x) = \\sum_{n \\ge 0} a_n \\frac{x^n}{n!}."}</MD>
        <p>
          It suits <strong>labelled</strong> structures, built on the set <M>{"\\{1, \\dots, n\\}"}</M>: permutations have{" "}
          <M>{"\\sum n! \\, x^n/n! = 1/(1 - x)"}</M>, and sets have <M>{"\\sum x^n/n! = e^x"}</M>.
        </p>
      </Definition>

      <Theorem title="the product rule">
        <p>
          If a structure on a labelled set is a pair, an <M>A</M>-structure on some subset and a <M>B</M>-structure on the
          rest, then the counts satisfy <M>{"c_n = \\sum_k \\binom{n}{k} a_k b_{n-k}"}</M>, which is exactly{" "}
          <M>{"C(x) = A(x) B(x)"}</M>. The <M>{"n!"}</M> in the denominators absorbs the choice of which labels go where.
        </p>
      </Theorem>

      <Example title="derangements">
        <p>
          Every permutation splits into its set of fixed points and a derangement of the rest. So{" "}
          <M>{"n! = \\sum_k \\binom{n}{k} D_{n-k}"}</M>, that is, <M>{"\\frac{1}{1-x} = e^x D(x)"}</M>, and
        </p>
        <MD>{"D(x) = \\frac{e^{-x}}{1 - x}, \\qquad D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}."}</MD>
        <p>
          The sum is a partial sum of <M>{"e^{-1}"}</M>, so <M>{"D_n / n! \\to 1/e"}</M>, and the error is so small that{" "}
          <M>{"D_n"}</M> is the integer nearest <M>{"n!/e"}</M>. Inclusion-exclusion gives the same formula.
        </p>
      </Example>

      <Remark title="the exponential formula">
        <p>
          If every structure is a set of connected pieces, and <M>{"C(x)"}</M> counts the connected ones, then all structures
          have generating function <M>{"\\exp C(x)"}</M>. Permutations are sets of cycles, and cycles on <M>n</M> labels number{" "}
          <M>{"(n-1)!"}</M>, giving <M>{"\\exp(\\log \\frac{1}{1-x}) = \\frac{1}{1-x}"}</M>. Set partitions are sets of
          non-empty blocks, so the Bell numbers 1, 1, 2, 5, 15, 52, … have generating function <M>{"\\exp(e^x - 1)"}</M>. With
          Cayley&rsquo;s count <M>{"n^{n-2}"}</M> of labelled trees, the same formula counts labelled forests.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Why are exponential generating functions suited to labelled structures?</p>,
      answer: {
        kind: "choice",
        options: ["Multiplying them counts ways to split the labels between two structures, through binomial coefficients", "They converge for every x", "They have integer coefficients", "They ignore the labels"],
        correct: [0],
      },
    },
    {
      key: "perm",
      rung: "check",
      prompt: <p>What is the exponential generating function of permutations?</p>,
      answer: { kind: "choice", options: ["1/(1 − x)", "eˣ", "e to the −x", "x/(1 − x)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many derangements of 4 items are there?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "d5",
      rung: "apply",
      prompt: <p>Compute D₅, the number of derangements of 5 items.</p>,
      answer: { kind: "numeric", value: 44 },
    },
    {
      key: "bell",
      rung: "apply",
      prompt: <p>How many ways are there to partition a set of 4 labelled items into non-empty blocks?</p>,
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the exponential generating function of derangements is e to the −x divided by (1 − x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits each permutation of n items into its set of fixed points and a derangement of the others, giving n! as the sum of C(n, k) times D of n − k.",
          "Recognises this as the product of eˣ and D(x), with 1/(1 − x) on the left.",
          "Solves for D(x).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The share of permutations with exactly one fixed point also tends to 1/e. Explain why, using derangements.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Counts permutations with exactly one fixed point as n times D of n − 1.",
          "Notes n times D of n − 1 divided by n! equals D of n − 1 divided by (n − 1)!, which tends to 1/e.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With this lesson M21 is complete. The next course asks a question that sounds simple: how do you measure the size of
        a set of real numbers? Length works for intervals, but for wilder sets, such as the rationals or the Cantor set, the
        Riemann integral and the idea of length both break down.
      </p>
      <p>
        Next, in Measure and Integration, sigma-algebras: the collections of sets on which a measure can live, why we cannot
        measure every set, and the Borel sets generated by the open ones.
      </p>
    </>
  ),
};
