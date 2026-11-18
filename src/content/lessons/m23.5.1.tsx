import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { SpectralRadiusViz } from "@/components/viz/SpectralRadiusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.5.1",
  minutes: 90,
  links: {
    revisits: ["m23.3.3", "m23.1.2", "m23.2.2"],
    foreshadows: ["m23.5.2", "m23.5.3", "m23.6.1"],
  },

  puzzle: (
    <>
      <p>
        The right shift on ℓ² sends (x₁, x₂, …) to (0, x₁, x₂, …). It has no eigenvalues at all: Sx = λx forces x = 0. A
        matrix always has an eigenvalue over ℂ. Has the shift lost its spectrum, or has it simply moved somewhere
        eigenvectors cannot reach?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch the n-th roots of ‖Tⁿ‖ for three 2 by 2 matrices, and compare them with ‖T‖.</p>
      <SpectralRadiusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the spectrum">
        <p>
          For a bounded operator <M>T</M> on a complex Banach space <M>X</M>, the <strong>spectrum</strong> is
        </p>
        <MD>{"\\sigma(T) = \\{ \\lambda \\in \\mathbb{C} : T - \\lambda I \\text{ is not invertible in } B(X) \\}."}</MD>
        <p>
          By the bounded inverse theorem, <M>{"\\lambda \\notin \\sigma(T)"}</M> exactly when <M>{"T - \\lambda I"}</M> is a
          bijection. Eigenvalues, where it fails to be injective, form the <strong>point spectrum</strong>; but{" "}
          <M>{"T - \\lambda I"}</M> may be injective and still not onto.
        </p>
      </Definition>

      <Theorem title="the spectrum is non-empty and compact">
        <p>
          If <M>{"|\\lambda| > \\|T\\|"}</M>, the Neumann series{" "}
          <M>{"(\\lambda I - T)^{-1} = \\sum_{n \\ge 0} T^n / \\lambda^{n+1}"}</M> converges, so <M>{"\\sigma(T)"}</M> lies in
          the disc of radius <M>{"\\|T\\|"}</M>. A similar series shows the complement is open. And <M>{"\\sigma(T)"}</M> is
          never empty: otherwise <M>{"\\lambda \\mapsto \\varphi((T - \\lambda I)^{-1})"}</M> would be a bounded entire
          function tending to 0, hence 0 by Liouville, for every <M>{"\\varphi"}</M>. Gelfand&rsquo;s formula gives the{" "}
          <strong>spectral radius</strong>:
        </p>
        <MD>{"r(T) = \\max_{\\lambda \\in \\sigma(T)} |\\lambda| = \\lim_{n \\to \\infty} \\|T^n\\|^{1/n}."}</MD>
      </Theorem>

      <Example title="three operators">
        <p>
          The right shift <M>S</M> has no eigenvalues, yet <M>{"\\sigma(S)"}</M> is the closed unit disc. The left shift has
          every <M>{"|\\lambda| < 1"}</M> as an eigenvalue, with eigenvector <M>{"(1, \\lambda, \\lambda^2, \\dots)"}</M>.
          Multiplication by <M>t</M> on <M>{"L^2[0, 1]"}</M> has spectrum <M>{"[0, 1]"}</M> and no eigenvalues. The Volterra
          operator <M>{"Vf(x) = \\int_0^x f"}</M> has <M>{"\\|V^n\\| \\le 1/n!"}</M>, so its spectrum is <M>{"\\{0\\}"}</M>.
        </p>
      </Example>

      <Remark title="why complex">
        <p>
          Over the reals the spectrum can be empty: rotation of the plane by a right angle has no real eigenvalues. Spectral
          theory works over ℂ, where Liouville&rsquo;s theorem is available, just as eigenvalue theory for matrices needs the
          fundamental theorem of algebra.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the spectrum of a bounded operator T?</p>,
      answer: { kind: "choice", options: ["The set of λ for which T − λI is not invertible", "The set of eigenvalues only", "The set of norms of Tⁿ", "The unit circle"], correct: [0] },
    },
    {
      key: "bound",
      rung: "check",
      prompt: <p>Why does the spectrum lie in the disc of radius ‖T‖?</p>,
      answer: { kind: "choice", options: ["For |λ| > ‖T‖ the Neumann series inverts λI − T", "Because T is compact", "Because eigenvalues are real", "By Hahn-Banach"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for [[0.5, a], [0, 0.5]] with a = 3, what is the spectral radius?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: <p>Which λ is an eigenvalue of the left shift (x₁, x₂, …) ↦ (x₂, x₃, …) on ℓ²?</p>,
      answer: { kind: "choice", options: ["λ = 1/2, with eigenvector (1, 1/2, 1/4, …)", "λ = 2", "λ = 1, with eigenvector (1, 1, 1, …)", "None"], correct: [0] },
    },
    {
      key: "volterra",
      rung: "apply",
      prompt: <p>What is the spectral radius of the Volterra operator?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if ‖T‖ &lt; 1 then I − T is invertible, with inverse the sum of Tⁿ over n ≥ 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ‖Tⁿ‖ ≤ ‖T‖ⁿ, so the series converges absolutely, and hence converges in the Banach space B(X).",
          "Computes (I − T)(I + T + … + Tᴺ) = I − Tᴺ⁺¹, and similarly on the other side.",
          "Lets N → ∞, using ‖Tᴺ⁺¹‖ → 0, to get that the sum is a two-sided inverse.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show the right shift S on ℓ² has no eigenvalues.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Sx = λx as (0, x₁, x₂, …) = (λx₁, λx₂, …).",
          "If λ = 0, gets x = 0 directly; if λ ≠ 0, gets x₁ = 0 and then each xₙ = 0 in turn.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Among bounded operators, some behave almost like matrices: they map bounded sets into nearly finite-dimensional
        ones, and their spectra look like lists of eigenvalues.
      </p>
      <p>
        Next, compact operators: their definition, why limits of finite-rank operators are compact, integral operators as
        the main examples, and the shape of their spectra.
      </p>
    </>
  ),
};
