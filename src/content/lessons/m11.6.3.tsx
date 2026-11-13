import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PellViz } from "@/components/viz/PellViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.6.3",
  minutes: 85,
  links: {
    revisits: ["m11.6.1", "m11.6.2", "m4.4.3"],
    foreshadows: ["m11.6.5", "m29.1.1", "m29.2.1"],
  },

  puzzle: (
    <>
      <p>
        In 628 Brahmagupta wrote that a person who can solve <M>{"x^2 - 92y^2 = 1"}</M> within a year is a mathematician. Five
        centuries later Bhaskara II solved <M>{"x^2 - 61y^2 = 1"}</M>, whose smallest solution has ten digits. How can such
        huge solutions be found, and why must they exist?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a non-square D. The table shows the smallest solution of <M>{"x^2 - Dy^2 = 1"}</M> and the next few, each
        made from the one before.
      </p>
      <PellViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Pell’s equation">
        <p>
          Let <M>{"D > 1"}</M> be an integer that is not a square. Then <M>{"x^2 - Dy^2 = 1"}</M> has a solution in positive
          integers. If <M>{"(x_1, y_1)"}</M> is the smallest, the <strong>fundamental solution</strong>, then the positive
          solutions are exactly the <M>{"(x_k, y_k)"}</M> with
        </p>
        <MD>{"x_k + y_k\\sqrt D = \\left(x_1 + y_1\\sqrt D\\right)^k, \\qquad k = 1, 2, 3, \\dots"}</MD>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"N(x + y\\sqrt D) = x^2 - Dy^2 = (x + y\\sqrt D)(x - y\\sqrt D)"}</M>. Then the norm is multiplicative:{" "}
          <M>{"N(\\alpha\\beta) = N(\\alpha)N(\\beta)"}</M>, which is Brahmagupta&rsquo;s identity
        </p>
        <MD>{"(x^2 - Dy^2)(u^2 - Dv^2) = (xu + Dyv)^2 - D(xv + yu)^2."}</MD>
        <p>
          So powers of a solution of norm 1 have norm 1. For the converse, if <M>{"\\alpha = x + y\\sqrt D > 1"}</M> has norm
          1 and lies strictly between <M>{"\\varepsilon^k"}</M> and <M>{"\\varepsilon^{k+1}"}</M>, where{" "}
          <M>{"\\varepsilon = x_1 + y_1\\sqrt D"}</M>, then <M>{"\\alpha\\varepsilon^{-k}"}</M> has norm 1 and lies strictly
          between 1 and <M>{"\\varepsilon"}</M>. One checks that it is then a positive solution smaller than the fundamental
          one, a contradiction. Existence is harder; the next lesson gives it through continued fractions.
        </p>
      </Proof>

      <Example title="D = 2">
        <p>
          The fundamental solution is <M>{"(3, 2)"}</M>. Then <M>{"(3 + 2\\sqrt2)^2 = 17 + 12\\sqrt2"}</M>, giving{" "}
          <M>{"17^2 - 2 \\cdot 12^2 = 289 - 288 = 1"}</M>. The ratios 3/2, 17/12, 99/70 approach <M>{"\\sqrt2"}</M> fast, which
          is why Pell solutions give excellent rational approximations.
        </p>
      </Example>

      <Remark title="the chakravala method">
        <p>
          Brahmagupta used his identity to compose solutions of <M>{"x^2 - Dy^2 = k"}</M> for small k and get solutions for k
          = 1. Bhaskara II, building on Jayadeva, turned this into the chakravala, the &ldquo;cyclic&rdquo; method, which always
          reaches k = 1. For D = 61 it finds <M>{"x = 1766319049"}</M>, <M>{"y = 226153980"}</M>. European mathematicians met
          the same problem in Fermat&rsquo;s challenge of 1657, and Lagrange first proved that solutions always exist.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "check3",
      rung: "check",
      prompt: <p>The fundamental solution for D = 3 is (2, y). What is y?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "square",
      rung: "check",
      prompt: <p>Why must D not be a perfect square?</p>,
      answer: {
        kind: "choice",
        options: [
          "If D = d², then x² − d²y² = (x − dy)(x + dy) = 1 forces y = 0, so only the trivial solution exists.",
          "Because squares are even.",
          "Because the chakravala method fails to terminate.",
          "There is no reason; it works for squares too.",
        ],
        correct: [0],
      },
    },
    {
      key: "next",
      rung: "apply",
      prompt: <p>For D = 2, the solutions after (3, 2) and (17, 12) come from (3 + 2√2)³. What is its x?</p>,
      answer: { kind: "numeric", value: 99, tolerance: 0 },
    },
    {
      key: "d7",
      rung: "apply",
      prompt: <p>The fundamental solution for D = 7 is (8, 3). What is the x of the second solution, from (8 + 3√7)²?</p>,
      answer: { kind: "numeric", value: 127, tolerance: 0 },
    },
    {
      key: "compose",
      rung: "apply",
      prompt: (
        <p>
          <M>{"5^2 - 6 \\cdot 2^2 = 1"}</M>. Compose (5, 2) with itself using Brahmagupta&rsquo;s identity. What is the new x?
        </p>
      ),
      answer: { kind: "numeric", value: 49, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Brahmagupta&rsquo;s identity, and deduce that if (x, y) solves Pell&rsquo;s equation, so does (x² + Dy², 2xy).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands both sides, or uses the factorisation (x + y√D)(x − y√D).",
          "Sets (u, v) = (x, y) in the identity.",
          "Concludes the new pair has x² − Dy² = 1 · 1 = 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What happens to the solutions of x² − Dy² = −1? Can you find one for D = 2, and does one exist for D = 3?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds (1, 1) for D = 2.",
          "Notes that for D = 3, x² ≡ −1 (mod 3) is impossible, so there is no solution.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Pell's equation is, why powers of the fundamental solution give all solutions, how Brahmagupta's identity composes solutions, and how D = 61 shows that the smallest solution can be huge.",

  glimpse: (
    <p>
      The next lessons treat sums of two squares and continued fractions, which find the fundamental solution systematically.
      In algebraic number theory, the solutions of Pell&rsquo;s equation are the units of the ring of integers of{" "}
      <M>{"\\mathbb{Q}(\\sqrt D)"}</M>.
    </p>
  ),
};
