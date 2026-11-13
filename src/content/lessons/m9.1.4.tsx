import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CoinBayesViz } from "@/components/viz/CoinBayesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.1.4",
  minutes: 85,
  links: {
    revisits: ["m9.1.3", "p3.4.3", "m4.6.2"],
    foreshadows: ["m9.1.5", "m18.2.3", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        A test for a rare disease is 95% accurate both ways, and 1 person in 1000 has the disease. You test positive. What is
        the chance that you have it? In studies, most doctors answer around 95%. The right answer is under 2%. Bayes&rsquo;
        rule explains why.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A coin is either fair or biased towards heads. Set your prior, record or generate tosses, and watch your belief
        update.
      </p>
      <CoinBayesViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Bayes' rule">
        <p>If <M>{"P(A), P(B) > 0"}</M>, then</p>
        <MD>{"P(A \\mid B) = \\frac{P(B \\mid A)P(A)}{P(B)},"}</MD>
        <p>
          and by total probability the denominator is <M>{"P(B \\mid A)P(A) + P(B \\mid A^c)P(A^c)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Both <M>{"P(A \\mid B)P(B)"}</M> and <M>{"P(B \\mid A)P(A)"}</M> equal <M>{"P(A \\cap B)"}</M> by the multiplication
          rule. Divide by <M>{"P(B)"}</M>.
        </p>
      </Proof>

      <Definition title="prior, likelihood, posterior">
        <p>
          With <M>{"A"}</M> a hypothesis and <M>{"B"}</M> evidence, <M>{"P(A)"}</M> is the <strong>prior</strong>,{" "}
          <M>{"P(B \\mid A)"}</M> the <strong>likelihood</strong>, and <M>{"P(A \\mid B)"}</M> the{" "}
          <strong>posterior</strong>. In odds form,
        </p>
        <MD>{"\\frac{P(A \\mid B)}{P(A^c \\mid B)} = \\frac{P(B \\mid A)}{P(B \\mid A^c)} \\cdot \\frac{P(A)}{P(A^c)}:"}</MD>
        <p>posterior odds equal the likelihood ratio times the prior odds.</p>
      </Definition>

      <Example title="the medical test">
        <p>With <M>{"P(D) = 0.001"}</M>, <M>{"P(+ \\mid D) = 0.95"}</M> and <M>{"P(+ \\mid D^c) = 0.05"}</M>,</p>
        <MD>{"P(D \\mid +) = \\frac{0.95 \\times 0.001}{0.95 \\times 0.001 + 0.05 \\times 0.999} \\approx 0.019."}</MD>
        <p>
          In a town of 100,000, about 95 of the 100 sick people test positive, but so do about 4995 of the healthy. The rare
          disease is swamped by false positives: ignoring the prior is called <strong>base rate neglect</strong>.
        </p>
      </Example>

      <Example title="sequential updating">
        <p>
          Today&rsquo;s posterior is tomorrow&rsquo;s prior. If tests are conditionally independent given the disease
          status, a second positive multiplies the odds by 19 again, taking the probability from about 0.019 to about 0.27.
        </p>
      </Example>

      <Remark title="Bayes in science and statistics">
        <p>
          Thomas Bayes&rsquo;s essay was published after his death in 1763, and Laplace developed the method. Bayesian
          statistics treats unknown parameters as random, with priors updated by data; philosophers use Bayes&rsquo; rule as
          a model of how evidence confirms theories. The choice of prior remains the main point of controversy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "names",
      rung: "check",
      prompt: <p>In Bayes&rsquo; rule, what is P(B | A) called, when A is a hypothesis and B the evidence?</p>,
      answer: { kind: "choice", options: ["The prior", "The likelihood", "The posterior", "The base rate"], correct: [1] },
    },
    {
      key: "simple",
      rung: "check",
      prompt: <p>P(B | A) = 0.6, P(A) = 0.2 and P(B) = 0.3. What is P(A | B)?</p>,
      answer: { kind: "numeric", value: 0.4, tolerance: 0.001 },
    },
    {
      key: "med",
      rung: "apply",
      prompt: <p>A disease affects 1% of people. A test detects it 90% of the time and gives a false positive 9% of the time. What is P(disease | positive), to two decimal places?</p>,
      answer: { kind: "numeric", value: 0.09, tolerance: 0.005 },
    },
    {
      key: "odds",
      rung: "apply",
      prompt: <p>Prior odds for a hypothesis are 1 to 4, and the evidence is 6 times as likely if the hypothesis is true. What is the posterior probability?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "coin",
      rung: "apply",
      prompt: <p>A coin is fair or two-headed, each with prior 1/2. It lands heads twice. What is the probability that it is two-headed?</p>,
      answer: { kind: "numeric", value: 0.8, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the odds form of Bayes&rsquo; rule from the ordinary form.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Bayes' rule for P(A | B) and for P(Aᶜ | B).",
          "Divides the two, noting that P(B) cancels.",
          "Identifies the result as the likelihood ratio times the prior odds.",
        ],
      },
    },
    {
      key: "base",
      rung: "stretch",
      prompt: <p>Explain to a doctor, without formulas, why a positive result from an accurate test for a rare disease may well be a false alarm.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses a population of concrete numbers, such as 100,000 people.",
          "Compares the number of true positives with the far larger number of false positives among the healthy.",
          "Draws the conclusion about the chance that a given positive is real. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Bayes' rule and its proof, the meaning of prior, likelihood and posterior, the odds form, the medical test example and base rate neglect, and how posteriors become new priors.",

  glimpse: (
    <p>
      The next lesson defines independence, the case where evidence changes nothing. Bayesian statistics builds estimators
      on this rule, and philosophy of science uses it to model confirmation.
    </p>
  ),
};
