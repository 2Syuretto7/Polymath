import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GreenGridViz } from "@/components/viz/GreenGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.7.1",
  minutes: 90,
  links: {
    revisits: ["m5.6.2", "m5.6.1", "m5.5.2"],
    foreshadows: ["m5.7.2", "m13.2.2", "m26.6.2"],
  },

  puzzle: (
    <>
      <p>
        A planimeter is a mechanical instrument that measures the area of a region on a map. You trace round the boundary
        with a pointer, and a little wheel records the area inside. The instrument never visits the interior at all. How
        can a walk round the edge know the area within? The answer is a theorem relating an integral round a closed curve to
        a double integral over the region it encloses.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut the square into cells and add up the circulation of the field round each cell, anticlockwise. Compare the sum with
        the circulation round the outer edge, and click a cell to see its own share.
      </p>
      <GreenGridViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Green's theorem">
        <p>
          Let <M>{"D"}</M> be a bounded region in the plane whose boundary <M>{"C"}</M> is a piecewise smooth closed curve,
          traversed anticlockwise, so that <M>{"D"}</M> lies on the left. If <M>{"P"}</M> and <M>{"Q"}</M> have continuous
          partial derivatives on an open set containing <M>{"D"}</M>, then
        </p>
        <MD>{"\\oint_C P\\, dx + Q\\, dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA."}</MD>
      </Theorem>

      <Proof>
        <p>
          We prove it for a rectangle <M>{"D = [a, b] \\times [c, d]"}</M>. By the fundamental theorem of calculus,
        </p>
        <MD>{"\\iint_D -\\frac{\\partial P}{\\partial y}\\, dA = \\int_a^b \\big( P(x, c) - P(x, d) \\big)\\, dx."}</MD>
        <p>
          On the right, <M>{"\\int_a^b P(x, c)\\, dx"}</M> is the integral of <M>{"P\\, dx"}</M> along the bottom edge,
          traversed rightwards, and <M>{"-\\int_a^b P(x, d)\\, dx"}</M> is the integral along the top edge, traversed
          leftwards. On the vertical edges <M>{"dx = 0"}</M>. So this is <M>{"\\oint_C P\\, dx"}</M>. In the same way{" "}
          <M>{"\\iint_D \\partial Q/\\partial x\\, dA = \\oint_C Q\\, dy"}</M>. For a region made of many small rectangles,
          the theorem holds on each, and the integrals along shared inner edges cancel, since each is traversed once in each
          direction. General regions follow by approximation.
        </p>
      </Proof>

      <Example title="area from the boundary">
        <p>
          Choosing <M>{"P = -y/2"}</M> and <M>{"Q = x/2"}</M> gives <M>{"Q_x - P_y = 1"}</M>, so
        </p>
        <MD>{"\\text{area}(D) = \\tfrac{1}{2} \\oint_C x\\, dy - y\\, dx."}</MD>
        <p>
          For the ellipse <M>{"x = a\\cos t"}</M>, <M>{"y = b\\sin t"}</M>, the integrand is{" "}
          <M>{"\\tfrac{1}{2}(ab\\cos^2 t + ab\\sin^2 t) = \\tfrac{1}{2}ab"}</M>, and the area is <M>{"\\pi ab"}</M>. This is
          the principle of the planimeter.
        </p>
      </Example>

      <Remark title="what the integrand means">
        <p>
          The quantity <M>{"Q_x - P_y"}</M> is the <strong>circulation density</strong> of the field, its scalar curl: the
          circulation round a tiny loop about a point, divided by the area it encloses. Green&rsquo;s theorem says that the
          total circulation round the edge is the sum of all the little circulations inside. It explains the cross-partials
          test: if <M>{"Q_x = P_y"}</M> throughout a region with no holes, every loop has zero circulation. If <M>{"D"}</M>{" "}
          has holes, the boundary includes the inner curves, traversed clockwise. A second form of the theorem, for flux,
          says <M>{"\\oint_C F \\cdot n\\, ds = \\iint_D (P_x + Q_y)\\, dA"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "disc",
      rung: "check",
      prompt: (
        <p>
          Use Green&rsquo;s theorem to find <M>{"\\oint_C -y\\, dx + x\\, dy"}</M> round the unit circle, anticlockwise. Give a
          decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 2 * Math.PI, tolerance: 0.01 },
    },
    {
      key: "rect",
      rung: "check",
      prompt: <p>Find <M>{"\\oint_C x\\, dy"}</M> round the boundary of the rectangle <M>{"[0, 2] \\times [0, 3]"}</M>, anticlockwise.</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "ellipse",
      rung: "apply",
      prompt: (
        <p>
          Use <M>{"\\tfrac{1}{2}\\oint x\\, dy - y\\, dx"}</M> to find the area inside <M>{"x = 3\\cos t"}</M>,{" "}
          <M>{"y = 2\\sin t"}</M>. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 6 * Math.PI, tolerance: 0.02 },
    },
    {
      key: "square",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\oint_C y^2\\, dx + 3xy\\, dy"}</M> round the unit square <M>{"[0, 1]^2"}</M>, anticlockwise.
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "cubes",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\oint_C -y^3\\, dx + x^3\\, dy"}</M> round the unit circle, anticlockwise. Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: (3 * Math.PI) / 2, tolerance: 0.005 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove that <M>{"\\oint_C P\\, dx = -\\iint_D P_y\\, dA"}</M> when <M>{"D"}</M> is the rectangle{" "}
          <M>{"[a, b] \\times [c, d]"}</M> and <M>{"C"}</M> its boundary, anticlockwise.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Integrates −P_y in y first, using the fundamental theorem of calculus, to get ∫ₐᵇ (P(x, c) − P(x, d)) dx.",
          "Matches this with the line integral: the bottom edge gives ∫ P(x, c) dx, the top edge, traversed leftwards, gives −∫ P(x, d) dx, and the vertical edges give 0 since dx = 0.",
        ],
      },
    },
    {
      key: "area",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"\\oint_C x\\, dy"}</M>, <M>{"-\\oint_C y\\, dx"}</M> and{" "}
          <M>{"\\tfrac{1}{2}\\oint_C x\\, dy - y\\, dx"}</M> all equal the area of <M>{"D"}</M>. Use one of them to find the
          area of a disc of radius <M>{"a"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Applies Green's theorem to each: the integrand Q_x − P_y is 1 in every case, so each equals ∬_D 1 dA.",
          "Computes one for x = a cos t, y = a sin t, for example ∮ x dy = ∫₀^{2π} a² cos² t dt = πa².",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Green's theorem says, why it is true for a rectangle and why inner edges cancel, how it gives area from the boundary, and what the integrand means.",

  glimpse: (
    <p>
      The next lesson lifts Green&rsquo;s theorem into space: Stokes&rsquo; theorem relates the circulation round a curve to the
      flux of the curl through any surface it bounds. Complex analysis will use Green&rsquo;s theorem in its first proof of
      Cauchy&rsquo;s theorem.
    </p>
  ),
};
