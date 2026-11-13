import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { UrysohnViz } from "@/components/viz/UrysohnViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.3.3",
  minutes: 90,
  links: {
    revisits: ["m15.3.2", "m12.2.1", "m15.1.3"],
    foreshadows: ["m15.3.4", "m15.3.5", "m26.1.3"],
  },

  puzzle: (
    <>
      <p>
        In a metric space, two disjoint closed sets <M>{"A"}</M> and <M>{"B"}</M> can be told apart by a continuous function:{" "}
        <M>{"d(x, A) / (d(x, A) + d(x, B))"}</M> is 0 on <M>{"A"}</M> and 1 on <M>{"B"}</M>. In a space with no metric, all we
        have are open sets. Can open sets alone build such a function?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Raise the dyadic level and watch nested open sets turn a staircase into a continuous function.</p>
      <UrysohnViz />
    </>
  ),

  theory: (
    <>
      <Definition title="normality, restated">
        <p>
          A <M>{"T_1"}</M> space is normal if disjoint closed sets have disjoint open neighbourhoods. Equivalently, whenever{" "}
          <M>{"A"}</M> is closed and <M>{"A \\subseteq U"}</M> with <M>{"U"}</M> open, there is an open <M>{"V"}</M> with{" "}
          <M>{"A \\subseteq V \\subseteq \\overline{V} \\subseteq U"}</M>: separate <M>{"A"}</M> from <M>{"X \\setminus U"}</M>.
        </p>
      </Definition>

      <Theorem title="the Urysohn lemma">
        <p>
          If <M>{"X"}</M> is normal and <M>{"A"}</M>, <M>{"B"}</M> are disjoint closed sets, there is a continuous{" "}
          <M>{"f : X \\to [0, 1]"}</M> with <M>{"f = 0"}</M> on <M>{"A"}</M> and <M>{"f = 1"}</M> on <M>{"B"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"U_1 = X \\setminus B"}</M>, and use normality to find open <M>{"U_0"}</M> with{" "}
          <M>{"A \\subseteq U_0 \\subseteq \\overline{U_0} \\subseteq U_1"}</M>. Inductively, for each dyadic rational{" "}
          <M>{"r"}</M> in <M>{"(0, 1)"}</M>, insert an open <M>{"U_r"}</M> between its neighbours at the previous level, so that{" "}
          <M>{"\\overline{U_r} \\subseteq U_s"}</M> whenever <M>{"r < s"}</M>. Put <M>{"f(x) = \\inf\\{r : x \\in U_r\\}"}</M>,
          with <M>{"f = 1"}</M> on <M>{"B"}</M>. Then <M>{"f < s"}</M> exactly on <M>{"\\bigcup_{r < s} U_r"}</M>, which is
          open, and <M>{"f > r"}</M> exactly on <M>{"\\bigcup_{s > r} (X \\setminus \\overline{U_s})"}</M>, also open. Since the
          sets <M>{"\\{f < s\\}"}</M> and <M>{"\\{f > r\\}"}</M> are open, <M>{"f"}</M> is continuous.
        </p>
      </Proof>

      <Example title="regular is not enough">
        <p>
          The lemma uses normality essentially. There are regular spaces, such as the Niemytzki tangent disc plane, that are
          not normal, and in them some pairs of disjoint closed sets cannot be separated by any continuous real function. Spaces
          in which points and closed sets can be separated by functions are called completely regular, or Tychonoff.
        </p>
      </Example>

      <Remark title="partitions of unity">
        <p>
          The Urysohn lemma is the source of bump functions in topology. Combined with a locally finite cover, it gives
          partitions of unity: continuous functions, each supported in one set of the cover, adding to 1. These glue local
          constructions into global ones throughout geometry and analysis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>What does the Urysohn lemma provide in a normal space?</p>,
      answer: {
        kind: "choice",
        options: [
          "A continuous function to [0, 1] that is 0 on one closed set and 1 on a disjoint closed set",
          "A metric",
          "A finite subcover",
          "A countable basis",
        ],
        correct: [0],
      },
    },
    {
      key: "metric",
      rung: "check",
      prompt: <p>In a metric space, which function separates disjoint closed sets <M>{"A"}</M> and <M>{"B"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["d(x, A) / (d(x, A) + d(x, B))", "d(x, A) · d(x, B)", "d(x, A) − d(x, B)", "1 / d(x, A)"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation at level n = 3, how many open sets <M>{"U_r"}</M> are drawn?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "nest",
      rung: "apply",
      prompt: <p>Why does the construction need <M>{"\\overline{U_r} \\subseteq U_s"}</M> for <M>{"r < s"}</M>, and not just <M>{"U_r \\subseteq U_s"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "So that the set where f > r is open, which is needed for continuity.",
          "So that f takes only dyadic values.",
          "So that the sets are compact.",
          "It is not needed.",
        ],
        correct: [0],
      },
    },
    {
      key: "sub",
      rung: "apply",
      prompt: <p>The interval <M>{"(0, 1)"}</M> with closed sets <M>{"A = (0, 1/4]"}</M> and <M>{"B = [3/4, 1)"}</M>: which function works?</p>,
      answer: {
        kind: "choice",
        options: ["f(x) = min(1, max(0, 2x − 1/2))", "f(x) = x", "f(x) = 1 − x", "f(x) = 4x"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the converse: if any two disjoint closed sets in a <M>{"T_1"}</M> space can be separated by a continuous function to <M>{"[0, 1]"}</M>, the space is normal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes disjoint closed A and B and a continuous f that is 0 on A and 1 on B.",
          "Takes the preimages of [0, 1/2) and (1/2, 1], which are open by continuity.",
          "Notes they are disjoint and contain A and B.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain how to get, in a normal space, a continuous function that is exactly 0 on a closed set <M>{"A"}</M> and positive elsewhere, when <M>{"A"}</M> is a countable intersection of open sets.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes A as the intersection of open sets Uₙ and uses Urysohn to get fₙ that is 0 on A and 1 off Uₙ.",
          "Forms the sum of fₙ / 2ⁿ, which converges uniformly to a continuous function.",
          "Checks it is 0 exactly on A. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Urysohn lemma, how nested open sets indexed by dyadic rationals give a continuous function, why normality is needed, and how the lemma leads to bump functions and partitions of unity.",

  glimpse: (
    <p>
      Next, Urysohn functions give enough coordinates to embed a nice space in a cube, proving the Urysohn metrisation
      theorem. They also drive the Tietze extension theorem, and partitions of unity on manifolds.
    </p>
  ),
};
