import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DarbouxGapViz } from "@/components/viz/DarbouxGapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.2.5",
  minutes: 85,
  links: {
    revisits: ["m6.7.4", "m6.7.1", "m22.2.3"],
    foreshadows: ["m22.3.2", "m22.4.3", "m22.5.2"],
  },

  puzzle: (
    <>
      <p>
        You learnt to integrate with Riemann sums, and computed hundreds of integrals that way. Now there is a new integral.
        Must all those answers be checked again? And is there any function that Riemann could integrate but Lebesgue could
        not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Refine the partition, and watch whether the upper and lower sums meet.</p>
      <DarbouxGapViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the integrals agree">
        <p>
          If <M>f</M> is bounded and Riemann integrable on <M>{"[a, b]"}</M>, then <M>f</M> is Lebesgue measurable and
          integrable, and
        </p>
        <MD>{"\\int_{[a, b]} f \\, d\\lambda = \\int_a^b f(x) \\, dx."}</MD>
      </Theorem>

      <Example title="proof in outline">
        <p>
          Choose refining partitions whose lower and upper step functions <M>{"\\varphi_n \\le f \\le \\psi_n"}</M> have
          integrals tending to the Riemann integral <M>I</M>. The <M>{"\\varphi_n"}</M> increase to some{" "}
          <M>{"\\varphi \\le f"}</M>, the <M>{"\\psi_n"}</M> decrease to some <M>{"\\psi \\ge f"}</M>, and by dominated
          convergence <M>{"\\int (\\psi - \\varphi) = 0"}</M>. So <M>{"\\varphi = \\psi = f"}</M> almost everywhere. Lebesgue
          measure is complete, so <M>f</M> is measurable, and <M>{"\\int f \\, d\\lambda = \\lim \\int \\varphi_n = I"}</M>.
        </p>
      </Example>

      <Theorem title="Lebesgue's criterion, now with measure">
        <p>
          A bounded <M>f</M> on <M>{"[a, b]"}</M> is Riemann integrable exactly when its set of discontinuities has Lebesgue
          measure 0. Thomae&rsquo;s function, discontinuous exactly on the rationals, passes. The indicator of the rationals,
          discontinuous everywhere, fails, though its Lebesgue integral is simply 0.
        </p>
      </Theorem>

      <Remark title="where they part ways">
        <p>
          Improper Riemann integrals can converge by cancellation:{" "}
          <M>{"\\int_0^\\infty \\frac{\\sin x}{x} \\, dx = \\frac{\\pi}{2}"}</M> as a limit, yet{" "}
          <M>{"\\int_0^\\infty \\frac{|\\sin x|}{x} \\, dx = \\infty"}</M>, so the function is not Lebesgue integrable. The
          Lebesgue integral is absolute, like an absolutely convergent series. What it gains is decisive: limits behave, and
          the space of integrable functions is complete, which the Riemann integrable functions are not.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "agree",
      rung: "check",
      prompt: <p>For a bounded Riemann integrable function on [a, b], how do the two integrals compare?</p>,
      answer: { kind: "choice", options: ["They are equal", "The Lebesgue integral is larger", "The Riemann integral is larger", "They may differ on a null set"], correct: [0] },
    },
    {
      key: "crit",
      rung: "check",
      prompt: <p>What is Lebesgue&rsquo;s criterion for Riemann integrability of a bounded function?</p>,
      answer: { kind: "choice", options: ["Its discontinuities form a set of measure 0", "It is continuous everywhere", "It has finitely many discontinuities", "It is monotone"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the upper sum of the indicator of ℚ with 16 pieces?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "thomae",
      rung: "apply",
      prompt: <p>What is the integral of Thomae&rsquo;s function over [0, 1]?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "sinc",
      rung: "apply",
      prompt: <p>Why is sin(x)/x not Lebesgue integrable on [0, ∞)?</p>,
      answer: { kind: "choice", options: ["The integral of |sin(x)|/x diverges", "It is not measurable", "It is unbounded near 0", "Its improper Riemann integral diverges"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the indicator of the rationals in [0, 1] is not Riemann integrable, and find its Lebesgue integral.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every subinterval contains rationals and irrationals, so every upper sum is 1 and every lower sum is 0.",
          "Concludes the upper and lower integrals differ, so it is not Riemann integrable.",
          "Computes the Lebesgue integral as the measure of the rationals in [0, 1], which is 0 because they are countable.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Give a sequence of Riemann integrable functions on [0, 1] that increases to a function that is not Riemann integrable. What does this show?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lists the rationals as q₁, q₂, …, and takes fₙ as the indicator of {q₁, …, qₙ}, each Riemann integrable with integral 0.",
          "Notes the limit is the indicator of the rationals, which is not Riemann integrable, so the Riemann integral does not pass to monotone limits.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Area in the plane was where integration began. Lebesgue measure on the line gives length; what gives area, and how is
        it built from length?
      </p>
      <p>
        Next, product measures: measurable rectangles, the product σ-algebra, the measure that multiplies side lengths and
        extends to every set the rectangles generate, and Cavalieri&rsquo;s principle made rigorous.
      </p>
    </>
  ),
};
