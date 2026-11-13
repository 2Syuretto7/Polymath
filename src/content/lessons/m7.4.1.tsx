import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrbitViz } from "@/components/viz/OrbitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.4.1",
  minutes: 80,
  links: {
    revisits: ["m7.3.1", "m7.1.2", "m1.6.2"],
    foreshadows: ["m7.4.2", "m7.4.3", "m15.4.3"],
  },

  puzzle: (
    <>
      <p>
        The group of symmetries of a square is the same abstract group whether it moves the corners, the edges, the diagonals
        or the squares of a chessboard drawn on it. What changes is the set being moved. Separating the group from the set it
        acts on turns out to be one of the most useful ideas in algebra. What can a group tell us about a set just by moving it
        around?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The symmetries of a square act on the squares of a five by five board. Click a square to see everywhere the group can
        move it.
      </p>
      <OrbitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="group action">
        <p>
          An <strong>action</strong> of a group <M>{"G"}</M> on a set <M>{"X"}</M> assigns to each <M>{"g \\in G"}</M> and{" "}
          <M>{"x \\in X"}</M> an element <M>{"g \\cdot x \\in X"}</M>, such that <M>{"e \\cdot x = x"}</M> and{" "}
          <M>{"g \\cdot (h \\cdot x) = (gh) \\cdot x"}</M>. Equivalently, an action is a homomorphism from <M>{"G"}</M> to the
          symmetric group on <M>{"X"}</M>.
        </p>
      </Definition>

      <Definition title="orbits and stabilisers">
        <p>
          The <strong>orbit</strong> of <M>{"x"}</M> is <M>{"G \\cdot x = \\{g \\cdot x : g \\in G\\}"}</M>, everywhere{" "}
          <M>{"x"}</M> can be moved. The <strong>stabiliser</strong> of <M>{"x"}</M> is{" "}
          <M>{"G_x = \\{g : g \\cdot x = x\\}"}</M>, the elements that fix it. An action is <strong>transitive</strong> if there
          is only one orbit.
        </p>
      </Definition>

      <Theorem title="orbits partition, stabilisers are subgroups">
        <p>
          The orbits of an action partition <M>{"X"}</M>, and each stabiliser <M>{"G_x"}</M> is a subgroup of <M>{"G"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Say <M>{"x \\sim y"}</M> if <M>{"y = g \\cdot x"}</M> for some <M>{"g"}</M>. It is reflexive by{" "}
          <M>{"e \\cdot x = x"}</M>, symmetric because <M>{"x = g^{-1} \\cdot y"}</M>, and transitive because{" "}
          <M>{"h \\cdot (g \\cdot x) = (hg) \\cdot x"}</M>; its classes are the orbits. If <M>{"g, h"}</M> fix <M>{"x"}</M>,
          so do <M>{"gh"}</M> and <M>{"g^{-1}"}</M>, so <M>{"G_x"}</M> is a subgroup.
        </p>
      </Proof>

      <Example title="actions everywhere">
        <p>
          <M>{"S_n"}</M> acts on <M>{"\\{1, \\ldots, n\\}"}</M> transitively. <M>{"GL_n(\\mathbb R)"}</M> acts on{" "}
          <M>{"\\mathbb R^n"}</M>, with two orbits: <M>{"\\{0\\}"}</M> and everything else. A group acts on itself by left
          multiplication, as in Cayley&rsquo;s theorem, and by conjugation, <M>{"g \\cdot x = gxg^{-1}"}</M>, whose orbits are
          the conjugacy classes. The rotations of a cube act on its faces, edges, vertices and diagonals.
        </p>
      </Example>

      <Remark title="the point of actions">
        <p>
          Groups are best understood through what they do. Actions on sets give counting results, the subject of the next
          lessons; actions on vector spaces are representations; and in geometry, Klein&rsquo;s programme describes each
          geometry by a group acting on a space.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "axioms",
      rung: "check",
      prompt: <p>Which conditions must a group action satisfy? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["e · x = x", "g · (h · x) = (gh) · x", "g · x = x for all g", "The action has one orbit"], correct: [0, 1] },
    },
    {
      key: "orbit",
      rung: "check",
      prompt: <p>The rotations of a square act on its 4 corners. How many orbits are there?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "board",
      rung: "apply",
      prompt: <p>The rotations and reflections of a square act on the squares of a 5 by 5 board. How large is the orbit of a corner square?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many orbits do the rotations alone, C₄, have on the 25 squares of a 5 by 5 board?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "conj",
      rung: "apply",
      prompt: <p>When a group acts on itself by conjugation, what are the orbits?</p>,
      answer: { kind: "choice", options: ["The cosets of a subgroup", "The conjugacy classes", "The single elements", "The cyclic subgroups"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the stabiliser of a point x is a subgroup. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes e · x = x, so e is in the stabiliser.",
          "For g, h fixing x, shows (gh) · x = g · (h · x) = x and g⁻¹ · x = g⁻¹ · (g · x) = x.",
        ],
      },
    },
    {
      key: "conjstab",
      rung: "stretch",
      prompt: (
        <p>
          Show that points in the same orbit have conjugate stabilisers: <M>{"G_{g\\cdot x} = gG_xg^{-1}"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks that if h fixes x then ghg⁻¹ fixes g · x.",
          "Checks the reverse inclusion the same way, using g⁻¹. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a group action is, what orbits and stabilisers are, why orbits partition the set and stabilisers are subgroups, and examples such as conjugation and symmetries acting on a board.",

  glimpse: (
    <p>
      The next lesson proves the orbit-stabiliser theorem, linking the size of an orbit to the size of a stabiliser. Then
      Burnside&rsquo;s lemma counts orbits, and in Topology groups act on covering spaces.
    </p>
  ),
};
