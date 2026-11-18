import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { ChromPolyViz } from "@/components/viz/ChromPolyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.3.3",
  minutes: 85,
  links: {
    revisits: ["m4.2.1", "m21.3.2", "m4.2.2"],
    foreshadows: ["m21.4.1", "m21.5.2", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        Four friends sit in a ring, and each wears a shirt in one of three colours. Neighbours must wear different colours. How
        many ways are there? Try counting directly, and you will find it fiddly. Is there a formula that works for any number
        of colours at once?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a graph and a number of colours, and compare the brute-force count with the formula.</p>
      <ChromPolyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the chromatic polynomial">
        <p>
          For a graph <M>G</M> and a positive integer <M>k</M>, let <M>{"P(G, k)"}</M> be the number of proper colourings of{" "}
          <M>G</M> using colours from <M>{"\\{1, \\dots, k\\}"}</M> (not every colour need be used). Then{" "}
          <M>{"\\chi(G)"}</M> is the least <M>k</M> with <M>{"P(G, k) > 0"}</M>.
        </p>
      </Definition>

      <Theorem title="deletion and contraction">
        <p>
          For an edge <M>e = uv</M>, let <M>{"G - e"}</M> delete it and <M>{"G / e"}</M> merge <M>u</M> and <M>v</M> into one
          vertex. Then
        </p>
        <MD>{"P(G, k) = P(G - e, k) - P(G / e, k)."}</MD>
        <p>
          Colourings of <M>{"G - e"}</M> split into those where <M>u</M> and <M>v</M> differ, which are colourings of <M>G</M>,
          and those where they agree, which are colourings of <M>{"G / e"}</M>.
        </p>
      </Theorem>

      <Example title="three families">
        <p>
          A graph with <M>n</M> vertices and no edges has <M>{"k^n"}</M>. A tree on <M>n</M> vertices has{" "}
          <M>{"k(k-1)^{n-1}"}</M>: colour a root, then each new vertex avoids its parent. The complete graph has{" "}
          <M>{"k(k-1)\\cdots(k-n+1)"}</M>. Deleting and contracting an edge of the <M>n</M>-cycle gives a path and a smaller
          cycle, from which <M>{"P(C_n, k) = (k-1)^n + (-1)^n (k-1)"}</M>. For the puzzle, <M>{"P(C_4, 3) = 16 + 2 = 18"}</M>.
        </p>
      </Example>

      <Remark title="why it is a polynomial">
        <p>
          By induction on edges, deletion and contraction express <M>{"P(G, k)"}</M> through edgeless graphs, so it is a
          polynomial of degree <M>n</M> with leading coefficient 1, and the coefficient of <M>{"k^{n-1}"}</M> is minus the number
          of edges. Inclusion-exclusion over the set of edges whose ends share a colour gives the same polynomial directly.
          Birkhoff hoped to prove <M>{"P(G, 4) > 0"}</M> for planar graphs this way; that hope failed, but in 2012 June Huh
          proved Read&rsquo;s conjecture that the coefficients are log-concave, using algebraic geometry.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does P(G, k) count?</p>,
      answer: {
        kind: "choice",
        options: ["The proper colourings of G with at most k colours available", "The edges of G", "The colourings using exactly k colours, up to renaming", "The cliques of size k"],
        correct: [0],
      },
    },
    {
      key: "chi",
      rung: "check",
      prompt: <p>How do you read the chromatic number from the chromatic polynomial?</p>,
      answer: { kind: "choice", options: ["The least positive integer k with P(G, k) > 0", "The degree of the polynomial", "The constant term", "The largest root"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many proper colourings does the triangle with a tail have when k = 3?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "tree",
      rung: "apply",
      prompt: <p>How many proper colourings with 3 colours does a tree on 5 vertices have?</p>,
      answer: { kind: "numeric", value: 48 },
    },
    {
      key: "k4",
      rung: "apply",
      prompt: <p>Compute P(K₄, 5).</p>,
      answer: { kind: "numeric", value: 120 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the deletion-contraction formula P(G, k) = P(G − e, k) − P(G / e, k) for an edge e = uv.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits the proper colourings of G − e by whether u and v get the same colour.",
          "Identifies those where they differ with the proper colourings of G.",
          "Identifies those where they agree with the proper colourings of G / e, and rearranges.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the coefficient of kⁿ⁻¹ in P(G, k) is minus the number of edges of G.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses deletion and contraction, or inclusion-exclusion over edges.",
          "Notes each edge contributes a term of degree n − 1 with sign minus, and other terms have lower degree.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Colouring asks how few parts a graph can be split into with no edge inside a part. Turn the question round: if a graph
        has no triangle, or no clique of a given size, how many edges can it have? The answer is a graph split into parts, with
        every edge between them.
      </p>
      <p>
        Next, Turán&rsquo;s theorem: Mantel&rsquo;s bound for triangle-free graphs, the Turán graphs that are extremal for every
        clique, and the start of extremal graph theory.
      </p>
    </>
  ),
};
