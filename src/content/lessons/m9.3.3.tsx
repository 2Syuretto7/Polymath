import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuantileSamplerViz } from "@/components/viz/QuantileSamplerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.3.3",
  minutes: 80,
  links: {
    revisits: ["m9.3.2", "m9.2.1", "m1.7.3"],
    foreshadows: ["m9.5.1", "m9.7.1", "m9.7.2"],
  },

  puzzle: (
    <>
      <p>
        A computer can produce numbers that behave like independent uniform draws from [0, 1], and nothing else. Yet
        simulations need exponential waiting times, normal errors, dice and much more. Is one kind of randomness enough to
        manufacture all the others?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Draw uniform numbers, push each through the inverse CDF, and watch the histogram take the target shape.</p>
      <QuantileSamplerViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="universality of the uniform">
        <p>
          Let <M>{"F"}</M> be a continuous CDF that is strictly increasing where it lies strictly between 0 and 1, and let{" "}
          <M>{"U \\sim \\operatorname{Unif}(0, 1)"}</M>.
        </p>
        <ol>
          <li>The random variable <M>{"X = F^{-1}(U)"}</M> has CDF <M>{"F"}</M>.</li>
          <li>If <M>{"X"}</M> has CDF <M>{"F"}</M>, then <M>{"F(X) \\sim \\operatorname{Unif}(0, 1)"}</M>.</li>
        </ol>
      </Theorem>

      <Proof>
        <p>Since <M>{"F"}</M> is increasing, <M>{"F^{-1}(u) \\le x"}</M> exactly when <M>{"u \\le F(x)"}</M>. So</p>
        <MD>{"P(F^{-1}(U) \\le x) = P(U \\le F(x)) = F(x)."}</MD>
        <p>For the second part, for <M>{"0 < u < 1"}</M>,</p>
        <MD>{"P(F(X) \\le u) = P(X \\le F^{-1}(u)) = F(F^{-1}(u)) = u,"}</MD>
        <p>which is the uniform CDF.</p>
      </Proof>

      <Example title="exponentials from uniforms">
        <p>
          For <M>{"\\operatorname{Exp}(\\lambda)"}</M>, <M>{"F(x) = 1 - e^{-\\lambda x}"}</M>. Solving{" "}
          <M>{"u = 1 - e^{-\\lambda x}"}</M> gives <M>{"F^{-1}(u) = -\\ln(1 - u)/\\lambda"}</M>. Since <M>{"1 - U"}</M> is
          also uniform, <M>{"-\\ln(U)/\\lambda"}</M> is an exponential sample too.
        </p>
      </Example>

      <Example title="discrete targets">
        <p>
          The same idea works with a step-shaped CDF using the generalised inverse{" "}
          <M>{"F^{-1}(u) = \\min\\{x : F(x) \\ge u\\}"}</M>. For a fair die this is <M>{"\\lceil 6U \\rceil"}</M>: cut [0, 1]
          into six equal pieces and report which piece <M>{"U"}</M> fell in.
        </p>
      </Example>

      <Remark title="why it works, in pictures">
        <p>
          The inverse CDF stretches [0, 1] onto the real line. Where <M>{"F"}</M> is steep, a short stretch of x-values
          collects a long stretch of u-values, and so receives many samples; that is exactly where the density{" "}
          <M>{"F' = f"}</M> is large.
        </p>
      </Remark>

      <Remark title="the other direction in statistics">
        <p>
          Part 2, the probability integral transform, says that plugging a variable into its own CDF gives a uniform. This is
          why a p-value, computed when the hypothesis tested is true, is uniformly distributed, and why one can test whether
          data come from a proposed distribution by checking whether <M>{"F(X_i)"}</M> look uniform.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fx",
      rung: "check",
      prompt: <p>If X has continuous, strictly increasing CDF F, what is the distribution of F(X)?</p>,
      answer: { kind: "choice", options: ["The same as X", "Uniform on [0, 1]", "Standard normal", "Exponential"], correct: [1] },
    },
    {
      key: "half",
      rung: "check",
      prompt: <p>Using X = −ln(1 − U) to sample Exp(1), what value of X does U = 0.5 give? Use four decimal places.</p>,
      answer: { kind: "numeric", value: Math.log(2), tolerance: 0.0005 },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: <p>To sample from F(x) = x³ on [0, 1], you set X = F⁻¹(U). What value of X does U = 0.125 give?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "die",
      rung: "apply",
      prompt: <p>Which recipe turns U ~ Unif(0, 1) into a fair die roll?</p>,
      answer: { kind: "choice", options: ["6U", "⌈6U⌉", "⌊6U⌋", "U⁶"], correct: [1] },
    },
    {
      key: "lnu",
      rung: "apply",
      prompt: <p>If U ~ Unif(0, 1), what is the distribution of −3 ln U?</p>,
      answer: { kind: "choice", options: ["Exponential with mean 3", "Exponential with rate 3", "Uniform on [0, 3]", "Normal"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if U ~ Unif(0, 1) and F is a continuous, strictly increasing CDF, then F⁻¹(U) has CDF F.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses monotonicity to say F⁻¹(U) ≤ x if and only if U ≤ F(x).",
          "Uses the uniform CDF to get P(U ≤ F(x)) = F(x).",
          "Concludes that the CDF of F⁻¹(U) is F.",
        ],
      },
    },
    {
      key: "normal",
      rung: "stretch",
      prompt: <p>The standard normal CDF has no formula in elementary functions, so neither does its inverse. Suggest a way to sample normals from uniforms anyway.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Suggests a workable method, such as a numerical inverse, a sum of many uniforms, or a polar or Box–Muller style transformation.",
          "Explains why the method gives normal or nearly normal values.",
          "Notes any approximation involved. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a uniform random number can be turned into a sample from any distribution through the inverse CDF, why it works, the exponential and die examples, and why F(X) is uniform.",

  glimpse: (
    <p>
      The next chapter studies moment generating functions and inequalities. Simulation by inverse CDFs reappears whenever the
      law of large numbers is checked by computer.
    </p>
  ),
};
