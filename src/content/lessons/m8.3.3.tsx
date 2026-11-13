import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ComplementViz } from "@/components/viz/ComplementViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.3.3",
  minutes: 85,
  links: {
    revisits: ["m8.3.2", "m8.1.5", "m3.4.5"],
    foreshadows: ["m8.3.4", "m18.6.2", "m33.4.2"],
  },

  puzzle: (
    <>
      <p>
        Drop a perpendicular from a point to a plane, and you find the nearest point of the plane. This picture from school
        geometry works in any inner product space, including spaces of functions. It also answers a question left by
        duality: in an inner product space, every linear functional is an inner product with a fixed vector.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Tilt the plane <M>{"U"}</M> and move the vector <M>{"v"}</M>. Watch <M>{"v"}</M> split into a part in{" "}
        <M>{"U"}</M> and a part in the perpendicular line.
      </p>
      <ComplementViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orthogonal complement">
        <p>
          For a subset <M>{"U"}</M> of <M>{"V"}</M>, the <strong>orthogonal complement</strong> is{" "}
          <M>{"U^\\perp = \\{v : \\langle v, u \\rangle = 0 \\text{ for all } u \\in U\\}"}</M>, always a subspace.
        </p>
      </Definition>

      <Theorem title="direct sum decomposition">
        <p>
          If <M>{"U"}</M> is a finite-dimensional subspace, then <M>{"V = U \\oplus U^\\perp"}</M>: every <M>{"v"}</M> is
          uniquely <M>{"u + w"}</M> with <M>{"u \\in U"}</M>, <M>{"w \\in U^\\perp"}</M>. Also{" "}
          <M>{"(U^\\perp)^\\perp = U"}</M>, and if <M>{"V"}</M> is finite-dimensional,{" "}
          <M>{"\\dim U^\\perp = \\dim V - \\dim U"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Take an orthonormal basis <M>{"e_1, \\dots, e_m"}</M> of <M>{"U"}</M>, and let{" "}
          <M>{"u = \\sum \\langle v, e_k \\rangle e_k"}</M>, <M>{"w = v - u"}</M>. Then{" "}
          <M>{"\\langle w, e_j \\rangle = \\langle v, e_j \\rangle - \\langle v, e_j \\rangle = 0"}</M> for each{" "}
          <M>{"j"}</M>, so <M>{"w \\in U^\\perp"}</M>. Uniqueness: a vector in both <M>{"U"}</M> and{" "}
          <M>{"U^\\perp"}</M> is orthogonal to itself, so it is 0.
        </p>
      </Proof>

      <Definition title="orthogonal projection">
        <p>
          The map <M>{"P_U v = u"}</M> is the <strong>orthogonal projection</strong> onto <M>{"U"}</M>. It is linear, with
          range <M>{"U"}</M> and null space <M>{"U^\\perp"}</M>, satisfies <M>{"P_U^2 = P_U"}</M>, and{" "}
          <M>{"\\|P_U v\\| \\le \\|v\\|"}</M>.
        </p>
      </Definition>

      <Theorem title="the Riesz representation theorem">
        <p>
          On a finite-dimensional inner product space, every linear functional <M>{"\\varphi"}</M> has the form{" "}
          <M>{"\\varphi(v) = \\langle v, u \\rangle"}</M> for exactly one vector <M>{"u"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Take an orthonormal basis and set{" "}
          <M>{"u = \\overline{\\varphi(e_1)}e_1 + \\cdots + \\overline{\\varphi(e_n)}e_n"}</M>. Then{" "}
          <M>{"\\langle e_k, u \\rangle = \\varphi(e_k)"}</M> for each basis vector, and both sides are linear in{" "}
          <M>{"v"}</M>. If two vectors worked, their difference would be orthogonal to everything, including itself.
        </p>
      </Proof>

      <Example title="a functional on polynomials">
        <p>
          On polynomials of degree at most 2 with <M>{"\\langle p, q \\rangle = \\int_{-1}^1 pq"}</M>, the functional{" "}
          <M>{"p \\mapsto p(0)"}</M> is not obviously an integral. Riesz says there is a polynomial <M>{"u"}</M> with{" "}
          <M>{"p(0) = \\int_{-1}^1 p u"}</M> for every such <M>{"p"}</M>; one can compute{" "}
          <M>{"u(x) = \\tfrac98 - \\tfrac{15}{8}x^2"}</M>.
        </p>
      </Example>

      <Remark title="identifying V with its dual">
        <p>
          Riesz gives the identification of <M>{"V"}</M> with <M>{"V'"}</M> that was missing without extra structure: the
          inner product provides it. In infinite dimensions the same theorem holds for complete inner product spaces, Hilbert
          spaces, and it underlies existence theorems for PDE such as the Lax-Milgram theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>If U is a 3-dimensional subspace of ℝ⁸, what is the dimension of U⊥?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "proj",
      rung: "check",
      prompt: <p>Which properties does an orthogonal projection P have? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["P² = P", "‖Pv‖ ≤ ‖v‖", "P is always invertible", "null P = U⊥"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "line",
      rung: "apply",
      prompt: <p>Project v = (3, 1) onto the line spanned by (1, 1) in ℝ². What is the first coordinate of the projection?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "perp",
      rung: "apply",
      prompt: <p>For that projection, what is the squared length of the perpendicular part?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "riesz",
      rung: "apply",
      prompt: <p>On ℝ³ with the dot product, the functional φ(x, y, z) = 2x − y + 4z equals ⟨v, u⟩ for which u? Give the sum of its coordinates.</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that U ∩ U⊥ = {"{0}"}. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes v in both U and U⊥.",
          "Notes ⟨v, v⟩ = 0, since v is in U and orthogonal to everything in U.",
          "Concludes v = 0 by positive definiteness.",
        ],
      },
    },
    {
      key: "check",
      rung: "stretch",
      prompt: <p>Check the example: show that u(x) = 9/8 − (15/8)x² satisfies ∫ u = 1 and ∫ x² u = 0 over [−1, 1]. Why do these two facts, with symmetry, prove that ∫ p u = p(0) for every quadratic p?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes ∫ u = 9/4 − 5/4 = 1 and ∫ x²u = 3/4 − 3/4 = 0.",
          "Notes ∫ x u = 0 since x u is odd.",
          "Uses linearity: for p = a + bx + cx², ∫ p u = a = p(0). Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the orthogonal complement is, why V = U ⊕ U⊥, what orthogonal projection does and its properties, and the Riesz representation theorem with an example.",

  glimpse: (
    <p>
      The next lesson shows that orthogonal projection solves minimisation problems, from least squares to best polynomial
      approximation. Statistics treats regression as projection, and the Lax-Milgram theorem extends Riesz to PDE.
    </p>
  ),
};
