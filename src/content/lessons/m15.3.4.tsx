import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HilbertCubeViz } from "@/components/viz/HilbertCubeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.3.4",
  minutes: 90,
  links: {
    revisits: ["m15.3.3", "m15.3.1", "m15.2.3"],
    foreshadows: ["m15.3.5", "m26.1.1", "m26.3.2"],
  },

  puzzle: (
    <>
      <p>
        Many topologies come from metrics, and many do not: the cofinite topology, or the line with two origins. Given a
        topological space, how could we tell whether some metric produces its open sets, without having to guess the metric?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move two points and see how a sequence of continuous functions measures the distance between them.</p>
      <HilbertCubeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="metrisable spaces and the Hilbert cube">
        <p>
          A space is <strong>metrisable</strong> if some metric induces its topology. The <strong>Hilbert cube</strong>{" "}
          <M>{"[0, 1]^{\\mathbb{N}}"}</M> with the product topology is metrisable, by{" "}
          <M>{"D(x, y) = \\sum_{n} 2^{-n} |x_n - y_n|"}</M>: convergence in <M>{"D"}</M> is coordinatewise convergence.
        </p>
      </Definition>

      <Theorem title="Urysohn metrisation">
        <p>Every second countable regular space is metrisable. In fact it embeds in the Hilbert cube.</p>
      </Theorem>

      <Proof>
        <p>
          A second countable regular space is normal, a step we take on trust here. Let <M>{"\\mathcal{B}"}</M> be a countable
          basis. For each pair <M>{"B, B'"}</M> in <M>{"\\mathcal{B}"}</M> with <M>{"\\overline{B} \\subseteq B'"}</M>, Urysohn
          gives a continuous <M>{"g"}</M> that is 1 on <M>{"\\overline{B}"}</M> and 0 off <M>{"B'"}</M>. There are countably
          many such pairs; list the functions as <M>{"f_1, f_2, \\ldots"}</M>. Regularity means that for each point{" "}
          <M>{"x"}</M> and open <M>{"U \\ni x"}</M> some pair has <M>{"x \\in B"}</M> and <M>{"B' \\subseteq U"}</M>, so some{" "}
          <M>{"f_n"}</M> is 1 at <M>{"x"}</M> and 0 outside <M>{"U"}</M>. Then{" "}
          <M>{"F(x) = (f_1(x), f_2(x), \\ldots)"}</M> is continuous and injective, and it is open onto its image, because a
          point near <M>{"F(x)"}</M> in the <M>{"n"}</M>th coordinate has <M>{"f_n > 0"}</M> and so lies in <M>{"U"}</M>. So{" "}
          <M>{"F"}</M> is an embedding, and <M>{"D(F(x), F(y))"}</M> is a metric for <M>{"X"}</M>.
        </p>
      </Proof>

      <Example title="manifolds">
        <p>
          A topological manifold is Hausdorff, second countable and locally Euclidean. Local compactness and the Hausdorff
          property give regularity, so every manifold is metrisable. The line with two origins fails only Hausdorffness, and
          the long line fails only second countability; neither is metrisable.
        </p>
      </Example>

      <Remark title="the full answer">
        <p>
          Second countability is sufficient but not necessary: an uncountable discrete space is metrisable. The
          Nagata-Smirnov and Bing metrisation theorems give exact characterisations: a space is metrisable if and only if it
          is regular and has a basis that is a countable union of locally finite families.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>What does the Urysohn metrisation theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every second countable regular space is metrisable.",
          "Every Hausdorff space is metrisable.",
          "Every compact space is metrisable.",
          "Every metrisable space is second countable.",
        ],
        correct: [0],
      },
    },
    {
      key: "cube",
      rung: "check",
      prompt: <p>Which metric on the Hilbert cube induces the product topology?</p>,
      answer: {
        kind: "choice",
        options: ["The sum over n of |xₙ − yₙ| / 2ⁿ", "The largest |xₙ − yₙ|", "The sum over n of |xₙ − yₙ|", "The number of coordinates where they differ"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set x and y equal. What is the distance in the cube?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: <p>Why is the line with two origins not metrisable?</p>,
      answer: {
        kind: "choice",
        options: ["Metric spaces are Hausdorff, and it is not", "It is not second countable", "It is not locally Euclidean", "It is compact"],
        correct: [0],
      },
    },
    {
      key: "cof",
      rung: "apply",
      prompt: <p>Is an infinite set with the cofinite topology metrisable?</p>,
      answer: {
        kind: "choice",
        options: ["No, since it is not Hausdorff", "Yes, by the discrete metric", "Yes, since it is compact", "Only if countable"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a subspace of a metrisable space is metrisable, and deduce that any space that embeds in the Hilbert cube is metrisable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Restricts the metric to the subspace.",
          "Checks that the restricted metric's balls are the intersections of balls with the subspace, so it induces the subspace topology.",
          "Applies this to the image of an embedding, which is homeomorphic to the space.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a compact Hausdorff space is metrisable if and only if it is second countable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that compact Hausdorff spaces are normal, hence regular, so second countable implies metrisable by Urysohn.",
          "For the converse, notes a compact metric space is separable, covering it by finitely many balls of radius 1/n for each n.",
          "Concludes, since separable metric spaces are second countable. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what metrisable means, the metric on the Hilbert cube, how Urysohn functions from a countable basis embed a second countable regular space in the cube, and why manifolds are metrisable.",

  glimpse: (
    <p>
      Next, the Tietze extension theorem extends continuous functions from closed sets. Later, manifolds are defined so that
      this theorem applies, and smooth versions of the embedding put every manifold inside a Euclidean space.
    </p>
  ),
};
