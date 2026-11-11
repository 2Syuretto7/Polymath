import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SubspaceViz } from "@/components/viz/SubspaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.4.1",
  minutes: 70,
  links: {
    revisits: ["m3.1.1", "m3.1.3", "m3.3.1"],
    foreshadows: ["m3.4.2", "m3.4.4", "m8.1.1"],
  },

  puzzle: (
    <>
      <p>
        A line through the origin in the plane and a plane through the origin in space share something with the set of
        all polynomials of degree at most 2, and with the set of all solutions of the differential equation{" "}
        <M>{"y'' + y = 0"}</M>: you can add any two members, or multiply one by a number, and never leave the set. A line
        that misses the origin does not have this property. Why does the origin matter so much, and what can be said about
        every set with this property at once?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a candidate set in the plane. Move u and v around inside it and change the number c. A set passes the test if
        u + v and cu always stay inside, however you choose them. Red arrows show where a set fails.
      </p>
      <SubspaceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="vector space">
        <p>
          A <strong>vector space</strong> is a set V of objects, called vectors, with an addition and a multiplication by
          real numbers, such that sums and multiples stay in V and the familiar rules hold: addition is commutative and
          associative, there is a zero vector 0 with <M>{"v + 0 = v"}</M>, every v has a negative <M>{"-v"}</M>, and{" "}
          <M>{"c(u + v) = cu + cv"}</M>, <M>{"(c + d)v = cv + dv"}</M>, <M>{"c(dv) = (cd)v"}</M>, <M>{"1v = v"}</M>.
        </p>
        <p>
          The model is <M>{"\\mathbb{R}^n"}</M>. Others are the space of all m by n matrices, the space of polynomials, and
          the space of all functions from <M>{"\\mathbb{R}"}</M> to <M>{"\\mathbb{R}"}</M>, with addition and scaling done
          pointwise.
        </p>
      </Definition>

      <Definition title="subspace">
        <p>
          A <strong>subspace</strong> of a vector space V is a non-empty subset S that is closed under addition and scalar
          multiplication: if u and v are in S and c is any number, then <M>{"u + v"}</M> and <M>{"cu"}</M> are in S.
          Equivalently, every linear combination <M>{"cu + dv"}</M> of members of S is in S.
        </p>
      </Definition>

      <Theorem title="every subspace contains the zero vector">
        <p>If S is a subspace, then 0 is in S. A subspace is itself a vector space.</p>
      </Theorem>
      <Proof>
        <p>
          S is non-empty, so it contains some u. Closure under multiplication with c = 0 gives{" "}
          <M>{"0u = 0"}</M> in S. Similarly <M>{"(-1)u = -u"}</M> is in S, and the rules of arithmetic hold in S because
          they hold in V.
        </p>
      </Proof>
      <p>
        This gives a quick test in one direction: a set that does not contain 0, like a line missing the origin, is not a
        subspace.
      </p>

      <Example title="the subspaces of the plane and of space">
        <p>
          The subspaces of <M>{"\\mathbb{R}^2"}</M> are exactly: the zero vector alone, the lines through the origin, and
          the whole plane. The subspaces of <M>{"\\mathbb{R}^3"}</M> are the zero vector, lines through the origin, planes
          through the origin, and all of space. A plane such as <M>{"x + y + z = 0"}</M> is a subspace; the parallel plane{" "}
          <M>{"x + y + z = 1"}</M> is not.
        </p>
      </Example>

      <Example title="span">
        <p>
          The set of all linear combinations of some vectors <M>{"v_1, \\dots, v_k"}</M> is their{" "}
          <strong>span</strong>:
        </p>
        <MD>{"\\operatorname{span}(v_1, \\dots, v_k) = \\{c_1v_1 + \\dots + c_kv_k : c_1, \\dots, c_k \\in \\mathbb{R}\\}."}</MD>
        <p>
          It is always a subspace, since a combination of combinations is a combination. It is the smallest subspace
          containing all the <M>{"v_i"}</M>. Every subspace of <M>{"\\mathbb{R}^n"}</M> turns out to be the span of finitely
          many vectors.
        </p>
      </Example>

      <Example title="a function space">
        <p>
          The solutions of <M>{"y'' + y = 0"}</M> form a subspace of the space of functions: if <M>{"y_1"}</M> and{" "}
          <M>{"y_2"}</M> are solutions, so is <M>{"c_1y_1 + c_2y_2"}</M>, because differentiation is linear. In fact this
          subspace is the span of <M>{"\\sin x"}</M> and <M>{"\\cos x"}</M>. The equation <M>{"y'' + y = 1"}</M> has
          solutions that do not form a subspace: the zero function is not one of them.
        </p>
      </Example>

      <Remark title="intersections and unions">
        <p>
          The intersection of two subspaces is a subspace: if u and v lie in both, so do their sums and multiples. The union
          usually is not, as the two axes show. The smallest subspace containing both S and T is their sum,{" "}
          <M>{"S + T = \\{s + t : s \\in S, t \\in T\\}"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "zero",
      rung: "check",
      prompt: <p>Which vector must every subspace contain?</p>,
      answer: {
        kind: "choice",
        options: ["The vector (1, 1, …, 1).", "The zero vector.", "Every standard basis vector.", "No particular vector."],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these are subspaces of <M>{"\\mathbb{R}^3"}</M>? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "The plane x − 2y + z = 0.",
          "The plane x − 2y + z = 3.",
          "The line of all multiples of (1, 4, 2).",
          "The set of vectors with x ≥ 0.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "fails",
      rung: "apply",
      prompt: (
        <p>
          S is the set of vectors (x, y) in the plane with <M>{"xy \\ge 0"}</M>, the first and third quadrants with the
          axes. Which closure property fails?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Closure under addition, for example (2, 0) + (0, −1) = (2, −1).",
          "Closure under scalar multiplication.",
          "Both fail.",
          "Neither fails; S is a subspace.",
        ],
        correct: [0],
      },
    },
    {
      key: "matrices",
      rung: "apply",
      prompt: <p>Which sets of 2 by 2 matrices are subspaces of the space of all 2 by 2 matrices? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The symmetric matrices.", "The invertible matrices.", "The upper triangular matrices.", "The matrices with determinant 0."],
        correct: [0, 2],
      },
    },
    {
      key: "span",
      rung: "apply",
      prompt: (
        <p>
          The span of (1, 0, 1) and (0, 1, 1) in <M>{"\\mathbb{R}^3"}</M> is a plane through the origin. If its equation
          is <M>{"x + y + cz = 0"}</M>, what is c?
        </p>
      ),
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "intersect",
      rung: "prove",
      prompt: (
        <p>
          Prove that the intersection of two subspaces S and T of V is a subspace. Then give an example in{" "}
          <M>{"\\mathbb{R}^2"}</M> showing that the union need not be one.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that 0 lies in both, so the intersection is non-empty.",
          "Shows that if u and v lie in both S and T, then u + v and cu lie in both, by closure of each.",
          "Gives a valid counterexample for the union, such as the two axes with (1, 0) + (0, 1). A clear outline earns full credit.",
        ],
      },
    },
    {
      key: "union",
      rung: "stretch",
      prompt: (
        <p>
          Prove that the union of two subspaces S and T is a subspace only when one of them contains the other.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes neither contains the other, and picks s in S but not T, and t in T but not S.",
          "Argues that s + t is in neither: if it were in S, then t = (s + t) − s would be in S, and similarly for T.",
          "Concludes the union is not closed under addition, and notes the converse direction is immediate. Any sound argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a vector space and a subspace are, why every subspace contains the zero vector, why a span is always a subspace, and why a line missing the origin fails.",

  glimpse: (
    <p>
      The next lesson meets the two subspaces every matrix carries, its null space and column space. Linear Algebra II
      takes vector spaces over any field, such as the integers modulo a prime, where the same definitions still work.
    </p>
  ),
};
