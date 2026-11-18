import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HallMatchViz } from "@/components/viz/HallMatchViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.1.1",
  minutes: 85,
  links: {
    revisits: ["m4.3.1", "m4.1.4", "m1.5.2"],
    foreshadows: ["m21.1.2", "m21.1.3", "m21.2.2"],
  },

  puzzle: (
    <>
      <p>
        Four students each play some instruments, and the school band needs one player on each of four instruments. If the
        assignment is impossible, can you always point to a simple reason, one you could explain to the head teacher in a
        sentence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the three groups. Thick lines show a largest matching; red marks an obstacle.</p>
      <HallMatchViz />
    </>
  ),

  theory: (
    <>
      <Definition title="matchings">
        <p>
          A <strong>bipartite graph</strong> has vertex classes X and Y, with edges only between them. A{" "}
          <strong>matching</strong> is a set of edges with no shared endpoints. A matching <strong>saturates</strong> X if every
          vertex of X is matched. For S ⊆ X, N(S) is the set of vertices adjacent to some vertex of S.
        </p>
      </Definition>

      <Theorem title="Hall's theorem (1935)">
        <p>
          A bipartite graph has a matching saturating X if and only if <M>{"|N(S)| \\ge |S|"}</M> for every S ⊆ X. This is
          <strong> Hall&rsquo;s condition</strong>.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          Necessity is clear: the vertices of S need |S| distinct partners in N(S). For sufficiency, induct on |X|. If every
          non-empty proper S has <M>{"|N(S)| \\ge |S| + 1"}</M>, match any x to any neighbour y and delete both; Hall&rsquo;s
          condition survives, since each S loses at most one neighbour. Otherwise some proper S has |N(S)| = |S| exactly.
          Match S into N(S) by induction, then match X ∖ S into Y ∖ N(S): for T ⊆ X ∖ S, the set S ∪ T has at least |S| + |T|
          neighbours, of which only |S| lie in N(S).
        </p>
      </Example>

      <Remark title="systems of distinct representatives">
        <p>
          Given finite sets <M>{"A_1, \\ldots, A_n"}</M>, a choice of distinct <M>{"a_i \\in A_i"}</M> exists exactly when
          every k of the sets together have at least k elements. This is Hall&rsquo;s theorem in another form: a finite,
          combinatorial version of choosing representatives. It implies that every regular bipartite graph has a perfect
          matching, and it underlies König&rsquo;s theorem and max-flow min-cut.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What is Hall&rsquo;s condition?</p>,
      answer: {
        kind: "choice",
        options: ["Every subset S of X has at least |S| neighbours", "Every vertex has degree at least 1", "|X| = |Y|", "The graph is connected"],
        correct: [0],
      },
    },
    {
      key: "match",
      rung: "check",
      prompt: <p>What is a matching?</p>,
      answer: { kind: "choice", options: ["A set of edges with no shared endpoints", "A path through every vertex", "A colouring", "A spanning tree"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s &ldquo;Hall fails&rdquo; group, how large is the largest matching?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "sdr",
      rung: "apply",
      prompt: <p>Do the sets {"{"}1, 2{"}"}, {"{"}2, 3{"}"}, {"{"}1, 3{"}"}, {"{"}1, 2, 3{"}"} have distinct representatives?</p>,
      answer: { kind: "choice", options: ["No: four sets share only three elements", "Yes", "Only if we repeat 1", "Only three of them do"], correct: [0] },
    },
    {
      key: "reg",
      rung: "apply",
      prompt: <p>In a k-regular bipartite graph with k ≥ 1, why does Hall&rsquo;s condition hold?</p>,
      answer: {
        kind: "choice",
        options: ["S sends k|S| edges into N(S), which receives at most k|N(S)|", "Every graph satisfies it", "Because k is even", "Because the graph is a tree"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the easy direction: if X can be saturated, Hall&rsquo;s condition holds.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a matching saturating X and any S ⊆ X.",
          "Notes the partners of the vertices of S are distinct and lie in N(S).",
          "Concludes |N(S)| ≥ |S|.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Hall&rsquo;s theorem can fail for infinite X. Give an example, and say what goes wrong.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example, such as one vertex adjacent to all of y₁, y₂, … and each other vertex xₙ adjacent only to yₙ.",
          "Notes Hall’s condition holds but the special vertex cannot be matched.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hall&rsquo;s theorem says when a perfect matching exists. When it does not, how large can a matching be? König gave a
        precise answer: in a bipartite graph, the largest matching has the same size as the smallest set of vertices touching
        every edge.
      </p>
      <p>
        Next, König&rsquo;s theorem: a min-max duality that reappears across combinatorics and optimisation, and is the
        prototype of the duality in linear programming.
      </p>
    </>
  ),
};
