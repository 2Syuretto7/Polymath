import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuotientLinesViz } from "@/components/viz/QuotientLinesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.1.4",
  minutes: 80,
  links: {
    revisits: ["m8.1.3", "m7.2.3", "m7.6.2"],
    foreshadows: ["m8.1.5", "m8.2.2", "m14.5.1"],
  },

  puzzle: (
    <>
      <p>
        Two antiderivatives of the same function differ by a constant, so &ldquo;the&rdquo; antiderivative is really a
        whole family <M>{"F + C"}</M>. Mathematicians handle such families by treating each as a single object. For groups
        this gave quotient groups, and for rings quotient rings. For vector spaces it gives quotient spaces, and they make
        the rank-nullity theorem into an isomorphism.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Divide the plane by a line <M>{"U"}</M>. Each parallel line is one element of the quotient. Add two of them, and
        slide the representatives to see that the answer does not change.
      </p>
      <QuotientLinesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="quotient space">
        <p>
          Let <M>{"U"}</M> be a subspace of <M>{"V"}</M>. The <strong>affine subsets</strong> <M>{"v + U"}</M> are the
          translates of <M>{"U"}</M>; <M>{"v + U = w + U"}</M> exactly when <M>{"v - w \\in U"}</M>. The{" "}
          <strong>quotient space</strong> <M>{"V/U"}</M> is the set of these translates, with
        </p>
        <MD>{"(v + U) + (w + U) = (v + w) + U, \\qquad a(v + U) = av + U."}</MD>
      </Definition>

      <Theorem title="well defined, and its dimension">
        <p>
          These operations are well defined and make <M>{"V/U"}</M> a vector space. If <M>{"V"}</M> is
          finite-dimensional, <M>{"\\dim V/U = \\dim V - \\dim U"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"v' - v"}</M> and <M>{"w' - w"}</M> lie in <M>{"U"}</M>, so does their sum{" "}
          <M>{"(v' + w') - (v + w)"}</M>, and so does <M>{"av' - av"}</M>. For the dimension, the quotient map{" "}
          <M>{"\\pi(v) = v + U"}</M> is linear and onto, with null space <M>{"U"}</M>; rank-nullity gives{" "}
          <M>{"\\dim V = \\dim U + \\dim V/U"}</M>.
        </p>
      </Proof>

      <Theorem title="the first isomorphism theorem">
        <p>
          For linear <M>{"T : V \\to W"}</M>, the map <M>{"v + \\operatorname{null} T \\mapsto Tv"}</M> is an isomorphism
          from <M>{"V/\\operatorname{null} T"}</M> onto <M>{"\\operatorname{range} T"}</M>.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          In <M>{"\\mathbb{R}^3"}</M>, the quotient by a plane through 0 is one-dimensional: each element is a parallel
          plane, labelled by its height. Polynomials modulo the constants are differentiation&rsquo;s view of polynomials:
          the isomorphism theorem identifies them with the range of <M>{"D"}</M>. Functions on <M>{"[0, 1]"}</M> modulo those
          that vanish at <M>{"\\tfrac12"}</M> form a one-dimensional space, recording just <M>{"f(\\tfrac12)"}</M>.
        </p>
      </Example>

      <Remark title="why bother">
        <p>
          Quotients let us ignore what does not matter, and they appear whenever a map is not injective. If{" "}
          <M>{"T"}</M> maps a subspace <M>{"U"}</M> into itself, it induces a map on <M>{"V/U"}</M>, and the two pieces
          together often tell us everything about <M>{"T"}</M>; this is how triangular forms are proved. In analysis,
          function spaces are taken modulo functions that vanish almost everywhere.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>If U is a 2-dimensional subspace of ℝ⁵, what is the dimension of ℝ⁵/U?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "equal",
      rung: "check",
      prompt: <p>When is v + U equal to w + U?</p>,
      answer: {
        kind: "choice",
        options: ["When v = w only", "When v − w lies in U", "When v and w are parallel", "When v and w are both in U"],
        correct: [1],
      },
    },
    {
      key: "coset",
      rung: "apply",
      prompt: (
        <p>
          In <M>{"\\mathbb{R}^2"}</M> with <M>{"U"}</M> the x-axis, the coset <M>{"(3, 2) + U"}</M> contains{" "}
          <M>{"(-5, y)"}</M> for which <M>{"y"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "poly",
      rung: "apply",
      prompt: <p>Polynomials of degree at most 4, modulo the constant polynomials, form a space of what dimension?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "iso",
      rung: "apply",
      prompt: <p>A linear map T from ℝ⁶ has a null space of dimension 2. The quotient ℝ⁶/null T is isomorphic to what?</p>,
      answer: {
        kind: "choice",
        options: ["The null space of T", "The range of T, a space of dimension 4", "ℝ⁶", "ℝ²"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that addition on V/U is well defined. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes v + U = v′ + U and w + U = w′ + U, so v − v′ and w − w′ lie in U.",
          "Notes (v + w) − (v′ + w′) = (v − v′) + (w − w′) lies in U, since U is closed under addition.",
          "Concludes (v + w) + U = (v′ + w′) + U.",
        ],
      },
    },
    {
      key: "eval",
      rung: "stretch",
      prompt: <p>Let V be the polynomials of degree at most 3 and U those with p(1) = 0. What is the dimension of V/U, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes U is the null space of the linear map p ↦ p(1) from V to ℝ.",
          "Notes this map is onto, so by the isomorphism theorem V/U ≅ ℝ.",
          "Concludes the dimension is 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the quotient space V/U is, why its operations are well defined, why its dimension is dim V − dim U, and how the first isomorphism theorem identifies V/null T with range T.",

  glimpse: (
    <p>
      The next lesson introduces the dual space, the space of linear functionals, which interacts neatly with quotients and
      null spaces. Invariant subspaces and their quotients drive the theory of eigenvalues, and modules have quotients built
      the same way.
    </p>
  ),
};
