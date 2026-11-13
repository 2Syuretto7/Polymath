import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NormalCosetViz } from "@/components/viz/NormalCosetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.2.2",
  minutes: 85,
  links: {
    revisits: ["m7.2.1", "m7.1.2", "m7.1.3"],
    foreshadows: ["m7.2.3", "m7.2.5", "m14.4.2"],
  },

  puzzle: (
    <>
      <p>
        In an abelian group, <M>{"gH"}</M> and <M>{"Hg"}</M> are always the same set. In the symmetries of a triangle, they
        can differ: multiplying a reflection on the left or on the right gives different results. For some subgroups,
        though, the left and right cosets agree anyway, even in a non-abelian group. These special subgroups turn out to be
        exactly the ones you can divide by. What makes them special?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Compare left and right cosets for two subgroups of the triangle&rsquo;s symmetry group.
      </p>
      <NormalCosetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="normal subgroup">
        <p>
          A subgroup <M>{"N \\le G"}</M> is <strong>normal</strong>, written <M>{"N \\trianglelefteq G"}</M>, if{" "}
          <M>{"gNg^{-1} = N"}</M> for every <M>{"g \\in G"}</M>. The element <M>{"gng^{-1}"}</M> is the{" "}
          <strong>conjugate</strong> of <M>{"n"}</M> by <M>{"g"}</M>.
        </p>
      </Definition>

      <Theorem title="equivalent conditions">
        <p>
          For a subgroup <M>{"N"}</M> of <M>{"G"}</M>, these are equivalent: <M>{"N"}</M> is normal;{" "}
          <M>{"gNg^{-1} \\subseteq N"}</M> for all <M>{"g"}</M>; <M>{"gN = Ng"}</M> for all <M>{"g"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"gNg^{-1} \\subseteq N"}</M> for all <M>{"g"}</M>, apply it to <M>{"g^{-1}"}</M> to get{" "}
          <M>{"g^{-1}Ng \\subseteq N"}</M>, so <M>{"N \\subseteq gNg^{-1}"}</M>, and equality holds. And{" "}
          <M>{"gNg^{-1} = N"}</M> becomes <M>{"gN = Ng"}</M> on multiplying on the right by <M>{"g"}</M>, and back again.
        </p>
      </Proof>

      <Example title="normal and not">
        <p>
          Every subgroup of an abelian group is normal. The rotations in <M>{"D_n"}</M> form a normal subgroup, since
          conjugating a rotation by a reflection reverses it: <M>{"srs^{-1} = r^{-1}"}</M>. The subgroup{" "}
          <M>{"\\{e, s\\}"}</M> of <M>{"D_3"}</M> is not normal: <M>{"r s r^{-1} = r^2 s"}</M>, a different reflection. Any
          subgroup of index 2 is normal, since its two left cosets and two right cosets must both be <M>{"N"}</M> and its
          complement. <M>{"SL_n(\\mathbb R)"}</M> is normal in <M>{"GL_n(\\mathbb R)"}</M>, as{" "}
          <M>{"\\det(gAg^{-1}) = \\det A"}</M>.
        </p>
      </Example>

      <Remark title="why normality matters">
        <p>
          Galois introduced the idea in 1832: an equation is solvable by radicals exactly when its group can be broken down
          through a chain of normal subgroups with abelian quotients. Groups with no normal subgroups other than the trivial
          ones are called simple, and they are the atoms from which all finite groups are built.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a subgroup N of G normal?</p>,
      answer: {
        kind: "choice",
        options: ["When N is abelian", "When gNg⁻¹ = N for every g in G", "When N has index 3", "When N contains every element of order 2"],
        correct: [1],
      },
    },
    {
      key: "abelian",
      rung: "check",
      prompt: <p>In an abelian group, which subgroups are normal?</p>,
      answer: { kind: "choice", options: ["None except the trivial ones", "Only the cyclic ones", "All of them", "Only those of prime order"], correct: [2] },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: (
        <p>
          In <M>{"D_n"}</M>, what is <M>{"s r s^{-1}"}</M>?
        </p>
      ),
      answer: { kind: "choice", options: ["r", "r⁻¹", "s", "e"], correct: [1] },
    },
    {
      key: "index2",
      rung: "apply",
      prompt: <p>A subgroup of a group of order 30 has order 15. Must it be normal?</p>,
      answer: {
        kind: "choice",
        options: ["Yes: it has index 2, so its left and right cosets agree.", "No, never.", "Only if the group is abelian.", "Only if 15 is prime."],
        correct: [0],
      },
    },
    {
      key: "d3",
      rung: "apply",
      prompt: <p>How many normal subgroups does D₃, of order 6, have, counting the trivial subgroup and D₃ itself?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a subgroup N of index 2 in G is normal. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the two left cosets are N and G \\ N, and likewise the two right cosets.",
          "Concludes gN = Ng for every g: both are N if g ∈ N, and both are G \\ N otherwise.",
        ],
      },
    },
    {
      key: "kernel",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"SL_n(\\mathbb R)"}</M>, the matrices of determinant 1, is normal in <M>{"GL_n(\\mathbb R)"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes A with det A = 1 and any invertible g.",
          "Computes det(gAg⁻¹) = det g · det A · (det g)⁻¹ = 1, so gAg⁻¹ is in SL_n. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a normal subgroup is, why the conditions gNg⁻¹ = N and gN = Ng are equivalent, examples of normal and non-normal subgroups, and why subgroups of index 2 are always normal.",

  glimpse: (
    <p>
      The next lesson shows that the cosets of a normal subgroup form a group of their own, the quotient. The isomorphism
      theorems then connect quotients with homomorphisms, and Galois theory uses chains of normal subgroups to decide which
      equations can be solved.
    </p>
  ),
};
