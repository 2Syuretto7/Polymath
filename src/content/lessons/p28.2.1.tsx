import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CubeFactoryViz } from "@/components/viz/CubeFactoryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.2.1",
  minutes: 90,
  links: {
    revisits: ["p28.1.3", "p10.7.2", "p10.7.3"],
    foreshadows: ["p28.2.2", "p28.2.3", "p28.4.2"],
  },

  puzzle: (
    <>
      <p>
        Two people obey the axioms of probability and update by conditionalisation, yet one is nearly certain the coin is
        biased and the other is nearly certain it is fair, on the same evidence. Are both rational? If rationality is just
        coherence, yes. If not, what more does it ask?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Vary t, and compare three ways of being indifferent about the size of a cube.</p>
      <CubeFactoryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the core norms">
        <p>
          <strong>Probabilism</strong>: credences should obey the probability axioms. <strong>Conditionalisation</strong>:
          on learning exactly E, the new credence in H should be the old credence in H given E. The first is supported by
          synchronic Dutch books and by accuracy arguments, the second by a diachronic Dutch book due to David Lewis.
          Subjective Bayesians stop here.
        </p>
      </Definition>

      <Definition title="further norms">
        <p>
          <strong>Regularity</strong>: give positive credence to every possibility, so that no mistake is beyond repair.{" "}
          <strong>The Principal Principle</strong> (Lewis): one&rsquo;s credence in A, given that the chance of A is x and
          given admissible evidence, should be x. <strong>Reflection</strong> (van Fraassen): one&rsquo;s credence in A,
          given that one&rsquo;s future credence in A will be x, should be x. <strong>Indifference</strong>: in the absence
          of reasons, spread credence evenly.
        </p>
      </Definition>

      <Example title="the cube factory">
        <p>
          Bas van Fraassen&rsquo;s example: cubes have sides up to 2 cm. Indifference over side length makes P(side ≤ 1) =
          ½; over face area, ¼; over volume, ⅛. Since the descriptions are equivalent, indifference seems to give
          inconsistent advice unless some parameter is privileged.
        </p>
      </Example>

      <Remark title="problems for the further norms">
        <p>
          Regularity fails for continuous quantities: a dart landing on [0, 1] cannot give every point positive
          probability. Reflection fails when one expects one&rsquo;s future self to be drunk or manipulated, so it is
          usually restricted to trusted future selves. Objective Bayesians, following E. T. Jaynes, try to rescue
          indifference with symmetry and maximum entropy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What does conditionalisation require on learning exactly E?</p>,
      answer: { kind: "choice", options: ["The new credence in H equals the old credence in H given E", "The new credence in E is ½", "Credences stay unchanged", "Credences become 0 or 1"], correct: [0] },
    },
    {
      key: "pp",
      rung: "check",
      prompt: <p>What does the Principal Principle connect?</p>,
      answer: { kind: "choice", options: ["Credence and known objective chance", "Credence and truth", "Present and past credence", "Credence and utility"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with t = 1, what probability does indifference over volume give, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.125, tolerance: 0.001 },
    },
    {
      key: "refl",
      rung: "apply",
      prompt: <p>You are certain that tomorrow, after reliable reasoning, your credence in A will be 0.8. By Reflection, what should it be today?</p>,
      answer: { kind: "numeric", value: 0.8, tolerance: 0.001 },
    },
    {
      key: "reg",
      rung: "apply",
      prompt: <p>Why is Regularity hard to satisfy for a dart thrown at the interval [0, 1]?</p>,
      answer: { kind: "choice", options: ["Uncountably many points cannot all get positive probability", "The dart might miss", "Probabilities cannot exceed 1", "The interval is closed"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should rational prior credences be fixed by a principle of indifference? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the principle of indifference and the subjective Bayesian alternative.",
          "Considers the cube factory or a similar problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Reflection a requirement of rationality, given cases where you know your future self will be drunk?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Reflection principle.",
          "Considers a counterexample, and perhaps a restriction to trusted future selves.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Dutch books justify probabilism by appeal to betting losses. A newer argument asks instead what credences aim at:
        being close to the truth. Measured properly, incoherent credences are always less accurate than some coherent ones.
      </p>
      <p>Next, accuracy-first epistemology.</p>
    </>
  ),
};
