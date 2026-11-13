import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MaschkeViz } from "@/components/viz/MaschkeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.6.2",
  minutes: 80,
  links: {
    revisits: ["m14.6.1", "m14.5.1", "m7.2.1"],
    foreshadows: ["m14.6.3", "m14.6.4", "m32.2.2"],
  },

  puzzle: (
    <>
      <p>
        A representation with an invariant subspace <M>{"W"}</M> looks like a block triangular matrix. Can we always choose a
        second invariant subspace to make it block diagonal, so that the representation splits into two smaller ones? Over the
        real numbers the answer is yes; over a field with two elements it can be no.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose any complement to the invariant line and average its projection over the group.</p>
      <MaschkeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="complete reducibility">
        <p>
          A representation is <strong>completely reducible</strong>, or semisimple, if every subrepresentation{" "}
          <M>{"W"}</M> has an invariant complement <M>{"U"}</M>, so that <M>{"V = W \\oplus U"}</M> as representations.
        </p>
      </Definition>

      <Theorem title="Maschke’s theorem">
        <p>
          Let <M>{"G"}</M> be a finite group and <M>{"k"}</M> a field whose characteristic does not divide{" "}
          <M>{"|G|"}</M>. Then every finite-dimensional representation of <M>{"G"}</M> over <M>{"k"}</M> is completely
          reducible, and so is a direct sum of irreducible representations.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"W"}</M> be invariant and <M>{"\\pi : V \\to W"}</M> any linear projection onto <M>{"W"}</M>. Define
        </p>
        <MD>{"\\bar\\pi = \\frac{1}{|G|} \\sum_{g \\in G} \\rho(g)\\, \\pi\\, \\rho(g)^{-1},"}</MD>
        <p>
          which makes sense because <M>{"|G|"}</M> is invertible in <M>{"k"}</M>. Each term maps <M>{"V"}</M> into{" "}
          <M>{"W"}</M> and fixes <M>{"W"}</M> pointwise, since <M>{"\\rho(g)^{-1}w \\in W"}</M>, so{" "}
          <M>{"\\bar\\pi"}</M> is again a projection onto <M>{"W"}</M>. Reindexing the sum shows{" "}
          <M>{"\\rho(h)\\bar\\pi = \\bar\\pi\\rho(h)"}</M> for every <M>{"h"}</M>. So <M>{"U = \\ker\\bar\\pi"}</M> is
          invariant, and <M>{"V = W \\oplus U"}</M>. Induction on dimension gives a sum of irreducibles.
        </p>
      </Proof>

      <Example title="failure in characteristic p">
        <p>
          Let <M>{"G = \\mathbb{Z}/p"}</M> act on <M>{"\\mathbb{F}_p^2"}</M> by{" "}
          <M>{"g \\mapsto \\begin{pmatrix} 1 & g \\\\ 0 & 1 \\end{pmatrix}"}</M>. The line spanned by <M>{"e_1"}</M> is
          invariant, but it is the only invariant line, since a non-identity element has only one eigenline. So it has no
          invariant complement. Likewise over <M>{"\\mathbb{R}"}</M> the group <M>{"\\mathbb{Z}"}</M>, which is infinite,
          acting by the same matrices, is not completely reducible.
        </p>
      </Example>

      <Remark title="an invariant inner product">
        <p>
          Over <M>{"\\mathbb{C}"}</M> there is a second proof. Average any inner product over the group:{" "}
          <M>{"\\langle u, v \\rangle_G = \\sum_g \\langle \\rho(g)u, \\rho(g)v \\rangle"}</M>. Every{" "}
          <M>{"\\rho(g)"}</M> is then unitary, and the orthogonal complement of an invariant subspace is invariant. The same
          averaging works for compact groups, with an integral in place of the sum.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>What does Maschke&rsquo;s theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "If the characteristic of k does not divide |G|, every representation of the finite group G is a direct sum of irreducibles.",
          "Every representation is irreducible.",
          "Every group has a faithful representation of degree 1.",
          "Representations exist only over ℂ.",
        ],
        correct: [0],
      },
    },
    {
      key: "where",
      rung: "check",
      prompt: <p>Where does the proof use the hypothesis on the characteristic?</p>,
      answer: {
        kind: "choice",
        options: ["To divide by |G| when averaging", "To find eigenvalues", "To choose a basis", "To show W is invariant"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation over ℝ, what is the kernel of the averaged projection, whatever direction you choose for U?</p>,
      answer: { kind: "choice", options: ["The line through (0, 1)", "U itself", "The line W", "The whole plane"], correct: [0] },
    },
    {
      key: "f2",
      rung: "apply",
      prompt: <p>In the 𝔽₂ example, how many invariant complements does the line {"{00, 11}"} have?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "unip",
      rung: "apply",
      prompt: <p>Is the representation <M>{"n \\mapsto \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}"}</M> of <M>{"\\mathbb{Z}"}</M> on <M>{"\\mathbb{C}^2"}</M> completely reducible?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: the line spanned by e₁ is the only invariant line, so it has no invariant complement.",
          "Yes, by Maschke’s theorem.",
          "Yes, since ℂ has characteristic 0.",
          "It is not a representation.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the averaged map <M>{"\\bar\\pi"}</M> commutes with every <M>{"\\rho(h)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ρ(h) π̄ ρ(h)⁻¹ as the average of ρ(hg) π ρ(hg)⁻¹ over g.",
          "Notes that g ↦ hg is a bijection of G, so the sum is unchanged.",
          "Concludes ρ(h) π̄ = π̄ ρ(h).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Maschke&rsquo;s theorem to show that every element of a finite group acts diagonalisably in any complex representation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Restricts the representation to the cyclic subgroup generated by the element g.",
          "Notes that the irreducible representations of a finite cyclic group over ℂ have degree 1, for example because commuting operators share an eigenvector.",
          "Concludes that V is a sum of lines on which g acts by scalars, so ρ(g) is diagonalisable. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what complete reducibility means, how averaging a projection proves Maschke's theorem, where the characteristic matters with an example of failure, and the invariant inner product proof over ℂ.",

  glimpse: (
    <p>
      The next lesson introduces characters, which identify the irreducible pieces of a representation. Character tables then
      record all of them at once, and induced representations build representations of a group from those of a subgroup.
    </p>
  ),
};
