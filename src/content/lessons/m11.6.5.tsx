import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ContinuedFractionViz } from "@/components/viz/ContinuedFractionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.6.5",
  minutes: 90,
  links: {
    revisits: ["m4.4.3", "m11.6.3", "m11.6.1"],
    foreshadows: ["m12.1.1", "m29.1.1", "m13.1.1"],
  },

  puzzle: (
    <>
      <p>
        Aryabhata used 62832/20000 for π. Zu Chongzhi, in the fifth century, found 355/113, correct to six decimal places, and
        nothing with a smaller denominator does better. How do you find the best fractions for a given number?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a number. Its continued fraction terms, its convergents, and how close each convergent is, compared with the
        bound 1/q², are shown.
      </p>
      <ContinuedFractionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="continued fraction">
        <p>
          For real <M>{"x"}</M>, set <M>{"a_0 = \\lfloor x \\rfloor"}</M>; if <M>{"x \\ne a_0"}</M>, repeat with{" "}
          <M>{"1/(x - a_0)"}</M>. This gives
        </p>
        <MD>{"x = a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2 + \\cdots}} = [a_0; a_1, a_2, \\dots]."}</MD>
        <p>
          The expansion stops exactly when <M>{"x"}</M> is rational, and for a fraction it is Euclid&rsquo;s algorithm in
          disguise. Cutting it off after <M>{"a_k"}</M> gives the <strong>convergent</strong> <M>{"p_k / q_k"}</M>.
        </p>
      </Definition>

      <Theorem title="convergents">
        <p>
          With <M>{"p_{-1} = 1, q_{-1} = 0, p_0 = a_0, q_0 = 1"}</M>, the convergents satisfy
        </p>
        <MD>{"p_k = a_k p_{k-1} + p_{k-2}, \\qquad q_k = a_k q_{k-1} + q_{k-2}, \\qquad p_k q_{k-1} - p_{k-1} q_k = (-1)^{k-1}."}</MD>
        <p>
          They alternate around <M>{"x"}</M>, and <M>{"\\left| x - \\tfrac{p_k}{q_k} \\right| < \\tfrac{1}{q_k q_{k+1}} \\le \\tfrac{1}{q_k^2}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The recurrence follows by induction, since replacing <M>{"a_k"}</M> by <M>{"a_k + 1/a_{k+1}"}</M> turns the{" "}
          <M>{"k"}</M>th convergent into the next one. The determinant identity follows from the recurrence:{" "}
          <M>{"p_k q_{k-1} - p_{k-1} q_k = -(p_{k-1} q_{k-2} - p_{k-2} q_{k-1})"}</M>. So consecutive convergents differ by{" "}
          <M>{"1/(q_k q_{k+1})"}</M>, and since <M>{"x"}</M> lies between them, it is closer than that to each.
        </p>
      </Proof>

      <Example title="π and √2">
        <p>
          <M>{"\\pi = [3; 7, 15, 1, 292, \\dots]"}</M>, with convergents 3, 22/7, 333/106 and 355/113. The large term 292
          makes 355/113 unusually good: its error is about <M>{"2.7 \\times 10^{-7}"}</M>. Meanwhile{" "}
          <M>{"\\sqrt2 = [1; 2, 2, 2, \\dots]"}</M> gives 3/2, 7/5, 17/12, 41/29, and the convergents 3/2 and 17/12 are the
          Pell solutions from the previous lessons.
        </p>
      </Example>

      <Remark title="periodic expansions">
        <p>
          Lagrange proved that the continued fraction of <M>{"x"}</M> is eventually periodic exactly when <M>{"x"}</M> is a
          quadratic irrational, a root of a quadratic with integer coefficients. For <M>{"\\sqrt D"}</M>, one period of
          the expansion yields the fundamental solution of Pell&rsquo;s equation, which proves that it always exists. Each
          convergent is also a best approximation: no fraction with a smaller denominator comes closer.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What is the first term a₀ of the continued fraction of 415/93?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "rational",
      rung: "check",
      prompt: <p>When does the continued fraction of x stop?</p>,
      answer: {
        kind: "choice",
        options: ["Exactly when x is rational", "Exactly when x is a quadratic irrational", "Never", "When x is less than 1"],
        correct: [0],
      },
    },
    {
      key: "expand",
      rung: "apply",
      prompt: <p>415/93 = [4; 2, 6, a₃]. Find a₃ by running Euclid&rsquo;s algorithm.</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "next",
      rung: "apply",
      prompt: <p>The convergents of √2 are 1, 3/2, 7/5, 17/12, … What is the denominator of the next one?</p>,
      answer: { kind: "numeric", value: 29, tolerance: 0 },
    },
    {
      key: "value",
      rung: "apply",
      prompt: <p>What number has continued fraction [1; 1, 1, 1, …]?</p>,
      answer: { kind: "choice", options: ["The golden ratio (1 + √5)/2", "√2", "e", "2"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Using <M>{"p_k q_{k-1} - p_{k-1} q_k = \\pm 1"}</M>, prove that every convergent <M>{"p_k/q_k"}</M> is in lowest
          terms.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lets d be a common divisor of p_k and q_k.",
          "Notes that d divides the left side, hence divides ±1.",
          "Concludes d = 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the golden ratio sometimes called the hardest number to approximate by fractions?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that all its terms are 1, the smallest possible.",
          "Links small terms to convergents that are not much better than 1/q².",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to compute a continued fraction, how convergents are built by the recurrence, why they approximate within 1/q², and why 355/113 is so good for π.",

  glimpse: (
    <p>
      This completes the course on elementary number theory. Real analysis next makes limits precise in metric spaces, and
      algebraic number theory takes up the rings in which Pell&rsquo;s equation and sums of squares live.
    </p>
  ),
};
