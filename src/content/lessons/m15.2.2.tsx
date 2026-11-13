import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SubcoverViz } from "@/components/viz/SubcoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.2.2",
  minutes: 85,
  links: {
    revisits: ["m15.2.1", "m12.1.4", "m6.5.2"],
    foreshadows: ["m15.2.3", "m15.2.4", "m15.4.5"],
  },

  puzzle: (
    <>
      <p>
        A continuous function on <M>{"[0, 1]"}</M> always attains a maximum, but on <M>{"(0, 1]"}</M> the function{" "}
        <M>{"1/x"}</M> is unbounded. The only difference is one missing point. What property does <M>{"[0, 1]"}</M> have that
        survives in every topological space, with no talk of size or sequences?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Cover the interval by open intervals and look for finitely many of them that still cover it.</p>
      <SubcoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="compactness">
        <p>
          An <strong>open cover</strong> of <M>{"X"}</M> is a collection of open sets whose union is <M>{"X"}</M>. A space is{" "}
          <strong>compact</strong> if every open cover has a finite subcover. A subset is compact if it is compact in the
          subspace topology.
        </p>
      </Definition>

      <Theorem title="Heine-Borel">
        <p>The closed interval <M>{"[a, b]"}</M> is compact.</p>
      </Theorem>

      <Proof>
        <p>
          Given an open cover, let <M>{"S"}</M> be the set of <M>{"x \\in [a, b]"}</M> such that <M>{"[a, x]"}</M> is covered by
          finitely many members, and <M>{"s = \\sup S"}</M>. Some member <M>{"U"}</M> contains <M>{"s"}</M>, and with it an
          interval <M>{"(s - \\delta, s + \\delta)"}</M>. Pick <M>{"x \\in S"}</M> with <M>{"x > s - \\delta"}</M>; adding{" "}
          <M>{"U"}</M> to the finite cover of <M>{"[a, x]"}</M> covers <M>{"[a, \\min(s + \\delta/2, b)]"}</M>. So{" "}
          <M>{"s \\in S"}</M>, and <M>{"s = b"}</M>, since otherwise <M>{"S"}</M> contains points beyond <M>{"s"}</M>.
        </p>
      </Proof>

      <Theorem title="basic properties">
        <p>
          Closed subsets of compact spaces are compact. Continuous images of compact spaces are compact. Compact subsets of
          Hausdorff spaces, in which distinct points have disjoint neighbourhoods, as in any metric space, are closed.
        </p>
      </Theorem>

      <Proof>
        <p>
          For a closed <M>{"C \\subseteq X"}</M>, add <M>{"X \\setminus C"}</M> to a cover of <M>{"C"}</M> to get a cover of{" "}
          <M>{"X"}</M>, and take a finite subcover. For a continuous <M>{"f"}</M>, pull a cover of <M>{"f(X)"}</M> back to{" "}
          <M>{"X"}</M>. For the last, if <M>{"K"}</M> is compact and <M>{"y \\notin K"}</M>, separate <M>{"y"}</M> from each point
          of <M>{"K"}</M> by disjoint open sets, take finitely many covering <M>{"K"}</M>, and intersect the matching
          neighbourhoods of <M>{"y"}</M>: it is open and misses <M>{"K"}</M>.
        </p>
      </Proof>

      <Example title="extreme values and closed bounded sets">
        <p>
          A continuous <M>{"f : X \\to \\mathbb{R}"}</M> on a compact space has compact image, a closed bounded set, so it
          attains its maximum and minimum. In <M>{"\\mathbb{R}^n"}</M>, compact sets are exactly the closed bounded ones. In
          general spaces, closed and bounded is not enough: the closed unit ball of an infinite-dimensional Hilbert space is not
          compact.
        </p>
      </Example>

      <Remark title="a useful trick">
        <p>
          A continuous bijection from a compact space to a Hausdorff space is a homeomorphism: closed sets map to compact, hence
          closed, sets, so the inverse is continuous. This is why <M>{"[0, 1]"}</M> with its ends glued is the circle, and why
          many quotient spaces can be recognised.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a topological space compact?</p>,
      answer: {
        kind: "choice",
        options: ["When every open cover has a finite subcover", "When it is closed and bounded", "When it is finite", "When some open cover is finite"],
        correct: [0],
      },
    },
    {
      key: "image",
      rung: "check",
      prompt: <p>What is the continuous image of a compact space?</p>,
      answer: { kind: "choice", options: ["Compact", "Open", "Discrete", "Not necessarily compact"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation on <M>{"(0, 1]"}</M>, why does the sweep never reach 0?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each interval round a point x stays at least x/2 away from 0, so finitely many leave a gap near 0.",
          "The intervals are too large.",
          "0 is in every interval.",
          "The seed is wrong.",
        ],
        correct: [0],
      },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these subsets of <M>{"\\mathbb{R}"}</M> is compact?</p>,
      answer: { kind: "choice", options: ["{0} ∪ {1/n : n ≥ 1}", "(0, 1]", "ℤ", "ℚ ∩ [0, 1]"], correct: [0] },
    },
    {
      key: "cof",
      rung: "apply",
      prompt: <p>Is every subset of a space with the cofinite topology compact?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes: one open set leaves only finitely many points, each covered by one more set.",
          "No, only finite subsets.",
          "Only closed subsets.",
          "Only if the space is countable.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a closed subset of a compact space is compact.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes an open cover of C by sets open in X, or open in C and extended to X.",
          "Adds the open set X ∖ C to get an open cover of X, and takes a finite subcover.",
          "Removes X ∖ C to get a finite subcover of C.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a continuous bijection from a compact space to a Hausdorff space is a homeomorphism.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows that f maps closed sets to closed sets: closed in compact is compact, its image is compact, and compact in Hausdorff is closed.",
          "Deduces that the inverse pulls back closed sets to closed sets, so it is continuous.",
          "Concludes f is a homeomorphism. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the open-cover definition of compactness, why [a, b] is compact, why closed subsets and continuous images of compact spaces are compact and why compact subsets of Hausdorff spaces are closed, and the extreme value theorem.",

  glimpse: (
    <p>
      Next, Tychonoff&rsquo;s theorem shows that any product of compact spaces is compact. Local compactness and
      compactifications deal with spaces like ℝ, and compactness of the disc drives Brouwer&rsquo;s fixed point theorem.
    </p>
  ),
};
