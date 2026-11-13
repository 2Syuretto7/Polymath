import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TailBoundViz } from "@/components/viz/TailBoundViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.4.2",
  minutes: 85,
  links: {
    revisits: ["m9.4.1", "m9.2.4", "m2.5.2"],
    foreshadows: ["m9.7.1", "m9.7.2", "m18.1.1"],
  },

  puzzle: (
    <>
      <p>
        The average monthly income in a town is 30,000 rupees. You know nothing else about how incomes are spread. Can you
        still say that at most some definite fraction of people earn 1.5 lakh or more? With so little information, what can be
        guaranteed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare true tail probabilities with the bounds that use only the mean, or the mean and variance.</p>
      <TailBoundViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Markov's inequality">
        <p>If <M>{"X \\ge 0"}</M> and <M>{"a > 0"}</M>, then</p>
        <MD>{"P(X \\ge a) \\le \\frac{E(X)}{a}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"I"}</M> indicate the event <M>{"X \\ge a"}</M>. Then <M>{"aI \\le X"}</M> always, since when{" "}
          <M>{"I = 1"}</M> we have <M>{"X \\ge a"}</M>, and otherwise the left side is 0 and <M>{"X \\ge 0"}</M>. Taking
          expectations, <M>{"aP(X \\ge a) \\le E(X)"}</M>.
        </p>
      </Proof>

      <Theorem title="Chebyshev's inequality">
        <p>If <M>{"X"}</M> has mean <M>{"\\mu"}</M> and standard deviation <M>{"\\sigma > 0"}</M>, then for <M>{"k > 0"}</M></p>
        <MD>{"P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}."}</MD>
      </Theorem>

      <Proof>
        <p>Apply Markov to the non-negative variable <M>{"(X - \\mu)^2"}</M> with threshold <M>{"k^2\\sigma^2"}</M>:</p>
        <MD>{"P(|X - \\mu| \\ge k\\sigma) = P\\big((X - \\mu)^2 \\ge k^2\\sigma^2\\big) \\le \\frac{\\sigma^2}{k^2\\sigma^2}."}</MD>
      </Proof>

      <Example title="the income puzzle">
        <p>
          Incomes are non-negative with mean 30,000, so at most <M>{"30{,}000/150{,}000 = 1/5"}</M> of people earn 1.5 lakh or
          more. If everyone else earned nothing, exactly a fifth could: the bound cannot be improved without more information.
        </p>
      </Example>

      <Theorem title="Jensen's inequality">
        <p>If <M>{"g"}</M> is convex, then <M>{"g(E(X)) \\le E(g(X))"}</M>; if <M>{"g"}</M> is concave, the inequality reverses.</p>
      </Theorem>

      <Proof>
        <p>
          A convex function lies above each of its tangent lines. Take the tangent at <M>{"\\mu = E(X)"}</M>:{" "}
          <M>{"g(x) \\ge g(\\mu) + c(x - \\mu)"}</M> for some <M>{"c"}</M>. Substitute <M>{"X"}</M> and take expectations; the
          last term has mean 0.
        </p>
      </Proof>

      <Remark title="consequences">
        <p>
          With <M>{"g(x) = x^2"}</M>, Jensen gives <M>{"(E X)^2 \\le E(X^2)"}</M>, which is <M>{"\\operatorname{Var}(X) \\ge 0"}</M>.
          With <M>{"g = \\log"}</M>, which is concave, the arithmetic mean of positive numbers is at least the geometric mean.
          Applied to a sample average, Chebyshev shows that averages concentrate near the mean: this is the weak law of large
          numbers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What does Markov&rsquo;s inequality require of X?</p>,
      answer: { kind: "choice", options: ["That X be normal", "That X be non-negative", "That X have finite variance", "That X be discrete"], correct: [1] },
    },
    {
      key: "k3",
      rung: "check",
      prompt: <p>By Chebyshev, at most what fraction of any distribution lies 3 or more standard deviations from its mean? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 1 / 9, tolerance: 0.0005 },
    },
    {
      key: "markov",
      rung: "apply",
      prompt: <p>Waiting times at a counter are non-negative with mean 4 minutes. What upper bound does Markov give for the probability of waiting 20 minutes or more?</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "cheb",
      rung: "apply",
      prompt: <p>Exam scores have mean 50 and standard deviation 5. What lower bound does Chebyshev give for the probability that a score is strictly between 40 and 60?</p>,
      answer: { kind: "numeric", value: 0.75, tolerance: 0.001 },
    },
    {
      key: "jensen",
      rung: "apply",
      prompt: <p>For a positive random variable X, how does E(1/X) compare with 1/E(X)?</p>,
      answer: {
        kind: "choice",
        options: ["E(1/X) ≥ 1/E(X), since 1/x is convex for x > 0", "E(1/X) ≤ 1/E(X)", "They are always equal", "No general comparison"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive Chebyshev&rsquo;s inequality from Markov&rsquo;s.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that |X − μ| ≥ kσ is the same event as (X − μ)² ≥ k²σ².",
          "Applies Markov to the non-negative variable (X − μ)².",
          "Uses E((X − μ)²) = σ² to get the bound 1/k².",
        ],
      },
    },
    {
      key: "coins",
      rung: "stretch",
      prompt: <p>How many tosses of a fair coin does Chebyshev say are enough to be at least 95% sure that the proportion of heads is within 0.05 of 1/2? Is that number likely to be more than is really needed?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that the proportion has mean 1/2 and variance 1/(4n).",
          "Solves 1/(4n · 0.05²) ≤ 0.05 to get n ≥ 2000.",
          "Comments that Chebyshev is crude and far fewer tosses suffice in fact. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Markov's inequality and its one-line proof, how Chebyshev follows from it, the income example and why the bound can be exact, and Jensen's inequality for convex functions with an example.",

  glimpse: (
    <p>
      The next chapter studies several random variables at once. Chebyshev&rsquo;s inequality returns to prove the law of large
      numbers, and statistics uses such bounds to say how large a sample must be.
    </p>
  ),
};
