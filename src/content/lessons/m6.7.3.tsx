import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { AreaFunctionViz } from "@/components/viz/AreaFunctionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.7.3",
  minutes: 90,
  links: {
    revisits: ["m6.7.2", "m6.6.2", "m2.6.3"],
    foreshadows: ["m6.8.2", "m12.5.1", "m6.7.4"],
  },

  puzzle: (
    <>
      <p>
        Integration is about adding up infinitely many thin rectangles; differentiation is about slopes at a point. They seem
        to have nothing to do with each other. Yet in calculus you computed every integral by finding an antiderivative. The
        fundamental theorem says this works, but only under hypotheses, and the earlier calculus course never stated them
        carefully. What exactly must be true of <M>{"f"}</M> for the two operations to undo each other?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The lower graph is the area function <M>{"F(x) = \\int_0^x f"}</M>. Move <M>{"x"}</M>, and compare the slopes of{" "}
        <M>{"F"}</M> from either side with the value of <M>{"f"}</M>, especially at the jump.
      </p>
      <AreaFunctionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the fundamental theorem, part one">
        <p>
          If <M>{"F"}</M> is differentiable on <M>{"[a, b]"}</M> with <M>{"F' = f"}</M>, and <M>{"f"}</M> is integrable, then
        </p>
        <MD>{"\\int_a^b f = F(b) - F(a)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Take any partition <M>{"P"}</M>. On each piece, the mean value theorem gives <M>{"t_k"}</M> with{" "}
          <M>{"F(x_k) - F(x_{k-1}) = f(t_k)\\,\\Delta x_k"}</M>. Summing, the left side telescopes:
        </p>
        <MD>{"F(b) - F(a) = \\sum_k f(t_k)\\,\\Delta x_k,"}</MD>
        <p>
          which lies between <M>{"L(f, P)"}</M> and <M>{"U(f, P)"}</M>. Since this holds for every <M>{"P"}</M>, and{" "}
          <M>{"f"}</M> is integrable, <M>{"F(b) - F(a)"}</M> equals the integral.
        </p>
      </Proof>

      <Theorem title="the fundamental theorem, part two">
        <p>
          If <M>{"f"}</M> is integrable on <M>{"[a, b]"}</M>, then <M>{"F(x) = \\int_a^x f"}</M> is continuous, indeed
          Lipschitz. If <M>{"f"}</M> is continuous at <M>{"c"}</M>, then <M>{"F"}</M> is differentiable at <M>{"c"}</M> and{" "}
          <M>{"F'(c) = f(c)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"|f| \\le B"}</M>, then <M>{"|F(y) - F(x)| = |\\int_x^y f| \\le B|y - x|"}</M>. For the derivative, given{" "}
          <M>{"\\varepsilon"}</M>, continuity at <M>{"c"}</M> gives <M>{"\\delta"}</M> with{" "}
          <M>{"|f(t) - f(c)| < \\varepsilon"}</M> for <M>{"|t - c| < \\delta"}</M>. Then for <M>{"0 < |h| < \\delta"}</M>,
        </p>
        <MD>{"\\left|\\frac{F(c + h) - F(c)}{h} - f(c)\\right| = \\left|\\frac1h \\int_c^{c+h} (f(t) - f(c))\\,dt\\right| \\le \\varepsilon."}</MD>
      </Proof>

      <Example title="the hypotheses matter">
        <p>
          In part one, integrability of <M>{"F'"}</M> is a real assumption: there are differentiable functions whose
          derivatives are bounded but not Riemann integrable, an example due to Volterra. In part two, continuity of{" "}
          <M>{"f"}</M> at <M>{"c"}</M> matters: for a step function, <M>{"F"}</M> has a corner at the jump, as in the viz. Away
          from the jump, <M>{"F' = f"}</M> as promised.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          Every continuous function has an antiderivative, namely its area function, even when no formula exists; this is how{" "}
          <M>{"\\ln x = \\int_1^x dt/t"}</M> can serve as a definition. Integration by parts and substitution follow by applying
          part one to the product and chain rules. In several variables the theorem grows into Green&rsquo;s, Stokes&rsquo;s
          and the divergence theorems, and finally into the general Stokes theorem for differential forms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "calc",
      rung: "check",
      prompt: (
        <p>
          Use part one to compute <M>{"\\int_0^2 3x^2\\,dx"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: (
        <p>
          If <M>{"F(x) = \\int_0^x \\cos(t^2)\\,dt"}</M>, what is <M>{"F'(0)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"G(x) = \\int_0^{x^2} e^t\\,dt"}</M>. Using part two and the chain rule, what is <M>{"G'(1)"}</M>? Give a
          decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 5.4366, tolerance: 0.001 },
    },
    {
      key: "step",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"f = 0.5"}</M> on <M>{"[0, 1)"}</M> and <M>{"1.5"}</M> on <M>{"[1, 2]"}</M>, and{" "}
          <M>{"F(x) = \\int_0^x f"}</M>. What is <M>{"F(2)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "where",
      rung: "apply",
      prompt: <p>For that step function, where is F not differentiable?</p>,
      answer: {
        kind: "choice",
        options: ["Nowhere", "Only at x = 1, where f jumps", "Everywhere", "At x = 0 and x = 2 only"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"f"}</M> is integrable and <M>{"|f| \\le B"}</M> on <M>{"[a, b]"}</M>, then{" "}
          <M>{"F(x) = \\int_a^x f"}</M> is continuous. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes F(y) − F(x) as the integral of f from x to y.",
          "Bounds it by B|y − x|.",
          "Concludes F is Lipschitz, hence continuous; δ = ε/B works.",
        ],
      },
    },
    {
      key: "parts",
      rung: "stretch",
      prompt: (
        <p>
          Derive integration by parts from the fundamental theorem. State the hypotheses you need.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Assumes f and g are differentiable with integrable derivatives, for example continuously differentiable.",
          "Applies part one to (fg)′ = f′g + fg′.",
          "Rearranges to ∫ f g′ = f(b)g(b) − f(a)g(a) − ∫ f′ g.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend both parts of the fundamental theorem of calculus, how the mean value theorem proves the first and continuity proves the second, and why each hypothesis is needed.",

  glimpse: (
    <p>
      The next lesson asks exactly which functions are Riemann integrable, using sets of measure zero. The fundamental theorem
      returns when we ask whether limits of functions can be integrated term by term, and in several variables it becomes
      the family of theorems of Green, Stokes and Gauss.
    </p>
  ),
};
