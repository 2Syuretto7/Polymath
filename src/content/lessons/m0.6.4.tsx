import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Proposition, Remark, Theorem } from "@/components/lesson/Blocks";
import { InverseSineViz } from "@/components/viz/InverseSineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m0.6.4",
  minutes: 60,
  links: {
    revisits: ["m0.3.4", "m0.4.3"],
    foreshadows: ["m2.4.5", "m2.9.4", "m13.5.4"],
  },

  puzzle: (
    <>
      <p>
        A wheelchair ramp should rise no more than 1 metre for every 12 metres along the ground. A builder wants to know the
        angle the ramp makes with the ground. She knows <M>{"\\tan\\theta = \\tfrac{1}{12}"}</M>. How does she get{" "}
        <M>{"\\theta"}</M> back?
      </p>
      <p>
        A harder case: which angle has sine equal to <M>{"\\tfrac12"}</M>? You may say <M>{"30^\\circ"}</M>, but{" "}
        <M>{"150^\\circ"}</M> works too, and so does <M>{"390^\\circ"}</M>. Which one should &ldquo;the&rdquo; answer be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A function can be undone only if it never sends two inputs to the same output. Sine fails badly: its wave meets every
        level between <M>{"-1"}</M> and 1 infinitely often. The cure, as with square roots, is to choose one piece of the
        graph that meets each level exactly once, and undo only that piece. For the square root we kept the non-negative
        half of the parabola; for sine we keep the stretch between <M>{"-\\tfrac{\\pi}{2}"}</M> and{" "}
        <M>{"\\tfrac{\\pi}{2}"}</M>, where the wave climbs steadily from <M>{"-1"}</M> to 1.
      </p>
      <InverseSineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the inverse trigonometric functions">
        <ul>
          <li>
            For <M>{"-1 \\le c \\le 1"}</M>, <M>{"\\arcsin c"}</M> is the unique angle in{" "}
            <M>{"\\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]"}</M> whose sine is <M>c</M>.
          </li>
          <li>
            For <M>{"-1 \\le c \\le 1"}</M>, <M>{"\\arccos c"}</M> is the unique angle in <M>{"[0, \\pi]"}</M> whose cosine
            is <M>c</M>.
          </li>
          <li>
            For every real <M>c</M>, <M>{"\\arctan c"}</M> is the unique angle in{" "}
            <M>{"\\left(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right)"}</M> whose tangent is <M>c</M>.
          </li>
        </ul>
        <p>
          They are also written <M>{"\\sin^{-1}"}</M>, <M>{"\\cos^{-1}"}</M> and <M>{"\\tan^{-1}"}</M>. Here the{" "}
          <M>{"-1"}</M> means the inverse function, not the reciprocal: <M>{"\\sin^{-1} c"}</M> is not{" "}
          <M>{"\\tfrac{1}{\\sin c}"}</M>.
        </p>
      </Definition>

      <Proposition title="these are well defined">
        <p>Each definition picks out exactly one angle.</p>
      </Proposition>
      <Proof>
        <p>
          As the angle goes from <M>{"-\\tfrac{\\pi}{2}"}</M> to <M>{"\\tfrac{\\pi}{2}"}</M>, the point on the unit circle
          travels up the right-hand half of the circle from the bottom to the top, so its height takes each value from{" "}
          <M>{"-1"}</M> to 1 exactly once. As the angle goes from 0 to <M>{"\\pi"}</M>, the point travels over the top half
          from right to left, so its horizontal coordinate takes each value from 1 down to <M>{"-1"}</M> exactly once. For
          tangent, each non-vertical line through the origin meets the open right-hand half of the circle exactly once, and its slope can
          be any real number.
        </p>
      </Proof>

      <Theorem title="all the solutions">
        <p>For <M>{"-1 \\le c \\le 1"}</M> and <M>k</M> ranging over the integers, the solutions of</p>
        <ul>
          <li><M>{"\\sin x = c"}</M> are <M>{"x = \\arcsin c + 2k\\pi"}</M> and <M>{"x = \\pi - \\arcsin c + 2k\\pi"}</M>;</li>
          <li><M>{"\\cos x = c"}</M> are <M>{"x = \\pm\\arccos c + 2k\\pi"}</M>.</li>
        </ul>
        <p>For any real <M>c</M>, the solutions of <M>{"\\tan x = c"}</M> are <M>{"x = \\arctan c + k\\pi"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          A horizontal line at height <M>c</M> meets the unit circle in two points that are mirror images in the vertical
          axis (one point, if <M>{"c = \\pm 1"}</M>). One is at angle <M>{"\\arcsin c"}</M>; its mirror image is at{" "}
          <M>{"\\pi - \\arcsin c"}</M>. Each point is reached again after any whole number of turns. Cosine is the same with a
          vertical line, whose two points are mirror images in the horizontal axis. A line through the origin with slope{" "}
          <M>c</M> meets the circle at two opposite points, half a turn apart.
        </p>
      </Proof>

      <Example title="the ramp">
        <p>
          The ramp makes the angle <M>{"\\arctan \\tfrac{1}{12} \\approx 0.0831"}</M> radians, about{" "}
          <M>{"4.76^\\circ"}</M>. And the equation <M>{"\\sin x = \\tfrac12"}</M> has solutions{" "}
          <M>{"\\tfrac{\\pi}{6} + 2k\\pi"}</M> and <M>{"\\tfrac{5\\pi}{6} + 2k\\pi"}</M>, of which{" "}
          <M>{"\\arcsin\\tfrac12 = \\tfrac{\\pi}{6}"}</M> is the one in the chosen range.
        </p>
      </Example>

      <Remark title="undoing in the wrong order">
        <p>
          Since arcsin undoes sine on the chosen piece, <M>{"\\sin(\\arcsin c) = c"}</M> always. But{" "}
          <M>{"\\arcsin(\\sin x) = x"}</M> only when <M>x</M> is in <M>{"\\left[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}\\right]"}</M>.
          For example, <M>{"\\arcsin(\\sin \\pi) = \\arcsin 0 = 0"}</M>, not <M>{"\\pi"}</M>. This is the same caution as{" "}
          <M>{"\\sqrt{x^2} = |x|"}</M>, not <M>x</M>.
        </p>
      </Remark>

      <Remark title="Madhava’s series">
        <p>
          Around 1400, Madhava of Sangamagrama in Kerala found that the arctangent can be written as an infinite sum,{" "}
          <M>{"\\arctan x = x - \\tfrac{x^3}{3} + \\tfrac{x^5}{5} - \\cdots"}</M>, and so, putting <M>{"x = 1"}</M>,
        </p>
        <MD>{"\\frac{\\pi}{4} = 1 - \\frac13 + \\frac15 - \\frac17 + \\cdots."}</MD>
        <p>
          This was rediscovered in Europe by Gregory and Leibniz some 250 years later. The Kerala school also found how to
          speed up the slow convergence, and computed <M>{"\\pi"}</M> to many decimal places.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "arcsin1",
      rung: "check",
      prompt: <p>What is <M>{"\\arcsin 1"}</M>? Answer in terms of π, such as pi/6.</p>,
      answer: { kind: "expression", value: "pi/2", variables: [] },
    },
    {
      key: "arccos-half",
      rung: "check",
      prompt: <p>What is <M>{"\\arccos \\tfrac12"}</M>, in degrees?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "ramp",
      rung: "apply",
      prompt: <p>A ramp rises 1.5 m over a horizontal distance of 6 m. What angle does it make with the ground, in degrees, to two decimal places?</p>,
      answer: { kind: "numeric", value: 14.04, tolerance: 0.001 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many solutions does <M>{"\\sin x = 0.4"}</M> have with <M>{"0 \\le x < 4\\pi"}</M>?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "wrong-order",
      rung: "apply",
      prompt: <p>What is <M>{"\\arcsin\\left(\\sin \\tfrac{5\\pi}{6}\\right)"}</M>? Answer in terms of π.</p>,
      answer: { kind: "expression", value: "pi/6", variables: [] },
    },
    {
      key: "complementary",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\arcsin c + \\arccos c = \\tfrac{\\pi}{2}"}</M> for every <M>c</M> with{" "}
          <M>{"-1 \\le c \\le 1"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lets θ = arcsin c, so sin θ = c and θ lies in [−π/2, π/2].",
          "Notes that π/2 − θ then lies in [0, π].",
          "Shows cos(π/2 − θ) = sin θ = c, for instance by the subtraction formula.",
          "Concludes by uniqueness that arccos c = π/2 − θ, which rearranges to the result.",
        ],
      },
    },
    {
      key: "three-arctans",
      rung: "stretch",
      prompt: (
        <p>
          Find <M>{"\\arctan 1 + \\arctan 2 + \\arctan 3"}</M> exactly, in terms of π. (Use the addition formula for tangent,
          and think about which range each angle lies in.)
        </p>
      ),
      answer: { kind: "expression", value: "pi", variables: [] },
    },
  ],

  teachBack:
    "Explain to a friend why sin x = 1/2 has infinitely many solutions, and how arcsin chooses just one of them.",

  glimpse: (
    <p>
      Next, the laws of sines and cosines, which use these functions to solve any triangle. In Calculus, the derivative of
      arctan turns out to be the simple <M>{"\\tfrac{1}{1+x^2}"}</M>, which is where Madhava&rsquo;s series comes from. In
      Complex Analysis, the same problem of choosing one answer among many returns for the logarithm, and leads to the idea
      of a branch.
    </p>
  ),
};
