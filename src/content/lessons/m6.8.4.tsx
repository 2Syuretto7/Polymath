import { M, MD } from "@/components/Math";
import { Definition, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BernsteinViz } from "@/components/viz/BernsteinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.8.4",
  minutes: 90,
  links: {
    revisits: ["m6.8.2", "m6.5.3", "m9.2.2"],
    foreshadows: ["m12.3.2", "m19.3.3", "m6.8.5"],
  },

  puzzle: (
    <>
      <p>
        Continuous functions can be wild: nowhere differentiable, like Takagi&rsquo;s function, or with corners everywhere.
        Polynomials are the tamest functions there are. In 1885, at the age of seventy, Weierstrass proved that every
        continuous function on a closed interval can be approximated, as closely as you like and everywhere at once, by a
        polynomial. Taylor series cannot do this. What can?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The Bernstein polynomial uses only the values of <M>{"f"}</M> at the points <M>{"k/n"}</M>. Raise the degree and watch
        the largest gap shrink, even at the corner.
      </p>
      <BernsteinViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Weierstrass approximation theorem">
        <p>
          If <M>{"f"}</M> is continuous on <M>{"[a, b]"}</M>, then for every <M>{"\\varepsilon > 0"}</M> there is a polynomial{" "}
          <M>{"p"}</M> with <M>{"|f(x) - p(x)| < \\varepsilon"}</M> for all <M>{"x \\in [a, b]"}</M>.
        </p>
      </Theorem>

      <Definition title="Bernstein polynomials">
        <p>
          On <M>{"[0, 1]"}</M>, to which any <M>{"[a, b]"}</M> can be rescaled, Sergei Bernstein in 1912 took
        </p>
        <MD>{"B_n f(x) = \\sum_{k=0}^{n} f\\!\\left(\\frac kn\\right) \\binom nk x^k (1 - x)^{n-k}."}</MD>
        <p>
          The weights are the binomial probabilities of <M>{"k"}</M> successes in <M>{"n"}</M> trials with success
          probability <M>{"x"}</M>; they are non-negative and sum to 1.
        </p>
      </Definition>

      <Proof>
        <p>
          Given <M>{"\\varepsilon"}</M>, uniform continuity gives <M>{"\\delta"}</M> with{" "}
          <M>{"|f(x) - f(y)| < \\varepsilon/2"}</M> when <M>{"|x - y| < \\delta"}</M>; let <M>{"|f| \\le B"}</M>. Since the
          weights sum to 1,
        </p>
        <MD>{"|B_n f(x) - f(x)| \\le \\sum_k \\left|f\\!\\left(\\tfrac kn\\right) - f(x)\\right| \\binom nk x^k(1 - x)^{n-k}."}</MD>
        <p>
          Terms with <M>{"|k/n - x| < \\delta"}</M> contribute less than <M>{"\\varepsilon/2"}</M>. The rest carry total
          weight at most <M>{"x(1 - x)/(n\\delta^2) \\le 1/(4n\\delta^2)"}</M>, by Chebyshev&rsquo;s inequality, since{" "}
          <M>{"k/n"}</M> has mean <M>{"x"}</M> and variance <M>{"x(1 - x)/n"}</M>. So they contribute at most{" "}
          <M>{"2B/(4n\\delta^2)"}</M>, which is below <M>{"\\varepsilon/2"}</M> for large <M>{"n"}</M>, whatever{" "}
          <M>{"x"}</M> is.
        </p>
      </Proof>

      <Remark title="what it means">
        <p>
          In the language of metric spaces, polynomials are dense in the continuous functions with the sup distance. The
          approximation is global, not local like Taylor&rsquo;s: <M>{"|x - \\tfrac12|"}</M> has no Taylor series at{" "}
          <M>{"\\tfrac12"}</M>, yet is approximated perfectly well. Marshall Stone generalised the theorem in 1937 to any
          algebra of functions that separates points, which gives, for instance, approximation by trigonometric polynomials.
          Bernstein&rsquo;s convergence is slow; numerical analysts prefer Chebyshev&rsquo;s methods.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the Weierstrass approximation theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every continuous function equals its Taylor series.",
          "Every continuous function on a closed interval is a uniform limit of polynomials.",
          "Every function is a polynomial.",
          "Polynomials approximate differentiable functions only.",
        ],
        correct: [1],
      },
    },
    {
      key: "end",
      rung: "check",
      prompt: (
        <p>
          For <M>{"f(x) = |x - \\tfrac12|"}</M>, what is <M>{"B_n f(0)"}</M> for any <M>{"n"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.0001 },
    },
    {
      key: "square",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"f(x) = x^2"}</M>, <M>{"B_n f(x) = x^2 + x(1 - x)/n"}</M>. What is <M>{"B_{10} f(0.5)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.275, tolerance: 0.0001 },
    },
    {
      key: "var",
      rung: "apply",
      prompt: (
        <p>
          The variance of <M>{"k/n"}</M> is <M>{"x(1 - x)/n"}</M>. What is its largest value over <M>{"x"}</M> when{" "}
          <M>{"n = 25"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.01, tolerance: 0.0001 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these functions on [0, 1] are uniform limits of polynomials? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["|x − ½|", "√x", "A function with a jump at ½", "Dirichlet's function"],
        correct: [0, 1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that a function on <M>{"[0, 1]"}</M> with a jump at <M>{"\\tfrac12"}</M> is not a uniform limit of polynomials.
          A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes polynomials are continuous.",
          "Uses the last lesson: a uniform limit of continuous functions is continuous, but the function has a jump.",
        ],
      },
    },
    {
      key: "taylor",
      rung: "stretch",
      prompt: <p>Why can Taylor polynomials not prove the Weierstrass theorem? Give two reasons or examples.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Taylor polynomials need derivatives, which a continuous function may lack, such as |x − ½| or Takagi's function.",
          "Notes even smooth functions may not equal their Taylor series, such as e^(−1/x²), or the series may have small radius, as for 1/(1 + x²) on [−2, 2]. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the Weierstrass approximation theorem says, how Bernstein polynomials are built from binomial probabilities, why they converge uniformly, and how this differs from Taylor approximation.",

  glimpse: (
    <p>
      The next lesson asks when a family of continuous functions must contain a uniformly convergent sequence. In metric
      spaces, the Stone-Weierstrass theorem generalises this lesson, and Numerical Analysis finds the best polynomial
      approximations.
    </p>
  ),
};
