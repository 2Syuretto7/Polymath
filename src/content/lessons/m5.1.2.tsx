import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CrossProductViz } from "@/components/viz/CrossProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.1.2",
  minutes: 80,
  links: {
    revisits: ["m5.1.1", "m3.1.3", "m3.1.2"],
    foreshadows: ["m5.1.3", "m5.7.4", "m16.2.2"],
  },

  puzzle: (
    <>
      <p>
        Push a door near its handle and it swings easily; push near the hinge with the same force and it barely moves. The
        turning effect, the torque, depends on the force, on where it is applied, and on the angle between them, and it
        acts about an axis perpendicular to both. Engineers, physicists and computer graphics programmers all need to
        build, from two vectors in space, a third vector perpendicular to both. In three dimensions, and almost nowhere
        else, there is a neat way to do it.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the vector <M>{"v"}</M> and turn the view. Watch the cross product stay perpendicular to the shaded
        parallelogram, and compare its length with the parallelogram&rsquo;s area.
      </p>
      <CrossProductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the cross product">
        <p>For <M>{"u = (u_1, u_2, u_3)"}</M> and <M>{"v = (v_1, v_2, v_3)"}</M> in <M>{"\\mathbb{R}^3"}</M>,</p>
        <MD>{"u \\times v = (u_2v_3 - u_3v_2,\; u_3v_1 - u_1v_3,\; u_1v_2 - u_2v_1)."}</MD>
        <p>
          A way to remember it is the formal determinant with rows <M>{"(e_1, e_2, e_3)"}</M>, <M>{"u"}</M> and{" "}
          <M>{"v"}</M>. It is <strong>anticommutative</strong>, <M>{"v \\times u = -(u \\times v)"}</M>, so{" "}
          <M>{"u \\times u = 0"}</M>; it is linear in each argument; and it is not associative.
        </p>
      </Definition>

      <Theorem title="geometry of the cross product">
        <p>
          <M>{"u \\times v"}</M> is perpendicular to both <M>{"u"}</M> and <M>{"v"}</M>, and
        </p>
        <MD>{"\\|u \\times v\\| = \\|u\\|\\,\\|v\\| \\sin\\theta,"}</MD>
        <p>
          where <M>{"\\theta"}</M> is the angle between them: the area of the parallelogram they span. Its direction is
          given by the right-hand rule.
        </p>
      </Theorem>

      <Proof>
        <p>
          Perpendicularity is a direct expansion:{" "}
          <M>{"u \\cdot (u \\times v) = u_1(u_2v_3 - u_3v_2) + u_2(u_3v_1 - u_1v_3) + u_3(u_1v_2 - u_2v_1) = 0"}</M>, since
          the six terms cancel in pairs; similarly for <M>{"v"}</M>. Expanding both sides also proves{" "}
          <strong>Lagrange&rsquo;s identity</strong>,{" "}
          <M>{"\\|u \\times v\\|^2 = \\|u\\|^2\\|v\\|^2 - (u \\cdot v)^2"}</M>. Substituting{" "}
          <M>{"u \\cdot v = \\|u\\|\\,\\|v\\|\\cos\\theta"}</M> gives{" "}
          <M>{"\\|u\\|^2\\|v\\|^2(1 - \\cos^2\\theta) = \\|u\\|^2\\|v\\|^2\\sin^2\\theta"}</M>.
        </p>
      </Proof>

      <Example title="planes and volumes">
        <p>
          The plane through <M>{"P = (1, 0, 0)"}</M>, <M>{"Q = (0, 2, 0)"}</M> and <M>{"R = (0, 0, 3)"}</M> has normal{" "}
          <M>{"(Q - P) \\times (R - P) = (-1, 2, 0) \\times (-1, 0, 3) = (6, 3, 2)"}</M>, so its equation is{" "}
          <M>{"6x + 3y + 2z = 6"}</M>. The <strong>scalar triple product</strong> <M>{"w \\cdot (u \\times v)"}</M> equals
          the determinant of the matrix with rows <M>{"u, v, w"}</M>, and its absolute value is the volume of the
          parallelepiped they span.
        </p>
      </Example>

      <Remark title="why three dimensions">
        <p>
          In <M>{"\\mathbb{R}^n"}</M> the directions perpendicular to two independent vectors form a space of dimension{" "}
          <M>{"n - 2"}</M>. Only when <M>{"n = 3"}</M> is that a single line, so only then does a pair of vectors pick out
          one perpendicular direction. (A similar product exists in seven dimensions, related to the octonions, but it
          lacks some of these properties.) The general tool, valid in every dimension, is the wedge product of differential
          forms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "compute",
      rung: "check",
      prompt: <p>Compute (1, 2, 3) × (4, 5, 6). What is its second component?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "anti",
      rung: "check",
      prompt: <p>Which properties does the cross product have? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["v × u = −(u × v)", "u × u = 0", "u × v = v × u", "(u × v) × w = u × (v × w) always"],
        correct: [0, 1],
      },
    },
    {
      key: "area",
      rung: "apply",
      prompt: <p>Find the area of the parallelogram spanned by (1, 0, 0) and (1, 2, 2). Give a decimal.</p>,
      answer: { kind: "numeric", value: 2 * Math.SQRT2, tolerance: 0.002 },
    },
    {
      key: "triangle",
      rung: "apply",
      prompt: <p>Find the area of the triangle with vertices (0, 0, 0), (3, 0, 0) and (0, 4, 0).</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "volume",
      rung: "apply",
      prompt: <p>Find the volume of the parallelepiped spanned by (1, 0, 0), (0, 2, 0) and (1, 1, 3).</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "perp",
      rung: "prove",
      prompt: <p>Prove from the formula that <M>{"u \\times v"}</M> is perpendicular to <M>{"v"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes out v · (u × v) = v₁(u₂v₃ − u₃v₂) + v₂(u₃v₁ − u₁v₃) + v₃(u₁v₂ − u₂v₁).",
          "Shows the terms cancel in pairs, so the dot product is 0.",
        ],
      },
    },
    {
      key: "zero",
      rung: "stretch",
      prompt: <p>Prove that <M>{"u \\times v = 0"}</M> if and only if <M>{"u"}</M> and <M>{"v"}</M> are linearly dependent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If one is a multiple of the other, say v = tu, uses linearity and u × u = 0 to get 0 (and handles u = 0).",
          "Conversely uses Lagrange's identity: u × v = 0 gives (u · v)² = ‖u‖²‖v‖², equality in Cauchy–Schwarz, so the vectors are dependent.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the cross product of two vectors in space is defined, why it is perpendicular to both, why its length is the area of a parallelogram, and why it only works so neatly in three dimensions.",

  glimpse: (
    <p>
      The next lesson sets vectors in motion: a curve in space as a moving point, with a velocity vector at each moment.
    </p>
  ),
};
