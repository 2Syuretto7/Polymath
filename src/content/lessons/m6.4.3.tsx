import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ConnectedSplitViz } from "@/components/viz/ConnectedSplitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.4.3",
  minutes: 85,
  links: {
    revisits: ["m6.4.2", "m6.4.1", "m6.1.3"],
    foreshadows: ["m6.4.4", "m12.1.5", "m15.2.1"],
  },

  puzzle: (
    <>
      <p>
        The set <M>{"[0, 1] \\cup [2, 3]"}</M> is plainly in two pieces. The rationals in <M>{"[0, 2]"}</M> seem, at first
        sight, to form one continuous piece: between any two rationals there is another. Yet there is a gap at{" "}
        <M>{"\\sqrt 2"}</M> through which the set can be split cleanly in two. What does it mean, precisely, for a set to be
        in one piece? And what does it mean for a set to have no isolated points at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a set and try to cut it at a point <M>{"c"}</M> so that it falls apart into two separated pieces.
      </p>
      <ConnectedSplitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="perfect sets">
        <p>
          A point of <M>{"A"}</M> is <strong>isolated</strong> if it is not a limit point of <M>{"A"}</M>. A set is{" "}
          <strong>perfect</strong> if it is closed and has no isolated points: every point is a limit of other points of the
          set. Closed intervals are perfect; <M>{"\\{0\\} \\cup \\{1/n\\}"}</M> is closed but not perfect, since each{" "}
          <M>{"1/n"}</M> is isolated.
        </p>
      </Definition>

      <Theorem title="perfect sets are uncountable">
        <p>A non-empty perfect subset of <M>{"\\mathbb{R}"}</M> is uncountable.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose a perfect set <M>{"P"}</M> were listed as <M>{"x_1, x_2, \\ldots"}</M>. Build closed intervals: start with a
          closed interval <M>{"I_1"}</M> around a point of <M>{"P"}</M>. Since that point is not isolated,{" "}
          <M>{"I_1"}</M> contains other points of <M>{"P"}</M>, so we can choose a smaller closed interval{" "}
          <M>{"I_2 \\subseteq I_1"}</M>, centred on a point of <M>{"P"}</M>, that avoids <M>{"x_1"}</M>. Continue, so that{" "}
          <M>{"I_{n+1}"}</M> avoids <M>{"x_n"}</M> and meets <M>{"P"}</M>. The sets <M>{"I_n \\cap P"}</M> are nested,
          non-empty and compact, so they share a point of <M>{"P"}</M>. It is none of the <M>{"x_n"}</M>: a contradiction.
        </p>
      </Proof>

      <Definition title="connected sets">
        <p>
          Two sets <M>{"A"}</M> and <M>{"B"}</M> are <strong>separated</strong> if neither meets the closure of the other. A
          set is <strong>disconnected</strong> if it is the union of two non-empty separated sets, and{" "}
          <strong>connected</strong> otherwise. The rationals split as the rationals below <M>{"\\sqrt 2"}</M> and those
          above, two separated pieces, so they are disconnected.
        </p>
      </Definition>

      <Example title="the connected subsets of the line">
        <p>
          A subset <M>{"E"}</M> of <M>{"\\mathbb{R}"}</M> is connected if and only if it is an interval: whenever{" "}
          <M>{"a < c < b"}</M> with <M>{"a, b \\in E"}</M>, also <M>{"c \\in E"}</M>. If some <M>{"c"}</M> is missing, cutting
          there separates <M>{"E"}</M>. Conversely, if an interval split into separated pieces <M>{"A"}</M> and <M>{"B"}</M>{" "}
          with <M>{"a \\in A"}</M> and <M>{"b \\in B"}</M>, let <M>{"c = \\sup (A \\cap [a, b])"}</M>; then <M>{"c"}</M> is
          in the closure of <M>{"A"}</M>, so not in <M>{"B"}</M>, and points just above it lie in <M>{"B"}</M>, so{" "}
          <M>{"c"}</M> is in the closure of <M>{"B"}</M> and not in <M>{"A"}</M>. Then <M>{"c"}</M> is in neither.
        </p>
      </Example>

      <Remark title="where it leads">
        <p>
          Connectedness is what the intermediate value theorem really depends on: a continuous image of a connected set is
          connected, so the image of an interval is an interval. The perfect set theorem gives a second proof that{" "}
          <M>{"\\mathbb{R}"}</M> is uncountable. Both ideas reappear in metric spaces and topology, where connected and
          path-connected spaces are studied in their own right.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "perfect",
      rung: "check",
      prompt: <p>Which of these sets are perfect? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[0, 1]", "{0} ∪ {1/n : n ≥ 1}", "[0, 1] ∪ [2, 3]", "(0, 1)", "{0}"],
        correct: [0, 2],
      },
    },
    {
      key: "conn",
      rung: "check",
      prompt: <p>Which of these sets are connected? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[0, 1] ∪ [2, 3]", "(0, 5)", "the rationals", "[0, 1] ∪ (1, 2]", "{3}"],
        correct: [1, 3, 4],
      },
    },
    {
      key: "sep",
      rung: "apply",
      prompt: (
        <p>
          Are <M>{"A = (0, 1)"}</M> and <M>{"B = (1, 2)"}</M> separated? Are <M>{"A = (0, 1]"}</M> and{" "}
          <M>{"B = (1, 2)"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Both pairs are separated.",
          "The first pair is separated; the second is not, since 1 is in A and in the closure of B.",
          "Neither pair is separated.",
          "Only the second pair is separated.",
        ],
        correct: [1],
      },
    },
    {
      key: "iso",
      rung: "apply",
      prompt: (
        <p>
          How many isolated points does <M>{"\\{0\\} \\cup \\{1/n : 1 \\le n \\le 10\\}"}</M> have?
        </p>
      ),
      answer: { kind: "numeric", value: 11 },
    },
    {
      key: "ivt",
      rung: "apply",
      prompt: <p>Why does connectedness give the intermediate value theorem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because continuous functions are increasing.",
          "Because the continuous image of an interval is connected, so it is an interval, and contains every value between any two of its values.",
          "Because every set is connected.",
          "Because intervals are compact.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that the rationals are disconnected by exhibiting two separated sets whose union is <M>{"\\mathbb{Q}"}</M>.
          A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes A = the rationals below √2 and B = the rationals above √2, both non-empty, with union ℚ since √2 is irrational.",
          "Shows the closure of A lies in (−∞, √2] and so misses B, and similarly for B.",
          "Concludes A and B are separated, so ℚ is disconnected.",
        ],
      },
    },
    {
      key: "union",
      rung: "stretch",
      prompt: (
        <p>
          Show that if two connected sets have a point in common, their union is connected. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes the union splits into separated sets P and Q, and takes the common point x in P, say.",
          "Notes each connected set, split by P and Q, must lie entirely in one of them, so both lie in P.",
          "Concludes Q is empty, a contradiction.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what perfect and connected sets are, why a non-empty perfect set is uncountable, why the connected subsets of the line are exactly the intervals, and how connectedness relates to the intermediate value theorem.",

  glimpse: (
    <p>
      The next lesson builds the Cantor set, which is perfect and so uncountable, yet totally disconnected and of length
      zero. Connectedness returns in metric spaces, and in topology it splits into connectedness and path-connectedness, which
      differ in some strange examples.
    </p>
  ),
};
