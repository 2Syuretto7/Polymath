import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { WeakDerivativeViz } from "@/components/viz/WeakDerivativeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.3.1",
  minutes: 90,
  links: {
    revisits: ["m23.6.2", "m22.2.2", "m33.2.3"],
    foreshadows: ["m33.3.2", "m33.3.4", "m33.4.1"],
  },

  puzzle: (
    <>
      <p>
        The function |x| has no derivative at 0, yet it is plainly a function with slope −1 on the left and +1 on the right.
        The step function jumping from 0 to 1 at the origin seems different in kind. Is there a sense of derivative in
        which the first has one and the second does not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and move the test function, and compare the two sides of the integration by parts identity.</p>
      <WeakDerivativeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="weak derivatives">
        <p>
          Let U ⊆ ℝⁿ be open and <M>{"u \\in L^1_{\\mathrm{loc}}(U)"}</M>. For a multi-index α, a function{" "}
          <M>{"v \\in L^1_{\\mathrm{loc}}(U)"}</M> is the <strong>weak derivative</strong> <M>{"D^\\alpha u"}</M> if
        </p>
        <p>
          <M>{"\\int_U u \\, D^\\alpha \\varphi \\, dx = (-1)^{|\\alpha|} \\int_U v \\, \\varphi \\, dx"}</M>
        </p>
        <p>
          for every test function <M>{"\\varphi \\in C_c^\\infty(U)"}</M>. For smooth u this is integration by parts, the
          boundary terms vanishing because φ has compact support. A weak derivative, if it exists, is unique up to a set of
          measure zero.
        </p>
      </Definition>

      <Example title="a corner and a jump">
        <p>
          On (−1, 1), u(x) = |x| has weak derivative sign x: splitting the integral at 0 and integrating by parts on each
          side, the boundary terms at 0 cancel because u is continuous. The step function H, 0 for x &lt; 0 and 1 for x &gt;
          0, has no weak derivative: <M>{"-\\int H \\varphi' = \\varphi(0)"}</M>, and no locally integrable v satisfies{" "}
          <M>{"\\int v \\varphi = \\varphi(0)"}</M> for all φ. Its distributional derivative is the Dirac delta.
        </p>
      </Example>

      <Definition title="Sobolev spaces">
        <p>
          For 1 ≤ p ≤ ∞ and k ≥ 0, the <strong>Sobolev space</strong> <M>{"W^{k,p}(U)"}</M> consists of the u in{" "}
          <M>{"L^p(U)"}</M> whose weak derivatives <M>{"D^\\alpha u"}</M> exist and lie in <M>{"L^p(U)"}</M> for all |α| ≤ k,
          with norm <M>{"\\|u\\|_{W^{k,p}} = \\big(\\sum_{|\\alpha| \\le k} \\|D^\\alpha u\\|_{L^p}^p\\big)^{1/p}"}</M> for p
          &lt; ∞. When p = 2 one writes <M>{"H^k(U)"}</M>.
        </p>
      </Definition>

      <Theorem title="completeness">
        <p>
          Each <M>{"W^{k,p}(U)"}</M> is a Banach space, and <M>{"H^k(U)"}</M> is a Hilbert space with inner product{" "}
          <M>{"\\sum_{|\\alpha| \\le k} \\int D^\\alpha u \\, D^\\alpha v"}</M>. If <M>{"u_m \\to u"}</M> in{" "}
          <M>{"L^p"}</M> and <M>{"D^\\alpha u_m"}</M> is Cauchy in <M>{"L^p"}</M>, passing to the limit in the defining
          identity shows that the limit of <M>{"D^\\alpha u_m"}</M> is the weak derivative of u.
        </p>
      </Theorem>

      <Remark title="Sobolev functions can be wild">
        <p>
          On the unit ball in ℝⁿ, <M>{"u = |x|^{-a}"}</M> lies in <M>{"W^{1,p}"}</M> exactly when{" "}
          <M>{"a < (n - p)/p"}</M>. So for p &lt; n a Sobolev function can be unbounded, and by summing such singularities
          at a dense set of points, unbounded on every open set. Sobolev inequalities will show what control the derivatives
          do give.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is v the weak derivative u′ on an interval?</p>,
      answer: { kind: "choice", options: ["When ∫ u φ′ = −∫ v φ for every test function φ", "When u is differentiable everywhere with u′ = v", "When v is continuous", "When ∫ u = ∫ v"], correct: [0] },
    },
    {
      key: "abs",
      rung: "check",
      prompt: <p>What is the weak derivative of |x| on (−1, 1)?</p>,
      answer: { kind: "choice", options: ["sign x", "0", "The Dirac delta", "It has none"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the step and set c = 0. What is −∫ u φ′?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.01 },
    },
    {
      key: "step",
      rung: "apply",
      prompt: <p>Does the step function lie in W¹˒¹(−1, 1)?</p>,
      answer: { kind: "choice", options: ["No: it has no weak derivative that is a function", "Yes, with weak derivative 0", "Yes, with weak derivative 1", "Only for p = 2"], correct: [0] },
    },
    {
      key: "power",
      rung: "apply",
      prompt: <p>On the unit ball in ℝ³, u = |x|⁻ᵃ lies in W¹˒² exactly when a is below some value. What is that value?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the weak derivative of u(x) = |x| on (−1, 1) is sign x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits ∫ |x| φ′ into integrals over (−1, 0) and (0, 1).",
          "Integrates by parts on each piece; the boundary terms at ±1 vanish since φ has compact support, and those at 0 cancel since |x| is 0 there.",
          "Concludes ∫ |x| φ′ = −∫ (sign x) φ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is a weak derivative unique up to sets of measure zero?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes v and w both work, so ∫ (v − w) φ = 0 for every test function φ.",
          "Uses the fact that a locally integrable function integrating to 0 against all test functions vanishes almost everywhere.",
          "Concludes v = w almost everywhere. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Weak derivatives are defined by duality, which makes them hard to compute with directly. The way round this is to
        show that Sobolev functions can be approximated by smooth ones, and prove things for those.
      </p>
      <p>Next, approximation.</p>
    </>
  ),
};
