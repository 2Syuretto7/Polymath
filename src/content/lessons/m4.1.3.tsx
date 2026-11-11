import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LatticePathViz } from "@/components/viz/LatticePathViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.1.3",
  minutes: 80,
  links: {
    revisits: ["m4.1.2", "m0.8.5", "m1.5.1"],
    foreshadows: ["m4.2.3", "m4.2.4", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        Add up the squares of a row of Pascal&rsquo;s triangle: <M>{"1^2 + 4^2 + 6^2 + 4^2 + 1^2 = 70"}</M>, which is{" "}
        <M>{"\\binom{8}{4}"}</M>, the middle of a row further down. Try another row and it happens again. You could prove
        this with algebra and factorials, but there is a proof in one sentence that also explains why it is true: count a
        single set of objects in two different ways.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A lattice path goes from the bottom left corner to the top right, one step right or up at a time. The number at each
        point counts the paths that reach it. Change the size of the grid and look for Pascal&rsquo;s triangle.
      </p>
      <LatticePathViz />
    </>
  ),

  theory: (
    <>
      <Definition title="combinatorial proof">
        <p>
          A <strong>combinatorial proof</strong> of an identity shows that both sides count the same set, or sets in
          bijection. It is often shorter than an algebraic proof, and it says why the identity holds.
        </p>
      </Definition>

      <Theorem title="basic identities">
        <MD>{"\\binom{n}{k} = \\binom{n}{n - k}, \\qquad \\binom{n}{k} = \\binom{n - 1}{k - 1} + \\binom{n - 1}{k}, \\qquad \\sum_{k=0}^{n}\\binom{n}{k} = 2^n, \\qquad k\\binom{n}{k} = n\\binom{n - 1}{k - 1}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Choosing the k elements to include is the same as choosing the n − k to leave out. For Pascal&rsquo;s rule, the
          k-subsets of <M>{"\\{1, \\dots, n\\}"}</M> either contain n, and are a (k − 1)-subset of the rest with n added,
          or do not. Both sides of the third count all subsets, by size on the left. For the last, count committees of k
          from n people with a chair: choose the committee and then its chair, or choose the chair and then the other k − 1
          members.
        </p>
      </Proof>

      <Theorem title="the binomial theorem">
        <MD>{"(x + y)^n = \\sum_{k=0}^{n}\\binom{n}{k}x^ky^{n-k}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Expanding the product of n factors <M>{"(x + y)"}</M> means choosing x or y from each. The term{" "}
          <M>{"x^ky^{n-k}"}</M> arises once for each choice of which k factors supply x. Putting x = y = 1 gives the sum{" "}
          <M>{"2^n"}</M>; putting x = −1, y = 1 shows that the alternating sum of a row is 0 for n ≥ 1.
        </p>
      </Proof>

      <Theorem title="Vandermonde&rsquo;s identity">
        <MD>{"\\sum_{j=0}^{k}\\binom{m}{j}\\binom{n}{k - j} = \\binom{m + n}{k}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Choose a committee of k from m students of one class and n of another. The right side counts all committees; the
          left sorts them by the number j from the first class. Taking m = n = k and using symmetry gives{" "}
          <M>{"\\sum_j \\binom{n}{j}^2 = \\binom{2n}{n}"}</M>, the identity in the puzzle.
        </p>
      </Proof>

      <Example title="lattice paths and the hockey stick">
        <p>
          A path from (0, 0) to (a, b) is a word with a R&rsquo;s and b U&rsquo;s, so there are{" "}
          <M>{"\\binom{a + b}{a}"}</M>. Sorting the paths by their last step gives Pascal&rsquo;s rule. Sorting the paths to
          (n − k, k + 1) by where they take their last step up gives the <strong>hockey stick identity</strong>
        </p>
        <MD>{"\\binom{k}{k} + \\binom{k + 1}{k} + \\dots + \\binom{n}{k} = \\binom{n + 1}{k + 1}."}</MD>
      </Example>

      <Remark title="algebra or counting">
        <p>
          Each identity could also be proved by induction, or by manipulating the binomial theorem; differentiating{" "}
          <M>{"(1 + x)^n"}</M> and setting x = 1 gives <M>{"\\sum k\\binom{n}{k} = n2^{n-1}"}</M>. Generating functions,
          later in the course, make such manipulations systematic. But a combinatorial proof is often the one you remember.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sym",
      rung: "check",
      prompt: <p>What is <M>{"\\binom{10}{7}"}</M>?</p>,
      answer: { kind: "numeric", value: 120 },
    },
    {
      key: "row",
      rung: "check",
      prompt: <p>What is <M>{"\\sum_{k=0}^{7}\\binom{7}{k}"}</M>?</p>,
      answer: { kind: "numeric", value: 128 },
    },
    {
      key: "weighted",
      rung: "apply",
      prompt: <p>What is <M>{"\\sum_{k=0}^{4}k\\binom{4}{k}"}</M>?</p>,
      answer: { kind: "numeric", value: 32 },
    },
    {
      key: "squares",
      rung: "apply",
      prompt: <p>What is <M>{"\\sum_{k=0}^{5}\\binom{5}{k}^2"}</M>?</p>,
      answer: { kind: "numeric", value: 252 },
    },
    {
      key: "paths",
      rung: "apply",
      prompt: (
        <p>
          How many lattice paths go from (0, 0) to (4, 3) using unit steps right and up, if they must pass through (2, 1)?
        </p>
      ),
      answer: { kind: "numeric", value: 18 },
    },
    {
      key: "vandermonde",
      rung: "prove",
      prompt: <p>Give a combinatorial proof of Vandermonde&rsquo;s identity, and deduce that <M>{"\\sum_j\\binom{n}{j}^2 = \\binom{2n}{n}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a set of size C(m + n, k), such as committees of k chosen from two groups of sizes m and n.",
          "Sorts the committees by the number j chosen from the first group, getting C(m, j)C(n, k − j) for each j.",
          "Sets m = n = k and uses C(n, n − j) = C(n, j). A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "hockey",
      rung: "stretch",
      prompt: (
        <p>
          Prove the hockey stick identity <M>{"\\sum_{i=k}^{n}\\binom{i}{k} = \\binom{n + 1}{k + 1}"}</M> combinatorially.
          Hint: sort the (k + 1)-subsets of <M>{"\\{1, \\dots, n + 1\\}"}</M> by their largest element.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Observes that if the largest element is i + 1, the other k elements form a k-subset of {1, …, i}.",
          "Notes that i ranges from k to n and sums C(i, k) over these values.",
          "Concludes that the sum counts all (k + 1)-subsets of {1, …, n + 1}. A proof by induction with Pascal's rule also earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a combinatorial proof is, how it proves Pascal's rule, the binomial theorem and Vandermonde's identity, and why the squares of a row of Pascal's triangle add up to a central binomial coefficient.",

  glimpse: (
    <p>
      Generating functions, later in this course, turn identities like these into algebra, and the Catalan numbers count
      lattice paths that stay below the diagonal.
    </p>
  ),
};
