import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MaxFlowStepViz } from "@/components/viz/MaxFlowStepViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.2.2",
  minutes: 90,
  links: {
    revisits: ["m21.2.1", "m21.1.2", "m4.5.1"],
    foreshadows: ["m21.3.1", "m21.4.2", "m21.5.1"],
  },

  puzzle: (
    <>
      <p>
        Oil flows through a network of pipes from a port to a refinery, each pipe with a capacity. How much can be sent per
        hour? And if someone claims a figure is the maximum, how could they convince you, without your checking every possible
        way of routing the oil?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Press Augment until no path remains, then look at the cut.</p>
      <MaxFlowStepViz />
    </>
  ),

  theory: (
    <>
      <Definition title="flows and cuts">
        <p>
          A <strong>network</strong> is a directed graph with a source s, a sink t and a capacity c(e) ≥ 0 on each edge. A{" "}
          <strong>flow</strong> assigns <M>{"0 \\le f(e) \\le c(e)"}</M> with conservation: at every vertex other than s and t,
          flow in equals flow out. Its value is the net flow out of s. An <strong>s–t cut</strong> is a set A containing s but
          not t; its capacity is the total capacity of edges leaving A.
        </p>
      </Definition>

      <Theorem title="max-flow min-cut (Ford and Fulkerson, 1956)">
        <p>The maximum value of a flow equals the minimum capacity of an s–t cut.</p>
      </Theorem>

      <Example title="the proof">
        <p>
          Every flow&rsquo;s value equals the net flow across any cut, so is at most the cut&rsquo;s capacity. Now take a
          maximum flow and let A be the vertices reachable from s by paths that can still carry more, using forward edges that
          are not full and backward edges with positive flow. If t were in A, we could augment. So t ∉ A, every edge leaving A
          is full and every edge entering A is empty, and the flow value equals the capacity of A.
        </p>
      </Example>

      <Remark title="algorithms and integrality">
        <p>
          The Ford-Fulkerson method repeats augmentation. With integer capacities each step adds at least 1, so it stops, and
          the maximum flow can be taken integral: the <strong>integrality theorem</strong>. Choosing shortest augmenting paths,
          as Edmonds and Karp did, bounds the number of steps polynomially. Unit capacities turn the theorem into Menger&rsquo;s,
          and through it König&rsquo;s and Hall&rsquo;s.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the max-flow min-cut theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["The maximum flow value equals the minimum cut capacity", "Every flow is maximal", "Every cut has the same capacity", "Flows are always integral"],
        correct: [0],
      },
    },
    {
      key: "aug",
      rung: "check",
      prompt: <p>What is an augmenting path?</p>,
      answer: {
        kind: "choice",
        options: ["An s–t path in which forward edges have spare capacity and backward edges carry flow", "Any s–t path", "A cycle", "A cut"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the maximum flow value?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "steps",
      rung: "apply",
      prompt: <p>How many augmentations does the visualisation take from zero flow?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "integral",
      rung: "apply",
      prompt: <p>With integer capacities, what does the integrality theorem guarantee?</p>,
      answer: { kind: "choice", options: ["A maximum flow with integer values on every edge", "Every flow is integral", "The cut is unique", "The flow is unique"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the value of any flow is at most the capacity of any s–t cut.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses conservation to show the value equals flow out of A minus flow into A, for the cut set A.",
          "Bounds flow out of A by the capacities of edges leaving A, and flow into A below by 0.",
          "Concludes value ≤ capacity of the cut.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>How would you use max-flow to find a largest matching in a bipartite graph?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Builds a network: source to each left vertex, left to right along edges, right vertices to sink, all capacity 1.",
          "Uses integrality to read off a matching from an integral maximum flow.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Matchings, paths and flows are about choosing edges well. The next chapter turns to colouring: assigning colours to
        vertices so that neighbours differ, using as few colours as possible.
      </p>
      <p>
        Next, Brooks&rsquo; theorem: a connected graph needs at most as many colours as its maximum degree, except for complete
        graphs and odd cycles, the two families where greedy colouring is forced to use one more.
      </p>
    </>
  ),
};
