import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WindingImageViz } from "@/components/viz/WindingImageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.3.2",
  minutes: 85,
  links: {
    revisits: ["m13.3.1", "m8.2.1", "m0.2.5"],
    foreshadows: ["m13.5.1", "m13.5.2", "m14.1.3"],
  },

  puzzle: (
    <>
      <p>
        We invented i to solve <M>{"x^2 + 1 = 0"}</M>. Will we need yet more numbers to solve <M>{"x^5 - x + 1 = 0"}</M>,
        or equations with complex coefficients? Gauss, d&rsquo;Alembert and others struggled to prove that the answer is no.
        Complex analysis makes it nearly effortless.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Grow the circle and count how often its image winds round 0. Compare with the roots inside.</p>
      <WindingImageViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the fundamental theorem of algebra">
        <p>Every non-constant polynomial with complex coefficients has a complex root.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"p(z) = a_n z^n + \\dots + a_0"}</M> with <M>{"n \\ge 1"}</M>, <M>{"a_n \\ne 0"}</M>, and suppose{" "}
          <M>{"p"}</M> has no root. Then <M>{"1/p"}</M> is entire. Since{" "}
          <M>{"|p(z)| \\ge |z|^n \\big(|a_n| - |a_{n-1}|/|z| - \\dots - |a_0|/|z|^n\\big)"}</M>, we have{" "}
          <M>{"|p(z)| \\to \\infty"}</M>, so <M>{"|1/p| \\le 1"}</M> outside some disc. On that closed disc{" "}
          <M>{"1/p"}</M> is continuous and so bounded. Thus <M>{"1/p"}</M> is a bounded entire function, constant by
          Liouville, and so is <M>{"p"}</M>: a contradiction.
        </p>
      </Proof>

      <Theorem title="factorisation">
        <p>
          A polynomial of degree <M>{"n"}</M> factors as <M>{"a_n (z - z_1)\\cdots(z - z_n)"}</M>, so it has exactly{" "}
          <M>{"n"}</M> roots counted with multiplicity. Divide by <M>{"z - z_1"}</M> and repeat.
        </p>
      </Theorem>

      <Example title="the winding argument">
        <p>
          The visualisation shows a second, topological proof. On a tiny circle the image stays near <M>{"p(0) \\ne 0"}</M>,
          winding 0 times round 0. On a huge circle <M>{"p(z) \\approx a_n z^n"}</M>, winding <M>{"n"}</M> times. The winding
          number changes continuously in <M>{"R"}</M> while the image avoids 0, and an integer-valued continuous function is
          constant. So some circle&rsquo;s image passes through 0. The argument principle will make the count exact: the
          winding number equals the number of roots inside.
        </p>
      </Example>

      <Remark title="algebra needs analysis">
        <p>
          Every proof uses some analysis, at least the completeness of the reals, through the intermediate value theorem or
          compactness. In the language of algebra, the theorem says <M>{"\\mathbb{C}"}</M> is algebraically closed, which
          shapes field theory and Galois theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many complex roots, counted with multiplicity, does <M>{"z^7 - 3z + 1"}</M> have?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "lower",
      rung: "check",
      prompt: <p>Use the triangle inequality to give a lower bound for <M>{"|z^3 - 2z + 2|"}</M> when <M>{"|z| = 3"}</M>.</p>,
      answer: { kind: "numeric", value: 19, tolerance: 0.001 },
    },
    {
      key: "wind",
      rung: "apply",
      prompt: <p>How many times does the image of <M>{"|z| = 2"}</M> under <M>{"z^3 - 1"}</M> wind round 0?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "fourth",
      rung: "apply",
      prompt: <p>All four roots of <M>{"z^4 + 0.5"}</M> have the same modulus. Find it to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 0.841, tolerance: 0.002 },
    },
    {
      key: "bounded",
      rung: "apply",
      prompt: <p>In the proof, why is <M>{"1/p"}</M> bounded on all of <M>{"\\mathbb{C}"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because every polynomial is bounded.",
          "Because |p(z)| → ∞, so 1/p is small outside a large disc, and it is continuous, hence bounded, on that compact disc.",
          "Because p has a root.",
          "Because 1/p is a polynomial.",
        ],
        correct: [1],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove the fundamental theorem of algebra using Liouville&rsquo;s theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes p has no root, so 1/p is entire.",
          "Shows |p(z)| → ∞ and deduces 1/p is bounded, using compactness of a disc.",
          "Applies Liouville to conclude p is constant, a contradiction.",
        ],
      },
    },
    {
      key: "real",
      rung: "stretch",
      prompt: <p>Show that every polynomial with real coefficients factors into real linear and real quadratic factors.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that non-real roots of a real polynomial come in conjugate pairs, since p(z̄) is the conjugate of p(z).",
          "Pairs (z − w)(z − w̄) = z² − 2 Re(w) z + |w|² into a real quadratic.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the fundamental theorem of algebra, its proof from Liouville's theorem, and the winding picture of why a polynomial of degree n has n roots.",

  glimpse: (
    <p>
      The argument principle and Rouché&rsquo;s theorem turn the winding picture into a precise way of counting zeros.
      Field theory builds splitting fields, which over the complex numbers always exist inside ℂ itself.
    </p>
  ),
};
