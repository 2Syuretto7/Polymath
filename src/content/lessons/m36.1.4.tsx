import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LogisticBifurcationViz } from "@/components/viz/LogisticBifurcationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.1.4",
  minutes: 90,
  links: {
    revisits: ["m36.1.3", "m10.5.1", "m6.2.2"],
    foreshadows: ["m36.3.1", "m36.5.2", "m36.5.3"],
  },

  puzzle: (
    <>
      <p>
        In 1976 the ecologist Robert May studied the simplest model of a population with limited food: next year&rsquo;s
        population is r times this year&rsquo;s, times the room left. For small r the population settles down. As r grows
        it starts to alternate between two values, then four, then eight, and then seems to behave at random. How can one
        quadratic formula do all this?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move r, and watch both the long-run values for every r and the cobweb for the one you chose.</p>
      <LogisticBifurcationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the logistic family">
        <p>
          For 0 ≤ r ≤ 4, <M>{"f_r(x) = rx(1 - x)"}</M> maps [0, 1] into itself. A periodic orbit of period p is{" "}
          <strong>attracting</strong> if <M>{"|(f_r^p)'| < 1"}</M> at its points, and by the chain rule this derivative is
          the product of <M>{"f_r'"}</M> along the orbit.
        </p>
      </Definition>

      <Theorem title="the first bifurcations">
        <p>
          For r &gt; 1 there is a second fixed point <M>{"p_r = 1 - 1/r"}</M>, with <M>{"f_r'(p_r) = 2 - r"}</M>. It is
          attracting for 1 &lt; r &lt; 3. At r = 3 the derivative passes through −1 and an attracting orbit of period 2 is
          born: a <strong>period-doubling bifurcation</strong>. That orbit is attracting until{" "}
          <M>{"r = 1 + \\sqrt 6 \\approx 3.449"}</M>, where period 4 appears.
        </p>
      </Theorem>

      <Theorem title="Feigenbaum and Sharkovskii">
        <p>
          The doubling values <M>{"r_1 = 3, r_2 \\approx 3.449, r_3 \\approx 3.544, \\dots"}</M> converge to{" "}
          <M>{"r_\\infty \\approx 3.5699"}</M>, and the ratios{" "}
          <M>{"(r_n - r_{n-1})/(r_{n+1} - r_n)"}</M> tend to <strong>Feigenbaum&rsquo;s constant</strong> 4.6692…, the same
          for every smooth one-humped family. Sharkovskii&rsquo;s theorem: a continuous map of an interval with a point of
          period 3 has points of every period.
        </p>
      </Theorem>

      <Example title="r = 4">
        <p>
          With <M>{"x = \\sin^2(\\pi\\theta)"}</M>, the map <M>{"f_4"}</M> becomes{" "}
          <M>{"\\theta \\mapsto 2\\theta \\bmod 1"}</M>, since{" "}
          <M>{"4\\sin^2(\\pi\\theta)\\cos^2(\\pi\\theta) = \\sin^2(2\\pi\\theta)"}</M>. So <M>{"f_4"}</M> inherits the
          chaos of the doubling map: dense periodic points and sensitive dependence.
        </p>
      </Example>

      <Remark title="windows">
        <p>
          Between <M>{"r_\\infty"}</M> and 4, chaotic parameters are interleaved with windows of stable periodic
          behaviour, the largest beginning at <M>{"1 + \\sqrt 8 \\approx 3.828"}</M> with period 3. Jakobson proved that
          chaotic behaviour, in the sense of an absolutely continuous invariant measure, occurs for a set of r of positive
          length.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fix",
      rung: "check",
      prompt: <p>When is the fixed point 1 − 1/r of the logistic map attracting?</p>,
      answer: { kind: "choice", options: ["For 1 < r < 3", "For all r", "For r > 3", "Only at r = 4"], correct: [0] },
    },
    {
      key: "shark",
      rung: "check",
      prompt: <p>What does Sharkovskii&rsquo;s theorem say about a continuous interval map with a point of period 3?</p>,
      answer: { kind: "choice", options: ["It has points of every period", "It has no fixed points", "It is the doubling map", "It is not continuous"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set r = 3.5. What is the period of the attracting cycle?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "p",
      rung: "apply",
      prompt: <p>Where is the non-zero fixed point of the logistic map when r = 2.5?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "deriv",
      rung: "apply",
      prompt: <p>What is the derivative of the logistic map at its non-zero fixed point, when r = 3.2?</p>,
      answer: { kind: "numeric", value: -1.2, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For f(x) = rx(1 − x), show that f′(1 − 1/r) = 2 − r, and deduce that this fixed point is attracting exactly when 1 &lt; r &lt; 3.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes f′(x) = r(1 − 2x).",
          "Substitutes x = 1 − 1/r to get r(2/r − 1) = 2 − r.",
          "Solves |2 − r| < 1 to get 1 < r < 3.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Check that x = sin²(πθ) turns the doubling map θ ↦ 2θ mod 1 into the logistic map with r = 4.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes 4x(1 − x) = 4 sin²(πθ) cos²(πθ).",
          "Uses sin(2u) = 2 sin u cos u to get sin²(2πθ), the image of 2θ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The examples are now in place: rotations, expanding maps, shifts and the logistic family. The next chapter asks
        general questions of any continuous map, beginning with which points come back near where they started.
      </p>
      <p>Next, recurrence.</p>
    </>
  ),
};
