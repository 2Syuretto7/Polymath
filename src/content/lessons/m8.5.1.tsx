import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GenEigViz } from "@/components/viz/GenEigViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.5.1",
  minutes: 85,
  links: {
    revisits: ["m8.2.2", "m8.2.3", "m3.7.2"],
    foreshadows: ["m8.5.2", "m8.5.3", "m8.6.1"],
  },

  puzzle: (
    <>
      <p>
        The matrix <M>{"\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}"}</M> has only one line of eigenvectors, so no
        basis of eigenvectors exists. Yet the second basis vector is not far from being one: applying{" "}
        <M>{"T - 2I"}</M> once sends it to an eigenvector, and twice sends it to 0. Can we build every operator from vectors
        like that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose an eigenvalue and a vector, and keep applying <M>{"T - \\lambda I"}</M>. Which vectors eventually reach 0?
      </p>
      <GenEigViz />
    </>
  ),

  theory: (
    <>
      <Definition title="generalised eigenvector">
        <p>
          A nonzero <M>{"v"}</M> is a <strong>generalised eigenvector</strong> of <M>{"T"}</M> for <M>{"\\lambda"}</M> if{" "}
          <M>{"(T - \\lambda I)^k v = 0"}</M> for some positive integer <M>{"k"}</M>. The{" "}
          <strong>generalised eigenspace</strong> <M>{"G(\\lambda, T)"}</M> consists of all such vectors together with 0.
        </p>
      </Definition>

      <Theorem title="powers stop growing">
        <p>
          For an operator <M>{"N"}</M> on a space of dimension <M>{"n"}</M>,{" "}
          <M>{"\\{0\\} = \\operatorname{null} N^0 \\subseteq \\operatorname{null} N^1 \\subseteq \\cdots"}</M>, and the chain is
          constant from <M>{"N^n"}</M> on. So <M>{"G(\\lambda, T) = \\operatorname{null}(T - \\lambda I)^n"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"\\operatorname{null} N^m = \\operatorname{null} N^{m+1}"}</M>, then for <M>{"N^{m+2}v = 0"}</M> we get{" "}
          <M>{"Nv \\in \\operatorname{null} N^{m+1} = \\operatorname{null} N^m"}</M>, so <M>{"N^{m+1}v = 0"}</M>; the chain
          stays constant from then on. Each strict increase raises the dimension by at least 1, and the dimension cannot pass{" "}
          <M>{"n"}</M>, so the chain is constant by step <M>{"n"}</M>.
        </p>
      </Proof>

      <Theorem title="decomposition into generalised eigenspaces">
        <p>
          Let <M>{"V"}</M> be a finite-dimensional complex vector space, and <M>{"\\lambda_1, \\dots, \\lambda_m"}</M> the
          distinct eigenvalues of <M>{"T"}</M>. Then each <M>{"G(\\lambda_k, T)"}</M> is invariant under <M>{"T"}</M>, and
        </p>
        <MD>{"V = G(\\lambda_1, T) \\oplus \\cdots \\oplus G(\\lambda_m, T)."}</MD>
        <p>So <M>{"V"}</M> has a basis of generalised eigenvectors.</p>
      </Theorem>

      <Proof>
        <p>
          Sketch: by induction on dimension. With <M>{"n = \\dim V"}</M> and an eigenvalue <M>{"\\lambda_1"}</M>, one shows{" "}
          <M>{"V = \\operatorname{null}(T - \\lambda_1 I)^n \\oplus \\operatorname{range}(T - \\lambda_1 I)^n"}</M>. Both pieces
          are invariant because <M>{"T"}</M> commutes with <M>{"(T - \\lambda_1 I)^n"}</M>. The second piece is smaller, and
          applying the induction hypothesis to it supplies the remaining generalised eigenspaces.
        </p>
      </Proof>

      <Definition title="multiplicity and the characteristic polynomial">
        <p>
          The <strong>multiplicity</strong> of <M>{"\\lambda"}</M> is <M>{"\\dim G(\\lambda, T)"}</M>, and these add up to{" "}
          <M>{"\\dim V"}</M>. The <strong>characteristic polynomial</strong> is{" "}
          <M>{"(z - \\lambda_1)^{d_1} \\cdots (z - \\lambda_m)^{d_m}"}</M>, with <M>{"d_k"}</M> the multiplicities.
        </p>
      </Definition>

      <Theorem title="Cayley-Hamilton">
        <p>
          If <M>{"q"}</M> is the characteristic polynomial of <M>{"T"}</M>, then <M>{"q(T) = 0"}</M>. Indeed,{" "}
          <M>{"(T - \\lambda_k I)^{d_k}"}</M> kills <M>{"G(\\lambda_k, T)"}</M>, and these spaces fill <M>{"V"}</M>.
        </p>
      </Theorem>

      <Example title="the example in the figure">
        <p>
          For <M>{"T = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}"}</M>, the eigenvalue 2 has
          only a one-dimensional eigenspace but a two-dimensional generalised eigenspace, so its multiplicity is 2. The
          characteristic polynomial is <M>{"(z - 2)^2(z - 3)"}</M>.
        </p>
      </Example>

      <Remark title="where they matter">
        <p>
          To solve <M>{"x' = Ax"}</M> one needs <M>{"e^{tA}"}</M>. On an eigenvector it acts as <M>{"e^{\\lambda t}"}</M>; on a
          generalised eigenvector the series for <M>{"e^{t(A - \\lambda I)}"}</M> stops, producing the terms{" "}
          <M>{"t e^{\\lambda t}"}</M>, <M>{"t^2 e^{\\lambda t}"}</M> familiar from repeated roots.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>For T = [2, 1; 0, 2] on ℂ², which nonzero vectors are generalised eigenvectors for 2?</p>,
      answer: {
        kind: "choice",
        options: ["Only multiples of (1, 0)", "Only multiples of (0, 1)", "Every nonzero vector", "None"],
        correct: [2],
      },
    },
    {
      key: "power",
      rung: "check",
      prompt: <p>On a 6-dimensional space, at the latest from which power k does null Nᵏ stop growing?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "dimG",
      rung: "apply",
      prompt: <p>For the 3 by 3 matrix in the figure, what is the dimension of G(2, T)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: <p>For T = [3, 1, 0; 0, 3, 1; 0, 0, 3], what is the smallest k with (T − 3I)ᵏ(0, 0, 1) = 0?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "ch",
      rung: "apply",
      prompt: <p>By Cayley-Hamilton, T = [1, 2; 3, 4] satisfies T² = aT + bI. What is a + b?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that G(λ, T) is invariant under T.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes v with (T − λI)ⁿv = 0.",
          "Notes T commutes with (T − λI)ⁿ, since both are polynomials in T.",
          "Concludes (T − λI)ⁿ(Tv) = T(T − λI)ⁿv = 0, so Tv lies in G(λ, T).",
        ],
      },
    },
    {
      key: "ode",
      rung: "stretch",
      prompt: <p>The equation y″ − 4y′ + 4y = 0 has the solution t e^(2t) as well as e^(2t). Connect this to generalised eigenvectors.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the equation as a first-order system whose matrix has the repeated eigenvalue 2.",
          "Notes this matrix has only one eigenvector line, so a generalised eigenvector is needed.",
          "Explains that e^(tA) on a generalised eigenvector gives e^(2t)(v + t(A − 2I)v), producing the t e^(2t) term. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what generalised eigenvectors and generalised eigenspaces are, why null spaces of powers stop growing, the decomposition of a complex space into generalised eigenspaces, multiplicity, and the Cayley-Hamilton theorem.",

  glimpse: (
    <p>
      The next lesson studies nilpotent operators, which is what T − λI becomes on each generalised eigenspace. Together they
      lead to the Jordan form, and the trace and determinant are defined from multiplicities.
    </p>
  ),
};
