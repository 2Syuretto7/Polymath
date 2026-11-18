import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { NeymanPearsonViz } from "@/components/viz/NeymanPearsonViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.4.2",
  minutes: 90,
  links: {
    revisits: ["m18.4.1", "m18.2.2", "m18.3.1"],
    foreshadows: ["m18.4.3", "m18.5.1", "m18.6.1"],
  },

  puzzle: (
    <>
      <p>
        A test of size 5% may reject on large values, on small values, on values far from zero in either direction, or on
        values that happen to fall in some odd collection of intervals. All of these are wrong only 5% of the time when the
        null is true. Which one should you use to catch a particular alternative, and is there a best?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare three rejection regions of the same size. Which catches the alternative μ = 1 most often?</p>
      <NeymanPearsonViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple hypotheses and most powerful tests">
        <p>
          A hypothesis is <strong>simple</strong> if it fixes the distribution completely, as <M>{"H_0: \\theta = \\theta_0"}</M>{" "}
          does. A test of size α is <strong>most powerful</strong> against a simple alternative <M>{"\\theta_1"}</M> if no other
          test of size at most α has greater power at <M>{"\\theta_1"}</M>.
        </p>
      </Definition>

      <Theorem title="the Neyman-Pearson lemma (1933)">
        <p>Let <M>{"\\Lambda(x) = f(x;\\theta_1)/f(x;\\theta_0)"}</M> be the likelihood ratio. The test that rejects when</p>
        <MD>{"\\Lambda(x) > k,"}</MD>
        <p>
          with k chosen to give size exactly α, is most powerful of size α. Proof. If φ is this test and ψ any other of size at
          most α, then <M>{"(\\varphi - \\psi)(f_1 - k f_0) \\ge 0"}</M> everywhere, since φ = 1 exactly where{" "}
          <M>{"f_1 > k f_0"}</M>. Integrating gives{" "}
          <M>{"\\text{power}(\\varphi) - \\text{power}(\\psi) \\ge k\\,(\\text{size}(\\varphi) - \\text{size}(\\psi)) \\ge 0"}</M>.
        </p>
      </Theorem>

      <Example title="a normal mean">
        <p>
          For n observations from N(μ, 1), with <M>{"H_0: \\mu = 0"}</M> and <M>{"H_1: \\mu = 1"}</M>, the log likelihood
          ratio is <M>{"n\\bar x - n/2"}</M>, which is increasing in <M>{"\\bar x"}</M>. So the most powerful test rejects when{" "}
          <M>{"\\bar x"}</M> is large, the upper-tail test of the previous lesson. With n = 4 and α = 0.05 its power is 0.639,
          against 0.516 for the two-tailed test.
        </p>
      </Example>

      <Remark title="uniformly most powerful tests">
        <p>
          The region did not depend on which μ greater than 0 was the alternative, so the upper-tail test is most powerful
          against every such μ at once: it is <strong>uniformly most powerful</strong> for <M>{"\\mu > 0"}</M>. Against the
          two-sided alternative <M>{"\\mu \\ne 0"}</M> no uniformly most powerful test exists, because the best region for
          μ &gt; 0 is worst for μ &lt; 0. The test depends on the data only through the likelihood ratio, and so through a
          sufficient statistic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lemma",
      rung: "check",
      prompt: <p>What form does the most powerful test of one simple hypothesis against another take?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reject when the likelihood ratio f₁/f₀ exceeds a constant.",
          "Reject when the data are far from their mean.",
          "Reject when the maximum likelihood estimate is positive.",
          "Reject at random with probability α.",
        ],
        correct: [0],
      },
    },
    {
      key: "ump",
      rung: "check",
      prompt: <p>Why is there no uniformly most powerful test for a normal mean against μ ≠ 0?</p>,
      answer: {
        kind: "choice",
        options: [
          "The best region against μ > 0 is the upper tail, which is the worst against μ < 0.",
          "The likelihood ratio does not exist.",
          "The sample mean is not sufficient.",
          "Two-sided tests always have size larger than α.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with n = 9 and α = 0.05, what is the power of the upper-tail test? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.91, tolerance: 0.01 },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: <p>With n = 4 and α = 0.05, by how much does the upper-tail test&rsquo;s power exceed the two-tailed test&rsquo;s? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.12, tolerance: 0.01 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>For a single observation from an exponential distribution with rate λ, test λ = 1 against λ = 2. The likelihood ratio is 2e⁻ˣ. When does the most powerful test reject?</p>,
      answer: { kind: "choice", options: ["When x is small", "When x is large", "When x is near 1", "Never"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Let φ reject when f₁(x) &gt; k f₀(x), and let ψ be any test with size no larger than that of φ. Show that φ has at least the power of ψ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that (φ − ψ)(f₁ − k f₀) ≥ 0 at every x, checking the cases f₁ > k f₀ (where φ = 1) and f₁ ≤ k f₀ (where φ = 0).",
          "Integrates to get ∫(φ − ψ) f₁ ≥ k ∫(φ − ψ) f₀, that is, power difference ≥ k times size difference.",
          "Uses k ≥ 0 and size(φ) ≥ size(ψ) to conclude that the power of φ is at least that of ψ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For a discrete distribution, the size of a likelihood-ratio test may jump past α as k changes. How can a test of size exactly α still be made?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that P(Λ > k) can jump at values where Λ = k has positive probability.",
          "Describes a randomised test: reject when Λ > k, and with a suitable probability γ when Λ = k, so the size is exactly α.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, likelihood ratio tests in general: comparing the best fit under the null with the best fit overall, and
      Wilks&rsquo;s theorem, which gives their approximate distribution.
    </p>
  ),
};
