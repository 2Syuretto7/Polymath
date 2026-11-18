import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { LayerCakeViz } from "@/components/viz/LayerCakeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.2.2",
  minutes: 90,
  links: {
    revisits: ["m22.2.1", "m6.7.1", "m22.1.2"],
    foreshadows: ["m22.2.3", "m22.2.4", "m22.2.5"],
  },

  puzzle: (
    <>
      <p>
        Lebesgue explained his idea with a shopkeeper counting the day&rsquo;s takings. One way is to add the coins in the
        order they came in. Another is to sort them first: so many ten-rupee coins, so many fives, so many ones, and multiply.
        The total is the same. Why might the second way be far more powerful for integrals?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Approximate the area under a curve by slicing the domain, then by slicing the range.</p>
      <LayerCakeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="integrals of simple functions">
        <p>
          For a non-negative simple function <M>{"\\varphi = \\sum_i a_i \\mathbf{1}_{A_i}"}</M> with distinct values{" "}
          <M>{"a_i"}</M> and disjoint <M>{"A_i"}</M>,
        </p>
        <MD>{"\\int \\varphi \\, d\\mu = \\sum_i a_i \\, \\mu(A_i),"}</MD>
        <p>with the convention <M>{"0 \\cdot \\infty = 0"}</M>.</p>
      </Definition>

      <Definition title="the Lebesgue integral">
        <p>For measurable <M>{"f \\ge 0"}</M>,</p>
        <MD>{"\\int f \\, d\\mu = \\sup\\Big\\{ \\int \\varphi \\, d\\mu : 0 \\le \\varphi \\le f,\\ \\varphi \\text{ simple} \\Big\\} \\in [0, \\infty]."}</MD>
        <p>
          A general measurable <M>f</M> is <strong>integrable</strong> if <M>{"\\int |f| < \\infty"}</M>, and then{" "}
          <M>{"\\int f = \\int f^+ - \\int f^-"}</M>, where <M>{"f^+ = \\max(f, 0)"}</M> and <M>{"f^- = \\max(-f, 0)"}</M>.
        </p>
      </Definition>

      <Example title="first computations">
        <p>
          The indicator of the rationals on <M>{"[0, 1]"}</M> is a simple function, <M>{"1 \\cdot \\mathbf{1}_{\\mathbb{Q}}"}</M>,
          with integral <M>{"\\lambda(\\mathbb{Q} \\cap [0, 1]) = 0"}</M>. With counting measure on <M>{"\\mathbb{N}"}</M>, the
          integral is the sum of a series of non-negative terms. And the layer-cake formula
        </p>
        <MD>{"\\int f \\, d\\mu = \\int_0^\\infty \\mu(\\{f > t\\}) \\, dt"}</MD>
        <p>is the visualisation&rsquo;s slicing of the range, made exact.</p>
      </Example>

      <Theorem title="basic properties">
        <p>
          The integral is linear on integrable functions and monotone: <M>{"f \\le g"}</M> gives{" "}
          <M>{"\\int f \\le \\int g"}</M>. If <M>{"f = g"}</M> almost everywhere, the integrals agree. Markov&rsquo;s inequality,{" "}
          <M>{"\\mu(\\{f \\ge a\\}) \\le \\frac{1}{a} \\int f"}</M> for <M>{"f \\ge 0"}</M> and <M>{"a > 0"}</M>, follows by
          comparing <M>f</M> with the simple function <M>{"a \\mathbf{1}_{\\{f \\ge a\\}}"}</M>.
        </p>
      </Theorem>

      <Remark title="why the range">
        <p>
          Slicing the domain needs <M>f</M> to vary little on each small piece, which wild functions do not. Slicing the range
          only needs to measure the sets <M>{"\\{f > t\\}"}</M>, which is exactly measurability. That is why the Lebesgue
          integral passes to limits so easily, as the convergence theorems will show.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "simple",
      rung: "check",
      prompt: <p>How is the integral of a non-negative simple function defined?</p>,
      answer: { kind: "choice", options: ["The sum of each value times the measure of the set where it is taken", "As a limit of Riemann sums", "As the maximum value times the measure of the domain", "As the number of values"], correct: [0] },
    },
    {
      key: "sup",
      rung: "check",
      prompt: <p>How is the integral of a non-negative measurable f defined?</p>,
      answer: { kind: "choice", options: ["The supremum of integrals of simple functions below f", "The infimum of integrals of simple functions below f", "The limit of upper Darboux sums", "The value of f at its maximum"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s Lebesgue mode, what is each layer&rsquo;s contribution?</p>,
      answer: { kind: "choice", options: ["The height step times the measure of the set where f is at least t", "The width times the least value", "The width times the greatest value", "The number of intervals"], correct: [0] },
    },
    {
      key: "calc",
      rung: "apply",
      prompt: <p>Compute the integral over ℝ of 2 on [0, 1/2), 5 on [1/2, 3/4), and 0 elsewhere.</p>,
      answer: { kind: "numeric", value: 2.25 },
    },
    {
      key: "markov",
      rung: "apply",
      prompt: <p>A non-negative f has integral 3. By Markov&rsquo;s inequality, at most what measure can the set where f ≥ 6 have?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if f ≥ 0 is measurable and its integral is 0, then f = 0 almost everywhere.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies Markov’s inequality, or compares f with (1/n) times the indicator of the set where f ≥ 1/n, to get measure 0 for each such set.",
          "Writes the set where f > 0 as the countable union over n of the sets where f ≥ 1/n.",
          "Concludes by countable subadditivity that it has measure 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain the layer-cake formula for a simple function with two values, using a picture or a short calculation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes, for example, f = a on A and b on B, with 0 < a < b and A, B disjoint.",
          "Computes the measure of the set where f > t as μ(A) + μ(B) for t < a and μ(B) for a ≤ t < b, and integrates in t to get aμ(A) + bμ(B).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The payoff of the new integral is control over limits. If measurable functions increase to a limit, their integrals
        increase to its integral, with no extra conditions. If they converge and stay below one integrable function, the
        integrals converge too.
      </p>
      <p>
        Next, the monotone and dominated convergence theorems: their proofs, the classic counterexamples showing why the
        hypotheses matter, and how they settle questions the Riemann integral could not.
      </p>
    </>
  ),
};
