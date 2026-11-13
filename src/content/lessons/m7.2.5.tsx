import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FibreViz } from "@/components/viz/FibreViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.2.5",
  minutes: 90,
  links: {
    revisits: ["m7.2.4", "m7.2.3", "m3.4.2"],
    foreshadows: ["m8.1.4", "m14.4.2", "m7.5.3"],
  },

  puzzle: (
    <>
      <p>
        Quotient groups are abstract: their elements are sets of elements. Homomorphic images are concrete: you can write them
        down. In linear algebra, the rank-nullity theorem says that the dimension of the image plus the dimension of the
        kernel is the dimension of the domain. Is there a group version, and can it tell us what a quotient group really is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each homomorphism sorts <M>{"\\mathbb Z_{12}"}</M> into fibres, one above each element of the image. Compare the fibres
        with the kernel.
      </p>
      <FibreViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the first isomorphism theorem">
        <p>
          If <M>{"\\varphi : G \\to H"}</M> is a homomorphism with kernel <M>{"K"}</M>, then{" "}
          <M>{"G/K \\cong \\varphi(G)"}</M>, by the map <M>{"gK \\mapsto \\varphi(g)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The map is well defined and injective because <M>{"\\varphi(a) = \\varphi(b)"}</M> if and only if{" "}
          <M>{"a^{-1}b \\in K"}</M>, that is, <M>{"aK = bK"}</M>. It is a homomorphism because{" "}
          <M>{"(aK)(bK) = abK \\mapsto \\varphi(ab) = \\varphi(a)\\varphi(b)"}</M>. And it is onto the image by
          construction.
        </p>
      </Proof>

      <Theorem title="the second and third isomorphism theorems">
        <p>
          If <M>{"H \\le G"}</M> and <M>{"N \\trianglelefteq G"}</M>, then <M>{"HN"}</M> is a subgroup,{" "}
          <M>{"H \\cap N \\trianglelefteq H"}</M>, and <M>{"HN/N \\cong H/(H \\cap N)"}</M>. If{" "}
          <M>{"N \\le K"}</M> are both normal in <M>{"G"}</M>, then <M>{"(G/N)/(K/N) \\cong G/K"}</M>. Each is proved by
          finding a suitable homomorphism and applying the first theorem.
        </p>
      </Theorem>

      <Example title="using the first theorem">
        <p>
          <M>{"\\det : GL_n(\\mathbb R) \\to \\mathbb R^\\times"}</M> is onto with kernel <M>{"SL_n"}</M>, so{" "}
          <M>{"GL_n/SL_n \\cong \\mathbb R^\\times"}</M>. The map <M>{"\\mathbb R \\to"}</M> the unit circle,{" "}
          <M>{"t \\mapsto e^{2\\pi i t}"}</M>, has kernel <M>{"\\mathbb Z"}</M>, so{" "}
          <M>{"\\mathbb R/\\mathbb Z"}</M> is the circle. And for finite groups, <M>{"|G| = |\\ker\\varphi|\\cdot|\\varphi(G)|"}</M>,
          the group version of rank-nullity. The third theorem, for example, gives{" "}
          <M>{"(\\mathbb Z/12\\mathbb Z)/(4\\mathbb Z/12\\mathbb Z) \\cong \\mathbb Z/4\\mathbb Z"}</M>.
        </p>
      </Example>

      <Remark title="a recipe">
        <p>
          To identify a quotient <M>{"G/N"}</M>, find a homomorphism out of <M>{"G"}</M>, onto something familiar, whose kernel
          is <M>{"N"}</M>. The theorems were made explicit by Emmy Noether in the 1920s, and they hold in the same form for
          rings, modules and vector spaces.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the first isomorphism theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["G ≅ ker φ", "G/ker φ ≅ φ(G)", "G ≅ φ(G) always", "ker φ ≅ φ(G)"],
        correct: [1],
      },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>A homomorphism from a group of order 36 has a kernel of order 4. What is the order of its image?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "z",
      rung: "apply",
      prompt: <p>Reduction mod n, from ℤ onto ℤₙ, has kernel nℤ. What does the first theorem conclude?</p>,
      answer: { kind: "choice", options: ["ℤ ≅ ℤₙ", "ℤ/nℤ ≅ ℤₙ", "nℤ ≅ ℤₙ", "ℤ/ℤₙ ≅ nℤ"], correct: [1] },
    },
    {
      key: "third",
      rung: "apply",
      prompt: <p>By the third theorem, (ℤ/24ℤ)/(6ℤ/24ℤ) is isomorphic to ℤₘ for which m?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "onto",
      rung: "apply",
      prompt: <p>Can there be a homomorphism from a group of order 10 onto a group of order 4?</p>,
      answer: {
        kind: "choice",
        options: ["Yes", "No: the order of the image must divide 10, since it equals 10 divided by the order of the kernel", "Only if both are cyclic", "Only if the kernel is trivial"],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that the map <M>{"gK \\mapsto \\varphi(g)"}</M> in the first isomorphism theorem is well defined. A few lines
          will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes aK = bK, so a⁻¹b ∈ K.",
          "Deduces φ(a)⁻¹φ(b) = φ(a⁻¹b) = e, so φ(a) = φ(b).",
        ],
      },
    },
    {
      key: "circle",
      rung: "stretch",
      prompt: <p>Use the first isomorphism theorem to show that ℝ/ℤ is isomorphic to the group of complex numbers of modulus 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines t ↦ e^(2πit), a homomorphism from (ℝ, +) to the unit circle under multiplication.",
          "Notes it is onto and its kernel is ℤ, and applies the theorem. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the first isomorphism theorem and why its map is well defined, how it gives |G| = |ker φ| · |φ(G)|, the second and third theorems, and how to use them to identify quotient groups.",

  glimpse: (
    <p>
      The next chapter studies the symmetric groups, which contain every finite group. Linear Algebra II proves the same
      theorems for quotient vector spaces, and the structure theorem for finitely generated abelian groups classifies a whole
      family of quotients.
    </p>
  ),
};
