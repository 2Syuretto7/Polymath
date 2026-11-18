import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { VertexCoverViz } from "@/components/viz/VertexCoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.1.2",
  minutes: 80,
  links: {
    revisits: ["m21.1.1", "m4.3.1", "m4.5.4"],
    foreshadows: ["m21.1.3", "m21.2.2", "m21.3.1"],
  },

  puzzle: (
    <>
      <p>
        A security firm must place guards at road junctions so that every road has a guard at one end. Elsewhere, a
        dispatcher wants to send out as many lorries as possible along roads that share no junction. These look like
        different problems, one about covering and one about packing. For some road networks they have the same answer.
        Which?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click vertices to build a cover. Can you cover every edge with as few vertices as the thick matching has edges?</p>
      <VertexCoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="vertex cover">
        <p>
          A <strong>vertex cover</strong> of a graph is a set of vertices meeting every edge. Write ν(G) for the size of a
          largest matching and τ(G) for the size of a smallest vertex cover. In any graph <M>{"\\nu(G) \\le \\tau(G)"}</M>,
          since the edges of a matching need distinct cover vertices.
        </p>
      </Definition>

      <Theorem title="König's theorem (1931)">
        <p>In a bipartite graph, ν(G) = τ(G): the largest matching and the smallest vertex cover have the same size.</p>
      </Theorem>

      <Example title="proof from Hall">
        <p>
          Let the classes be X and Y, and let τ be the size of a smallest cover. Take a cover C, and let S = C ∩ X and T = C ∩ Y.
          In the subgraph between S and Y ∖ T, Hall&rsquo;s condition holds for S: if some S′ ⊆ S had fewer than |S′|
          neighbours outside T, replacing S′ by those neighbours would give a smaller cover. So S can be matched into Y ∖ T,
          and similarly T into X ∖ S. These two matchings are disjoint and together have |C| edges.
        </p>
      </Example>

      <Remark title="duality">
        <p>
          König&rsquo;s theorem is the first of many <strong>min-max</strong> theorems: a maximum of one kind of object equals
          a minimum of a dual kind, and each optimum certifies the other. It fails for general graphs: a triangle has ν = 1
          but τ = 2. Finding τ in general graphs is NP-hard, while in bipartite graphs König&rsquo;s theorem turns it into a
          matching problem solvable quickly. Linear programming duality explains the pattern.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cover",
      rung: "check",
      prompt: <p>What is a vertex cover?</p>,
      answer: { kind: "choice", options: ["A set of vertices meeting every edge", "A set of edges meeting every vertex", "A set of disjoint edges", "A colouring of the vertices"], correct: [0] },
    },
    {
      key: "ineq",
      rung: "check",
      prompt: <p>Why is every matching at most as large as every vertex cover?</p>,
      answer: {
        kind: "choice",
        options: ["Each matching edge needs its own cover vertex", "Covers use edges", "Matchings are always small", "Because the graph is bipartite"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the size of a smallest vertex cover?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "tri",
      rung: "apply",
      prompt: <p>For a triangle, what are ν and τ?</p>,
      answer: { kind: "choice", options: ["ν = 1, τ = 2", "ν = 1, τ = 1", "ν = 2, τ = 2", "ν = 3, τ = 3"], correct: [0] },
    },
    {
      key: "kn",
      rung: "apply",
      prompt: <p>What is τ for the complete bipartite graph with classes of sizes 3 and 5?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ν(G) ≤ τ(G) for every graph G.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a matching M and a vertex cover C.",
          "Notes each edge of M has an endpoint in C, and since edges of M share no endpoints these are distinct.",
          "Concludes |M| ≤ |C|, and so ν ≤ τ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use König&rsquo;s theorem to show that a bipartite graph with maximum degree d has a matching of at least e/d edges, where e is the number of edges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each cover vertex covers at most d edges, so τ ≥ e/d.",
          "Applies ν = τ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hall and König describe matchings in bipartite graphs. For a general graph, odd cycles cause trouble: a triangle
        cannot be perfectly matched, even though nothing like Hall&rsquo;s obstacle is visible.
      </p>
      <p>
        Next, Tutte&rsquo;s theorem: the right obstacle for general graphs is a set whose removal leaves too many components of
        odd size. It is a beautiful extension of Hall, and its proof is a classic of graph theory.
      </p>
    </>
  ),
};
