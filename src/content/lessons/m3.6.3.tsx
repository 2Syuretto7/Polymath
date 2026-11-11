import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { AreaDetViz } from "@/components/viz/AreaDetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m3.6.3",
  minutes: 75,
  links: {
    revisits: ["m3.6.1", "m3.6.2", "m3.4.3"],
    foreshadows: ["m3.7.1", "m3.8.1", "m5.1.1"],
  },

  puzzle: (
    <>
      <p>
        The three defining properties of the determinant looked like algebraic rules chosen for convenience. But consider
        the area of the parallelogram spanned by two vectors. Scaling one side by t scales the area by t. Sliding one side
        along the other, like pushing a deck of cards sideways, leaves the area alone. A unit square has area 1. These are
        almost exactly the defining properties. Is the determinant secretly an area, and in higher dimensions a volume?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The columns of A span the shaded parallelogram, the image of the dashed unit square. Change them and compare the
        area with det A. Try the buttons: adding one column to the other is a shear and keeps the area; swapping them
        flips the sign; doubling one doubles the area.
      </p>
      <AreaDetViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="area and volume">
        <p>
          For an n by n matrix A, |det A| is the n-dimensional volume of the box (parallelepiped) whose edges are the rows of
          A, or equally its columns. In the plane,
        </p>
        <MD>{"\\text{area of the parallelogram spanned by } (a, c) \\text{ and } (b, d) = |ad - bc|."}</MD>
      </Theorem>
      <Proof>
        <p>
          Volume satisfies the defining properties up to sign. The unit cube has volume 1. Multiplying an edge by t &gt; 0
          multiplies volume by t. Adding a multiple of one edge to another is a shear: it slides slices of the box parallel
          to a face, and does not change volume, just as a parallelogram with the same base and height has the same area.
          Exchanging edges does not change the volume. Elimination with these operations turns A into a diagonal matrix,
          whose box is a rectangular one with volume <M>{"|d_1 \\cdots d_n|"}</M>, and det changes along the way only by the
          same factors as volume, apart from signs.
        </p>
      </Proof>

      <Definition title="orientation">
        <p>
          The sign of det A records <strong>orientation</strong>. In the plane, det A &gt; 0 when the turn from the first
          column to the second is anticlockwise, as from (1, 0) to (0, 1), and det A &lt; 0 when it is clockwise. A matrix
          with negative determinant flips the plane over, like a reflection. In space, the sign distinguishes right-handed
          from left-handed triples of vectors.
        </p>
      </Definition>

      <Theorem title="how a linear map changes volume">
        <p>
          If a region R has volume V, its image under A has volume <M>{"|\\det A| \\cdot V"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          A sends the unit cube to the box spanned by its columns, which has volume |det A|. Any small cube is a scaled and
          shifted copy of the unit cube, so its image has volume |det A| times its own. Fill R with tiny cubes and let them
          shrink; the volumes of the images add up to |det A| times the volume of R.
        </p>
      </Proof>
      <p>
        This explains the product rule geometrically: applying B and then A scales volumes first by |det B|, then by |det
        A|. It also explains why det A = 0 means singular: A flattens space into a lower dimension, where the volume is
        zero, so A cannot be undone.
      </p>

      <Example title="a triangle">
        <p>
          The triangle with corners (0, 0), (4, 1) and (1, 3) is half the parallelogram spanned by (4, 1) and (1, 3), so its
          area is <M>{"\\tfrac12|4 \\cdot 3 - 1 \\cdot 1| = \\tfrac{11}{2}"}</M>. For a triangle with corners{" "}
          <M>{"(x_1, y_1), (x_2, y_2), (x_3, y_3)"}</M>, shift one corner to the origin first, or use
        </p>
        <MD>{"\\text{area} = \\tfrac12\\left|\\det\\begin{bmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{bmatrix}\\right|."}</MD>
      </Example>

      <Example title="the cross product">
        <p>
          In ℝ³, the cross product of u and v is the vector found by formally expanding
        </p>
        <MD>{"u \\times v = \\det\\begin{bmatrix} e_1 & e_2 & e_3 \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{bmatrix}."}</MD>
        <p>
          It is perpendicular to u and v, its length is the area of their parallelogram, and{" "}
          <M>{"w \\cdot (u \\times v) = \\det[w; u; v]"}</M> is the volume of the box spanned by all three.
        </p>
      </Example>

      <Remark title="looking ahead to calculus">
        <p>
          A smooth map looks linear near each point, so it scales small areas by the absolute value of the determinant of
          its derivative matrix, the Jacobian. That is why changing variables in a double integral brings in a Jacobian
          factor, as in <M>{"dx\\,dy = r\\,dr\\,d\\theta"}</M> for polar coordinates.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "area",
      rung: "check",
      prompt: <p>What is the area of the parallelogram spanned by (3, 1) and (1, 2)?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "orient",
      rung: "check",
      prompt: <p>The reflection <M>{"\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}"}</M> has which determinant?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "tri",
      rung: "apply",
      prompt: <p>What is the area of the triangle with corners (1, 1), (5, 2) and (2, 4)?</p>,
      answer: { kind: "numeric", value: 5.5 },
    },
    {
      key: "box",
      rung: "apply",
      prompt: <p>What is the volume of the box spanned by (1, 0, 0), (1, 2, 0) and (1, 1, 3)?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "image",
      rung: "apply",
      prompt: (
        <p>
          A disc of area π is mapped by <M>{"\\begin{bmatrix} 3 & 1 \\\\ 0 & 2 \\end{bmatrix}"}</M> to an ellipse. What is
          the area of the ellipse, divided by π?
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "shear",
      rung: "prove",
      prompt: (
        <p>
          Prove directly, with a picture or with base and height, that the parallelogram spanned by u and v + tu has the same
          area as the one spanned by u and v. Which property of the determinant does this match?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes u as the base and notes that adding tu to v moves the opposite side along a line parallel to u.",
          "Concludes the height above the base is unchanged, so the area is unchanged.",
          "Matches this with the rule that adding a multiple of one row or column to another leaves the determinant unchanged. A clear explanation earns full credit.",
        ],
      },
    },
    {
      key: "ortho",
      rung: "stretch",
      prompt: (
        <p>
          Hadamard&rsquo;s inequality says that |det A| is at most the product of the lengths of the columns of A. Explain
          why this is plausible geometrically, and when equality holds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Interprets |det A| as the volume of the box spanned by the columns.",
          "Argues that a box with given edge lengths has the largest volume when the edges are perpendicular, since tilting reduces the heights.",
          "States that equality holds when the columns are orthogonal, or one is zero. A good geometric explanation earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the absolute value of the determinant is an area or volume, what its sign means, how a linear map scales the volume of any region by |det A|, and why det A = 0 means the map flattens space.",

  glimpse: (
    <p>
      Eigenvalues, next, multiply to give the determinant. The last chapter treats every matrix as a transformation, and
      Multivariable Calculus uses the Jacobian determinant to change variables in integrals.
    </p>
  ),
};
