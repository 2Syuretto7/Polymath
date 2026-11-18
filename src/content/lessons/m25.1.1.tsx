import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CWBuildViz } from "@/components/viz/CWBuildViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.1.1",
  minutes: 90,
  links: {
    revisits: ["m15.5.2", "m15.1.2", "m15.5.3"],
    foreshadows: ["m25.1.2", "m25.1.3", "m25.3.4"],
  },

  puzzle: (
    <>
      <p>
        A torus can be made from a square by gluing opposite edges. Before gluing the inside, the edges already form two
        circles meeting at a point. So the torus is a point, two loops, and a disc. Can every reasonable space be built like
        this, one dimension at a time, and does the recipe tell us anything about the space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build six spaces skeleton by skeleton: a point, then loops, then a disc glued along a word.</p>
      <CWBuildViz />
    </>
  ),

  theory: (
    <>
      <Definition title="CW complexes">
        <p>
          A <strong>CW complex</strong> is built inductively. The <strong>0-skeleton</strong> <M>{"X^0"}</M> is a discrete set
          of points. Given <M>{"X^{n-1}"}</M>, form <M>{"X^n"}</M> by attaching <M>n</M>-cells: for each, a disc{" "}
          <M>{"D^n"}</M> and a continuous <strong>attaching map</strong> <M>{"\\varphi: S^{n-1} \\to X^{n-1}"}</M>, gluing each
          boundary point <M>x</M> to <M>{"\\varphi(x)"}</M>. Then <M>X</M> is the union of the skeleta, with the{" "}
          <strong>weak topology</strong>: a set is open exactly when it meets each closed cell in an open set. The name, from
          J. H. C. Whitehead (1949), stands for closure-finiteness and weak topology.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          <M>{"S^n"}</M> is a point and one <M>n</M>-cell attached by the constant map. A closed orientable surface of genus{" "}
          <M>g</M> has one 0-cell, <M>{"2g"}</M> 1-cells and one 2-cell attached along{" "}
          <M>{"a_1 b_1 a_1^{-1} b_1^{-1} \\cdots a_g b_g a_g^{-1} b_g^{-1}"}</M>. Real projective space{" "}
          <M>{"\\mathbb{R}P^n"}</M> has one cell in each dimension up to <M>n</M>, each attached by the double cover{" "}
          <M>{"S^{k-1} \\to \\mathbb{R}P^{k-1}"}</M>. Graphs are exactly the 1-dimensional CW complexes.
        </p>
      </Example>

      <Theorem title="basic properties">
        <p>
          A CW complex is Hausdorff and normal, and each compact subset meets only finitely many cells. A subcomplex is a
          closed union of cells that is itself a CW complex. Products of CW complexes, quotients by subcomplexes, and spaces
          obtained by attaching cells are again CW complexes, under mild conditions for products.
        </p>
      </Theorem>

      <Remark title="Euler characteristic">
        <p>
          For a finite CW complex, <M>{"\\chi(X) = \\sum_n (-1)^n c_n"}</M>, where <M>{"c_n"}</M> is the number of{" "}
          <M>n</M>-cells. It does not depend on the cell structure, a fact that cellular homology will explain. For the genus{" "}
          <M>g</M> surface, <M>{"\\chi = 1 - 2g + 1 = 2 - 2g"}</M>, in agreement with the triangulation count.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the n-skeleton of a CW complex obtained from the (n − 1)-skeleton?</p>,
      answer: { kind: "choice", options: ["By attaching n-discs along maps from their boundary spheres", "By taking a product with an interval", "By removing n-cells", "By taking a quotient by a group"], correct: [0] },
    },
    {
      key: "sphere",
      rung: "check",
      prompt: <p>What is the simplest CW structure on the sphere Sⁿ?</p>,
      answer: { kind: "choice", options: ["One 0-cell and one n-cell attached by the constant map", "One cell in each dimension up to n", "Two n-cells only", "n + 1 points"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>Using the visualisation&rsquo;s cell counts, what is the Euler characteristic of the genus 2 surface?</p>,
      answer: { kind: "numeric", value: -2 },
    },
    {
      key: "rp2",
      rung: "apply",
      prompt: <p>How many cells does the standard CW structure on ℝP³ have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "torus",
      rung: "apply",
      prompt: <p>In the CW structure on the torus, along which word is the 2-cell attached?</p>,
      answer: { kind: "choice", options: ["a b a⁻¹ b⁻¹", "a a", "a b a b⁻¹", "a b"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the product S¹ × S¹ has a CW structure with one 0-cell, two 1-cells and one 2-cell.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives S¹ the structure of one 0-cell and one 1-cell.",
          "Takes products of cells: a 0-cell × 0-cell, two 0-cell × 1-cell products, and one 1-cell × 1-cell product.",
          "Identifies the 2-cell as the square with its boundary glued to the two circles along a b a⁻¹ b⁻¹.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the Euler characteristic of Sⁿ equal to 2 for even n and 0 for odd n?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the CW structure with one 0-cell and one n-cell.",
          "Computes χ = 1 + (−1)ⁿ, which is 2 for n even and 0 for n odd.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Two CW complexes can be very different and still be &lsquo;the same&rsquo; for algebraic topology: a solid ball and a
        point, a graph and a wedge of circles. Collapsing pieces of a complex is the key tool for seeing this.
      </p>
      <p>
        Next, homotopy equivalence: deformation retractions, the homotopy extension property, why collapsing a contractible
        subcomplex is harmless, and graphs up to homotopy.
      </p>
    </>
  ),
};
