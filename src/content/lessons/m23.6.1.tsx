import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { BoundaryPhaseViz } from "@/components/viz/BoundaryPhaseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.6.1",
  minutes: 90,
  links: {
    revisits: ["m23.3.4", "m22.4.4", "m23.5.1"],
    foreshadows: ["m23.6.2", "m23.6.3", "m33.4.1"],
  },

  puzzle: (
    <>
      <p>
        In quantum mechanics, momentum is the operator p = −i d/dx, and observables must be &lsquo;self-adjoint&rsquo; so that
        their measured values are real. But p is unbounded, and by Hellinger-Toeplitz it cannot be defined on every function
        in L². On which functions should it act, and does the choice matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the boundary condition for p on [0, 1], and watch its eigenvalues.</p>
      <BoundaryPhaseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="unbounded operators">
        <p>
          An <strong>operator</strong> on a Hilbert space <M>H</M> is a linear map <M>{"T : D(T) \\to H"}</M> from a subspace,
          its domain, usually dense. It is <strong>closed</strong> if its graph is closed in <M>{"H \\times H"}</M>. Its{" "}
          <strong>adjoint</strong> has domain the <M>y</M> for which <M>{"x \\mapsto \\langle Tx, y \\rangle"}</M> is bounded on{" "}
          <M>{"D(T)"}</M>, and <M>{"T^* y"}</M> is the Riesz vector of that functional:
        </p>
        <MD>{"\\langle Tx, y \\rangle = \\langle x, T^* y \\rangle \\quad (x \\in D(T),\\ y \\in D(T^*))."}</MD>
      </Definition>

      <Definition title="symmetric and self-adjoint">
        <p>
          <M>T</M> is <strong>symmetric</strong> if <M>{"\\langle Tx, y \\rangle = \\langle x, Ty \\rangle"}</M> on its domain,
          so that <M>{"T^*"}</M> extends <M>T</M>. It is <strong>self-adjoint</strong> if <M>{"T^* = T"}</M>, domains included.
          For bounded operators the two agree; for unbounded ones they do not, and only self-adjoint operators have real
          spectrum and a spectral theorem.
        </p>
      </Definition>

      <Example title="momentum on an interval">
        <p>
          Let <M>{"p = -i\\,d/dx"}</M> act on absolutely continuous <M>f</M> on <M>{"[0, 1]"}</M> with{" "}
          <M>{"f' \\in L^2"}</M>. Integration by parts gives
        </p>
        <MD>{"\\langle pf, g \\rangle - \\langle f, pg \\rangle = -i\\big(f(1)\\overline{g(1)} - f(0)\\overline{g(0)}\\big)."}</MD>
        <p>
          With <M>{"f(0) = f(1) = 0"}</M>, <M>p</M> is symmetric, but its adjoint needs no boundary condition at all, so it
          is not self-adjoint. With <M>{"f(1) = e^{i\\theta} f(0)"}</M>, the boundary term vanishes for exactly the matching{" "}
          <M>g</M>, and <M>p</M> is self-adjoint, with eigenvalues <M>{"\\theta + 2\\pi k"}</M>.
        </p>
      </Example>

      <Theorem title="von Neumann and Stone">
        <p>
          Von Neumann (1929) extended the spectral theorem to unbounded self-adjoint operators, and found how to count the
          self-adjoint extensions of a symmetric operator. Stone&rsquo;s theorem (1932) matches self-adjoint <M>A</M> with
          unitary groups <M>{"e^{itA}"}</M>: the time evolution of quantum mechanics exists exactly because the Hamiltonian is
          self-adjoint, not merely symmetric.
        </p>
      </Theorem>

      <Remark title="why unboundedness is forced">
        <p>
          Position and momentum satisfy <M>{"xp - px = iI"}</M> on a suitable domain. No bounded operators can satisfy{" "}
          <M>{"AB - BA = I"}</M>: by induction <M>{"AB^n - B^nA = nB^{n-1}"}</M>, which forces{" "}
          <M>{"n\\|B^{n-1}\\| \\le 2\\|A\\|\\|B\\|\\|B^{n-1}\\|"}</M> for every <M>n</M>. So quantum mechanics needs unbounded
          operators.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sa",
      rung: "check",
      prompt: <p>When is an unbounded operator T self-adjoint?</p>,
      answer: { kind: "choice", options: ["When T* = T, including equal domains", "When it is symmetric on some domain", "When it is bounded", "When its spectrum is empty"], correct: [0] },
    },
    {
      key: "ht",
      rung: "check",
      prompt: <p>Why can momentum not be defined on all of L²[0, 1] as a symmetric operator?</p>,
      answer: { kind: "choice", options: ["Hellinger-Toeplitz would make it bounded, and it is not", "L² has no derivatives", "Momentum is not linear", "Its spectrum is empty"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with θ = 90°, what is the smallest non-negative eigenvalue? Give a decimal.</p>,
      answer: { kind: "numeric", value: 1.5708, tolerance: 0.01 },
    },
    {
      key: "dir",
      rung: "apply",
      prompt: <p>With f(0) = f(1) = 0, what is p?</p>,
      answer: { kind: "choice", options: ["Symmetric but not self-adjoint", "Self-adjoint", "Bounded", "Compact"], correct: [0] },
    },
    {
      key: "ccr",
      rung: "apply",
      prompt: <p>Why can no bounded operators satisfy AB − BA = I?</p>,
      answer: { kind: "choice", options: ["ABⁿ − BⁿA = nBⁿ⁻¹ would force n to be bounded", "Bounded operators commute", "I is not bounded", "A and B would be compact"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that p = −i d/dx is symmetric on smooth functions f with f(0) = f(1) = 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ⟨pf, g⟩ as the integral of −i f′ times the conjugate of g.",
          "Integrates by parts: the boundary term −i[f ḡ] from 0 to 1 vanishes, leaving the integral of i f times the conjugate of g′.",
          "Recognises this as the integral of f times the conjugate of −i g′, that is ⟨f, pg⟩.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that exp(iλx) satisfies f(1) = eⁱᶿ f(0) exactly when λ = θ + 2πk for an integer k.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes f(0) = 1 and f(1) = exp(iλ), so the condition is exp(iλ) = exp(iθ).",
          "Uses that exp(iα) = 1 exactly when α is a multiple of 2π.",
          "Concludes λ − θ = 2πk. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Unbounded operators are awkward because derivatives do not exist for most functions. Schwartz turned the problem
        around: enlarge the space until every function, and more, has a derivative.
      </p>
      <p>
        Next, distributions: test functions, the Dirac delta as a functional, derivatives defined by moving them onto test
        functions, and why the Heaviside step has derivative δ.
      </p>
    </>
  ),
};
