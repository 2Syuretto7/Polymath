import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { StereoViz } from "@/components/viz/StereoViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.2.4",
  minutes: 85,
  links: {
    revisits: ["m15.2.2", "m15.1.4", "m13.6.2"],
    foreshadows: ["m15.3.3", "m15.5.1", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        The real line is not compact: the sequence 1, 2, 3, … escapes every bounded set. Yet a circle is compact, and a circle
        with one point removed looks just like a line. Can we make ℝ compact by adding a single point for everything that
        runs away?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move a point along the line and follow where the projection from the top of the circle sends it.</p>
      <StereoViz />
    </>
  ),

  theory: (
    <>
      <Definition title="local compactness">
        <p>
          A space <M>{"X"}</M> is <strong>locally compact</strong> if every point has a neighbourhood contained in a compact
          set. Euclidean space <M>{"\\mathbb{R}^n"}</M> is locally compact, since closed balls are compact; so is any open
          or closed subset of it. The rationals <M>{"\\mathbb{Q}"}</M> and infinite-dimensional normed spaces are not.
        </p>
      </Definition>

      <Definition title="the one-point compactification">
        <p>
          For a space <M>{"X"}</M>, let <M>{"X^* = X \\cup \\{\\infty\\}"}</M>. Its open sets are the open sets of{" "}
          <M>{"X"}</M>, together with the sets <M>{"\\{\\infty\\} \\cup (X \\setminus K)"}</M> for <M>{"K"}</M> compact and
          closed in <M>{"X"}</M>. A neighbourhood of <M>{"\\infty"}</M> is everything outside a compact set.
        </p>
      </Definition>

      <Theorem title="Alexandroff">
        <p>
          <M>{"X^*"}</M> is compact, and <M>{"X"}</M> is an open subspace of it. If <M>{"X"}</M> is locally compact and
          Hausdorff, then so is <M>{"X^*"}</M>, Hausdorff.
        </p>
      </Theorem>

      <Proof>
        <p>
          Given an open cover of <M>{"X^*"}</M>, some member contains <M>{"\\infty"}</M>, so it is{" "}
          <M>{"\\{\\infty\\} \\cup (X \\setminus K)"}</M>. The rest of the cover covers the compact <M>{"K"}</M>, so finitely
          many do; with the first set they cover <M>{"X^*"}</M>. For the Hausdorff property, points of <M>{"X"}</M> are
          separated in <M>{"X"}</M>. To separate <M>{"x \\in X"}</M> from <M>{"\\infty"}</M>, take an open{" "}
          <M>{"U \\ni x"}</M> inside a compact <M>{"K"}</M>; then <M>{"U"}</M> and <M>{"\\{\\infty\\} \\cup (X \\setminus K)"}</M>{" "}
          are disjoint, and the second is open because <M>{"K"}</M> is closed in a Hausdorff space.
        </p>
      </Proof>

      <Example title="spheres">
        <p>
          Stereographic projection from the north pole is a homeomorphism from the sphere minus the pole to{" "}
          <M>{"\\mathbb{R}^n"}</M>, carrying neighbourhoods of the pole to complements of bounded sets. So the one-point
          compactification of <M>{"\\mathbb{R}^n"}</M> is the sphere <M>{"S^n"}</M>. For <M>{"n = 2"}</M> this is the Riemann
          sphere of complex analysis, where Möbius transformations live.
        </p>
      </Example>

      <Remark title="other compactifications">
        <p>
          A compactification of <M>{"X"}</M> is a compact space containing a dense copy of <M>{"X"}</M>. The interval{" "}
          <M>{"[-\\infty, \\infty]"}</M> compactifies ℝ with two points, keeping the ends apart, and the projective line does it
          with one. The largest Hausdorff compactification, the Stone-Čech compactification, is enormous: for ℕ it has
          more points than ℝ.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a space locally compact?</p>,
      answer: {
        kind: "choice",
        options: [
          "When every point has a neighbourhood contained in a compact set",
          "When it is compact",
          "When every open set is compact",
          "When it is a subset of a compact space",
        ],
        correct: [0],
      },
    },
    {
      key: "nbhd",
      rung: "check",
      prompt: <p>In the one-point compactification, what does a neighbourhood of <M>{"\\infty"}</M> look like?</p>,
      answer: {
        kind: "choice",
        options: ["∞ together with the complement of a compact closed set", "Any set containing ∞", "∞ alone", "A bounded set"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does the projection send <M>{"x = 0"}</M>? Give the angle in degrees.</p>,
      answer: { kind: "numeric", value: -90, tolerance: 0.5 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these is the one-point compactification of the open interval <M>{"(0, 1)"}</M>?</p>,
      answer: { kind: "choice", options: ["A circle", "The closed interval [0, 1]", "A point", "A sphere"], correct: [0] },
    },
    {
      key: "q",
      rung: "apply",
      prompt: <p>Why is <M>{"\\mathbb{Q}"}</M> not locally compact?</p>,
      answer: {
        kind: "choice",
        options: [
          "Any neighbourhood of a point contains a sequence of rationals converging to an irrational, with no limit in a compact set of ℚ.",
          "Because ℚ is countable.",
          "Because ℚ is not Hausdorff.",
          "Because ℚ is bounded.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the one-point compactification <M>{"X^*"}</M> of any space <M>{"X"}</M> is compact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that some member of an open cover contains ∞, so it has the form {∞} ∪ (X ∖ K) with K compact.",
          "Uses compactness of K to cover it by finitely many members of the cover.",
          "Concludes these, with the first set, form a finite subcover.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the one-point compactification of ℕ, with the discrete topology, is homeomorphic to <M>{"\\{0\\} \\cup \\{1/n : n \\geq 1\\}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines the map sending n to 1/n and ∞ to 0, and notes it is a bijection.",
          "Checks that neighbourhoods of ∞, the complements of finite sets, correspond to neighbourhoods of 0, which contain all but finitely many 1/n.",
          "Concludes the map is a homeomorphism, perhaps via a continuous bijection from compact to Hausdorff. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend local compactness, how the one-point compactification adds a point at infinity, why it is compact and when it is Hausdorff, and why the compactification of the plane is a sphere.",

  glimpse: (
    <p>
      Next come the countability and separation axioms, which say how many open sets a space has and how well they tell
      points apart. Locally compact Hausdorff spaces will satisfy a form of the Urysohn lemma, and spheres return as the
      simplest spaces in the study of the fundamental group.
    </p>
  ),
};
