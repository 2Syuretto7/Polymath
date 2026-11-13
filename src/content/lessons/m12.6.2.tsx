import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ChainIntegralViz } from "@/components/viz/ChainIntegralViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.6.2",
  minutes: 90,
  links: {
    revisits: ["m5.6.1", "m5.6.2", "m12.6.1"],
    foreshadows: ["m12.6.3", "m26.6.1", "m25.1.1"],
  },

  puzzle: (
    <>
      <p>
        Walking from one side of a lake to the other, you can go round the north shore or the south. For some quantities the
        total along the way depends on the route; for others it does not. And a loop round the lake can give a non-zero answer
        even when every small loop gives zero. How do forms and chains keep track of this?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a form and a path, and compare the integrals along different routes with the same ends.</p>
      <ChainIntegralViz />
    </>
  ),

  theory: (
    <>
      <Definition title="singular cubes and chains">
        <p>
          A <strong>singular k-cube</strong> in <M>{"U"}</M> is a smooth map <M>{"c : [0, 1]^k \\to U"}</M>. A{" "}
          <strong>k-chain</strong> is a formal sum <M>{"\\sum a_i c_i"}</M> of k-cubes with integer coefficients, such as{" "}
          <M>{"c_1 - c_2"}</M>, which traverses <M>{"c_2"}</M> backwards.
        </p>
      </Definition>

      <Definition title="integration">
        <p>
          For a k-form <M>{"\\omega"}</M> and a k-cube <M>{"c"}</M>, pull back and integrate over the cube:
        </p>
        <MD>{"\\int_c \\omega = \\int_{[0,1]^k} c^*\\omega, \\qquad \\int_{\\sum a_i c_i} \\omega = \\sum a_i \\int_{c_i} \\omega."}</MD>
        <p>
          For a 1-form <M>{"P \\, dx + Q \\, dy"}</M> and a curve <M>{"c(t) = (x(t), y(t))"}</M> this is the familiar{" "}
          <M>{"\\int_0^1 (P x' + Q y') \\, dt"}</M>. By change of variables, it does not depend on an orientation-preserving
          reparametrisation.
        </p>
      </Definition>

      <Theorem title="exact forms on curves">
        <p>
          If <M>{"\\omega = df"}</M> and <M>{"c"}</M> runs from <M>{"p"}</M> to <M>{"q"}</M>, then{" "}
          <M>{"\\int_c df = f(q) - f(p)"}</M>. In particular the integral of an exact form round a closed curve is 0.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"c^*(df) = (f \\circ c)'(t) \\, dt"}</M> by the chain rule, so the integral is{" "}
          <M>{"f(c(1)) - f(c(0))"}</M> by the fundamental theorem of calculus.
        </p>
      </Proof>

      <Example title="a closed form that is not exact">
        <p>On the punctured plane, let</p>
        <MD>{"\\omega = \\frac{-y \\, dx + x \\, dy}{x^2 + y^2}."}</MD>
        <p>
          Then <M>{"d\\omega = 0"}</M>, but round the unit circle <M>{"\\int \\omega = 2\\pi \\ne 0"}</M>, so{" "}
          <M>{"\\omega"}</M> is not exact. Locally <M>{"\\omega = d\\theta"}</M>, but the angle <M>{"\\theta"}</M> cannot be
          defined continuously all the way round the origin.
        </p>
      </Example>

      <Remark title="boundaries">
        <p>
          The boundary of a k-cube is a (k − 1)-chain: the alternating sum of its faces. For a square it is the four edges
          traversed anticlockwise. One checks <M>{"\\partial \\partial = 0"}</M>, mirroring <M>{"d^2 = 0"}</M>. This duality
          between <M>{"\\partial"}</M> and <M>{"d"}</M> is made exact by the general Stokes theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "line",
      rung: "check",
      prompt: <p>Integrate x dy along the segment from (0, 0) to (1, 1), parametrised by (t, t).</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "exact",
      rung: "check",
      prompt: <p>What is ∫ d(xy) along any curve from (1, 2) to (3, 4)?</p>,
      answer: { kind: "numeric", value: 10, tolerance: 0 },
    },
    {
      key: "semi",
      rung: "apply",
      prompt: <p>What is ∫(−y dx + x dy) along the upper unit semicircle from (1, 0) to (−1, 0), to 3 decimal places?</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: <p>If ∫ ω over c₁ is 4 and over c₂ is 1.5, what is ∫ ω over the chain 2c₁ − c₂?</p>,
      answer: { kind: "numeric", value: 6.5, tolerance: 0.001 },
    },
    {
      key: "punct",
      rung: "apply",
      prompt: <p>Why is (−y dx + x dy)/(x² + y²) closed but not exact on the punctured plane?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its exterior derivative is 0, but its integral round the unit circle is 2π, not 0.",
          "It is not smooth anywhere.",
          "Its integral round every loop is 0.",
          "It is exact; it equals d(x² + y²).",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the integral of a 1-form along a curve does not change under an increasing reparametrisation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the reparametrised curve as c ∘ φ with φ increasing from [0, 1] onto [0, 1].",
          "Uses the chain rule (c ∘ φ)′ = c′(φ)φ′.",
          "Applies the substitution s = φ(t) to show the integrals agree.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What is the integral of (−y dx + x dy)/(x² + y²) round a loop that winds twice round the origin? Round a loop that does not enclose it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says 4π for winding twice, and 0 for a loop not enclosing the origin.",
          "Interprets the integral divided by 2π as the winding number.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what chains are, how to integrate a form over a cube by pulling back, why exact forms integrate to zero round loops, and why the angle form on the punctured plane is closed but not exact.",

  glimpse: (
    <p>
      The next lesson proves the general Stokes theorem, ∫_c dω = ∫_∂c ω. In algebraic topology, chains and boundaries become
      homology, which detects holes like the one at the origin.
    </p>
  ),
};
