import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { FerrersViz } from "@/components/viz/FerrersViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.5.1",
  minutes: 85,
  links: {
    revisits: ["m4.2.3", "m4.1.2", "m4.2.2"],
    foreshadows: ["m21.5.2", "m21.5.3", "m28.3.3"],
  },

  puzzle: (
    <>
      <p>
        In how many ways can you pay 6 rupees using coins of any whole-rupee value, if only the multiset of coins matters?
        Count those that use only odd coins, and those where no two coins are equal. You will find both counts are 4. Is that a
        coincidence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the partitions of n as rows of dots, flip them, and compare the two counts below.</p>
      <FerrersViz />
    </>
  ),

  theory: (
    <>
      <Definition title="partitions">
        <p>
          A <strong>partition</strong> of <M>n</M> is a way of writing <M>n</M> as a sum of positive integers, ignoring order,
          usually listed as <M>{"\\lambda_1 \\ge \\lambda_2 \\ge \\cdots"}</M>. The number of partitions is{" "}
          <M>{"p(n)"}</M>: <M>{"p(4) = 5"}</M>, <M>{"p(5) = 7"}</M>, <M>{"p(6) = 11"}</M>. Its{" "}
          <strong>Ferrers diagram</strong> has a row of <M>{"\\lambda_i"}</M> dots for each part, and its{" "}
          <strong>conjugate</strong> reads the diagram by columns.
        </p>
      </Definition>

      <Theorem title="Euler's generating function">
        <MD>{"\\sum_{n \\ge 0} p(n) x^n = \\prod_{k \\ge 1} \\frac{1}{1 - x^k}."}</MD>
        <p>
          Expand each factor as <M>{"1 + x^k + x^{2k} + \\cdots"}</M>; choosing <M>{"x^{m_k k}"}</M> from the <M>k</M>th factor
          means using the part <M>k</M> exactly <M>{"m_k"}</M> times.
        </p>
      </Theorem>

      <Example title="odd parts and distinct parts">
        <p>Partitions into distinct parts have generating function <M>{"\\prod_k (1 + x^k)"}</M>, and</p>
        <MD>{"\\prod_{k} (1 + x^k) = \\prod_{k} \\frac{1 - x^{2k}}{1 - x^k} = \\prod_{k \\text{ odd}} \\frac{1}{1 - x^k},"}</MD>
        <p>
          since the even factors in the denominator cancel the whole numerator. The right side counts partitions into odd parts.
          So the two counts agree for every <M>n</M>: Euler&rsquo;s theorem. Conjugation gives another such identity: partitions
          into at most <M>m</M> parts match those with every part at most <M>m</M>.
        </p>
      </Example>

      <Remark title="Hardy and Ramanujan">
        <p>
          <M>{"p(n)"}</M> grows fast: <M>{"p(100) = 190{,}569{,}292"}</M>. In 1918 Hardy and Ramanujan proved
        </p>
        <MD>{"p(n) \\sim \\frac{1}{4n\\sqrt{3}} \\, e^{\\pi \\sqrt{2n/3}},"}</MD>
        <p>
          by the circle method, with a refinement that, as Rademacher later made exact, gives <M>{"p(n)"}</M> on the nose.
          Ramanujan also found congruences such as <M>{"p(5n + 4) \\equiv 0 \\pmod 5"}</M>, whose explanation runs through
          modular forms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which of these is a different partition of 5 from 3 + 1 + 1?</p>,
      answer: { kind: "choice", options: ["2 + 2 + 1", "1 + 3 + 1", "1 + 1 + 3", "3 + 1 + 1"], correct: [0] },
    },
    {
      key: "gf",
      rung: "check",
      prompt: <p>In Euler&rsquo;s product, what does choosing x to the power 2k from the factor 1/(1 − xᵏ) mean?</p>,
      answer: { kind: "choice", options: ["The part k is used exactly twice", "The part 2k is used once", "There are k parts", "The partition has 2 parts"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many partitions does 8 have?</p>,
      answer: { kind: "numeric", value: 22 },
    },
    {
      key: "p7",
      rung: "apply",
      prompt: <p>How many partitions of 7 have distinct parts?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>What is the conjugate of 4 + 2 + 1?</p>,
      answer: { kind: "choice", options: ["3 + 2 + 1 + 1", "4 + 2 + 1", "3 + 3 + 1", "2 + 2 + 2 + 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the number of partitions of n into at most m parts equals the number of partitions of n with every part at most m.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the Ferrers diagram and conjugation, swapping rows and columns.",
          "Notes the number of rows of a diagram is the largest part of its conjugate.",
          "Concludes conjugation is a bijection between the two sets, since conjugating twice gives back the original.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Find a direct bijection from partitions into odd parts to partitions into distinct parts. Hint: merge equal parts in pairs.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes merging repeated parts, or writing each multiplicity in binary, so that all parts become distinct.",
          "Describes the inverse, halving even parts until they are odd.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Partitions count objects up to reordering. More generally we often want to count up to some symmetry: necklaces up to
        rotation, colourings of a cube up to turning it over, molecules up to the symmetries of their shape.
      </p>
      <p>
        Next, Pólya counting: Burnside&rsquo;s lemma revisited, the cycle index of a group, and Pólya&rsquo;s theorem, which
        counts and sorts symmetric colourings all at once.
      </p>
    </>
  ),
};
