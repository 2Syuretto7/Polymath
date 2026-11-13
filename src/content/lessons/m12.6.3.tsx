import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CapStokesViz } from "@/components/viz/CapStokesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.6.3",
  minutes: 95,
  links: {
    revisits: ["m5.7.1", "m5.7.2", "m12.5.3"],
    foreshadows: ["m26.6.1", "m26.5.4", "m25.1.2"],
  },

  puzzle: (
    <>
      <p>
        Stretch a soap film across a wire loop. The flow of a swirling field through the film can be computed from the wire
        alone, whatever shape the film takes. The fundamental theorem of calculus, Green, Stokes and Gauss are all this one
        idea. What exactly is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the surface that spans the circle. The flux of curl F through it does not change.</p>
      <CapStokesViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the general Stokes theorem">
        <p>
          Let <M>{"\\omega"}</M> be a smooth <M>{"(k-1)"}</M>-form on an open set <M>{"U \\subseteq \\mathbb{R}^n"}</M> and{" "}
          <M>{"c"}</M> a smooth k-chain in <M>{"U"}</M>. Then
        </p>
        <MD>{"\\int_c d\\omega = \\int_{\\partial c} \\omega."}</MD>
      </Theorem>

      <Proof>
        <p>
          By linearity and pullback, <M>{"\\int_c d\\omega = \\int_{[0,1]^k} d(c^*\\omega)"}</M>, since{" "}
          <M>{"d"}</M> commutes with pullback. So it suffices to take <M>{"c"}</M> the identity cube and{" "}
          <M>{"\\omega = f \\, dx_1 \\wedge \\dots \\widehat{dx_i} \\dots \\wedge dx_k"}</M>, with <M>{"dx_i"}</M> omitted. Then{" "}
          <M>{"d\\omega = (-1)^{i-1} \\partial_i f \\, dx_1 \\wedge \\dots \\wedge dx_k"}</M>. Integrate first in{" "}
          <M>{"x_i"}</M> by the fundamental theorem of calculus: the result is the difference of the integrals of{" "}
          <M>{"f"}</M> over the two faces <M>{"x_i = 1"}</M> and <M>{"x_i = 0"}</M>, with sign{" "}
          <M>{"(-1)^{i-1}"}</M>. On every other face <M>{"\\omega"}</M> pulls back to 0, because some <M>{"dx_j"}</M> with{" "}
          <M>{"j \\ne i"}</M> is constant there. The signs in the definition of <M>{"\\partial"}</M> were chosen to match, so
          the two sides agree.
        </p>
      </Proof>

      <Example title="the classical theorems">
        <p>
          With <M>{"k = 1"}</M>, it is the fundamental theorem of calculus. For a region in the plane and{" "}
          <M>{"\\omega = P \\, dx + Q \\, dy"}</M>, it is Green&rsquo;s theorem. For a surface in{" "}
          <M>{"\\mathbb{R}^3"}</M> it is the classical Stokes theorem, and for a solid region and a 2-form it is the divergence
          theorem.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          If <M>{"\\partial c = 0"}</M> and <M>{"\\omega"}</M> is exact, or if <M>{"c"}</M> is a boundary and{" "}
          <M>{"\\omega"}</M> is closed, the integral vanishes. So integration pairs closed forms modulo exact ones with chains
          without boundary modulo boundaries: de Rham cohomology with homology. With partitions of unity the theorem extends
          to compact oriented manifolds with boundary, where it is the central result of integration on manifolds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "green",
      rung: "check",
      prompt: <p>Use Green&rsquo;s theorem to compute ∮(−y dx + x dy) round the unit circle, to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 6.283, tolerance: 0.002 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>The fundamental theorem of calculus is the general Stokes theorem with k equal to what?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "area",
      rung: "apply",
      prompt: <p>By Green, ½∮(x dy − y dx) is the area enclosed. What does it give for the ellipse x = 3 cos t, y = 2 sin t, to 2 decimal places?</p>,
      answer: { kind: "numeric", value: 18.85, tolerance: 0.01 },
    },
    {
      key: "closed",
      rung: "apply",
      prompt: <p>What is the flux of curl F through the whole unit sphere?</p>,
      answer: {
        kind: "choice",
        options: ["0, since the sphere has no boundary", "4π", "It depends on F", "1"],
        correct: [0],
      },
    },
    {
      key: "div",
      rung: "apply",
      prompt: <p>Which classical theorem is Stokes for a 2-form on a solid region in ℝ³?</p>,
      answer: { kind: "choice", options: ["The divergence theorem", "Green's theorem", "The fundamental theorem of calculus", "The mean value theorem"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Stokes for k = 1: if c is a curve from p to q and f a function, then ∫_c df = f(q) − f(p).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Pulls back: c*(df) = (f ∘ c)′(t) dt.",
          "Applies the fundamental theorem of calculus on [0, 1].",
          "Notes ∂c = q − p, so the right side is f(q) − f(p).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Stokes to explain why the integral of a closed 1-form round a loop depends only on how many times the loop winds round each hole.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes two loops that differ by a boundary give equal integrals, since ∫ over a boundary of a closed form is 0.",
          "Connects this to deforming loops without crossing holes.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the general Stokes theorem ∫_c dω = ∫_∂c ω, the idea of its proof on a cube, and how Green, Stokes, Gauss and the fundamental theorem of calculus are all special cases.",

  glimpse: (
    <p>
      This completes the course on metric spaces and analysis in ℝⁿ. On manifolds, the same theorem holds with partitions
      of unity, and it links forms to topology through de Rham cohomology.
    </p>
  ),
};
