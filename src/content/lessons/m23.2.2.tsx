import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { RieszVectorViz } from "@/components/viz/RieszVectorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.2.2",
  minutes: 85,
  links: {
    revisits: ["m23.2.1", "m22.5.3", "m8.1.5"],
    foreshadows: ["m23.2.3", "m23.4.3", "m23.6.1"],
  },

  puzzle: (
    <>
      <p>
        In the plane, a linear function 3x + 4y is the dot product with the vector (3, 4). Its level lines are perpendicular
        to that vector. In an infinite-dimensional space, is every continuous linear functional still a dot product with some
        fixed vector? And how would you find it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change a functional on the plane, and watch its kernel and representing vector.</p>
      <RieszVectorViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Riesz representation theorem">
        <p>For every bounded linear functional <M>{"\\varphi"}</M> on a Hilbert space <M>H</M> there is a unique <M>{"y \\in H"}</M> with</p>
        <MD>{"\\varphi(x) = \\langle x, y \\rangle \\quad \\text{for all } x, \\qquad \\|\\varphi\\| = \\|y\\|."}</MD>
        <p>So <M>{"H^* \\cong H"}</M>, conjugate-linearly in the complex case.</p>
      </Theorem>

      <Example title="the proof">
        <p>
          If <M>{"\\varphi = 0"}</M>, take <M>{"y = 0"}</M>. Otherwise the kernel <M>N</M> is a closed proper subspace, so by
          the projection theorem there is <M>{"z \\ne 0"}</M> with <M>{"z \\perp N"}</M>. For any <M>x</M>,{" "}
          <M>{"\\varphi(x) z - \\varphi(z) x \\in N"}</M>, so it is orthogonal to <M>z</M>, which rearranges to{" "}
          <M>{"\\varphi(x) = \\langle x, y \\rangle"}</M> with{" "}
          <M>{"y = \\overline{\\varphi(z)} \\, z / \\|z\\|^2"}</M>. Cauchy-Schwarz, with equality at <M>{"x = y"}</M>, gives the
          norm.
        </p>
      </Example>

      <Theorem title="adjoints">
        <p>
          For a bounded operator <M>{"T : H \\to H"}</M>, each <M>{"x \\mapsto \\langle Tx, y \\rangle"}</M> is a bounded
          functional, so equals <M>{"\\langle x, T^*y \\rangle"}</M> for a unique <M>{"T^*y"}</M>. The{" "}
          <strong>adjoint</strong> <M>{"T^*"}</M> is bounded with <M>{"\\|T^*\\| = \\|T\\|"}</M>. The adjoint of the right
          shift on <M>{"\\ell^2"}</M> is the left shift.
        </p>
      </Theorem>

      <Remark title="uses">
        <p>
          Von Neumann proved Radon-Nikodym this way: for finite <M>{"\\nu \\ll \\mu"}</M>, the functional{" "}
          <M>{"f \\mapsto \\int f \\, d\\nu"}</M> is bounded on <M>{"L^2(\\mu + \\nu)"}</M>, and its representing function
          yields the density. The Lax-Milgram lemma, a variant, is the starting point for solving elliptic differential
          equations. Point evaluation <M>{"f \\mapsto f(0)"}</M> is not bounded on <M>{"L^2"}</M>, so it has no representing
          vector there.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the Riesz representation theorem say about a bounded functional φ on a Hilbert space?</p>,
      answer: { kind: "choice", options: ["φ(x) = ⟨x, y⟩ for a unique y, with ‖φ‖ = ‖y‖", "φ is zero", "φ is a projection", "φ has finite rank kernel"], correct: [0] },
    },
    {
      key: "kernel",
      rung: "check",
      prompt: <p>How is the representing vector y related to the kernel of φ?</p>,
      answer: { kind: "choice", options: ["It is orthogonal to the kernel", "It lies in the kernel", "It is parallel to the kernel", "It has no relation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with ‖φ‖ = 2, how far apart are neighbouring level lines?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "norm",
      rung: "apply",
      prompt: <p>On ℝ², what is the norm of φ(x) = 3x₁ + 4x₂?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "adj",
      rung: "apply",
      prompt: <p>What is the adjoint of the right shift on ℓ²?</p>,
      answer: { kind: "choice", options: ["The left shift", "The right shift", "The identity", "The zero operator"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the representing vector y in the Riesz theorem is unique.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes ⟨x, y⟩ = ⟨x, y′⟩ for all x.",
          "Gets ⟨x, y − y′⟩ = 0 for all x, and takes x = y − y′.",
          "Concludes ‖y − y′‖² = 0, so y = y′.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that f ↦ f(0) is not bounded on continuous functions on [−1, 1] with the L² norm.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses tents of height 1 at 0 with base of width 2/n, so f(0) = 1.",
          "Computes their L² norms, which tend to 0, so no bound |f(0)| ≤ C‖f‖₂ can hold.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In ℝⁿ every vector is a combination of basis vectors, its coordinates given by inner products. In infinite
        dimensions, with infinite sums, the same can be done, and Fourier series are the first example.
      </p>
      <p>
        Next, orthonormal bases: Bessel&rsquo;s inequality, Parseval&rsquo;s identity, why every separable Hilbert space is
        a copy of ℓ², and the sum of 1/n² from a Fourier series.
      </p>
    </>
  ),
};
