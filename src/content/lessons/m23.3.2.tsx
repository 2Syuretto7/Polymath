import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { PointwiseBoundViz } from "@/components/viz/PointwiseBoundViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.3.2",
  minutes: 90,
  links: {
    revisits: ["m23.3.1", "m12.3.3", "m23.1.2"],
    foreshadows: ["m23.3.3", "m23.4.1", "m23.4.2"],
  },

  puzzle: (
    <>
      <p>
        A family of linear operators is bounded at every single point: for each x, the values ‖Tx‖ over the whole family
        stay below some bound, though the bound may depend on x. Must the operator norms themselves be bounded? It sounds
        too good to be true, and in some spaces it is false. What does completeness change?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test the functionals φₙ(x) = n·xₙ on three sequences, and watch for a point where they blow up.</p>
      <PointwiseBoundViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the uniform boundedness principle">
        <p>
          Let <M>X</M> be a Banach space, <M>Y</M> a normed space, and <M>{"\\{T_\\alpha\\}"}</M> a family in{" "}
          <M>{"B(X, Y)"}</M>. If <M>{"\\sup_\\alpha \\|T_\\alpha x\\| < \\infty"}</M> for every <M>{"x \\in X"}</M>, then{" "}
          <M>{"\\sup_\\alpha \\|T_\\alpha\\| < \\infty"}</M>.
        </p>
      </Theorem>

      <Example title="the proof, by Baire">
        <p>Let</p>
        <MD>{"E_n = \\{ x \\in X : \\|T_\\alpha x\\| \\le n \\text{ for all } \\alpha \\}."}</MD>
        <p>
          Each <M>{"E_n"}</M> is closed, an intersection of closed sets, and pointwise boundedness says their union is{" "}
          <M>X</M>. Since <M>X</M> is complete, Baire gives some <M>{"E_n"}</M> containing a closed ball{" "}
          <M>{"\\overline{B}(x_0, r)"}</M>. For <M>{"\\|z\\| \\le r"}</M>,
        </p>
        <MD>{"\\|T_\\alpha z\\| \\le \\|T_\\alpha(x_0 + z)\\| + \\|T_\\alpha x_0\\| \\le 2n,"}</MD>
        <p>so <M>{"\\|T_\\alpha\\| \\le 2n / r"}</M> for every <M>{"\\alpha"}</M>.</p>
      </Example>

      <Theorem title="Banach-Steinhaus">
        <p>
          If <M>{"T_n \\in B(X, Y)"}</M> with <M>X</M> Banach, and <M>{"T_n x"}</M> converges for every <M>x</M>, then{" "}
          <M>{"Tx = \\lim T_n x"}</M> defines a bounded operator, with <M>{"\\|T\\| \\le \\liminf \\|T_n\\|"}</M>. Convergent
          sequences are bounded, so the principle applies.
        </p>
      </Theorem>

      <Remark title="a divergent Fourier series">
        <p>
          On <M>{"C(\\mathbb{T})"}</M> with the sup norm, the functional <M>{"f \\mapsto S_N f(0)"}</M>, the N-th partial sum
          of the Fourier series at 0, has norm equal to the Lebesgue constant{" "}
          <M>{"L_N = \\frac{1}{2\\pi}\\int |D_N|"}</M>, which grows like <M>{"\\frac{4}{\\pi^2}\\log N"}</M>. By the principle,
          some continuous <M>f</M> has <M>{"\\sup_N |S_N f(0)| = \\infty"}</M>: its Fourier series diverges at 0. Du
          Bois-Reymond built one by hand in 1873; the principle proves existence in three lines, and Baire even shows such
          functions form a comeagre set.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the uniform boundedness principle conclude from pointwise boundedness?</p>,
      answer: { kind: "choice", options: ["The operator norms are bounded", "Each operator is compact", "The operators converge in norm", "The space is a Hilbert space"], correct: [0] },
    },
    {
      key: "tool",
      rung: "check",
      prompt: <p>Which theorem drives the proof?</p>,
      answer: { kind: "choice", options: ["The Baire category theorem", "Zorn’s lemma", "The projection theorem", "Fubini’s theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with xₖ = 1/k, what is the supremum over n of |φₙ(x)|?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>With the sup norm on sequences, what is the norm of the functional φ₇(x) = 7x₇?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "fourier",
      rung: "apply",
      prompt: <p>Why does the principle give a continuous function whose Fourier series diverges at 0?</p>,
      answer: { kind: "choice", options: ["The partial-sum functionals at 0 have unbounded norms, so they cannot be bounded at every f", "Every Fourier series diverges", "Continuous functions are not integrable", "The Dirichlet kernel is bounded"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Suppose ‖Tₐx‖ ≤ n for every a whenever ‖x − x₀‖ ≤ r. Prove that ‖Tₐ‖ ≤ 2n/r for every a.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes z with ‖z‖ ≤ r and writes Tₐz = Tₐ(x₀ + z) − Tₐx₀ by linearity.",
          "Notes both x₀ + z and x₀ are within r of x₀, so each term has norm at most n, giving ‖Tₐz‖ ≤ 2n.",
          "Rescales: for any x ≠ 0, applies this to z = rx/‖x‖ to get ‖Tₐx‖ ≤ (2n/r)‖x‖.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The functionals φₙ(x) = n·xₙ are bounded at each finitely supported sequence but have unbounded norms. Why does this not contradict the principle?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the space of finitely supported sequences with the sup norm is not complete.",
          "Observes that Baire, and hence the principle, needs completeness.",
          "Any reasonable answer earns full credit, for example one exhibiting 1/√k in the completion c₀.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Baire&rsquo;s theorem has more to give. Applied to the images of balls under a surjective operator, it shows those
        images cannot be thin.
      </p>
      <p>
        Next, the open mapping theorem: a bounded linear surjection between Banach spaces maps open sets to open sets, so a
        bounded bijection has a bounded inverse, and two comparable complete norms are equivalent.
      </p>
    </>
  ),
};
