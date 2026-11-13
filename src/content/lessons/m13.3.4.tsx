import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TriangleTestViz } from "@/components/viz/TriangleTestViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.3.4",
  minutes: 85,
  links: {
    revisits: ["m13.2.2", "m6.8.2", "m6.8.1"],
    foreshadows: ["m13.4.1", "m13.7.1", "m13.7.2"],
  },

  puzzle: (
    <>
      <p>
        The functions <M>{"\\sqrt{x^2 + 1/n}"}</M> are smooth and converge uniformly to <M>{"|x|"}</M>, which has a corner.
        On the real line, uniform limits of differentiable functions need not be differentiable. What happens to uniform limits
        of holomorphic functions? To answer, we need a test for holomorphy that survives limits.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Integrate round triangles of every position, size and orientation. Which functions always give 0?</p>
      <TriangleTestViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Morera’s theorem">
        <p>
          Let <M>{"f"}</M> be continuous on an open set <M>{"U"}</M>, and suppose{" "}
          <M>{"\\oint_{\\partial T} f \\, dz = 0"}</M> for every closed triangle <M>{"T"}</M> contained, with its interior, in{" "}
          <M>{"U"}</M>. Then <M>{"f"}</M> is holomorphic on <M>{"U"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Holomorphy is local, so work in a disc <M>{"D \\subseteq U"}</M> with centre <M>{"a"}</M>, and set{" "}
          <M>{"F(z) = \\int_{[a, z]} f"}</M>. The triangle condition gives{" "}
          <M>{"F(z + h) - F(z) = \\int_{[z, z+h]} f"}</M>, and continuity of <M>{"f"}</M> gives <M>{"F' = f"}</M>, exactly as
          in the proof of Cauchy&rsquo;s theorem. So <M>{"F"}</M> is holomorphic, hence infinitely differentiable by the Cauchy
          integral formula, and <M>{"f = F'"}</M> is holomorphic.
        </p>
      </Proof>

      <Theorem title="Weierstrass’s theorem">
        <p>
          If holomorphic functions <M>{"f_n"}</M> on <M>{"U"}</M> converge uniformly on compact subsets to <M>{"f"}</M>, then{" "}
          <M>{"f"}</M> is holomorphic, and <M>{"f_n' \\to f'"}</M> uniformly on compact subsets.
        </p>
      </Theorem>

      <Proof>
        <p>
          <M>{"f"}</M> is continuous as a uniform limit. For a triangle <M>{"T"}</M>, uniform convergence on{" "}
          <M>{"\\partial T"}</M> lets us pass to the limit:{" "}
          <M>{"\\oint_{\\partial T} f = \\lim \\oint_{\\partial T} f_n = 0"}</M> by Goursat. Morera gives holomorphy. For the
          derivatives, Cauchy&rsquo;s formula on a circle of radius <M>{"r"}</M> gives{" "}
          <M>{"|f_n'(z) - f'(z)| \\le \\sup_{\\text{circle}} |f_n - f| / r"}</M>.
        </p>
      </Proof>

      <Example title="functions built by limits">
        <p>
          Series such as <M>{"\\sum n^{-z}"}</M> converge uniformly on half-planes <M>{"\\operatorname{Re} z \\ge \\sigma > 1"}</M>,
          so the zeta function is holomorphic there. Integrals such as{" "}
          <M>{"\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t} \\, dt"}</M> are handled the same way, using Fubini to swap the
          triangle integral with the integral in <M>{"t"}</M>.
        </p>
      </Example>

      <Remark title="why the real case differs">
        <p>
          The corner of <M>{"|x|"}</M> appears because real differentiability is not controlled by integrals over closed
          curves. In the complex case, holomorphy is equivalent to a condition on integrals, and integrals behave well under
          uniform limits.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What does Morera&rsquo;s theorem assume about <M>{"f"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "That f is differentiable.",
          "That f is continuous and its integral round every triangle in the domain is 0.",
          "That f is bounded.",
          "That f is a polynomial.",
        ],
        correct: [1],
      },
    },
    {
      key: "re",
      rung: "check",
      prompt: <p>Compute <M>{"\\oint \\operatorname{Re} z \\, dz"}</M> round a triangle of area 2, traversed anticlockwise. It is purely imaginary; give its imaginary part.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "corner",
      rung: "apply",
      prompt: <p>Why can a uniform limit of holomorphic functions not develop a corner, as <M>{"|x|"}</M> does on the real line?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because holomorphic functions are bounded.",
          "Because holomorphy is characterised by vanishing triangle integrals, which pass to uniform limits.",
          "Because the complex plane has no corners.",
          "Because uniform limits do not exist in ℂ.",
        ],
        correct: [1],
      },
    },
    {
      key: "deriv",
      rung: "apply",
      prompt: <p>The series <M>{"f(z) = \\sum_{n \\ge 1} z^n / n^2"}</M> converges uniformly on the closed unit disc. Find <M>{"f'(0)"}</M>.</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.001 },
    },
    {
      key: "second",
      rung: "apply",
      prompt: <p>For the same <M>{"f"}</M>, find <M>{"f''(0)"}</M>.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "weier",
      rung: "prove",
      prompt: <p>Prove that a uniform limit, on an open set, of holomorphic functions is holomorphic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the limit is continuous.",
          "Passes the limit through the integral over a triangle, using uniform convergence on its boundary and Goursat for each f_n.",
          "Applies Morera to conclude.",
        ],
      },
    },
    {
      key: "integral",
      rung: "stretch",
      prompt: <p>Show that <M>{"F(z) = \\int_0^1 e^{tz} \\, dt"}</M> is entire, and find a formula for it when <M>{"z \\ne 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Argues continuity and swaps the triangle integral with the t-integral (Fubini), getting 0 by Cauchy, then applies Morera.",
          "Computes F(z) = (e^z − 1)/z for z ≠ 0, with F(0) = 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Morera's theorem and how it reverses Goursat's theorem, and why uniform limits of holomorphic functions are holomorphic while uniform limits of differentiable real functions need not be differentiable.",

  glimpse: (
    <p>
      The next part studies singularities through Laurent series. Morera and Weierstrass are what make the Gamma and zeta
      functions holomorphic, which the course&rsquo;s last part needs.
    </p>
  ),
};
