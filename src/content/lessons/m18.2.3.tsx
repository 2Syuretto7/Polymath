import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ShrinkPosteriorViz } from "@/components/viz/ShrinkPosteriorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m18.2.3",
  minutes: 90,
  links: {
    revisits: ["m18.2.2", "m9.1.4", "m9.3.1"],
    foreshadows: ["m18.2.4", "m18.5.1", "m18.3.1"],
  },

  puzzle: (
    <>
      <p>
        A new drug cures 3 of the first 3 patients. Maximum likelihood says the cure rate is 100 percent. A doctor who has
        seen hundreds of similar drugs, most of which cure between a third and a half of patients, would not believe that.
        How can such experience be put into the estimate in a principled way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a prior and some data, and see where the posterior lies between them.</p>
      <ShrinkPosteriorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="prior and posterior">
        <p>
          In the Bayesian approach the parameter θ is given a <strong>prior</strong> density π(θ) describing belief before
          the data. Bayes&rsquo; rule then gives the <strong>posterior</strong> density
        </p>
        <MD>{"\\pi(\\theta \\mid x) = \\frac{f(x \\mid \\theta)\\,\\pi(\\theta)}{\\int f(x \\mid t)\\,\\pi(t)\\,dt} \;\\propto\; L(\\theta)\\,\\pi(\\theta)."}</MD>
        <p>
          A <strong>Bayes estimator</strong> summarises the posterior: its mean minimises expected squared error, its median
          expected absolute error, and its mode is the maximum a posteriori estimate.
        </p>
      </Definition>

      <Theorem title="the beta prior for a proportion">
        <p>
          The beta density with parameters a and b is proportional to <M>{"p^{a-1}(1-p)^{b-1}"}</M> on [0, 1] and has mean
          a/(a + b). If the prior is beta(a, b) and we see k successes in n trials, the posterior is proportional to{" "}
          <M>{"p^{k}(1-p)^{n-k}\\,p^{a-1}(1-p)^{b-1}"}</M>, so it is beta(a + k, b + n − k). Its mean is
        </p>
        <MD>{"\\frac{a+k}{a+b+n} = \\frac{a+b}{a+b+n}\\cdot\\frac{a}{a+b} + \\frac{n}{a+b+n}\\cdot\\frac{k}{n},"}</MD>
        <p>a weighted average of the prior mean and the sample proportion. A prior that stays in the same family after updating is called <strong>conjugate</strong>.</p>
      </Theorem>

      <Example title="the drug">
        <p>
          A prior beta(4, 6) has mean 0.4 and is worth about 10 earlier patients. After 3 cures in 3, the posterior is
          beta(7, 6), with mean 7/13 ≈ 0.54: higher than before, but far from 1. After 300 cures in 300 the prior would
          barely matter.
        </p>
      </Example>

      <Remark title="the debate">
        <p>
          Critics object that priors are subjective. Defenders reply that the choice is explicit and open to criticism, that
          its effect fades as data accumulate, and that Bayes estimators often have smaller error than unbiased ones. The
          uniform prior beta(1, 1) gives the posterior mean (k + 1)/(n + 2), Laplace&rsquo;s rule of succession.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "post",
      rung: "check",
      prompt: <p>The posterior density is proportional to what?</p>,
      answer: { kind: "choice", options: ["The likelihood times the prior", "The likelihood alone", "The prior alone", "The likelihood divided by the prior"], correct: [0] },
    },
    {
      key: "conj",
      rung: "check",
      prompt: <p>With a beta(a, b) prior and k successes in n trials, what is the posterior?</p>,
      answer: { kind: "choice", options: ["beta(a + k, b + n − k)", "beta(a + n, b + k)", "beta(k, n − k)", "beta(a, b)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with prior a = 2, b = 2 and 7 heads in 10 tosses, what is the posterior mean? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.643, tolerance: 0.002 },
    },
    {
      key: "laplace",
      rung: "apply",
      prompt: <p>With the uniform prior, the sun has risen on each of 9 observed days. What is the posterior mean chance that it rises tomorrow? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.91, tolerance: 0.01 },
    },
    {
      key: "weight",
      rung: "apply",
      prompt: <p>As n grows with the prior fixed, what happens to the posterior mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "It approaches the sample proportion k/n, since the weight on the prior shrinks.",
          "It approaches the prior mean.",
          "It stays exactly halfway between them.",
          "It approaches 1/2.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the posterior mean (a + k)/(a + b + n) is a weighted average of the prior mean and k/n, and find the weights.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes a + k as (a + b)·a/(a + b) + n·k/n.",
          "Divides by a + b + n to get weights (a + b)/(a + b + n) on the prior mean and n/(a + b + n) on k/n.",
          "Notes that the weights are positive and sum to 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it a weakness or a strength of Bayesian estimation that two people with different priors reach different estimates from the same data?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the worry that estimates should depend on the data, not on who analyses them.",
          "Notes a reply, for example that priors make assumptions explicit and that posteriors converge as data accumulate.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, how to compare estimators: bias, variance, and the mean squared error that combines them.
    </p>
  ),
};
