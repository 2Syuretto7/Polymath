import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ClassEqViz } from "@/components/viz/ClassEqViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.4.4",
  minutes: 85,
  links: {
    revisits: ["m7.4.2", "m7.3.2", "m7.2.2"],
    foreshadows: ["m7.5.1", "m7.5.4", "m7.5.2"],
  },

  puzzle: (
    <>
      <p>
        Some elements of a group commute with everything: the identity always, and in an abelian group, every element. In{" "}
        <M>{"S_3"}</M>, only the identity does. Is there any group of order 25, or of order 8, in which only the identity
        commutes with everything? Counting the orbits of the group acting on itself gives a surprisingly strong answer.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a group. It splits into conjugacy classes; the solid blocks are elements that commute with everything.
      </p>
      <ClassEqViz />
    </>
  ),

  theory: (
    <>
      <Definition title="centre and centraliser">
        <p>
          The <strong>centre</strong> of <M>{"G"}</M> is <M>{"Z(G) = \\{z : zg = gz \\text{ for all } g\\}"}</M>. The{" "}
          <strong>centraliser</strong> of <M>{"x"}</M> is <M>{"C(x) = \\{g : gx = xg\\}"}</M>, the stabiliser of{" "}
          <M>{"x"}</M> under conjugation. So the conjugacy class of <M>{"x"}</M> has <M>{"[G : C(x)]"}</M> elements, and it has
          one element exactly when <M>{"x \\in Z(G)"}</M>.
        </p>
      </Definition>

      <Theorem title="the class equation">
        <p>
          If <M>{"G"}</M> is finite and <M>{"x_1, \\ldots, x_r"}</M> represent the conjugacy classes with more than one element,
          then
        </p>
        <MD>{"|G| = |Z(G)| + \\sum_{i=1}^{r} [G : C(x_i)],"}</MD>
        <p>and each term <M>{"[G : C(x_i)]"}</M> is a divisor of <M>{"|G|"}</M> greater than 1.</p>
      </Theorem>

      <Theorem title="p-groups have non-trivial centres">
        <p>
          If <M>{"|G| = p^n"}</M> with <M>{"p"}</M> prime and <M>{"n \\ge 1"}</M>, then <M>{"Z(G) \\ne \\{e\\}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Each term <M>{"[G : C(x_i)]"}</M> divides <M>{"p^n"}</M> and is greater than 1, so it is divisible by{" "}
          <M>{"p"}</M>. So is <M>{"|G|"}</M>. Hence <M>{"p"}</M> divides <M>{"|Z(G)|"}</M>, which is at least 1 since it
          contains <M>{"e"}</M>, so <M>{"|Z(G)| \\ge p"}</M>.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          <M>{"D_4"}</M>, of order 8, has centre <M>{"\\{e, r^2\\}"}</M> and class equation <M>{"8 = 1 + 1 + 2 + 2 + 2"}</M>.
          Every group of order <M>{"p^2"}</M> is abelian: its centre has order <M>{"p"}</M> or <M>{"p^2"}</M>, and if{" "}
          <M>{"p"}</M>, then <M>{"G/Z(G)"}</M> is cyclic of order <M>{"p"}</M>, which forces <M>{"G"}</M> to be abelian, a
          contradiction. So every group of order 25 is abelian.
        </p>
      </Example>

      <Remark title="where it leads">
        <p>
          The class equation is the first step towards the Sylow theorems and the classification of small groups. Applied to
          a different action, it gives Cauchy&rsquo;s theorem, and it is how one shows, for example, that <M>{"A_5"}</M> is
          simple: its class sizes 1, 12, 12, 15 and 20 cannot be combined, with the 1, into a divisor of 60 other than 1 and
          60.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "z",
      rung: "check",
      prompt: <p>What is the centre of an abelian group G?</p>,
      answer: { kind: "choice", options: ["{e}", "G itself", "The squares", "It is empty"], correct: [1] },
    },
    {
      key: "s3",
      rung: "check",
      prompt: <p>Which is the class equation of S₃?</p>,
      answer: { kind: "choice", options: ["6 = 1 + 2 + 3", "6 = 1 + 1 + 4", "6 = 2 + 2 + 2", "6 = 1 + 5"], correct: [0] },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>In a group of order 20, the centraliser of x has order 4. How many conjugates does x have?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "p",
      rung: "apply",
      prompt: <p>A group has order 27. What is the smallest possible order of its centre?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "imposs",
      rung: "apply",
      prompt: <p>Which of these could be the class equation of a group of order 10? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["10 = 1 + 2 + 2 + 5", "10 = 1 + 3 + 6", "10 = 1 + 1 + 1 + 2 + 5", "10 = 10 × 1"], correct: [0, 3] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the centre Z(G) is a subgroup of G. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes e commutes with everything.",
          "Shows that if a and b commute with every g, so do ab and a⁻¹, for example a⁻¹g = ga⁻¹ by multiplying ag = ga by a⁻¹ on both sides.",
        ],
      },
    },
    {
      key: "p2",
      rung: "stretch",
      prompt: <p>Prove that if G/Z(G) is cyclic, then G is abelian. Why does this show every group of order p² is abelian?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes every element as gᵏz with z central, where gZ(G) generates the quotient, and checks two such elements commute.",
          "Uses that |Z(G)| is p or p², and p would make G/Z(G) cyclic of order p, so G abelian and Z(G) = G, a contradiction. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the centre and centralisers are, how the class equation comes from the conjugation action, why groups of prime power order have non-trivial centres, and why groups of order p² are abelian.",

  glimpse: (
    <p>
      The next chapter proves the Sylow theorems, which find subgroups of prime power order inside any finite group, and uses
      them to classify groups of small order. The simplicity of A₅ follows from its class equation.
    </p>
  ),
};
