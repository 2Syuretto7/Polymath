import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SeparationViz } from "@/components/viz/SeparationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.3.2",
  minutes: 85,
  links: {
    revisits: ["m15.3.1", "m15.2.2", "m15.1.2"],
    foreshadows: ["m15.3.3", "m15.3.4", "m15.3.5"],
  },

  puzzle: (
    <>
      <p>
        In ℝ a sequence has at most one limit. Glue two copies of the line together everywhere except at 0, and the sequence{" "}
        <M>{"1/n"}</M> converges to both origins at once. What exactly has gone wrong, and how do we say which spaces behave
        well?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a space and see which separation properties it has, and why.</p>
      <SeparationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the separation axioms">
        <p>A space is</p>
        <ul>
          <li><strong>T₀</strong> if for any two points some open set contains one but not the other;</li>
          <li><strong>T₁</strong> if each of two points has a neighbourhood missing the other, equivalently every point is closed;</li>
          <li><strong>Hausdorff</strong>, or T₂, if any two points have disjoint neighbourhoods;</li>
          <li><strong>regular</strong> if it is T₁ and a point and a closed set not containing it have disjoint neighbourhoods;</li>
          <li><strong>normal</strong> if it is T₁ and any two disjoint closed sets have disjoint neighbourhoods.</li>
        </ul>
        <p>Each implies the ones before it, and none of the implications reverses.</p>
      </Definition>

      <Theorem title="limits are unique in Hausdorff spaces">
        <p>In a Hausdorff space a sequence converges to at most one point.</p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"x_n \\to x"}</M> and <M>{"x_n \\to y"}</M> with <M>{"x \\neq y"}</M>, take disjoint neighbourhoods{" "}
          <M>{"U \\ni x"}</M> and <M>{"V \\ni y"}</M>. Eventually every <M>{"x_n"}</M> lies in <M>{"U"}</M> and in{" "}
          <M>{"V"}</M>, which is impossible.
        </p>
      </Proof>

      <Theorem title="metric and compact spaces are normal">
        <p>Every metric space is normal. Every compact Hausdorff space is normal.</p>
      </Theorem>

      <Proof>
        <p>
          For disjoint closed <M>{"A"}</M>, <M>{"B"}</M> in a metric space, the sets{" "}
          <M>{"\\{x : d(x, A) < d(x, B)\\}"}</M> and <M>{"\\{x : d(x, B) < d(x, A)\\}"}</M> are open, disjoint and contain{" "}
          <M>{"A"}</M> and <M>{"B"}</M>. In a compact Hausdorff space, first separate a point from a compact set as in the
          proof that compact sets are closed, giving regularity; then repeat the argument with a compact set in place of the
          point.
        </p>
      </Proof>

      <Example title="spaces that fail">
        <p>
          The cofinite topology on an infinite set is T₁ but not Hausdorff. The line with two origins is T₁ but not
          Hausdorff, though every point has a neighbourhood homeomorphic to ℝ; this is why manifolds are required to be
          Hausdorff. Sierpiński space is T₀ but not T₁, and appears in logic and computer science as the space of observable
          truth values.
        </p>
      </Example>

      <Remark title="why normality matters">
        <p>
          Normality is the hypothesis of the Urysohn lemma, which builds continuous real functions separating closed sets. It is
          less stable than the others: subspaces and products of normal spaces need not be normal.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "haus",
      rung: "check",
      prompt: <p>What does it mean for a space to be Hausdorff?</p>,
      answer: {
        kind: "choice",
        options: [
          "Any two distinct points have disjoint neighbourhoods.",
          "Every point is closed.",
          "Any two disjoint closed sets have disjoint neighbourhoods.",
          "The space has a countable basis.",
        ],
        correct: [0],
      },
    },
    {
      key: "t1",
      rung: "check",
      prompt: <p>Which statement is equivalent to a space being T₁?</p>,
      answer: { kind: "choice", options: ["Every point is closed", "Every point is open", "The space is metrisable", "Every closed set is compact"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which of the five spaces is T₀ but not T₁?</p>,
      answer: { kind: "choice", options: ["Sierpiński space", "The indiscrete pair", "Cofinite ℕ", "ℝ"], correct: [0] },
    },
    {
      key: "origins",
      rung: "apply",
      prompt: <p>In the line with two origins, how many limits does the sequence <M>{"1/n"}</M> have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "cof",
      rung: "apply",
      prompt: <p>Why is ℕ with the cofinite topology not Hausdorff?</p>,
      answer: {
        kind: "choice",
        options: [
          "Two non-empty open sets have finite complements, so their intersection is infinite and non-empty.",
          "Its points are not closed.",
          "It is not countable.",
          "It is compact.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a space is T₁ if and only if every single point is a closed set.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assuming T₁, shows the complement of {x} is open: each y ≠ x has a neighbourhood missing x.",
          "Assuming points are closed, takes the open set X ∖ {y} as a neighbourhood of x missing y.",
          "Concludes the equivalence.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a space <M>{"X"}</M> is Hausdorff if and only if the diagonal <M>{"\\{(x, x)\\}"}</M> is closed in <M>{"X \\times X"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a point (x, y) off the diagonal has x ≠ y.",
          "Shows disjoint neighbourhoods U, V give the basic set U × V missing the diagonal, and conversely.",
          "Concludes the complement of the diagonal is open exactly when the space is Hausdorff. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the separation axioms T₀, T₁, Hausdorff, regular and normal, why limits are unique in Hausdorff spaces, why metric and compact Hausdorff spaces are normal, and an example showing each implication cannot be reversed.",

  glimpse: (
    <p>
      Next, the Urysohn lemma turns the separation of closed sets in a normal space into a continuous function. It leads to
      the Urysohn metrisation theorem and the Tietze extension theorem.
    </p>
  ),
};
