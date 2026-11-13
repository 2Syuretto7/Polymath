import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MgfViz } from "@/components/viz/MgfViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.4.1",
  minutes: 90,
  links: {
    revisits: ["m9.2.4", "m9.3.2", "m2.9.5"],
    foreshadows: ["m9.4.2", "m9.7.2", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        The mean, the variance, the skewness: each is built from a moment <M>{"E(X^k)"}</M>, and each needs its own sum or
        integral. Is there a single function that holds all of them at once, so that every moment drops out by
        differentiating? And could the same function make adding independent variables as easy as multiplying?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a distribution and compare its MGF with the tangent and the quadratic built from the first two moments.</p>
      <MgfViz />
    </>
  ),

  theory: (
    <>
      <Definition title="moment generating function">
        <p>The <strong>moment generating function</strong> of <M>{"X"}</M> is</p>
        <MD>{"M_X(t) = E\\big(e^{tX}\\big),"}</MD>
        <p>defined for those <M>{"t"}</M> where the expectation is finite. We say the MGF exists if it is finite on an open interval around 0.</p>
      </Definition>

      <Theorem title="moments from derivatives">
        <p>If the MGF exists, then <M>{"E(X^n) = M_X^{(n)}(0)"}</M> for every <M>{"n"}</M>, and</p>
        <MD>{"M_X(t) = \\sum_{n=0}^{\\infty} E(X^n)\\, \\frac{t^n}{n!}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Expand <M>{"e^{tX} = \\sum_n (tX)^n/n!"}</M> and take expectations term by term, which is allowed when the MGF exists
          near 0. Matching with the Taylor series of <M>{"M_X"}</M> at 0 gives the derivatives.
        </p>
      </Proof>

      <Theorem title="sums of independent variables">
        <p>If <M>{"X"}</M> and <M>{"Y"}</M> are independent, <M>{"M_{X+Y}(t) = M_X(t)M_Y(t)"}</M>, since <M>{"E(e^{tX}e^{tY}) = E(e^{tX})E(e^{tY})"}</M>.</p>
      </Theorem>

      <Theorem title="uniqueness">
        <p>If two random variables have MGFs that exist and agree on an open interval around 0, they have the same distribution.</p>
      </Theorem>

      <Example title="Poisson sums">
        <p>
          For <M>{"X \\sim \\operatorname{Pois}(\\lambda)"}</M>,{" "}
          <M>{"M_X(t) = \\sum_k e^{tk} e^{-\\lambda}\\lambda^k/k! = e^{\\lambda(e^t - 1)}"}</M>. If <M>{"Y \\sim \\operatorname{Pois}(\\mu)"}</M>{" "}
          is independent, the product is <M>{"e^{(\\lambda + \\mu)(e^t - 1)}"}</M>, so by uniqueness{" "}
          <M>{"X + Y \\sim \\operatorname{Pois}(\\lambda + \\mu)"}</M>. Similarly, a sum of independent normals is normal.
        </p>
      </Example>

      <Example title="the standard normal">
        <p>
          Completing the square gives <M>{"M_Z(t) = e^{t^2/2}"}</M>. Expanding, the odd moments vanish and{" "}
          <M>{"E(Z^{2k}) = (2k)!/(2^k k!)"}</M>, so <M>{"E(Z^2) = 1"}</M> and <M>{"E(Z^4) = 3"}</M>.
        </p>
      </Example>

      <Remark title="when there is no MGF">
        <p>
          Heavy-tailed distributions, such as the Cauchy or a Pareto, have <M>{"E(e^{tX}) = \\infty"}</M> for every{" "}
          <M>{"t > 0"}</M>. The characteristic function <M>{"E(e^{itX})"}</M> always exists and does the same work; it is
          what the proof of the central limit theorem uses in general.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "zero",
      rung: "check",
      prompt: <p>For any random variable X, what is M_X(0)?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "bern",
      rung: "check",
      prompt: <p>Which is the MGF of a Bernoulli(p) variable?</p>,
      answer: { kind: "choice", options: ["pe^t", "1 − p + pe^t", "e^(pt)", "(1 − p)e^t"], correct: [1] },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>A random variable has MGF M(t) = e^(3t + 2t²). What is its mean?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "var",
      rung: "apply",
      prompt: <p>For the same MGF M(t) = e^(3t + 2t²), what is the variance?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>X ~ Pois(2) and Y ~ Pois(3) are independent. What is P(X + Y = 0), to four decimal places?</p>,
      answer: { kind: "numeric", value: Math.exp(-5), tolerance: 0.0001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the binomial Bin(n, p) has MGF (1 − p + pe^t)ⁿ, and use it to find the mean.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the binomial as a sum of n independent Bernoulli(p) variables, each with MGF 1 − p + pe^t.",
          "Multiplies the MGFs using independence.",
          "Differentiates at 0 to get np.",
        ],
      },
    },
    {
      key: "unif",
      rung: "stretch",
      prompt: <p>Find the MGF of the uniform distribution on [0, 1]. What happens at t = 0, and how should M(0) be understood?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the integral of e^(tx) from 0 to 1 as (e^t − 1)/t for t ≠ 0.",
          "Notes the formula is undefined at 0 but has limit 1, matching M(0) = E(1) = 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the moment generating function, how its derivatives at 0 give the moments, why independent sums correspond to products, the uniqueness theorem, and how these show that a sum of independent Poissons is Poisson.",

  glimpse: (
    <p>
      The next lesson bounds tail probabilities using only a few moments. MGFs reappear in the proof of the central limit
      theorem and, as exponential generating functions, in combinatorics.
    </p>
  ),
};
