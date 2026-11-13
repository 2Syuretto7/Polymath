import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CharacterInnerViz } from "@/components/viz/CharacterInnerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.6.3",
  minutes: 90,
  links: {
    revisits: ["m14.6.2", "m14.6.1", "m7.4.4"],
    foreshadows: ["m14.6.4", "m32.2.2", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        A representation of degree 100 is a hundred-by-hundred matrix for every group element: far too much to look at.
        Maschke says it splits into irreducible pieces. Remarkably, one number per element, the trace of its matrix, is enough
        to tell which pieces occur and how often. Why should traces know so much?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build a representation of S₃ from irreducible pieces, and recover the pieces from its character.</p>
      <CharacterInnerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="characters">
        <p>
          Let <M>{"\\rho : G \\to GL(V)"}</M> be a complex representation of a finite group. Its <strong>character</strong>{" "}
          is <M>{"\\chi(g) = \\operatorname{tr} \\rho(g)"}</M>. It satisfies <M>{"\\chi(1) = \\dim V"}</M>,{" "}
          <M>{"\\chi(hgh^{-1}) = \\chi(g)"}</M>, and <M>{"\\chi(g^{-1}) = \\overline{\\chi(g)}"}</M>, since{" "}
          <M>{"\\rho(g)"}</M> has finite order and so its eigenvalues are roots of unity. Characters add under direct sums. On
          class functions define
        </p>
        <MD>{"\\langle \\chi, \\psi \\rangle = \\frac{1}{|G|} \\sum_{g \\in G} \\chi(g) \\overline{\\psi(g)}."}</MD>
      </Definition>

      <Theorem title="Schur’s lemma">
        <p>
          A homomorphism between irreducible representations is zero or an isomorphism. Over <M>{"\\mathbb{C}"}</M>, every
          homomorphism from an irreducible representation to itself is a scalar.
        </p>
      </Theorem>

      <Proof>
        <p>
          The kernel and image of a homomorphism <M>{"\\varphi"}</M> are subrepresentations, so each is 0 or everything. For the
          second part, <M>{"\\varphi"}</M> has an eigenvalue <M>{"\\lambda"}</M> over <M>{"\\mathbb{C}"}</M>, and{" "}
          <M>{"\\varphi - \\lambda I"}</M> is a homomorphism that is not injective, so it is zero.
        </p>
      </Proof>

      <Theorem title="orthonormality">
        <p>
          The characters of the irreducible representations are orthonormal: <M>{"\\langle \\chi_i, \\chi_j \\rangle"}</M> is 1
          if <M>{"i = j"}</M> and 0 otherwise.
        </p>
      </Theorem>

      <Proof>
        <p>
          For representations <M>{"V, W"}</M>, the space of homomorphisms <M>{"V \\to W"}</M> is the fixed part of{" "}
          <M>{"\\mathrm{Hom}(V, W)"}</M> under the action <M>{"g \\cdot f = \\rho_W(g) f \\rho_V(g)^{-1}"}</M>. Averaging over{" "}
          <M>{"G"}</M> is a projection onto that fixed part, and its trace is{" "}
          <M>{"\\frac{1}{|G|}\\sum_g \\chi_W(g)\\overline{\\chi_V(g)} = \\langle \\chi_W, \\chi_V \\rangle"}</M>. So this number
          is the dimension of the space of homomorphisms, which by Schur is 1 for isomorphic irreducibles and 0 otherwise.
        </p>
      </Proof>

      <Theorem title="consequences">
        <p>
          If <M>{"V \\cong \\bigoplus m_i V_i"}</M>, then <M>{"m_i = \\langle \\chi_V, \\chi_i \\rangle"}</M> and{" "}
          <M>{"\\langle \\chi_V, \\chi_V \\rangle = \\sum m_i^2"}</M>. So a representation is determined up to isomorphism by
          its character, and it is irreducible exactly when <M>{"\\langle \\chi, \\chi \\rangle = 1"}</M>.
        </p>
      </Theorem>

      <Example title="the regular representation">
        <p>
          <M>{"G"}</M> acts on <M>{"\\mathbb{C}[G]"}</M> by left multiplication. Its character is <M>{"|G|"}</M> at 1 and 0
          elsewhere, since no other element fixes a basis vector. So <M>{"m_i = \\chi_i(1)"}</M>: every irreducible appears as
          many times as its degree, and
        </p>
        <MD>{"|G| = \\sum_i (\\dim V_i)^2."}</MD>
      </Example>

      <Remark title="a finite list">
        <p>
          Since irreducible characters are orthonormal class functions, there are at most as many as there are conjugacy
          classes. The next lesson shows there are exactly that many.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the character of a representation?</p>,
      answer: {
        kind: "choice",
        options: ["The function sending each group element to the trace of its matrix", "The determinant of each matrix", "The degree of the representation", "The set of eigenvectors"],
        correct: [0],
      },
    },
    {
      key: "class",
      rung: "check",
      prompt: <p>Why is a character constant on conjugacy classes?</p>,
      answer: {
        kind: "choice",
        options: ["Because tr(ABA⁻¹) = tr(B)", "Because every group is abelian", "Because characters are homomorphisms", "Because traces are always integers"],
        correct: [0],
      },
    },
    {
      key: "regular",
      rung: "apply",
      prompt: <p>In the visualisation, choose the regular representation. What is <M>{"\\langle \\chi, \\chi \\rangle"}</M>?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "perm",
      rung: "apply",
      prompt: <p>The permutation representation of <M>{"S_3"}</M> on <M>{"\\mathbb{C}^3"}</M> has character (3, 1, 0). How many copies of the standard representation does it contain?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>A representation has <M>{"\\langle \\chi, \\chi \\rangle = 2"}</M>. What can you conclude?</p>,
      answer: {
        kind: "choice",
        options: ["It is a sum of two non-isomorphic irreducibles.", "It is irreducible.", "It has degree 2.", "It is two copies of one irreducible."],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"V \\cong \\bigoplus_i m_i V_i"}</M> with the <M>{"V_i"}</M> distinct irreducibles, then <M>{"\\langle \\chi_V, \\chi_V \\rangle = \\sum_i m_i^2"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes χ_V = Σ mᵢ χᵢ, since characters add over direct sums.",
          "Expands the inner product bilinearly.",
          "Uses orthonormality to get Σ mᵢ².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every irreducible complex representation of a finite abelian group has degree 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each ρ(g) commutes with every ρ(h), so it is a homomorphism of the representation to itself.",
          "Uses Schur’s lemma to see each ρ(g) is a scalar.",
          "Concludes every line is invariant, so irreducibility forces degree 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a character is, Schur's lemma, why irreducible characters are orthonormal, how inner products recover multiplicities, and what the regular representation tells us about the degrees.",

  glimpse: (
    <p>
      The next lesson assembles all the irreducible characters into the character table and proves its column relations.
      Induced representations and Frobenius reciprocity are natural next steps, and Hom of modules returns in homological
      algebra.
    </p>
  ),
};
