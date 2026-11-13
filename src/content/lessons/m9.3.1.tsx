import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { IntervalAreaViz } from "@/components/viz/IntervalAreaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.3.1",
  minutes: 85,
  links: {
    revisits: ["m9.2.1", "m2.6.3", "m2.7.4"],
    foreshadows: ["m9.3.2", "m9.5.1", "m22.2.2"],
  },

  puzzle: (
    <>
      <p>
        Spin a pointer and read off the angle where it stops. What is the probability that it stops at exactly 90 degrees?
        Not 89.9999, but exactly 90. It must be 0, and the same for every angle. Yet it stops somewhere. How can a sum of
        zeros add up to 1, and how do we describe such a variable at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a density and move a and b. The probability is the area between them, and it vanishes as they meet.</p>
      <IntervalAreaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="continuous random variable and density">
        <p>
          A random variable <M>{"X"}</M> is <strong>continuous</strong> with <strong>density</strong> <M>{"f"}</M> if{" "}
          <M>{"f \\ge 0"}</M>, <M>{"\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1"}</M>, and for all <M>{"a \\le b"}</M>
        </p>
        <MD>{"P(a \\le X \\le b) = \\int_a^b f(x)\\,dx."}</MD>
      </Definition>

      <Remark title="points have probability zero">
        <p>
          Taking <M>{"a = b"}</M> gives <M>{"P(X = a) = 0"}</M>, so it does not matter whether the inequalities are strict.
          Probability is spread continuously, like mass along a wire: no single point carries any, but every stretch does.
          Additivity applies only to countably many disjoint events, so there is no contradiction in uncountably many zeros.
        </p>
      </Remark>

      <Theorem title="the CDF and the density">
        <p>
          The CDF is <M>{"F(x) = \\int_{-\\infty}^x f(t)\\,dt"}</M>. By the fundamental theorem of calculus, at every point
          where <M>{"f"}</M> is continuous, <M>{"F'(x) = f(x)"}</M>, and <M>{"P(a \\le X \\le b) = F(b) - F(a)"}</M>.
        </p>
      </Theorem>

      <Remark title="a density is not a probability">
        <p>
          For small <M>{"h"}</M>, <M>{"P(x \\le X \\le x + h) \\approx f(x)h"}</M>: the density is probability per unit length.
          It can exceed 1, as the uniform density on <M>{"[0, \\tfrac12]"}</M>, which equals 2, shows.
        </p>
      </Remark>

      <Definition title="expectation and variance">
        <p>Sums become integrals:</p>
        <MD>{"E(X) = \\int_{-\\infty}^{\\infty} x f(x)\\,dx, \\qquad E(g(X)) = \\int_{-\\infty}^{\\infty} g(x) f(x)\\,dx,"}</MD>
        <p>and linearity, the variance formula and its properties carry over unchanged.</p>
      </Definition>

      <Example title="a worked density">
        <p>
          Let <M>{"f(x) = cx^2"}</M> on <M>{"[0, 1]"}</M> and 0 elsewhere. Total area 1 forces <M>{"c/3 = 1"}</M>, so{" "}
          <M>{"c = 3"}</M>. Then <M>{"F(x) = x^3"}</M> on <M>{"[0, 1]"}</M>, <M>{"P(X \\le \\tfrac12) = \\tfrac18"}</M>, and{" "}
          <M>{"E(X) = \\int_0^1 3x^3\\,dx = \\tfrac34"}</M>.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "point",
      rung: "check",
      prompt: <p>X is continuous with a density. What is P(X = 2)?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "exceed",
      rung: "check",
      prompt: <p>Can a density take values larger than 1?</p>,
      answer: {
        kind: "choice",
        options: ["No, it is a probability.", "Yes, since only its integral over each interval is a probability.", "Only at one point.", "Only for discrete variables."],
        correct: [1],
      },
    },
    {
      key: "c",
      rung: "apply",
      prompt: <p>f(x) = c x on [0, 2] and 0 elsewhere is a density. What is c?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "prob",
      rung: "apply",
      prompt: <p>For the density f(x) = 3x² on [0, 1], what is P(X &gt; 1/2)?</p>,
      answer: { kind: "numeric", value: 0.875, tolerance: 0.001 },
    },
    {
      key: "var",
      rung: "apply",
      prompt: <p>For the density f(x) = 3x² on [0, 1], E(X) = 3/4 and E(X²) = 3/5. What is Var(X), to four decimal places?</p>,
      answer: { kind: "numeric", value: 0.0375, tolerance: 0.0005 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if X is uniform on [a, b], with density 1/(b − a) there, then E(X) = (a + b)/2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes E(X) as the integral of x/(b − a) from a to b.",
          "Evaluates it as (b² − a²)/(2(b − a)).",
          "Factorises to get (a + b)/2.",
        ],
      },
    },
    {
      key: "dart",
      rung: "stretch",
      prompt: <p>A dart lands at a uniformly random point of a disc of radius 1. Let R be its distance from the centre. Find the CDF and density of R. Is R uniform on [0, 1]?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds P(R ≤ r) as the area ratio r² for 0 ≤ r ≤ 1.",
          "Differentiates to get the density 2r.",
          "Notes that R is not uniform, since outer rings have more area. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a density is, why each single point has probability zero, how the CDF and density are related through the fundamental theorem of calculus, why a density can exceed 1, and how expectation becomes an integral.",

  glimpse: (
    <p>
      The next lesson meets the three most important densities: uniform, normal and exponential. Joint densities describe
      several variables at once, and measure theory later explains what a density really is.
    </p>
  ),
};
