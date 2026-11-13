import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ConformalGridViz } from "@/components/viz/ConformalGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.6.1",
  minutes: 80,
  links: {
    revisits: ["m13.1.3", "m13.5.3", "m13.5.4"],
    foreshadows: ["m13.6.2", "m13.6.4", "m17.5.1"],
  },

  puzzle: (
    <>
      <p>
        Mercator&rsquo;s map of the world stretches Greenland to the size of Africa, yet sailors loved it: a ship holding a
        fixed compass bearing follows a straight line on the map. The map distorts sizes but keeps angles. Which maps of the
        plane keep every angle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Map a square grid by each function and watch the two thick lines through the chosen point.</p>
      <ConformalGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conformal map">
        <p>
          A map <M>{"f"}</M> on an open set is <strong>conformal</strong> at <M>{"z_0"}</M> if it preserves the angle, with
          its orientation, between any two smooth curves crossing at <M>{"z_0"}</M>. A conformal map of a region is one that
          is conformal at every point.
        </p>
      </Definition>

      <Theorem title="holomorphic maps preserve angles">
        <p>
          If <M>{"f"}</M> is holomorphic and <M>{"f'(z_0) \\ne 0"}</M>, then <M>{"f"}</M> is conformal at <M>{"z_0"}</M>.
          Conversely, a map with continuous partial derivatives that is conformal at every point of a region, with non-zero
          Jacobian, is holomorphic there.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\gamma"}</M> be a smooth curve with <M>{"\\gamma(0) = z_0"}</M> and <M>{"\\gamma'(0) \\ne 0"}</M>. By the
          chain rule
        </p>
        <MD>{"(f \\circ \\gamma)'(0) = f'(z_0)\\, \\gamma'(0)."}</MD>
        <p>
          So every tangent direction is multiplied by the same non-zero number <M>{"f'(z_0)"}</M>: rotated by{" "}
          <M>{"\\arg f'(z_0)"}</M> and stretched by <M>{"|f'(z_0)|"}</M>. The angle between two tangent directions is
          unchanged. For the converse, a linear map of the plane that preserves angles and orientation is a rotation with a
          scaling, which is multiplication by a complex number; that is the Cauchy-Riemann condition.
        </p>
      </Proof>

      <Example title="critical points">
        <p>
          At a zero of <M>{"f'"}</M> of order <M>{"k - 1"}</M>, the map looks like <M>{"w_0 + c(z - z_0)^k"}</M>, so angles at{" "}
          <M>{"z_0"}</M> are multiplied by <M>{"k"}</M>. For <M>{"z^2"}</M> at 0 the right angle between the axes opens to a
          straight angle: the positive real and imaginary axes go to the positive and negative real axes.
        </p>
      </Example>

      <Remark title="the standard maps">
        <p>
          The exponential sends horizontal lines to rays from 0 and vertical segments to arcs of circles, so it carries the
          strip <M>{"0 < \\operatorname{Im} z < \\pi"}</M> onto the upper half-plane. The power <M>{"z^{\\alpha}"}</M>, with a
          branch of the logarithm, opens a sector of angle <M>{"\\theta"}</M> into a sector of angle <M>{"\\alpha\\theta"}</M>.
          The Joukowski map <M>{"z + 1/z"}</M> sends circles about 0 to ellipses and was used to design aerofoils. A conformal
          bijection between two regions transports problems about harmonic functions from one to the other.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>At which point does <M>{"f(z) = z^2 + 2z"}</M> fail to be conformal?</p>,
      answer: { kind: "choice", options: ["z = 0", "z = −1", "z = −2", "Nowhere"], correct: [1] },
    },
    {
      key: "scale",
      rung: "check",
      prompt: <p>Near <M>{"z_0 = 1"}</M>, by what factor does <M>{"f(z) = z^3"}</M> stretch small lengths?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "rot",
      rung: "apply",
      prompt: <p>By what angle, in degrees, does <M>{"f(z) = z^2"}</M> rotate small curves through <M>{"z_0 = i"}</M>? Give the answer between 0 and 360.</p>,
      answer: { kind: "numeric", value: 90, tolerance: 0.5 },
    },
    {
      key: "double",
      rung: "apply",
      prompt: <p>Two curves meet at 0 at an angle of 30°. At what angle, in degrees, do their images under <M>{"z^3"}</M> meet at 0?</p>,
      answer: { kind: "numeric", value: 90, tolerance: 0.5 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>What does <M>{"e^z"}</M> do to the vertical segment <M>{"\\{1 + iy : 0 \\le y \\le \\pi\\}"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "It maps it to a segment of a ray.",
          "It maps it to the upper half of the circle of radius e about 0.",
          "It maps it to the whole unit circle.",
          "It maps it to a point.",
        ],
        correct: [1],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Show that if <M>{"f"}</M> is holomorphic with <M>{"f'(z_0) \\ne 0"}</M>, then <M>{"f"}</M> preserves the angle between any two smooth curves through <M>{"z_0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the chain rule: the tangent to f ∘ γ at z₀ is f′(z₀) times the tangent to γ.",
          "Notes that multiplying by a non-zero complex number rotates every direction by the same angle and scales lengths.",
          "Concludes that the angle between the two tangent directions is unchanged.",
        ],
      },
    },
    {
      key: "conj",
      rung: "stretch",
      prompt: <p>The map <M>{"z \\mapsto \\bar z"}</M> keeps the size of every angle. Why is it not called conformal, and how does this fit with its failure to be holomorphic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that conjugation reverses the orientation of angles.",
          "Links this to failing the Cauchy-Riemann equations: its derivative is a reflection, not multiplication by a complex number.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a conformal map is, why a holomorphic map with non-zero derivative preserves angles, what happens to angles at a critical point, and how the exponential maps a strip to a half-plane.",

  glimpse: (
    <p>
      The next lesson studies the Möbius transformations, the conformal bijections of the extended plane. Later lessons use
      them to describe every conformal self-map of the disc and to reach the Riemann mapping theorem.
    </p>
  ),
};
