import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DihedralViz } from "@/components/viz/DihedralViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.1.2",
  minutes: 80,
  links: {
    revisits: ["m7.1.1", "m0.5.2", "m3.8.1"],
    foreshadows: ["m7.4.1", "m7.3.1", "m7.2.1"],
  },

  puzzle: (
    <>
      <p>
        Pick up a square tile and put it back in its hole. How many ways can you do it? You can turn it by a quarter, a half or
        three quarters, or flip it over in four ways. With the do-nothing move that makes eight. Doing one move and then
        another is again one of the eight. Does the order of the two moves matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Rotate and reflect the polygon in any order. The display tells you which single symmetry the whole sequence amounts
        to.
      </p>
      <DihedralViz />
    </>
  ),

  theory: (
    <>
      <Definition title="symmetry">
        <p>
          A <strong>symmetry</strong> of a figure is a distance-preserving map of the plane, or of space, that carries the
          figure onto itself. The symmetries of any figure form a group under composition: composing two symmetries gives a
          symmetry, the identity map is one, and the inverse of a symmetry is one. Associativity is automatic for composition
          of functions.
        </p>
      </Definition>

      <Theorem title="the dihedral group">
        <p>
          The symmetries of a regular <M>{"n"}</M>-gon form the <strong>dihedral group</strong> <M>{"D_n"}</M> of order{" "}
          <M>{"2n"}</M>. With <M>{"r"}</M> a rotation by <M>{"2\\pi/n"}</M> and <M>{"s"}</M> a reflection,
        </p>
        <p style={{ textAlign: "center" }}>
          <M>{"D_n = \\{e, r, \\ldots, r^{n-1}, s, rs, \\ldots, r^{n-1}s\\}"}</M>, with <M>{"r^n = s^2 = e"}</M> and{" "}
          <M>{"sr = r^{-1}s"}</M>.
        </p>
      </Theorem>

      <Example title="counting symmetries">
        <p>
          A symmetry of the <M>{"n"}</M>-gon must send corner 1 to some corner, <M>{"n"}</M> choices, and then the neighbour
          of corner 1 to one of the two neighbours of that corner. Once these are fixed, the whole map is fixed, so there are
          at most <M>{"2n"}</M> symmetries, and the <M>{"n"}</M> rotations and <M>{"n"}</M> reflections supply them all. For{" "}
          <M>{"n \\ge 3"}</M>, <M>{"rs \\ne sr"}</M>, so <M>{"D_n"}</M> is not abelian: the smallest non-abelian group is{" "}
          <M>{"D_3"}</M>, of order 6.
        </p>
      </Example>

      <Remark title="symmetry everywhere">
        <p>
          The rotations of a cube form a group of order 24, and of an icosahedron, 60. The symmetries of crystals form 230
          space groups, classified in the 1890s. In physics, Noether&rsquo;s theorem ties each continuous symmetry to a
          conservation law. Felix Klein proposed in 1872 that a geometry is the study of whatever its symmetry group
          preserves.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>How many symmetries does a regular hexagon have?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why do the symmetries of a figure form a group?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because any two symmetries commute.",
          "Because composites and inverses of symmetries are symmetries, the identity is one, and composition is associative.",
          "Because there are finitely many of them.",
          "Because every figure is a polygon.",
        ],
        correct: [1],
      },
    },
    {
      key: "rn",
      rung: "apply",
      prompt: (
        <p>
          In <M>{"D_5"}</M>, which power of <M>{"r"}</M> is <M>{"r^{-1}"}</M>? Give the exponent between 0 and 4.
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "refl",
      rung: "apply",
      prompt: (
        <p>
          In <M>{"D_n"}</M>, what is <M>{"(rs)^2"}</M>? Use <M>{"sr = r^{-1}s"}</M>.
        </p>
      ),
      answer: { kind: "choice", options: ["r²", "e", "s", "r²s²"], correct: [1] },
    },
    {
      key: "rect",
      rung: "apply",
      prompt: <p>How many symmetries does a non-square rectangle have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Using <M>{"sr = r^{-1}s"}</M>, show that every reflection <M>{"r^k s"}</M> in <M>{"D_n"}</M> is its own inverse. A
          few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes s r^k = r^(−k) s, by repeating the relation.",
          "Computes (r^k s)(r^k s) = r^k r^(−k) s s = e.",
        ],
      },
    },
    {
      key: "cube",
      rung: "stretch",
      prompt: <p>Explain why the rotations of a cube form a group of order 24.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a rotation can send a chosen face to any of 6 faces.",
          "Notes it can then be turned in 4 ways about that face's axis, giving 6 × 4 = 24, and that each choice gives one rotation. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the symmetries of a figure form a group, why the regular n-gon has 2n symmetries, the relations r^n = s² = e and sr = r⁻¹s, and why the dihedral group is not abelian.",

  glimpse: (
    <p>
      The next lesson studies subgroups, such as the rotations inside the dihedral group. Group actions later make
      symmetry precise as a group acting on a set, and the symmetric group collects all permutations.
    </p>
  ),
};
