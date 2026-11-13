import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SquareMapViz } from "@/components/viz/SquareMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.4.1",
  minutes: 85,
  links: {
    revisits: ["m5.2.2", "m5.2.3", "m2.4.5"],
    foreshadows: ["m5.4.2", "m5.4.3", "m12.4.1"],
  },

  puzzle: (
    <>
      <p>
        Polar coordinates describe a point by its distance <M>{"r"}</M> from the origin and its angle <M>{"\\theta"}</M>.
        Given a point in ordinary coordinates, can we always recover <M>{"r"}</M> and <M>{"\\theta"}</M> smoothly? Almost:
        near most points, yes, but at the origin the angle is meaningless, and going round once returns the same point with
        a different angle. When can a map between spaces of the same dimension be undone, at least near a point? In one
        variable, a nonzero derivative is enough. What replaces it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The squaring map <M>{"F(x, y) = (x^2 - y^2, 2xy)"}</M> doubles angles and squares distances. Move the point{" "}
        <M>{"p"}</M> and watch the image of a small circle around it. Bring <M>{"p"}</M> close to the origin.
      </p>
      <SquareMapViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the inverse function theorem">
        <p>
          Let <M>{"F"}</M> map an open set in <M>{"\\mathbb{R}^n"}</M> to <M>{"\\mathbb{R}^n"}</M>, with continuous first
          partial derivatives, and suppose <M>{"\\det DF(a) \\ne 0"}</M>. Then there are open sets <M>{"U \\ni a"}</M> and{" "}
          <M>{"V \\ni F(a)"}</M> such that <M>{"F"}</M> maps <M>{"U"}</M> one-to-one onto <M>{"V"}</M>, and its inverse{" "}
          <M>{"F^{-1} : V \\to U"}</M> also has continuous first partials, with
        </p>
        <MD>{"D(F^{-1})(F(x)) = \\big(DF(x)\\big)^{-1}."}</MD>
      </Theorem>

      <Proof>
        <p>
          We prove only the formula, assuming the inverse <M>{"G = F^{-1}"}</M> exists and is differentiable. Since{" "}
          <M>{"G(F(x)) = x"}</M>, the chain rule gives <M>{"DG(F(x))\\,DF(x) = I"}</M>, so{" "}
          <M>{"DG(F(x)) = DF(x)^{-1}"}</M>. This also shows that <M>{"\\det DF(x) \\ne 0"}</M> is necessary for a
          differentiable inverse. The existence of the inverse is the hard part. One shows that the map{" "}
          <M>{"x \\mapsto x - DF(a)^{-1}(F(x) - y)"}</M> shrinks distances near <M>{"a"}</M>, so by the contraction mapping
          theorem it has exactly one fixed point, which is the unique <M>{"x"}</M> near <M>{"a"}</M> with{" "}
          <M>{"F(x) = y"}</M>. The details are in the analysis course.
        </p>
      </Proof>

      <Example title="polar coordinates">
        <p>
          For <M>{"P(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)"}</M>,
        </p>
        <MD>{"DP = \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}, \\qquad \\det DP = r."}</MD>
        <p>
          So wherever <M>{"r \\ne 0"}</M>, the map can be inverted near the point: polar coordinates are a valid local
          coordinate system away from the origin.
        </p>
      </Example>

      <Remark title="local, not global">
        <p>
          The theorem is local. The map <M>{"(x, y) \\mapsto (e^x\\cos y, e^x\\sin y)"}</M> has Jacobian determinant{" "}
          <M>{"e^{2x}"}</M>, never zero, so it is invertible near every point. Yet it is not one-to-one, since adding{" "}
          <M>{"2\\pi"}</M> to <M>{"y"}</M> changes nothing. A nonzero determinant everywhere gives local inverses, not a
          global one. In one variable the situation is simpler, since a function with nonzero derivative on an interval is
          monotone.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "polar",
      rung: "check",
      prompt: <p>What is the Jacobian determinant of the polar coordinate map at <M>{"r = 2"}</M>, <M>{"\\theta = 1"}</M>?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "square",
      rung: "check",
      prompt: <p>At which point does the squaring map <M>{"(x^2 - y^2, 2xy)"}</M> fail the hypothesis of the theorem?</p>,
      answer: {
        kind: "choice",
        options: ["(1, 0)", "(0, 0)", "(0, 1)", "Nowhere"],
        correct: [1],
      },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"F(x, y) = (x + y^2, y)"}</M>. Its Jacobian at <M>{"(0, 1)"}</M> is{" "}
          <M>{"\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}"}</M>. What is the top right entry of the Jacobian of{" "}
          <M>{"F^{-1}"}</M> at <M>{"F(0, 1) = (1, 1)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "exp",
      rung: "apply",
      prompt: <p>The map <M>{"(e^x\\cos y, e^x\\sin y)"}</M> has nonzero Jacobian determinant everywhere. Which statements are true? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "It has a differentiable inverse near every point.",
          "It is one-to-one on the whole plane.",
          "It is not one-to-one, since (x, y) and (x, y + 2π) have the same image.",
          "Its Jacobian determinant is e²ˣ.",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: (
        <p>
          The map <M>{"x \\mapsto x^3"}</M> on <M>{"\\mathbb{R}"}</M> has derivative 0 at the origin. Is it one-to-one near
          0, and is its inverse differentiable there?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Not one-to-one, and no inverse.",
          "One-to-one, but the inverse, the cube root, is not differentiable at 0.",
          "One-to-one with a differentiable inverse.",
          "Not one-to-one, but with a differentiable inverse.",
        ],
        correct: [1],
      },
    },
    {
      key: "nec",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"F"}</M> has a differentiable inverse <M>{"G"}</M> near <M>{"a"}</M>, then{" "}
          <M>{"\\det DF(a) \\ne 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Applies the chain rule to G(F(x)) = x to get DG(F(a)) DF(a) = I.",
          "Takes determinants: det DG · det DF = 1, so det DF(a) ≠ 0.",
        ],
      },
    },
    {
      key: "spherical",
      rung: "stretch",
      prompt: (
        <p>
          Spherical coordinates are <M>{"(\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi)"}</M>.
          Compute the Jacobian determinant and say where the inverse function theorem fails to apply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Computes the determinant as ρ² sin φ, up to sign depending on the order of variables.",
          "Concludes the theorem fails where ρ = 0 or sin φ = 0, that is at the origin and on the z-axis.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the inverse function theorem says, why a nonzero Jacobian determinant is needed, how to compute the derivative of the inverse, and why the theorem is only local.",

  glimpse: (
    <p>
      The next lesson draws a twin result from this one: when an equation <M>{"F(x, y) = 0"}</M> can be solved for{" "}
      <M>{"y"}</M> as a function of <M>{"x"}</M>.
    </p>
  ),
};
