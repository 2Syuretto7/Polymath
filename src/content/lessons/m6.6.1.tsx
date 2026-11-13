import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiffQuotientViz } from "@/components/viz/DiffQuotientViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.6.1",
  minutes: 85,
  links: {
    revisits: ["m6.5.1", "m2.4.1", "m6.5.2"],
    foreshadows: ["m6.6.2", "m6.6.4", "m12.4.1"],
  },

  puzzle: (
    <>
      <p>
        Calculus taught you to differentiate by rules. Analysis asks what the rules rest on, and finds surprises. The function{" "}
        <M>{"x^2 \\sin(1/x)"}</M>, with value 0 at 0, has a derivative at every point, including 0. Yet its derivative
        oscillates wildly near 0 and has no limit there. A derivative need not be continuous. What, then, can we say about
        derivatives, and what does differentiability give us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Shrink <M>{"h"}</M> and compare the slopes of the secants from 0 to <M>{"h"}</M> and from 0 to{" "}
        <M>{"-h"}</M>.
      </p>
      <DiffQuotientViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the derivative">
        <p>
          Let <M>{"f : I \\to \\mathbb{R}"}</M> on an interval, and <M>{"c \\in I"}</M>. Then <M>{"f"}</M> is{" "}
          <strong>differentiable at</strong> <M>{"c"}</M> if the limit
        </p>
        <MD>{"f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}"}</MD>
        <p>exists. It is a functional limit in the sense of the previous chapter, of the difference quotient.</p>
      </Definition>

      <Theorem title="differentiable implies continuous">
        <p>If <M>{"f"}</M> is differentiable at <M>{"c"}</M>, it is continuous at <M>{"c"}</M>.</p>
      </Theorem>

      <Proof>
        <p>For <M>{"x \\ne c"}</M>,</p>
        <MD>{"f(x) - f(c) = \\frac{f(x) - f(c)}{x - c} \\cdot (x - c) \\to f'(c) \\cdot 0 = 0."}</MD>
      </Proof>

      <Example title="the chain rule, carefully">
        <p>
          The usual proof of <M>{"(g \\circ f)'(c) = g'(f(c)) f'(c)"}</M> multiplies and divides by{" "}
          <M>{"f(x) - f(c)"}</M>, which may be 0 for <M>{"x"}</M> arbitrarily close to <M>{"c"}</M>. The fix is to define{" "}
          <M>{"d(y) = \\frac{g(y) - g(f(c))}{y - f(c)}"}</M> for <M>{"y \\ne f(c)"}</M> and{" "}
          <M>{"d(f(c)) = g'(f(c))"}</M>. Then <M>{"d"}</M> is continuous at <M>{"f(c)"}</M>, and{" "}
          <M>{"g(f(x)) - g(f(c)) = d(f(x))(f(x) - f(c))"}</M> holds for every <M>{"x"}</M>. Divide by <M>{"x - c"}</M> and let{" "}
          <M>{"x \\to c"}</M>.
        </p>
      </Example>

      <Theorem title="Darboux's theorem">
        <p>
          If <M>{"f"}</M> is differentiable on <M>{"[a, b]"}</M> and <M>{"\\alpha"}</M> lies strictly between{" "}
          <M>{"f'(a)"}</M> and <M>{"f'(b)"}</M>, then <M>{"f'(c) = \\alpha"}</M> for some <M>{"c \\in (a, b)"}</M>.
        </p>
      </Theorem>

      <Remark title="what derivatives can and cannot be">
        <p>
          Darboux&rsquo;s theorem says derivatives have the intermediate value property even when they are not continuous. To
          prove it, apply the extreme value theorem to <M>{"g(x) = f(x) - \\alpha x"}</M>, which has a minimum inside the
          interval where <M>{"g' = 0"}</M>. So a derivative can never have a jump discontinuity: the floor function is not the
          derivative of anything. Its discontinuities, like those of <M>{"2x \\sin(1/x) - \\cos(1/x)"}</M> at 0, must be
          essential.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "abs",
      rung: "check",
      prompt: <p>Is |x| differentiable at 0?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, with derivative 0.",
          "No: the right difference quotients are 1 and the left ones −1.",
          "Yes, with derivative 1.",
          "No, because it is not continuous.",
        ],
        correct: [1],
      },
    },
    {
      key: "xabs",
      rung: "check",
      prompt: (
        <p>
          What is the derivative of <M>{"x|x|"}</M> at 0?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "quot",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"f(x) = x^2 \\sin(1/x)"}</M>, the difference quotient at 0 is <M>{"h \\sin(1/h)"}</M>. What bound shows it
          tends to 0?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["|h sin(1/h)| ≤ |h|", "|h sin(1/h)| ≤ 1", "|h sin(1/h)| ≥ h", "sin(1/h) → 0"],
        correct: [0],
      },
    },
    {
      key: "darboux",
      rung: "apply",
      prompt: <p>Which of these functions cannot be the derivative of any function on ℝ? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "The floor function",
          "2x sin(1/x) − cos(1/x), with value 0 at 0",
          "The sign function, −1, 0 or 1",
          "cos x",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: <p>Why does the naive proof of the chain rule need repair?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the chain rule is false.",
          "Because it divides by f(x) − f(c), which can be zero for x arbitrarily close to c.",
          "Because g might not be continuous.",
          "Because limits cannot be multiplied.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove the product rule: if <M>{"f"}</M> and <M>{"g"}</M> are differentiable at <M>{"c"}</M>, so is{" "}
          <M>{"fg"}</M>, with <M>{"(fg)'(c) = f'(c)g(c) + f(c)g'(c)"}</M>. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes f(x)g(x) − f(c)g(c) = f(x)(g(x) − g(c)) + g(c)(f(x) − f(c)).",
          "Divides by x − c and takes limits, using that f is continuous at c so f(x) → f(c).",
          "Concludes the formula.",
        ],
      },
    },
    {
      key: "darbouxproof",
      rung: "stretch",
      prompt: (
        <p>
          Sketch the proof of Darboux&rsquo;s theorem in the case <M>{"f'(a) < \\alpha < f'(b)"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets g(x) = f(x) − αx, so g′(a) < 0 < g′(b).",
          "Notes g attains a minimum on [a, b], and the signs of g′ at the ends show it is not at a or b.",
          "Concludes g′(c) = 0 at the interior minimum, so f′(c) = α.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of the derivative as a limit, why differentiable functions are continuous, how to prove the chain rule properly, and why Darboux's theorem forbids derivatives from having jumps.",

  glimpse: (
    <p>
      The next lesson proves the mean value theorems, which connect the derivative to the behaviour of the function on whole
      intervals. Later in the chapter comes a function that is continuous everywhere and differentiable nowhere, and in
      several variables the derivative becomes a linear map.
    </p>
  ),
};
