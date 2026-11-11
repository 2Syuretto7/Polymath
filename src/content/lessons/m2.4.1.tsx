import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Quote, Remark, Theorem } from "@/components/lesson/Blocks";
import { SecantViz } from "@/components/viz/SecantViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.4.1",
  minutes: 75,
  links: {
    revisits: ["m0.3.3", "m2.2.1"],
    foreshadows: ["m2.5.1", "m6.6.1", "m6.6.4"],
  },

  puzzle: (
    <>
      <p>
        A straight line has one slope, the same everywhere. A curve bends, so its steepness changes from point to point. Yet
        we feel sure that a curve has a definite steepness at each point: a cyclist on a hill knows exactly how hard the road
        is at this moment.
      </p>
      <p>
        To find a slope you need two points: rise over run. At a single point there is no rise and no run. How can a curve
        have a slope at a point?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Take a second point on the curve, a little way along, and draw the line through both: a <strong>secant</strong>. Its
        slope is an honest rise over run, the average steepness between the two points. Now slide the second point towards the
        first. The secant swings, and settles on one line, the <strong>tangent</strong>. Its slope is the slope of the curve at
        the point. This is the limit of the last chapter doing its first real work.
      </p>
      <SecantViz />
      <p>
        The same idea answers the speedometer puzzle of the limits chapter. If f(t) is position at time t, the secant slope is
        the average velocity over a short interval, and its limit is the velocity at an instant.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="the derivative">
        <p>
          Let f be defined on an open interval containing a. f is <strong>differentiable at a</strong> if the limit
        </p>
        <MD>{"f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}"}</MD>
        <p>
          exists. The number <M>{"f'(a)"}</M> is the <strong>derivative</strong> of f at a. The fraction is the{" "}
          <strong>difference quotient</strong>, the slope of the secant from a to <M>{"a + h"}</M>. The tangent line at a is
          the line through <M>{"(a, f(a))"}</M> with slope <M>{"f'(a)"}</M>: <M>{"y = f(a) + f'(a)(x - a)"}</M>.
        </p>
      </Definition>

      <Remark title="notation">
        <p>
          The function <M>{"x \\mapsto f'(x)"}</M> is the <strong>derivative of f</strong>. Newton wrote <M>{"\\dot{y}"}</M>;
          Leibniz wrote <M>{"\\dfrac{dy}{dx}"}</M>, as if it were a ratio of tiny changes. Both notations survive.
          Leibniz&rsquo;s is not a fraction, but it often behaves like one, which is why it has lasted.
        </p>
      </Remark>

      <Example title="from the definition">
        <p>For <M>{"f(x) = x^2"}</M>,</p>
        <MD>{"\\frac{(a + h)^2 - a^2}{h} = \\frac{2ah + h^2}{h} = 2a + h \\to 2a \\quad (h \\to 0)."}</MD>
        <p>
          So <M>{"f'(a) = 2a"}</M>. For <M>{"f(x) = 1/x"}</M> and <M>{"a \\ne 0"}</M>,
        </p>
        <MD>{"\\frac{1}{h}\\left(\\frac{1}{a + h} - \\frac{1}{a}\\right) = \\frac{-1}{a(a + h)} \\to -\\frac{1}{a^2}."}</MD>
      </Example>

      <Theorem title="differentiable implies continuous">
        <p>If f is differentiable at a, then f is continuous at a.</p>
      </Theorem>
      <Proof>
        <p>For <M>{"h \\ne 0"}</M>, write</p>
        <MD>{"f(a + h) - f(a) = \\frac{f(a + h) - f(a)}{h} \\cdot h."}</MD>
        <p>
          As <M>{"h \\to 0"}</M>, the first factor tends to <M>{"f'(a)"}</M> and the second to 0, so by the product law the
          left side tends to <M>{"f'(a) \\cdot 0 = 0"}</M>. That is, <M>{"f(a + h) \\to f(a)"}</M>.
        </p>
      </Proof>

      <Example title="continuous but not differentiable">
        <p>
          The converse fails. For <M>{"f(x) = |x|"}</M> at 0, the difference quotient is <M>{"|h|/h"}</M>, which is 1 for{" "}
          <M>{"h > 0"}</M> and <M>{"-1"}</M> for <M>{"h < 0"}</M>. The one-sided limits differ, so there is no derivative at
          0. The graph has a corner, and no single tangent line.
        </p>
      </Example>

      <Quote source={<>Isaac Newton, <cite>Principia</cite>, Book I, Section I, scholium (1687; Motte&rsquo;s translation, 1729)</>}>
        <p>
          Those ultimate ratios with which quantities vanish are not truly the ratios of ultimate quantities, but limits
          towards which the ratios of quantities decreasing without limit do always converge.
        </p>
      </Quote>
      <p>
        Newton saw clearly that the derivative was a limit of ratios, not a ratio of vanishing quantities. What he lacked was
        the precise definition of a limit, which you now have.
      </p>
    </>
  ),

  practice: [
    {
      key: "secant",
      rung: "check",
      prompt: (
        <p>
          What is the slope of the secant of <M>{"f(x) = x^2"}</M> from <M>{"x = 1"}</M> to <M>{"x = 3"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "square",
      rung: "check",
      prompt: (
        <p>
          For <M>{"f(x) = x^2"}</M>, what is <M>{"f'(3)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "tangent",
      rung: "apply",
      prompt: (
        <p>
          The tangent to <M>{"y = x^2"}</M> at <M>{"x = 3"}</M> is <M>{"y = 6x + c"}</M>. What is c?
        </p>
      ),
      answer: { kind: "numeric", value: -9 },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: (
        <p>
          Using the definition, find <M>{"f'(x)"}</M> for <M>{"f(x) = x^3"}</M>. (Expand <M>{"(x + h)^3"}</M>.)
        </p>
      ),
      answer: { kind: "expression", value: "3x^2", variables: ["x"] },
    },
    {
      key: "corner",
      rung: "apply",
      prompt: <p>At which of these points is the function not differentiable? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["|x| at x = 0", "x² at x = 0", "|x − 2| at x = 2", "|x| at x = 1"],
        correct: [0, 2],
      },
    },
    {
      key: "sqrt",
      rung: "prove",
      prompt: (
        <p>
          Use the definition to show that <M>{"\\dfrac{d}{dx}\\sqrt{x} = \\dfrac{1}{2\\sqrt{x}}"}</M> for <M>{"x > 0"}</M>.
          (Multiply the top and bottom of the difference quotient by <M>{"\\sqrt{x + h} + \\sqrt{x}"}</M>.)
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the difference quotient (√(x + h) − √x)/h.",
          "Rationalises to get 1/(√(x + h) + √x).",
          "Takes the limit using continuity of the square root, to get 1/(2√x).",
        ],
      },
    },
    {
      key: "x-sin",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"f(x) = x^2 \\sin(1/x)"}</M> for <M>{"x \\ne 0"}</M> and <M>{"f(0) = 0"}</M>. Show that{" "}
          <M>{"f'(0)"}</M> exists and find it. Is the same true for <M>{"g(x) = x \\sin(1/x)"}</M>, with <M>{"g(0) = 0"}</M>?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the difference quotient for f at 0 as h sin(1/h).",
          "Uses the squeeze theorem to show it tends to 0, so f′(0) = 0.",
          "For g, the quotient is sin(1/h), which has no limit, so g is not differentiable at 0 (though it is continuous).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the slope of a curve at a single point can be defined as a limit of slopes of secant lines, and work it out for x² at a point.",

  glimpse: (
    <p>
      Differentiable functions are continuous, but continuous functions need not be differentiable, as |x| shows at a single
      corner. Real Analysis I goes to the extreme: a function, built by Weierstrass, that is continuous everywhere and
      differentiable nowhere.
    </p>
  ),
};
