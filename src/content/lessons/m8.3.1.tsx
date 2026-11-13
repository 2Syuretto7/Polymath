import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NormBallViz } from "@/components/viz/NormBallViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.3.1",
  minutes: 85,
  links: {
    revisits: ["m3.1.2", "m8.1.1", "m3.5.1"],
    foreshadows: ["m8.3.2", "m8.3.4", "m17.4.1"],
  },

  puzzle: (
    <>
      <p>
        Abstract vector spaces have no lengths or angles. To talk about distance between polynomials, or about how well one
        function approximates another, we must add that structure. The dot product of the first course is one example, but
        there are many ways to measure length. Which ones come from a notion of angle, and how can you tell?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Change <M>{"p"}</M> to see the unit ball of the <M>{"p"}</M>-norm, and test the parallelogram law for each.
      </p>
      <NormBallViz />
    </>
  ),

  theory: (
    <>
      <Definition title="inner product">
        <p>
          An <strong>inner product</strong> on a real or complex vector space <M>{"V"}</M> assigns to each pair a scalar{" "}
          <M>{"\\langle u, v \\rangle"}</M> that is linear in the first slot, satisfies{" "}
          <M>{"\\langle v, u \\rangle = \\overline{\\langle u, v \\rangle}"}</M>, and is <strong>positive definite</strong>:{" "}
          <M>{"\\langle v, v \\rangle > 0"}</M> for <M>{"v \\ne 0"}</M>. The <strong>norm</strong> is{" "}
          <M>{"\\|v\\| = \\sqrt{\\langle v, v \\rangle}"}</M>, and <M>{"u, v"}</M> are <strong>orthogonal</strong> if{" "}
          <M>{"\\langle u, v \\rangle = 0"}</M>.
        </p>
      </Definition>

      <Theorem title="Pythagoras and Cauchy-Schwarz">
        <p>
          If <M>{"u \\perp v"}</M> then <M>{"\\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2"}</M>. For all <M>{"u, v"}</M>,
        </p>
        <MD>{"|\\langle u, v \\rangle| \\le \\|u\\|\\,\\|v\\|,"}</MD>
        <p>and hence the triangle inequality ‖u + v‖ ≤ ‖u‖ + ‖v‖.</p>
      </Theorem>

      <Proof>
        <p>
          Pythagoras: expand <M>{"\\langle u + v, u + v \\rangle"}</M>; the cross terms vanish. For Cauchy-Schwarz, take{" "}
          <M>{"v \\ne 0"}</M> and split <M>{"u = cv + w"}</M> with <M>{"c = \\langle u, v \\rangle / \\|v\\|^2"}</M>, so that{" "}
          <M>{"w \\perp v"}</M>. By Pythagoras,{" "}
          <M>{"\\|u\\|^2 = |c|^2\\|v\\|^2 + \\|w\\|^2 \\ge |\\langle u, v \\rangle|^2 / \\|v\\|^2"}</M>. Multiply by{" "}
          <M>{"\\|v\\|^2"}</M>.
        </p>
      </Proof>

      <Example title="beyond ℝⁿ">
        <p>
          On continuous functions on <M>{"[-1, 1]"}</M>, <M>{"\\langle f, g \\rangle = \\int_{-1}^{1} f g"}</M> is an inner
          product. Then Cauchy-Schwarz says{" "}
          <M>{"\\left(\\int fg\\right)^2 \\le \\int f^2 \\int g^2"}</M>, an inequality about integrals obtained for free. On{" "}
          <M>{"\\mathbb{C}^n"}</M>, <M>{"\\langle z, w \\rangle = \\sum z_k \\overline{w_k}"}</M>; the conjugate is needed so
          that <M>{"\\langle z, z \\rangle"}</M> is real and positive.
        </p>
      </Example>

      <Remark title="norms without angles">
        <p>
          A norm needs only positivity, scaling and the triangle inequality. Every inner product gives a norm satisfying the{" "}
          <strong>parallelogram law</strong>{" "}
          <M>{"\\|u + v\\|^2 + \\|u - v\\|^2 = 2\\|u\\|^2 + 2\\|v\\|^2"}</M>, and conversely a norm satisfying it comes from an
          inner product. The <M>{"p"}</M>-norms for <M>{"p \\ne 2"}</M> fail it, so they measure length without any notion of
          angle. Functional analysis studies both kinds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "norm",
      rung: "check",
      prompt: <p>With the dot product on ℝ³, what is the norm of (2, 3, 6)?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these p-norms on ℝ² come from an inner product? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["p = 1", "p = 2", "p = 3", "p = ∞"], correct: [1] },
    },
    {
      key: "integral",
      rung: "apply",
      prompt: (
        <p>
          With <M>{"\\langle f, g \\rangle = \\int_0^1 fg"}</M>, what is <M>{"\\langle x, x^2 \\rangle"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.25, tolerance: 0.0001 },
    },
    {
      key: "orth",
      rung: "apply",
      prompt: (
        <p>
          With <M>{"\\langle f, g \\rangle = \\int_{-1}^1 fg"}</M>, for which <M>{"c"}</M> is <M>{"x^2 - c"}</M> orthogonal to
          the constant 1?
        </p>
      ),
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.001 },
    },
    {
      key: "para",
      rung: "apply",
      prompt: <p>With the 1-norm on ℝ², u = (1, 0) and v = (0, 1), what is ‖u + v‖² + ‖u − v‖²?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Pythagoras: if ⟨u, v⟩ = 0 then ‖u + v‖² = ‖u‖² + ‖v‖². A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands ⟨u + v, u + v⟩ = ⟨u, u⟩ + ⟨u, v⟩ + ⟨v, u⟩ + ⟨v, v⟩.",
          "Notes the cross terms are 0, since ⟨v, u⟩ is the conjugate of ⟨u, v⟩ = 0.",
          "Concludes ‖u + v‖² = ‖u‖² + ‖v‖².",
        ],
      },
    },
    {
      key: "cs",
      rung: "stretch",
      prompt: <p>Use Cauchy-Schwarz to show that (a + b + c)² ≤ 3(a² + b² + c²) for real numbers a, b, c.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes u = (a, b, c) and v = (1, 1, 1) in ℝ³ with the dot product.",
          "Notes ⟨u, v⟩ = a + b + c, ‖u‖² = a² + b² + c² and ‖v‖² = 3.",
          "Squares Cauchy-Schwarz to get the inequality. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an inner product is, with examples on ℝⁿ, ℂⁿ and spaces of functions, how Pythagoras gives Cauchy-Schwarz and the triangle inequality, and how the parallelogram law tells which norms come from inner products.",

  glimpse: (
    <p>
      The next lesson builds orthonormal bases, in which inner products are easy to compute. Minimisation problems later use
      them to find best approximations, and Fourier series are expansions in an orthonormal basis of functions.
    </p>
  ),
};
