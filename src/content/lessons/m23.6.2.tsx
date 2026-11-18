import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DeltaLimitViz } from "@/components/viz/DeltaLimitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.6.2",
  minutes: 90,
  links: {
    revisits: ["m23.4.1", "m23.6.1", "m6.6.4"],
    foreshadows: ["m23.6.3", "m34.2.3", "m33.4.1"],
  },

  puzzle: (
    <>
      <p>
        Physicists have long used a &lsquo;function&rsquo; δ that is 0 everywhere except at 0, where it is so large that its
        integral is 1. No such function exists. Yet calculations with δ give right answers, and the derivative of a step
        is said to be δ. Is there a way to make honest mathematics of this?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Narrow a bump of area 1 and pair it with a fixed smooth function.</p>
      <DeltaLimitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="test functions and distributions">
        <p>
          A <strong>test function</strong> is a smooth function on <M>{"\\mathbb{R}"}</M> vanishing outside a bounded set;
          they form a space <M>{"\\mathcal{D}"}</M>. A sequence <M>{"\\varphi_k \\to \\varphi"}</M> in <M>{"\\mathcal{D}"}</M>{" "}
          if all are supported in one bounded set and every derivative converges uniformly. A <strong>distribution</strong>{" "}
          is a linear functional <M>T</M> on <M>{"\\mathcal{D}"}</M> with <M>{"T(\\varphi_k) \\to T(\\varphi)"}</M> whenever{" "}
          <M>{"\\varphi_k \\to \\varphi"}</M>.
        </p>
      </Definition>

      <Example title="functions and deltas">
        <p>
          Each locally integrable <M>f</M> gives a distribution <M>{"T_f(\\varphi) = \\int f\\varphi"}</M>, and different
          functions, up to almost everywhere equality, give different distributions. The Dirac delta is{" "}
          <M>{"\\delta(\\varphi) = \\varphi(0)"}</M>, which is not <M>{"T_f"}</M> for any <M>f</M>. As the visualisation shows,{" "}
          <M>{"T_{g_\\varepsilon} \\to \\delta"}</M> in the weak-star sense: pointwise on every test function.
        </p>
      </Example>

      <Definition title="derivatives">
        <p>Integration by parts, with no boundary terms, suggests the definition</p>
        <MD>{"T'(\\varphi) = -T(\\varphi')."}</MD>
        <p>
          For smooth <M>f</M> this agrees with <M>{"T_{f'}"}</M>. For the Heaviside step <M>H</M>,{" "}
          <M>{"H'(\\varphi) = -\\int_0^\\infty \\varphi' = \\varphi(0)"}</M>, so <M>{"H' = \\delta"}</M>. And{" "}
          <M>{"\\delta'(\\varphi) = -\\varphi'(0)"}</M>.
        </p>
      </Definition>

      <Theorem title="everything is differentiable">
        <p>
          Every distribution has derivatives of all orders, and differentiation is continuous: if{" "}
          <M>{"T_k \\to T"}</M> on every test function, then <M>{"T_k' \\to T'"}</M>. So the nowhere differentiable
          Weierstrass function has a derivative as a distribution, and the uniformly convergent series defining it can be
          differentiated term by term.
        </p>
      </Theorem>

      <Remark title="history">
        <p>
          Dirac used δ in quantum mechanics in 1927; Sobolev defined generalised functions in the 1930s for weak solutions of
          partial differential equations; Laurent Schwartz built the general theory around 1945 to 1950, and received a Fields
          Medal for it in 1950. Distributions cannot in general be multiplied, which is one reason nonlinear equations remain
          hard.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a distribution?</p>,
      answer: { kind: "choice", options: ["A continuous linear functional on test functions", "A function with integral 1", "A probability measure only", "A smooth function with bounded support"], correct: [0] },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>How is the derivative of a distribution T defined?</p>,
      answer: { kind: "choice", options: ["T′(φ) = −T(φ′)", "T′(φ) = T(φ′)", "T′(φ) = T(φ)′", "T′(φ) = φ′(0)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, as ε shrinks to 0, what number does ∫ gε φ approach?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "dprime",
      rung: "apply",
      prompt: <p>A test function φ has φ′(0) = 3. What is δ′(φ)?</p>,
      answer: { kind: "numeric", value: -3 },
    },
    {
      key: "heav",
      rung: "apply",
      prompt: <p>What is the distributional derivative of the Heaviside step function?</p>,
      answer: { kind: "choice", options: ["The Dirac delta", "Zero", "The step itself", "It has none"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the derivative of |x|, as a distribution, is the sign function sgn(x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the derivative applied to φ as minus the integral of |x|φ′(x), split over x < 0 and x > 0.",
          "Integrates by parts on each half; the boundary terms vanish at 0 (since |x| = 0 there) and at infinity (bounded support).",
          "Obtains the integral of −φ over x < 0 plus the integral of φ over x > 0, which is the integral of sgn(x)φ(x).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the distributions given by cos(nx) tend to 0 as n → ∞, using the derivative.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes cos(nx) is the derivative of sin(nx)/n.",
          "Notes sin(nx)/n → 0 uniformly, so its distributions tend to 0 on each test function.",
          "Uses continuity of differentiation to conclude. Any reasonable answer earns full credit, such as a direct integration by parts.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With distributional derivatives, any L² function has derivatives, though they may not be functions. Ask that they
        are, and in L², and you get spaces with exactly the completeness that differential equations need.
      </p>
      <p>
        Next, Sobolev spaces, a first look: weak derivatives, the space H¹, the Poincaré inequality, and how the Riesz
        representation theorem gives weak solutions to boundary value problems.
      </p>
    </>
  ),
};
