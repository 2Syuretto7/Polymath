import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { StarsBarsViz } from "@/components/viz/StarsBarsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.1.2",
  minutes: 80,
  links: {
    revisits: ["m4.1.1", "m0.8.4", "m1.6.2"],
    foreshadows: ["m4.1.3", "m4.2.3", "m21.5.1"],
  },

  puzzle: (
    <>
      <p>
        An ice cream shop has 3 flavours, and you want a cup with 4 scoops. Repeats are allowed, and the order of the
        scoops does not matter. How many different cups are there? It is not <M>{"3^4"}</M>, which counts ordered
        sequences, and it is not a binomial coefficient of 3 and 4, since you cannot choose 4 things from 3 without
        repetition. The answer comes from a clever change of picture.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Share n identical sweets among k children. Each way of sharing is a row of stars and bars. Step through the
        arrangements, and see why counting rows is easy.
      </p>
      <StarsBarsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="permutations and combinations">
        <p>
          A <strong>k-permutation</strong> of an n-set is an ordered selection of k distinct elements. By the product rule
          there are
        </p>
        <MD>{"P(n, k) = n(n - 1)\\cdots(n - k + 1) = \\frac{n!}{(n - k)!}."}</MD>
        <p>
          A <strong>k-combination</strong> is an unordered selection, a k-element subset. Their number is written{" "}
          <M>{"\\binom{n}{k}"}</M>, read n choose k.
        </p>
      </Definition>

      <Theorem title="counting combinations">
        <MD>{"\\binom{n}{k} = \\frac{n!}{k!\\,(n - k)!}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Count the k-permutations in two ways. Directly there are <M>{"n!/(n - k)!"}</M>. Alternatively, choose the set
          of k elements, in <M>{"\\binom{n}{k}"}</M> ways, and then put it in order, in k! ways. So{" "}
          <M>{"\\binom{n}{k}\\,k! = n!/(n - k)!"}</M>. This is the <strong>division rule</strong>: if every outcome of
          interest corresponds to exactly k! arrangements, divide by k!.
        </p>
      </Proof>

      <Example title="words with repeated letters">
        <p>
          The letters of BANANA can be arranged in <M>{"\\frac{6!}{3!\\,2!\\,1!} = 60"}</M> ways: of the 6! orders of six
          labelled letters, each word arises 3! times from swapping the A&rsquo;s and 2! times from swapping the N&rsquo;s.
          In general, a word with <M>{"n_1"}</M> copies of one letter, <M>{"n_2"}</M> of another, and so on, has{" "}
          <M>{"n!/(n_1!\\,n_2!\\cdots n_r!)"}</M> arrangements, a <strong>multinomial coefficient</strong>.
        </p>
      </Example>

      <Theorem title="stars and bars">
        <p>
          The number of ways to put n identical objects into k distinct boxes, equivalently the number of solutions of{" "}
          <M>{"x_1 + \\dots + x_k = n"}</M> in non-negative integers, or of multisets of size n from k types, is
        </p>
        <MD>{"\\binom{n + k - 1}{k - 1}."}</MD>
      </Theorem>
      <Proof>
        <p>
          Write a distribution as n stars and k − 1 bars in a row, where the stars before the first bar go in box 1, those
          between the first and second bars in box 2, and so on. This is a bijection, and a row is determined by choosing
          which k − 1 of the n + k − 1 places hold bars.
        </p>
      </Proof>
      <p>
        So the ice cream cups number <M>{"\\binom{4 + 3 - 1}{2} = 15"}</M>.
      </p>

      <Remark title="four ways to choose">
        <p>
          Choosing k things from n types falls into four cases. Ordered with repetition: <M>{"n^k"}</M>. Ordered without
          repetition: <M>{"n!/(n - k)!"}</M>. Unordered without repetition: <M>{"\\binom{n}{k}"}</M>. Unordered with
          repetition: <M>{"\\binom{n + k - 1}{k}"}</M>. The art of counting is mostly deciding which case you are in, and
          whether objects and boxes are distinguishable.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "c62",
      rung: "check",
      prompt: <p>How many 2-element subsets does a 6-element set have?</p>,
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which formula counts unordered selections of k distinct elements from n?</p>,
      answer: { kind: "choice", options: ["nᵏ", "n!/(n − k)!", "n!/(k!(n − k)!)", "(n + k − 1)!/(k!(n − 1)!)"], correct: [2] },
    },
    {
      key: "banana",
      rung: "apply",
      prompt: <p>How many different arrangements are there of the letters of BANANA?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "eqn",
      rung: "apply",
      prompt: (
        <p>
          How many solutions does <M>{"x_1 + x_2 + x_3 + x_4 = 10"}</M> have in non-negative integers?
        </p>
      ),
      answer: { kind: "numeric", value: 286 },
    },
    {
      key: "round",
      rung: "apply",
      prompt: (
        <p>
          Six people sit at a round table. Two seatings count as the same if one is a rotation of the other. How many
          seatings are there?
        </p>
      ),
      answer: { kind: "numeric", value: 120 },
    },
    {
      key: "double",
      rung: "prove",
      prompt: (
        <p>
          Prove the formula <M>{"\\binom{n}{k} = n!/(k!\\,(n - k)!)"}</M> by counting the k-permutations of an n-set in two
          ways, and prove the stars and bars formula by describing the bijection carefully.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Counts k-permutations directly as n!/(n − k)! and as the number of k-subsets times k!, and equates them.",
          "Describes the map from distributions to rows of n stars and k − 1 bars and why it is a bijection.",
          "Counts the rows as the number of ways to place the bars among n + k − 1 positions. A clear answer earns full credit.",
        ],
      },
    },
    {
      key: "positive",
      rung: "stretch",
      prompt: (
        <p>
          How many solutions does <M>{"x_1 + \\dots + x_k = n"}</M> have in positive integers? Find the formula in two ways:
          by reducing to the non-negative case, and by placing bars in the gaps between n stars.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Substitutes yᵢ = xᵢ − 1 to get a non-negative problem with total n − k, giving C(n − 1, k − 1).",
          "Alternatively chooses k − 1 of the n − 1 gaps between the stars to place bars, giving the same count.",
          "Notes the answer is 0 when k > n, or checks a small case. A correct answer with one sound method earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between permutations and combinations, how the division rule gives n!/(k!(n − k)!), how to count words with repeated letters, and how stars and bars counts selections with repetition.",

  glimpse: (
    <p>
      The next lesson finds identities among the binomial coefficients by counting the same thing twice. Generating
      functions, later in this course, and integer partitions, in Combinatorics, handle harder distribution problems.
    </p>
  ),
};
