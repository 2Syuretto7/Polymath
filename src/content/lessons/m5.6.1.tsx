import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WorkPathViz } from "@/components/viz/WorkPathViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.6.1",
  minutes: 80,
  links: {
    revisits: ["m5.1.3", "m2.10.2", "m2.10.3"],
    foreshadows: ["m5.6.2", "m5.7.1", "m13.2.1"],
  },

  puzzle: (
    <>
      <p>
        A boat crosses a lake on which a wind is blowing, a different strength and direction at different places. The
        work the wind does on the boat is force times distance, but only the part of the force along the boat&rsquo;s
        course counts, and the force keeps changing. Does the total depend only on where the boat starts and finishes, or
        also on the route it takes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The field <M>{"F = (-y, x)"}</M> swirls anticlockwise round the origin. Move a point along each path from{" "}
        <M>{"(1, 0)"}</M> to <M>{"(0, 1)"}</M>, and compare the total work.
      </p>
      <WorkPathViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the line integral of a function">
        <p>
          Let <M>{"C"}</M> be a curve with a parametrisation <M>{"r : [a, b] \\to \\mathbb{R}^n"}</M> that has a
          continuous, nonzero derivative. For a continuous function <M>{"f"}</M>,
        </p>
        <MD>{"\\int_C f\\, ds = \\int_a^b f(r(t))\\, |r'(t)|\\, dt."}</MD>
        <p>
          Here <M>{"ds = |r'(t)|\\, dt"}</M> is the element of arc length. With <M>{"f = 1"}</M> this is the length of{" "}
          <M>{"C"}</M>; with <M>{"f"}</M> a density, it is the mass of a wire.
        </p>
      </Definition>

      <Definition title="the line integral of a vector field">
        <p>
          For a continuous vector field <M>{"F"}</M>,
        </p>
        <MD>{"\\int_C F \\cdot dr = \\int_a^b F(r(t)) \\cdot r'(t)\\, dt = \\int_C F \\cdot T\\, ds,"}</MD>
        <p>
          where <M>{"T = r'/|r'|"}</M> is the unit tangent. If <M>{"F"}</M> is a force, this is the work it does along{" "}
          <M>{"C"}</M>. In the plane, with <M>{"F = (P, Q)"}</M>, it is often written <M>{"\\int_C P\\, dx + Q\\, dy"}</M>.
        </p>
      </Definition>

      <Theorem title="parametrisation and direction">
        <p>
          The value of <M>{"\\int_C F \\cdot dr"}</M> does not change if <M>{"C"}</M> is reparametrised in the same
          direction, and changes sign if the direction is reversed. The value of <M>{"\\int_C f\\, ds"}</M> does not depend
          on the direction at all.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\tilde r(u) = r(\\varphi(u))"}</M> with <M>{"\\varphi : [c, d] \\to [a, b]"}</M> increasing. Then{" "}
          <M>{"\\tilde r'(u) = r'(\\varphi(u))\\varphi'(u)"}</M>, and the substitution <M>{"t = \\varphi(u)"}</M> turns{" "}
          <M>{"\\int_c^d F(\\tilde r(u)) \\cdot r'(\\varphi(u))\\varphi'(u)\\, du"}</M> into{" "}
          <M>{"\\int_a^b F(r(t)) \\cdot r'(t)\\, dt"}</M>. If <M>{"\\varphi"}</M> is decreasing the limits swap, which
          changes the sign. For <M>{"f\\, ds"}</M> the factor is <M>{"|\\varphi'(u)|"}</M>, which absorbs the swap.
        </p>
      </Proof>

      <Example title="the swirling field">
        <p>
          For <M>{"F = (-y, x)"}</M> on the quarter circle <M>{"r(t) = (\\cos t, \\sin t)"}</M>,{" "}
          <M>{"0 \\le t \\le \\pi/2"}</M>, we have <M>{"F \\cdot r' = \\sin^2 t + \\cos^2 t = 1"}</M>, so the work is{" "}
          <M>{"\\pi/2"}</M>. On the straight line <M>{"r(t) = (1 - t, t)"}</M>, <M>{"F \\cdot r' = t + (1 - t) = 1"}</M>{" "}
          and the work is <M>{"1"}</M>. The same endpoints, different work: for this field the route matters.
        </p>
      </Example>

      <Remark title="where they appear">
        <p>
          Line integrals measure work in mechanics, the voltage round a circuit in electromagnetism, and the circulation of
          a fluid round a loop. Integrals along curves in the complex plane are the basic tool of complex analysis. The
          next lesson asks which fields, like gravity, do the same work along every route.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "length",
      rung: "check",
      prompt: <p>Use <M>{"\\int_C 1\\, ds"}</M> to find the length of <M>{"r(t) = (3t, 4t)"}</M>, <M>{"0 \\le t \\le 1"}</M>.</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "const",
      rung: "check",
      prompt: (
        <p>
          A constant force <M>{"F = (1, 2)"}</M> acts along the straight path from <M>{"(0, 0)"}</M> to{" "}
          <M>{"(3, 1)"}</M>. How much work does it do?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "wire",
      rung: "apply",
      prompt: (
        <p>
          A wire lies along <M>{"r(t) = (t, t)"}</M>, <M>{"0 \\le t \\le 1"}</M>, with density <M>{"x"}</M>. Find its mass,{" "}
          <M>{"\\int_C x\\, ds"}</M>. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: Math.SQRT2 / 2, tolerance: 0.002 },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_C F \\cdot dr"}</M> for <M>{"F = (-y, x)"}</M> once anticlockwise round the unit circle. Give a
          decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 2 * Math.PI, tolerance: 0.01 },
    },
    {
      key: "parabola",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_C F \\cdot dr"}</M> for <M>{"F = (x^2, xy)"}</M> along <M>{"r(t) = (t, t^2)"}</M>,{" "}
          <M>{"0 \\le t \\le 1"}</M>. Give a fraction or a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 11 / 15, tolerance: 0.003 },
    },
    {
      key: "reverse",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"\\tilde r(u) = r(a + b - u)"}</M> for <M>{"a \\le u \\le b"}</M>, which traces <M>{"C"}</M> backwards.
          Prove that the line integral of <M>{"F"}</M> along <M>{"\\tilde r"}</M> is minus the one along <M>{"r"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes r̃′(u) = −r′(a + b − u).",
          "Substitutes t = a + b − u, which swaps the limits, and concludes the integral changes sign.",
        ],
      },
    },
    {
      key: "speed",
      rung: "stretch",
      prompt: (
        <p>
          Explain why <M>{"\\int_C f\\, ds"}</M> does not change when <M>{"C"}</M> is traced backwards, while{" "}
          <M>{"\\int_C F \\cdot dr"}</M> does. Use the formulas, and give a physical reason.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that ds involves |r′|, which is unchanged by reversal, while F · r′ changes sign with r′.",
          "Gives a reason, such as mass of a wire not depending on direction, while a force that helps one way resists the other way.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the two kinds of line integral, what each measures, why one depends on direction and the other does not, and an example where the work depends on the path.",

  glimpse: (
    <p>
      The next lesson finds the fields for which the work depends only on the endpoints, and gives a test for them. Green&rsquo;s
      theorem then relates the work round a loop to what happens inside it.
    </p>
  ),
};
