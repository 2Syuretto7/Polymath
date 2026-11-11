import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PigeonholeViz } from "@/components/viz/PigeonholeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.1.4",
  minutes: 75,
  links: {
    revisits: ["m4.1.1", "m1.3.3", "m1.7.2"],
    foreshadows: ["m4.6.4", "m21.4.2", "m11.6.5"],
  },

  puzzle: (
    <>
      <p>
        Mumbai has well over a million people with hair on their heads, and nobody has more than about 200,000 hairs. So at
        least two people in Mumbai have exactly the same number of hairs. In fact, many more than two do. Nobody has
        counted, and nobody needs to. The principle behind this is almost too obvious to state, yet it proves surprising
        theorems in number theory, geometry and the study of sequences.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Put n pigeons into k holes. Rearrange them as you like, by clicking a hole to move a pigeon on. Can you make the
        fullest hole smaller than the number in the table?
      </p>
      <PigeonholeViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the pigeonhole principle">
        <p>
          If more than k objects are placed in k boxes, some box contains at least two. More generally, if N objects are
          placed in k boxes, some box contains at least <M>{"\\lceil N/k \\rceil"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          If every box contained at most <M>{"\\lceil N/k \\rceil - 1"}</M> objects, the total would be at most{" "}
          <M>{"k(\\lceil N/k \\rceil - 1) < k \\cdot N/k = N"}</M>, a contradiction. In the language of functions: a
          function from a larger finite set to a smaller one cannot be injective.
        </p>
      </Proof>
      <p>
        The skill lies in choosing the boxes. Here are four classic choices.
      </p>

      <Example title="points in a square">
        <p>
          Any 5 points in a square of side 1 include two at distance at most <M>{"\\sqrt2/2"}</M>. Cut the square into four
          squares of side 1/2: two points share a small square, and its diagonal is <M>{"\\sqrt2/2"}</M>.
        </p>
      </Example>

      <Example title="divisors">
        <p>
          Among any n + 1 numbers chosen from 1, 2, …, 2n, one divides another. Write each as <M>{"2^a m"}</M> with m odd.
          There are only n odd numbers below 2n, so two of the chosen numbers share the same m, and the one with the
          smaller power of 2 divides the other. With n numbers it can fail: take n + 1, …, 2n.
        </p>
      </Example>

      <Theorem title="Erdős–Szekeres">
        <p>
          Every sequence of <M>{"n^2 + 1"}</M> distinct real numbers has an increasing subsequence of length n + 1 or a
          decreasing subsequence of length n + 1.
        </p>
      </Theorem>
      <Proof>
        <p>
          Label each term with the length <M>{"\\ell_i"}</M> of the longest increasing subsequence starting there. If all{" "}
          <M>{"\\ell_i \\le n"}</M>, there are n possible labels for <M>{"n^2 + 1"}</M> terms, so some label is shared by at
          least n + 1 terms. If i &lt; j share a label, then <M>{"a_i > a_j"}</M>, since otherwise putting{" "}
          <M>{"a_i"}</M> in front of the best sequence from j would make <M>{"\\ell_i"}</M> larger. So those n + 1 terms
          form a decreasing subsequence.
        </p>
      </Proof>

      <Remark title="further on">
        <p>
          Dirichlet used the principle to show that for every real x and every N there are integers p and q with{" "}
          <M>{"1 \\le q \\le N"}</M> and
        </p>
        <MD>{"|qx - p| < \\frac{1}{N}:"}</MD>
        <p>
          the fractional parts of 0, x, 2x, …, Nx are N + 1 numbers in N intervals of length 1/N. Ramsey theory grows from
          the same idea: among any 6 people, there are 3 who all know each other or 3 who are all strangers. In each case
          the principle proves that something exists without showing where to find it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "socks",
      rung: "check",
      prompt: (
        <p>
          A drawer holds black socks and white socks. How many must you take, in the dark, to be sure of a matching pair?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "months",
      rung: "check",
      prompt: <p>What is the smallest number of people that guarantees two of them were born in the same month?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "hundred",
      rung: "apply",
      prompt: (
        <p>
          100 people are in a hall. What is the largest number you can guarantee were born in the same month?
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "consec",
      rung: "apply",
      prompt: (
        <p>
          How many numbers must you choose from 1, 2, …, 20 to be sure that two of them are consecutive?
        </p>
      ),
      answer: { kind: "numeric", value: 11 },
    },
    {
      key: "es",
      rung: "apply",
      prompt: (
        <p>
          By the Erdős–Szekeres theorem, any sequence of 10 distinct numbers has a monotone subsequence, increasing or
          decreasing, of at least what length?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "divides",
      rung: "prove",
      prompt: (
        <p>
          Prove that among any n + 1 numbers chosen from 1, 2, …, 2n, one divides another. Say clearly what the pigeons and
          the holes are.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes each chosen number as 2ᵃm with m odd, and takes the holes to be the n odd numbers 1, 3, …, 2n − 1.",
          "Applies the pigeonhole principle to get two numbers with the same odd part.",
          "Concludes that the one with the smaller power of 2 divides the other. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "ramsey",
      rung: "stretch",
      prompt: (
        <p>
          Prove that among any 6 people, there are 3 who all know each other or 3 who are all strangers. Show by example
          that 5 people are not enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Fixes one person, who by pigeonhole knows at least 3 of the other 5 or is a stranger to at least 3.",
          "Considers those 3: if any two of them know each other (in the first case) there is a triangle with the first person; otherwise the 3 are mutual strangers. The other case is symmetric.",
          "Gives the 5-person example: a pentagon of acquaintances whose non-adjacent pairs are strangers. A reasonable proof earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the pigeonhole principle and its general form with ⌈N/k⌉, how choosing the boxes cleverly proves the results about points in a square and divisors, and the idea of the Erdős–Szekeres theorem.",

  glimpse: (
    <p>
      The probabilistic method, at the end of this course, is another way to prove that something exists without finding
      it. Combinatorics develops Ramsey&rsquo;s theorem, and Number Theory uses Dirichlet&rsquo;s approximation in the
      study of continued fractions.
    </p>
  ),
};
