import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TriangleRepViz } from "@/components/viz/TriangleRepViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.6.1",
  minutes: 85,
  links: {
    revisits: ["m14.5.4", "m7.4.1", "m7.3.1"],
    foreshadows: ["m14.6.2", "m14.6.3", "m32.2.2"],
  },

  puzzle: (
    <>
      <p>
        Groups are abstract, but matrices can be computed with. A symmetry of a triangle can be recorded as a 2 × 2 matrix
        acting on the plane, and composing symmetries becomes multiplying matrices. In how many essentially different ways can
        a group be written as matrices, and what does that reveal about the group?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a symmetry of the triangle and a representation, and see the matrix it becomes.</p>
      <TriangleRepViz />
    </>
  ),

  theory: (
    <>
      <Definition title="representations">
        <p>
          A <strong>representation</strong> of a group <M>{"G"}</M> on a vector space <M>{"V"}</M> over a field{" "}
          <M>{"k"}</M> is a homomorphism <M>{"\\rho : G \\to GL(V)"}</M>. Its <strong>degree</strong> is{" "}
          <M>{"\\dim V"}</M>. Equivalently, <M>{"G"}</M> acts on <M>{"V"}</M> by linear maps. Two representations are{" "}
          <strong>isomorphic</strong> if a linear isomorphism <M>{"\\varphi : V \\to W"}</M> satisfies{" "}
          <M>{"\\varphi \\rho(g) = \\sigma(g) \\varphi"}</M> for all <M>{"g"}</M>.
        </p>
      </Definition>

      <Example title="representations of S₃">
        <p>
          The <strong>trivial</strong> representation sends every element to 1. The <strong>sign</strong> representation sends
          rotations to 1 and reflections to <M>{"-1"}</M>. The <strong>standard</strong> representation is the action on the
          plane of the triangle, where <M>{"r"}</M> is rotation by <M>{"2\\pi/3"}</M>. The <strong>permutation</strong>{" "}
          representation on <M>{"k^3"}</M> permutes the coordinates; it contains the line spanned by{" "}
          <M>{"(1, 1, 1)"}</M>, a copy of the trivial representation.
        </p>
      </Example>

      <Definition title="subrepresentations and irreducibility">
        <p>
          A subspace <M>{"W \\subseteq V"}</M> is a <strong>subrepresentation</strong> if <M>{"\\rho(g)W \\subseteq W"}</M>{" "}
          for all <M>{"g"}</M>. A non-zero representation is <strong>irreducible</strong> if its only subrepresentations are 0
          and itself.
        </p>
      </Definition>

      <Theorem title="the standard representation is irreducible">
        <p>Over <M>{"\\mathbb{R}"}</M> or <M>{"\\mathbb{C}"}</M>, the standard representation of <M>{"S_3"}</M> is irreducible.</p>
      </Theorem>

      <Proof>
        <p>
          A proper non-zero subrepresentation would be a line <M>{"L"}</M> fixed by every symmetry, so <M>{"L"}</M> would be an
          eigenline of <M>{"\\rho(r)"}</M>. Its eigenvalues are <M>{"e^{\\pm 2\\pi i/3}"}</M>, so over <M>{"\\mathbb{R}"}</M>{" "}
          it has none. Over <M>{"\\mathbb{C}"}</M> it has two eigenlines, and the reflection <M>{"s"}</M> swaps them, since{" "}
          <M>{"srs^{-1} = r^{-1}"}</M> exchanges the eigenvalues. So no line is fixed by all of <M>{"G"}</M>.
        </p>
      </Proof>

      <Remark title="modules over the group algebra">
        <p>
          The <strong>group algebra</strong> <M>{"k[G]"}</M> has basis the elements of <M>{"G"}</M>, multiplied as in the
          group. A representation is the same as a <M>{"k[G]"}</M>-module, with
        </p>
        <MD>{"\\Big(\\sum_g a_g g\\Big) \\cdot v = \\sum_g a_g \\rho(g) v."}</MD>
        <p>
          So the language of modules applies: subrepresentations are submodules, and isomorphisms are module isomorphisms. The
          trace <M>{"\\chi(g) = \\operatorname{tr} \\rho(g)"}</M> is the <strong>character</strong>; since{" "}
          <M>{"\\operatorname{tr}(ABA^{-1}) = \\operatorname{tr} B"}</M>, it is constant on conjugacy classes.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a representation of a group <M>{"G"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "A homomorphism from G to the invertible linear maps of a vector space.",
          "A list of the elements of G.",
          "A subgroup of G.",
          "A presentation by generators and relations.",
        ],
        correct: [0],
      },
    },
    {
      key: "irr",
      rung: "check",
      prompt: <p>When is a representation irreducible?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it is non-zero and its only invariant subspaces are 0 and itself.",
          "When every matrix is diagonal.",
          "When it has degree 1.",
          "When the group is simple.",
        ],
        correct: [0],
      },
    },
    {
      key: "trace",
      rung: "apply",
      prompt: <p>In the visualisation, what is the trace of a reflection in the standard representation?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "rot",
      rung: "apply",
      prompt: <p>What is the trace of the rotation <M>{"r"}</M> in the standard representation?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "perm",
      rung: "apply",
      prompt: <p>What is the trace of a permutation matrix?</p>,
      answer: {
        kind: "choice",
        options: ["The number of points the permutation fixes", "Always 0", "The order of the permutation", "The sign of the permutation"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every representation of degree 1 of a finite group <M>{"G"}</M> over <M>{"\\mathbb{C}"}</M> sends each element to a root of unity, and is trivial on the commutator subgroup.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a degree 1 representation is a homomorphism to the non-zero complex numbers under multiplication.",
          "Uses g^|G| = 1 to get ρ(g)^|G| = 1, so ρ(g) is a root of unity.",
          "Uses commutativity of ℂ× to show ρ(aba⁻¹b⁻¹) = 1, so ρ is trivial on G′.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the permutation representation of <M>{"S_3"}</M> on <M>{"\\mathbb{C}^3"}</M> splits as the trivial representation plus a copy of the standard one.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds the invariant line spanned by (1, 1, 1) and the invariant plane of vectors whose coordinates sum to 0.",
          "Shows the two are complementary and that the plane is a 2-dimensional representation isomorphic to the standard one, for instance by comparing traces or by an explicit basis.",
          "Concludes the decomposition. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a representation is, the trivial, sign, standard and permutation representations of S₃, what irreducible means and why the standard one is irreducible, and how representations are modules over the group algebra.",

  glimpse: (
    <p>
      The next lesson proves Maschke&rsquo;s theorem: over ℂ every representation of a finite group splits into irreducible
      pieces. Characters then identify those pieces, and induced representations build new ones from subgroups.
    </p>
  ),
};
