import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FiniteMapViz } from "@/components/viz/FiniteMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.1.4",
  minutes: 85,
  links: {
    revisits: ["m15.1.3", "m12.2.1", "m15.1.2"],
    foreshadows: ["m15.2.1", "m15.2.2", "m15.4.1"],
  },

  puzzle: (
    <>
      <p>
        A coffee cup and a doughnut are, to a topologist, the same: one can be squeezed into the other without tearing or
        gluing. But a sphere and a doughnut are different. What exactly does &ldquo;the same&rdquo; mean, when there is no
        distance to measure?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Put topologies on two three-point spaces, choose a map, and test whether it is continuous.</p>
      <FiniteMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="continuity">
        <p>
          A function <M>{"f : X \\to Y"}</M> between topological spaces is <strong>continuous</strong> if{" "}
          <M>{"f^{-1}(V)"}</M> is open in <M>{"X"}</M> for every open <M>{"V"}</M> in <M>{"Y"}</M>. For metric spaces this
          agrees with the definition by <M>{"\\varepsilon"}</M> and <M>{"\\delta"}</M>.
        </p>
      </Definition>

      <Theorem title="equivalent forms">
        <p>For <M>{"f : X \\to Y"}</M>, the following are equivalent:</p>
        <MD>{"\\text{(i) } f \\text{ is continuous;} \\quad \\text{(ii) } f^{-1}(C) \\text{ is closed for every closed } C; \\quad \\text{(iii) } f(\\overline{A}) \\subseteq \\overline{f(A)} \\text{ for all } A."}</MD>
      </Theorem>

      <Proof>
        <p>
          (i) and (ii) are equivalent because <M>{"f^{-1}(Y \\setminus C) = X \\setminus f^{-1}(C)"}</M>. For (ii) implies
          (iii): <M>{"f^{-1}(\\overline{f(A)})"}</M> is closed and contains <M>{"A"}</M>, so it contains <M>{"\\overline{A}"}</M>.
          For (iii) implies (ii): with <M>{"A = f^{-1}(C)"}</M>, we get{" "}
          <M>{"f(\\overline{A}) \\subseteq \\overline{C} = C"}</M>, so <M>{"\\overline{A} \\subseteq A"}</M> and{" "}
          <M>{"A"}</M> is closed.
        </p>
      </Proof>

      <Definition title="homeomorphisms">
        <p>
          A <strong>homeomorphism</strong> is a continuous bijection whose inverse is also continuous. Then{" "}
          <M>{"U"}</M> is open in <M>{"X"}</M> exactly when <M>{"f(U)"}</M> is open in <M>{"Y"}</M>, so the two spaces are
          topologically identical. A property preserved by homeomorphisms, such as compactness or connectedness, is a{" "}
          <strong>topological property</strong>.
        </p>
      </Definition>

      <Example title="a continuous bijection that is not a homeomorphism">
        <p>
          The map <M>{"t \\mapsto (\\cos t, \\sin t)"}</M> from <M>{"[0, 2\\pi)"}</M> to the circle is a continuous bijection.
          But <M>{"[0, 1)"}</M> is open in <M>{"[0, 2\\pi)"}</M>, and its image, an arc containing <M>{"(1, 0)"}</M> on one side
          only, is not open in the circle. So the inverse is not continuous. On finite spaces, the identity map from a discrete
          space to an indiscrete one is another example.
        </p>
      </Example>

      <Remark title="the pasting lemma">
        <p>
          If <M>{"X = A \\cup B"}</M> with <M>{"A, B"}</M> closed, and <M>{"f"}</M> is continuous on each and agrees on{" "}
          <M>{"A \\cap B"}</M>, then <M>{"f"}</M> is continuous on <M>{"X"}</M>. This is how paths and homotopies are glued
          together later in the course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a map between topological spaces continuous?</p>,
      answer: {
        kind: "choice",
        options: [
          "When the preimage of every open set is open",
          "When the image of every open set is open",
          "When it is a bijection",
          "When it preserves distances",
        ],
        correct: [0],
      },
    },
    {
      key: "homeo",
      rung: "check",
      prompt: <p>What is a homeomorphism?</p>,
      answer: {
        kind: "choice",
        options: ["A continuous bijection with continuous inverse", "Any continuous bijection", "A map preserving distances", "A surjective continuous map"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, give X the indiscrete topology and Y the discrete one, with f the identity. Is f continuous?</p>,
      answer: { kind: "choice", options: ["No", "Yes", "Only on one point", "It depends on f"], correct: [0] },
    },
    {
      key: "const",
      rung: "apply",
      prompt: <p>Is every constant map between topological spaces continuous?</p>,
      answer: {
        kind: "choice",
        options: ["Yes: the preimage of any set is ∅ or the whole space", "No, only on metric spaces", "Only into discrete spaces", "Only from compact spaces"],
        correct: [0],
      },
    },
    {
      key: "interval",
      rung: "apply",
      prompt: <p>Which pair of spaces is homeomorphic?</p>,
      answer: { kind: "choice", options: ["(0, 1) and ℝ", "[0, 1] and ℝ", "[0, 1) and the circle", "A point and [0, 1]"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a composition of continuous maps is continuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes (g ∘ f)⁻¹(W) = f⁻¹(g⁻¹(W)).",
          "Uses continuity of g to see g⁻¹(W) is open, then continuity of f.",
          "Concludes that the preimage is open, so g ∘ f is continuous.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every map from a discrete space is continuous, and every map into an indiscrete space is continuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in a discrete space every preimage is open.",
          "Notes that an indiscrete space has only ∅ and the whole space as open sets, whose preimages are ∅ and the whole domain.",
          "Concludes both claims. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the open-set definition of continuity and its equivalent forms, what a homeomorphism is, an example of a continuous bijection that is not a homeomorphism, and the pasting lemma.",

  glimpse: (
    <p>
      Next come topological properties preserved by homeomorphisms: connectedness and compactness. Homotopy, later, deforms
      one continuous map into another, and asks a weaker question than homeomorphism.
    </p>
  ),
};
