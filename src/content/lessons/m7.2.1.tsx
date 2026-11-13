import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CosetViz } from "@/components/viz/CosetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.2.1",
  minutes: 85,
  links: {
    revisits: ["m7.1.3", "m7.1.4", "m1.6.2"],
    foreshadows: ["m7.2.2", "m11.2.3", "m7.4.2"],
  },

  puzzle: (
    <>
      <p>
        The subgroups of <M>{"\\mathbb Z_{12}"}</M> have orders 1, 2, 3, 4, 6 and 12, never 5 or 7 or 8. The dihedral group of
        order 8 has subgroups of order 1, 2, 4 and 8. It seems that the size of a subgroup always divides the size of the
        group. Is this a coincidence of small examples, or a law? And if a law, why should it hold for every finite group,
        however strange?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a subgroup <M>{"H"}</M> of <M>{"\\mathbb Z_{12}"}</M>, then move <M>{"a"}</M> to see which coset it lies in.
      </p>
      <CosetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="cosets">
        <p>
          For a subgroup <M>{"H \\le G"}</M> and <M>{"g \\in G"}</M>, the <strong>left coset</strong> of <M>{"H"}</M> by{" "}
          <M>{"g"}</M> is <M>{"gH = \\{gh : h \\in H\\}"}</M>. In additive notation it is written <M>{"g + H"}</M>. The number
          of distinct left cosets is the <strong>index</strong> <M>{"[G : H]"}</M>.
        </p>
      </Definition>

      <Theorem title="Lagrange's theorem">
        <p>
          If <M>{"G"}</M> is finite and <M>{"H \\le G"}</M>, then <M>{"|G| = |H| \\cdot [G : H]"}</M>. In particular,{" "}
          <M>{"|H|"}</M> divides <M>{"|G|"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The relation <M>{"a \\sim b"}</M> if <M>{"a^{-1}b \\in H"}</M> is an equivalence relation, using the subgroup
          axioms, and its classes are exactly the left cosets. So the cosets partition <M>{"G"}</M>. Each coset{" "}
          <M>{"gH"}</M> has <M>{"|H|"}</M> elements, since <M>{"h \\mapsto gh"}</M> is a bijection from <M>{"H"}</M>, by
          cancellation. So <M>{"G"}</M> is cut into <M>{"[G : H]"}</M> pieces of size <M>{"|H|"}</M>.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          The order of any element divides <M>{"|G|"}</M>, since it is the order of the subgroup it generates. Hence{" "}
          <M>{"g^{|G|} = e"}</M> for every <M>{"g"}</M>. A group of prime order <M>{"p"}</M> is cyclic, since any element
          other than <M>{"e"}</M> generates a subgroup of order dividing <M>{"p"}</M> but greater than 1. Applied to the{" "}
          <M>{"p - 1"}</M> non-zero residues mod a prime, this gives Fermat&rsquo;s little theorem:{" "}
          <M>{"a^{p-1} \\equiv 1 \\pmod p"}</M>.
        </p>
      </Example>

      <Remark title="the converse fails">
        <p>
          Lagrange&rsquo;s theorem does not say that every divisor of <M>{"|G|"}</M> is the order of a subgroup. The
          alternating group <M>{"A_4"}</M>, of order 12, has no subgroup of order 6. Partial converses are deep: Cauchy showed
          there is an element of every prime order dividing <M>{"|G|"}</M>, and Sylow went much further. Lagrange himself, in
          1771, proved only a special case about permutations of the roots of equations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>A subgroup of order 4 sits in a group of order 20. How many left cosets does it have?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "possible",
      rung: "check",
      prompt: <p>Which could be the order of a subgroup of a group of order 18? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["2", "4", "6", "9", "12"], correct: [0, 2, 3] },
    },
    {
      key: "coset",
      rung: "apply",
      prompt: <p>In ℤ₁₂ with H = ⟨3⟩, which elements are in the coset 2 + H? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["2", "3", "5", "8", "11"], correct: [0, 2, 3, 4] },
    },
    {
      key: "fermat",
      rung: "apply",
      prompt: (
        <p>
          Using Fermat&rsquo;s little theorem, what is <M>{"3^{100} \\bmod 7"}</M>? Note that <M>{"100 = 6 \\cdot 16 + 4"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "elem",
      rung: "apply",
      prompt: <p>Which could be the order of an element of a group of order 15? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["1", "2", "3", "5", "15"], correct: [0, 2, 3, 4] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a group of prime order is cyclic. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes g ≠ e and notes ⟨g⟩ has order dividing p by Lagrange.",
          "Notes the order is not 1, so it is p, and ⟨g⟩ is the whole group.",
        ],
      },
    },
    {
      key: "disjoint",
      rung: "stretch",
      prompt: <p>Show directly that two left cosets aH and bH are either equal or disjoint.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes x lies in both, so x = ah = bh′ for some h, h′ in H.",
          "Deduces a = bh′h⁻¹, so aH = b(h′h⁻¹H) = bH. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what cosets are, why they partition a group into equal pieces, how this proves Lagrange's theorem, and consequences such as Fermat's little theorem and the cyclicity of groups of prime order.",

  glimpse: (
    <p>
      The next lesson asks when left and right cosets agree, which leads to normal subgroups. Fermat&rsquo;s and Euler&rsquo;s
      theorems return in Elementary Number Theory, and the orbit-stabiliser theorem is Lagrange&rsquo;s theorem in another
      guise.
    </p>
  ),
};
