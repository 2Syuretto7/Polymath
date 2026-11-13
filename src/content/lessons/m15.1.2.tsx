import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GluingViz } from "@/components/viz/GluingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.1.2",
  minutes: 85,
  links: {
    revisits: ["m15.1.1", "m8.1.4", "m7.2.3"],
    foreshadows: ["m15.1.4", "m15.2.3", "m15.5.2"],
  },

  puzzle: (
    <>
      <p>
        Take a sheet of paper and glue two opposite edges: you get a tube. Glue them with a half twist and you get a Möbius
        band, which has only one side. Then glue the ends of the tube to make a doughnut. Gluing is easy with paper. How do we
        say precisely which sets are open in the glued space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a gluing of the square and follow a straight path as it wraps across the glued edges.</p>
      <GluingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the subspace topology">
        <p>
          If <M>{"A \\subseteq X"}</M>, the <strong>subspace topology</strong> on <M>{"A"}</M> has open sets{" "}
          <M>{"U \\cap A"}</M> for <M>{"U"}</M> open in <M>{"X"}</M>. For example, <M>{"[0, 1/2)"}</M> is open in{" "}
          <M>{"[0, 1]"}</M>, as <M>{"(-1, 1/2) \\cap [0, 1]"}</M>, though not open in <M>{"\\mathbb{R}"}</M>.
        </p>
      </Definition>

      <Definition title="the product topology">
        <p>
          On <M>{"X \\times Y"}</M>, the <strong>product topology</strong> has as basis the boxes <M>{"U \\times V"}</M> with{" "}
          <M>{"U, V"}</M> open. It is the coarsest topology making both projections continuous. On{" "}
          <M>{"\\mathbb{R} \\times \\mathbb{R}"}</M> it is the usual topology of the plane. For infinitely many factors one
          uses boxes that restrict only finitely many coordinates, for reasons that the Tychonoff theorem will make clear.
        </p>
      </Definition>

      <Definition title="the quotient topology">
        <p>
          Let <M>{"\\sim"}</M> be an equivalence relation on <M>{"X"}</M> and <M>{"q : X \\to X/\\!\\sim"}</M> the map to
          equivalence classes. The <strong>quotient topology</strong> declares <M>{"V \\subseteq X/\\!\\sim"}</M> open when{" "}
          <M>{"q^{-1}(V)"}</M> is open in <M>{"X"}</M>. It is the finest topology making <M>{"q"}</M> continuous.
        </p>
      </Definition>

      <Theorem title="the universal property of quotients">
        <p>
          A function <M>{"f : X/\\!\\sim \\to Z"}</M> is continuous if and only if <M>{"f \\circ q"}</M> is continuous.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"f"}</M> is continuous then so is <M>{"f \\circ q"}</M>. Conversely, for <M>{"W"}</M> open in <M>{"Z"}</M>,{" "}
          <M>{"q^{-1}(f^{-1}(W)) = (f \\circ q)^{-1}(W)"}</M> is open, so <M>{"f^{-1}(W)"}</M> is open by the definition of the
          quotient topology.
        </p>
      </Proof>

      <Example title="spaces from a square">
        <p>
          Let <M>{"X = [0, 1]^2"}</M>. Gluing <M>{"(0, y) \\sim (1, y)"}</M> gives a cylinder;{" "}
          <M>{"(0, y) \\sim (1, 1 - y)"}</M> gives a Möbius band. Also gluing <M>{"(x, 0) \\sim (x, 1)"}</M> gives a torus, or,
          with the twisted side gluing, a Klein bottle. The torus is also the product <M>{"S^1 \\times S^1"}</M>, and the map{" "}
          <M>{"(x, y) \\mapsto (e^{2\\pi i x}, e^{2\\pi i y})"}</M> passes to the quotient by the universal property.
        </p>
        <MD>{"[0, 1]^2 / \\!\\sim \\; \\cong \\; S^1 \\times S^1."}</MD>
      </Example>

      <Remark title="collapsing">
        <p>
          Collapsing a subset <M>{"A"}</M> to a point gives <M>{"X/A"}</M>. Collapsing the boundary circle of a disc gives a
          sphere, and collapsing the endpoints of <M>{"[0, 1]"}</M> gives a circle. Quotients can be badly behaved: collapsing{" "}
          <M>{"\\mathbb{Q}"}</M> inside <M>{"\\mathbb{R}"}</M> gives a space where the special point cannot be separated from
          any other by open sets.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sub",
      rung: "check",
      prompt: <p>What are the open sets of the subspace topology on <M>{"A \\subseteq X"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["The sets U ∩ A with U open in X", "The open sets of X contained in A", "Every subset of A", "Only ∅ and A"],
        correct: [0],
      },
    },
    {
      key: "quot",
      rung: "check",
      prompt: <p>When is a set open in the quotient topology?</p>,
      answer: {
        kind: "choice",
        options: ["When its preimage under the quotient map is open", "When its image is open", "When it contains one point", "Always"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, on the Möbius band, a path leaves through the right edge near the top. Where does it come back in?</p>,
      answer: { kind: "choice", options: ["Through the left edge near the bottom", "Through the left edge near the top", "Through the bottom edge", "It does not come back"], correct: [0] },
    },
    {
      key: "open",
      rung: "apply",
      prompt: <p>Is <M>{"(1/2, 1]"}</M> open in the subspace <M>{"[0, 1]"}</M> of <M>{"\\mathbb{R}"}</M>?</p>,
      answer: { kind: "choice", options: ["Yes, it is (1/2, 2) ∩ [0, 1].", "No, it contains an endpoint.", "Only in ℝ.", "It is neither open nor closed."], correct: [0] },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>What space do you get by collapsing the boundary circle of a closed disc to a single point?</p>,
      answer: { kind: "choice", options: ["A sphere", "A torus", "A Möbius band", "A line segment"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the projection <M>{"p : X \\times Y \\to X"}</M> is continuous and open in the product topology.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows p⁻¹(U) = U × Y is a basic open set, so p is continuous.",
          "Shows the image of a basic open set U × V with V non-empty is U, which is open.",
          "Concludes that the image of any open set, a union of boxes, is open.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that <M>{"[0, 1]"}</M> with its endpoints identified is homeomorphic to the circle <M>{"S^1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the map t ↦ (cos 2πt, sin 2πt), which is continuous and identifies only 0 and 1.",
          "Passes it to a continuous bijection from the quotient by the universal property.",
          "Shows the inverse is continuous, for example because the quotient is compact and S¹ is Hausdorff. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the subspace, product and quotient topologies, the universal property of quotients, and how gluing the edges of a square gives a cylinder, Möbius band, torus and Klein bottle.",

  glimpse: (
    <p>
      Next come continuous maps and homeomorphisms, which say when two spaces are the same. Tychonoff&rsquo;s theorem explains
      the choice of product topology, and the classification of surfaces shows that gluing polygons gives every compact surface.
    </p>
  ),
};
