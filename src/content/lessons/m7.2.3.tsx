import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { QuotientViz } from "@/components/viz/QuotientViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.2.3",
  minutes: 85,
  links: {
    revisits: ["m7.2.2", "m4.4.4", "m1.6.2"],
    foreshadows: ["m7.2.5", "m8.1.4", "m14.4.2"],
  },

  puzzle: (
    <>
      <p>
        Arithmetic modulo 4 treats all numbers that differ by a multiple of 4 as the same, and adds the classes. Why does this
        work? Because the answer does not depend on which numbers you picked from each class. Can we do the same with any
        group and any subgroup, lumping elements together and multiplying the lumps? Sometimes the answer depends on the
        choices, and the construction collapses. When does it work?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a subgroup <M>{"H"}</M>, and two representatives. Change a representative within its coset and see whether the
        coset of the sum changes.
      </p>
      <QuotientViz />
    </>
  ),

  theory: (
    <>
      <Definition title="quotient group">
        <p>
          If <M>{"N \\trianglelefteq G"}</M>, the set of cosets <M>{"G/N = \\{gN : g \\in G\\}"}</M> is a group under
        </p>
        <p style={{ textAlign: "center" }}>
          <M>{"(aN)(bN) = (ab)N,"}</M>
        </p>
        <p>
          with identity <M>{"N"}</M> and inverses <M>{"(aN)^{-1} = a^{-1}N"}</M>. It is the <strong>quotient group</strong>,
          read &ldquo;<M>{"G"}</M> mod <M>{"N"}</M>&rdquo;. Its order is <M>{"[G : N] = |G|/|N|"}</M>.
        </p>
      </Definition>

      <Theorem title="well defined exactly for normal subgroups">
        <p>
          The rule <M>{"(aN)(bN) = (ab)N"}</M> does not depend on the choice of representatives <M>{"a"}</M> and{" "}
          <M>{"b"}</M> if and only if <M>{"N"}</M> is normal.
        </p>
      </Theorem>

      <Proof>
        <p>
          Suppose <M>{"N"}</M> is normal and <M>{"a' = an"}</M>, <M>{"b' = bm"}</M> with <M>{"n, m \\in N"}</M>. Then{" "}
          <M>{"a'b' = anbm = ab(b^{-1}nb)m"}</M>, and <M>{"b^{-1}nb \\in N"}</M> by normality, so{" "}
          <M>{"a'b'N = abN"}</M>. Conversely, if the rule is well defined, then <M>{"(gN)(g^{-1}N) = N"}</M> also equals{" "}
          <M>{"(gn)g^{-1}N"}</M> for any <M>{"n \\in N"}</M>, so <M>{"gng^{-1} \\in N"}</M>.
        </p>
      </Proof>

      <Example title="examples">
        <p>
          <M>{"\\mathbb Z/n\\mathbb Z"}</M> is the familiar <M>{"\\mathbb Z_n"}</M>. In the viz,{" "}
          <M>{"\\mathbb Z_{12}/\\langle 4\\rangle \\cong \\mathbb Z_4"}</M>. <M>{"D_n"}</M> modulo its rotations has two
          elements, the rotations and the reflections, and is <M>{"\\mathbb Z_2"}</M>: composing two reflections gives a
          rotation, just as adding two odd numbers gives an even one. <M>{"\\mathbb R/\\mathbb Z"}</M> is the circle: real
          numbers counted modulo whole turns.
        </p>
      </Example>

      <Remark title="forgetting structure">
        <p>
          A quotient deliberately forgets information: in <M>{"\\mathbb Z_4"}</M> you know a number&rsquo;s remainder but not
          the number. The skill is in choosing what to forget, so that what remains is simpler but still a group. The same
          construction gives quotient vector spaces, quotient rings, and in topology, spaces glued together.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>If |G| = 24 and N is a normal subgroup of order 6, what is the order of G/N?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "id",
      rung: "check",
      prompt: <p>What is the identity element of G/N?</p>,
      answer: { kind: "choice", options: ["e", "The coset N itself", "G", "The empty set"], correct: [1] },
    },
    {
      key: "z12",
      rung: "apply",
      prompt: <p>In ℤ₁₂/⟨3⟩, which coset is (2 + H) + (2 + H)? Give the representative between 0 and 2.</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "dn",
      rung: "apply",
      prompt: <p>What is Dₙ modulo its subgroup of rotations isomorphic to?</p>,
      answer: { kind: "choice", options: ["ℤₙ", "ℤ₂", "Dₙ", "The trivial group"], correct: [1] },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why must N be normal for G/N to be a group?</p>,
      answer: {
        kind: "choice",
        options: [
          "Otherwise G/N would be infinite.",
          "Otherwise the product of cosets would depend on the representatives chosen.",
          "Otherwise there would be no identity in G.",
          "It need not be.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if G is abelian, then every quotient G/N is abelian. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every subgroup of an abelian group is normal, so G/N is defined.",
          "Computes (aN)(bN) = abN = baN = (bN)(aN).",
        ],
      },
    },
    {
      key: "cyclic",
      rung: "stretch",
      prompt: <p>Show that a quotient of a cyclic group is cyclic. What generates it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes G = ⟨g⟩ and notes every coset is g^k N = (gN)^k.",
          "Concludes gN generates G/N. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how cosets of a normal subgroup form the quotient group, why normality is exactly what makes multiplication of cosets well defined, and examples such as ℤ/nℤ and Dₙ modulo its rotations.",

  glimpse: (
    <p>
      The next lesson studies homomorphisms, whose kernels are exactly the normal subgroups. The isomorphism theorems then
      identify every quotient with the image of a homomorphism, and Linear Algebra II builds quotient vector spaces the same
      way.
    </p>
  ),
};
