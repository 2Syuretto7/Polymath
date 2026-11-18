import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DualPairingViz } from "@/components/viz/DualPairingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.5.3",
  minutes: 90,
  links: {
    revisits: ["m22.5.1", "m22.4.2", "m8.1.5"],
    foreshadows: ["m23.2.2", "m23.3.1", "m23.4.3"],
  },

  puzzle: (
    <>
      <p>
        A linear measurement of a function, such as its average over an interval or its weighted integral, gives one number
        and respects sums. Every function g gives one: integrate f against g. Could there be some other kind of linear
        measurement of functions, not of this form at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Push a level line of a linear functional out until it touches the p-norm ball.</p>
      <DualPairingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the dual space">
        <p>
          The <strong>dual</strong> <M>{"(L^p)^*"}</M> is the space of bounded linear functionals{" "}
          <M>{"\\varphi : L^p \\to \\mathbb{R}"}</M>, with <M>{"\\|\\varphi\\| = \\sup_{\\|f\\|_p \\le 1} |\\varphi(f)|"}</M>.
          Each <M>{"g \\in L^q"}</M>, with <M>q</M> conjugate to <M>p</M>, gives{" "}
          <M>{"\\varphi_g(f) = \\int f g \\, d\\mu"}</M>, bounded by Hölder.
        </p>
      </Definition>

      <Theorem title="the dual of Lᵖ">
        <p>
          For <M>{"1 < p < \\infty"}</M>, and for <M>{"p = 1"}</M> when <M>{"\\mu"}</M> is σ-finite, the map{" "}
          <M>{"g \\mapsto \\varphi_g"}</M> is an isometric isomorphism
        </p>
        <MD>{"L^q(\\mu) \\cong (L^p(\\mu))^*, \\qquad \\|\\varphi_g\\| = \\|g\\|_q."}</MD>
      </Theorem>

      <Example title="where Radon-Nikodym enters">
        <p>
          For a finite measure and a given <M>{"\\varphi"}</M>, set <M>{"\\nu(E) = \\varphi(\\mathbf{1}_E)"}</M>. Continuity of{" "}
          <M>{"\\varphi"}</M> makes <M>{"\\nu"}</M> a signed measure, and <M>{"\\mu(E) = 0"}</M> gives{" "}
          <M>{"\\mathbf{1}_E = 0"}</M> in <M>{"L^p"}</M>, so <M>{"\\nu \\ll \\mu"}</M>. Its Radon-Nikodym derivative is the{" "}
          <M>g</M> we need; testing <M>{"\\varphi"}</M> on truncations of <M>{"|g|^{q-1} \\operatorname{sgn} g"}</M> shows{" "}
          <M>{"g \\in L^q"}</M>. That same function attains equality in Hölder, which gives <M>{"\\|\\varphi_g\\| = \\|g\\|_q"}</M>.
        </p>
      </Example>

      <Remark title="the exception at ∞">
        <p>
          The dual of <M>{"L^\\infty"}</M> is strictly larger than <M>{"L^1"}</M>. On <M>{"\\ell^\\infty"}</M>, the Hahn-Banach
          theorem extends &lsquo;the limit&rsquo; from convergent sequences to a functional on all bounded sequences, a{" "}
          <strong>Banach limit</strong>, which no summable sequence represents. For <M>{"1 < p < \\infty"}</M>, applying the
          theorem twice gives <M>{"(L^p)^{**} = L^p"}</M>: these spaces are <strong>reflexive</strong>, and{" "}
          <M>{"L^2"}</M> is its own dual.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dual",
      rung: "check",
      prompt: <p>For 1 &lt; p &lt; ∞, what is the dual of Lᵖ?</p>,
      answer: { kind: "choice", options: ["The L space with the conjugate exponent q", "Lᵖ itself", "L¹", "L∞ in every case"], correct: [0] },
    },
    {
      key: "l1",
      rung: "check",
      prompt: <p>For a σ-finite measure, what is the dual of L¹?</p>,
      answer: { kind: "choice", options: ["L∞", "L¹", "L²", "Nothing but zero"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation with p = 2, g has length 1.2. What is the largest value of the functional on the unit ball?</p>,
      answer: { kind: "numeric", value: 1.2 },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>On L²[0, 1], φ(f) is the integral of f(x) · 2x. What is ‖φ‖, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.155, tolerance: 0.002 },
    },
    {
      key: "rn",
      rung: "apply",
      prompt: <p>In the proof, which theorem produces the function g representing φ?</p>,
      answer: { kind: "choice", options: ["The Radon-Nikodym theorem", "Fubini's theorem", "The Lebesgue differentiation theorem", "Fatou's lemma"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For 1 &lt; p &lt; ∞ and g in <M>{"L^q"}</M>, prove that <M>{"\\|\\varphi_g\\| = \\|g\\|_q"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses Hölder to bound |φ(f)| by ‖f‖ₚ times the q-norm of g, so the norm of φ is at most the q-norm of g.",
          "Tests on f = |g| to the power q − 1 times the sign of g, computing φ(f) and ‖f‖ₚ in terms of the q-norm of g.",
          "Concludes the ratio equals the q-norm of g, so the norm of φ is exactly that.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a Banach limit on ℓ∞ not be of the form x ↦ Σ xₙ yₙ with y summable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a Banach limit vanishes on every sequence with finitely many non-zero terms, such as each unit vector eₙ.",
          "Concludes each yₙ would be 0, so the functional would be 0, yet it gives 1 on the constant sequence.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Lᵖ spaces, sequence spaces and spaces of continuous functions are all vector spaces with a norm, complete in that
        norm. Functional analysis studies such spaces in general, and the linear maps between them.
      </p>
      <p>
        Next, normed and Banach spaces: the axioms of a norm seen as a convex unit ball, the main examples, equivalence of
        norms, and a test for completeness by absolutely convergent series.
      </p>
    </>
  ),
};
