import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { JeffreyUpdateViz } from "@/components/viz/JeffreyUpdateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.7.2",
  minutes: 80,
  links: {
    revisits: ["p10.7.1", "m9.1.4", "p3.4.3"],
    foreshadows: ["p10.7.3", "p16.4.3", "p28.2.1"],
  },

  puzzle: (
    <>
      <p>
        Probabilism tells you how your credences must fit together at a moment. But evidence keeps arriving. When you learn
        something, how should your credences change? And what if the evidence leaves you only fairly sure, not certain?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        You suspect a fruit seller&rsquo;s mangoes are Alphonso. Set how likely a sweet mango is under each hypothesis, then
        taste. Start with the last slider at 1, then lower it to model a taste that leaves you unsure.
      </p>
      <JeffreyUpdateViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conditionalisation">
        <p>
          If you learn E for certain, and nothing else, your new credence in any H should be your old conditional credence:
          Cr<sub>new</sub>(H) = Cr(H | E) = Cr(H and E) / Cr(E). By Bayes&rsquo; rule this equals Cr(E | H) Cr(H) / Cr(E).
        </p>
      </Definition>

      <Example title="the mango">
        <p>
          With Cr(H) = 0.3, Cr(E | H) = 0.8 and Cr(E | not H) = 0.2, we get Cr(E) = 0.24 + 0.14 = 0.38, so on tasting a sweet
          mango Cr<sub>new</sub>(H) = 0.24 / 0.38 ≈ 0.63. The evidence more than doubles your confidence, because it is four
          times as likely if H is true.
        </p>
      </Example>

      <Definition title="Jeffrey conditionalisation">
        <p>
          Often experience does not make you certain of anything. If it shifts your credence in E to q, Richard Jeffrey
          proposed Cr<sub>new</sub>(H) = q · Cr(H | E) + (1 − q) · Cr(H | not E). With q = 1 this is ordinary
          conditionalisation.
        </p>
      </Definition>

      <Remark title="why conditionalise?">
        <p>
          Conditionalisation keeps your conditional credences given E fixed, changing only what the evidence forces you to
          change. Diachronic Dutch book arguments say an agent who plans to update any other way can be exploited by a
          bookie; accuracy arguments say conditionalising minimises expected inaccuracy. Critics note that it never lets you
          lose certainty, and that it gives no guidance when you meet a hypothesis you had never considered.
        </p>
      </Remark>

      <Remark title="the problem of the priors">
        <p>
          Conditionalisation says how to move from old credences to new, not where to start. Two agents with different priors
          can conditionalise on the same evidence and still disagree. Subjective Bayesians allow any coherent prior, and point
          out that with enough shared evidence the posteriors tend to converge; objective Bayesians add further constraints,
          such as a principle of indifference.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On learning E for certain, what does conditionalisation say your new credence in H should be?</p>,
      answer: {
        kind: "choice",
        options: ["Cr(E | H)", "Cr(H | E)", "Cr(H) + Cr(E)", "Unchanged"],
        correct: [1],
      },
    },
    {
      key: "jeffrey",
      rung: "check",
      prompt: <p>What does Jeffrey conditionalisation handle that ordinary conditionalisation does not?</p>,
      answer: {
        kind: "choice",
        options: [
          "Evidence that changes your credence in E without making you certain of it",
          "Evidence that is false",
          "Agents without credences",
          "Hypotheses with probability 0.5",
        ],
        correct: [0],
      },
    },
    {
      key: "calc",
      rung: "apply",
      prompt: <p>Cr(H) = 0.2, Cr(E | H) = 0.9 and Cr(E | not H) = 0.3. You learn E for certain. What is your new credence in H?</p>,
      answer: { kind: "numeric", value: 0.18 / 0.42, tolerance: 0.005 },
    },
    {
      key: "jcalc",
      rung: "apply",
      prompt: <p>Cr(H | E) = 0.6 and Cr(H | not E) = 0.1. A glimpse in poor light raises your credence in E to 0.7. By Jeffrey&rsquo;s rule, what is your new credence in H?</p>,
      answer: { kind: "numeric", value: 0.45, tolerance: 0.001 },
    },
    {
      key: "priors",
      rung: "apply",
      prompt: <p>Two people conditionalise on exactly the same evidence but still disagree. Which explanation fits a subjective Bayesian picture?</p>,
      answer: {
        kind: "choice",
        options: [
          "One of them must have failed to conditionalise.",
          "They started with different priors, and each prior is coherent.",
          "Evidence cannot change credences.",
          "Conditionalisation always produces disagreement.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Once a credence reaches 1 under conditionalisation, it can never fall. Is that a problem? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why: once Cr(E) = 1, conditionalising on any later evidence keeps it at 1.",
          "Gives a reason this may be bad, such as fallible evidence, or a reply, such as Jeffrey updating or rarely giving credence 1.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "new",
      rung: "stretch",
      prompt: <p>Before Einstein, no one had a credence in general relativity. How could a Bayesian handle a newly thought of hypothesis?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that conditionalisation only redistributes credence among hypotheses already considered.",
          "Suggests a response, such as a catch-all hypothesis or resetting priors.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the rule of conditionalisation with a worked example, how Jeffrey conditionalisation handles uncertain evidence, one argument for conditionalising, and the problem of the priors.",

  glimpse: (
    <p>
      The next lesson examines Dutch book arguments for probabilism and conditionalisation. Philosophy of science uses this
      machinery to measure how evidence confirms theories, and graduate epistemology returns to Bayesian norms in depth.
    </p>
  ),
};
