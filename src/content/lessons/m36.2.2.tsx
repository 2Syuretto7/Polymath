import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { UniformRecurrenceViz } from "@/components/viz/UniformRecurrenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.2.2",
  minutes: 90,
  links: {
    revisits: ["m36.2.1", "m36.1.3", "m36.1.1"],
    foreshadows: ["m36.2.3", "m36.4.2", "m36.4.3"],
  },

  puzzle: (
    <>
      <p>
        Write 0, then append its opposite to get 01, then 0110, then 01101001, and so on forever. The result never
        repeats periodically, and yet every block that appears in it appears again and again, never more than a fixed
        distance apart. What kind of order is this, between periodicity and randomness?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sequence and a word, and see how far apart the occurrences of the word can be.</p>
      <UniformRecurrenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="minimal systems">
        <p>
          Let T be a continuous map of a compact metric space X. A set Y ⊆ X is <strong>invariant</strong> if{" "}
          <M>{"T(Y) \\subseteq Y"}</M>. The system is <strong>minimal</strong> if the only closed invariant subsets are ∅
          and X. Equivalently, every orbit is dense.
        </p>
      </Definition>

      <Theorem title="existence">
        <p>
          Every such system contains a non-empty closed invariant set that is minimal. Order the non-empty closed
          invariant sets by inclusion; a decreasing chain has non-empty intersection by compactness, so Zorn&rsquo;s lemma
          gives a minimal element.
        </p>
      </Theorem>

      <Theorem title="uniform recurrence">
        <p>
          A point x is <strong>uniformly recurrent</strong> if for every neighbourhood U of x, the times n with{" "}
          <M>{"T^n x \\in U"}</M> occur with bounded gaps. Gottschalk&rsquo;s theorem: x is uniformly recurrent exactly when
          the closure of its orbit is minimal. For a point of a shift, this says every word occurring in x recurs with
          bounded gaps.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          An irrational rotation is minimal. A rational rotation is not: each orbit is a finite closed invariant set. The
          doubling map is not, since 0 is fixed. The orbit closure of the Thue–Morse sequence is a minimal subshift with no
          periodic points.
        </p>
      </Example>

      <Remark title="minimal sets as atoms">
        <p>
          Minimal sets play the role in topological dynamics that ergodic measures play in measurable dynamics: the pieces
          that cannot be split further. A system may contain many of them, such as the fixed point and the many periodic
          orbits of the doubling map.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a system minimal?</p>,
      answer: { kind: "choice", options: ["Its only closed invariant subsets are the empty set and the whole space", "It has a fixed point", "It has finitely many points", "It has zero entropy"], correct: [0] },
    },
    {
      key: "dbl",
      rung: "check",
      prompt: <p>Why is the doubling map not minimal?</p>,
      answer: { kind: "choice", options: ["The fixed point 0 forms a proper closed invariant set", "It is not continuous", "It has no dense orbits", "It is not onto"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the largest gap between occurrences of the word 11 in the Thue–Morse sequence?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "rat",
      rung: "apply",
      prompt: <p>Is the rotation of the circle by 2/5 minimal?</p>,
      answer: { kind: "choice", options: ["No: each orbit is a closed invariant set of 5 points", "Yes: every rotation is minimal", "Yes: it has no fixed points", "No: it is not continuous"], correct: [0] },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>The sequence with 1s exactly at the perfect squares is not uniformly recurrent. Which word shows this?</p>,
      answer: { kind: "choice", options: ["1, whose occurrences drift ever further apart", "0, which occurs everywhere", "00, which occurs with gaps of 1 or 2", "None: it is uniformly recurrent"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a system is minimal if and only if every forward orbit is dense.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If minimal: the closure of any forward orbit is closed, non-empty and invariant, so it is the whole space.",
          "Conversely, if Y is a non-empty proper closed invariant set, a point of Y has its whole orbit in Y, which is not dense.",
          "Concludes the equivalence.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the orbit closure of the squares sequence under the shift contains the sequence 000….</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the gaps between consecutive squares grow, so the sequence contains arbitrarily long blocks of 0s.",
          "Shifting to the start of longer and longer such blocks gives points converging to 000….",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Minimal systems can be orderly, like rotations, or rich, like some subshifts. A single number measures how much
        new information an orbit produces at each step.
      </p>
      <p>Next, topological entropy.</p>
    </>
  ),
};
