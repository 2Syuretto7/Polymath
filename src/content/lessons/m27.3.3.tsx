import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PoissonLimitViz } from "@/components/viz/PoissonLimitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.3.3",
  minutes: 90,
  links: {
    revisits: ["m27.3.1", "m9.2.2", "m27.1.3"],
    foreshadows: ["m27.4.1", "m27.5.2", "m37.1.1"],
  },

  puzzle: (
    <>
      <p>
        A book has 500 pages. Each page independently has a misprint with probability 1/250. The central limit theorem says
        nothing useful here: the expected number of misprints is 2, and the count is a small whole number, not a bell
        curve. What law does the count follow, and why does it not depend on the number of pages?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Hold the expected count λ fixed and increase the number of trials n. Compare the binomial and Poisson bars.</p>
      <PoissonLimitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Poisson law">
        <p>
          N is Poisson with parameter λ &gt; 0 if <M>{"P(N = k) = e^{-\\lambda} \\lambda^k / k!"}</M> for k = 0, 1, 2, …. Its
          mean and variance are both λ, and its characteristic function is <M>{"\\exp(\\lambda(e^{it} - 1))"}</M>.
        </p>
      </Definition>

      <Theorem title="the law of rare events">
        <p>
          For each n let <M>{"X_{n,1}, \\dots, X_{n,n}"}</M> be independent Bernoulli variables with success probabilities{" "}
          <M>{"p_{n,k}"}</M>. If <M>{"\\sum_k p_{n,k} \\to \\lambda"}</M> and <M>{"\\max_k p_{n,k} \\to 0"}</M>, then{" "}
          <M>{"S_n = \\sum_k X_{n,k}"}</M> converges in distribution to Poisson(λ).
        </p>
        <p>
          <strong>Proof.</strong> The characteristic function of <M>{"S_n"}</M> is{" "}
          <M>{"\\prod_k (1 + p_{n,k}(e^{it} - 1))"}</M>. Since <M>{"\\log(1 + z) = z + O(|z|^2)"}</M> for small z, its
          logarithm is <M>{"\\sum_k p_{n,k}(e^{it} - 1) + O\\left(\\sum_k p_{n,k}^2\\right)"}</M>. The error is at most{" "}
          <M>{"\\max_k p_{n,k} \\cdot \\sum_k p_{n,k} \\to 0"}</M>, so the product tends to{" "}
          <M>{"\\exp(\\lambda(e^{it} - 1))"}</M>. Lévy&rsquo;s continuity theorem finishes the proof.
        </p>
      </Theorem>

      <Theorem title="Le Cam's inequality">
        <p>
          With <M>{"\\lambda = \\sum_k p_k"}</M>, the total variation distance between the law of <M>{"S = \\sum_k X_k"}</M>{" "}
          and Poisson(λ) is at most <M>{"\\sum_k p_k^2"}</M>. For binomial(n, λ/n) this is λ²/n, a rate as well as a limit.
        </p>
      </Theorem>

      <Example title="matching">
        <p>
          Shuffle n letters into n envelopes at random. The number of letters in their own envelope is a sum of dependent
          indicators, each with probability 1/n, yet it still tends to Poisson(1). So the chance that no letter is matched
          tends to <M>{"e^{-1} \\approx 0.368"}</M>. The law of rare events survives weak dependence.
        </p>
      </Example>

      <Remark title="two universal limits">
        <p>
          Many small effects of comparable size give the normal law; many rare all-or-nothing events give the Poisson law.
          Counting rare events in time, such as calls to an exchange or decays of atoms, gives the Poisson process, whose
          counts in disjoint intervals are independent Poisson variables.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>Which two conditions does the law of rare events need?</p>,
      answer: { kind: "choice", options: ["Σₖ pₙ,ₖ → λ and maxₖ pₙ,ₖ → 0", "All pₙ,ₖ equal 1/2", "Σₖ pₙ,ₖ → ∞", "The variables are identically distributed"], correct: [0] },
    },
    {
      key: "cf",
      rung: "check",
      prompt: <p>What is the characteristic function of Poisson(λ)?</p>,
      answer: { kind: "choice", options: ["exp(λ(eⁱᵗ − 1))", "exp(−λt²/2)", "(1 − λ + λeⁱᵗ)", "λ/(λ − it)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set λ = 3 and n = 200. What is Le Cam&rsquo;s bound λ²/n?</p>,
      answer: { kind: "numeric", value: 0.045, tolerance: 0.001 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>X is binomial(1000, 0.002). Using the Poisson approximation, estimate P(X = 0) to three decimal places.</p>,
      answer: { kind: "numeric", value: 0.135, tolerance: 0.003 },
    },
    {
      key: "match",
      rung: "apply",
      prompt: <p>For a large random permutation, roughly what is the probability that it has exactly one fixed point?</p>,
      answer: { kind: "numeric", value: 0.368, tolerance: 0.005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the characteristic function of binomial(n, λ/n) tends to that of Poisson(λ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the characteristic function as (1 + λ(eⁱᵗ − 1)/n)ⁿ.",
          "Uses (1 + z/n)ⁿ → eᶻ for a fixed complex z.",
          "Concludes the limit is exp(λ(eⁱᵗ − 1)), the Poisson characteristic function.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the condition maxₖ pₙ,ₖ → 0 needed? Give an example where it fails and the limit is not Poisson.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes one summand with a fixed success probability, such as 1/2, plus rare events with total rate λ.",
          "Notes the limit is a Bernoulli plus an independent Poisson, which is not Poisson (for instance its variance is less than its mean).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far we have conditioned only on events of positive probability. A random variable often depends on information
        that arrives bit by bit, and we need to condition on all of that information at once.
      </p>
      <p>Next, conditional expectation via measure.</p>
    </>
  ),
};
