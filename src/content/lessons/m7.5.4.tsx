import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ClassUnionViz } from "@/components/viz/ClassUnionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.5.4",
  minutes: 85,
  links: {
    revisits: ["m7.3.3", "m7.4.4", "m7.5.2"],
    foreshadows: ["m14.4.2", "m14.3.3", "m7.6.1"],
  },

  puzzle: (
    <>
      <p>
        Every whole number is a product of primes. Is every finite group built, in some sense, out of indivisible groups?
        Yes: the indivisible groups are the simple ones, and listing them all took a century and tens of thousands of pages.
        The list ends with 26 strays, the largest of which, the Monster, has about <M>{"8 \\times 10^{53}"}</M> elements. The
        smallest non-abelian simple group has only 60.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        <M>{"A_5"}</M> splits into five conjugacy classes. Switch classes on and off to build a set that could be a normal
        subgroup. Can you find one other than the trivial subgroup and the whole group?
      </p>
      <ClassUnionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="simple groups and composition series">
        <p>
          A non-trivial group is <strong>simple</strong> if its only normal subgroups are the trivial one and itself. A{" "}
          <strong>composition series</strong> is a chain{" "}
          <M>{"1 = G_0 \\triangleleft G_1 \\triangleleft \\cdots \\triangleleft G_n = G"}</M> in which each quotient{" "}
          <M>{"G_{i+1}/G_i"}</M> is simple. These quotients are the <strong>composition factors</strong>.
        </p>
      </Definition>

      <Theorem title="Jordan and Hölder">
        <p>
          Every finite group has a composition series, and any two have the same composition factors, counted with
          multiplicity, up to order and isomorphism.
        </p>
      </Theorem>

      <Theorem title="A₅ is simple">
        <p>
          The conjugacy classes of <M>{"A_5"}</M> have sizes 1, 20, 15, 12 and 12, and no normal subgroup is proper and
          non-trivial.
        </p>
      </Theorem>

      <Proof>
        <p>
          The 3-cycles form one class of 20, and the double transpositions one class of 15: in each case the centraliser in{" "}
          <M>{"S_5"}</M> contains an odd permutation, so the <M>{"S_5"}</M>-class does not split in <M>{"A_5"}</M>. The 24
          five-cycles have centraliser of order 5, inside <M>{"A_5"}</M>, so they split into two classes of{" "}
          <M>{"60/5 = 12"}</M>. A normal subgroup is a union of classes containing the identity, so its size is 1 plus a sum
          drawn from 20, 15, 12, 12. Checking every choice, only 1 and 60 divide 60.
        </p>
      </Proof>

      <Example title="composition factors">
        <p>
          <M>{"\\mathbb{Z}_{12}"}</M> has the series <M>{"0 \\subset \\langle 6 \\rangle \\subset \\langle 2 \\rangle \\subset \\mathbb{Z}_{12}"}</M>,
          with factors <M>{"\\mathbb{Z}_2, \\mathbb{Z}_3, \\mathbb{Z}_2"}</M>; another series gives the same factors in a
          different order, just as <M>{"12 = 2 \\cdot 2 \\cdot 3"}</M>. The factors of <M>{"S_5"}</M> are{" "}
          <M>{"A_5"}</M> and <M>{"\\mathbb{Z}_2"}</M>. But unlike primes, factors do not determine the group:{" "}
          <M>{"\\mathbb{Z}_4"}</M> and <M>{"\\mathbb{Z}_2 \\times \\mathbb{Z}_2"}</M> have the same ones.
        </p>
      </Example>

      <Remark title="the classification">
        <p>
          <M>{"A_n"}</M> is simple for every <M>{"n \\ge 5"}</M>. The classification of finite simple groups, completed
          around 2004, says every one is cyclic of prime order, alternating, of Lie type (matrix groups over finite fields,
          such as <M>{"PSL_2(\\mathbb{F}_7)"}</M> of order 168), or one of 26 sporadic groups. The simplicity of{" "}
          <M>{"A_5"}</M> is also why the general quintic cannot be solved by radicals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>How many 3-cycles are there in A₅?</p>,
      answer: { kind: "numeric", value: 20 },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a group to be simple?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is abelian.",
          "It is non-trivial and its only normal subgroups are the trivial subgroup and itself.",
          "It has no subgroups at all.",
          "It is cyclic.",
        ],
        correct: [1],
      },
    },
    {
      key: "factors",
      rung: "apply",
      prompt: <p>How many composition factors, counted with multiplicity, does ℤ₁₂ have?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these groups are simple? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["ℤ₇", "A₅", "A₄", "S₅", "ℤ₆"], correct: [0, 1] },
    },
    {
      key: "smallest",
      rung: "apply",
      prompt: <p>What is the order of the smallest non-abelian simple group?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that an abelian simple group has prime order. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes g ≠ e and notes ⟨g⟩ is normal, since the group is abelian, so ⟨g⟩ is the whole group.",
          "Notes that if the order were infinite or composite, a power of g would generate a proper non-trivial subgroup.",
          "Concludes the order is prime.",
        ],
      },
    },
    {
      key: "a4",
      rung: "stretch",
      prompt: (
        <p>
          The classes of <M>{"A_4"}</M> have sizes 1, 3, 4 and 4. Use the argument of this lesson to find a normal subgroup.
          What is it?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes 1 + 3 = 4 divides 12, so the identity with the three double transpositions is a candidate.",
          "Checks it is a subgroup, the Klein four-group, and normal as a union of classes.",
          "Concludes A₄ is not simple. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a simple group is, how composition series make simple groups the building blocks of finite groups, why A₅ is simple using its class sizes, and what the classification of finite simple groups says.",

  glimpse: (
    <p>
      The next chapter turns from groups to rings, structures with both addition and multiplication. Simple groups return
      in the second algebra course, where the simplicity of A₅ shows that the general quintic equation cannot be solved by
      radicals, through the Galois correspondence.
    </p>
  ),
};
