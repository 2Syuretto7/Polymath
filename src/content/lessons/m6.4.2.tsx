import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OpenCoverViz } from "@/components/viz/OpenCoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.4.2",
  minutes: 90,
  links: {
    revisits: ["m6.4.1", "m6.2.3", "m6.1.2"],
    foreshadows: ["m6.5.2", "m12.1.4", "m6.4.4"],
  },

  puzzle: (
    <>
      <p>
        Finite sets are tame: a function on a finite set has a largest value, and any property that holds near each point
        holds with a single uniform margin, the smallest of finitely many. Infinite sets usually lose these comforts. The
        function <M>{"1/x"}</M> on <M>{"(0, 1]"}</M> has no maximum. Yet on <M>{"[0, 1]"}</M>, every continuous function
        does have one. Is there a kind of infinite set that behaves, for these purposes, as if it were finite?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The intervals <M>{"(1/n, 2)"}</M> together cover <M>{"(0, 1]"}</M>. Use more and more of them and watch whether a
        finite number ever suffices. Then switch to <M>{"[0, 1]"}</M>.
      </p>
      <OpenCoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="compactness">
        <p>
          A set <M>{"K \\subseteq \\mathbb{R}"}</M> is <strong>sequentially compact</strong> if every sequence in{" "}
          <M>{"K"}</M> has a subsequence converging to a point of <M>{"K"}</M>. An <strong>open cover</strong> of{" "}
          <M>{"K"}</M> is a collection of open sets whose union contains <M>{"K"}</M>, and a <strong>finite
          subcover</strong> is a finite subcollection that still covers. <M>{"K"}</M> is <strong>compact</strong> if every
          open cover has a finite subcover.
        </p>
      </Definition>

      <Theorem title="Heine-Borel">
        <p>For a set <M>{"K \\subseteq \\mathbb{R}"}</M>, the following are equivalent:</p>
        <ol>
          <li><M>{"K"}</M> is closed and bounded;</li>
          <li><M>{"K"}</M> is sequentially compact;</li>
          <li>every open cover of <M>{"K"}</M> has a finite subcover.</li>
        </ol>
      </Theorem>

      <Proof>
        <p>
          (1 implies 2) A sequence in a bounded set has a convergent subsequence by Bolzano-Weierstrass, and its limit is in{" "}
          <M>{"K"}</M> because <M>{"K"}</M> is closed. (2 implies 1) If <M>{"K"}</M> were unbounded, pick{" "}
          <M>{"|x_n| > n"}</M>: no subsequence converges. If <M>{"x"}</M> were a limit point not in <M>{"K"}</M>, a sequence in{" "}
          <M>{"K"}</M> tending to <M>{"x"}</M> would have all subsequences tending to <M>{"x \\notin K"}</M>.
        </p>
        <p>
          (1 implies 3) Suppose an open cover of <M>{"K \\subseteq [-M, M]"}</M> had no finite subcover. Halve the interval:
          in at least one half, <M>{"K"}</M> intersected with that half has no finite subcover. Repeating gives nested
          intervals <M>{"I_k"}</M> of length <M>{"2M/2^{k-1}"}</M>, each meeting <M>{"K"}</M> in a set with no finite
          subcover. Their intersection is a point <M>{"x"}</M>, which lies in <M>{"K"}</M> since <M>{"K"}</M> is closed. Some
          open set <M>{"O"}</M> of the cover contains <M>{"x"}</M>, and with it some <M>{"V_\\varepsilon(x)"}</M>. For large{" "}
          <M>{"k"}</M>, <M>{"I_k \\subseteq V_\\varepsilon(x) \\subseteq O"}</M>, so the single set <M>{"O"}</M> covers it: a
          contradiction. (3 implies 1) The cover by <M>{"(-n, n)"}</M> forces boundedness, and if <M>{"x \\notin K"}</M>{" "}
          were a limit point, the sets <M>{"\\{y : |y - x| > 1/n\\}"}</M> would cover <M>{"K"}</M> with no finite subcover.
        </p>
      </Proof>

      <Example title="why covers matter">
        <p>
          The open cover form turns local facts into global ones. Suppose each point of <M>{"K"}</M> has a neighbourhood on
          which <M>{"|f| < M_x"}</M>. The neighbourhoods cover <M>{"K"}</M>; finitely many do, so{" "}
          <M>{"|f| < \\max(M_{x_1}, \\ldots, M_{x_m})"}</M> on all of <M>{"K"}</M>. This is how a continuous function on a
          compact set is shown to be bounded, and it is the pattern of the proof of uniform continuity.
        </p>
      </Example>

      <Remark title="beyond the real line">
        <p>
          The three conditions are equivalent in <M>{"\\mathbb{R}^n"}</M> too, but not in every space. In a general metric
          space, sequential compactness and the open cover condition still agree, while closed and bounded is not enough: the
          closed unit ball of an infinite-dimensional space is closed and bounded but not compact. That is why the open cover
          condition, rather than closed and bounded, became the definition of compactness in topology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these subsets of the real line are compact? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[0, 1]", "(0, 1]", "[0, ∞)", "{0} ∪ {1/n : n ≥ 1}", "the integers"],
        correct: [0, 3],
      },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a set to be compact, in the open cover sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is finite.",
          "Every open cover of it has a finite subcover.",
          "It has an open cover.",
          "It is open and bounded.",
        ],
        correct: [1],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: (
        <p>
          With the extra interval <M>{"(-0.1, 0.05)"}</M> around 0, what is the smallest <M>{"n"}</M> such that the intervals{" "}
          <M>{"(1/k, 2)"}</M> for <M>{"k \\le n"}</M> cover the rest of <M>{"[0, 1]"}</M>? You need <M>{"1/n < 0.05"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 21 },
    },
    {
      key: "unb",
      rung: "apply",
      prompt: <p>Which open cover shows that the set of all integers is not compact?</p>,
      answer: {
        kind: "choice",
        options: [
          "The single set ℝ",
          "The intervals (n − 1/2, n + 1/2), one for each integer n, since each contains exactly one integer",
          "The interval (0, 1)",
          "No cover shows it",
        ],
        correct: [1],
      },
    },
    {
      key: "seq",
      rung: "apply",
      prompt: <p>Why is (0, 1] not sequentially compact?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is unbounded.",
          "Because the sequence 1/n lies in it, but every subsequence tends to 0, which is not in the set.",
          "Because it has no sequences.",
          "Because it is open.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a compact set, in the open cover sense, is bounded. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the open cover by the intervals (−n, n).",
          "Takes a finite subcover and notes the largest such interval contains the set.",
          "Concludes the set is bounded.",
        ],
      },
    },
    {
      key: "inter",
      rung: "stretch",
      prompt: (
        <p>
          Show that if <M>{"K_1 \\supseteq K_2 \\supseteq \\cdots"}</M> are non-empty compact sets, their intersection is
          non-empty. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Chooses a point x_n in each K_n, giving a sequence in K_1.",
          "Extracts a convergent subsequence with limit x.",
          "Notes that for each m, the subsequence is eventually in the closed set K_m, so x is in every K_m. A cover argument also earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three conditions in the Heine-Borel theorem, why they are equivalent for subsets of the real line, and why the open cover form of compactness is so useful for turning local facts into global ones.",

  glimpse: (
    <p>
      The next lessons look at perfect and connected sets, and at the Cantor set, a compact set with surprising properties.
      Compactness will then prove the extreme value theorem and uniform continuity, and in metric spaces it becomes one of
      the central ideas of analysis.
    </p>
  ),
};
