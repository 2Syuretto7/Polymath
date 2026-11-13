import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CanonicalFormViz } from "@/components/viz/CanonicalFormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.5.4",
  minutes: 85,
  links: {
    revisits: ["m14.5.3", "m8.5.3", "m14.5.1"],
    foreshadows: ["m14.6.1", "m14.6.3", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        In linear algebra the Jordan form took pages of work with generalised eigenvectors. Now look at a vector space with a
        linear map as a module over <M>{"k[x]"}</M>, and remember that <M>{"k[x]"}</M> is a principal ideal domain. Does the
        Jordan form simply fall out of the structure theorem?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose Jordan blocks for the eigenvalues 2 and 3, and compare the two canonical forms of the same map.</p>
      <CanonicalFormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the module of a linear map">
        <p>
          Let <M>{"V"}</M> be a finite-dimensional vector space over <M>{"k"}</M> and <M>{"T : V \\to V"}</M> linear. Then{" "}
          <M>{"V"}</M> is a <M>{"k[x]"}</M>-module with <M>{"p \\cdot v = p(T)v"}</M>. It is finitely generated and torsion,
          since the characteristic polynomial kills it, so the free part is zero:
        </p>
        <MD>{"V \\cong k[x]/(d_1) \\oplus \\cdots \\oplus k[x]/(d_r), \\qquad d_1 \\mid \\cdots \\mid d_r."}</MD>
        <p>
          Submodules are exactly the <M>{"T"}</M>-invariant subspaces, and two maps give isomorphic modules exactly when they
          are similar.
        </p>
      </Definition>

      <Theorem title="companion matrices">
        <p>
          On <M>{"k[x]/(p)"}</M> with <M>{"p = x^n + c_{n-1}x^{n-1} + \\cdots + c_0"}</M>, multiplication by <M>{"x"}</M> in
          the basis <M>{"1, x, \\dots, x^{n-1}"}</M> has the companion matrix, with ones below the diagonal and last column{" "}
          <M>{"-c_0, \\dots, -c_{n-1}"}</M>. Its minimal and characteristic polynomials are both <M>{"p"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Multiplication by <M>{"x"}</M> sends <M>{"x^i"}</M> to <M>{"x^{i+1}"}</M> for <M>{"i < n - 1"}</M>, and{" "}
          <M>{"x^{n-1}"}</M> to <M>{"x^n = -c_0 - \\cdots - c_{n-1}x^{n-1}"}</M>. Since <M>{"1, x, \\dots, x^{n-1}"}</M> are
          independent, no polynomial of degree less than <M>{"n"}</M> kills <M>{"1"}</M>, so the minimal polynomial has degree{" "}
          <M>{"n"}</M> and divides <M>{"p"}</M>.
        </p>
      </Proof>

      <Theorem title="rational and Jordan canonical forms">
        <p>
          Every <M>{"T"}</M> is similar to a block diagonal matrix of companion matrices of its invariant factors{" "}
          <M>{"d_1 \\mid \\cdots \\mid d_r"}</M>: the rational canonical form. The minimal polynomial is <M>{"d_r"}</M> and the
          characteristic polynomial is <M>{"d_1 \\cdots d_r"}</M>. If the characteristic polynomial splits over <M>{"k"}</M>,
          the elementary divisors are <M>{"(x - \\lambda)^m"}</M>, and on <M>{"k[x]/((x - \\lambda)^m)"}</M> the basis{" "}
          <M>{"(x - \\lambda)^{m-1}, \\dots, (x - \\lambda), 1"}</M> gives a Jordan block. This is the Jordan form.
        </p>
      </Theorem>

      <Example title="reading the forms">
        <p>
          Take Jordan blocks of sizes 2 and 1 for the eigenvalue 2, and one block for 3. The elementary divisors are{" "}
          <M>{"(x-2)^2, (x-2), (x-3)"}</M>. Grouping the largest powers together gives the invariant factors{" "}
          <M>{"(x - 2) \\mid (x-2)^2(x-3)"}</M>, so the minimal polynomial is <M>{"(x-2)^2(x-3)"}</M> and the rational form has
          a 1 × 1 block and a 3 × 3 companion block.
        </p>
      </Example>

      <Remark title="Cayley-Hamilton for free">
        <p>
          Since <M>{"d_r"}</M> divides <M>{"d_1 \\cdots d_r"}</M>, the minimal polynomial divides the characteristic
          polynomial, which is the Cayley-Hamilton theorem. The rational form works over any field, for instance over{" "}
          <M>{"\\mathbb{Q}"}</M> where eigenvalues may not exist, and it decides similarity: two matrices are similar exactly
          when they have the same invariant factors.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "module",
      rung: "check",
      prompt: <p>How does a linear map <M>{"T"}</M> make <M>{"V"}</M> a <M>{"k[x]"}</M>-module?</p>,
      answer: {
        kind: "choice",
        options: ["A polynomial p acts on v as p(T)v.", "x acts as the identity.", "Polynomials act by their constant terms only.", "By the dual map."],
        correct: [0],
      },
    },
    {
      key: "sim",
      rung: "check",
      prompt: <p>When are two square matrices over a field similar?</p>,
      answer: {
        kind: "choice",
        options: ["When they have the same invariant factors", "When they have the same trace", "When they have the same determinant", "When they have the same eigenvalues"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose blocks 1 + 1 for the eigenvalue 2 and none for 3. What is the minimal polynomial?</p>,
      answer: { kind: "choice", options: ["x − 2", "(x − 2)²", "(x − 2)(x − 3)", "x²"], correct: [0] },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>A map has elementary divisors <M>{"(x-2)^3"}</M> and <M>{"(x-3)^2"}</M>. What is the size of the largest companion block in its rational canonical form?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many similarity classes of 3 × 3 complex matrices have characteristic polynomial <M>{"(x-1)^3"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a linear map <M>{"T"}</M> is diagonalisable over <M>{"k"}</M> if its minimal polynomial is a product of distinct linear factors.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the elementary divisors are prime power factors of the invariant factors, all of which divide the minimal polynomial.",
          "Deduces that every elementary divisor is x − λ, of degree 1.",
          "Concludes that all Jordan blocks are 1 × 1, so T is diagonalisable.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a square matrix over a field is similar to its transpose.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that similarity is decided by invariant factors, or by the Smith form of xI − A.",
          "Notes that xI − Aᵀ is the transpose of xI − A, and transposing does not change the gcds of minors, so the invariant factors agree.",
          "Concludes A and Aᵀ are similar. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a linear map makes a vector space a k[x]-module, how the structure theorem gives the rational and Jordan canonical forms, how to pass between elementary divisors and invariant factors, and why Cayley-Hamilton follows.",

  glimpse: (
    <p>
      Representations of groups are modules too, over group algebras, and their characters play the role of invariants. Hom
      and tensor products of modules extend these ideas to homological algebra.
    </p>
  ),
};
